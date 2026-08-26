import type { Metadata } from "next";

/* Page metadata, in one shape.

   A page that declares `openGraph` replaces the root's openGraph entirely
   rather than merging into it — so a page that set only `title` was shipping
   the site's title and description in its share card, and every route on the
   site shared one card. Anything the root declares and a page still wants has
   to be restated here, which is why `type`, `siteName` and the twitter `card`
   are repeated below: once, rather than in every page.

   Descriptions are the page's own — a search result that repeats the site
   description sixteen times is sixteen results that say nothing. */

const SITE_NAME = "Reckon";

export function pageMeta(title: string, description: string): Metadata {
  return {
    title,
    description,
    openGraph: { title, description, type: "website", siteName: SITE_NAME },
    twitter: { card: "summary_large_image", title, description },
  };
}
