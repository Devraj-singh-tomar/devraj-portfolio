import { ExperienceItem } from "@/components/experience/experience-item";
import { HeroHeader } from "@/components/hero-header";
import { experiences } from "@/config/experience";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Explore my software development experience, projects, and practical work in full-stack development, real-time systems, and AI.",
};

export default function ExperiencePage() {
  return (
    <div>
      <HeroHeader title="Experience" description="My work so far." />

      <section className="mt-10">
        <div className="flex flex-col gap-8">
          {experiences.map((experience) => (
            <ExperienceItem
              key={`${experience.company}-${experience.period}`}
              experience={experience}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
