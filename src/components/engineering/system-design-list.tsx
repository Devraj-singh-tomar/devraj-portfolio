import { systemDesigns } from "@/data/engineering";
import SystemDesignItem from "./system-design-item";

interface SystemDesignListProps {
  featuredOnly?: boolean;
}

export default function SystemDesignList({
  featuredOnly,
}: SystemDesignListProps) {
  const visibleSystemDesign = featuredOnly
    ? systemDesigns.filter((systemDesign) => systemDesign.featured).slice(0, 2)
    : systemDesigns;

  return (
    <>
      {visibleSystemDesign.map((systemDesign) => (
        <SystemDesignItem key={systemDesign.slug} systemDesign={systemDesign} />
      ))}
    </>
  );
}
