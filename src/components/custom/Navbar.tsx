/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";

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

  const toggleMenu = () => {
    // Prevent scrolling when menu is open
    document.body.style.overflow = menuOpen ? "" : "hidden";
    setMenuOpen((prev) => !prev);
  };

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
        className={`fixed top-0 w-full z-50 flex justify-between items-center py-3 px-4 sm:py-4 sm:px-6 md:px-10 transition-all duration-300 ${
          scrolled
            ? "bg-[#030014]/90 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link href="/" onClick={() => setMenuOpen(false)}>
          <img
            src="https://ai-tool-tailwind.preview.uideck.com/images/logo.svg"
            alt="Logo"
            width={150}
            height={40}
            className="cursor-pointer w-32 sm:w-40 h-auto transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex space-x-6 md:space-x-8 text-sm text-white">
          <Link
            href="/"
            className="hover:opacity-85 transition-opacity duration-200 px-2 py-1"
          >
            Home
          </Link>
          <Link
            href="#features"
            className="hover:opacity-85 transition-opacity duration-200 px-2 py-1"
          >
            Features
          </Link>
          <Link
            href="#testimonials"
            className="hover:opacity-85 transition-opacity duration-200 px-2 py-1"
          >
            Testimonials
          </Link>
          <Link
            href="#support"
            className="hover:opacity-85 transition-opacity duration-200 px-2 py-1"
          >
            Support
          </Link>
        </div>

        {/* Desktop Auth/User */}
        <div className="hidden sm:flex items-center space-x-3 md:space-x-4 text-white text-sm">
          {status === "loading" ? (
            <Skeleton className="h-8 w-20 rounded-md" />
          ) : session?.user ? (
            <div className="flex items-center space-x-3 md:space-x-4">
              <Link
                href="/profile"
                className="flex items-center gap-2 cursor-pointer hover:opacity-85 transition-opacity duration-200"
                title={session.user.name || "Profile"}
                onClick={() => setMenuOpen(false)}
              >
                <FaUserCircle size={24} className="md:h-7 md:w-7" />
                <span className="hidden md:inline">
                  {session.user.name?.split(" ")[0] || "Profile"}
                </span>
              </Link>

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-gradient-to-t from-[#925EEE] to-[#6A2ADB] hover:from-[#7b4fc7] hover:to-[#5923b6] transition-colors duration-200 px-3 py-1 rounded-md hover:bg-[#5923b6] cursor-pointer text-xs md:text-sm"
                title="Logout"
              >
                Logout <FaSignOutAlt />
              </button>
            </div>
          ) : (
            <>
              <Link
                href="/signin"
                className="cursor-pointer px-3 py-1.5 md:px-4 md:py-2 rounded-md hover:opacity-85 transition-opacity duration-200 text-xs md:text-sm"
                onClick={() => setMenuOpen(false)}
              >
                Sign in
              </Link>
              <Link
                href="/signup"
                className="px-3 py-1.5 md:px-4 md:py-2 rounded-md bg-gradient-to-t from-[#925EEE] to-[#6A2ADB] flex items-center gap-2 hover:from-[#7b4fc7] hover:to-[#5923b6] transition-colors duration-200 text-xs md:text-sm"
                onClick={() => setMenuOpen(false)}
              >
                Sign up
                <FaArrowRight size={14} />
              </Link>
            </>
          )}
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          aria-expanded={menuOpen}
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
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-30"
              onClick={toggleMenu}
            />

            {/* Menu Content */}
            <motion.div
              className="fixed top-0 right-0 h-full w-4/5 max-w-xs bg-[#030014] shadow-lg flex flex-col p-6 space-y-6 text-white z-40"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <nav className="flex flex-col gap-4 text-base">
                <Link
                  href="/"
                  onClick={toggleMenu}
                  className="py-2 hover:text-[#BF99F7] transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="#features"
                  onClick={toggleMenu}
                  className="py-2 hover:text-[#BF99F7] transition-colors"
                >
                  Features
                </Link>
                <Link
                  href="#testimonials"
                  onClick={toggleMenu}
                  className="py-2 hover:text-[#BF99F7] transition-colors"
                >
                  Testimonials
                </Link>
                <Link
                  href="#support"
                  onClick={toggleMenu}
                  className="py-2 hover:text-[#BF99F7] transition-colors"
                >
                  Support
                </Link>
              </nav>

              <div className="border-t border-white/20 pt-4 flex flex-col gap-3">
                {status === "loading" ? (
                  <Skeleton className="h-10 w-full rounded-md" />
                ) : session?.user ? (
                  <>
                    <Link
                      href="/profile"
                      className="flex items-center gap-3 py-2 hover:text-[#BF99F7] transition-colors"
                      onClick={toggleMenu}
                    >
                      <FaUserCircle size={20} />
                      {session.user.name || "Profile"}
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-3 py-2 text-left hover:text-[#BF99F7] transition-colors"
                    >
                      <FaSignOutAlt size={18} />
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/signin"
                      className="block py-2 px-3 rounded-md hover:bg-[#2B1753] transition-colors"
                      onClick={toggleMenu}
                    >
                      Sign in
                    </Link>
                    <Link
                      href="/signup"
                      className="block py-2 px-3 rounded-md bg-gradient-to-t from-[#925EEE] to-[#6A2ADB] hover:from-[#7b4fc7] hover:to-[#5923b6] transition-colors"
                      onClick={toggleMenu}
                    >
                      Sign up
                    </Link>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
