import { Project } from "@/config/projects";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

type ProjectItemProps = {
  project: Project;
};

export function ProjectItem({ project }: ProjectItemProps) {
  return (
    <article className="group">
      <Link
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm leading-5 hover:underline underline-offset-[2.5px] decoration-wavy"
      >
        {project.title}
      </Link>

      <p className="mt-1 max-w-136 text-sm leading-5.5 text-muted-foreground">
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
          <Link
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:text-foreground"
          >
            Live
          </Link>
        )}
      </div>
    </article>
  );
}
