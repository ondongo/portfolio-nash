"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

function Photo() {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1.8, duration: 0.4, ease: "easeIn" },
        }}
        className="relative"
      >
        {/* Conteneur circulaire pour l’image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.1, duration: 0.4, ease: "easeInOut" },
          }}
          className="relative w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] rounded-full overflow-hidden"
        >
          <Image
            src="/assets/2048.jpeg"
            alt="https://devimages-cdn.apple.com/wwdc-services/articles/images/1E40DB17-EE2A-48AD-B37B-E5DA24B74F9A/2048.jpeg"
            fill
            priority
            quality={100}
            className="object-cover"
          />
        </motion.div>

        {/* Cercle SVG animé */}
        <motion.svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] xl:w-[506px] h-[300px] xl:h-[506px] pointer-events-none"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#87EEAB"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "15 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}

export default Photo;
