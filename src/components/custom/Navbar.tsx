"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
      className="w-full px-6 py-4 bg-background"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white">
          CVNinja 🥷
        </Link>

        <div className="hidden md:flex space-x-6 text-sm font-medium text-muted-foreground">
          <Link
            href="/optimizer"
            className="hover:opacity-85 text-white transition-colors"
          >
            Optimizer
          </Link>
          <Link
            href="/about"
            className="hover:opacity-85 text-white transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/faq"
            className="hover:opacity-85 text-white transition-colors"
          >
            FAQ
          </Link>
        </div>

        {/* Login Button */}
        <Link href="/login">
          <Button className="cursor-pointer bg-blue-600 text-white">
            Login
          </Button>
        </Link>
      </div>
      <hr className="h-0.5 bg-gray-100 my-4" />
    </motion.nav>
  );
};

export default Navbar;
