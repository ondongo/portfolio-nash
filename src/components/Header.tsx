"use client";
import Link from "next/link";
import React, { useState } from "react";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import { FiMusic } from "react-icons/fi";
import { motion } from "framer-motion";

function Header() {
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
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <Link href={"/"}>
          <h1 className="text-2xl sm:text-2xl md:text-3xl font-semibold">
            Prince of Code{" "}
            <span className="text-green-300"> &lt; 👨🏾‍💻 &gt; </span>
          </h1>
        </Link>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />

          {/* Icône ou equalizer animé */}
          <div onClick={toggleMusic} className="cursor-pointer">
            {isPlaying ? (
              <div className="flex items-center gap-[2px] w-6 h-6">
                {[0.3, 0.5, 0.7].map((delay, i) => (
                  <motion.div
                    key={i}
                    className="w-[3px] rounded bg-green-300"
                    animate={{
                      height: ["20%", "100%", "20%"],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.8,
                      ease: "easeInOut",
                      delay,
                    }}
                  />
                ))}
              </div>
            ) : (
              <motion.button
                whileTap={{ scale: 0.9 }}
                className="text-green-300 text-2xl hover:text-green-200"
              >
                <FiMusic />
              </motion.button>
            )}
          </div>

          {/* Bouton recrutement */}
          <Link
            href={
              "mailto:gloireondongo1205@gmail.com?subject=Alternance%20Full%20Stack%20chez%20[Nom%20de%20l'entreprise]&body=Bonjour%20Prince%2C%0A%0ANous%20souhaiterions%20échanger%20avec%20toi%20concernant%20une%20opportunité%20d'alternance%20au%20sein%20de%20notre%20équipe%20tech.%0A%0ASerais-tu%20disponible%20pour%20un%20échange%20dans%20les%20jours%20à%20venir%20%3F%0A%0ABien%20à%20toi%2C%0A[Signature]"
            }
          >
            <Button className="remplissage cursor-pointer">Recrutez moi</Button>
          </Link>
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>

        {/* Audio player (hidden) */}
        <audio id="lofi-audio" src="/lofi-295209.mp3" loop />
      </div>
    </header>
  );
}

export default Header;
