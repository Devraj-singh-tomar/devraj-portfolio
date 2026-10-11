import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  getGitHubContributions,
  type ContributionLevel,
  type ContributionWeek,
} from "@/lib/github-contributions";
import { ContributionFooter } from "./contribution-footer";

const contributionColors: Record<ContributionLevel, string> = {
  NONE: "#171918",
  FIRST_QUARTILE: "#0e4429",
  SECOND_QUARTILE: "#006d32",
  THIRD_QUARTILE: "#26a641",
  FOURTH_QUARTILE: "#39d353",
};

function ContributionGrid({
  year,
  throughDate,
  weeks,
}: {
  year: number;
  throughDate: string;
  weeks: ContributionWeek[];
}) {
  const firstDayOfYear = `${year}-01-01`;

  return (
    <div
      className="w-full overflow-x-auto pb-1"
      aria-label={`GitHub contributions for ${year}`}
    >
      <div className="flex w-max gap-[3px]">
        {weeks.map((week, weekIndex) => {
          const daysByWeekday = new Map(
            week.contributionDays.map((day) => [day.weekday, day] as const),
          );

          return (
            <div
              key={week.contributionDays[0]?.date ?? weekIndex}
              className="grid grid-rows-7 gap-[3px]"
            >
              {Array.from({ length: 7 }, (_, weekday) => {
                const day = daysByWeekday.get(weekday);

                if (!day) {
                  return (
                    <span
                      key={weekday}
                      aria-hidden="true"
                      className="size-[clamp(9px,1.7vw,12px)] rounded-[3px] bg-transparent"
                    />
                  );
                }

                const isOutsideRange =
                  day.date < firstDayOfYear || day.date > throughDate;

                if (isOutsideRange) {
                  return (
                    <span
                      key={day.date}
                      aria-hidden="true"
                      className="size-[clamp(9px,1.7vw,12px)] rounded-[3px] bg-transparent"
                    />
                  );
                }

                const dateLabel = new Intl.DateTimeFormat("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                  timeZone: "UTC",
                }).format(new Date(`${day.date}T00:00:00Z`));

                const countLabel =
                  day.contributionCount === 1
                    ? "1 contribution"
                    : `${day.contributionCount} contributions`;

                const level = contributionColors[day.contributionLevel]
                  ? day.contributionLevel
                  : "NONE";

                const tooltip = `${countLabel} on ${dateLabel}`;

                return (
                  <span
                    key={day.date}
                    role="img"
                    aria-label={tooltip}
                    title={tooltip}
                    style={{
                      backgroundColor: contributionColors[level],
                    }}
                    className="size-[clamp(9px,1.7vw,12px)] rounded-[3px] transition-opacity hover:opacity-75"
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

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
