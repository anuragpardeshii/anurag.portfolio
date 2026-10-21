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
