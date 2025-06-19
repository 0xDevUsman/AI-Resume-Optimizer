/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { PiSparkleFill } from "react-icons/pi";

const blog = [
  {
    id: 1,
    title: "Noteworthy Technology Acquisitions 2021",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. This includes the acquisitions of major cloud service providers, AI startups, and cybersecurity companies, which are reshaping the landscape of enterprise technology. Keep reading to explore how these changes may affect your business. From Microsoft’s landmark Nuance deal to Salesforce’s Slack acquisition, each move represents a strategic bet on the future of AI, remote work, and digital transformation. These high-stake acquisitions are not just reshaping portfolios—they’re redefining the battleground for innovation in the years to come.",
    image: "https://ai-tool-tailwind.preview.uideck.com/images/blog-01.png",
  },
  {
    id: 2,
    title: "Revolutionizing AI in 2025",
    description:
      "Discover how AI trends are shaping the future of writing and content creation in 2025. From generative AI to advanced natural language processing, companies are rapidly transforming the way we communicate and automate tasks using AI. Dive into what’s next and how to stay ahead in this evolving space. The convergence of multi-modal models, real-time voice synthesis, and hyper-personalized assistants is changing how we create and consume content. Whether you're a content creator, a developer, or a digital entrepreneur, understanding these shifts is critical to staying competitive in the AI-driven economy.",
    image: "https://ai-tool-tailwind.preview.uideck.com/images/blog-02.png",
  },
  {
    id: 3,
    title: "The Rise of Generative Tools",
    description:
      "A deep dive into how generative AI is transforming industries like never before. Explore its applications in design, code generation, marketing, healthcare, and more. Understand the ethical concerns and what regulations may look like. Learn how to leverage these tools responsibly to boost your business. Generative AI is moving beyond prototypes and into production—from startups automating visual design with a single prompt to enterprises accelerating research with synthetic data. As the line blurs between human and machine creativity, the need for thoughtful adoption and governance becomes more urgent than ever.",
    image: "https://ai-tool-tailwind.preview.uideck.com/images/blog-03.png",
  },
];

const Blog = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20 px-4">
      <div className="w-full flex flex-col items-center text-center text-white p-8 shadow-xl">
        <div className="mb-6 px-4 mt-20 py-2 gap-2 flex items-center justify-center bg-conic-180 from-[#2c145e] via-[#0c0453] to-[#33166e] rounded-full shadow-lg">
          <PiSparkleFill className="text-base text-[#d6c5f7]" />
          <h2 className="text-sm font-medium text-[#ce98fa]">
            Read Our Latest Blogs
          </h2>
        </div>
        <h1 className="text-4xl font-bold">Latest Blogs and News</h1>
        <p className="text-sm text-gray-300 mb-8 mt-4 max-w-2xl">
          Our AI writing tool is designed to empower you with exceptional
          writing capabilities, making the writing process more efficient,
          accurate, and enjoyable.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-300 ease-in-out">
          {blog.map((item) => (
            <BlogCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

const BlogCard = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="max-w-sm border rounded-lg shadow-sm bg-transparent backdrop-blur-sm border-white/10 transition-all duration-300 ease-in-out">
      <a href="#">
        <img
          className="w-full rounded-t-lg transition-transform duration-500 ease-in-out transform hover:scale-105 hover:brightness-110 hover:contrast-125"
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
        <p
          className={`mb-3 font-normal text-gray-400 transition-all duration-300 ${
            isExpanded ? "" : "line-clamp-3"
          }`}
        >
          {description}
        </p>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-gradient-to-t from-[#925EEE] to-[#6A2ADB] hover:from-[#7b4fc7] hover:to-[#5923b6] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]/50 cursor-pointer transition-all duration-300 ease-in-out"
        >
          {isExpanded ? "Ok, got it" : "Read more"}
          <svg
            className={`w-3.5 h-3.5 ms-2 transform transition-transform ${
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
    </div>
  );
};

export default Blog;
