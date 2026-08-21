export type EngineeringType = "article" | "case-study" | "system-design";

export type EngineeringStatus = "published" | "draft";

export type SystemDesignStatus = "designed" | "implemented" | "benchmarked";

export interface EngineeringBase {
  slug: string;
  title: string;
  description: string;
  type: EngineeringType;
  date: string;
  technologies: string[];
  tags: string[];
  featured: boolean;
  url: string;
}

export interface Article extends EngineeringBase {
  type: "article";
  readingTime: string;
  github?: string;
}

export interface CaseStudy extends EngineeringBase {
  type: "case-study";
  github?: string;
  demo?: string;
}

export interface SystemDesign extends EngineeringBase {
  type: "system-design";
  status: SystemDesignStatus;
  github?: string;
  demo?: string;
}
