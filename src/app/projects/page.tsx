import { projects } from "@/config/projects";
import { ProjectItem } from "@/components/projects/project-item";
import { HeroHeader } from "@/components/hero-header";

export default function ProjectsPage() {
  return (
    <div className="pb-12">
      <HeroHeader
        title="Projects"
        description=" Things I've built and shipped."
      />

      <section className="mt-12">
        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <ProjectItem key={project.title} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
