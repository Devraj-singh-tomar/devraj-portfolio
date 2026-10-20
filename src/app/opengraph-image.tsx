import { ImageResponse } from "next/og";
import { SocialImage } from "@/lib/social-image";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} — ${siteConfig.title}. ${siteConfig.tagline}`;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(<SocialImage />, size);
}
