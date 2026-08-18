import { Icons } from "@/components/ui/icons";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";

interface ProjectCardProp {
  title: string;
  description: string;
  impact?: string;
  stars?: number;
  liveLink?: string;
  githubLink?: string;
}
export default function ProjectCard({
  description,
  title,
  impact,
  githubLink,
  liveLink,
  stars,
}: ProjectCardProp) {
  return (
    <div className="border-b border-border py-6">
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="min-w-0 text-foreground font-semibold">{title}</h3>
        {impact && (
          <span className="shrink-0 text-xs font-medium text-zinc-700 dark:text-zinc-300">
            {impact}
          </span>
        )}
      </div>

      <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-foreground">
        {liveLink && (
          <Link
            href={liveLink}
            target="_blank"
            rel="noopener"
            className="flex items-center gap-1"
          >
            Live <ExternalLinkIcon size={12} />
          </Link>
        )}

        <div className="size-1 rounded-full bg-muted-foreground" />

        {githubLink && (
          <Link
            href={githubLink}
            target="_blank"
            rel="noopener"
            aria-label={`${title} on GitHub`}
            className="inline-flex text-foreground transition-colors hover:text-muted-foreground items-center gap-1.5"
          >
            <Icons.github />
            {typeof stars === "number" && stars > 0 && (
              <span>{stars.toLocaleString()}</span>
            )}
          </Link>
        )}
      </div>
    </div>
  );
}
