"use client";
import { useState } from "react";
import { FiMusic } from "react-icons/fi";
import { motion } from "framer-motion";

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    const audio = document.getElementById("lofi-audio") as HTMLAudioElement;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#21C55D] text-white shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
      >
        {isPlaying ? (
          <div className="flex items-end gap-[3px] h-6">
            {[0.2, 0.4, 0.6].map((delay, i) => (
              <motion.div
                key={i}
                className="w-[4px] bg-white rounded"
                animate={{ height: ["20%", "100%", "20%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 0.8,
                  ease: "easeInOut",
                  delay,
                }}
                style={{ height: "40%" }}
              />
            ))}
          </div>
        ) : (
          <FiMusic className="text-2xl" />
        )}
      </button>

      {/* Audio player */}
      <audio id="lofi-audio" src="/lofi-295209.mp3" loop />
    </>
  );
}
