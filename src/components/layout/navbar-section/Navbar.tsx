import ThemeToggle from "@/components/ui/theme-toggle";
import Link from "next/link";

interface NavlinkProps {
  label: string;
  href: string;
}

const navLinks: NavlinkProps[] = [
  { label: "Home", href: "/" },
  { label: "Engineering", href: "/engineering" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      <ThemeToggle />

      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm sm:gap-x-4">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-foreground hover:underline underline-offset-4 decoration-wavy font-medium"
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
