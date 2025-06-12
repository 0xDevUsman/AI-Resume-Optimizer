import React from "react";
import Image from "next/image";

import { FaArrowRightLong } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-around items-center bg-transparent text-white p-4">
        <div>
          <Image
            src="https://ai-tool-tailwind.preview.uideck.com/images/logo.svg"
            alt="Logo"
            width={150}
            height={150}
            priority
          />
        </div>
        <div className="flex space-x-8 text-sm">
          <h1 className="">Home</h1>
          <h1>Features</h1>
          <h1>Testomonials</h1>
          <h1>Support</h1>
        </div>
        <div className="flex space-x-4 text-sm items-center">
          <button className="cursor-pointer px-4 py-1 hover:opacity-85">
            Sign in
          </button>
          <button className="px-4 py-1 rounded-md bg-linear-to-t from-[#925EEE] to-[#6A2ADB] cursor-pointer flex items-center gap-1 hover:opacity-75">
            Sign up
            <span className="text-white text-base">→</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

{
  /* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
  <div className="w-[1000px] h-[1000px] bg-[#12082E] -z-40 blur-3xl rounded-full"></div>
</div> */
}
