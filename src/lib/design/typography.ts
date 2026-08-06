import { HeadingLevel } from "@/types/typography";

export const TYPOGRAPHY = {
  heading: {
    1: "font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight",
    2: "font-heading text-3xl md:text-4xl font-bold tracking-tight leading-tight",
    3: "font-heading text-2xl md:text-3xl font-semibold tracking-tight",
    4: "font-heading text-xl md:text-2xl font-semibold",
    5: "font-heading text-lg font-medium",
    6: "font-heading text-base font-medium",
  } satisfies Record<HeadingLevel, string>,

  text: {
    body: "font-sans text-base leading-7 text-foreground",

    lead: "font-sans text-lg md:text-xl leading-8 text-foreground",

    muted: "font-sans text-base leading-7 text-muted-foreground",

    small: "font-sans text-sm leading-6 text-muted-foreground",
  },

  label:
    "font-sans text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground",
} as const;
