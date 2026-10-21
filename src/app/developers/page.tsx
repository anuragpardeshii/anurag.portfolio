import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `Developer Resources - ${siteConfig.name}`,
  description: `Projects and machine-readable resources from ${siteConfig.name}.`,
  alternates: { canonical: "/developers" },
};

export default function DevelopersPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
        {siteConfig.name} Developer Resources
      </h1>

      <p className="mb-8 leading-relaxed text-gray-600">
        Explore recent projects, source code, and machine-readable information
        about this portfolio.
      </p>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">Projects</h2>
        <div className="space-y-4">
          {siteConfig.projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border border-gray-100 bg-white p-4 transition-all hover:border-blue-200 hover:shadow-sm"
            >
              <p className="font-semibold text-gray-800">{project.name} &rarr;</p>
              <p className="mt-1 text-sm text-gray-500">{project.description}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">
          Machine-Readable Resources
        </h2>
        <ul className="space-y-3 text-sm leading-relaxed text-gray-600">
          <li className="rounded-xl border border-gray-100 bg-white p-4">
            <a href="/llms.txt" className="font-semibold text-blue-500 hover:underline">/llms.txt</a>
            <p>Overview of the portfolio, projects, and contact details.</p>
          </li>
          <li className="rounded-xl border border-gray-100 bg-white p-4">
            <a href="/openapi.json" className="font-semibold text-blue-500 hover:underline">/openapi.json</a>
            <p>OpenAPI description of the public Markdown endpoint.</p>
          </li>
          <li className="rounded-xl border border-gray-100 bg-white p-4">
            <strong className="text-gray-800">Content negotiation</strong>
            <p>Request a page with <code>Accept: text/markdown</code> for its Markdown representation.</p>
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">GitHub</h2>
        <a
          href={siteConfig.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-blue-200"
        >
          Visit {siteConfig.github.replace("https://", "")} &rarr;
        </a>
      </section>

      <div className="border-t border-gray-100 pt-6">
        <Link href="/" className="text-sm font-medium text-blue-500 hover:text-blue-600">
          &larr; Back to home
        </Link>
      </div>
    </main>
  );
}
