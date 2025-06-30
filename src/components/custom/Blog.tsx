/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { PiSparkleFill } from "react-icons/pi";
import { motion } from "framer-motion";

const blog = [
  {
    id: 1,
    title: "Noteworthy Technology Acquisitions 2021",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. This includes the acquisitions of major cloud service providers, AI startups, and cybersecurity companies...",
    image: "https://ai-tool-tailwind.preview.uideck.com/images/blog-01.png",
  },
  {
    id: 2,
    title: "Revolutionizing AI in 2025",
    description:
      "Discover how AI trends are shaping the future of writing and content creation in 2025. From generative AI to advanced natural language processing...",
    image: "https://ai-tool-tailwind.preview.uideck.com/images/blog-02.png",
  },
  {
    id: 3,
    title: "The Rise of Generative Tools",
    description:
      "A deep dive into how generative AI is transforming industries like never before. Explore its applications in design, code generation, marketing, healthcare, and more...",
    image: "https://ai-tool-tailwind.preview.uideck.com/images/blog-03.png",
  },
];

const Blog = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center mt-20 px-4"
    >
      <div className="w-full flex flex-col items-center text-center text-white p-8 shadow-xl">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 px-4 mt-20 py-2 gap-2 flex items-center justify-center bg-conic-180 from-[#2c145e] via-[#0c0453] to-[#33166e] rounded-full shadow-lg"
        >
          <PiSparkleFill className="text-base text-[#d6c5f7]" />
          <h2 className="text-sm font-medium text-[#ce98fa]">
            Read Our Latest Blogs
          </h2>
        </motion.div>
        <h1 className="text-4xl font-bold">Latest Blogs and News</h1>
        <p className="text-sm text-gray-300 mb-8 mt-4 max-w-2xl">
          Our AI writing tool is designed to empower you with exceptional
          writing capabilities, making the writing process more efficient,
          accurate, and enjoyable.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blog.map((item, index) => (
            <BlogCard key={item.id} {...item} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const BlogCard = ({
  title,
  description,
  image,
  index,
}: {
  title: string;
  description: string;
  image: string;
  index: number;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      className="max-w-sm border rounded-lg shadow-sm bg-transparent backdrop-blur-sm border-white/10 transition-all duration-300"
    >
      <a href="#">
        <img
          className="w-full rounded-t-lg transition-transform duration-500 hover:scale-105 hover:brightness-110"
          src={image}
          alt={title}
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            {title}
          </h5>
        </a>
        <motion.p
          animate={{ height: isExpanded ? "auto" : "4.5rem" }}
          className={`mb-3 font-normal text-gray-400 overflow-hidden transition-all duration-300 ease-in-out`}
        >
          {description}
        </motion.p>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-gradient-to-t from-[#925EEE] to-[#6A2ADB] hover:from-[#7b4fc7] hover:to-[#5923b6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]/50 cursor-pointer"
        >
          {isExpanded ? "Ok, got it" : "Read more"}
          <svg
            className={`w-3.5 h-3.5 ms-2 transition-transform ${
              isExpanded ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 14 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 5h12m0 0L9 1m4 4L9 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

export default Blog;
