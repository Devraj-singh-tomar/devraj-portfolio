import CaseStudyContent from "@/components/engineering/engineering-detail/case-study-content";
import CaseStudyToc from "@/components/engineering/engineering-detail/case-study-toc";
import EngineeringDetailHeader from "@/components/engineering/engineering-detail/engineering-detail-header";
import EngineeringDetailedlayout from "@/components/engineering/engineering-detail/engineering-detail-layout";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CaseStudies({ params }: PageProps) {
  const { slug } = await params;

  return (
    <EngineeringDetailedlayout>
      <EngineeringDetailHeader
        breadcrumb="Engineering / Case Studies"
        type="Case Study"
        title="PeerDrop"
        description="Building browser-to-browser file transfer without storing files on a backend or cloud storage service."
        technologies={[
          "Next.js",
          "TypeScript",
          "WebRTC",
          "Socket.IO",
          "Redis",
          "Docker",
        ]}
        github="https://github.com/Devraj-singh-tomar/peerdrop"
        demo="https://google.com"
      />

      <div className="mt-14 grid gap-12 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-16">
        <CaseStudyToc />

        <CaseStudyContent />
      </div>
    </EngineeringDetailedlayout>
  );
}
