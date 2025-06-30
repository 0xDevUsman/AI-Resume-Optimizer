import Assistance from "@/components/custom/Assistance";
import Blog from "@/components/custom/Blog";
import FeatureGrid from "@/components/custom/FeatureGrid";
import Footer from "@/components/custom/Footer";
import Hero1 from "@/components/custom/Hero1";
import Support from "@/components/custom/Support";
import Swipper from "@/components/custom/Swipper";
import Testimonials from "@/components/custom/Testimonials";
import React from "react";

const Page = () => {
  return (
    <main className="min-h-screen flex flex-col w-full">
      <div className="flex-1 flex flex-col w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <Hero1 />
        <FeatureGrid />
        <Assistance />
        <Testimonials />
        <Swipper />
        <Support />
        <Blog />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </main>
  );
};

export default Page;
