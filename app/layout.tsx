import type { Metadata, Viewport } from "next";
import { Newsreader, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// Variable cuts: Newsreader keeps its optical-size axis, the other two keep the
// full weight range the stylesheet asks for (400/500/600 and 400/500).
const newsreader = Newsreader({
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
  variable: "--font-newsreader",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-instrument-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

const title = "Reckon — a rules layer for AI-generated interfaces";
const description =
  "A design system whose product is the rules: it tells a design agent how to assemble a screen and derive the numbers on it, for dense, record-centric software.";

export const metadata: Metadata = {
  title,
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
        <div className="aura">
          <i className="a1" />
          <i className="a2" />
          <i className="a3" />
        </div>
        <div className="wrap">
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
