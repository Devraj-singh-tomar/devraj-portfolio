import ThemeToggle from "@/components/ui/theme-toggle";

export default function Footer() {
  return (
    <footer className="-mx-6 border-t border-border px-6 pt-3">
      <div className="flex justify-between items-center pb-1">
        <span className="text-xs text-zinc-700 dark:text-zinc-300 font-semibold">
          1000 unique visitors
        </span>

        <ThemeToggle />
      </div>

      <div className="overflow-hidden text-center py-3">
        <h2 className="select-none text-[3.5rem] font-bold tracking-wide text-muted-foreground mask-b-to-85%  sm:text-8xl md:text-9xl lg:text-[10rem]">
          DEVRAJ
        </h2>
      </div>
    </footer>
  );
}
