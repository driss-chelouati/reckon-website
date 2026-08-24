import Hero from "@/components/Hero";
import WidgetBento from "@/components/WidgetBento";
import WhatItIs from "@/components/WhatItIs";
import FailureMode from "@/components/FailureMode";
import InPractice from "@/components/InPractice";
import WorkedProducts from "@/components/WorkedProducts";
import FailureModes from "@/components/FailureModes";
import Machinery from "@/components/Machinery";
import WhoItIsFor from "@/components/WhoItIsFor";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import ClosingCta from "@/components/ClosingCta";

export default function Home() {
  return (
    <>
      <Hero />
      <WidgetBento />
      <WhatItIs />
      <FailureMode />
      <InPractice />
      <WorkedProducts />
      <FailureModes />
      <Machinery />
      <WhoItIsFor />
      <Pricing />
      <Testimonials />
      <Faq num="08" href="#top" label="Back to the top →" />
      <ClosingCta
        field
        headline={
          <>
            Ship the screen.
            <br />
            Not the guesswork.
          </>
        }
        lede="Components are the easy part. What you are missing is the layer that decides what gets computed, what gets shown, and what gets refused."
        primary={{ href: "/how-it-works", label: "See how it works", tear: "See how it works" }}
        secondary={{ href: "#templates", label: "See a worked product" }}
      />
    </>
  );
}
