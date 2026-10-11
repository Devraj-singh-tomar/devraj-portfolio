import Link from "next/link";
import { projects } from "@/config/projects";
import { ProjectItem } from "./project-item";

export function ProjectsSection() {
  const featuredProjects = projects.slice(0, 5);

  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-base font-normal">Projects</h2>

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
