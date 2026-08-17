import { Icons } from "@/components/ui/icons";
import { openSourceContributions } from "@/data/open-source";
import { cn } from "@/lib/utils";
import { OpenSourceContribution } from "@/types/experience";
import Link from "next/link";

export default function OpenSourceExperience() {
  return (
    <div>
      {openSourceContributions.map((contribution) => (
        <OpenSourceExperienceItem
          key={contribution.id}
          contribution={contribution}
        />
      ))}
    </div>
  );
}

type OpenSourceExperienceType = {
  contribution: OpenSourceContribution;
};

function OpenSourceExperienceItem({ contribution }: OpenSourceExperienceType) {
  const referenceLabel =
    contribution.reference.type === "pull-request" ? "PR" : "Issue";

  return (
    <article className="border-b border-border py-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <p className="text-foreground text-sm font-semibold">
            {contribution.repository.name}
          </p>

          <p className="text-muted-foreground text-xs">
            {contribution.repository.owner}
          </p>
        </div>

        <span
          className={cn("capitalize relative text-xs text-muted-foreground")}
        >
          <span
            className={cn(
              `${contribution.status === "merged" ? "bg-emerald-500/80" : contribution.status === "closed" ? "bg-rose-500/80" : "bg-sky-500/80"}`,
              "absolute size-2 rounded-full -left-4 translate-y-1/2 animate-pulse",
            )}
          />
          {contribution.status}
        </span>
      </div>

      <p className="uppercase text-xs tracking-wider text-muted-foreground mt-5">
        {contribution.contribution.type}
      </p>

      <h3 className="text-base text-foreground/85 mt-0.5 font-medium">
        {contribution.contribution.title}
      </h3>

      <p className="text-xs mt-1 text-muted-foreground line-clamp-2">
        {contribution.contribution.description}
      </p>

      <div className="flex items-center mt-5 justify-between">
        <span className="text-sm">
          {referenceLabel} #{contribution.reference.number}
        </span>

        <Link
          className="flex items-center gap-1"
          href={contribution.reference.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${contribution.reference.type} on GitHub`}
        >
          <Icons.github />
        </Link>
      </div>
    </article>
  );
}
