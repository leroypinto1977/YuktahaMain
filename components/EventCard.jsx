"use client";

import { BackgroundGradient } from "@/components/acertinity_ui/background-gradient";
import Image from "next/image";
import React from "react";

export function BackgroundGradientDemo() {
  return (
    <div className="max-w-sm mx-auto">
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-black">
        <Image
          src={`/home/Designer.jpeg`}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain rounded-[18px]"
        />
        <p className="text-base sm:text-md font-sofia text-white mt-4 dark:text-neutral-200 ">
          Read more
        </p>

        {/* <p className="text-sm text-neutral-600 dark:text-neutral-400">
          The Air Jordan 4 Retro Reimagined Bred will release on Saturday,
          February 17, 2024. Your best opportunity to get these right now is by
          entering raffles and waiting for the official releases.
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            $100
          </span>
        </button> */}
        {/* <button className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-8 py-2 my-5 w-full bg-[#fff] text-[#696969] rounded-md font-light transition duration-200 ease-linear">
          Read more
        </button> */}
      </BackgroundGradient>
    </div>
  );
}
