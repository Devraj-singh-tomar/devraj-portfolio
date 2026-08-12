import { projects } from "@/data/projects";
import ProjectCard from "./project-card";

export default function HomeProjects() {
  return (
    <div className="mt-1">
      {projects.map((p) => (
        <ProjectCard key={p.id} {...p} />
      ))}
    </div>
  );
}
