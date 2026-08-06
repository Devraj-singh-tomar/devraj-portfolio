import { TYPOGRAPHY } from "@/lib/design/typography";
import { cn } from "@/lib/utils";
import { HeadingLevel } from "@/types/typography";
import { JSX } from "react/jsx-runtime";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  level: HeadingLevel;
}

export default function Heading({ children, className, level }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return (
    <Tag className={cn(TYPOGRAPHY.heading[level], className)}>{children}</Tag>
  );
}
