import { projects } from "@/config/projects";
import Link from "next/link";
import { ProjectItem } from "./project-item";

export function ProjectsSection() {
  const featuredProjects = projects.slice(0, 5);

  return (
    <section aria-labelledby="featured-projects-heading">
      <div className="mb-6 flex items-center justify-between">
        <h2
          id="featured-projects-heading"
          className="text-sm font-normal tracking-wide"
        >
          Projects
        </h2>

        <Link
          href="/projects"
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          All projects
        </Link>
      </div>

      <div className="flex flex-col gap-7">
        {featuredProjects.map((project) => (
          <ProjectItem key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
