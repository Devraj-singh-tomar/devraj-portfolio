import { NextResponse } from "next/server";

type AnalyticsResponse = {
  data?: {
    pageviews?: number;
    visitors?: number;
  };
};

const successHeaders = {
  "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
};

const errorHeaders = {
  "Cache-Control": "no-store",
};

export async function GET() {
  const token = process.env.VERCEL_ANALYTICS_TOKEN;
  const projectId = process.env.VERCEL_ANALYTICS_PROJECT_ID;

  if (!token || !projectId) {
    return NextResponse.json(
      { error: "Analytics configuration is missing" },
      { status: 503, headers: errorHeaders },
    );
  }

  try {
    const url = new URL(
      "https://api.vercel.com/v1/query/web-analytics/visits/count",
    );

    url.searchParams.set("projectId", projectId);

    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      next: {
        revalidate: 3600,
      },
    });

    if (!response.ok) {
      console.error("Vercel Analytics API returned status:", response.status);

      return NextResponse.json(
        { error: "Unable to retrieve analytics" },
        { status: 503, headers: errorHeaders },
      );
    }

    const result = (await response.json()) as AnalyticsResponse;
    const visitors = result.data?.visitors;

    if (typeof visitors !== "number" || !Number.isFinite(visitors)) {
      throw new Error("Unexpected analytics response");
    }

    return NextResponse.json({ visitors }, { headers: successHeaders });
  } catch (error) {
    console.error("Failed to retrieve visitor count:", error);

    return NextResponse.json(
      { error: "Visitor count temporarily unavailable" },
      { status: 503, headers: errorHeaders },
    );
  }
}
