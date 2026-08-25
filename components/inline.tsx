import type { ReactNode } from "react";

/* Page copy that lives in lib/ runs short marked spans through the middle of
   sentences — `readme.md` — the design guide itself, a ledger row opening on a
   bold clause, a document paragraph with one phrase highlighted. Splitting those
   into separate fields the way the product pages do would take three fields to
   say one sentence, so the runs are marked in the string instead:

     `backticks` → <code>    **stars** → <b>    ==equals== → <mark>
     [text](/href) → <a>

   Links that leave the site get rel="noopener"; in-site ones are left as plain
   anchors rather than next/link, because these run inside prose rather than as
   navigation and the router has nothing to prefetch usefully.

   Nothing else is markup; a stray asterisk stays an asterisk. */

const RUN = /`([^`]+)`|\*\*([^*]+)\*\*|==([^=]+)==|\[([^\]]+)\]\(([^)]+)\)/g;

export default function inline(text: string): ReactNode {
  const out: ReactNode[] = [];
  let at = 0;

  for (const m of text.matchAll(RUN)) {
    const i = m.index;
    if (i > at) out.push(text.slice(at, i));
    if (m[1]) out.push(<code key={i}>{m[1]}</code>);
    else if (m[2]) out.push(<b key={i}>{m[2]}</b>);
    else if (m[3]) out.push(<mark key={i}>{m[3]}</mark>);
    else {
      const href = m[5];
      const external = !href.startsWith("/") && !href.startsWith("#");
      out.push(
        <a key={i} href={href} rel={external ? "noopener" : undefined}>
          {m[4]}
        </a>
      );
    }
    at = i + m[0].length;
  }
  if (at < text.length) out.push(text.slice(at));

  return out;
}
