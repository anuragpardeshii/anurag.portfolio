import { HeroActions } from "@/components/client/HeroActions";
import { siteConfig } from "@/lib/config";

export function Hero() {
  return (
    <>
      <div className="hero-enter mb-9 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-500 shadow-sm sm:text-sm">
        <span className="h-2 w-2 shrink-0 rounded-full bg-green-400" aria-hidden="true" />
        {siteConfig.availability.details}
      </div>

      <div className="hero-enter">
        <h1>
          <span className="hero-headline">{siteConfig.tagline}</span>
          <span className="hero-sub block">{siteConfig.taglineAccent}</span>
        </h1>
      </div>

      <p className="hero-enter mt-6 max-w-xl text-base leading-relaxed text-gray-500 sm:text-lg">
        {siteConfig.bio}
      </p>

      {/* Agent-readable descriptive content - visually hidden, server-rendered */}
      <div className="sr-only">
        <h2>About {siteConfig.name}</h2>
        <p>
          {siteConfig.name} is a software engineer based in {siteConfig.location}.
          {" "}{siteConfig.bio}
        </p>
        <h2>Technical Expertise and Stack</h2>
        <p>
          His tech stack includes {siteConfig.techStack.join(", ")}.
        </p>
        <h2>Featured Engineering Projects</h2>
        <p>
          Recent projects include Stretus, an AI-assisted strategy platform,
          and TeethFast, a digital dental lab platform.
        </p>
        <h2>Contact</h2>
        <p>
          Reach out via {siteConfig.email} or {siteConfig.alternativeEmail}.
        </p>
      </div>

      <div className="hero-enter mt-8 flex flex-wrap items-center justify-center gap-2">
        {siteConfig.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-[13px] font-medium text-gray-700 transition-colors hover:border-blue-500 hover:text-blue-500"
          >
            {tech}
          </span>
        ))}
      </div>

      <HeroActions />
    </>
  );
}
