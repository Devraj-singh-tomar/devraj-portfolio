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

export type OpenSourcePullRequest = {
  number: number;
  title: string;
  href: string;
  createdAt: string;
  state: "OPEN" | "CLOSED";
  merged: boolean;
};

export type OpenSourceRepository = {
  name: string;
  fullName: string;
  href: string;
  pullRequestCount: number;
  pullRequests: OpenSourcePullRequest[];
};

export type GitHubContributionData = {
  year: number;
  throughDate: string;
  totalContributions: number;
  weeks: ContributionWeek[];
  openSourceRepositories: OpenSourceRepository[];
};

type GitHubGraphQLResponse = {
  data?: {
    user: {
      contributionsCollection: {
        contributionCalendar: {
          totalContributions: number;
          weeks: ContributionWeek[];
        };
        pullRequestContributionsByRepository: {
          repository: {
            name: string;
            nameWithOwner: string;
            url: string;
            isPrivate: boolean;
            owner: {
              login: string;
            };
          };

          contributions: {
            totalCount: number;

            nodes: {
              occurredAt: string;

              pullRequest: {
                number: number;
                title: string;
                url: string;
                state: "OPEN" | "CLOSED";
                merged: boolean;
              };
            }[];
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

        pullRequestContributionsByRepository(maxRepositories: 25) {
  repository {
    name
    nameWithOwner
    url
    isPrivate
    owner {
      login
    }
  }

  contributions(first: 20) {
    totalCount

    nodes {
      occurredAt

      pullRequest {
        number
        title
        url
        state
        merged
      }
    }
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

    const username = siteConfig.githubUsername.toLowerCase();

    const openSourceRepositories =
      collection.pullRequestContributionsByRepository
        .filter(
          ({ repository }) =>
            !repository.isPrivate &&
            repository.owner.login.toLowerCase() !== username,
        )
        .map(({ repository, contributions }) => {
          const pullRequests = contributions.nodes
            .map(({ occurredAt, pullRequest }) => ({
              number: pullRequest.number,
              title: pullRequest.title,
              href: pullRequest.url,
              createdAt: occurredAt,
              state: pullRequest.state,
              merged: pullRequest.merged,
            }))
            .sort(
              (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime(),
            );

          return {
            name: repository.name,
            fullName: repository.nameWithOwner,
            href: repository.url,
            pullRequestCount: contributions.totalCount,
            pullRequests,
          };
        })
        .filter((repository) => repository.pullRequests.length > 0)
        .sort((a, b) => b.pullRequestCount - a.pullRequestCount)
        .slice(0, 5);

    return {
      year,
      throughDate: today,
      totalContributions: collection.contributionCalendar.totalContributions,
      weeks: collection.contributionCalendar.weeks,
      openSourceRepositories,
    };
  } catch (error) {
    console.error("Unable to fetch GitHub contributions:", error);
    return null;
  }
}
