"use client";

import { ShootingStars } from "@/components/acertinity_ui/shooting-stars";
import { StarsBackground } from "@/components/acertinity_ui/stars-background";
import React from "react";

export default function Hero() {
  return (
    <div className="h-screen w-full flex items-center bg-black justify-center relative overflow-hidden">
      {/* Starry Background */}
      <StarsBackground className="absolute inset-0 w-full h-full" />

      {/* Shooting Stars */}
      <ShootingStars className="absolute inset-0 w-full h-full" />

      <div>
        <h4 className="text-center text-gray-600">PSG iTech Presents</h4>
        {/* Content on top */}
        <h2 className="relative z-10 text-3xl md:text-5xl md:leading-tight text-center font-medium font-sofia font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white">
          Yuktaha 2025
        </h2>
      </div>
    </div>
  );
}
