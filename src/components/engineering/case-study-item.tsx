import { CaseStudy } from "@/types/engineering";
import Link from "next/link";
import { Icons } from "../ui/icons";
import { ExternalLinkIcon } from "lucide-react";

interface CaseStudyItemProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyItem({ caseStudy }: CaseStudyItemProps) {
  return (
    <article className="border-b border-border py-6 last:border-b-0">
      <div className="space-y-5">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold tracking-tight text-foreground">
            {caseStudy.title}
          </h2>
          <p className="max-w-2xl text-sm text-muted-foreground">
            {caseStudy.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {caseStudy.technologies.map((technology) => (
            <span key={technology} className="text-xs text-zinc-500">
              {technology}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {caseStudy.github && (
              <Link
                href={caseStudy.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-foreground transition-colors hover:text-muted-foreground"
              >
                <Icons.github />
              </Link>
            )}

            {caseStudy.demo && (
              <Link
                href={caseStudy.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-foreground transition-colors hover:text-muted-foreground"
              >
                Live <ExternalLinkIcon size={12} />
              </Link>
            )}
          </div>

          <Link
            href={`${caseStudy.url}`}
            target="_blank"
            className="text-xs text-foreground transition-colors hover:text-muted-foreground"
          >
            Read case study →
          </Link>
        </div>
      </div>
    </article>
  );
}
