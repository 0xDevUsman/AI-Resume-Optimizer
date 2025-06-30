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
      <div>
        <h1 className="text-3xl font-bold text-white text-center mt-10">
          Sign Up Page
        </h1>
        <h1 className="text-base font-medium text-[#cad2d3] text-center mt-2">
          Home / Sign up
        </h1>

        <form
          onSubmit={handleSubmit}
          className="relative w-full max-w-5xl mx-auto mt-10 p-6 bg-[#100D20] rounded-lg shadow-lg flex justify-around items-center py-10"
        >
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

          <div className="flex flex-col space-y-4 w-80">
            <button
              type="button"
              onClick={() => signIn("google", { callbackUrl: "/" })}
              className="w-full p-3 bg-[#1a1a2e] text-white rounded-lg flex items-center justify-center gap-3 border border-transparent hover:border-[#9D68F7] transition ease-in-out duration-300 cursor-pointer"
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
              className="w-full p-3 bg-[#1a1a2e] text-white rounded-lg flex items-center justify-center gap-3 border border-transparent hover:border-[#9D68F7] transition ease-in-out duration-300 cursor-pointer"
            >
              <Image src={Github} alt="Github" className="w-5" />
              <span>Sign in with Github</span>
            </button>

            <div className="relative flex items-center py-4">
              <div className="flex-grow border-t border-gray-600"></div>
              <span className="flex-shrink mx-4 text-gray-400 text-sm">
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
              className="w-full p-3 bg-[#1a1a2e] text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-[#9D68F7] focus:border-[#9D68F7]"
              required
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-3 bg-[#1a1a2e] text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-[#9D68F7] focus:border-[#9D68F7]"
              required
            />

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-3 bg-[#1a1a2e] text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-[#9D68F7] focus:border-[#9D68F7]"
              required
            />

            {error && (
              <p className="text-red-400 text-sm font-light text-center">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full mt-2 p-3 bg-gradient-to-t from-[#925EEE] to-[#6A2ADB] cursor-pointer text-white font-semibold rounded-lg hover:from-[#7b4fc7] hover:to-[#5923b6] transition duration-300"
              disabled={loading}
            >
              {loading ? "Signing up..." : "Sign up"}
            </button>

            <div className="text-center text-gray-400 mt-4 text-sm">
              Already have an account?
              <span
                onClick={() => router.push("/signin")}
                className="text-[#9763f1] font-light hover:underline pl-2 cursor-pointer"
              >
                Sign In for Free
              </span>
            </div>
          </div>
        </form>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </>
  );
};

export default SignUp;
