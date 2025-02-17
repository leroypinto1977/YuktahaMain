"use client";

import { Counter } from "./Counter";
import { BackgroundGradientDemo } from "./EventCard";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { ShootingStars } from "./acertinity_ui/shooting-stars";
import { SparklesCore } from "./acertinity_ui/sparkles";
import { StarsBackground } from "./acertinity_ui/stars-background";
import { Progress } from "@heroui/progress";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import React, { useState, useEffect } from "react";

const eventDate = new Date("2025-03-15T11:00:00").getTime();

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        setTimeout(() => {
          setTimeLeft({ days, hours, minutes });
        }, 1000);
        setTimeLeft({ days, hours, minutes });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
      }
    };

    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="flex flex-row justify-center text-center w-full text-white text-2xl font-semibold m-4"
    >
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="p-8 font-sofia text-[#3B6790]"
      >
        <Counter className="" number={timeLeft.days} title="" />{" "}
        {timeLeft.days == 1 ? "Day" : "Days"}
      </motion.span>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="p-8 font-sofia text-[#3B6790]"
      >
        <Counter className="flex" number={timeLeft.hours} title="" />{" "}
        {timeLeft.hours == 1 ? "Hour" : "Hours"}
      </motion.span>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="p-8 font-sofia text-[#3B6790]"
      >
        <Counter className="flex" number={timeLeft.minutes} title="" />{" "}
        {timeLeft.minutes == 1 ? "Minute" : "Minutes"}
      </motion.span>
    </motion.div>
  );
};

const LoadingSequence = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("initialising");
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setLoading(false);
            setTimeout(() => setShowContent(true), 1000);
          }, 500);
          return 100;
        }

        if (prev < 25) setLoadingText("initialising");
        else if (prev < 50) setLoadingText("opening");
        else if (prev < 75) setLoadingText("loading");
        else setLoadingText("starting");

        return prev + 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  const loadingScreen = (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: loading ? 0 : "-100%" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          className="w-80 h-80 rounded-full border-4 border-gray-800"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.img
          src="/logo/yukta_logo.jpeg"
          alt="Logo"
          className="absolute w-80 h-80 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full"
        />
      </div>
    </motion.div>
  );

  const mainContent = showContent && (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ delay: 0.5 }}
      >
        <motion.div
          // initial={{ opacity: 0, y: -100 }}
          // animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, top: [-30] }}
          animate={{ opacity: 1, top: 0 }}
          // exit={{ y: -100 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Navbar />
        </motion.div>

        <div className="relative w-full h-screen">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            <StarsBackground className="bg-black absolute inset-0" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.4 }}
          >
            <ShootingStars className="absolute inset-0" />
          </motion.div>

          <div className="flex items-center justify-center h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 1, duration: 1.5 }}
              className="z-20"
            >
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="text-center text-gray-600 z-20 font-sofia "
              >
                PSG iTech Presents
              </motion.h4>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -500 }}
                transition={{ delay: 1, duration: 1.5 }}
                className="text-3xl md:text-5xl text-center font-semibold font-sofia bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white z-20 m-7"
              >
                Yuktaha 2025
              </motion.h2>
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="text-center md:text-xl text-gray-600 z-20 font-sofia "
              >
                Starts In
              </motion.h4>
              <CountdownTimer />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: 1, repeat: Infinity, duration: 1.5 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
          >
            <ChevronDown className="text-white w-10 h-10" />
          </motion.div>
        </div>

        <div className="bg-[#3B6790] w-full h-full py-32">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="text-xl md:text-3xl text-left font-semibold font-sofia text-white pl-20"
          >
            About Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ delay: 0.2, duration: 1.5 }}
            viewport={{ once: true }}
            className="text-2xl md:text-5xl text-left max-w-7xl font-semibold font-sofia text-white pt-20 pl-20"
          >
            YUKTAHA'25 is a{" "}
            <span className="text-black">National Level Event</span> aims to
            showcase technological and inventive skills from students across the
            country, providing a platform for innovative minds to shine.
          </motion.p>
        </div>
        <div className="bg-black w-full h-full py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ dealy: 1, duration: 1.5 }}
            viewport={{ once: true }}
            className="h-full w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md"
          >
            <h1 className="md:text-2xl text-2xl lg:text-3xl font-semibold font-sofia text-center text-white relative z-20">
              Event Linup
            </h1>
            <div className="w-[40rem] h-20 relative">
              {/* Gradients */}
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

              {/* Core component */}
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />

              {/* Radial Gradient to prevent sharp edges */}
              <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
          </motion.div>

          <motion.div className="py-20 px-20 flex felx-row justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 1.5 }}
              className="px-20"
            >
              <BackgroundGradientDemo className="py-10" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5, duration: 1.5 }}
              className="px-20"
            >
              <BackgroundGradientDemo className="py-10" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              viewport={{ once: true }}
              transition={{ delay: 2, duration: 1.5 }}
              className="px-20"
            >
              <BackgroundGradientDemo className="py-10" />
            </motion.div>
          </motion.div>
        </div>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );

  return (
    <>
      {loadingScreen}
      {mainContent}
    </>
  );
};

export default LoadingSequence;
