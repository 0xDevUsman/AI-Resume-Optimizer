import Assistance from "@/components/custom/Assistance";
import Blog from "@/components/custom/Blog";
import FeatureGrid from "@/components/custom/FeatureGrid";
import Footer from "@/components/custom/Footer";
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
      <Blog />
      <Footer />
    </div>
  );
};

export default page;
