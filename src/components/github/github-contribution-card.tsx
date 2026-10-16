import { siteConfig } from "@/config/site";
import {
  getGitHubContributions,
  OpenSourceRepository,
} from "@/lib/github-contributions";
import Link from "next/link";
import { ContributionFooter } from "./contribution-footer";
import { ContributionGrid } from "./contribution-grid";

const MOCK_OPEN_SOURCE_REPOSITORIES: OpenSourceRepository[] = [
  {
    name: "mem0",
    fullName: "demo-org/mem0",
    href: "324",
    pullRequestCount: 10,
    pullRequests: [
      {
        number: 142,
        title: "Improve memory retrieval handling",
        href: "2134",
        createdAt: "2026-10-08T12:00:00Z",
        state: "CLOSED",
        merged: true,
      },
      {
        number: 128,
        title: "Fix metadata filtering edge case",
        href: "236",
        createdAt: "2026-09-22T12:00:00Z",
        state: "OPEN",
        merged: false,
      },
    ],
  },
  {
    name: "hermes-agent",
    fullName: "demo-org/hermes-agent",
    href: "123",
    pullRequestCount: 2,
    pullRequests: [
      {
        number: 37,
        title: "Add provider configuration validation",
        href: "567",
        createdAt: "2026-10-05T10:00:00Z",
        state: "CLOSED",
        merged: true,
      },
      {
        number: 31,
        title: "Handle missing environment variables",
        href: "2345",
        createdAt: "2026-09-18T10:00:00Z",
        state: "CLOSED",
        merged: false,
      },
    ],
  },
  {
    name: "react-query-tools",
    fullName: "demo-org/react-query-tools",
    href: "#",
    pullRequestCount: 1,
    pullRequests: [
      {
        number: 19,
        title: "Improve query retry behavior",
        href: "#",
        createdAt: "2026-09-12T09:00:00Z",
        state: "OPEN",
        merged: false,
      },
    ],
  },
];

export async function GitHubContributionCard() {
  const data = await getGitHubContributions();

  if (!data) {
    return (
      <section className="mt-8 rounded-xl bg-github-card-background p-5">
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
      className="rounded-xl bg-github-card-background p-2.5 sm:p-4"
    >
      <h2 className="mb-5 font-normal leading-6 text-foreground text-sm">
        {data.totalContributions.toLocaleString("en-US")} contributions in{" "}
        {data.year}
      </h2>

      <ContributionGrid
        year={data.year}
        throughDate={data.throughDate}
        weeks={data.weeks}
      />

      <ContributionFooter
        // repositories={data.openSourceRepositories}
        repositories={MOCK_OPEN_SOURCE_REPOSITORIES}
        profileUrl={siteConfig.socials.github}
      />
    </section>
  );
}
