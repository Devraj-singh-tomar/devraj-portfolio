import type { ReactNode } from "react";

type EmptyStateProps = {
  children: ReactNode;
};

export function EmptyState({ children }: EmptyStateProps) {
  return (
    <div className="max-w-2xl space-y-3 text-sm leading-6 text-muted-foreground">
      {children}
    </div>
  );
}
