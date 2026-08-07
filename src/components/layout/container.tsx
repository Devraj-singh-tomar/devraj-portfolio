import { SITE } from "@/config/site";
import { PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren;

export default function Container({ children }: ContainerProps) {
  return (
    <main
      className={`mx-auto w-full ${SITE.layout.maxWidth} border-x border-border ${SITE.layout.padding}`}
    >
      {children}
    </main>
  );
}
