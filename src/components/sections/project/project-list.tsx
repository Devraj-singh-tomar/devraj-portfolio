import ProjectCard from "@/components/projects/project-card";
import { projects } from "@/data/projects";

interface ProjectListProps {
  featuredOnly?: boolean;
}

export default function ProjectList({
  featuredOnly = false,
}: ProjectListProps) {
  const visibleProjects = featuredOnly
    ? projects.filter((project) => project.featured)
    : projects;

  return (
    <>
      {visibleProjects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </>
  );
}
