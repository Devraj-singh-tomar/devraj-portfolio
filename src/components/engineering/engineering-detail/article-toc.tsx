const sections = [
  {
    id: "problem",
    label: "The Problem",
  },
  {
    id: "ice",
    label: "How ICE Works",
  },
  {
    id: "architecture",
    label: "Connectivity Flow",
  },
  {
    id: "takeaways",
    label: "Takeaways",
  },
];

export default function ArticleToc() {
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
