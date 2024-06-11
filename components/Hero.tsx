import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:justify-evenly justify-center items-center mt-8 md:mt-20 md:px-12 px-8 py-6">
      <h1 className="px-4 lg:text-[6rem] text-[3rem] text-center  lg:w-[340px] font-serif mb-[5rem] lg:mb-0">Timeless Beauty,</h1>
      <div className="relative flex self-center mx-auto h-[340px] w-full lg:w-[620px] rounded-xl bg-arrow bg-no-repeat bg-contain">
        <div className="absolute lg:left-[22%] self-center z-index-2 h-[450px] w-full lg:w-[350px] rounded-full border border-black border-thin mx-auto">
          <Image
            src="/assets/armani.gif"
            alt="hero"
            layout="fill"
            className="border border-solid border-black h-full w-full object-cover rounded-full"
          />{" "}
        </div>
      </div>
      <h1 className="lg:text-[6rem] text-[3rem] text-center lg:w-[340px] font-serif mt-[5rem] lg:mt-0">Infinite Steeze.</h1>
    </div>
  );
};

export default Hero;
