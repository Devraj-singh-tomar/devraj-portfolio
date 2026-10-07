import { siteConfig } from "@/config/site";
import { ThemeToggle } from "./theme/theme-toggle";

export default function Hero() {
  return (
    <section>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-medium">{siteConfig.name}</h1>

          <ThemeToggle />
        </div>

        <p className="max-w-[34rem] text-sm leading-6 text-muted-foreground">
          {siteConfig.tagline}
        </p>
      </div>

      <p className="mt-5 max-w-[34rem] text-sm leading-6 text-muted-foreground">
        Currently building{" "}
        <a
          href={siteConfig.currentlyBuilding.href}
          className="text-foreground hover:underline underline-offset-2 italic"
        >
          {siteConfig.currentlyBuilding.name}
        </a>
        , {siteConfig.currentlyBuilding.description} My work spans full-stack
        development, real-time communication, AI-powered applications, and
        backend infrastructure.
      </p>
    </section>
  );
}
