"use client";

import type {
  ContributionLevel,
  ContributionWeek,
} from "@/lib/github-contributions";
import { useEffect, useRef } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

type ContributionGridProps = {
  year: number;
  throughDate: string;
  weeks: ContributionWeek[];
};

const contributionColors: Record<ContributionLevel, string> = {
  NONE: "bg-github-contribution-empty",
  FIRST_QUARTILE: "bg-github-contribution-level-1",
  SECOND_QUARTILE: "bg-github-contribution-level-2",
  THIRD_QUARTILE: "bg-github-contribution-level-3",
  FOURTH_QUARTILE: "bg-github-contribution-level-4",
};

export function ContributionGrid({
  year,
  throughDate,
  weeks,
}: ContributionGridProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    // Show the latest contribution dates when the graph loads.
    container.scrollLeft = container.scrollWidth;
  }, [year, throughDate, weeks]);

  return (
    <div
      ref={scrollRef}
      className="scrollbar-none w-full overflow-x-scroll pb-1"
      aria-label={`GitHub contributions for ${year}`}
    >
      <div className="flex w-max gap-0.75">
        {weeks.map((week, weekIndex) => {
          const daysByWeekday = new Map(
            week.contributionDays.map((day) => [day.weekday, day] as const),
          );

          return (
            <div
              key={week.contributionDays[0]?.date ?? weekIndex}
              className="grid grid-rows-7 gap-0.75"
            >
              {Array.from({ length: 7 }, (_, weekday) => {
                const day = daysByWeekday.get(weekday);

                if (!day) {
                  return (
                    <span
                      key={weekday}
                      aria-hidden="true"
                      className="size-[clamp(9px,1.7vw,12px)] rounded-full bg-transparent"
                    />
                  );
                }

                const isOutsideRange =
                  day.date < `${year}-01-01` || day.date > throughDate;

                if (isOutsideRange) {
                  return (
                    <span
                      key={day.date}
                      aria-hidden="true"
                      className="size-[clamp(9px,1.7vw,12px)] rounded-full bg-transparent"
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

                return (
                  <Tooltip key={day.date}>
                    <TooltipTrigger
                      aria-label={`${countLabel} on ${dateLabel}`}
                      className={`${contributionColors[day.contributionLevel] ?? contributionColors.NONE} block size-[clamp(9px,1.7vw,12px)] cursor-default rounded-[3px] border-0 p-0 hover:opacity-75`}
                      style={{
                        backgroundColor:
                          contributionColors[day.contributionLevel] ??
                          contributionColors.NONE,
                      }}
                    />

                    <TooltipContent side="top" className="text-xs">
                      {countLabel} on {dateLabel}
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
