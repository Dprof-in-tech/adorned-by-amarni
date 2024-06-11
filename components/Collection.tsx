import Image from "next/image";
import React from "react";

const Collection = () => {
  return (
    <div className="flex flex-col items-center text-center max-w-7xl px-2 py-6 mt-8 md:mt-[12rem]">
      <h1 className="text-black font-semibold text-[2rem] md:text-[3rem]">Our Collection</h1>
      <div className="w-full flex flex-wrap justify-evenly gap-4 pl-0 lg:pl-4 mt-12">
        <div className="group relative w-full lg:w-[32%] h-[360px] lg:h-[440px]">
          <Image src="/assets/earrings.svg" alt="earrings" width={1000} height={1000} className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-50 rounded-lg transition-opacity duration-300"></div>
        </div>
        <div className="w-full lg:w-[32%] h-[360px] lg:h-[440px] flex flex-col items-center justify-center bg-white rounded-lg p-4">
           <h2 className=" text-[1.2rem] md:text-[1.5rem] max-w-[75%] text-[#0F1827] font-semibold">
           We adorn you with TOP NOTCH Jewelry that speaks CLASS and STYLE
           </h2>
           <p className="text-[0.8rem] mt-6">Order yours at the price at the best price here</p>
           <button className="mt-2 px-6 py-3 bg-[#00046A] text-white rounded-lg">
            Open Store  &gt;
           </button>
        </div>
        <div className="group relative w-full lg:w-[32%] h-[360px] lg:h-[440px]">
          <Image src="/assets/Anklets.svg" alt="earrings" width={500} height={500} className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-50 rounded-lg transition-opacity duration-300"></div>
        </div>
        <div className="group relative w-full lg:w-[32%] h-[360px] lg:h-[440px]">
          <Image src="/assets/Necklace.svg" alt="earrings" width={500} height={500} className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-50 rounded-lg transition-opacity duration-300"></div>
        </div>
        <div className="group relative w-full lg:w-[32%] h-[360px] lg:h-[440px]">
          <Image src="/assets/Bracelet.svg" alt="earrings" width={500} height={500} className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-50 rounded-lg transition-opacity duration-300"></div>
        </div>
        <div className="group relative w-full lg:w-[32%] h-[360px] lg:h-[440px]">
          <Image src="/assets/Rings.svg" alt="earrings" width={500} height={500} className="w-full h-full object-cover rounded-lg" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-50 rounded-lg transition-opacity duration-300"></div>
        </div>
      </div>
    </div>
  );
};              

export default Collection;
