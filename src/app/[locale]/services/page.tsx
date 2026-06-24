"use client";
import { CardStack } from "@/components/CardStack";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { BsArrowDownRight } from "react-icons/bs";
import { cn } from "@/lib/utils";

const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-green-300 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};
const services = [
  {
    num: "01",
    title: "Web / Mobile",
    href: "",
    description: "Je crée des sites web modernes et responsives, adaptés aux besoins de mes utilisateurs.",
    subServices: [
      {
        id: 1,
        name: "Développement React",
        designation: "Développement Frontend",
        content: (
          <p>
            Avec <Highlight>React</Highlight>, je développe des interfaces dynamiques qui améliorent l&apos;expérience utilisateur et garantissent une maintenance facile.
          </p>
        ),
      },
      {
        id: 2,
        name: "Développement Next.js",
        designation: "Développement Full Stack",
        content: (
          <p>
            Grâce à <Highlight>Next.js</Highlight>, j&apos;intègre des optimisations SEO et un rendu côté serveur pour des performances élevées.
          </p>
        ),
      },
      {
        id: 3,
        name: "Développement d'applications web",
        designation: "Développement Full Stack",
        content: (
          <p>
            Je conçois des applications sur mesure, offrant une expérience utilisateur fluide et transformant vos idées en solutions. <Highlight>Mon objectif</Highlight> est votre satisfaction.
          </p>
        ),
      },
    ],
  },
  {
    num: "02",
    title: "Nocode / Lowcode",
    href: "",
    description: "Je développe rapidement des applications mobiles pour iOS et Android sans code complexe.",
    subServices: [
      {
        id: 4,
        name: "Développement FlutterFlow",
        designation: "Développement Cross-platform",
        content: (
          <p>
            Avec <Highlight>FlutterFlow</Highlight>, je crée des applications mobiles élégantes et performantes, tout en réduisant les délais de livraison.
          </p>
        ),
      },
      {
        id: 5,
        name: "Développement WordPress",
        designation: "Développement Mobile",
        content: (
          <p>
            J&apos;utilise <Highlight>WordPress</Highlight> pour développer des sites flexibles, adaptés à vos besoins, que ce soit un blog ou une plateforme e-commerce.
          </p>
        ),
      },
      {
        id: 6,
        name: "Développement Bubble",
        designation: "Développement Mobile",
        content: (
          <p>
            Avec <Highlight>Bubble</Highlight>, je construis des applications web sans code, offrant flexibilité et innovation tout en maîtrisant les coûts.
          </p>
        ),
      },
    ],
  },

  // Ajoutez plus de services et sous-services ici
];


function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-green-300 transition-all duration-500
                    flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-[#020617] text-2xl" />
                  </Link>
                </div>

                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-green-300 transition-all duration-500">
                  {service.title}
                </h2>

                <p className="text-neutral-400">{service.description}</p>

                <div className="border-b border-white/20 w-full mb-8 mt-4"></div>
                {/* Affichage des sous-services */}
                <CardStack items={service.subServices} />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
