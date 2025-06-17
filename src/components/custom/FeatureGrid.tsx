/* eslint-disable @next/next/no-img-element */
import React from "react";
import { PiSparkleFill } from "react-icons/pi";

const FeatureGrid = () => {
  const features = [
    {
      title: " Smart Resume Suggestions",
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
        "Speak your ideas and convert them into resume-ready text.  COMMING SOON",
      icon: "https://ai-tool-tailwind.preview.uideck.com/images/icon-04.svg",
    },
    {
      title: "Tone & Style Tuning",
      description:
        "Adapt tone to match job roles — formal, friendly, or executive.  COMMING SOON",
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
    <>
      <div
        id="features"
        className="relative flex flex-col items-center justify-center text-center mt-20"
      >
        <div className="absolute top-[10px] w-54 h-6 bg-gradient-to-r from-purple-400 via-white to-purple-400 opacity-30 blur-lg rounded-full"></div>
        <div className="mb-6 px-4 py-2 gap-2 flex items-center text-center justify-center border bg-gradient-to-t from-[#030014] to-[#241844] rounded-full shadow-lg relative z-10">
          <PiSparkleFill className="text-6xl md:text-sm text-[#D9C4FF]" />
          <h2 className="text-2xl md:text-sm font-medium text-[#C49CFF]">
            Some of Main Features
          </h2>
        </div>
        <h1 className="text-5xl font-bold mt-2 text-white">
          Key Features of Our Tool
        </h1>
        <p className="max-w-[714px] mx-auto mb-5 font-normal text-base text-[#8D8395] mt-6">
          Our AI resume tool is designed to empower you with smart
          suggestions—enhancing content, formatting, and keywords to make your
          resume job-ready, faster and smarter.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-white max-w-6xl mx-auto mt-10 p-6 shadow-lg">
          {features.map((feature, idx) => {
            let borderClass = "border-[#282537]";
            let hoverBg = "";

            // Borders
            if (idx < 3) {
              if (idx !== 2) borderClass += " lg:border-r-[1px]";
              hoverBg = "hover:from-[#0F0C1F] hover:to-[#030014]";
            } else {
              borderClass += " lg:border-t-[1px]";
              if (idx !== 3) borderClass += " lg:border-l-[1px]";
              hoverBg = "hover:from-[#030014] hover:to-[#0F0C1F]";
            }

            return (
              <div
                key={idx}
                className={`flex flex-col items-center text-center h-64 bg-[#030014] p-6 ${borderClass} shadow-lg transition duration-300 bg-gradient-to-t ${hoverBg}`}
              >
                <span className="relative max-w-[80px] w-full h-20 rounded-full bg-[#110E21] border-[1px] border-[#282537] inline-flex items-center justify-center mb-8 mx-auto">
                  <img src={feature.icon} alt="icon" />
                </span>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FeatureGrid;
