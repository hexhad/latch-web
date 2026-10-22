import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Latch: Touch ID for your Mac apps. By HEXHAD.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  // Satori can't read Geist's variable font file, so the card uses its built-in sans.
  const icon = await readFile(join(process.cwd(), "public/latch-icon.png"));
  const src = `data:image/png;base64,${icon.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "0 96px",
          background: "radial-gradient(60% 80% at 75% 40%, rgba(67,224,160,0.22), transparent 70%), #0a0b0d",
          color: "#f4f5f6",
        }}
      >
        <img src={src} width={300} height={300} alt="" />
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 96, letterSpacing: -4, lineHeight: 1 }}>Latch</div>
          <div style={{ fontSize: 40, color: "#a3a9b1", lineHeight: 1.25, maxWidth: 620 }}>
            Touch ID for the Mac apps you choose.
          </div>
          <div style={{ fontSize: 24, letterSpacing: 4, color: "#43e0a0", marginTop: 12 }}>BY HEXHAD</div>
        </div>
      </div>
    ),
    size,
  );
}
