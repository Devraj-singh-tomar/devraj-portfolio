import { writings } from "@/config/writing";
import Link from "next/link";
import { WritingItem } from "./writing-item";
import { EmptyState } from "../empty-state";

export function WritingSection() {
  const featuredWriting = writings.slice(0, 4);

  return (
    <section aria-labelledby="featured-writing-heading">
      <div className="mb-6 flex items-center justify-between">
        <h2
          id="featured-writing-heading"
          className="text-sm font-normal tracking-wide"
        >
          Writing
        </h2>

        <Link
          href="/writing"
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          All writing
        </Link>
      </div>

      {featuredWriting.length > 0 ? (
        <div className="flex flex-col gap-7">
          {featuredWriting.map((writing) => (
            <WritingItem key={writing.title} writing={writing} />
          ))}
        </div>
      ) : (
        <EmptyState>
          <p>
            I&apos;m preparing technical write-ups about WebRTC, real-time
            systems, and lessons from building full-stack products. I&apos;ll
            publish them here when they&apos;re ready.
          </p>
        </EmptyState>
      )}
    </section>
  );
}
