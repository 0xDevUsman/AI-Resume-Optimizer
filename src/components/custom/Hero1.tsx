/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { PiSparkleFill } from "react-icons/pi";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";
const Hero1 = () => {
  const router = useRouter();
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center w-full overflow-hidden pt-20"
    >
      {/* Background blur circle - made more responsive */}
      <div className="absolute -top-[50vh] sm:-top-[900px] inset-0 flex items-center justify-center pointer-events-none w-full">
        <div className="w-[100vw] sm:w-[1200px] h-[80vh] sm:h-[1000px] bg-[#1b093f] -z-40 blur-3xl rounded-full"></div>
      </div>

      {/* Content container */}
      <motion.div
        className="flex flex-col items-center justify-center text-center mt-10 sm:mt-20 px-4 sm:px-6 w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="mb-4 sm:mb-6 w-full max-w-[18rem] px-4 py-2 gap-2 flex items-center justify-center bg-[#2B1753] rounded-full shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <PiSparkleFill className="text-[#D9C4FF]" />
          <h2 className="text-sm font-medium text-[#BF99F7]">
            Your Ultimate Creative Companion!
          </h2>
        </motion.div>

        <motion.h1
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Elevate Your Career with Our <br className="hidden sm:block" />
          AI-Powered Resume Optimizer
        </motion.h1>

        <motion.p
          className="text-xs sm:text-sm md:text-base text-[#8D8395] mb-6 sm:mb-8 max-w-2xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          CVNinja is a highly customizable AI resume optimizer built with
          Tailwind CSS and Next.js. It includes all the essential pages,
          features, and components you need to analyze, enhance, and perfect
          your resume.
        </motion.p>

        <motion.button
          onClick={() => router.push("/optimizer")}
          className="px-5 py-2 flex items-center gap-x-2 sm:px-6 sm:py-3 bg-gradient-to-t from-[#603ba0] to-[#4a18a0] hover:from-[#7b4fc7] hover:to-[#5923b6] text-white rounded-md transition duration-300 cursor-pointer text-sm sm:text-base"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          Get Started <FaArrowRight size={14} />
        </motion.button>
      </motion.div>

      {/* Hero image with fade-in - using Next.js Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.7 }}
        className="w-full max-w-5xl mt-10 sm:mt-20 px-4 sm:px-6"
      >
        <div className="relative w-full aspect-video">
          <img
            src="https://ai-tool-tailwind.preview.uideck.com/images/hero.svg"
            alt="AI Resume Optimizer Dashboard"
            className="object-contain"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 60vw"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero1;
