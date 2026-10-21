import { siteConfig } from "@/lib/config";

export function RecentProjectsCard() {
  return (
    <div className="relative z-10 mt-10 w-full max-w-sm md:absolute md:right-10 md:bottom-16 md:mt-0 md:w-fit">
      <div className="floating-card w-full rounded-2xl border border-gray-100 bg-white p-4 shadow-lg md:w-56">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Recent Projects
        </p>
        <div className="space-y-3">
          {siteConfig.projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start justify-between gap-2 transition-opacity hover:opacity-80 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-blue-500"
            >
              <div>
                <p className="text-xs font-semibold text-gray-800">{project.name}</p>
                <p className="mt-0.5 text-xs text-gray-400">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
