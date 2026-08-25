import type { Metadata } from "next";
import LegalDoc from "@/components/LegalDoc";
import { legalSections, legalMeta } from "@/lib/legal";

/* noindex stays until the wording is settled. Remove it deliberately, not by
   tidying — see the note at the top of lib/legal.ts. */
export const metadata: Metadata = {
  title: "Legal notice",
  robots: { index: false },
};

export default function LegalPage() {
  return (
    <LegalDoc
      rail="Legal notice"
      railRight="Who runs this site"
      heading="Legal notice."
      lede="Who operates this website, how to reach them, and the terms under which the material here is published."
      meta={legalMeta}
      sections={legalSections}
    />
  );
}
