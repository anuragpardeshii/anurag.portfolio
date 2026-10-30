import Image from "next/image";
import { siteConfig } from "@/lib/config";

export function ExperienceCard() {
  const { experience } = siteConfig;

  return (
    <div className="relative z-10 mt-8 w-full max-w-sm lg:absolute lg:top-8 lg:right-16 lg:mt-0 lg:w-64">
      <a
        href={experience.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${experience.duration} at ${experience.company}, ${experience.role}. Opens company LinkedIn page.`}
        className="floating-card block rounded-2xl border border-gray-100 bg-white p-4 shadow-lg transition-shadow hover:shadow-xl focus-visible:outline-2 focus-visible:outline-blue-500"
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Experience
        </p>
        <p className="text-lg font-bold text-gray-900">{experience.duration}</p>
        <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-gray-800">
          <Image
            src="/imentus-logo.ico"
            alt=""
            width={24}
            height={24}
            unoptimized
            className="size-6 shrink-0 object-contain"
          />
          <span>{experience.company} <span aria-hidden="true">&rarr;</span></span>
        </p>
        <p className="mt-1 text-xs text-gray-500">{experience.role}</p>
        <p className="mt-1 text-xs text-gray-400">{experience.period}</p>
      </a>
    </div>
  );
}
