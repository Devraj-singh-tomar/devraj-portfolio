export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type TextVariant = "body" | "lead" | "muted" | "small";

export type TypographyElement = "span" | "p" | "div";

export interface BaseTypographyProps {
  children: React.ReactNode;
  className?: string;
  as?: TypographyElement;
}
