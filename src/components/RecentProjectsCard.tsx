import Link from "next/link";
import { siteConfig } from "@/lib/config";

export function RecentProjectsCard() {
  return (
    <div className="relative z-10 mt-10 w-full max-w-sm md:absolute md:right-10 md:bottom-16 md:mt-0 md:w-fit">
      <div className="floating-card w-full rounded-2xl border border-gray-100 bg-white p-4 shadow-lg md:w-56">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Recent Projects
        </p>
        <div className="space-y-3">
          {siteConfig.projects.slice(0, 3).map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition-opacity hover:opacity-80 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-blue-500"
            >
              <p className="text-xs font-semibold text-gray-800">{project.name}</p>
              <p className="mt-0.5 text-[10px] text-gray-500">{project.tags[0]}</p>
            </a>
          ))}
        </div>
        <Link
          href="/projects"
          className="mt-4 inline-flex text-xs font-semibold text-blue-600 hover:underline focus-visible:outline-2 focus-visible:outline-blue-500"
        >
          View all {siteConfig.projects.length} projects <span aria-hidden="true" className="ml-1">↗</span>
        </Link>
      </div>
    </div>
  );
}
