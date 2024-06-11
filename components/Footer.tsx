import React from "react";
import Image from "next/image";

const Footer = () => {
    return(
        <div className="max-w-8xl lg:px-12 py-4 mt-4 lg:mt-14">
            <div className="flex flex-row justify-between items-center border border-t-gray-500 border-b-gray-500 py-4 lg:px-4">
                <div className="flex items-center w-[100px] h-[50px]">
                    <Image loading='lazy'  src="/assets/logo.svg" alt="board" width={100} height={100}/>
                </div>
                <div className="flex flex-row gap-4 items-center">
                    <a href="http://wa.me/message/PGD7WM6OERBWD1**%5D(https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2Fmessage%2FPGD7WM6OERBWD1&e=AT0DQcP6vlWqFSCaYLBn5Ninr7vYfuh-d8Z2excSsAvkAJIaBa-f_tSorbSGi1M7StMxiIhdvRvinopbYsrdFNoX3ThWg9rynqWtB2U_9FKQVUF3gErVxg)">
                    <Image loading='lazy'  src="/assets/call.svg" alt="board" width={40} height={40} className="w-[30px] h-[30px]"/>
                    </a>
                    <a href="https://twitter.com/AdornedByAmani">
                    <Image loading='lazy'  src="/assets/twitter.svg" alt="board" width={35} height={35} className="w-[30px] h-[30px]"/>
                    </a>
                    <a href="http://wa.me/message/PGD7WM6OERBWD1**%5D(https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2Fmessage%2FPGD7WM6OERBWD1&e=AT0DQcP6vlWqFSCaYLBn5Ninr7vYfuh-d8Z2excSsAvkAJIaBa-f_tSorbSGi1M7StMxiIhdvRvinopbYsrdFNoX3ThWg9rynqWtB2U_9FKQVUF3gErVxg)">
                    <Image loading='lazy'  src="/assets/chat.svg" alt="board" width={35} height={35} className="w-[25px] h-[25px]"/>
                    </a>
                    <a href="https://www.instagram.com/adornedbyamani/">
                    <Image loading='lazy'  src="/assets/instagram.svg" alt="board" width={35} height={35} className="w-[25px] h-[25px]"/>
                    </a>

                </div>
            </div>
            <div className="w-full lg:w-[75%] mx-auto mt-4  p-0 md:p-4 flex flex-col lg:flex-row items-center justify-center gap-2 md:gap-6">
                <p>Made By <a href="" className="underline">The LoopHole Studio </a></p>
                <p>&copy; {new Date().getFullYear()} LoopHole Studios. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer; 