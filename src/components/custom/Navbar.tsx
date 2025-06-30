"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaArrowRight, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Skeleton } from "@/components/ui/skeleton";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const { data: session, status } = useSession();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
    setMenuOpen(false);
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Variants for menu slide
  const menuVariants = {
    hidden: { x: "100%" },
    visible: { x: 0 },
  };

  // Variants for hamburger icon lines
  const topLine = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 7 },
  };
  const middleLine = {
    closed: { opacity: 1 },
    open: { opacity: 0 },
  };
  const bottomLine = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: -45, y: -7 },
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-50 flex  justify-between items-center py-4 px-10 transition-all duration-300 ${
          scrolled
            ? "bg-[#030014]/60 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link href="/" onClick={() => setMenuOpen(false)}>
          <Image
            src="https://ai-tool-tailwind.preview.uideck.com/images/logo.svg"
            alt="Logo"
            width={150}
            height={150}
            priority
            className="cursor-pointer w-32 sm:w-40 h-auto transition-transform duration-300 transform hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
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

        {/* Desktop Auth/User */}
        <div className="hidden sm:flex items-center space-x-4 text-white text-sm">
          {status === "loading" ? (
            <Skeleton className="h-8 w-20 rounded-md" />
          ) : session?.user ? (
            <div className="flex items-center space-x-4">
              <Link
                href="/profile"
                className="flex items-center gap-2 cursor-pointer hover:opacity-85 transition-opacity duration-200"
                title={session.user.name || "Profile"}
                onClick={() => setMenuOpen(false)}
              >
                <FaUserCircle size={28} />
                <span className="hidden sm:inline">
                  {session.user.name || "Profile"}
                </span>
              </Link>

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-gradient-to-t from-[#925EEE] to-[#6A2ADB] hover:from-[#7b4fc7] hover:to-[#5923b6] transition-colors duration-200 px-3 py-1 rounded-md hover:bg-[#5923b6] cursor-pointer"
                title="Logout"
              >
                Logout <FaSignOutAlt />
              </button>
            </div>
          ) : (
            <>
              <Link
                href="/signin"
                className="cursor-pointer px-4 py-2 rounded-md hover:opacity-85 transition-opacity duration-200"
                onClick={() => setMenuOpen(false)}
              >
                Sign in
              </Link>
              <Link
                href="/signup"
                className="px-4 py-2 rounded-md bg-gradient-to-t from-[#925EEE] to-[#6A2ADB] flex items-center gap-2 hover:from-[#7b4fc7] hover:to-[#5923b6] transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                Sign up
                <FaArrowRight />
              </Link>
            </>
          )}
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="sm:hidden flex flex-col justify-center items-center gap-[6px] w-10 h-10 relative z-50"
        >
          <motion.span
            className="block h-[2.5px] w-6 bg-white rounded"
            variants={topLine}
            initial="closed"
            animate={menuOpen ? "open" : "closed"}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block h-[2.5px] w-6 bg-white rounded"
            variants={middleLine}
            initial="closed"
            animate={menuOpen ? "open" : "closed"}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="block h-[2.5px] w-6 bg-white rounded"
            variants={bottomLine}
            initial="closed"
            animate={menuOpen ? "open" : "closed"}
            transition={{ duration: 0.3 }}
          />
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed top-0 right-0 h-full w-72 bg-[#030014]/95 backdrop-blur-md shadow-lg flex flex-col p-6 space-y-6 text-white z-40"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Close on link click */}
            <nav className="flex flex-col gap-6 text-lg">
              <Link href="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <Link href="#features" onClick={() => setMenuOpen(false)}>
                Features
              </Link>
              <Link href="#testimonials" onClick={() => setMenuOpen(false)}>
                Testimonials
              </Link>
              <Link href="#support" onClick={() => setMenuOpen(false)}>
                Support
              </Link>
            </nav>

            <div className="border-t border-white/20 pt-6 flex flex-col gap-4 text-base">
              {status === "loading" ? (
                <Skeleton className="h-8 w-full rounded-md" />
              ) : session?.user ? (
                <>
                  <Link
                    href="/profile"
                    className="flex items-center gap-2 cursor-pointer hover:opacity-85 transition-opacity duration-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    <FaUserCircle size={24} />
                    {session.user.name || "Profile"}
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 bg-gradient-to-t from-[#925EEE] to-[#6A2ADB] hover:from-[#7b4fc7] hover:to-[#5923b6] transition-colors duration-200 px-3 py-2 rounded-md hover:bg-[#5923b6] cursor-pointer"
                  >
                    Logout <FaSignOutAlt />
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/signin"
                    className="block px-4 py-2 rounded-md hover:opacity-85 transition-opacity duration-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    Sign in
                  </Link>
                  <Link
                    href="/signup"
                    className=" px-4 py-2 rounded-md bg-gradient-to-t from-[#925EEE] to-[#6A2ADB] flex items-center gap-2 hover:from-[#7b4fc7] hover:to-[#5923b6] transition-colors duration-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    Sign up <FaArrowRight />
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
