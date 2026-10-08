import { HeroHeader } from "@/components/hero-header";
import { WritingItem } from "@/components/writing/writing-item";
import { writings } from "@/config/writing";

export default function WritingPage() {
  return (
    <div className="">
      <HeroHeader title="Writing" description="Notes on building software." />

      <section className="mt-12">
        <div className="flex flex-col gap-7">
          {writings.map((writing) => (
            <WritingItem key={writing.source.href} writing={writing} />
          ))}
        </div>
      </section>
    </div>
  );
}
