"use client";

import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { CopyIcon } from "lucide-react";

const footerLinks = [
  {
    name: "Github",
    href: "https://github.com/Devraj-singh-tomar",
  },
  {
    name: "X",
    href: "https://x.com/tomar_devraj01",
  },
  {
    name: "Linkedin",
    href: "",
  },
  {
    name: "Book a meet",
    href: "",
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
          <p className="font-semibold">devrajsinghtomar722@gmail.com</p>

          <button
            title="copy"
            type="button"
            onClick={() =>
              navigator.clipboard.writeText("devrajsinghtomar722@gmail.com")
            }
            className="cursor-pointer"
          >
            <CopyIcon className="size-3.5 cursor-pointer" />
          </button>
        </TooltipContent>
      </Tooltip>

      {footerLinks.map(({ href, name }) => (
        <Link
          target="_blank"
          rel="noopener noreferrer"
          key={name}
          href={href}
          className={`text-muted-foreground rounded-full text-sm hover:text-foreground hover:underline hover:underline-offset-3 `}
        >
          {name}
        </Link>
      ))}
    </footer>
  );
}
