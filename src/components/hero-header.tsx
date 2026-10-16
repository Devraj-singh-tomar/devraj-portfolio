import { ThemeToggle } from "./theme/theme-toggle";

export function HeroHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h1 className="text-xl sm:text-2xl font-medium">{title}</h1>

        <ThemeToggle />
      </div>

      <p className="max-w-136 text-sm leading-6 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
