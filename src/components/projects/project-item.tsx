import { Project } from "@/config/projects";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

type ProjectItemProps = {
  project: Project;
};

export function ProjectItem({ project }: ProjectItemProps) {
  return (
    <article className="group">
      <h3 className="text-sm leading-5">{project.title}</h3>

      <p className="mt-1 max-w-[34rem] text-sm leading-5.5 text-muted-foreground">
        {project.description}
      </p>

      <div className="mt-2.5 flex items-center gap-3.5 text-sm text-muted-foreground">
        <Link
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground"
        >
          <FaGithub className="size-4" />
        </Link>

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-foreground"
          >
            Live
          </a>
        )}
      </div>
    </article>
  );
}
