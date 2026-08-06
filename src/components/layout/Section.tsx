import { LAYOUT } from "@/lib/design/layout";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  bordered?: boolean;
}

export default function Section({
  children,
  bordered,
  className,
}: SectionProps) {
  return (
    <section
      className={cn(
        LAYOUT.sectionSpacing,
        className,
        bordered && "border-b border-border",
      )}
    >
      {children}
    </section>
  );
}
