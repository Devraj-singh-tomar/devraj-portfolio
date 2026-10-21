import { EmptyState } from "@/components/empty-state";
import { ExperienceItem } from "@/components/experience/experience-item";
import { HeroHeader } from "@/components/hero-header";
import { experiences } from "@/config/experience";
import { createPageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = createPageMetadata({
  title: "Experience",
  description:
    "Explore my software development journey, independent projects, and practical work in full-stack development and real-time systems.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <div>
      <HeroHeader
        title="Experience"
        description="My independent development journey."
        //  description="My work so far."
      />

      <section className="mt-10">
        {experiences.length > 0 ? (
          <div className="flex flex-col gap-8">
            {experiences.map((experience) => (
              <ExperienceItem
                key={`${experience.company}-${experience.period}`}
                experience={experience}
              />
            ))}
          </div>
        ) : (
          <EmptyState>
            <p>
              My experience is centered on hands-on software development,
              building full-stack applications and exploring real-time systems,
              AI, and distributed infrastructure.
            </p>

            <p>
              I focus on thoughtful architecture, practical problem-solving, and
              turning technical ideas into well-engineered products. I&apos;m
              continuing to grow through independent projects and the challenges
              of building software.
            </p>

            <p>
              <Link
                href="/projects"
                className="text-foreground hover:underline decoration-wavy underline-offset-[2.5px]"
              >
                Explore my projects
              </Link>{" "}
              to see what I&apos;m working on.
            </p>
          </EmptyState>
        )}
      </section>
    </div>
  );
}
