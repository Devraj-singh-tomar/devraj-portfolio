import type { Experience } from "@/config/experience";
import Image from "next/image";
import { Fragment } from "react";

type ExperienceItemProps = {
  experience: Experience;
};

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <article className="group grid grid-cols-[1.75rem_minmax(0,1fr)] gap-x-3 sm:gap-x-4">
      {/* Company logo */}
      <div className="flex justify-center pt-0.5">
        {experience.logo ? (
          <Image
            height={100}
            width={100}
            src={experience.logo}
            alt=""
            className="size-7 rounded-full object-cover"
          />
        ) : (
          <div aria-hidden="true" className="size-7 rounded-full bg-muted" />
        )}
      </div>

      {/* Company, roles, and dates */}
      <div className="grid min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-3">
        {/* Company heading and separator */}
        <div className="flex group-hover:underline underline-offset-[2.5px] decoration-wavy min-w-0 items-center gap-3">
          <h2 className="shrink-0 text-sm font-normal text-foreground">
            {experience.href ? (
              <a
                href={experience.href}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-sm"
              >
                {experience.company}
              </a>
            ) : (
              experience.company
            )}
          </h2>

          <div className="h-px min-w-3 flex-1 bg-border" />
        </div>

        {/* Company period */}
        <p className="whitespace-nowrap text-right text-muted-foreground text-xs">
          {experience.period}
        </p>

        {/* Role and corresponding period share the same grid */}
        {experience.roles.map((role) => (
          <Fragment key={`${role.title}-${role.period}`}>
            <p className="min-w-0 text-sm text-muted-foreground">
              {role.title}
            </p>

            <p className="whitespace-nowrap text-right text-muted-foreground text-xs">
              {role.period}
            </p>
          </Fragment>
        ))}
      </div>
    </article>
  );
}
