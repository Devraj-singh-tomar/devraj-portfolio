import { PropsWithChildren } from "react";

type PageWrapperProps = PropsWithChildren;

export default function PageWrapper({ children }: PageWrapperProps) {
  return <div className="min-h-screen">{children}</div>;
}
