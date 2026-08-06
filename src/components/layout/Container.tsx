import { LAYOUT } from "@/lib/design/layout";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto",
        LAYOUT.containerWidth,
        LAYOUT.containerPadding,
        className,
      )}
    >
      {children}
    </div>
  );
}
