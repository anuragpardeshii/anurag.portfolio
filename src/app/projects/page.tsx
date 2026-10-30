import type { Metadata } from "next";
import Link from "next/link";
import { ProjectsGallery } from "@/components/client/ProjectsGallery";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `Projects - ${siteConfig.name}`,
  description: `Explore ${siteConfig.name}'s projects, with homepage previews and links to the live sites.`,
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-20">
      <header className="mb-8">
        <h1 className="text-gray-900">
          <span className="mb-6 block text-3xl font-bold tracking-tight md:text-4xl">Projects</span>
        </h1>
        <p className="leading-relaxed text-gray-600">
          A selection of things I’ve built. Select a project to see its homepage
          and explore the live site.
        </p>
      </header>

      <ProjectsGallery />

      <div className="mt-8 border-t border-gray-100 pt-6">
        <Link href="/" className="text-sm font-medium text-blue-500 hover:text-blue-600">
          &larr; Back to home
        </Link>
      </div>
    </main>
  );
}
