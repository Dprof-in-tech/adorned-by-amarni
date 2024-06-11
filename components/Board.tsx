import Image from "next/image";
import React from "react";

const Board = () => {
  return (
    <div className="max-w-7xl h-[550px] lg:h-[100vh] flex gap-4 md:px-12 px-8 py-8 mt-[8rem] md:mt-[12rem] relative">
      <div className="w-[75px] h-[75px] lg:w-[160px] lg:h-[160px] rounded-lg absolute top-6 left-4 md:left-12">
        <Image
             
          src="/assets/necklace-1.svg"
          alt="board"
          width={340}
          height={460}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="w-[100px] h-[100px] lg:w-[220px] lg:h-[220px] rounded-lg absolute top-0 right-4 lg:-right-12">
        <Image
             
          src="/assets/Rings.svg"
          alt="board"
          width={340}
          height={460}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="w-[200px] h-[200px] lg:w-[260px] lg:h-[260px] rounded-lg absolute top-[30%] lg:top-[50%] left-[25%] lg:left-[40%] bottom-[50%] self-center">
        <Image
             
          src="/assets/ring-1.svg"
          alt="board"
          width={340}
          height={460}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col items-center justify-center absolute top-[60%] left-[12%] lg:left-[30%]">
        <h1 className="text-[#0F1827] font-semibold text-[1.5rem] lg:text-[2.8rem] ">
          Explore Our Store Today!
        </h1>
        <a href="https://paystack.shop/adorned-by-amani">
          <button className="mt-8 lg:mt-12 bg-[#00046A] px-6 py-3 rounded-md text-white">
            Open Store
          </button>
        </a>
      </div>
      <div className="w-[150px] h-[150px] lg:w-[260px] lg:h-[260px] rounded-lg absolute -bottom-[8rem] lg:bottom-0 -left-12">
        <Image
             
          src="/assets/earrings-1.svg"
          alt="board"
          width={340}
          height={460}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="w-[150px] h-[150px] lg:w-[220px] lg:h-[260px] rounded-lg absolute -bottom-[10rem] lg:-bottom-12 right-4 lg:-right-12">
        <Image
             
          src="/assets/necklace-2.svg"
          alt="board"
          width={340}
          height={460}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Board;
