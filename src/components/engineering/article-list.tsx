import { articles } from "@/data/engineering";
import ArticleItem from "./article-item";

interface ArticleListProps {
  featuredOnly?: boolean;
}

export default function ArticleList({
  featuredOnly = false,
}: ArticleListProps) {
  const visibleArticles = featuredOnly
    ? articles.filter((article) => article.featured).slice(0, 2)
    : articles;

  return (
    <>
      {visibleArticles.map((article) => (
        <ArticleItem key={article.slug} article={article} />
      ))}
    </>
  );
}
