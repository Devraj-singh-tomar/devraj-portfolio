import { cn } from "@/lib/utils";
import Heading from "../ui/typography/Heading";
import Label from "../ui/typography/Label";
import Text from "../ui/typography/Text";

interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}

export default function SectionHeader({
  description,
  label,
  title,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("space-y-2.5", className)}>
      <Label>{label}</Label>

      <Heading level={2}>{title}</Heading>

      {description && (
        <Text variant="muted" as="p">
          {description}
        </Text>
      )}
    </div>
  );
}
