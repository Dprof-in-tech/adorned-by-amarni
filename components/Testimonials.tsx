import React from "react";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="max-w-7xl flex flex-col items-center gap-4 md:px-12 px-0 py-8 mt-[14rem] md:mt-24 lg:mt-[15rem] relative">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-[1.5rem] lg:text-[2rem] text-[#0F1827] font-semibold">What our customers are saying </h1>
        <p className="max-w-[75%] text-black text-[0.8rem]">We like the smiles that our customers send us when they recieve their items</p>
      </div>
      <div className="flex flex-col flex-wrap items-center justify-center w-full lg:w-[75%] h-[400px] lg:h-[400px] mt-8 relative">
        <Image src="/assets/face-5.svg" alt="board" width={500} height={500} className=" w-[35px] h-[35px] object-cover rounded-full absolute top-0 left-0"/>
        <Image src="/assets/face-2.svg" alt="board" width={500} height={500} className=" w-[50px] h-[50px] object-cover rounded-full absolute top-0 right-0"/>
        <Image src="/assets/face-3.svg" alt="board" width={500} height={500} className=" w-[35px] h-[35px] object-cover rounded-full absolute right-[25%] lg:right-[14rem] bottom-[15rem] lg:bottom-[10rem]"/>
        <Image src="/assets/face-4.svg" alt="board" width={500} height={500} className=" w-[30px] h-[30px] object-cover rounded-full absolute top-12 right-[22%] lg:right-[8rem]"/>
        <Image src="/assets/face-1.svg" alt="board" width={500} height={500} className=" lg:w-[150px] w-[75px] h-[75px] lg:h-[150px] object-cover rounded-full"/>
        <button className="bg-[#00046A] text-white px-4 py-2 rounded-md mt-[6rem] lg:mt-20">
            Click here to see reviews
        </button>
        <Image src="/assets/face-6.svg" alt="board" width={500} height={500} className=" w-[28px] h-[28px] object-cover rounded-full absolute bottom-[17rem] lg:bottom-[12rem] left-[5%] lg:left-[20rem]"/>
        <Image src="/assets/face-7.svg" alt="board" width={500} height={500} className=" lg:w-[75px] w-[35px] h-[35px] lg:h-[75px] object-cover rounded-full absolute left-[25%] lg:left-[8rem] top-12"/>
        <Image src="/assets/face-8.svg" alt="board" width={500} height={500} className=" w-[45px] h-[45px] object-cover rounded-full absolute bottom-[12rem] right-0"/>
        <Image src="/assets/face-9.svg" alt="board" width={500} height={500} className=" lg:w-[50px] w-[40px] h-[40px] lg:h-[50px] object-cover rounded-full absolute lg:bottom-[10rem] bottom-[12rem] left-[4rem] lg:left-[5rem]"/>
      </div>
    </div>
  );
};

export default Testimonials;