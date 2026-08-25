import type { Metadata } from "next";
import LegalDoc from "@/components/LegalDoc";
import { privacySections, privacyMeta } from "@/lib/legal";

/* noindex stays until the wording is settled. Remove it deliberately, not by
   tidying — see the note at the top of lib/legal.ts.

   #fonts claims no request goes to Google Fonts. That is true because
   app/layout.tsx self-hosts all three families with next/font/local. If fonts
   ever move to a CDN, rewrite that section before shipping. */
export const metadata: Metadata = {
  title: "Privacy policy",
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <LegalDoc
      rail="Privacy"
      railRight="What is collected, and what is not"
      heading="Privacy policy."
      lede="A short document, because the site does very little. There is no account to create, nothing to log in to, and no analytics watching you read."
      meta={privacyMeta}
      sections={privacySections}
    />
  );
}
