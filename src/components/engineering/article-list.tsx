import { articles } from "@/data/engineering";
import ArticleItem from "./article-item";

interface ArticleListProps {
  featuredOnly?: boolean;
}

export default function ArticleList({
  featuredOnly = false,
}: ArticleListProps) {
  const visibleArticlesonHomePage = featuredOnly
    ? articles.filter((article) => article.featured).slice(0, 2)
    : articles;

  return (
    <>
      {visibleArticlesonHomePage.map((article) => (
        <ArticleItem key={article.slug} article={article} />
      ))}
    </>
  );
}
