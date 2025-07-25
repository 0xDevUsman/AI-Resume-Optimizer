"use client";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-transparent text-gray-300 px-4 sm:px-6 py-12 md:py-16">
      <motion.div
        className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-8 md:space-y-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        {/* Brand + Description */}
        <div className="space-y-2 md:space-y-4">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-white"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            AI Tool
          </motion.h2>
          <motion.p
            className="text-gray-400 text-xs md:text-sm max-w-md mx-auto px-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Our AI writing tool helps you write smarter and faster — empowering
            your creativity with the support of intelligent assistance.
          </motion.p>
        </div>

        {/* Navigation Links */}
        <motion.div
          className="grid grid-cols-2 sm:flex flex-wrap justify-center gap-x-8 sm:gap-x-12 md:gap-x-20 gap-y-6 text-xs sm:text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {[
            {
              title: "Product",
              links: ["Features", "Pricing", "Templates", "Changelog"],
            },
            {
              title: "Company",
              links: ["About", "Careers", "Blog", "Contact"],
            },
            {
              title: "Support",
              links: ["Help Center", "Terms", "Privacy", "Status"],
            },
          ].map(({ title, links }) => (
            <div key={title} className="space-y-1 sm:space-y-2 min-w-[120px]">
              <h3 className="text-white font-semibold mb-1 sm:mb-2">{title}</h3>
              <ul className="space-y-1">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex gap-4 sm:gap-6 text-white mt-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <a 
            href="https://x.com/g44951_ghost" 
            aria-label="Twitter"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            <FaXTwitter size={16} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
          </a>
          <a
            href="https://github.com/0xDevUsman"
            aria-label="GitHub"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            <FaGithub size={16} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
          </a>
          <a
            href="https://www.linkedin.com/in/usman-ali-4939ab289/"
            aria-label="LinkedIn"
            className="hover:text-gray-300 transition-colors duration-200"
          >
            <FaLinkedin size={16} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
          </a>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="pt-4 border-t border-white/10 w-full max-w-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="text-xs text-gray-500 mt-4 md:mt-6">
            © {new Date().getFullYear()} AI Tool. All rights reserved.
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;