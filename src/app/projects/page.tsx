import ProjectList from "@/components/sections/project/project-list";

export default function ProjectsPage() {
  return (
    <section className="-mx-6 border-t border-border px-6 py-10">
      <div className="flex items-baseline justify-between">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Projects
        </h2>
      </div>

      <div className="mt-1">
        <ProjectList />
      </div>
    </section>
  );
}
