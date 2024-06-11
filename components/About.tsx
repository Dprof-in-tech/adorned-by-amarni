import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center max-w-7xl md:px-12 px-2 py-6 mt-8 md:mt-14 mx-auto">
      <h1 className="text-black font-semibold text-[2rem] md:text-[3rem]">About Us</h1>
      <div className="text-[1.2rem] md:text-[1.5rem] w-full  lg:w-[95%] flex flex-col sm:flex-row sm:items-center lg:text-start sm:text-left space-y-4 sm:space-y-0 sm:space-x-4 mt-4">
        <p>
          <Image
            src="/assets/frame-1.svg"
            alt="Frame 1"
            width={85}
            height={45}
            className="inline-block w-[85px] h-[45px]"
          />
          We are ADORNED BY AMANI and our Jewelries make you the center of attraction whenever you step out with them.
          <Image
            src="/assets/frame-2.svg"
            alt="Frame 2"
            width={85}
            height={45}
            className="inline-block w-[85px] h-[45px] mx-2"
          />
          We source for timeless, meticulously crafted and adorable pieces of jewelry, and we make them available to you for the most affordable prices.
          <Image
            src="/assets/frame-3.svg"
            alt="Frame 3"
            width={85}
            height={45}
            className="inline-block w-[85px] h-[45px] mx-2"
          />
          Our catalogue features earrings, bracelets, and so much more, and since 2021, we&apos;ve committed to delivering the best level of service to our 1,000+ amazing customers.
        </p>
      </div>
    </div>
  );
};

export default About;
