export type Project = {
  id: string;
  title: string;
  description: string;
  impact?: string;
  liveLink?: string;
  githubLink?: string;
};

export const projects: Project[] = [
  {
    id: "bettershot",
    title: "BetterShot",
    description:
      "Capture, annotate, and polish screenshots natively on macOS; the open-source CleanShot X alternative.",
    impact: "12k+ downloads",
    liveLink: "https://www.bettershot.site",
    githubLink: "https://github.com/KartikLabhshetwar/better-shot",
  },
  {
    id: "screenvideo",
    title: "ScreenVideo",
    description:
      "Capture, annotate, and polish screenshots natively on macOS; the open-source CleanShot X alternative.",
    impact: "12k+ downloads",
    liveLink: "https://www.bettershot.site",
    githubLink: "https://github.com/KartikLabhshetwar/better-shot",
  },
];
