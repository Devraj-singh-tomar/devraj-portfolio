"use client";

import { useTheme } from "next-themes";
import { CgDarkMode } from "react-icons/cg";
import { Button } from "../ui/button";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className={"rounded-full"}
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
    >
      <CgDarkMode aria-hidden="true" className="size-6" />

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
