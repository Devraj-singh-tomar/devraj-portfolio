import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
}: PageMetadataOptions): Metadata {
  const canonicalUrl = new URL(path, siteConfig.url).toString();

  const socialTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,

    description,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: siteConfig.name,
      url: canonicalUrl,
      title: socialTitle,
      description,
    },

    twitter: {
      card: "summary",
      creator: "@devraj_st",
      title: socialTitle,
      description,
    },
  };
}
