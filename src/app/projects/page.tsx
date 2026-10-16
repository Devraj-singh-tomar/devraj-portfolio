import { HeroHeader } from "@/components/hero-header";
import { ProjectItem } from "@/components/projects/project-item";
import { projects } from "@/config/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore full-stack projects focused on real-time systems, AI, and web infrastructure.",
};

export default function ProjectsPage() {
  return (
    <div>
      <HeroHeader
        title="Projects"
        description=" Things I've built and shipped."
      />

      <section className="mt-10">
        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <ProjectItem key={project.title} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
