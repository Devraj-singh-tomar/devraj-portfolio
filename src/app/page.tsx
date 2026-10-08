import Hero from "@/components/hero";
import { WritingSection } from "@/components/writing/writing-section";

export default function Home() {
  return (
    <div className="space-y-6">
      <Hero />

      <div className="">contribution sectoin</div>

      <div className="">Project section</div>

      <WritingSection />
    </div>
  );
}
