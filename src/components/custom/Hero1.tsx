/* eslint-disable @next/next/no-img-element */
import React from "react";
import { PiSparkleFill } from "react-icons/pi";

const Hero1 = () => {
  return (
    <>
      <div
        id="home"
        className="relative flex flex-col items-center justify-center"
      >
        <div className="absolute -top-[900px] inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[1200px] h-[1000px] bg-[#1b093f] -z-40 blur-3xl rounded-full"></div>
        </div>
        <div className="flex flex-col items-center justify-center text-center mt-20">
          <div className="mb-6 min-w-72 px-4 py-2 gap-2 flex items-center text-center justify-center bg-[#2B1753] rounded-full shadow-lg">
            <PiSparkleFill className="text-6xl md:text-sm text-[#D9C4FF]" />
            <h2 className="text-2xl md:text-sm font-medium text-[#BF99F7]">
              Your Ultimate Creative Companion!{" "}
            </h2>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Elevate Your Career with Our <br /> AI-Powered Resume Optimizer
          </h1>
          <p className="text-lg md:text-base text-[#8D8395] mb-8 max-w-2xl">
            CVNinja is a highly customizable AI resume optimizer built with
            Tailwind CSS and Next.js. <br /> It includes all the essential
            pages, features, and components <br />
            you need to analyze, enhance, and perfect your resume.
          </p>
          <button className="px-6 py-3  bg-linear-to-t from-[#603ba0] to-[#4a18a0] hover:from-[#7b4fc7] hover:to-[#5923b6]  text-white rounded-md transition duration-300 cursor-pointer">
            Start Your Free Trial
          </button>
        </div>
        <div>
          <img
            src="https://ai-tool-tailwind.preview.uideck.com/images/hero.svg"
            alt="Hero Image"
            className="w-full max-w-5xl mt-20"
          />
        </div>
      </div>
    </>
  );
};

export default Hero1;
