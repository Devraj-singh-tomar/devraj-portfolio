import { siteConfig } from "@/config/site";

export function SocialImage() {
  const domain = new URL(siteConfig.url).host;

  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        color: "#fafafa",
        fontFamily: "Arial, Helvetica, sans-serif",
        background:
          "linear-gradient(135deg, #09090b 0%, #161619 58%, #09090b 100%)",
      }}
    >
      {/* Decorative circles */}
      <div
        style={{
          position: "absolute",
          right: 55,
          top: 105,
          width: 240,
          height: 240,
          borderRadius: 220,
          border: "1px solid rgba(255,255,255,0.14)",
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.09), rgba(255,255,255,0.005))",
        }}
      />

      <div
        style={{
          position: "absolute",
          right: 125,
          top: 175,
          width: 200,
          height: 200,
          borderRadius: 20,
          border: "1px solid rgba(255,255,255,0.10)",
        }}
      />

      {/* Main content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          width: "100%",
          padding: "50px 72px 42px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 16,
            letterSpacing: "0.14em",
            color: "#a1a1aa",
          }}
        >
          <span>{domain.toUpperCase()}</span>
          <span>SOFTWARE ENGINEERING</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 100,
            maxWidth: 900,
          }}
        >
          <div
            style={{
              fontSize: 66,
              fontWeight: 700,
              letterSpacing: "-0.045em",
              lineHeight: 1.08,
            }}
          >
            {siteConfig.name}
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 14,
              fontSize: 30,
              color: "#d4d4d8",
            }}
          >
            {siteConfig.title}
          </div>

          <div
            style={{
              display: "flex",
              maxWidth: 790,
              marginTop: 18,
              fontSize: 21,
              lineHeight: 1.4,
              color: "#a1a1aa",
            }}
          >
            {siteConfig.tagline}
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "auto",
            paddingTop: 20,
            borderTop: "1px solid rgba(255,255,255,0.18)",
            fontSize: 15,
            color: "#d4d4d8",
          }}
        >
          <span>
            REAL-TIME SYSTEMS {"  ·  "} AI {"  ·  "} DISTRIBUTED INFRASTRUCTURE
          </span>

          <span>{domain}</span>
        </div>
      </div>
    </div>
  );
}
