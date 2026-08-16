import GithubIcon from "@/components/ui/github-icon";
import { openSourceContributions } from "@/data/open-source";
import { cn } from "@/lib/utils";
import { OpenSourceContribution } from "@/types/experience";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function OpenSourceExperience() {
  return (
    <div className="space-y-4">
      {openSourceContributions.map((contribution) => (
        <OpenSourceExperienceItem
          key={contribution.id}
          openSourceExperience={contribution}
        />
      ))}
    </div>
  );
}

type OpenSourceExperienceType = {
  openSourceExperience: OpenSourceContribution;
};

function OpenSourceExperienceItem({
  openSourceExperience,
}: OpenSourceExperienceType) {
  return (
    <div className="space-y-4 border-b border-border py-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h2 className="min-w-0 text-foreground font-semibold">
            {openSourceExperience.repository.name}
          </h2>

          <span className="text-muted-foreground text-xs">
            {openSourceExperience.repository.owner}
          </span>
        </div>

        <span
          className={cn(
            `${openSourceExperience.status === "merged" ? "text-green-500" : openSourceExperience.status === "closed" ? "text-red-500" : "text-blue-500"}`,
            "capitalize text-xs",
          )}
        >
          {openSourceExperience.status}
        </span>
      </div>

      <span>
        ({openSourceExperience.contribution.type}){" "}
        <span className="text-foreground/85 font-medium">
          {openSourceExperience.contribution.title}
        </span>
      </span>

      <p className="text-xs text-muted-foreground">
        {openSourceExperience.contribution.description}
      </p>

      <div className="flex items-center justify-between">
        <span>PR #{openSourceExperience.reference.number}</span>

        <Link
          className="flex items-center gap-1"
          href={openSourceExperience.reference.url}
        >
          <GithubIcon />

          <ArrowRightIcon className="size-3" />
        </Link>
      </div>
    </div>
  );
}
