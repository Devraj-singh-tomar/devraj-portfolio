import { Writing } from "@/config/writing";
import Link from "next/link";

type WritingItemProps = {
  writing: Writing;
};

export function WritingItem({ writing }: WritingItemProps) {
  return (
    <article className="group">
      <Link
        href={writing.source.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline text-foreground group-hover:text-foreground hover:underline underline-offset-2"
      >
        <h3 className="text-base leading-6">{writing.title}</h3>
      </Link>

      <p className="mt-1 text-sm leading-6 text-muted-foreground">
        {writing.description}
      </p>
    </article>
  );
}
