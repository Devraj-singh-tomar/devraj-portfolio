import { SystemDesign } from "@/types/engineering";
import Link from "next/link";
import { Icons } from "../ui/icons";
import { ExternalLinkIcon } from "lucide-react";

interface SystemDesignItemProps {
  systemDesign: SystemDesign;
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

function formatStatus(status: SystemDesign["status"]) {
  return status.toUpperCase();
}

export default function SystemDesignItem({
  systemDesign,
}: SystemDesignItemProps) {
  return (
    <article className="border-b border-border py-6">
      <div className="space-y-5">
        <div className="flex items-center gap-4">
          <span className="text-xs font-medium uppercase tracking-wide text-zinc-500">
            {formatStatus(systemDesign.status)}
          </span>

          <span className="text-xs text-zinc-500">
            {formatDate(systemDesign.date)}
          </span>
        </div>

        <div className="space-y-2">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            {systemDesign.title}
          </h2>
          <p className="max-w-2xl text-sm text-muted-foreground">
            {systemDesign.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {systemDesign.technologies.map((technology) => (
            <span key={technology} className="text-xs text-zinc-500">
              {technology}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {systemDesign.github && (
              <Link
                href={systemDesign.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-foreground transition-colors hover:text-muted-foreground"
              >
                <Icons.github />
              </Link>
            )}

            {systemDesign.demo && (
              <Link
                href={systemDesign.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs flex items-center gap-1 text-foreground transition-colors hover:text-muted-foreground"
              >
                Live <ExternalLinkIcon size={12} />
              </Link>
            )}
          </div>

          <Link
            href={`${systemDesign.url}`}
            target="_blank"
            className="text-xs text-foreground transition-colors hover:text-muted-foreground"
          >
            Read design →
          </Link>
        </div>
      </div>
    </article>
  );
}
