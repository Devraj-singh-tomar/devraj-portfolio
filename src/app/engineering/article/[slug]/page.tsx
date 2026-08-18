import ArticleContent from "@/components/engineering/engineering-detail/article-content";
import ArticleToc from "@/components/engineering/engineering-detail/article-toc";
import EngineeringDetailHeader from "@/components/engineering/engineering-detail/engineering-detail-header";
import EngineeringDetailedlayout from "@/components/engineering/engineering-detail/engineering-detail-layout";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Articles({ params }: PageProps) {
  const { slug } = await params;

  return (
    <EngineeringDetailedlayout>
      <EngineeringDetailHeader
        breadcrumb="Engineering / Articles"
        type="Article"
        title="How WebRTC ICE Actually Works"
        description="A practical walkthrough of ICE candidates, STUN, TURN, connectivity checks, and how browsers establish peer-to-peer connectivity."
        metadata="Aug 2026 · 10 min read"
        technologies={["WebRTC", "STUN", "TURN", "Networking"]}
      />{" "}
      <div className="grid gap-12 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-16">
        <ArticleToc />

        <ArticleContent />
      </div>
    </EngineeringDetailedlayout>
  );
}
