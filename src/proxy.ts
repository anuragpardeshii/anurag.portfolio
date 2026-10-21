import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "@/lib/config";

// --- Content types this site can produce --------------------------
const PRODUCES = ["text/html", "text/markdown"];

// --- Accept header parsing (RFC 9110 Section 12.5.1) --------------
type AcceptEntry = { type: string; q: number; specificity: number };

function parseAccept(header: string): AcceptEntry[] {
  return header.split(",").map((raw) => {
    const parts = raw.trim().split(";").map((s) => s.trim());
    const type = parts[0].toLowerCase();
    let q = 1;
    for (const param of parts.slice(1)) {
      const [name, value] = param.split("=").map((s) => s.trim());
      if (name === "q") {
        const parsed = Number(value);
        if (!Number.isNaN(parsed)) q = Math.max(0, Math.min(1, parsed));
      }
    }
    const specificity = type === "*/*" ? 0 : type.endsWith("/*") ? 1 : 2;
    return { type, q, specificity };
  });
}

function matches(entry: AcceptEntry, candidate: string): boolean {
  if (entry.type === "*/*") return true;
  if (entry.type.endsWith("/*"))
    return candidate.startsWith(entry.type.slice(0, -1));
  return entry.type === candidate;
}

function preferredType(header: string | null): string | null {
  if (!header) return PRODUCES[0];
  const entries = parseAccept(header);
  if (entries.length === 0) return PRODUCES[0];

  let bestType: string | null = null;
  let bestQ = -1;
  let bestPosition = Infinity;

  for (const candidate of PRODUCES) {
    let matched: AcceptEntry | null = null;
    let matchedPosition = Infinity;
    for (let idx = 0; idx < entries.length; idx++) {
      const e = entries[idx];
      if (!matches(e, candidate)) continue;
      if (
        matched === null ||
        e.specificity > matched.specificity ||
        (e.specificity === matched.specificity && idx < matchedPosition)
      ) {
        matched = e;
        matchedPosition = idx;
      }
    }
    if (matched === null) continue;
    const matchedQ: number = matched.q;
    if (matchedQ <= 0) continue; // explicit rejection

    if (
      matchedQ > bestQ ||
      (matchedQ === bestQ && matchedPosition < bestPosition)
    ) {
      bestQ = matchedQ;
      bestPosition = matchedPosition;
      bestType = candidate;
    }
  }

  return bestType;
}

// --- Vary header helper -------------------------------------------
function appendVaryAccept(headers: Headers): void {
  const existing = headers.get("Vary");
  if (!existing) {
    headers.set("Vary", "Accept");
    return;
  }
  const tokens = existing.split(",").map((s) => s.trim().toLowerCase());
  if (!tokens.includes("accept")) {
    headers.set("Vary", `${existing}, Accept`);
  }
}

// --- Paths that should bypass negotiation -------------------------
const SKIP_RE =
  /^\/(api\/|_next\/|icon\.png|og-image\.png|favicon\.ico|llms\.txt|openapi\.json|sitemap\.xml|robots\.txt)/;

// --- Proxy (Next.js 16 convention, formerly middleware) ------------
export function proxy(req: NextRequest) {
  const pathname = req.nextUrl.pathname;

  // Skip static assets, API routes, and Next.js internals
  if (SKIP_RE.test(pathname)) {
    return NextResponse.next();
  }

  const accept = req.headers.get("accept");
  const chosen = preferredType(accept);

  // 406 - none of our types match what the client will accept
  if (chosen === null) {
    const errorBody = {
      type: `${siteConfig.siteUrl.replace(/\/$/, "")}/developers#not-acceptable`,
      title: "Not Acceptable",
      status: 406,
      detail: "The requested representation is not supported. Supported types: text/html, text/markdown",
      code: "not_acceptable",
      resolution: "Include 'text/html' or 'text/markdown' in your Accept header.",
    };
    return new NextResponse(JSON.stringify(errorBody, null, 2) + "\n", {
      status: 406,
      headers: {
        "Content-Type": "application/problem+json; charset=utf-8",
        Vary: "Accept",
      },
    });
  }

  // Markdown requested -> rewrite to the API route handler
  if (chosen === "text/markdown") {
    const url = req.nextUrl.clone();
    url.pathname = "/api/markdown";
    url.searchParams.set("path", pathname);
    const res = NextResponse.rewrite(url);
    appendVaryAccept(res.headers);
    return res;
  }

  // HTML (default) - continue to Next.js page rendering
  const res = NextResponse.next({
    headers: { Vary: "Accept" },
  });
  return res;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization)
     * - favicon.ico
     */
    "/((?!_next/static|_next/image|favicon\\.ico).*)",
  ],
};
