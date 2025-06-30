/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const clientLogos = [
  "https://ai-tool-tailwind.preview.uideck.com/images/client-01.svg",
  "https://ai-tool-tailwind.preview.uideck.com/images/client-02.svg",
  "https://ai-tool-tailwind.preview.uideck.com/images/client-03.svg",
  "https://ai-tool-tailwind.preview.uideck.com/images/client-04.svg",
  "https://ai-tool-tailwind.preview.uideck.com/images/client-05.svg",
  "https://ai-tool-tailwind.preview.uideck.com/images/client-06.svg",
  "https://ai-tool-tailwind.preview.uideck.com/images/client-07.svg",
];

const ClientSwiper = () => {
  return (
    <section
      aria-label="Client logos carousel"
      className="py-12 md:py-20 bg-[#030014]"
    >
      <div className="max-w-[1104px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="relative overflow-hidden">
          {/* Gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-[#030014] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-[#030014] to-transparent pointer-events-none" />

          <Swiper
            modules={[Autoplay, FreeMode]}
            slidesPerView="auto"
            spaceBetween={48}
            loop={true}
            freeMode={{
              enabled: true,
              momentum: true,
              momentumRatio: 0.5,
              momentumBounce: false,
            }}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={4000} // Increased speed for smoother continuous motion
            grabCursor={false}
            allowTouchMove={false}
            className="!ease-linear" // Important for smooth animation
          >
            {/* Double the logos for seamless looping */}
            {[...clientLogos, ...clientLogos].map((src, index) => (
              <SwiperSlide key={`${index}-${src}`} className="!w-auto px-4">
                <div className="flex items-center justify-center h-full">
                  <a
                    href="#"
                    aria-label={`Client logo ${
                      (index % clientLogos.length) + 1
                    }`}
                    className="block p-2"
                  >
                    <img
                      src={src}
                      alt={`client-${(index % clientLogos.length) + 1}`}
                      width={120}
                      height={40}
                      className="h-6 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                      loading="lazy"
                    />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ClientSwiper;
