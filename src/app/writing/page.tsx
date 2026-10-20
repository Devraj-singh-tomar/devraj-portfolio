import { HeroHeader } from "@/components/hero-header";
import { WritingItem } from "@/components/writing/writing-item";
import { writings } from "@/config/writing";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Writing",
  description:
    "Technical articles and engineering notes on JavaScript, full-stack development, WebRTC, real-time systems, and software architecture.",
  path: "/writing",
});

export default function WritingPage() {
  return (
    <div>
      <HeroHeader title="Writing" description="Notes on building software." />

      <section className="mt-10">
        <div className="flex flex-col gap-7">
          {writings.map((writing) => (
            <WritingItem key={writing.title} writing={writing} />
          ))}
        </div>
      </section>
    </div>
  );
}
