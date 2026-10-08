import Hero from "@/components/hero";
import { ProjectsSection } from "@/components/projects/projects-section";
import { WritingSection } from "@/components/writing/writing-section";

export default function Home() {
  return (
    <div className="space-y-6">
      <Hero />

      <div className="">contribution sectoin</div>

      <ProjectsSection />

      <WritingSection />
    </div>
  );
}
