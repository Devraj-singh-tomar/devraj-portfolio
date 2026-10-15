import { siteConfig } from "@/config/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 flex flex-col items-center gap-3 border-t border-border/60 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
      <p>
        © {year} {siteConfig.name}. All rights reserved.
      </p>

      <p className="flex items-center gap-1.5">
        <span
          aria-hidden="true"
          className="size-1.5 rounded-full animate-pulse bg-emerald-500"
        />
        <span className="text-foreground">6162356</span>
        <span>visitor's</span>
      </p>
    </footer>
  );
}
