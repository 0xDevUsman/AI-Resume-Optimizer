"use client";

import Image from "next/image";
import React from "react";
import image1 from "@/assets/optimize.png";
import { IoSparkles } from "react-icons/io5";
import { FaMicrochip, FaPaintbrush } from "react-icons/fa6";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Hero = () => {
  return (
    <motion.div
      className="rounded-3xl px-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 px-6  bg-background text-foreground">
        {/* Left Section */}
        <motion.div className="max-w-2xl space-y-6">
          <motion.h1
            className="text-2xl sm:text-3xl font-semibold tracking-tight text-primary"
            variants={fadeIn}
            custom={1}
          >
            AI Resume Optimizer
          </motion.h1>
          <motion.h2
            className="text-4xl sm:text-5xl font-bold leading-tight"
            variants={fadeIn}
            custom={2}
          >
            The Smartest AI Resume Optimizer
          </motion.h2>
          <motion.p
            className="text-base sm:text-lg text-muted-foreground"
            variants={fadeIn}
            custom={3}
          >
            Optimize your resume for top job success with the power of AI —
            faster, smarter, and more effective than ever.
          </motion.p>
          <div className="grid gap-6 mt-8">
            {[
              {
                icon: <IoSparkles className="h-5 w-5 text-blue-600" />,
                title: "Instant Resume Scoring",
                desc: "Get real-time suggestions and an optimization score to improve your resume.",
                color: "bg-blue-100",
              },
              {
                icon: <FaMicrochip className="h-5 w-5 text-purple-600" />,
                title: "AI-Powered Enhancements",
                desc: "Polish your summary, bullet points, and skills with intelligent recommendations.",
                color: "bg-purple-100",
              },
              {
                icon: <FaPaintbrush className="h-5 w-5 text-green-600" />,
                title: "Professional Layouts",
                desc: "Customize structure and design with complete flexibility.",
                color: "bg-green-100",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-4"
                variants={fadeIn}
                custom={idx + 4}
              >
                <div className={`${feature.color} p-2 rounded-lg`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            <motion.button
              className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-xl flex justify-center gap-x-2 items-center"
              variants={fadeIn}
              custom={7}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Optimize Your Resume Now <FaArrowRightLong />
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn}
          custom={7}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="w-0.5 h-[70vh] bg-gray-100 rounded-full"
        ></motion.div>
        {/* Right Image Section 1*/}
        <motion.div
          className="flex justify-center lg:justify-end"
          variants={fadeIn}
          custom={2}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src={image1}
              alt="Resume Optimization Illustration"
              className="w-[300px] sm:w-[600px] rounded-xl shadow-xl"
            />
          </motion.div>
        </motion.div>
      </section>
      <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 px-6  bg-background text-foreground">
        <div></div>
        <motion.div
          variants={fadeIn}
          custom={7}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="w-0.5 h-[70vh] bg-gray-100 rounded-full"
        ></motion.div>
        {/* right image section 2 */}
        <div></div>
      </section>
    </motion.div>
  );
};

export default Hero;
