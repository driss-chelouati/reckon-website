import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";
import { isLive } from "@/lib/nav";

/* An in-site link that routes when the page exists and is a plain anchor when
   it does not. The megamenu deliberately lists eleven routes that have not been
   built yet; pointing next/link at them would have the router prefetch a 404
   for each one as soon as the menu is in the tree. */
export default function SiteLink({
  href,
  ...rest
}: { href: string } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return isLive(href) ? <Link href={href} {...rest} /> : <a href={href} {...rest} />;
}
