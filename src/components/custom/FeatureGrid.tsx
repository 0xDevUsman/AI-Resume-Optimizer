/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { PiSparkleFill } from "react-icons/pi";
import { motion } from "framer-motion";

const FeatureGrid = () => {
  const features = [
    {
      title: "Smart Resume Suggestions",
      description:
        "Get real-time improvements to boost clarity, impact, and readability.",
      icon: "https://ai-tool-tailwind.preview.uideck.com/images/icon-01.svg",
    },
    {
      title: "Auto Grammar & Spell Check",
      description: "Fix errors instantly for a clean, professional resume.",
      icon: "https://ai-tool-tailwind.preview.uideck.com/images/icon-02.svg",
    },
    {
      title: "Plagiarism Checker",
      description: "Ensure 100% original and authentic content every time.",
      icon: "https://ai-tool-tailwind.preview.uideck.com/images/icon-03.svg",
    },
    {
      title: "Voice Input to Resume",
      description:
        "Speak your ideas and convert them into resume-ready text. COMING SOON",
      icon: "https://ai-tool-tailwind.preview.uideck.com/images/icon-04.svg",
    },
    {
      title: "Tone & Style Tuning",
      description:
        "Adapt tone to match job roles — formal, friendly, or executive. COMING SOON",
      icon: "https://ai-tool-tailwind.preview.uideck.com/images/icon-05.svg",
    },
    {
      title: "AI-Powered Content Builder",
      description:
        "Generate powerful bullet points, summaries, and job-specific text in seconds.",
      icon: "https://ai-tool-tailwind.preview.uideck.com/images/icon-06.svg",
    },
  ];

  return (
    <section
      id="features"
      className="relative w-full max-w-7xl mx-auto flex flex-col items-center justify-center text-center mt-10 md:mt-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute top-[10px] w-54 h-6 bg-gradient-to-r from-purple-400 via-white to-purple-400 opacity-30 blur-lg rounded-full" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-4 md:mb-6 px-4 py-2 gap-2 flex items-center justify-center border bg-gradient-to-t from-[#030014] to-[#241844] rounded-full shadow-lg relative z-10"
      >
        <PiSparkleFill className="text-[#D9C4FF]" />
        <h2 className="text-sm md:text-sm font-medium text-[#C49CFF]">
          Some of Main Features
        </h2>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2 text-white"
      >
        Key Features of Our Tool
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="max-w-[714px] mx-auto mb-4 md:mb-5 font-normal text-xs md:text-sm text-[#8D8395] mt-4 md:mt-6 px-2"
      >
        Our AI resume tool is designed to empower you with smart
        suggestions—enhancing content, formatting, and keywords to make your
        resume job-ready, faster and smarter.
      </motion.p>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-[#282537] text-white mt-8 md:mt-10 shadow-lg overflow-hidden rounded-xl">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center text-center h-56 sm:h-64 bg-[#030014] p-4 sm:p-6 transition duration-300"
          >
            <span className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#110E21] border-[1px] border-[#282537] inline-flex items-center justify-center mb-4 sm:mb-6 mx-auto">
              <img
                src={feature.icon}
                alt=""
                width={40}
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10"
              />
            </span>
            <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
              {feature.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;
