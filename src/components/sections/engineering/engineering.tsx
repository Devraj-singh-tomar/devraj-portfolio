import Link from "next/link";

export default function Engineering() {
  return (
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
  );
}
