"use client";

import { useState } from "react";

/* The contact address, assembled only when a person asks for it.

   The two halves are separate props and are only joined inside the click
   handler, so the address never exists as a contiguous string in the markup,
   in the RSC payload, or in the JS bundle — a crawler scraping the built output
   finds the two halves in different places and nothing that looks like an
   address. Do not "simplify" this by joining them at module scope or passing a
   pre-joined string: that defeats the entire point.

   With scripting off the button simply does not reveal, which is the same
   behaviour the source has. */
export default function MailReveal({ user, domain }: { user: string; domain: string }) {
  const [address, setAddress] = useState<string | null>(null);

  if (address) {
    return (
      <a className="mailrev done" href={`mailto:${address}`}>
        {address}
      </a>
    );
  }

  return (
    <button className="mailrev" type="button" onClick={() => setAddress(`${user}@${domain}`)}>
      Show email address
    </button>
  );
}
