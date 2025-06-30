"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaArrowRight, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

// Import Skeleton from shadcn/ui
import { Skeleton } from "@/components/ui/skeleton";

const Navbar: React.FC = () => {
  const { data: session, status } = useSession();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <nav
      className={`sticky top-0 z-50 flex justify-between items-center p-4 transition-all duration-300 ${
        scrolled
          ? "bg-[#030014]/60 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link href="/">
        <Image
          src="https://ai-tool-tailwind.preview.uideck.com/images/logo.svg"
          alt="Logo"
          width={150}
          height={150}
          priority
          className="cursor-pointer"
        />
      </Link>

      {/* Navigation Links */}
      <div className="hidden sm:flex space-x-8 text-sm text-white">
        <Link
          href="/"
          className="hover:opacity-85 transition-opacity duration-200"
        >
          Home
        </Link>
        <Link
          href="#features"
          className="hover:opacity-85 transition-opacity duration-200"
        >
          Features
        </Link>
        <Link
          href="#testimonials"
          className="hover:opacity-85 transition-opacity duration-200"
        >
          Testimonials
        </Link>
        <Link
          href="#support"
          className="hover:opacity-85 transition-opacity duration-200"
        >
          Support
        </Link>
      </div>

      {/* Auth Buttons or User Profile */}
      <div className="flex items-center space-x-4 text-white text-sm">
        {status === "loading" ? (
          // Use Skeleton here to indicate loading state
          <Skeleton className="h-8 w-20 rounded-md" />
        ) : session?.user ? (
          // User is signed in
          <div className="flex items-center space-x-4">
            {/* Profile Icon */}
            <Link
              href="/profile"
              className="flex items-center gap-2 cursor-pointer hover:opacity-85 transition-opacity duration-200"
              title={session.user.name || "Profile"}
            >
              <FaUserCircle size={28} />
              <span className="hidden sm:inline">
                {session.user.name || "Profile"}
              </span>
            </Link>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 bg-gradient-to-t from-[#925EEE] to-[#6A2ADB] hover:from-[#7b4fc7] hover:to-[#5923b6] transition-colors duration-200 px-3 py-1 rounded-md hover:bg-[#5923b6] cursor-pointer"
              title="Logout"
            >
              Logout <FaSignOutAlt />
            </button>
          </div>
        ) : (
          // User not signed in
          <>
            <Link
              href="/signin"
              className="cursor-pointer px-4 py-2 rounded-md hover:opacity-85 transition-opacity duration-200"
            >
              Sign in
            </Link>
            <Link
              href="/signup"
              className="px-4 py-2 rounded-md bg-gradient-to-t from-[#925EEE] to-[#6A2ADB] flex items-center gap-2 hover:from-[#7b4fc7] hover:to-[#5923b6] transition-colors duration-200"
            >
              Sign up
              <FaArrowRight />
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
