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
      <div style={{ height: "clamp(64px,7vw,104px)" }} />
      <WorkedProducts />
      <FailureModes />
      <Machinery />
      <WhoItIsFor />
      <Pricing />
      <Testimonials />
      <Faq />
      <ClosingCta />
    </>
  );
}
