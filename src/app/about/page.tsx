import type { Metadata } from "next";
import Link from "next/link";
import { ProjectsGallery } from "@/components/client/ProjectsGallery";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `About - ${siteConfig.name}`,
  description: `Learn about ${siteConfig.name}, a software engineer based in ${siteConfig.location}.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-20">
      <h1 className="text-gray-900">
        <span className="mb-6 block text-3xl font-bold tracking-tight md:text-4xl">
          About {siteConfig.name}
        </span>
      </h1>

      <section className="mb-8">
        <p className="mb-4 leading-relaxed text-gray-600">
          I’m {siteConfig.name}, a software engineer based in {siteConfig.location}.
          {" "}I build scalable products with clean, maintainable code.
        </p>
        <p className="leading-relaxed text-gray-600">
          I enjoy turning ideas into practical software, from intuitive user
          interfaces to the systems that support them.
        </p>
        <a
          href={siteConfig.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="social-link mt-5 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2"
        >
          Connect on LinkedIn <span aria-hidden="true">↗</span>
        </a>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">Experience</h2>
        <a
          href={siteConfig.experience.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl border border-gray-100 bg-white p-4 transition-all hover:border-blue-200 hover:shadow-sm"
        >
          <p className="font-semibold text-gray-800">
            {siteConfig.experience.company} &rarr;
          </p>
          <p className="mt-1 text-sm text-gray-600">{siteConfig.experience.role}</p>
          <p className="mt-1 text-sm text-gray-500">
            {siteConfig.experience.period} · {siteConfig.experience.duration}
          </p>
        </a>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">Projects</h2>
        <ProjectsGallery initialVisibleCount={2} showFilters={false} />
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold text-gray-800">Tech Stack</h2>
        <div className="flex flex-wrap gap-2">
          {siteConfig.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-lg bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      <div className="border-t border-gray-100 pt-6">
        <Link href="/contact" className="text-sm font-medium text-blue-500 hover:text-blue-600">
          Get in touch &rarr;
        </Link>
      </div>
    </main>
  );
}
