"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    const audio = document.getElementById("lofi-audio") as HTMLAudioElement;
    if (!audio) return;
    isPlaying ? audio.pause() : audio.play();
    setIsPlaying((v) => !v);
  };

  return (
    <>
      <motion.button
        onClick={toggleMusic}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-green-300 to-emerald-500 text-[#020617] flex items-center justify-center shadow-xl shadow-green-500/25"
      >
        {/* Pulse faible quand en pause */}
        {!isPlaying && (
          <span className="absolute inset-0 rounded-full bg-green-300 animate-ping opacity-10 pointer-events-none" />
        )}
        {isPlaying ? (
          <div className="flex items-end gap-[3px] h-5">
            {[0, 0.2, 0.4].map((delay, i) => (
              <motion.div
                key={i}
                className="w-[3px] bg-[#020617] rounded-full"
                animate={{ height: ["30%", "100%", "30%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 0.7,
                  ease: "easeInOut",
                  delay,
                }}
                style={{ height: "40%" }}
              />
            ))}
          </div>
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" />
          </svg>
        )}
      </motion.button>

      <audio id="lofi-audio" src="/lofi-295209.mp3" loop />
    </>
  );
}
