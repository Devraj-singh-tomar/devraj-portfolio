import { siteConfig } from "@/config/site";
import { getGitHubContributions } from "@/lib/github-contributions";
import Link from "next/link";
import { ContributionFooter } from "./contribution-footer";
import { ContributionGrid } from "./contribution-grid";

export async function GitHubContributionCard() {
  const data = await getGitHubContributions();

  if (!data) {
    return (
      <section className="mt-8 rounded-[2rem] bg-github-card-background p-5">
        <p className="text-sm text-muted-foreground">
          GitHub contributions are currently unavailable.
        </p>

        <Link
          href={siteConfig.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-sm text-foreground hover:underline underline-offset-[2.5px] decoration-wavy"
        >
          View GitHub profile
        </Link>
      </section>
    );
  }

  return (
    <section
      aria-label="GitHub contribution activity"
      className="rounded-[2rem] bg-github-card-background sm:p-5"
    >
      <h2 className="mb-5 font-normal leading-6 text-foreground text-[16px]">
        {data.totalContributions.toLocaleString("en-US")} contributions in{" "}
        {data.year}
      </h2>

      <ContributionGrid
        year={data.year}
        throughDate={data.throughDate}
        weeks={data.weeks}
      />

      <ContributionFooter
        repositories={data.openSourceRepositories}
        profileUrl={siteConfig.socials.github}
      />
    </section>
  );
}
