import Link from "next/link";
import ProjectList from "./project-list";

export default function ProjectsPreview() {
  return (
    <section className="-mx-6 border-t border-border px-6 py-10">
      <div className="flex items-baseline justify-between">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Projects
        </h2>
        <Link
          href={"/projects"}
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          All &rarr;
        </Link>
      </div>

      <ProjectList featuredOnly />
    </section>
  );
}
