/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import React from "react";
import Github from "@/assets/github.png";
import Footer from "./Footer";
import { useRouter } from "next/navigation";
const SignIn = () => {
  const router = useRouter();

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-white text-center mt-10">
          Sign In Page
        </h1>
        <h1 className="text-base font-medium text-[#cad2d3] text-center mt-2">
          Home / Sign in
        </h1>
        <form className="relative w-full max-w-5xl mx-auto mt-10 p-6 bg-[#100D20] rounded-lg shadow-lg flex justify-around items-center py-10">
          <div className="flex flex-col items-start justify-center space-y-6">
            <h1 className="text-3xl text-white font-medium text-start">
              Unlock the Power of <br /> Writing Tool
            </h1>
            <Image
              src={
                "https://ai-tool-tailwind.preview.uideck.com/images/sigin.svg"
              }
              alt="Sign In Illustration"
              width={400}
              height={300}
              className="mx-auto mt-2"
            />
          </div>

          <div className="absolute top-0 right-[500px] w-[1px] h-full bg-gradient-to-b from-white/0 via-white/20 to-white/0"></div>

          <div className="flex flex-col space-y-4 w-80">
            <button className="w-full p-3 bg-[#1a1a2e] text-white rounded-lg flex items-center justify-center gap-3 border border-transparent hover:border-[#9D68F7] transition ease-in-out duration-300 cursor-pointer">
              <span>
                <img
                  src="https://www.google.com/favicon.ico"
                  alt="Google"
                  className="w-5"
                />
              </span>
              <span>Sign in with Google</span>
            </button>

            <button className="w-full p-3 bg-[#1a1a2e] text-white rounded-lg flex items-center justify-center gap-3 border border-transparent hover:border-[#9D68F7] transition ease-in-out duration-300 cursor-pointer">
              <Image src={Github} alt="Github" className="w-5" />
              <span>Sign in with Github</span>
            </button>

            <div className="relative flex items-center py-4">
              <div className="flex-grow border-t border-gray-600"></div>
              <span className="flex-shrink mx-4 text-gray-400 text-sm">
                Or sign in with email
              </span>
              <div className="flex-grow border-t border-gray-600"></div>
            </div>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 bg-[#1a1a2e] text-white rounded-lg 
             focus:outline-none focus:ring-1 focus:ring-[#9D68F7] focus:border-[#9D68F7]"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 bg-[#1a1a2e] text-white rounded-lg 
             focus:outline-none focus:ring-1 focus:ring-[#9D68F7] focus:border-[#9D68F7]"
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 text-[#9D68F7] bg-gray-700 border-gray-600 rounded focus:ring-[#9D68F7]"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm text-gray-300"
                >
                  Remember me
                </label>
              </div>
             
            </div>

            <button
              type="submit"
              className="w-full mt-2 p-3 bg-gradient-to-t from-[#925EEE] to-[#6A2ADB] cursor-pointer text-white font-semibold rounded-lg hover:from-[#7b4fc7] hover:to-[#5923b6] transition duration-300"
            >
              Sign in
            </button>

            <p className="text-center text-gray-400 mt-4 text-sm">
              Don&apos;t have an account?{" "}
              <span
                onClick={() => router.push("/signup")}
                className="text-[#9763f1] font-light hover:underline pl-2 cursor-pointer"
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
