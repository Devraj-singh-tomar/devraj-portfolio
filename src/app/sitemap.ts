import { siteConfig } from "@/config/site";
import { MetadataRoute } from "next";

const publicRoutes = ["/", "/experience", "/projects", "/writing"];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((path) => ({
    url: new URL(path, siteConfig.url).toString(),
  }));
}
