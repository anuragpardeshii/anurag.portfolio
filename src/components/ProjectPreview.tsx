"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import type { Project } from "@/lib/projects";

export function ProjectPreview({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="project-preview-title"
      aria-describedby="project-preview-description"
      onClose={() => {
        if (!dialogRef.current?.open) onClose();
      }}
      onKeyDown={(event) => {
        if (event.key !== "Tab") return;

        const controls = event.currentTarget.querySelectorAll<HTMLElement>(
          "button:not([disabled]), a[href]",
        );
        const firstControl = controls[0];
        const lastControl = controls[controls.length - 1];

        if (event.shiftKey && document.activeElement === firstControl) {
          event.preventDefault();
          lastControl.focus();
        } else if (!event.shiftKey && document.activeElement === lastControl) {
          event.preventDefault();
          firstControl.focus();
        }
      }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (
          event.clientX < bounds.left || event.clientX > bounds.right ||
          event.clientY < bounds.top || event.clientY > bounds.bottom
        ) {
          event.currentTarget.close();
        }
      }}
      className="fixed inset-0 m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-4xl overflow-hidden rounded-2xl border border-gray-200 bg-white p-0 text-gray-900 shadow-xl backdrop:bg-gray-900/50"
    >
      <div className="flex max-h-[calc(100dvh-2rem)] flex-col">
        <div className="flex shrink-0 items-start justify-between gap-4 p-5 sm:p-6">
          <div className="min-w-0">
            <h2 id="project-preview-title" className="text-xl font-bold text-gray-900 sm:text-2xl">
              {project.name}
            </h2>
            <p className="mt-1 break-all text-xs text-gray-500 sm:text-sm">
              {new URL(project.url).hostname}
            </p>
          </div>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close project preview"
            className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-colors hover:border-blue-200 hover:text-blue-500 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2"
          >
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
        </div>
        <div className="min-h-0 overflow-y-auto overscroll-contain px-5 pb-5 sm:px-6 sm:pb-6">
          <p id="project-preview-description" className="mb-5 text-sm leading-relaxed text-gray-600">
            {project.description}
          </p>
          <Image
            src={project.preview}
            alt={`${project.name} front page`}
            width={1440}
            height={1000}
            sizes="(max-width: 895px) 100vw, 846px"
            loading="eager"
            className="h-auto w-full rounded-xl border border-gray-100"
          />
        </div>
        <div className="flex shrink-0 flex-wrap items-center justify-between gap-4 border-t border-gray-100 p-5 sm:p-6">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-lg bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600">
                {tag}
              </span>
            ))}
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${project.name} live site (opens in a new tab)`}
            className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-600 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2"
          >
            Visit live site <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </dialog>
  );
}
