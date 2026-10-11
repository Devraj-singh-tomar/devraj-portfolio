"use client";

import { useEffect, useRef } from "react";
import type {
  ContributionLevel,
  ContributionWeek,
} from "@/lib/github-contributions";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

type ContributionGridProps = {
  year: number;
  throughDate: string;
  weeks: ContributionWeek[];
};

const contributionColors: Record<ContributionLevel, string> = {
  NONE: "#171918",
  FIRST_QUARTILE: "#0e4429",
  SECOND_QUARTILE: "#006d32",
  THIRD_QUARTILE: "#26a641",
  FOURTH_QUARTILE: "#39d353",
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
                  day.date < `${year}-01-01` || day.date > throughDate;

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

                return (
                  <Tooltip key={day.date}>
                    <TooltipTrigger
                      aria-label={`${countLabel} on ${dateLabel}`}
                      className="block size-[clamp(9px,1.7vw,12px)] cursor-default rounded-[3px] border-0 p-0 transition-opacity hover:opacity-75"
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
