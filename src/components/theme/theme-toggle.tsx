"use client";

import { useTheme } from "next-themes";
import { CgDarkMode } from "react-icons/cg";
import { Button } from "../ui/button";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      className={"rounded-full"}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <CgDarkMode className={`size-10 w-[1.3rem]`} />

      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
