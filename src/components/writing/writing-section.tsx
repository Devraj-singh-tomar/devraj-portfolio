import { writings } from "@/config/writing";
import Link from "next/link";
import { WritingItem } from "./writing-item";

export function WritingSection() {
  const featuredWriting = writings.slice(0, 5);

  return (
    <section>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-sm font-normal tracking-wide">Writing</h2>

        <Link
          href="/writing"
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          All writing
        </Link>
      </div>

      <div className="flex flex-col gap-7">
        {featuredWriting.map((writing) => (
          <WritingItem key={writing.source.href} writing={writing} />
        ))}
      </div>
    </section>
  );
}
