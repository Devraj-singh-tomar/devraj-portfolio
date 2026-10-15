import { siteConfig } from "@/config/site";
import { HeroHeader } from "./hero-header";
import SocialLinks from "./social-links";

export default function Hero() {
  return (
    <section>
      <HeroHeader title={siteConfig.name} description={siteConfig.tagline} />

      <p className="mt-5 max-w-[34rem] text-sm leading-6 text-muted-foreground">
        Currently building{" "}
        <a
          href={siteConfig.currentlyBuilding.href}
          className="text-foreground underline underline-offset-[2.5px] decoration-wavy"
        >
          {siteConfig.currentlyBuilding.name}
        </a>
        , {siteConfig.currentlyBuilding.description} My work spans full-stack
        development, real-time communication, AI-powered applications, and
        backend infrastructure.
      </p>

      <SocialLinks />
    </section>
  );
}
