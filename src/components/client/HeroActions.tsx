"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/config";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function ProjectsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}

export function HeroActions() {
  const scrollToContact = () => {
    document
      .getElementById("contact-email")
      ?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="hero-enter mt-10 flex flex-row flex-wrap items-center justify-center gap-3">
      <button
        type="button"
        onClick={scrollToContact}
        className="inline-flex items-center justify-center rounded-full bg-blue-500 px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_4px_14px_rgba(59,130,246,0.4)] transition-colors hover:bg-blue-600 hover:shadow-[0_8px_20px_rgba(59,130,246,0.45)] sm:px-9"
      >
        Get in Touch
      </button>
      <Link
        href="/projects"
        className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3.5 text-[15px] font-semibold text-gray-700 shadow-sm transition-colors hover:border-gray-700 hover:shadow-md sm:px-7"
      >
        <ProjectsIcon />
        Projects
      </Link>
      <a
        href={siteConfig.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3.5 text-[15px] font-semibold text-gray-700 shadow-sm transition-colors hover:border-gray-700 hover:shadow-md sm:px-7"
      >
        <GitHubIcon />
        GitHub
      </a>
      <span className="contents md:flex md:w-full md:justify-center xl:contents">
        <a
          href={siteConfig.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-6 py-3.5 text-[15px] font-semibold text-gray-700 shadow-sm transition-colors hover:border-gray-700 hover:shadow-md focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 sm:px-7"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          LinkedIn
        </a>
      </span>
    </div>
  );
}
