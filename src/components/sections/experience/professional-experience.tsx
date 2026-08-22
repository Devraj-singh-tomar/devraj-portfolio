"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import {
  ExperienceItemType,
  ExperiencePositionItemType,
} from "@/types/experience";
import { differenceInMonths, parse } from "date-fns";
import {
  BriefcaseBusinessIcon,
  ChevronDownIcon,
  InfinityIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

export interface ProfessionalExperienceProps {
  className?: string;
  experiences: ExperienceItemType[];
}

interface ExperienceItemProps {
  experience: ExperienceItemType;
}

export default function ProfessionalExperience({
  experiences,
  className,
}: ProfessionalExperienceProps) {
  return (
    <div className={cn(className)}>
      {experiences.map((experience) => (
        <ExperienceItem key={experience.id} experience={experience} />
      ))}
    </div>
  );
}

function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <article className="space-y-4 py-6">
      {/* Company */}
      <div className="flex items-center gap-3">
        <div className="flex size-7 shrink-0 items-center justify-center overflow-hidden rounded-full border border-border bg-muted">
          {experience.companyLogo ? (
            <img
              src={experience.companyLogo}
              alt=""
              className="size-full object-cover"
            />
          ) : (
            <BriefcaseBusinessIcon
              className="size-4 text-muted-foreground"
              aria-hidden="true"
            />
          )}
        </div>

        <h3 className="text-foreground text-[1rem] hover:underline underline-offset-4 decoration-wavy font-semibold tracking-tight">
          {experience.companyWebsite ? (
            <Link
              href={experience.companyWebsite}
              target="_blank"
              rel="noopener noreferrer"
            >
              {experience.companyName}
            </Link>
          ) : (
            experience.companyName
          )}
        </h3>

        {experience.isCurrentEmployer && (
          <span
            className="relative flex items-center justify-center"
            aria-label="Current Employer"
          >
            <span className="absolute inline-flex size-3 animate-ping rounded-full bg-foreground opacity-50" />
            <span className="relative inline-flex size-2 rounded-full bg-foreground" />
          </span>
        )}
      </div>

      {/* Positions */}
      <div className="ml-3">
        <div className="space-y-5">
          {experience.positions.map((position) => (
            <ExperiencePositionItem key={position.id} position={position} />
          ))}
        </div>
      </div>
    </article>
  );
}

export interface ExperiencePositionItemProps {
  position: ExperiencePositionItemType;
}

function ExperiencePositionItem({ position }: ExperiencePositionItemProps) {
  const hasDescription = Boolean(position.description);

  const [isOpen, setIsOpen] = useState(Boolean(position.isExpanded));

  const duration = formatDuration(
    position.employmentPeriod.start,
    position.employmentPeriod.end,
  );

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      disabled={!hasDescription}
    >
      <div className="relative">
        {/* Timeline node */}
        <CollapsibleTrigger
          className={cn(
            "group flex w-full items-start gap-3 text-left",
            "disabled:cursor-default",
          )}
        >
          {/* Position icon */}
          <div
            className={cn(
              "flex size-7 shrink-0 items-center justify-center rounded-full",
              "border border-border bg-background",
              "text-muted-foreground",
            )}
          >
            {position.icon ?? (
              <BriefcaseBusinessIcon className="size-3.5" aria-hidden="true" />
            )}
          </div>

          {/* Position information */}
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-4">
              <h4 className="font-medium leading-6 text-foreground">
                {position.title}
              </h4>

              {hasDescription && (
                <ChevronDownIcon
                  className={cn(
                    "mt-1 size-4 shrink-0 text-muted-foreground",
                    "transition-transform duration-200",
                    isOpen && "rotate-180",
                  )}
                  aria-hidden="true"
                />
              )}
            </div>

            <dl className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
              {position.employmentType && (
                <>
                  <div>
                    <dt className="sr-only">Employment type</dt>
                    <dd>{position.employmentType}</dd>
                  </div>

                  <Separator orientation="vertical" className="h-3" />
                </>
              )}

              <div>
                <dt className="sr-only">Employment period</dt>

                <dd className="flex items-center gap-1 tabular-nums">
                  <span>{position.employmentPeriod.start}</span>

                  <span aria-hidden="true">—</span>

                  {position.employmentPeriod.end ? (
                    <span>{position.employmentPeriod.end}</span>
                  ) : (
                    <InfinityIcon className="size-3.5" aria-label="Present" />
                  )}
                </dd>
              </div>

              {duration && (
                <>
                  <Separator orientation="vertical" className="h-3" />

                  <div>
                    <dt className="sr-only">Duration</dt>
                    <dd className="tabular-nums">{duration}</dd>
                  </div>
                </>
              )}
            </dl>
          </div>
        </CollapsibleTrigger>

        {/* Description */}
        <CollapsibleContent>
          {position.description && (
            <div className="mt-3 ml-10 max-w-2xl text-sm leading-6 text-muted-foreground">
              <ReactMarkdown
                components={{
                  p: ({ children }) => (
                    <p className="mb-3 last:mb-0">{children}</p>
                  ),
                  ul: ({ children }) => (
                    <ul className="my-3 list-disc space-y-1 pl-5">
                      {children}
                    </ul>
                  ),
                  li: ({ children }) => <li>{children}</li>,
                  strong: ({ children }) => (
                    <strong className="font-medium text-foreground">
                      {children}
                    </strong>
                  ),
                  a: ({ href, children }) => (
                    <Link
                      href={href ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 hover:text-foreground"
                    >
                      {children}
                    </Link>
                  ),
                }}
              >
                {position.description}
              </ReactMarkdown>
            </div>
          )}
        </CollapsibleContent>

        {/* Skills */}
        {/* {position.skills && position.skills.length > 0 && (
          <ul className="mt-3 ml-10 flex flex-wrap gap-1.5">
            {position.skills?.map((skill) => (
              <li key={skill}>
                <Skill>{skill}</Skill>
              </li>
            ))}
          </ul>
        )} */}
      </div>
    </Collapsible>
  );
}

// function Skill({ className, ...props }: ComponentProps<"span">) {
//   return (
//     <span
//       className={cn(
//         "inline-flex items-center rounded-full bg-muted",
//         "px-2 py-0.5",
//         "text-[.64rem] font-medium text-muted-foreground",
//         className,
//       )}
//       {...props}
//     />
//   );
// }

function formatDuration(start: string, end?: string): string {
  const startHasMonth = start.includes(".");
  const endHasMonth = end ? end.includes(".") : true;

  if (!startHasMonth && end && !endHasMonth) {
    const years = parseInt(end, 10) - parseInt(start, 10);

    if (years <= 0) {
      return "";
    }

    return `${years}y`;
  }

  const startDate = parsePeriodDate(start, "first");
  const endDate = end ? parsePeriodDate(end, "last") : new Date();

  const totalMonths = differenceInMonths(endDate, startDate) + 1;

  if (totalMonths <= 0) {
    return "";
  }

  if (totalMonths < 12) {
    return `${totalMonths}m`;
  }

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (months === 0) {
    return `${years}y`;
  }

  return `${years}y ${months}m`;
}

function parsePeriodDate(value: string, fallbackMonth: "first" | "last"): Date {
  if (value.includes(".")) {
    return parse(value, "MM.yyyy", new Date());
  }

  return parse(
    `${fallbackMonth === "last" ? "12" : "01"}.${value}`,
    "MM.yyyy",
    new Date(),
  );
}
