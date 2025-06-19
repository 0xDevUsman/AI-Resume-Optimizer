import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-transparent text-gray-300 px-4 py-16">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-10">
        {/* Brand + Description */}
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-white">AI Tool</h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Our AI writing tool helps you write smarter and faster — empowering
            your creativity with the support of intelligent assistance.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-x-20 text-sm">
          <div className="space-y-2">
            <h3 className="text-white font-semibold mb-2">Product</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-white font-semibold mb-2">Company</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-white font-semibold mb-2">Support</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Status
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-white mt-2">
          <a href="https://x.com/g44951_ghost" aria-label="Twitter">
            <FaXTwitter size={18} />
          </a>
          <a
            href="https://github.com/0xDevUsman"
            aria-label="GitHub"
            className="hover:text-gray-300"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/usman-ali-4939ab289/"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-white/10 w-full">
          <p className="text-xs text-gray-500 mt-6">
            © {new Date().getFullYear()} AI Tool. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
