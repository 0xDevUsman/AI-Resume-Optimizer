/* eslint-disable @next/next/no-img-element */
import React from "react";
import { PiSparkleFill } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";

const Assistance = () => {
  return (
    <>
      <div className="relative flex flex-col w-full items-center justify-center mt-20">
        <div className=" w-5xl p-6 flex gap-6 items-center justify-between bg-conic-180 from-[#03010a] via-[#170a44] to-[#040011]  rounded-xl border-[0.5px] border-white/20">
          <div className="flex flex-col items-start justify-center pl-16">
            <div className="mb-6 min-w-72 px-4 py-2 gap-2 flex items-center text-center justify-center bg-gradient-to-t from-[#030014] to-[#241844] rounded-full shadow-lg">
              <PiSparkleFill className="text-6xl md:text-sm text-[#D9C4FF]" />
              <h2 className="text-2xl md:text-sm font-medium text-[#BF99F7]">
                AI-Powered Writing Tool
              </h2>
            </div>
            <h1 className="text-2xl font-medium text-white">
              Intelligent Writing Assistance
            </h1>
            <p className="text-sm text-[#8D8395] mt-2">
              Our AI writing tool is designed to empower you with <br />{" "}
              exceptional writing capabilities, making the writing process...
            </p>
            <button className="cursor-pointer px-4 py-2 rounded-full bg-gradient-to-t from-[#603ba0] to-[#4a18a0] hover:from-[#7b4fc7] hover:to-[#5923b6] text-sm mt-10 text-white transition duration-300 w-48 flex items-center justify-center gap-2">
              Learn more{" "}
              <span>
                <FaArrowRightLong />
              </span>
            </button>
          </div>
          <div>
            <img
              src={
                "https://ai-tool-tailwind.preview.uideck.com/images/big-icon.svg"
              }
              alt="Assistance Image"
              className="w-96 h-96 object-cover z-50"
            />
          </div>
        </div>
        <div className="grid grid-1 md:grid-cols-2 gap-6 w-5xl mt-10 mb-10">
          <div className="bg-conic-180 from-[#03010a] via-[#170a44] to-[#040011] px-8 py-4 rounded-xl border-[0.5px] border-white/20 text-white">
            <img
              src="https://ai-tool-tailwind.preview.uideck.com/images/icon-05.svg"
              alt=""
              className="w-16 h-16 p-4 border rounded-full bg-[#110E21] border-[#282537] mb-10 mt-10"
            />
            <h1 className="text-2xl font-medium mb-4">
              Empowering Writing Excellence
            </h1>
            <p className="text-sm text-gray-500 mb-6">
              Our AI writing tool is designed to empower you with exceptional
              writing capabilities, making the writing process...
            </p>
          </div>
          <div className="bg-conic-180 from-[#03010a] via-[#170a44] to-[#040011] px-8 py-4 rounded-xl border-[0.5px] border-white/20 text-white">
            <img
              src="https://ai-tool-tailwind.preview.uideck.com/images/icon-07.svg"
              alt=""
              className="w-16 h-16 p-4 border rounded-full bg-[#110E21] border-[#282537] mb-10 mt-10"
            />{" "}
            <h1 className="text-2xl font-medium mb-4">
              Grammar and Spell Check
            </h1>
            <p className="text-sm text-gray-500 mb-6">
              Our AI writing tool is designed to empower you with exceptional
              writing capabilities.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Assistance;
