import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import { HEXHAD_SITE, MadeByHexhad } from "./components/Hexhad";
import { CONTACT, DMG_URL, SITE_URL } from "./site";
import "./globals.css";

// Geist and Geist Mono are self-hosted (the same files the app bundles), so pages make no font requests to third parties.
const geist = localFont({
  src: "./fonts/Geist.ttf",
  weight: "100 900",
  variable: "--font-geist",
  display: "swap",
});

const mono = localFont({
  src: "./fonts/GeistMono.ttf",
  weight: "100 900",
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Latch: Touch ID for your Mac apps",
    template: "%s · Latch",
  },
  description:
    "Latch hides the Mac apps you choose until Touch ID or your Mac password opens them again. Free for macOS 26.",
  authors: [{ name: "HEXHAD", url: HEXHAD_SITE }],
  creator: "HEXHAD",
  publisher: "HEXHAD",
  openGraph: {
    title: "Latch: Touch ID for your Mac apps",
    description: "Hide the Mac apps you choose until Touch ID opens them again.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f5f6" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0b0d" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geist.variable} ${mono.variable}`}>
      <body>
        <header className="site-header">
          <div className="header-inner glass">
            <Link href="/" className="brand">
              <Image src="/latch-icon.png" alt="" width={28} height={28} />
              <span>Latch</span>
            </Link>
            <nav>
              <Link href="/#how">How it works</Link>
              <Link href="/privacy">Privacy</Link>
              <a href={DMG_URL} className="nav-cta" download>
                Download
              </a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="footer-inner">
            <Link href="/" className="brand brand-small">
              <Image src="/latch-icon.png" alt="" width={22} height={22} />
              <span>Latch</span>
            </Link>
            <nav className="footer-links">
              <Link href="/privacy">Privacy policy</Link>
              <a href={`mailto:${CONTACT}`}>{CONTACT}</a>
            </nav>
          </div>
          <div className="footer-inner footer-studio">
            <MadeByHexhad />
            <span>© {new Date().getFullYear()} HEXHAD</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
