import Link from "next/link";
import Glitch from "@/components/Glitch";
import LostField from "@/components/fx/LostField";
import "./not-found.css";

/* The root not-found renders for any URL the app does not match, and it renders
   inside the root layout — so the nav, the footer and the ambient aura arrive
   with it and only the hero is written here.

   Metadata is deliberately absent: Next supports a metadata export on
   global-not-found, not on this file, and Next already injects
   <meta name="robots" content="noindex"> for anything answering 404. */

export default function NotFound() {
  return (
    <div className="band hband">
      <div className="nfhero rin">
        <LostField />
        <div className="srail">
          <span className="l">Not found</span>
          <span className="r">Nothing is served at this address</span>
        </div>

        <h1>
          <Glitch word="404" />
        </h1>

        <p className="lede">
          One of the rules is that every route referenced is a route that exists. This address
          is not one of them — either it was typed wrong, or something linked here that should
          have been checked.
        </p>

        <div className="nfgo">
          <Link className="cta" href="/" data-t="Back to the homepage">
            Back to the homepage
          </Link>
          <Link className="cta-alt" href="/how-it-works">
            See how it works
          </Link>
        </div>

        <div className="nffoot">
          404 · the route was not found, which is the only honest thing this page can say
        </div>
      </div>
    </div>
  );
}
