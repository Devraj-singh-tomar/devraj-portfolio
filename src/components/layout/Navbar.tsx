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
    <nav className="flex items-center justify-end py-6">
      <div className="flex flex-wrap items-center justify-end gap-x-3 gap-y-2 text-sm sm:gap-x-4">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="hover:underline decoration-wavy uppercase font-medium"
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
