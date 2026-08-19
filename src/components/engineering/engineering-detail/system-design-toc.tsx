const sections = [
  { id: "requirements", label: "Requirements" },
  { id: "capacity", label: "Capacity" },
  { id: "api", label: "API Design" },
  { id: "architecture", label: "Architecture" },
  { id: "database", label: "Database" },
  { id: "caching", label: "Caching" },
  { id: "scaling", label: "Scaling" },
  { id: "implementation", label: "Implementation" },
  { id: "benchmark", label: "Benchmark" },
  { id: "failures", label: "Failure Modes" },
  { id: "trade-offs", label: "Trade-offs" },
  { id: "learnings", label: "What I Learned" },
];

export default function SystemDesignToc() {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24">
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-zinc-500">
          Contents
        </p>

        <nav className="mt-4 border-l border-border pl-4">
          <div className="space-y-3">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="block text-xs text-zinc-500 transition-colors hover:text-foreground"
              >
                {section.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </aside>
  );
}
