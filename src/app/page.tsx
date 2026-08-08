import Experience from "@/components/layout/experience-section/experience";
import HomeProjects from "@/components/layout/project-section/home-projects";
import HeroFlipText from "@/components/ui/hero-fliptext";
import { profile } from "@/data/profile";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/*=======
       NAVBAR SECTION 
       =======*/}
      <section className="py-10">
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
          <Image
            alt={profile.name}
            src="/devraj.png"
            width={150}
            height={100}
            className="size-24 rounded-full shrink-0 object-cover ring-2 ring-border sm:size-32"
          />

          <div>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              {profile.name}
            </h1>
            <p className="mt-2">
              <HeroFlipText />
            </p>
          </div>
        </div>

        <p className="text-foreground leading-relaxed text-sm mt-5 max-w-prose">
          {profile.bio}
        </p>

        <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-sm">
          {profile.socials.map((social) => (
            <Link
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline decoration-wavy"
            >
              {social.label}
            </Link>
          ))}
        </div>
      </section>

      {/*=======
        EXPERIENCE & OPENSOURCE SECTION 
       =======*/}

      <Experience />

      {/*=======
       PROJECT SECTION 
       =======*/}
      <section className="-mx-6 border-t border-border px-6 py-10">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Projects
          </h2>
          <Link
            href={"/projects"}
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            All &rarr;
          </Link>
        </div>

        <HomeProjects />
      </section>

      {/*=======
        ENGINEERING SECTION 
       =======*/}
      <section className="-mx-6 border-t border-border px-6 py-10">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            Engineering
          </h2>
          <Link
            href={"/engineering"}
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            All &rarr;
          </Link>
        </div>
      </section>

      {/*=======
        CONTACT SECTION 
       =======*/}
      <section className="-mx-6 border-t border-border px-6 py-10">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            CONTACT
          </h2>
          <Link
            href={"/engineering"}
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            All &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
}
