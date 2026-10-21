import { EmptyState } from "@/components/empty-state";
import { HeroHeader } from "@/components/hero-header";
import { WritingItem } from "@/components/writing/writing-item";
import { writings } from "@/config/writing";
import { createPageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = createPageMetadata({
  title: "Writing",
  description:
    "Technical articles and engineering notes on JavaScript, full-stack development, WebRTC, real-time systems, and software architecture.",
  path: "/writing",
});

export default function WritingPage() {
  return (
    <div>
      <HeroHeader
        title="Writing"
        description="Technical notes and lessons from building software."
      />

      <section className="mt-10">
        {writings.length > 0 ? (
          <div className="flex flex-col gap-7">
            {writings.map((writing) => (
              <WritingItem key={writing.title} writing={writing} />
            ))}
          </div>
        ) : (
          <EmptyState>
            <p>
              I haven&apos;t published technical articles yet. I&apos;m
              preparing notes on WebRTC, real-time systems, and the engineering
              decisions behind the software I&apos;m building.
            </p>

            <p>
              In the meantime, explore my{" "}
              <Link
                href="/projects"
                className="text-foreground hover:underline decoration-wavy underline-offset-[2.5px]"
              >
                projects
              </Link>
              . I&apos;ll add articles here when they&apos;re ready to publish.
            </p>
          </EmptyState>
        )}
      </section>
    </div>
  );
}
