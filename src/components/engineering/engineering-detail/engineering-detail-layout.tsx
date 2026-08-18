import { PropsWithChildren } from "react";

type EngineeringDetailedlayoutProps = PropsWithChildren<{
  children: React.ReactNode;
}>;

export default function EngineeringDetailedlayout({
  children,
}: EngineeringDetailedlayoutProps) {
  return <article className="mx-auto w-full">{children}</article>;
}
