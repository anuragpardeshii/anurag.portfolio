"use client";

import { useState } from "react";
import { galleryProjects, type GalleryProject } from "@/lib/projects";

const filters = ["All", "Backend", "Web"] as const;
type ProjectFilter = (typeof filters)[number];

function ProjectPreview({ variant }: { variant: GalleryProject["preview"] }) {
  if (variant === "signal") {
    return (
      <div aria-hidden="true" className="flex h-28 w-full flex-col justify-center gap-2 overflow-hidden rounded-xl bg-slate-900 px-5 shadow-inner sm:h-24 sm:w-40">
        <span className="h-1 w-12 rounded-full bg-emerald-400" />
        <span className="h-1 w-24 rounded-full bg-slate-500" />
        <span className="h-1 w-16 rounded-full bg-sky-400" />
        <span className="h-1 w-20 rounded-full bg-slate-600" />
      </div>
    );
  }

  if (variant === "workspace") {
    return (
      <div aria-hidden="true" className="flex h-28 w-full overflow-hidden rounded-xl border border-violet-100 bg-violet-50 shadow-inner sm:h-24 sm:w-40">
        <div className="w-9 bg-violet-500 p-2"><span className="block h-2 w-2 rounded-full bg-white/80" /></div>
        <div className="flex-1 space-y-2 p-3">
          <span className="block h-2 w-16 rounded-full bg-violet-300" />
          <span className="block h-5 w-full rounded bg-white" />
          <span className="block h-5 w-4/5 rounded bg-white" />
        </div>
      </div>
    );
  }

  if (variant === "chain") {
    return (
      <div aria-hidden="true" className="flex h-28 w-full items-center justify-center gap-1 overflow-hidden rounded-xl bg-gradient-to-br from-indigo-100 via-white to-cyan-100 shadow-inner sm:h-24 sm:w-40">
        <span className="h-8 w-8 rounded-xl border-2 border-indigo-300 bg-white shadow-sm" />
        <span className="h-0.5 w-5 bg-indigo-300" />
        <span className="h-10 w-10 rounded-xl border-2 border-blue-400 bg-white shadow-sm" />
        <span className="h-0.5 w-5 bg-blue-300" />
        <span className="h-8 w-8 rounded-xl border-2 border-cyan-300 bg-white shadow-sm" />
      </div>
    );
  }

  return (
    <div aria-hidden="true" className="h-28 w-full overflow-hidden rounded-xl border border-sky-100 bg-white shadow-inner sm:h-24 sm:w-40">
      <div className="flex h-5 items-center gap-1 border-b border-sky-100 bg-sky-50 px-2">
        <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
        <span className="h-1.5 w-1.5 rounded-full bg-sky-200" />
        <span className="ml-2 h-1 w-12 rounded-full bg-sky-200" />
      </div>
      <div className="flex gap-2 p-2">
        <div className="h-14 w-8 rounded bg-sky-100" />
        <div className="flex-1 space-y-1.5">
          <span className="block h-2 w-16 rounded bg-sky-200" />
          <span className="block h-3 w-full rounded bg-slate-100" />
          <span className="block h-3 w-4/5 rounded bg-slate-100" />
        </div>
      </div>
    </div>
  );
}

export function ProjectsGallery() {
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const visibleProjects = galleryProjects.filter(
    (project) => filter === "All" || project.category === filter,
  );

  return (
    <section aria-label="Project gallery">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
        <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              aria-pressed={filter === item}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 ${filter === item ? "bg-blue-500 text-white shadow-sm" : "border border-slate-200 bg-white text-slate-500 hover:border-blue-200 hover:text-blue-600"}`}
            >
              {item}
            </button>
          ))}
        </div>
        <p className="text-xs font-medium text-slate-400">
          {visibleProjects.length} {visibleProjects.length === 1 ? "project" : "projects"} below
        </p>
      </div>

      <div className="space-y-3" aria-live="polite">
        {visibleProjects.map((project, index) => (
          <article
            key={project.name}
            className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:grid-cols-[2rem_10rem_minmax(0,1fr)] sm:items-center sm:gap-5 sm:p-5"
          >
            <span className="hidden self-start pt-2 text-xs font-medium text-slate-400 sm:block">
              {String(index + 1).padStart(2, "0")}
            </span>
            <ProjectPreview variant={project.preview} />
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h2 className="text-base font-bold text-slate-900">{project.name}</h2>
                <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${project.status === "Live project" ? "bg-blue-50 text-blue-600" : "bg-amber-50 text-amber-700"}`}>
                  {project.status}
                </span>
              </div>
              <p className="mt-1 text-xs font-medium text-slate-400">
                {project.category} · {project.tags.join(" · ")}
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
                {project.description}
              </p>
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:underline focus-visible:outline-2 focus-visible:outline-blue-500"
                >
                  Visit site <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <p className="mt-3 text-xs font-medium text-slate-400">Project link coming later</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
