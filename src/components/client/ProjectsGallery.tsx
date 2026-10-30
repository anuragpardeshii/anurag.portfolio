"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { ProjectPreview } from "@/components/ProjectPreview";
import { featuredProject, projects, type Project } from "@/lib/projects";

const filters = ["All", "Web", "AI"] as const;
type ProjectFilter = (typeof filters)[number];

export function ProjectsGallery({
  initialVisibleCount,
  showFilters = true,
}: {
  initialVisibleCount?: number;
  showFilters?: boolean;
}) {
  const listId = useId();
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const [expanded, setExpanded] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.category === filter,
  );
  const canExpand = initialVisibleCount !== undefined && filteredProjects.length > initialVisibleCount;
  const visibleProjects = canExpand && !expanded
    ? filteredProjects.slice(0, initialVisibleCount)
    : filteredProjects;

  return (
    <section aria-label="Projects">
      {showFilters && (
        <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
          <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setFilter(item);
                  setExpanded(false);
                }}
                aria-pressed={filter === item}
                className={`rounded-lg px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 ${filter === item ? "bg-blue-50 text-blue-600" : "text-gray-500 hover:bg-white hover:text-blue-500"}`}
              >
                {item}
              </button>
            ))}
          </div>
          <p role="status" className="text-xs text-gray-500">
            {visibleProjects.length} {visibleProjects.length === 1 ? "project" : "projects"}
          </p>
        </div>
      )}

      <ul id={listId} className="space-y-3">
        {visibleProjects.map((project) => (
          <li key={project.url}>
            <button
              type="button"
              onClick={() => setSelectedProject(project)}
              aria-label={`Preview ${project.name}`}
              aria-haspopup="dialog"
              className="group grid w-full cursor-pointer grid-cols-[5rem_minmax(0,1fr)] items-start gap-x-3 gap-y-2 rounded-xl border border-gray-100 bg-white p-4 text-left transition-all hover:border-blue-200 hover:shadow-sm focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-x-4"
            >
              <Image
                src={project.preview}
                alt=""
                width={1440}
                height={1000}
                sizes="(min-width: 640px) 128px, 80px"
                className="h-auto w-full rounded-lg border border-gray-100 sm:row-span-3"
              />
              <span className="flex items-start justify-between gap-3 self-center sm:self-start">
                <span className="flex flex-wrap items-center gap-2">
                  <span className="font-semibold text-gray-800">{project.name}</span>
                  {project.url === featuredProject.url && (
                    <span className="rounded-md bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-600">
                      Featured
                    </span>
                  )}
                </span>
                <span aria-hidden="true" className="text-gray-400 transition-colors group-hover:text-blue-500">↗</span>
              </span>
              <span className="col-span-2 block text-sm leading-relaxed text-gray-500 sm:col-span-1">
                {project.description}
              </span>
              <span className="col-span-2 block text-xs font-medium text-blue-500 sm:col-span-1 sm:col-start-2">View preview</span>
            </button>
          </li>
        ))}
      </ul>

      {canExpand && (
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <p role="status" className="text-xs text-gray-500">
            Showing {visibleProjects.length} of {filteredProjects.length} projects
          </p>
          <button
            type="button"
            aria-expanded={expanded}
            aria-controls={listId}
            onClick={() => setExpanded((value) => !value)}
            className="cursor-pointer rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-blue-500 transition-colors hover:border-blue-200 hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2"
          >
            {expanded ? "Show less" : "Show more"}
          </button>
        </div>
      )}

      {selectedProject && (
        <ProjectPreview
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
