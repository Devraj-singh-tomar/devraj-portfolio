import { Writing } from "@/config/writing";
import Link from "next/link";

type WritingItemProps = {
  writing: Writing;
};

export function WritingItem({ writing }: WritingItemProps) {
  return (
    <Link
      href={writing.source.href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline text-foreground "
    >
      <h3 className="text-sm leading-5 hover:underline underline-offset-2">
        {writing.title}
      </h3>

      <p className="mt-1 text-sm leading-5.5 text-muted-foreground max-w-[34rem]">
        {writing.description}
      </p>
    </Link>
  );
}
