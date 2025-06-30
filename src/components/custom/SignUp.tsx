/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState } from "react";
import Github from "@/assets/github.png";
import Footer from "./Footer";
import { useRouter } from "next/navigation";
import axios from "axios";
import { signIn } from "next-auth/react";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Basic validation
      if (!formData.name || !formData.email || !formData.password) {
        throw new Error("All fields are required");
      }

      if (formData.password.length < 6) {
        throw new Error("Password must be at least 6 characters");
      }

      const response = await axios.post("/api/auth/register", formData);

      if (response.status === 201 || response.status === 200) {
        router.push("/signin");
      }
    } catch (err) {
      setError(
        (err as Error).message ||
          (err as Error).message ||
          "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#030014] pt-10">
      <div className="flex-grow flex flex-col items-center">
        <div className="w-full max-w-6xl px-4 sm:px-6">
          <h1 className="text-2xl md:text-3xl font-bold text-white text-center mt-8 md:mt-12">
            Create Your Account
          </h1>
          <p className="text-sm md:text-base text-[#cad2d3] text-center mt-2">
            Join us to unlock powerful writing tools
          </p>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-5xl mx-auto mt-8 md:mt-12 p-4 sm:p-6 bg-[#100D20] rounded-xl shadow-lg flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-12 py-8 md:py-12"
            noValidate
          >
            {/* Left Side - Illustration */}
            <div className="flex flex-col items-center lg:items-start justify-center space-y-4 md:space-y-6 w-full lg:w-1/2">
              <h1 className="text-2xl md:text-3xl text-white font-medium text-center lg:text-start">
                Unlock the Power of <br /> Writing Tool
              </h1>
              <div className="relative w-full max-w-md aspect-square">
                <img
                  src="https://ai-tool-tailwind.preview.uideck.com/images/sigin.svg"
                  alt="Sign Up Illustration"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Divider */}
            <div className="hidden lg:block w-px h-[400px] bg-gradient-to-b from-transparent via-[#9D68F7]/50 to-transparent"></div>
            <div className="lg:hidden w-full h-px bg-gradient-to-r from-transparent via-[#9D68F7]/50 to-transparent my-4"></div>

            {/* Right Side - Form */}
            <div className="flex flex-col space-y-4 w-full lg:w-1/2 max-w-md">
              <button
                type="button"
                onClick={() => signIn("google", { callbackUrl: "/" })}
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
                <span>Continue with Google</span>
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
                <span>Continue with GitHub</span>
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
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                autoComplete="name"
                className="w-full p-3 bg-[#1a1a2e] text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-[#9D68F7]"
                required
                disabled={loading}
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                autoComplete="email"
                className="w-full p-3 bg-[#1a1a2e] text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-[#9D68F7]"
                required
                disabled={loading}
              />

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create Password (min 6 characters)"
                autoComplete="new-password"
                className="w-full p-3 bg-[#1a1a2e] text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-[#9D68F7]"
                required
                disabled={loading}
                minLength={6}
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
                    Creating account...
                  </span>
                ) : (
                  "Sign Up"
                )}
              </button>

              <p className="text-center text-gray-400 mt-4 text-sm">
                Already have an account?{" "}
                <button
                  type="button"
                  onClick={() => router.push("/signin")}
                  className="text-[#9763f1] hover:underline focus:outline-none focus:ring-1 focus:ring-[#9D68F7] rounded"
                >
                  Sign In
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

export default SignUp;
