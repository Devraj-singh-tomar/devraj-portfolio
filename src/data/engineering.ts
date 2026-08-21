import type { Article, CaseStudy, SystemDesign } from "@/types/engineering";

export const articles: Article[] = [
  {
    slug: "how-webrtc-ice-actually-works",
    title: "How WebRTC ICE Actually Works",
    description:
      "A practical walkthrough of ICE candidates, STUN, TURN, connectivity checks, and how two browsers establish a direct connection.",
    type: "article",
    date: "2026-08-16",
    readingTime: "10 min read",
    technologies: ["WebRTC", "STUN", "TURN", "Networking"],
    tags: ["webrtc", "networking", "real-time-systems"],
    featured: true,
    url: "",
  },

  {
    slug: "scaling-text-to-speech-to-25000-users",
    title: "Scaling Text-to-Speech to 25,000 Concurrent Users",
    description:
      "A practical architecture for handling high-volume text-to-speech workloads using queues, workers, caching, rate limiting, and backpressure.",
    type: "article",
    date: "2026-08-10",
    readingTime: "12 min read",
    technologies: ["Node.js", "Redis", "Queues", "Workers", "Caching"],
    tags: ["scalability", "distributed-systems", "performance"],
    featured: true,
    url: "",
  },

  {
    slug: "scaling-socketio-with-redis",
    title: "Scaling Socket.IO Beyond a Single Server",
    description:
      "Understanding what breaks when WebSocket traffic moves beyond one server and how Redis Pub/Sub and load balancing fit into the architecture.",
    type: "article",
    date: "2026-07-28",
    readingTime: "9 min read",
    technologies: ["Socket.IO", "Redis", "WebSockets", "Load Balancing"],
    tags: ["websockets", "redis", "scalability"],
    featured: false,
    url: "",
  },

  {
    slug: "designing-chunked-file-transfer",
    title: "Designing Reliable Chunked File Transfer",
    description:
      "Exploring chunk sizing, buffering, ordering, backpressure, retries, and integrity when transferring large files over a browser data channel.",
    type: "article",
    date: "2026-07-18",
    readingTime: "8 min read",
    technologies: ["WebRTC", "ArrayBuffer", "DataChannel", "Backpressure"],
    tags: ["webrtc", "file-transfer", "performance"],
    featured: false,
    url: "",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "peerdrop",
    title: "PeerDrop",
    description:
      "Building browser-to-browser file transfer using WebRTC without storing files on a backend or cloud storage service.",
    type: "case-study",
    date: "2026-08-16",
    technologies: [
      "Next.js",
      "TypeScript",
      "WebRTC",
      "Socket.IO",
      "Redis",
      "Docker",
    ],
    tags: ["real-time", "webrtc", "file-transfer", "distributed-systems"],
    featured: true,
    github: "https://github.com/Devraj-singh-tomar/peerdrop",
    demo: "https://peerdrop.example.com",
    url: "",
  },

  {
    slug: "liquid-glass",
    title: "Liquid Glass",
    description:
      "Building a reusable interaction engine that brings liquid-glass style effects to existing web components without rebuilding them from scratch.",
    type: "case-study",
    date: "2026-08-02",
    technologies: ["React", "TypeScript", "CSS", "Web APIs", "Canvas"],
    tags: ["frontend", "design-systems", "interaction", "ui-engineering"],
    featured: true,
    github: "https://github.com/Devraj-singh-tomar/liquid-glass",
    demo: "https://liquid-glass.example.com",
    url: "",
  },

  {
    slug: "engineering-diary-system",
    title: "Engineering Diary System",
    description:
      "Designing a personal engineering documentation workflow for recording system design, implementation decisions, experiments, and lessons learned.",
    type: "case-study",
    date: "2026-07-12",
    technologies: ["Next.js", "TypeScript", "MDX", "PostgreSQL"],
    tags: ["developer-tools", "documentation", "knowledge-management"],
    featured: false,
    github: "https://github.com/Devraj-singh-tomar/engineering-diary",
    url: "",
  },
];

export const systemDesigns: SystemDesign[] = [
  {
    slug: "url-shortener",
    title: "Designing and Implementing a URL Shortener",
    description:
      "Designing and implementing a scalable URL shortener covering requirements, capacity planning, storage, caching, collision handling, and failure scenarios.",
    type: "system-design",
    date: "2026-08-14",
    technologies: ["Node.js", "TypeScript", "PostgreSQL", "Redis"],
    tags: ["system-design", "backend", "caching", "databases"],
    status: "implemented",
    featured: true,
    github: "https://github.com/Devraj-singh-tomar/url-shortener",
    demo: "https://url-shortener.example.com",
    url: "",
  },

  {
    slug: "distributed-rate-limiter",
    title: "Implementing a Distributed Rate Limiter",
    description:
      "Building a Redis-backed sliding-window rate limiter and evaluating its behavior under increasing request rates and multiple application instances.",
    type: "system-design",
    date: "2026-08-07",
    technologies: ["Node.js", "TypeScript", "Redis", "Docker"],
    tags: ["system-design", "redis", "rate-limiting", "distributed-systems"],
    status: "benchmarked",
    featured: true,
    github: "https://github.com/Devraj-singh-tomar/distributed-rate-limiter",
    url: "",
  },

  {
    slug: "notification-system",
    title: "Designing a Reliable Notification System",
    description:
      "Designing an asynchronous notification platform with queues, retries, idempotency, dead-letter handling, provider failures, and delivery tracking.",
    type: "system-design",
    date: "2026-07-29",
    technologies: ["Node.js", "Kafka", "Redis", "PostgreSQL"],
    tags: ["system-design", "kafka", "queues", "reliability"],
    status: "designed",
    featured: false,
    url: "",
  },

  {
    slug: "scaling-realtime-chat",
    title: "Scaling a Real-Time Chat System",
    description:
      "Designing a multi-instance WebSocket architecture with connection routing, Redis Pub/Sub, message persistence, presence, and failure handling.",
    type: "system-design",
    date: "2026-07-21",
    technologies: ["WebSockets", "Socket.IO", "Redis", "PostgreSQL"],
    tags: ["system-design", "real-time", "websockets", "redis"],
    status: "designed",
    featured: false,
    url: "",
  },
];
