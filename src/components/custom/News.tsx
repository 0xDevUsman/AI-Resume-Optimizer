import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const News = () => {
  return (
    <section className="px-4 py-16 text-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 rounded-xl shadow-2xl p-6 md:p-10">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Stay Updated</h2>
          <p className="text-sm md:text-base text-gray-300 max-w-md mx-auto md:mx-0">
            Subscribe to our newsletter and never miss an update on our latest
            features, tools, and releases.
          </p>
        </div>

        {/* Email Form */}
        <form className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-6 md:mt-0">
          <Input
            type="email"
            placeholder="Enter your email"
            className="bg-white/10 text-white placeholder:text-white/60 py-3 px-4 w-full sm:w-[250px] border border-white/20 backdrop-blur-sm focus-visible:ring-[#8b5cf6]"
          />
          <Button
            type="submit"
            className="bg-gradient-to-t from-[#925EEE] to-[#6A2ADB] hover:from-[#7b4fc7] hover:to-[#5923b6] text-white font-semibold px-6 py-3 cursor-pointer"
          >
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default News;
