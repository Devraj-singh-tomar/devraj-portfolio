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
    name: "Blogs",
    href: "/blogs",
  },
  // {
  //   name: "Resume",
  //   href: "/resume",
  // },
];

export default function Header() {
  const pathName = usePathname();

  return (
    <header className="flex gap-4 items-center">
      {navLinks.map(({ href, name }) => (
        <Link
          key={href}
          href={href}
          className={`${pathName === href ? "bg-foreground/5" : "text-muted-foreground"} px-2 py-1 rounded-full text-sm hover:text-foreground `}
        >
          {name}
        </Link>
      ))}
    </header>
  );
}
