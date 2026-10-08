import { Project } from "@/config/projects";
import Link from "next/link";

type ProjectItemProps = {
  project: Project;
};

export function ProjectItem({ project }: ProjectItemProps) {
  return (
    <article className="group">
      <h3 className="text-base leading-6 ">{project.title}</h3>

      <p className="mt-1 max-w-[34rem] text-sm leading-6 text-muted-foreground">
        {project.description}
      </p>

      <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
        <Link
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground hover:underline underline-offset-2"
        >
          Github
        </Link>

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-foreground hover:underline underline-offset-3"
          >
            Live
          </a>
        )}
      </div>
    </article>
  );
}
