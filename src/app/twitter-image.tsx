import { ImageResponse } from "next/og";
import { SocialImage } from "@/lib/social-image";
import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} — ${siteConfig.title}`;

export const size = {
  width: 1200,
  height: 600,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(<SocialImage />, size);
}
