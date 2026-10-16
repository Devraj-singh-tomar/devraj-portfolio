import { siteConfig } from "@/config/site";
import { HeroHeader } from "./hero-header";
import SocialLinks from "./social-links";

export default function Hero() {
  return (
    <section>
      <HeroHeader title={siteConfig.name} description={siteConfig.tagline} />

      <p className="mt-3 max-w-136 text-sm leading-6 text-muted-foreground">
        Currently building{" "}
        <a
          href={siteConfig.currentlyBuilding.href}
          className="text-foreground font-medium"
        >
          {siteConfig.currentlyBuilding.name}
        </a>
        , {siteConfig.currentlyBuilding.description}
      </p>

      <SocialLinks />
    </section>
  );
}
