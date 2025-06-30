"use client";
import React from "react";
import { PiSparkleFill } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Support = () => {
  return (
    <motion.section
      id="support"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex justify-center items-center px-4 sm:px-6 py-10 sm:py-16"
    >
      <div className="w-full max-w-3xl flex flex-col items-center rounded-xl bg-conic-180 from-[#03010a] via-[#170a44] to-[#040011] border border-white/20 text-center text-white p-6 sm:p-8 shadow-xl">
        {/* Tagline with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-6 px-4 py-2 gap-2 flex items-center justify-center bg-conic-180 from-[#2c145e] via-[#0c0453] to-[#33166e] rounded-full shadow-lg"
        >
          <PiSparkleFill className="text-xl sm:text-2xl text-[#D9C4FF]" />
          <h2 className="text-sm sm:text-lg font-medium text-[#e7d2ff]">
            Need Any Help?
          </h2>
        </motion.div>

        {/* Title & Subtitle with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
            Contact With Us
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 max-w-xl">
            Our AI writing tool is designed to empower you with exceptional
            writing capabilities, making the writing process more efficient,
            accurate, and enjoyable.
          </p>
        </motion.div>

        {/* Form with animation */}
        <motion.form
          className="w-full space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full p-3 text-white rounded-lg 
                focus:outline-none focus:ring-1 focus:ring-[#9D68F7] border border-white/10
                placeholder-gray-400 transition-all duration-200"
              required
              autoComplete="name"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-3 text-white rounded-lg 
                focus:outline-none focus:ring-1 focus:ring-[#9D68F7] border border-white/10
                placeholder-gray-400 transition-all duration-200"
              required
              autoComplete="email"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full p-3  text-white rounded-lg 
              focus:outline-none focus:ring-1 focus:ring-[#9D68F7] border border-white/10
              placeholder-gray-400 transition-all duration-200"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            className="w-full p-3  text-white rounded-lg 
              focus:outline-none focus:ring-1 focus:ring-[#9D68F7] border border-white/10
              placeholder-gray-400 transition-all duration-200 mb-4 bg-transparent"
            required
          />
          <Button
            type="submit"
            className="w-full sm:w-1/3 bg-gradient-to-t from-[#925EEE] to-[#6A2ADB] 
              hover:from-[#7b4fc7] hover:to-[#5923b6] text-white font-semibold
              transition-all duration-300"
          >
            Send Message
          </Button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Support;
