"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale } from "next-intl";

type Lang = "fr" | "en";

interface QA {
  question: string;
  answer: string;
}

const qaData: Record<Lang, QA[]> = {
  fr: [
    {
      question: "Qui es-tu ?",
      answer:
        "Je m'appelle Prince de Gloire, développeur Full Stack spécialisé en Next.js, React et Java Spring Boot. Actuellement chez Niji, je suis en recherche de nouvelles opportunités à partir de septembre 2026.",
    },
    {
      question: "Tu cherches quoi ?",
      answer:
        "Je suis disponible pour un CDI à partir de septembre 2026. Je cherche une équipe tech ambitieuse pour travailler sur des projets React, Next.js ou Java.",
    },
    {
      question: "Quels sont tes projets ?",
      answer:
        "Plus de 50 projets réalisés : plateformes e-commerce, applications web, solutions B2B et intégrations API. En ce moment, je construis Mboka Market, un marketplace conçu pour le marché congolais.",
    },
    {
      question: "Quelles sont tes technologies ?",
      answer:
        "Mon cœur de métier : React, Next.js, TypeScript, Java Spring Boot, Node.js et Firebase. Je maîtrise aussi le low-code avec FlutterFlow, et j'explore les architectures IA avec MCP et RAG.",
    },
    {
      question: "Comment te contacter ?",
      answer:
        "Par email à gloireondongo1205@gmail.com ou directement via la page Contact du portfolio. Je réponds généralement sous 24h.",
    },
  ],
  en: [
    {
      question: "Who are you?",
      answer:
        "I'm Prince de Gloire, a Full Stack developer specialising in Next.js, React and Java Spring Boot. Currently at Niji, I'm open to new opportunities from September 2026.",
    },
    {
      question: "What are you looking for?",
      answer:
        "I'm available for a full-time position from September 2026. I'm looking to join an ambitious tech team working with React, Next.js or Java.",
    },
    {
      question: "What are your projects?",
      answer:
        "50+ projects delivered: e-commerce platforms, web applications, B2B solutions and API integrations. I'm currently building Mboka Market, a marketplace designed for the Congolese market.",
    },
    {
      question: "What technologies do you use?",
      answer:
        "My core stack: React, Next.js, TypeScript, Java Spring Boot, Node.js and Firebase. I also work with FlutterFlow for low-code projects, and explore AI architectures using MCP and RAG.",
    },
    {
      question: "How to contact you?",
      answer:
        "Email me at gloireondongo1205@gmail.com or use the contact form on this portfolio. I usually reply within 24 hours.",
    },
  ],
};

export function ChatWidget() {
  const rawLocale = useLocale();
  const lang: Lang = rawLocale === "en" ? "en" : "fr";
  const qa = qaData[lang];

  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Fermeture au clic extérieur — exclut le bouton déclencheur
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        panelRef.current?.contains(target) ||
        triggerRef.current?.contains(target)
      )
        return;
      setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  // Fermeture Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setActiveIdx(null);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  const activeQA = activeIdx !== null ? qa[activeIdx] : null;

  const toggle = () => {
    if (open) {
      setOpen(false);
      setActiveIdx(null);
    } else {
      setOpen(true);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">

      {/* Panneau */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={panelRef}
            key="panel"
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-[340px] sm:w-[380px] rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/[0.08] bg-[#0a0f1a]"
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-5 py-4 bg-gradient-to-r from-[#0d1520] to-[#111c2e] border-b border-white/[0.07]">
              <div className="relative shrink-0">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-300 to-emerald-500 flex items-center justify-center text-[#020617] font-bold text-sm shadow-lg select-none">
                  PG
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-400 border-2 border-[#0d1520]" />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold text-sm">
                  Prince Bot
                </p>
                <p className="text-green-400 text-[11px] font-medium">
                  {lang === "fr"
                    ? "En ligne"
                    : "Online"}
                </p>
              </div>

              <button
                onClick={() => {
                  setOpen(false);
                  setActiveIdx(null);
                }}
                aria-label="Fermer"
                className="w-7 h-7 rounded-full flex items-center justify-center text-neutral-500 hover:text-white hover:bg-white/10 transition-all duration-200"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Corps */}
            <div className="p-5 min-h-[280px] flex flex-col">
              <AnimatePresence mode="wait">
                {!activeQA ? (
                  <motion.div
                    key="questions"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.18 } }}
                    exit={{ opacity: 0, transition: { duration: 0.1 } }}
                    className="flex flex-col gap-2.5"
                  >
                    <p className="text-neutral-500 text-xs mb-1">
                      {lang === "fr"
                        ? "Sélectionnez une question"
                        : "Select a question"}
                    </p>
                    {qa.map((item, idx) => (
                      <motion.button
                        key={idx}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          transition: { delay: idx * 0.055, duration: 0.18 },
                        }}
                        onClick={() => setActiveIdx(idx)}
                        className="group text-left text-sm text-white/75 hover:text-white bg-white/[0.035] hover:bg-white/[0.07] border border-white/[0.07] hover:border-green-400/25 rounded-xl px-4 py-3 transition-all duration-200"
                      >
                        <span className="flex items-center gap-2.5">
                          <span className="text-green-400 text-xs font-mono opacity-50 group-hover:opacity-100 transition-opacity shrink-0">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          {item.question}
                        </span>
                      </motion.button>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    key="answer"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: 0.2 } }}
                    exit={{ opacity: 0, transition: { duration: 0.1 } }}
                    className="flex flex-col gap-4 flex-1"
                  >
                    {/* Question bubble */}
                    <div className="flex justify-end">
                      <div className="max-w-[78%] text-sm text-white bg-green-400/20 border border-green-400/20 rounded-2xl rounded-br-md px-4 py-2.5 leading-relaxed">
                        {activeQA.question}
                      </div>
                    </div>

                    {/* Réponse bubble */}
                    <div className="flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-green-300 to-emerald-500 flex items-center justify-center text-[#020617] font-bold text-[10px] shrink-0 mt-0.5 select-none">
                        PG
                      </div>
                      <div className="flex-1 text-sm text-white/80 bg-white/[0.04] border border-white/[0.07] rounded-2xl rounded-tl-md px-4 py-3 leading-relaxed">
                        {activeQA.answer}
                      </div>
                    </div>

                    {/* Retour */}
                    <button
                      onClick={() => setActiveIdx(null)}
                      className="mt-auto self-start flex items-center gap-1.5 text-xs text-neutral-500 hover:text-green-400 transition-colors duration-200 pt-1"
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                      </svg>
                      {lang === "fr" ? "Autre question" : "Back to questions"}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bouton flottant */}
      <motion.button
        ref={triggerRef}
        onClick={toggle}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        aria-label="Ouvrir le chat"
        className="relative w-14 h-14 rounded-full bg-gradient-to-br from-green-300 to-emerald-500 text-[#020617] flex items-center justify-center shadow-xl shadow-green-500/25"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.svg
              key="x"
              initial={{ rotate: -45, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 45, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </motion.svg>
          ) : (
            <motion.svg
              key="chat"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
            </motion.svg>
          )}
        </AnimatePresence>

        {/* Pulse quand fermé */}
        {!open && (
          <span className="absolute inset-0 rounded-full bg-green-300 animate-ping opacity-10 pointer-events-none" />
        )}
      </motion.button>
    </div>
  );
}
