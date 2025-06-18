"use client";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { usePathname } from "next/navigation";

function PageTransition({ children }: any) {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
          className="h-screen w-screen fixed bg-slate-950 top-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#ffffff22 0px, transparent 1px)",
            backgroundSize: "6px 6px",
          }}
        />
        {children}
      </div>
    </AnimatePresence>
  );
}

export default PageTransition;
