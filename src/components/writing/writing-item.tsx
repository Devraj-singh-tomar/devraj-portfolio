import { Writing } from "@/config/writing";
import Link from "next/link";

type WritingItemProps = {
  writing: Writing;
};

export function WritingItem({ writing }: WritingItemProps) {
  return (
    <article className="group cursor-default">
      <h3 className=" group-hover:underline underline-offset-[2.5px] decoration-wavy text-sm leading-5">
        <Link
          href={writing.source.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline text-foreground"
        >
          {writing.title}
        </Link>
      </h3>

      <p className="mt-1 text-sm leading-5.5 text-muted-foreground max-w-136">
        {writing.description}
      </p>
    </article>
  );
}
