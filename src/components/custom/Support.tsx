"use client";
import React, { useState } from "react";
import { PiSparkleFill } from "react-icons/pi";
import { Button } from "@/components/ui/button";

const Support = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement submit logic or API call here
    alert("Message sent! (functionality not implemented yet)");
  };

  return (
    <div id="support" className="flex justify-center items-center px-4 mt-10">
      <div className="w-full max-w-3xl flex flex-col items-center rounded-lg bg-conic-180 from-[#03010a] via-[#170a44] to-[#040011] border border-white/20 text-center text-white p-8 shadow-xl">
        {/* Tagline */}
        <div className="mb-6 px-4 mt-20 py-2 gap-2 flex items-center justify-center bg-conic-180 from-[#2c145e] via-[#0c0453] to-[#33166e] rounded-full shadow-lg">
          <PiSparkleFill className="text-2xl text-[#D9C4FF]" />
          <h2 className="text-lg font-medium text-[#e7d2ff]">Need Any Help?</h2>
        </div>

        {/* Title & Subtitle */}
        <h1 className="text-4xl font-bold text-white mb-2">Contact With Us</h1>
        <p className="text-sm text-gray-300 mb-8 max-w-xl">
          Our AI writing tool is designed to empower you with exceptional
          writing capabilities, making the writing process more efficient,
          accurate, and enjoyable.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-transparent text-white rounded-lg 
             focus:outline-none focus:ring-1 focus:ring-[#9D68F7] focus:border-[#9D68F7] border border-white/10"
              required
              autoComplete="name"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-transparent text-white rounded-lg 
             focus:outline-none focus:ring-1 focus:ring-[#9D68F7] focus:border-[#9D68F7] border border-white/10"
              required
              autoComplete="email"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-3 bg-transparent text-white rounded-lg 
             focus:outline-none focus:ring-1 focus:ring-[#9D68F7] focus:border-[#9D68F7] border border-white/10"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 bg-transparent text-white rounded-lg 
             focus:outline-none focus:ring-1 focus:ring-[#9D68F7] focus:border-[#9D68F7] border border-white/10 mb-4"
            required
          />
          <Button
            type="submit"
            className="w-1/3 bg-gradient-to-t from-[#925EEE] to-[#6A2ADB] hover:from-[#7b4fc7] hover:to-[#5923b6] text-white font-semibold cursor-pointer"
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Support;
