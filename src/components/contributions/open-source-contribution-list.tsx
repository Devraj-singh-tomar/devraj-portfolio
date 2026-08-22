import OpenSourceExperienceItem from "@/components/contributions/contribution-item";
import { openSourceContributions } from "@/data/open-source";

interface OpenSourceContributionListProps {
  featuredOnly?: boolean;
}

export default function OpenSourceContributionList({
  featuredOnly = false,
}: OpenSourceContributionListProps) {
  const visibleContributions = featuredOnly
    ? openSourceContributions
        .filter((contribution) => contribution.featured)
        .slice(0, 4)
    : openSourceContributions;

  return (
    <>
      {visibleContributions.map((contribution) => (
        <OpenSourceExperienceItem
          key={contribution.id}
          contribution={contribution}
        />
      ))}
    </>
  );
}
