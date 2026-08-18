import ArticleList from "@/components/engineering/article-list";
import CaseStudyList from "@/components/engineering/case-study-list";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function EngineeringPage() {
  return (
    <section className="-mx-6 border-t border-border px-6 py-10">
      <div className="flex items-baseline justify-between">
        <h1 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Engineering
        </h1>
      </div>

      <Tabs defaultValue="case-study" className="flex py-6 items-start">
        <TabsList variant="line" className="w-full">
          <TabsTrigger value="case-study">Case Studies</TabsTrigger>

          <div aria-hidden="true" className="h-5 w-px bg-border" />

          <TabsTrigger value="system-design">System Design</TabsTrigger>

          <div aria-hidden="true" className="h-5 w-px bg-border" />

          <TabsTrigger value="article">Article</TabsTrigger>
        </TabsList>

        <TabsContent value="case-study" className="mt-2 w-full">
          <CaseStudyList />
        </TabsContent>

        <TabsContent value="system-design" className="mt-2 w-full">
          system-design list
        </TabsContent>

        <TabsContent value="article" className="mt-2 w-full">
          <ArticleList />
        </TabsContent>
      </Tabs>
    </section>
  );
}
