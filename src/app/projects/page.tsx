import { EmptyState } from "@/components/empty-state";
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
        description="Things I've built and am working on."
      />

      <section className="mt-10">
        {projects.length > 0 ? (
          <div className="flex flex-col gap-8">
            {projects.map((project) => (
              <ProjectItem key={project.title} project={project} />
            ))}
          </div>
        ) : (
          <EmptyState>
            <p>
              I&apos;m currently building and refining projects before adding
              them here. PeerDrop is my current focus: a browser-to-browser file
              transfer project built with WebRTC, WebSockets, and Redis.
            </p>

            <p>
              I&apos;ll publish projects here as their demos and detailed case
              studies are ready.
            </p>
          </EmptyState>
        )}
      </section>
    </div>
  );
}
