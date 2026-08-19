import EngineeringDetailHeader from "@/components/engineering/engineering-detail/engineering-detail-header";
import EngineeringDetailedlayout from "@/components/engineering/engineering-detail/engineering-detail-layout";
import SystemDesignContent from "@/components/engineering/engineering-detail/system-design-content";
import SystemDesignToc from "@/components/engineering/engineering-detail/system-design-toc";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function SystemDesign({ params }: PageProps) {
  const { slug } = await params;

  return (
    <EngineeringDetailedlayout>
      <EngineeringDetailHeader
        breadcrumb="Engineering / System Design"
        type="System Design"
        title="Designing and Implementing a URL Shortener"
        description="A practical system design and implementation covering requirements, capacity planning, API design, Redis caching, PostgreSQL, scaling, and failure handling."
        metadata="Implemented · Aug 2026"
        technologies={["Node.js", "TypeScript", "PostgreSQL", "Redis"]}
        github="https://github.com/Devraj-singh-tomar/url-shortener"
        demo="https://url-shortener.example.com"
      />

      <div className="mt-14 grid gap-12 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-16">
        <SystemDesignToc />

        <SystemDesignContent />
      </div>
    </EngineeringDetailedlayout>
  );
}
