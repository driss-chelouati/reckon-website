import type { MetadataRoute } from "next";

/* The install manifest. The two android-chrome sizes stay in /public because a
   manifest references its icons by URL rather than by the app/ file convention —
   the .ico, the SVG, the two PNG favicons and the apple icon are all in app/ and
   Next writes their <link> tags itself. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Reckon — a rules layer for AI-generated interfaces",
    short_name: "Reckon",
    description:
      "Reckon is a rules layer for design agents building the software nobody demos.",
    start_url: "/",
    display: "standalone",
    /* --bg and --fire, so the splash matches the page it opens */
    background_color: "#08080B",
    theme_color: "#F97A5C",
    icons: [
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
