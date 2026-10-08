import Link from "next/link";
import { projects } from "@/config/projects";
import { ProjectItem } from "./project-item";

export function ProjectsSection() {
  const featuredProjects = projects.slice(0, 5);

  return (
    <section className="mt-16">
      <div className="mb-7 flex items-baseline justify-between">
        <h2 className="text-base font-normal">Projects</h2>

        <Link
          href="/projects"
          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          All projects
        </Link>
      </div>

      <div className="flex flex-col gap-8">
        {featuredProjects.map((project) => (
          <ProjectItem key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
