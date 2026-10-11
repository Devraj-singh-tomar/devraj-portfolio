import Link from "next/link";
import { siteConfig } from "@/config/site";
import { getGitHubContributions } from "@/lib/github-contributions";
import { ContributionFooter } from "./contribution-footer";
import { ContributionGrid } from "./contribution-grid";

export async function GitHubContributionCard() {
  const data = await getGitHubContributions();

  if (!data) {
    return (
      <section className="mt-8 rounded-[2rem] bg-[#080809] p-5">
        <p className="text-sm text-muted-foreground">
          GitHub contributions are currently unavailable.
        </p>

        <Link
          href={siteConfig.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-block text-sm text-foreground underline-offset-4 hover:underline"
        >
          View GitHub profile
        </Link>
      </section>
    );
  }

  return (
    <section
      aria-label="GitHub contribution activity"
      className="mt-8 rounded-[2rem] bg-[#050506] p-4 sm:p-6"
    >
      <h2 className="mb-5 px-1 text-[17px] font-normal leading-6 text-[#e5e5e7] sm:text-lg">
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
