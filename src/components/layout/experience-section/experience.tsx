import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfessionalExperience from "./professional-experience";
import OpenSourceExperience from "./open-source-experience";

export default function Experience() {
  return (
    <section className="-mx-6 border-t border-border px-6 py-10">
      <div className="flex items-baseline justify-between">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          EXPERIENCE
        </h2>
      </div>

      <Tabs defaultValue="account" className="flex mt-4 items-start">
        <TabsList variant="line" className="w-full">
          <TabsTrigger value="professional">Professional</TabsTrigger>
          <div className="h-5 w-px bg-border" />
          <TabsTrigger value="open-source">Open Source</TabsTrigger>
        </TabsList>

        <TabsContent
          value="professional"
          className="mt-2 text-zinc-600 dark:text-muted-foreground"
        >
          <ProfessionalExperience />
        </TabsContent>
        <TabsContent
          value="open-source"
          className="mt-2 text-zinc-600 dark:text-muted-foreground"
        >
          <OpenSourceExperience />
        </TabsContent>
      </Tabs>
    </section>
  );
}
