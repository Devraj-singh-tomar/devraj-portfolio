import { OpenSourceContribution } from "@/types/types";

export const openSourceContributions: OpenSourceContribution[] = [
  {
    id: "example-contribution-1",

    repository: {
      name: "example-repository",
      owner: "example-org",
      url: "https://github.com/example-org/example-repository",
    },

    contribution: {
      title: "Improve connection handling for real-time clients",
      description:
        "Improved reconnect behavior and reduced unnecessary connection attempts in real-time client flows.",
      type: "bugfix",
    },

    status: "merged",

    reference: {
      type: "pull-request",
      number: 1234,
      url: "https://github.com/example-org/example-repository/pull/1234",
    },

    technologies: ["TypeScript", "WebSocket"],

    date: "2026-08-01",
  },
];
