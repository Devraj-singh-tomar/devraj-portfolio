import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        background: "#0b0b0d",
        color: "#f5f5f5",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: 126,
        fontWeight: 700,
        letterSpacing: "-0.08em",
      }}
    >
      D
    </div>,
    size,
  );
}
