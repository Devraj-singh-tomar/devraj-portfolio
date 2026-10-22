import { siteConfig } from "@/config/site";
import VisitorCount from "./visitor-count";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center mt-5 gap-3 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between border-t border-border">
      <p className="text-center">
        © {year} {siteConfig.name}. All rights reserved.
      </p>

      <VisitorCount />
    </footer>
  );
}
