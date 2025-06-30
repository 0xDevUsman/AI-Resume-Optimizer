/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
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

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("/api/auth/register", formData);

      if (response.status === 201 || response.status === 200) {
        router.push("/signin");
      }
    } catch (err) {
      console.error("Registration Error:", err);
      setError((err as Error)?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="flex-grow">
          <h1 className="text-2xl md:text-3xl font-bold text-white text-center mt-6 md:mt-10">
            Sign Up Page
          </h1>
          <h1 className="text-sm md:text-base font-medium text-[#cad2d3] text-center mt-1 md:mt-2">
            Home / Sign up
          </h1>

          <form
            onSubmit={handleSubmit}
            className="w-full max-w-5xl mx-auto mt-6 md:mt-10 p-4 md:p-6 bg-[#100D20] rounded-lg shadow-lg flex flex-col lg:flex-row justify-around items-center py-6 md:py-10"
            noValidate
          >
            <div className="flex flex-col items-center lg:items-start justify-center space-y-4 md:space-y-6 mb-8 lg:mb-0">
              <h1 className="text-2xl md:text-3xl text-white font-medium text-center lg:text-start">
                Unlock the Power of <br /> Writing Tool
              </h1>
              <Image
                src="https://ai-tool-tailwind.preview.uideck.com/images/sigin.svg"
                alt="Sign In Illustration"
                width={300}
                height={225}
                className="mt-2 w-64 md:w-80 lg:w-96"
              />
            </div>

            <div className="hidden lg:block absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-white/0 via-white/20 to-white/0"></div>
            <div className="block lg:hidden w-full h-[1px] bg-gradient-to-r from-white/0 via-white/20 to-white/0 my-6"></div>

            <div className="flex flex-col space-y-3 md:space-y-4 w-full max-w-md">
              <button
                type="button"
                onClick={() => signIn("google", { callbackUrl: "/" })}
                className={`w-full p-3 text-white rounded-lg flex items-center justify-center gap-3 border border-transparent hover:border-[#9D68F7] transition ease-in-out duration-300 cursor-pointer ${
                  loading ? "opacity-60 cursor-not-allowed" : ""
                } bg-[#1a1a2e]`}
                disabled={loading}
              >
                <span>
                  <img
                    src="https://www.google.com/favicon.ico"
                    alt="Google"
                    className="w-5"
                  />
                </span>
                <span>Sign in with Google</span>
              </button>

              <button
                type="button"
                onClick={() => signIn("github", { callbackUrl: "/" })}
                className={`w-full p-3 text-white rounded-lg flex items-center justify-center gap-3 border border-transparent hover:border-[#9D68F7] transition ease-in-out duration-300 cursor-pointer ${
                  loading ? "opacity-60 cursor-not-allowed" : ""
                } bg-[#1a1a2e]`}
                disabled={loading}
              >
                <Image src={Github} alt="Github" className="w-5" />
                <span>Sign in with Github</span>
              </button>

              <div className="relative flex items-center py-2 md:py-4">
                <div className="flex-grow border-t border-gray-600"></div>
                <span className="flex-shrink mx-4 text-gray-400 text-xs md:text-sm">
                  Or sign up with email
                </span>
                <div className="flex-grow border-t border-gray-600"></div>
              </div>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your Name"
                autoComplete="name"
                className="w-full p-3 bg-[#1a1a2e] text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-[#9D68F7] focus:border-[#9D68F7] text-sm md:text-base"
                required
                disabled={loading}
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                autoComplete="email"
                className="w-full p-3 bg-[#1a1a2e] text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-[#9D68F7] focus:border-[#9D68F7] text-sm md:text-base"
                required
                disabled={loading}
              />

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                autoComplete="new-password"
                className="w-full p-3 bg-[#1a1a2e] text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-[#9D68F7] focus:border-[#9D68F7] text-sm md:text-base"
                required
                disabled={loading}
              />

              {error && (
                <p
                  className="text-red-400 text-xs md:text-sm font-light text-center"
                  aria-live="polite"
                >
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="w-full mt-1 md:mt-2 p-3 bg-gradient-to-t from-[#925EEE] to-[#6A2ADB] cursor-pointer text-white font-semibold rounded-lg hover:from-[#7b4fc7] hover:to-[#5923b6] transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed text-sm md:text-base"
                disabled={loading}
              >
                {loading ? "Signing up..." : "Sign up"}
              </button>

              <div className="text-center text-gray-400 mt-2 md:mt-4 text-xs md:text-sm">
                Already have an account?
                <span
                  onClick={() => router.push("/signin")}
                  className="text-[#9763f1] font-light hover:underline pl-1 md:pl-2 cursor-pointer"
                >
                  Sign In for Free
                </span>
              </div>
            </div>
          </form>
        </div>
        <div className="mt-10 md:mt-20">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default SignUp;