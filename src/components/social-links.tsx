"use client";

import { siteConfig } from "@/config/site";
import Link from "next/link";

import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Calendar, Github, Gmail, Linkedin, X } from "./icons";
import { useState } from "react";
import { CgCheck } from "react-icons/cg";

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
  {
    name: "Calendar",
    label: "Book a meeting",
    Icon: Calendar,
    href: siteConfig.links.calendar,
  },
];

type CopyStatus = "idle" | "copied" | "error";

export default function SocialLinks() {
  const [copyStatus, setCopyStatus] = useState<CopyStatus>("idle");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopyStatus("copied");

      window.setTimeout(() => {
        setCopyStatus("idle");
      }, 2000);
    } catch {
      setCopyStatus("error");

      window.setTimeout(() => {
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
      className="flex items-center flex-wrap gap-6 pt-6"
    >
      <Tooltip>
        <TooltipTrigger
          type="button"
          aria-label={
            copyStatus === "copied" ? "Email copied" : "Copy email address"
          }
          onClick={copyEmail}
          className="inline-flex text-muted-foreground hover:text-foreground items-center"
        >
          {copyStatus === "copied" ? (
            <CgCheck aria-hidden="true" size={25} />
          ) : (
            <Gmail size={25} />
          )}
        </TooltipTrigger>

        <TooltipContent className="max-w-xs break-all">
          {emailTooltip}
        </TooltipContent>
      </Tooltip>

      {socialLinks.map(({ href, Icon, label, name }) => {
        if (!href) return null;

        return (
          <Link
            target="_blank"
            rel="noopener noreferrer"
            key={href}
            href={href}
            aria-label={label}
            title={name === "Calendar" ? "Book a meeting" : name}
            className="inline-flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Icon size={20} />
          </Link>
        );
      })}
    </nav>
  );
}
