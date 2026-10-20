import { HeroHeader } from "@/components/hero-header";
import { ProjectItem } from "@/components/projects/project-item";
import { projects } from "@/config/projects";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Projects",
  description:
    "Explore software projects by Devraj Singh Tomar, including full-stack applications, real-time systems, and experiments with modern web technologies.",
  path: "/projects",
});

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
