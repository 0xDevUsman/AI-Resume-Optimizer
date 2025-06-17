/* eslint-disable @next/next/no-img-element */
import React from "react";
import { PiSparkleFill } from "react-icons/pi";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ayaan Sheikh",
      username: "@ayaan_dev",
      description:
        "CVNinja helped me land 3 interviews within a week. The smart resume suggestions are game-changing!",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
    {
      name: "Nisha Verma",
      username: "@nisha.codes",
      description:
        "I love how clean and professional my resume looks now. The grammar and tone checker is a blessing.",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
      name: "Kunal Mehra",
      username: "@kunal-ai",
      description:
        "From content builder to voice input, every feature feels built for modern job seekers. Huge fan of CVNinja!",
      avatar: "https://i.pravatar.cc/150?img=8",
    },
    {
      name: "Zoya Khan",
      username: "@zoyak",
      description:
        "I used CVNinja for my first ever resume, and I got selected for a tech internship. Totally worth it!",
      avatar: "https://i.pravatar.cc/150?img=11",
    },
    {
      name: "Raj Patel",
      username: "@rajpatel123",
      description:
        "The AI-powered bullet points saved me hours of writing. CVNinja is the ChatGPT of resumes!",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Sara Malik",
      username: "@saramalik",
      description:
        "Beautiful design, easy interface, and powerful AI tools — CVNinja is now my go-to for resume updates.",
      avatar: "https://i.pravatar.cc/150?img=14",
    },
    {
      name: "Devansh Tyagi",
      username: "@devtyagi",
      description:
        "I never realized how bad my old resume was until CVNinja fixed everything in minutes. Unreal results!",
      avatar: "https://i.pravatar.cc/150?img=19",
    },
    {
      name: "Aarushi Mehta",
      username: "@aarushi.uiux",
      description:
        "As a designer, I loved the aesthetic control and AI tweaks. I got callbacks from 4 companies!",
      avatar: "https://i.pravatar.cc/150?img=22",
    },
    {
      name: "Imran Qureshi",
      username: "@imran_builds",
      description:
        "I used CVNinja to pivot into tech from sales. The tone adjustment feature is pure gold!",
      avatar: "https://i.pravatar.cc/150?img=26",
    },
    {
      name: "Tanvi Sharma",
      username: "@tanvisharma",
      description:
        "Plagiarism check and resume analysis helped me stand out in my placement season. Highly recommended!",
      avatar: "https://i.pravatar.cc/150?img=32",
    },
    {
      name: "Aman Kapoor",
      username: "@amankap",
      description:
        "The AI content builder gave me the perfect words. I never thought writing resumes could be this fun!",
      avatar: "https://i.pravatar.cc/150?img=35",
    },
    {
      name: "Rhea Fernandes",
      username: "@rhea.codes",
      description:
        "I’ve tried Canva, Zety — nothing comes close to the flexibility and power of CVNinja.",
      avatar: "https://i.pravatar.cc/150?img=38",
    },
  ];

  return (
    <>
      <div id="testimonials" className="flex flex-col items-center justify-center mt-20">
        <div className="mb-6 px-4 py-2 gap-2 flex items-center text-center justify-center border bg-gradient-to-t from-[#030014] to-[#241844] rounded-full shadow-lg relative w-40">
          <PiSparkleFill className="text-6xl md:text-sm text-[#D9C4FF]" />
          <h2 className="text-2xl md:text-sm font-medium text-[#b47ef1]">
            Wall of love
          </h2>
        </div>
        <h1 className="text-5xl text-white font-bold">What Our User Says</h1>
        <p className="max-w-[714px] mx-auto mb-5 font-normal text-sm text-[#8D8395] my-6 text-center">
          Our AI writing tool is designed to empower you with exceptional
          writing capabilities, making the writing process more efficient,
          accurate, and enjoyable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-20 gap-y-10 text-white items-center justify-center w-full max-w-5xl p-8 rounded-xl shadow-lg mt-10 mx-auto">
          {testimonials.map((user, index) => (
            <div
              key={index}
              className="flex flex-col p-6 w-80 bg-conic-180 from-[#03010a] via-[#170a44] to-[#040011] border-[0.5px] border-white/20 rounded-lg"
            >
              <div className="flex items-center gap-4 mb-4 text-center">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex flex-col justify-center">
                  <h1 className="text-sm text-white">{user.name}</h1>
                  <h1 className="text-xs text-gray-400">{user.username}</h1>
                </div>
              </div>

              <p className="text-sm text-[#cac2d1] mt-4">{user.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
