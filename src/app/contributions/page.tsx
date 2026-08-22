import OpenSourceContributionList from "@/components/contributions/open-source-contribution-list";

export default function ContributionPage() {
  return (
    <main className="-mx-6 border-t border-border px-6 py-10">
      <div className="flex items-baseline justify-between">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Open Source
        </h2>
      </div>

      <div className="mt-1">
        <OpenSourceContributionList />
      </div>
    </main>
  );
}
