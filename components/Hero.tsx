import Link from "next/link";
import HeroField from "@/components/fx/HeroField";
import Glitch from "@/components/Glitch";

/* The landing hero reveals piece by piece rather than through the shared .rin
   stagger, because its four pieces sit inside a plain wrapper div — the delays
   are named individually in globals.css against these exact elements. */
export default function Hero() {
  return (
    <div className="band hband">
      <div className="hero rin">
        <HeroField />
        <div>
          <p className="eyebrow">A rules layer for AI-generated interfaces</p>
          <h1>
            Your agent’s first screen is usually <Glitch word="wrong" />.
          </h1>
          <p className="lede">
            Reckon is a rules layer for design agents building the software nobody demos: every
            figure traces to real data, every action fits the record it sits on, every state is
            drawn before a user finds it.
          </p>
          <div className="hero-actions">
            <Link className="cta" href="/how-it-works" data-t="See how it works">
              See how it works
            </Link>
            <Link className="cta-alt" href="/failure-modes">
              See what goes wrong
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
