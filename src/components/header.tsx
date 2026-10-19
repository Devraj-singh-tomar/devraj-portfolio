"use client";

import { siteConfig } from "@/config/site";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";

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
  {
    name: "Resume",
    href: siteConfig.links.resume,
  },
];

export default function Header() {
  const pathName = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) =>
    href === "/"
      ? pathName === "/"
      : pathName === href || pathName.startsWith(`${href}/`);

  // Close the menu when clicking outside or pressing Escape.
  useEffect(() => {
    if (!isMenuOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (
        mobileNavRef.current &&
        !mobileNavRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="w-full">
      {/* Mobile Navigation */}
      <div ref={mobileNavRef} className="relative sm:hidden">
        <button
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex items-center gap-2 rounded-md text-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {isMenuOpen ? (
            <BiX aria-hidden="true" className="size-5" />
          ) : (
            <BiMenu aria-hidden="true" className="size-5" />
          )}

          <span>{isMenuOpen ? "Close" : "Menu"}</span>
        </button>

        {isMenuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Main navigation"
            className="absolute left-0 right-0 top-full z-50 mt-3 rounded-lg border border-border bg-background/60 p-2 backdrop-blur-lg"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map(({ name, href }) => {
                const active = isActive(href);

                return (
                  <Link
                    key={href}
                    href={href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setIsMenuOpen(false)}
                    className={`p-3 text-sm ${
                      active
                        ? "underline underline-offset-[2.5px] decoration-wavy"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {name}
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </div>

      {/* Desktop Navigation */}

      <nav
        aria-label="Main navgation"
        className="hidden sm:flex gap-3.5 sm:gap-5 items-center"
      >
        {navLinks.map(({ href, name }) => (
          <Link
            key={href}
            href={href}
            className={`${pathName === href ? "underline underline-offset-[2.5px] decoration-wavy" : "text-muted-foreground"}  text-sm hover:text-foreground `}
          >
            {name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
