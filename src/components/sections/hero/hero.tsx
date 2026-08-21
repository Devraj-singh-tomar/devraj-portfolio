import HeroFlipText from "@/components/ui/hero-fliptext";
import { profile } from "@/data/profile";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-14">
      <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:gap-8">
        <Image
          alt={profile.name}
          src="/devraj.png"
          width={100}
          height={100}
          className="size-24 rounded-lg shrink-0 object-cover ring-1 ring-border sm:size-32"
        />

        <div>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl text-foreground">
            {profile.name}
          </h1>
          <p className="mt-2">
            <HeroFlipText />
          </p>
        </div>
      </div>

      <p className="text-muted-foreground leading-relaxed text-sm mt-6 max-w-prose">
        {profile.bio}
      </p>

      <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-sm">
        {profile.socials.map((social) => (
          <Link
            key={social.href}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-foreground underline-offset-4 hover:underline decoration-wavy"
          >
            {social.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
