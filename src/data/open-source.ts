import { OpenSourceContribution } from "@/types/experience";

export const openSourceContributions: OpenSourceContribution[] = [
  {
    id: "realtime-kit-connection-retry",

    repository: {
      name: "realtime-kit",
      owner: "forge-labs",
      url: "https://github.com/forge-labs/realtime-kit",
    },

    contribution: {
      title: "Improve connection retry behavior",
      description:
        "Added bounded retry handling for interrupted WebSocket connections and prevented duplicate reconnect attempts during unstable network conditions.",
      type: "bugfix",
    },

    status: "merged",

    reference: {
      type: "pull-request",
      number: 184,
      url: "https://github.com/forge-labs/realtime-kit/pull/184",
    },

    technologies: ["TypeScript", "WebSocket", "Node.js"],

    date: "2026-07-28",
  },

  {
    id: "request-router-timeout-config",

    repository: {
      name: "request-router",
      owner: "systems-foundation",
      url: "https://github.com/systems-foundation/request-router",
    },

    contribution: {
      title: "Add configurable request timeouts",
      description:
        "Introduced per-route timeout configuration with sensible defaults, allowing applications to prevent slow upstream dependencies from holding connections indefinitely.",
      type: "performance",
    },

    status: "open",

    reference: {
      type: "pull-request",
      number: 91,
      url: "https://github.com/systems-foundation/request-router/pull/91",
    },

    technologies: ["TypeScript", "Node.js", "HTTP"],

    date: "2026-05-22",
  },

  {
    id: "event-bus-consumer-backpressure",

    repository: {
      name: "event-bus",
      owner: "distributed-tools",
      url: "https://github.com/distributed-tools/event-bus",
    },

    contribution: {
      title: "Handle consumer backpressure more gracefully",
      description:
        "Proposed bounded consumer concurrency and queue visibility improvements to avoid unbounded in-memory buffering when downstream processing falls behind.",
      type: "developer-experience",
    },

    status: "closed",

    reference: {
      type: "issue",
      number: 73,
      url: "https://github.com/distributed-tools/event-bus/issues/73",
    },

    technologies: ["TypeScript", "Node.js", "Queues"],

    date: "2026-03-17",
  },
];
