import { TYPOGRAPHY } from "@/lib/design/typography";
import { cn } from "@/lib/utils";
import { BaseTypographyProps } from "@/types/typography";

interface LabelProps extends BaseTypographyProps {}

export default function Label({
  children,
  className,
  as = "span",
}: LabelProps) {
  const Tag = as;

  return <Tag className={cn(TYPOGRAPHY.label, className)}>{children}</Tag>;
}
