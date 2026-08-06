import { TYPOGRAPHY } from "@/lib/design/typography";
import { cn } from "@/lib/utils";
import { BaseTypographyProps, TextVariant } from "@/types/typography";

interface TextProps extends BaseTypographyProps {
  variant?: TextVariant;
}

export default function Text({
  children,
  className,
  variant = "body",
  as = "span",
}: TextProps) {
  const Tag = as;

  return (
    <Tag className={cn(TYPOGRAPHY.text[variant], className)}>{children}</Tag>
  );
}
