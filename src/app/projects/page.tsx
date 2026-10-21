import type { Metadata } from "next";
import Link from "next/link";
import { ProjectsGallery } from "@/components/client/ProjectsGallery";
import { siteConfig } from "@/lib/config";
import { featuredProject } from "@/lib/projects";

export const metadata: Metadata = {
  title: `Projects - ${siteConfig.name}`,
  description: `Explore live projects and sample concepts from ${siteConfig.name}.`,
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-5 py-10 text-slate-900 sm:px-8 sm:py-14">
      <div className="mx-auto max-w-6xl">
        <Link href="/" className="mb-10 inline-flex text-sm font-semibold text-slate-500 hover:text-blue-600">
          &larr; Back to home
        </Link>

        <header className="mb-9 border-l-4 border-blue-500 pl-4">
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Projects</h1>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">
            Live work and a few clearly marked placeholders for what comes next.
          </p>
        </header>

        <section aria-label="Featured project" className="relative mb-10 overflow-hidden rounded-3xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8">
          <div aria-hidden="true" className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl" />
          <div className="relative grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-blue-600">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                Live product
              </span>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">
                {featuredProject.name}
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                AI-assisted strategy infrastructure for brokerages and financial platforms,
                covering strategy creation, validation, and testing.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {featuredProject.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-500">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-start gap-6 lg:items-end">
              <div aria-hidden="true" className="w-full max-w-72 rounded-2xl border border-blue-100 bg-white p-3 shadow-lg shadow-blue-100/70">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <span className="h-2 w-20 rounded-full bg-blue-200" />
                  <span className="h-5 w-5 rounded-full bg-blue-500" />
                </div>
                <div className="mt-3 flex items-end gap-2 rounded-xl bg-blue-50 p-4">
                  <span className="h-8 flex-1 rounded-t bg-blue-200" />
                  <span className="h-14 flex-1 rounded-t bg-blue-300" />
                  <span className="h-11 flex-1 rounded-t bg-blue-400" />
                  <span className="h-20 flex-1 rounded-t bg-blue-500" />
                  <span className="h-16 flex-1 rounded-t bg-blue-300" />
                </div>
                <div className="mt-3 flex gap-2">
                  <span className="h-2 w-20 rounded-full bg-slate-100" />
                  <span className="h-2 w-12 rounded-full bg-slate-100" />
                </div>
              </div>
              <a
                href={featuredProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-600 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2"
              >
                Visit Stretus <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <ProjectsGallery />
      </div>
    </main>
  );
}
