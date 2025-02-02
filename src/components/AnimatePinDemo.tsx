"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { motion } from "framer-motion";

export function AnimatedPinDemo({
  title,
  desc,
  icon,
  levelColor
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
  levelColor: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.3, ease: "easeInOut" },
      }}
      className="flex items-center justify-center w-auto h-auto z-20 "
    >
      <PinContainer title={title} href="/">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[14rem] h-[18rem]">
          <h3 className="max-w-xs pb-2 m-0 font-bold text-base text-slate-100">
            {title}
          </h3>
          <div className="text-base m-0 p-0 font-normal">
            <span className="text-slate-500 ">{desc}</span>
          </div>
          <div className={`flex flex-1 w-full items-center justify-center rounded-lg mt-4 bg-gradient-to-br ${levelColor} p-6`}>
            <div className="text-5xl text-white">{icon}</div>
          </div>
        </div>
      </PinContainer>
    </motion.div>
  );
}
