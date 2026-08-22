import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { experience } from "@/data/experience";
import OpenSourceContributionList from "../../contributions/open-source-contribution-list";
import ProfessionalExperience from "./professional-experience";

export default function Experience() {
  return (
    <section className="-mx-6 border-t border-border px-6 py-10">
      <div className="flex items-baseline justify-between">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          EXPERIENCE
        </h2>
      </div>

      <Tabs defaultValue="account" className="flex pt-6 items-start">
        <TabsList variant="line" className="w-full">
          <TabsTrigger value="professional">Professional</TabsTrigger>
          <div className="h-5 w-px bg-border" />
          <TabsTrigger value="open-source">Open Source</TabsTrigger>
        </TabsList>

        <TabsContent value="professional" className="mt-1 w-full">
          <ProfessionalExperience experiences={experience} />
        </TabsContent>

        <TabsContent value="open-source" className="mt-1 w-full">
          <OpenSourceContributionList featuredOnly />
        </TabsContent>
      </Tabs>
    </section>
  );
}
