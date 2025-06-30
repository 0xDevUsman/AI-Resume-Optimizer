/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";

import Github from "@/assets/github.png";
// If using next/image's StaticImageData, use Github.src for the URL
import Footer from "./Footer";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleCredentialsSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    setLoading(true);
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (res?.error) {
        setError("Invalid email or password");
      } else if (res?.ok) {
        router.push("/");
      }
    } catch (err) {
      console.log(err);
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#030014] pt-10">
      <div className="flex-grow flex flex-col items-center">
        <div className="w-full max-w-6xl px-4 sm:px-6">
          <h1 className="text-2xl md:text-3xl font-bold text-white text-center mt-8 md:mt-12">
            Sign In
          </h1>
          <h2 className="text-sm md:text-base font-medium text-[#cad2d3] text-center mt-2">
            Home / Sign in
          </h2>

          <form
            onSubmit={handleCredentialsSignIn}
            className="w-full max-w-5xl mx-auto mt-8 md:mt-12 p-4 sm:p-6 bg-[#100D20] rounded-xl shadow-lg flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-12 py-8 md:py-12"
          >
            {/* Left Side Illustration */}
            <div className="flex flex-col items-center lg:items-start justify-center space-y-4 md:space-y-6 w-full lg:w-1/2">
              <h1 className="text-2xl md:text-3xl text-white font-medium text-center lg:text-start">
                Unlock the Power of <br /> Writing Tool
              </h1>
              <div className="relative w-full max-w-md aspect-square">
                <img
                  src="https://ai-tool-tailwind.preview.uideck.com/images/sigin.svg"
                  alt="Sign In Illustration"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px h-[400px] bg-gradient-to-b from-transparent via-[#9D68F7]/50 to-transparent"></div>
            <div className="lg:hidden w-full h-px bg-gradient-to-r from-transparent via-[#9D68F7]/50 to-transparent my-4"></div>

            {/* Right Side Form */}
            <div className="flex flex-col space-y-4 w-full lg:w-1/2 max-w-md">
              <button
                type="button"
                onClick={() => signIn("google")}
                disabled={loading}
                className={`w-full p-3 bg-[#1a1a2e] text-white rounded-lg flex items-center justify-center gap-3 border border-transparent hover:border-[#9D68F7] transition ${
                  loading ? "opacity-60 cursor-not-allowed" : ""
                }`}
              >
                <img
                  src="https://www.google.com/favicon.ico"
                  alt="Google"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <span>Sign in with Google</span>
              </button>

              <button
                type="button"
                onClick={() => signIn("github", { callbackUrl: "/" })}
                disabled={loading}
                className={`w-full p-3 bg-[#1a1a2e] text-white rounded-lg flex items-center justify-center gap-3 border border-transparent hover:border-[#9D68F7] transition ${
                  loading ? "opacity-60 cursor-not-allowed" : ""
                }`}
              >
                <img
                  src={Github.src}
                  alt="GitHub"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <span>Sign in with GitHub</span>
              </button>

              <div className="relative flex items-center py-4">
                <div className="flex-grow border-t border-gray-600"></div>
                <span className="px-4 text-gray-400 text-sm">
                  Or with email
                </span>
                <div className="flex-grow border-t border-gray-600"></div>
              </div>

              {error && (
                <div className="text-red-400 text-sm p-2 bg-red-900/20 rounded-md">
                  {error}
                </div>
              )}

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
                disabled={loading}
                className={`w-full p-3 bg-gradient-to-t from-[#925EEE] to-[#6A2ADB] text-white font-semibold rounded-lg hover:from-[#7b4fc7] hover:to-[#5923b6] transition ${
                  loading ? "opacity-60 cursor-not-allowed" : ""
                }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Signing in...
                  </span>
                ) : (
                  "Sign in"
                )}
              </button>

              <p className="text-center text-gray-400 mt-4 text-sm">
                Don&apos;t have an account?{" "}
                <button
                  type="button"
                  onClick={() => router.push("/signup")}
                  className="text-[#9763f1] hover:underline focus:outline-none focus:ring-1 focus:ring-[#9D68F7] rounded"
                >
                  Sign Up for Free
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-12 md:mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default SignIn;
