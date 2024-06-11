"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from "swiper/modules";

const CustomSlider = () => {
  return (
    <Swiper
      cssMode={true}
      navigation={false}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
      className="px-12 object-cover w-full h-[fit-content]"
    >
      <SwiperSlide>
        <div className="flex flex-row items-center gap-4 lg:gap-6 justify-center w-full py-10 px-2">
          <Image
            src="/assets/image-3.svg"
            alt="slide"
            width={500}
            height={500}
            className="w-[160px] h-[200px] hidden lg:flex"
          />
          <Image
            src="/assets/image-2.svg"
            alt="slide"
            width={500}
            height={500}
            className="w-[160px] h-[200px]"
          />
          <Image
            src="/assets/image-1.svg"
            alt="slide"
            width={500}
            height={500}
            className="w-[160px] h-[190px] hidden lg:flex"
          />
          <Image
            src="/assets/image-4.svg"
            alt="slide"
            width={500}
            height={500}
            className="w-[250px] lg:w-[160px] h-[190px] "
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex flex-row items-center gap-4 lg:gap-6 justify-center w-full py-10 px-2">
          <Image
            src="/assets/image-4.svg"
            alt="slide"
            width={500}
            height={500}
            className="w-[160px] h-[190px] hidden lg:flex "
          />
          <Image
            src="/assets/image-1.svg"
            alt="slide"
            width={500}
            height={500}
            className="w-[160px] h-[190px] "
          />
          <Image
            src="/assets/image-2.svg"
            alt="slide"
            width={500}
            height={500}
            className="w-[160px] h-[200px] "
          />
          <Image
            src="/assets/image-3.svg"
            alt="slide"
            width={500}
            height={500}
            className="w-[160px] h-[200px] hidden lg:flex"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default CustomSlider;
