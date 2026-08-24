import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Aura from "@/components/Aura";
import RouteFlag from "@/components/RouteFlag";

// The three families, self-hosted and preloaded via next/font/local.
//
// Two details here are load-bearing, both verified by pixel-diffing this page
// against the original landing.html:
//
// 1. The files come from @fontsource-variable, whose woff2 binaries are
//    byte-identical to what fonts.gstatic.com serves a browser — the same files
//    the original loaded over the network. next/font/google cannot be used: it
//    calls Google Fonts with an older Chrome user-agent, and Google answers that
//    with differently-built binaries (~2.5% wider serif glyphs), which re-wrapped
//    several headlines.
//
// 2. Each family is declared once per weight against the same variable file,
//    mirroring the shape of Google's stylesheet. A single `font-weight: 200 800`
//    range face lays out identically but rasterises glyphs a hair differently,
//    because the wght variation is applied rather than the face being pinned.
//
// Latin subset only, which is what the original effectively used: every
// non-ASCII character on the page is inside the latin unicode-range except
// →, ◆ and ✓, and those fall back to a system font in the original too.

const newsreader = localFont({
  src: [
    { path: "../node_modules/@fontsource-variable/newsreader/files/newsreader-latin-standard-normal.woff2", weight: "300", style: "normal" },
    { path: "../node_modules/@fontsource-variable/newsreader/files/newsreader-latin-standard-normal.woff2", weight: "400", style: "normal" },
    { path: "../node_modules/@fontsource-variable/newsreader/files/newsreader-latin-standard-normal.woff2", weight: "500", style: "normal" },
  ], // the variable file, so the opsz 6..72 optical-size axis still applies
  display: "swap",
  variable: "--font-newsreader",
  // globals.css already carries the fallback stack the original used, so no
  // synthetic metric-adjusted face is inserted ahead of it.
  adjustFontFallback: false,
});

const instrumentSans = localFont({
  src: [
    { path: "../node_modules/@fontsource-variable/instrument-sans/files/instrument-sans-latin-wght-normal.woff2", weight: "400", style: "normal" },
    { path: "../node_modules/@fontsource-variable/instrument-sans/files/instrument-sans-latin-wght-normal.woff2", weight: "500", style: "normal" },
    { path: "../node_modules/@fontsource-variable/instrument-sans/files/instrument-sans-latin-wght-normal.woff2", weight: "600", style: "normal" },
  ],
  display: "swap",
  variable: "--font-instrument-sans",
  adjustFontFallback: false,
});

const jetbrainsMono = localFont({
  src: [
    { path: "../node_modules/@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2", weight: "400", style: "normal" },
    { path: "../node_modules/@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2", weight: "500", style: "normal" },
  ],
  display: "swap",
  variable: "--font-jetbrains-mono",
  adjustFontFallback: false,
});

const title = "Reckon — a rules layer for AI-generated interfaces";
const description =
  "A design system whose product is the rules: it tells a design agent how to assemble a screen and derive the numbers on it, for dense, record-centric software.";

export const metadata: Metadata = {
  // Every other page carries "… — Reckon"; the landing page is the exception
  // and uses the full line on its own.
  title: { default: title, template: "%s — Reckon" },
  description,
  openGraph: {
    title,
    description,
    type: "website",
    siteName: "Reckon",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08080B",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body
        className={`${newsreader.variable} ${instrumentSans.variable} ${jetbrainsMono.variable}`}
      >
        <RouteFlag />
        <Aura />
        <div className="wrap">
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
