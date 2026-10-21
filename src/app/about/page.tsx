import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: `About - ${siteConfig.name}`,
  description: `Learn about ${siteConfig.name}, a software engineer based in ${siteConfig.location}.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
        About {siteConfig.name}
      </h1>

      <section className="mb-8">
        <p className="mb-4 leading-relaxed text-gray-600">
          {siteConfig.name} is a software engineer based in {siteConfig.location}.
          {" "}{siteConfig.bio}
        </p>
        <p className="leading-relaxed text-gray-600">
          I enjoy turning ideas into software solutions, from user-facing
          experiences to the systems that support them.
        </p>
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
        <div className="space-y-3">
          {siteConfig.projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl border border-gray-100 bg-white p-4 transition-all hover:border-blue-200 hover:shadow-sm"
            >
              <p className="font-semibold text-gray-800">{project.name} &rarr;</p>
              <p className="mt-1 text-sm leading-relaxed text-gray-500">
                {project.description}
              </p>
            </a>
          ))}
        </div>
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
