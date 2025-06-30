/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { PiSparkleFill } from "react-icons/pi";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ayaan Sheikh",
    username: "@ayaan_dev",
    description:
      "CVNinja helped me land 3 interviews within a week. The smart resume suggestions are game-changing!",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Nisha Verma",
    username: "@nisha.codes",
    description:
      "I love how clean and professional my resume looks now. The grammar and tone checker is a blessing.",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Kunal Mehra",
    username: "@kunal-ai",
    description:
      "From content builder to voice input, every feature feels built for modern job seekers. Huge fan of CVNinja!",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    name: "Zoya Khan",
    username: "@zoyak",
    description:
      "I used CVNinja for my first ever resume, and I got selected for a tech internship. Totally worth it!",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    name: "Raj Patel",
    username: "@rajpatel123",
    description:
      "The AI-powered bullet points saved me hours of writing. CVNinja is the ChatGPT of resumes!",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Sara Malik",
    username: "@saramalik",
    description:
      "Beautiful design, easy interface, and powerful AI tools — CVNinja is now my go-to for resume updates.",
    avatar: "https://i.pravatar.cc/150?img=14",
  },
  {
    name: "Devansh Tyagi",
    username: "@devtyagi",
    description:
      "I never realized how bad my old resume was until CVNinja fixed everything in minutes. Unreal results!",
    avatar: "https://i.pravatar.cc/150?img=19",
  },
  {
    name: "Aarushi Mehta",
    username: "@aarushi.uiux",
    description:
      "As a designer, I loved the aesthetic control and AI tweaks. I got callbacks from 4 companies!",
    avatar: "https://i.pravatar.cc/150?img=22",
  },
  {
    name: "Imran Qureshi",
    username: "@imran_builds",
    description:
      "I used CVNinja to pivot into tech from sales. The tone adjustment feature is pure gold!",
    avatar: "https://i.pravatar.cc/150?img=26",
  },
  {
    name: "Tanvi Sharma",
    username: "@tanvisharma",
    description:
      "Plagiarism check and resume analysis helped me stand out in my placement season. Highly recommended!",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    name: "Aman Kapoor",
    username: "@amankap",
    description:
      "The AI content builder gave me the perfect words. I never thought writing resumes could be this fun!",
    avatar: "https://i.pravatar.cc/150?img=35",
  },
  {
    name: "Rhea Fernandes",
    username: "@rhea.codes",
    description:
      "I’ve tried Canva, Zety — nothing comes close to the flexibility and power of CVNinja.",
    avatar: "https://i.pravatar.cc/150?img=38",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      aria-label="User testimonials"
      className="flex flex-col items-center justify-center py-12 md:py-20 px-4 sm:px-6 bg-[#030014]"
    >
      {/* Header with animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-8 px-4 py-2 gap-2 flex items-center justify-center border bg-gradient-to-t from-[#030014] to-[#241844] rounded-full shadow-lg w-fit mx-auto"
      >
        <PiSparkleFill className="text-[#D9C4FF]" />
        <h2 className="text-sm font-medium text-[#b47ef1]">Wall of love</h2>
      </motion.div>

      {/* Title with animation */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-2"
      >
        What Our Users Say
      </motion.h1>

      {/* Description with animation */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto text-xs sm:text-sm text-[#8D8395] my-4 md:my-6 text-center"
      >
        Our AI writing tool is designed to empower you with exceptional writing
        capabilities, making the writing process more efficient, accurate, and
        enjoyable.
      </motion.p>

      {/* Testimonials grid with staggered animations */}
      <div className="w-full max-w-6xl mx-auto mt-8 md:mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 px-4">
          {testimonials.map(
            ({ name, username, description, avatar }, index) => (
              <motion.article
                key={username}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -5 }}
                className="flex flex-col p-5 sm:p-6 bg-conic-180 from-[#03010a] via-[#170a44] to-[#040011] border border-white/10 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={avatar}
                      alt={`Avatar of ${name}`}
                      className="object-cover"
                      sizes="(max-width: 640px) 50px, 60px"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-sm font-semibold text-white">{name}</p>
                    <p className="text-xs text-gray-400">{username}</p>
                  </div>
                </div>

                <blockquote className="text-xs sm:text-sm text-[#cac2d1] mt-2 italic">
                  &quot;{description}&quot;
                </blockquote>
              </motion.article>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
