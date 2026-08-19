const sections = [
  {
    id: "overview",
    label: "Overview",
  },
  {
    id: "architecture",
    label: "Architecture",
  },
  {
    id: "implementation",
    label: "Implementation",
  },
  {
    id: "challenges",
    label: "Challenges",
  },
  {
    id: "performance",
    label: "Performance",
  },
  {
    id: "trade-offs",
    label: "Trade-offs",
  },
  {
    id: "learnings",
    label: "What I Learned",
  },
  {
    id: "improvements",
    label: "What I'd Improve",
  },
];

export default function CaseStudyToc() {
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
