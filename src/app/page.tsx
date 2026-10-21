import { ContactSection, SiteFooter } from "@/components/ContactSection";
import { AvailabilityCard, StickyNote } from "@/components/DecorativeCards";
import { ExperienceCard } from "@/components/ExperienceCard";
import { Hero } from "@/components/Hero";
import { RecentProjectsCard } from "@/components/RecentProjectsCard";
import { TechStackCard } from "@/components/TechStackCard";

export default function Home() {
  return (
    <main>
      <section className="dotted-bg relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-20">
        <StickyNote />
        <AvailabilityCard />
        <TechStackCard />
        <div className="relative z-10 flex max-w-3xl flex-col items-center text-center">
          <Hero />
        </div>
        <ExperienceCard />
        <RecentProjectsCard />
      </section>

      <ContactSection />
      <SiteFooter />
    </main>
  );
}
