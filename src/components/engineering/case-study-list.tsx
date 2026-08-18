import { caseStudies } from "@/data/engineering";
import CaseStudyItem from "./case-study-item";

interface CaseStudyListProps {
  featuredOnly?: boolean;
}

export default function CaseStudyList({
  featuredOnly = false,
}: CaseStudyListProps) {
  const visibleCaseStudies = featuredOnly
    ? caseStudies.filter((caseStudy) => caseStudy.featured).slice(0, 2)
    : caseStudies;

  return (
    <>
      {visibleCaseStudies.map((caseStudy) => (
        <CaseStudyItem key={caseStudy.slug} caseStudy={caseStudy} />
      ))}
    </>
  );
}
