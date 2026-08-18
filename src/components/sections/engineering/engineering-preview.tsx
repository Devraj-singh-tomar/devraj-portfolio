import ArticleList from "@/components/engineering/article-list";
import CaseStudyList from "@/components/engineering/case-study-list";
import SystemDesignList from "@/components/engineering/system-design-list";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

export default function EngineeringPreview() {
  return (
    <section className="-mx-6 border-t border-border px-6 py-10">
      <div className="flex items-baseline justify-between">
        <h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          Engineering
        </h2>
        <Link
          href={"/engineering"}
          className="text-xs text-muted-foreground hover:text-foreground"
        >
          All &rarr;
        </Link>
      </div>

      <Tabs defaultValue="account" className="flex mt-6 items-start">
        <TabsList variant="line" className="w-full">
          <TabsTrigger value="case-study">Case Study</TabsTrigger>

          <div className="h-5 w-px bg-border" />

          <TabsTrigger value="system-design">System Design</TabsTrigger>

          <div className="h-5 w-px bg-border" />

          <TabsTrigger value="article">Article</TabsTrigger>
        </TabsList>

        <TabsContent value="case-study" className="mt-2 w-full">
          <CaseStudyList featuredOnly />
        </TabsContent>

        <TabsContent value="system-design" className="mt-2 w-full">
          <SystemDesignList featuredOnly />
        </TabsContent>

        <TabsContent value="article" className="mt-2 w-full">
          <ArticleList featuredOnly />
        </TabsContent>
      </Tabs>
    </section>
  );
}
