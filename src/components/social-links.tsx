"use client";

import { siteConfig } from "@/config/site";
import Link from "next/link";

import { useEffect, useRef, useState } from "react";
import { BiCheck, BiCopy } from "react-icons/bi";
import { Github, Gmail, Linkedin, X } from "./icons";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const socialLinks = [
  {
    name: "GitHub",
    label: "Visit GitHub profile",
    Icon: Github,
    href: siteConfig.socials.github,
  },
  {
    name: "X",
    label: "Visit X profile",
    Icon: X,
    href: siteConfig.socials.x,
  },
  {
    name: "LinkedIn",
    label: "Visit LinkedIn profile",
    Icon: Linkedin,
    href: siteConfig.socials.linkedin,
  },
  // {
  //   name: "Calendar",
  //   label: "Book a meeting",
  //   Icon: Calendar,
  //   href: siteConfig.links.calendar,
  // },
];

type CopyStatus = "idle" | "copied" | "error";

export default function SocialLinks() {
  const [copyStatus, setCopyStatus] = useState<CopyStatus>("idle");
  const resetTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimeout.current) {
        clearTimeout(resetTimeout.current);
      }
    };
  }, []);

  async function copyEmail() {
    if (resetTimeout.current) {
      clearTimeout(resetTimeout.current);
    }

    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopyStatus("copied");

      resetTimeout.current = setTimeout(() => {
        setCopyStatus("idle");
      }, 2000);
    } catch {
      setCopyStatus("error");

      resetTimeout.current = setTimeout(() => {
        setCopyStatus("idle");
      }, 2000);
    }
  }

  const emailTooltip =
    copyStatus === "copied"
      ? "Email copied!"
      : copyStatus === "error"
        ? "Couldn't copy email"
        : siteConfig.email;

  return (
    <nav
      aria-label="Social links"
      className="flex items-center flex-wrap gap-2 sm:gap-3.5 pt-6"
    >
      <Tooltip>
        <TooltipTrigger
          type="button"
          aria-label={
            copyStatus === "copied" ? "Email copied" : "Copy email address"
          }
          onClick={copyEmail}
          className="group relative inline-flex size-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring cursor-pointer"
        >
          {copyStatus === "copied" ? (
            <BiCheck
              aria-hidden="true"
              className="size-5.5 text-muted-foreground"
            />
          ) : (
            <>
              <Gmail className="size-5.5 duration-150 group-hover:opacity-0 group-focus-visible:opacity-0" />

              <BiCopy
                aria-hidden="true"
                className="size-5.5 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 duration-150 group-hover:opacity-100 group-focus-visible:opacity-100"
              />
            </>
          )}
        </TooltipTrigger>

        <TooltipContent className="max-w-xs break-all">
          {emailTooltip}
        </TooltipContent>
      </Tooltip>

      {socialLinks.map(({ href, Icon, label, name }) => {
        if (!href) return null;

        return (
          <Tooltip key={name}>
            <TooltipTrigger
              render={
                <Link
                  aria-label={label}
                  rel="noopener noreferrer"
                  target="_blank"
                  href={href}
                />
              }
              className="group inline-flex size-9 shrink-0  items-center justify-center rounded-lg text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Icon
                className={`${name === "Calendar" ? "size-5.5" : "size-5"}`}
              />
            </TooltipTrigger>

            <TooltipContent side="top">{label}</TooltipContent>
          </Tooltip>
        );
      })}
    </nav>
  );
}
