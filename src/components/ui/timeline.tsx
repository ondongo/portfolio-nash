"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 100%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans md:px-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Photo de profil */}
          <div className="flex-shrink-0 flex flex-col items-center ">
            <img
              src="/assets/me.jpeg" // à remplacer par ton image
              alt="Prince de Gloire ONDONGO"
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-2 border-white"
            />
            <div className="flex flex-col items-center gap-4 my-4">
              {/* Pays */}
              <div className="flex items-center gap-2 text-white text-sm">
                Congo / France / Sénégal / Brésil
              </div>

              {/* Langues */}
              <div className="flex gap-2">
                {["Français", "Anglais", "Lingala"].map((langue) => (
                  <span
                    key={langue}
                    className="px-4 py-1 border border-white/20 text-white text-sm rounded-full hover:bg-white hover:text-black transition"
                  >
                    {langue}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Texte de présentation */}
          <div>
            <h2 className="text-lg md:text-4xl mb-4 text-white max-w-4xl">
              Qui suis-je 🤔
            </h2>
            <p className="text-neutral-400 text-sm md:text-base max-w-3xl leading-relaxed">
              Je suis Prince de Gloire, développeur full stack congolais,
              passionné par le code, les mangas, l’animation, le football, la
              musique lofi… et les ragots entre potes 😄 Actuellement installé à
              Rennes pour mes études en MBA Développement Full-Stack à
              MyDigitalSchool, je construis un parcours riche et atypique. Après
              avoir étudié à Dakar, j’ai eu l’opportunité de travailler en full
              remote pour une entreprise basée au Brésil, tout en menant mes
              projets en freelance. Je suis aujourd’hui à la recherche d’une
              alternance pour ma dernière année de master, prêt à relever de
              nouveaux défis avec sérieux, curiosité et créativité.
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-2 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-white max-w-4xl">
          Mes experiences & Mon Aventure 🚀
        </h2>

        <p className="text-neutral-400  text-sm md:text-base max-w-xl">
          De la théorie à la pratique, chaque expérience forge mon expertise.
          Plongez dans mon parcours,passionnant dans le développement full
          stack.
        </p>
      </div>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-28 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-green-300 via-green-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
