import { ExperienceItem } from "@/components/experience/experience-item";
import { HeroHeader } from "@/components/hero-header";
import { experiences } from "@/config/experience";

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
