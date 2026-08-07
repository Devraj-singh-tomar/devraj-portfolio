import { PropsWithChildren } from "react";
import Divider from "./divider";
import { SITE } from "@/config/site";

type SectionProps = PropsWithChildren<{
  showDivider?: boolean;
}>;

export default function Section({
  children,
  showDivider = true,
}: SectionProps) {
  return (
    <>
      <section className={`${SITE.layout.sectionPadding}`}>{children}</section>

      {showDivider && <Divider />}
    </>
  );
}
