import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { experience } from "@/data/experience";
import OpenSourceExperience from "./open-source-experience";
import ProfessionalExperience from "./professional-experience";

export default function Experience() {
  return (
    <section className="-mx-6 border-t border-border px-6 py-10">
      <div className="flex items-baseline justify-between">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          EXPERIENCE
        </h2>
      </div>

      <Tabs defaultValue="account" className="flex py-6 items-start">
        <TabsList variant="line" className="w-full">
          <TabsTrigger value="professional">Professional</TabsTrigger>
          <div className="h-5 w-px bg-border" />
          <TabsTrigger value="open-source">Open Source</TabsTrigger>
        </TabsList>

        <TabsContent value="professional" className="mt-2 w-full">
          <ProfessionalExperience experiences={experience} />
        </TabsContent>

        <TabsContent value="open-source" className="mt-2 w-full">
          <OpenSourceExperience />
        </TabsContent>
      </Tabs>
    </section>
  );
}
