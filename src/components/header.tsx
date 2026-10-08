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
    name: "Writing",
    href: "/writing",
  },
  // {
  //   name: "Resume",
  //   href: "/resume",
  // },
];

export default function Header() {
  const pathName = usePathname();

  return (
    <header className="flex gap-5 items-center">
      {navLinks.map(({ href, name }) => (
        <Link
          key={href}
          href={href}
          className={`${pathName === href ? "" : "text-muted-foreground"}  text-sm hover:text-foreground `}
        >
          {name}
        </Link>
      ))}
    </header>
  );
}
