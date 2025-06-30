/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Github from "@/assets/github.png";
import Footer from "./Footer";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCredentialsSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    setLoading(true);
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setLoading(false);

    if (res?.ok) {
      router.push("/"); // Redirect after login
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-white text-center mt-10">
          Sign In
        </h1>
        <h2 className="text-base font-medium text-[#cad2d3] text-center mt-2">
          Home / Sign in
        </h2>

        <form
          onSubmit={handleCredentialsSignIn}
          className="relative w-full max-w-5xl mx-auto mt-10 p-6 bg-[#100D20] rounded-lg shadow-lg flex justify-around items-center py-10"
        >
          {/* Left Side Illustration */}
          <div className="flex flex-col items-start justify-center space-y-6">
            <h1 className="text-3xl text-white font-medium text-start">
              Unlock the Power of <br /> Writing Tool
            </h1>
            <Image
              src="https://ai-tool-tailwind.preview.uideck.com/images/sigin.svg"
              alt="Sign In Illustration"
              width={400}
              height={300}
              className="mx-auto mt-2"
            />
          </div>

          <div className="absolute top-0 right-[500px] w-[1px] h-full bg-gradient-to-b from-white/0 via-white/20 to-white/0"></div>

          {/* Right Side Sign In */}
          <div className="flex flex-col space-y-4 w-80">
            <button
              type="button"
              onClick={() => signIn("google")}
              className="w-full p-3 bg-[#1a1a2e] text-white rounded-lg flex items-center justify-center gap-3 border border-transparent hover:border-[#9D68F7] transition"
              disabled={loading}
            >
              <img
                src="https://www.google.com/favicon.ico"
                alt="Google"
                className="w-5"
              />
              <span>Sign in with Google</span>
            </button>

            <button
              type="button"
              onClick={() => signIn("github", { callbackUrl: "/" })}
              className="w-full p-3 bg-[#1a1a2e] text-white rounded-lg flex items-center justify-center gap-3 border border-transparent hover:border-[#9D68F7] transition"
              disabled={loading}
            >
              <Image src={Github} alt="Github" className="w-5" />
              <span>Sign in with GitHub</span>
            </button>

            <div className="relative flex items-center py-4">
              <div className="flex-grow border-t border-gray-600"></div>
              <span className="mx-4 text-gray-400 text-sm">Or with email</span>
              <div className="flex-grow border-t border-gray-600"></div>
            </div>

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-[#1a1a2e] text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-[#9D68F7]"
              disabled={loading}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-[#1a1a2e] text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-[#9D68F7]"
              disabled={loading}
              required
            />

            <button
              type="submit"
              className="w-full mt-2 p-3 bg-gradient-to-t from-[#925EEE] to-[#6A2ADB] text-white font-semibold rounded-lg hover:from-[#7b4fc7] hover:to-[#5923b6] transition disabled:opacity-60 disabled:cursor-not-allowed"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>

            {/* Removed the always-visible Skeleton */}

            <p className="text-center text-gray-400 mt-4 text-sm">
              Don&apos;t have an account?{" "}
              <span
                onClick={() => router.push("/signup")}
                className="text-[#9763f1] hover:underline cursor-pointer"
              >
                Sign Up for Free
              </span>
            </p>
          </div>
        </form>
      </div>

      <div className="mt-20">
        <Footer />
      </div>
    </>
  );
};

export default SignIn;
