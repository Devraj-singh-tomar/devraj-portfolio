import Hero from "@/components/hero";
import { ProjectsSection } from "@/components/projects/projects-section";
import { WritingSection } from "@/components/writing/writing-section";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Devraj Singh Tomar — Full-Stack Software Engineer",
  description:
    "I build full-stack products focused on real-time systems, AI, and distributed infrastructure. Explore my projects and technical work.",
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <div className="space-y-10">
      <Hero />

      <ProjectsSection />

      <WritingSection />
    </div>
  );
}
