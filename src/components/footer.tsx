"use client";

import { siteConfig } from "@/config/site";
import { CopyIcon } from "lucide-react";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const footerLinks = [
  {
    name: "GitHub",
    href: siteConfig.socials.github,
  },
  {
    name: "X",
    href: siteConfig.socials.x,
  },
  {
    name: "LinkedIn",
    href: siteConfig.socials.linkedin,
  },
  {
    name: "Book a meet",
    href: siteConfig.links.calendar,
  },
];

export default function Footer() {
  return (
    <footer className="flex gap-4 pt-6">
      <Tooltip>
        <TooltipTrigger className="text-muted-foreground rounded-full text-sm hover:text-foreground hover:underline hover:underline-offset-3">
          Email
        </TooltipTrigger>

        <TooltipContent className="flex items-center justify-center">
          <p className="font-semibold">{siteConfig.email}</p>

          <button
            type="button"
            title="Copy email"
            aria-label="Copy email address"
            onClick={() => navigator.clipboard.writeText(siteConfig.email)}
            className="cursor-pointer"
          >
            <CopyIcon className="size-3.5" />
          </button>
        </TooltipContent>
      </Tooltip>

      {footerLinks.map(({ href, name }) => {
        if (!href) return null;

        return (
          <Link
            target="_blank"
            rel="noopener noreferrer"
            key={name}
            href={href}
            className={`text-muted-foreground rounded-full text-sm hover:text-foreground hover:underline hover:underline-offset-3 `}
          >
            {name}
          </Link>
        );
      })}
    </footer>
  );
}
