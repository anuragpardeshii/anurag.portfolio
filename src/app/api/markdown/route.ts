import { NextRequest, NextResponse } from "next/server";
import { getPageMarkdown } from "@/lib/markdown";
import { siteConfig } from "@/lib/config";

export async function GET(req: NextRequest) {
  const pathname = req.nextUrl.searchParams.get("path") || "/";
  const page = getPageMarkdown(pathname);

  const accept = req.headers.get("accept") || "";
  const wantsJson = accept.includes("application/json") || accept.includes("application/problem+json");

  if (!page) {
    // No markdown representation for this path - 404
    const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");

    if (wantsJson) {
      const problem = {
        type: `${baseUrl}/developers#errors`,
        title: "Page Not Found",
        status: 404,
        detail: `The page '${pathname}' does not exist on this site.`,
        code: "page_not_found",
        resolution: "Check /sitemap.xml or /llms.txt for available pages.",
      };
      return new NextResponse(JSON.stringify(problem, null, 2) + "\n", {
        status: 404,
        headers: {
          "Content-Type": "application/problem+json; charset=utf-8",
          Vary: "Accept, Accept-Encoding",
          "RateLimit-Limit": "100",
          "RateLimit-Remaining": "99",
          "RateLimit-Reset": "60",
        },
      });
    }

    const body = `# 404 - Page Not Found

The page \`${pathname}\` does not exist on this site.

## Where to look next

- [Home](${baseUrl}/)
- [About](${baseUrl}/about)
- [Developers](${baseUrl}/developers)
- [Contact](${baseUrl}/contact)
- [llms.txt](${baseUrl}/llms.txt): Machine-readable site overview
- [Sitemap](${baseUrl}/sitemap.xml)
`;
    return new NextResponse(body, {
      status: 404,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        Vary: "Accept, Accept-Encoding",
        "RateLimit-Limit": "100",
        "RateLimit-Remaining": "99",
        "RateLimit-Reset": "60",
      },
    });
  }

  const baseUrl = siteConfig.siteUrl.replace(/\/$/, "");
  const canonicalPath = pathname === "/" ? "/" : pathname;

  if (wantsJson) {
    const jsonBody = {
      path: pathname,
      title: page.title,
      markdown: page.body,
    };
    return new NextResponse(JSON.stringify(jsonBody, null, 2) + "\n", {
      status: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Vary: "Accept, Accept-Encoding",
        "RateLimit-Limit": "100",
        "RateLimit-Remaining": "99",
        "RateLimit-Reset": "60",
        Link: [
          `<${baseUrl}${canonicalPath}>; rel="canonical"`,
          `<${baseUrl}/llms.txt>; rel="describedby"`,
          `<${baseUrl}/openapi.json>; rel="service-desc"`,
        ].join(", "),
      },
    });
  }

  return new NextResponse(page.body, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      Vary: "Accept, Accept-Encoding",
      "RateLimit-Limit": "100",
      "RateLimit-Remaining": "99",
      "RateLimit-Reset": "60",
      Link: [
        `<${baseUrl}${canonicalPath}>; rel="canonical"`,
        `<${baseUrl}/llms.txt>; rel="describedby"`,
        `<${baseUrl}/openapi.json>; rel="service-desc"`,
      ].join(", "),
    },
  });
}
