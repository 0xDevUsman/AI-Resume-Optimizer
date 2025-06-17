/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const clientLogos = [
  "https://ai-tool-tailwind.preview.uideck.com/images/client-01.svg",
  "https://ai-tool-tailwind.preview.uideck.com/images/client-02.svg",
  "https://ai-tool-tailwind.preview.uideck.com/images/client-03.svg",
  "https://ai-tool-tailwind.preview.uideck.com/images/client-04.svg",
  "https://ai-tool-tailwind.preview.uideck.com/images/client-05.svg",
  "https://ai-tool-tailwind.preview.uideck.com/images/client-06.svg",
  "https://ai-tool-tailwind.preview.uideck.com/images/client-07.svg",
];

const Swipper = () => {
  return (
    <section className="py-20">
      <div className="max-w-[1104px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="relative overflow-hidden z-10">
          <span className="max-w-[128px] w-full h-full block absolute z-10 left-0 top-0 bottom-0 bg-gradient-to-l from-transparent  pointer-events-none" />
          <span className="max-w-[128px] w-full h-full block absolute z-10 right-0 top-0 bottom-0 bg-gradient-to-r from-transparent  pointer-events-none" />

          <Swiper
            modules={[Autoplay]}
            slidesPerView="auto"
            spaceBetween={64}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={1000} // smooth professional speed
            grabCursor={false}
            allowTouchMove={false}
            className="flex items-center"
          >
            {[...clientLogos, ...clientLogos].map((src, index) => (
              <SwiperSlide key={index} className="!w-auto">
                <a href="#">
                  <img
                    src={src}
                    alt={`client-${index + 1}`}
                    className="h-6 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Swipper;
