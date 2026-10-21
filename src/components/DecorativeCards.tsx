import { siteConfig } from "@/lib/config";

export function StickyNote() {
  return (
    <div className="pointer-events-none absolute top-12 left-6 z-0 hidden w-fit sm:block md:left-16">
      <div
        className="floating-card relative w-44 rounded-lg p-4 leading-snug shadow-md"
        style={{
          background: "#fef08a",
          fontFamily: "var(--font-caveat), cursive",
          fontSize: "15px",
          color: "#374151",
          transform: "rotate(-3deg)",
        }}
      >
        <div
          className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full"
          style={{ background: "#ef4444" }}
        />
        {siteConfig.stickyNote}
      </div>
    </div>
  );
}

export function AvailabilityCard() {
  return (
    <div className="relative z-10 mt-6 lg:pointer-events-none lg:absolute lg:top-44 lg:left-6 lg:mt-0 xl:left-16">
      <div className="floating-card inline-flex items-center gap-3 rounded-2xl border border-green-100 bg-green-50 px-4 py-3 shadow-lg">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-500 text-white">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5"
            aria-hidden="true"
          >
            <rect x="3" y="7" width="18" height="14" rx="2" />
            <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12a20 20 0 0 0 18 0M10 13v2h4v-2" />
          </svg>
        </span>
        <span className="text-left">
          <span className="block text-[13px] font-bold leading-tight text-green-900">
            {siteConfig.availability.title}
          </span>
          <span className="mt-0.5 block text-xs font-medium leading-tight text-green-700">
            {siteConfig.availability.preference}
          </span>
        </span>
      </div>
    </div>
  );
}
