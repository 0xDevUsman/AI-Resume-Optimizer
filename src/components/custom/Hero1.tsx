/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { PiSparkleFill } from "react-icons/pi";
import { motion } from "framer-motion";

const Hero1 = () => {
  return (
    <div
      id="home"
      className="relative flex flex-col items-center justify-center"
    >
      {/* Background blur circle */}
      <div className="absolute -top-[900px] inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[1200px] h-[1000px] bg-[#1b093f] -z-40 blur-3xl rounded-full"></div>
      </div>

      {/* Content container */}
      <motion.div
        className="flex flex-col items-center justify-center text-center mt-20 px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="mb-6 min-w-72 px-4 py-2 gap-2 flex items-center text-center justify-center bg-[#2B1753] rounded-full shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <PiSparkleFill className="text-xl md:text-sm text-[#D9C4FF]" />
          <h2 className="text-base md:text-sm font-medium text-[#BF99F7]">
            Your Ultimate Creative Companion!{" "}
          </h2>
        </motion.div>

        <motion.h1
          className="text-3xl md:text-6xl font-bold text-white mb-6 px-2 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Elevate Your Career with Our <br /> AI-Powered Resume Optimizer
        </motion.h1>

        <motion.p
          className="text-sm sm:text-lg px-4 sm:px-0 md:text-base text-[#8D8395] mb-8 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          CVNinja is a highly customizable AI resume optimizer built with
          Tailwind CSS and Next.js. <br /> It includes all the essential pages,
          features, and components <br />
          you need to analyze, enhance, and perfect your resume.
        </motion.p>

        <motion.button
          className="px-6 py-3 bg-gradient-to-t from-[#603ba0] to-[#4a18a0] hover:from-[#7b4fc7] hover:to-[#5923b6] text-white rounded-md transition duration-300 cursor-pointer"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          Start Your Free Trial
        </motion.button>
      </motion.div>

      {/* Hero image with fade-in */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.7 }}
        className="w-full max-w-5xl mt-20 px-4"
      >
        <img
          src="https://ai-tool-tailwind.preview.uideck.com/images/hero.svg"
          alt="Hero Image"
          className="w-full"
        />
      </motion.div>
    </div>
  );
};

export default Hero1;
