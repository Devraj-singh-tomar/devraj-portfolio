import Link from "next/link";

interface EngineeringDetailHeaderProps {
  breadcrumb: string;
  type: string;
  title: string;
  description: string;
  metadata?: string;
  technologies?: string[];
  github?: string;
  demo?: string;
}

export default function EngineeringDetailHeader({
  breadcrumb,
  type,
  title,
  description,
  metadata,
  technologies = [],
  github,
  demo,
}: EngineeringDetailHeaderProps) {
  return (
    <header className="border-b border-border pb-10">
      <Link
        href="/engineering"
        className="font-mono text-xs text-zinc-500 transition-colors hover:text-foreground"
      >
        ← {breadcrumb}
      </Link>

      <p className="mt-8 font-mono text-xs font-medium uppercase tracking-[0.12em] text-zinc-500">
        {type}
      </p>

      <h1 className="mt-3 max-w-3xl font-heading text-4xl font-semibold tracking-[-0.03em] text-foreground md:text-5xl lg:text-6xl">
        {title}
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
        {description}
      </p>

      {(metadata || technologies.length > 0) && (
        <div className="mt-8 space-y-3">
          {metadata && (
            <p className="font-mono text-xs text-zinc-500">{metadata}</p>
          )}

          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="font-mono text-xs text-zinc-500"
                >
                  {technology}
                </span>
              ))}
            </div>
          )}
        </div>
      )}

      {(github || demo) && (
        <div className="mt-8 flex flex-wrap items-center gap-5">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-foreground transition-colors hover:text-muted-foreground"
            >
              GitHub ↗
            </a>
          )}

          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-foreground transition-colors hover:text-muted-foreground"
            >
              Live Demo ↗
            </a>
          )}
        </div>
      )}
    </header>
  );
}
