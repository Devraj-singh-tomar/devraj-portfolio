"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Experience",
    href: "/experience",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Sponsers",
    href: "/sponsers",
  },
];

export default function Header() {
  const pathName = usePathname();

  return (
    <header className="flex gap-4 items-center">
      {navLinks.map(({ href, name }) => (
        <Link
          key={href}
          href={href}
          className={`${pathName === href ? "bg-foreground/5" : ""} px-2 py-0.9 rounded-full`}
        >
          {name}
        </Link>
      ))}
    </header>
  );
}
