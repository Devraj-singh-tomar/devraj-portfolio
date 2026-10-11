"use client";

import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import type { TopRepository } from "@/lib/github-contributions";
import { BsGithub } from "react-icons/bs";

type ContributionFooterProps = {
  repositories: TopRepository[];
  profileUrl: string;
};

export function ContributionFooter({
  repositories,
  profileUrl,
}: ContributionFooterProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-4 rounded-[1.5rem] bg-[#111113] p-3 sm:px-5 sm:py-4">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm text-[#e5e5e7] sm:text-base">
          Top contributions in:
        </p>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub profile"
            className="flex size-9 items-center justify-center rounded-full bg-[#c9adff] text-[#19151f] transition-opacity hover:opacity-80"
          >
            <BsGithub className="size-4" />
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={
              isOpen
                ? "Hide top contributing repositories"
                : "Show top contributing repositories"
            }
            aria-expanded={isOpen}
            disabled={repositories.length === 0}
            className="flex size-9 items-center justify-center rounded-full border border-white/15 text-muted-foreground transition-colors hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronDown
              className={`size-5 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {isOpen && repositories.length > 0 && (
        <ul className="mt-3 space-y-1 border-t border-white/10 pt-3">
          {repositories.map((repository) => (
            <li key={repository.href}>
              <a
                href={repository.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 rounded-lg px-2 py-2 text-sm transition-colors hover:bg-white/5"
              >
                <span className="truncate text-[#e5e5e7]">
                  {repository.name}
                </span>

                <span className="flex shrink-0 items-center gap-1.5 text-muted-foreground">
                  {repository.commitCount.toLocaleString("en-US")} commits
                  <ExternalLink className="size-3.5" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
