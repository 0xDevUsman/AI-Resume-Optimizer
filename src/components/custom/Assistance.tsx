/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { PiSparkleFill } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

const Assistance = () => {
  return (
    <section className="relative w-full max-w-5xl mx-auto mt-10 md:mt-20 px-4 sm:px-6">
      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full p-4 md:p-6 flex flex-col md:flex-row gap-6 items-center justify-between bg-conic-180 from-[#03010a] via-[#170a44] to-[#040011] rounded-xl border-[0.5px] border-white/20"
      >
        {/* Left Content */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-start justify-center pl-0 md:pl-4 lg:pl-16 w-full md:w-1/2"
        >
          <div className="mb-4 md:mb-6 w-full max-w-[18rem] px-4 py-2 gap-2 flex items-center justify-center bg-gradient-to-t from-[#030014] to-[#241844] rounded-full shadow-lg">
            <PiSparkleFill className="text-[#D9C4FF]" aria-hidden="true" />
            <h2 className="text-sm font-medium text-[#BF99F7]">
              AI-Powered Writing Tool
            </h2>
          </div>
          <h1 className="text-xl md:text-2xl font-medium text-white">
            Intelligent Writing Assistance
          </h1>
          <p className="text-xs md:text-sm text-[#8D8395] mt-2">
            Our AI writing tool is designed to empower you with exceptional
            writing capabilities, making the writing process...
          </p>
          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer px-4 py-2 rounded-full bg-gradient-to-t from-[#603ba0] to-[#4a18a0] hover:from-[#7b4fc7] hover:to-[#5923b6] text-sm mt-6 md:mt-10 text-white transition duration-300 w-full max-w-[12rem] flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#9D68F7]"
            aria-label="Learn more about AI writing tool"
          >
            Get Started
            <FaArrowRightLong />
          </motion.button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src="https://ai-tool-tailwind.preview.uideck.com/images/big-icon.svg"
            alt="Assistance Illustration"
            width={384}
            height={384}
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-5xl mt-8 md:mt-10 mb-10">
        {/* Card 1 */}
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-conic-180 from-[#03010a] via-[#170a44] to-[#040011] px-6 py-4 md:px-8 md:py-6 rounded-xl border-[0.5px] border-white/20 text-white"
        >
          <img
            src="https://ai-tool-tailwind.preview.uideck.com/images/icon-05.svg"
            alt="Empowering Writing Excellence Icon"
            width={64}
            height={64}
            className="w-12 h-12 md:w-16 md:h-16 p-3 md:p-4 border rounded-full bg-[#110E21] border-[#282537] mb-6 md:mb-10 mt-4 md:mt-10"
          />
          <h1 className="text-xl md:text-2xl font-medium mb-3 md:mb-4">
            Empowering Writing Excellence
          </h1>
          <p className="text-xs md:text-sm text-gray-500 mb-4 md:mb-6">
            Our AI writing tool is designed to empower you with exceptional
            writing capabilities, making the writing process...
          </p>
        </motion.article>

        {/* Card 2 */}
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-conic-180 from-[#03010a] via-[#170a44] to-[#040011] px-6 py-4 md:px-8 md:py-6 rounded-xl border-[0.5px] border-white/20 text-white"
        >
          <img
            src="https://ai-tool-tailwind.preview.uideck.com/images/icon-07.svg"
            alt="Grammar and Spell Check Icon"
            width={64}
            height={64}
            className="w-12 h-12 md:w-16 md:h-16 p-3 md:p-4 border rounded-full bg-[#110E21] border-[#282537] mb-6 md:mb-10 mt-4 md:mt-10"
          />
          <h1 className="text-xl md:text-2xl font-medium mb-3 md:mb-4">
            Grammar and Spell Check
          </h1>
          <p className="text-xs md:text-sm text-gray-500 mb-4 md:mb-6">
            Our AI writing tool is designed to empower you with exceptional
            writing capabilities.
          </p>
        </motion.article>
      </div>
    </section>
  );
};

export default Assistance;
