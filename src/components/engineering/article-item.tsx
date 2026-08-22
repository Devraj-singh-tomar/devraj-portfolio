import { Article } from "@/types/engineering";
import Link from "next/link";

interface ArticleItemProps {
  article: Article;
}

const formatDate = (date: string) => {
  return new Intl.DateTimeFormat("en-us", {
    month: "short",
    year: "numeric",
  }).format(new Date(date));
};

export default function ArticleItem({ article }: ArticleItemProps) {
  return (
    <article className="border-b border-border py-6 last:border-b-0">
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-[16px] font-semibold tracking-tight text-foreground">
            {article.title}
          </h2>

          <span className="text-xs text-zinc-500">
            {formatDate(article.date)}
          </span>
        </div>

        <div className="space-y-2">
          <p className="max-w-2xl text-sm text-muted-foreground">
            {article.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-x-3 gap-y-2">
          {article.technologies.map((technology) => (
            <span key={technology} className="text-xs text-zinc-500">
              {technology}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between gap-4">
          <span className="text-xs text-zinc-500">{article.readingTime}</span>

          <Link
            href={`${article.url}`}
            target="_blank"
            className="text-xs text-foreground transition-colors hover:text-muted-foreground"
          >
            Read article →
          </Link>
        </div>
      </div>
    </article>
  );
}
