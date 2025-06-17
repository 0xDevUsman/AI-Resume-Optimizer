import Assistance from "@/components/custom/Assistance";
import FeatureGrid from "@/components/custom/FeatureGrid";
import Hero1 from "@/components/custom/Hero1";
import Support from "@/components/custom/Support";
import Swipper from "@/components/custom/Swipper";
import Testimonials from "@/components/custom/Testimonials";
import React from "react";

const page = () => {
  return (
    <div className="">
      <Hero1 />
      <FeatureGrid />
      <Assistance />
      <Testimonials />
      <Swipper />
      <Support />
    </div>
  );
};

export default page;
