import React from "react";
import CustomSlider from "./PhotoSlider";

const Showcase = () => {
  return (
    <div className="max-w-7xl mx-auto flex lg:flex-row flex-col gap-8 md:px-10 px-2 py-4 mt-14 md:mt-[10rem]">
      <div className="flex flex-col items-center lg:items-start justify-center w-full lg:w-[38%] ml-0 lg:ml-8">
        <h1 className="text-[#0F1827] text-[2rem] font-semibold">Product Showcase</h1>
        <p className="w-full text-center text-[1.2rem] lg:text-start lg:-mt-2 lg:max-w-[95%] py-4">
          Explore our exquisite collection of jewelry, crafted to match your
          unique style. From dazzling earrings to stunning rings, our selection
          has something for everyone.
        </p>
        <button className="bg-[#00046A] px-6 py-3 mt-8 lg:mt-2 rounded-lg text-white">
            Open Store
        </button>
      </div>
      <div className="w-full lg:w-[68%]">
        <CustomSlider/>
      </div>
    </div>
  );
};

export default Showcase;
