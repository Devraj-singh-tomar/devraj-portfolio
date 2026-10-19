"use client";

import type { OpenSourceRepository } from "@/lib/github-contributions";
import { useState } from "react";
import { BiChevronDown, BiGitPullRequest } from "react-icons/bi";
import { HiExternalLink } from "react-icons/hi";

type ContributionFooterProps = {
  repositories: OpenSourceRepository[];
  profileUrl: string;
};

export function ContributionFooter({
  repositories,
  profileUrl,
}: ContributionFooterProps) {
  const [isOpen, setIsOpen] = useState(false);

  const [expandedRepositories, setExpandedRepositories] = useState<Set<string>>(
    () => new Set(),
  );

  function toggleRepository(fullName: string) {
    setExpandedRepositories((current) => {
      const next = new Set(current);

      if (next.has(fullName)) {
        next.delete(fullName);
      } else {
        next.add(fullName);
      }

      return next;
    });
  }

  return (
    <section className="mt-3 overflow-hidden rounded-xl bg-github-footer-background p-1.7 sm:p-3">
      {/* Main disclosure */}
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-xs text-foreground sm:text-sm">
          Top contributions in:
        </span>

        <span className="flex shrink-0 items-center gap-2">
          {/* Preview the first two repository initials */}
          <span className="flex -space-x-1.5">
            {repositories.slice(0, 2).map((repository, index) => (
              <span
                key={repository.fullName}
                title={repository.fullName}
                className={`flex size-6 sm:size-7 items-center justify-center rounded-full border-2 border-github-footer-background text-xs font-medium ${
                  index === 0
                    ? "bg-github-repo-primary text-muted"
                    : "bg-github-repo-primary-foreground text-muted-foreground"
                }`}
              >
                {repository.name.charAt(0).toUpperCase()}
              </span>
            ))}
          </span>

          <span className="flex size-8 items-center justify-center rounded-full border-2 border-border text-muted-foreground hover:text-foreground">
            <BiChevronDown
              className={`size-4  ${isOpen ? "rotate-180" : ""}`}
            />
          </span>
        </span>
      </button>

      {/* Expanded repository panel */}
      {isOpen && (
        <div className="mt-2 border-t border-border">
          {repositories.length === 0 ? (
            <div className="py-6 text-sm text-muted-foreground">
              No public external pull requests were found for this year.
              <a
                href={profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-foreground hover:underline underline-offset-[2.5px] decoration-wavy"
              >
                View GitHub
              </a>
            </div>
          ) : (
            <div className="">
              {repositories.map((repository) => {
                const repositoryExpanded = expandedRepositories.has(
                  repository.fullName,
                );

                return (
                  <div key={repository.fullName} className="py-1">
                    {/* Repository row */}
                    <button
                      type="button"
                      onClick={() => toggleRepository(repository.fullName)}
                      aria-expanded={repositoryExpanded}
                      className="flex w-full items-center gap-3 rounded-xl px-2 py-3 text-left"
                    >
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
                        <BiGitPullRequest className="size-4" />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-medium text-foreground">
                          {repository.name}
                        </span>

                        <span className="block truncate text-xs text-muted-foreground]">
                          {repository.fullName}
                        </span>
                      </span>

                      <span className="shrink-0 text-xs text-muted-foreground">
                        {repository.pullRequestCount}{" "}
                        {repository.pullRequestCount === 1 ? "PR" : "PRs"}
                      </span>

                      <BiChevronDown
                        className={`size-4 shrink-0 text-muted-foreground ${
                          repositoryExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Nested pull requests */}
                    {repositoryExpanded && (
                      <div className="pb-2">
                        <div className="space-y-1">
                          {repository.pullRequests.map((pr) => {
                            const status = pr.merged
                              ? "Merged"
                              : pr.state === "OPEN"
                                ? "Open"
                                : "Closed";

                            const statusColor = pr.merged
                              ? "text-emerald-600 dark:text-emerald-400"
                              : pr.state === "OPEN"
                                ? "text-sky-600 dark:text-sky-400"
                                : "text-muted-foreground";

                            return (
                              <a
                                key={pr.href}
                                href={pr.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-start gap-3 rounded-xl px-2 py-2"
                              >
                                <span className="mt-0.5 shrink-0 font-mono text-xs text-muted-foreground">
                                  #{pr.number}
                                </span>

                                <span className="min-w-0 flex-1">
                                  <span className="block text-sm leading-5 text-foreground transition-colors group-hover:underline decoration-wavy underline-offset-[2.5px]">
                                    {pr.title}
                                  </span>

                                  <span
                                    className={`mt-1 block text-xs ${statusColor}`}
                                  >
                                    {status}
                                  </span>
                                </span>

                                <HiExternalLink className="mt-1 size-3.5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                              </a>
                            );
                          })}
                        </div>

                        {repository.pullRequestCount >
                          repository.pullRequests.length && (
                          <p className="px-2 pt-2 text-xs text-muted-foreground">
                            Showing the latest {repository.pullRequests.length}{" "}
                            of {repository.pullRequestCount} pull requests.
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
