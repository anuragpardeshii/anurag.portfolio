import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-20">
      <div className="mx-auto max-w-lg text-center">
        <h1
          className="mb-4 text-6xl font-extrabold text-gray-900"
          style={{ letterSpacing: "-0.03em" }}
        >
          404
        </h1>
        <p className="mb-2 text-xl font-semibold text-gray-700">
          Page not found
        </p>
        <p className="mb-8 leading-relaxed text-gray-500">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Here are some places you can go instead:
        </p>

        <nav aria-label="Recovery links" className="mb-10">
          <ul className="space-y-2 text-left">
            {[
              { href: "/", label: "Home", desc: "Back to the main page" },
              {
                href: "/about",
                label: "About",
                desc: `Learn about ${siteConfig.name}`,
              },
              {
                href: "/developers",
                label: "Developers",
                desc: "Developer tools and API resources",
              },
              {
                href: "/projects",
                label: "Projects",
                desc: "Browse recent work",
              },
              { href: "/contact", label: "Contact", desc: "Get in touch" },
              {
                href: "/llms.txt",
                label: "llms.txt",
                desc: "Machine-readable site overview",
              },
              {
                href: "/sitemap.xml",
                label: "Sitemap",
                desc: "All pages on this site",
              },
            ].map(({ href, label, desc }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="group flex items-baseline gap-2 rounded-lg border border-gray-100 bg-white px-4 py-3 transition-all hover:border-blue-200 hover:shadow-sm"
                >
                  <span className="font-semibold text-blue-500 group-hover:text-blue-600">
                    {label}
                  </span>
                  <span className="text-sm text-gray-400">- {desc}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>

      {/* Agent-readable recovery content in markdown format */}
      <div className="sr-only">
        <p>
          This URL does not exist on {siteConfig.name}&apos;s portfolio site. To
          find what you are looking for, visit the homepage at
          {siteConfig.siteUrl}/, check the sitemap at
          {siteConfig.siteUrl}/sitemap.xml, or read the machine-readable
          site overview at {siteConfig.siteUrl}/llms.txt. Key pages
          include /about, /projects, /contact, and /privacy.
        </p>
      </div>
    </main>
  );
}
