import { siteConfig } from "@/config/site";
import "server-only";

export type ContributionLevel =
  | "NONE"
  | "FIRST_QUARTILE"
  | "SECOND_QUARTILE"
  | "THIRD_QUARTILE"
  | "FOURTH_QUARTILE";

export type ContributionDay = {
  date: string;
  weekday: number;
  contributionCount: number;
  contributionLevel: ContributionLevel;
};

export type ContributionWeek = {
  contributionDays: ContributionDay[];
};

export type TopRepository = {
  name: string;
  href: string;
  commitCount: number;
};

export type GitHubContributionData = {
  year: number;
  throughDate: string;
  totalContributions: number;
  weeks: ContributionWeek[];
  topRepositories: TopRepository[];
};

type GitHubGraphQLResponse = {
  data?: {
    user: {
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number;
          weeks: ContributionWeek[];
        };
        commitContributionsByRepository: {
          repository: {
            nameWithOwner: string;
            url: string;
          };
          contributions: {
            totalCount: number;
          };
        }[];
      };
    } | null;
  };
  errors?: {
    message: string;
  }[];
};

const CONTRIBUTIONS_QUERY = `
  query (
    $login: String!
    $from: DateTime!
    $to: DateTime!
  ) {
    user(login: $login) {
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              weekday
              contributionCount
              contributionLevel
            }
          }
        }

        commitContributionsByRepository(maxRepositories: 5) {
          repository {
            nameWithOwner
            url
          }
          contributions(first: 1) {
            totalCount
          }
        }
      }
    }
  }
`;

export async function getGitHubContributions(): Promise<GitHubContributionData | null> {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    console.warn("GITHUB_TOKEN is not configured.");
    return null;
  }

  const today = new Date().toISOString().slice(0, 10);
  const year = Number(today.slice(0, 4));

  const from = `${year}-01-01T00:00:00Z`;
  const to = `${today}T23:59:59Z`;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        query: CONTRIBUTIONS_QUERY,
        variables: {
          login: siteConfig.githubUsername,
          from,
          to,
        },
      }),
      next: {
        revalidate: 3600,
      },
    });

    if (!response.ok) {
      console.error(
        `GitHub GraphQL request failed with status ${response.status}.`,
      );
      return null;
    }

    const result = (await response.json()) as GitHubGraphQLResponse;

    if (result.errors?.length) {
      console.error(
        "GitHub GraphQL error:",
        result.errors.map((error) => error.message),
      );
      return null;
    }

    const collection = result.data?.user?.contributionsCollection;

    if (!collection) {
      return null;
    }

    return {
      year,
      throughDate: today,
      totalContributions: collection.contributionCalendar.totalContributions,
      weeks: collection.contributionCalendar.weeks,
      topRepositories: collection.commitContributionsByRepository.map(
        ({ repository, contributions }) => ({
          name: repository.nameWithOwner,
          href: repository.url,
          commitCount: contributions.totalCount,
        }),
      ),
    };
  } catch (error) {
    console.error("Unable to fetch GitHub contributions:", error);
    return null;
  }
}
