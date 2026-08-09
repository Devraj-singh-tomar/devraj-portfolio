"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  });

  if (!mounted) {
    return (
      <Button
        type="button"
        variant="outline"
        size="icon"
        aria-label="Toggle theme"
      />
    );
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Sun
        className={`h-5 w-5 text-foreground transition-all ${
          resolvedTheme === "light"
            ? "rotate-0 scale-100"
            : "-rotate-90 scale-0"
        }`}
      />

      <Moon
        className={`absolute h-5 w-5 text-foreground transition-all ${
          resolvedTheme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"
        }`}
      />

      <span aria-label="Toggle theme" className="sr-only">
        Toggle theme
      </span>
    </Button>
  );
}
