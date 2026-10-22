"use client";

import { useEffect, useState } from "react";

type VisitorCountResponse = {
  visitors: number;
};

export default function VisitorCount() {
  const [visitors, setVisitors] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadVisitorCount() {
      try {
        const response = await fetch("/api/analytics/visitors", {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Visitor count request failed");
        }

        const data = (await response.json()) as VisitorCountResponse;

        if (
          !cancelled &&
          typeof data.visitors === "number" &&
          Number.isFinite(data.visitors)
        ) {
          setVisitors(data.visitors);
        }
      } catch {
        // Keep the rest of the footer working if analytics is unavailable.
      }
    }

    void loadVisitorCount();

    return () => {
      cancelled = true;
    };
  }, []);

  if (visitors === null) {
    return null;
  }

  return (
    <p
      aria-label={`${visitors.toLocaleString("en-IN")} visitors`}
      className="text-xs text-muted-foreground"
    >
      {visitors.toLocaleString("en-IN")} visitors
    </p>
  );
}
