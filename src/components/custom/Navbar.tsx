"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-50 flex justify-around items-center p-4 transition-all duration-300 ${
        scrolled
          ? "bg-[#030014]/60 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div>
        <Image
          src="https://ai-tool-tailwind.preview.uideck.com/images/logo.svg"
          alt="Logo"
          width={150}
          height={150}
          priority
        />
      </div>

      <div className="flex space-x-8 text-sm text-white">
        <Link href="#home" className="hover:opacity-85 cursor-pointer">
          Home
        </Link>
        <Link href="#features" className="hover:opacity-85 cursor-pointer">
          Features
        </Link>
        <Link href="#testimonials" className="hover:opacity-85 cursor-pointer">
          Testimonials
        </Link>
        <Link href="#support" className="hover:opacity-85 cursor-pointer">
          Support
        </Link>
      </div>

      <div className="flex space-x-4 text-sm items-center text-white">
        <button className="cursor-pointer px-4 py-2 rounded-md hover:opacity-85">
          Sign in
        </button>
        <button className="px-4 py-2 rounded-md bg-gradient-to-t from-[#925EEE] to-[#6A2ADB] cursor-pointer flex items-center gap-2 hover:from-[#7b4fc7] hover:to-[#5923b6]">
          Sign up
          <span className="text-white text-base">
            <FaArrowRightLong className="w-3" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
