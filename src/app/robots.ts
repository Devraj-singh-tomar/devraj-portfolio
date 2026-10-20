import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const isProductionDeployment = process.env.VERCEL_ENV === "production";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: isProductionDeployment
      ? {
          userAgent: "*",
          allow: "/",
        }
      : {
          userAgent: "*",
          disallow: "/",
        },

    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
