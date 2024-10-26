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
    title: "Web / Mobile Dev",
    href: "",
    description: "Create stunning and responsive websites.",
    subServices: [
      {
        id: 1,
        name: "React Development",
        designation: "Frontend Development",

        content: (
          <p>
            These cards are amazing, &nbsp;{" "}
            <Highlight>I want to use them</Highlight> &nbsp; in my project.
            Framer motion is a godsend ngl tbh fam 🙏
          </p>
        ),
      },
      {
        id: 2,
        name: "Next.js Development",
        designation: "Full Stack Development",
        content: (
          <p>
            These cards are amazing, <Highlight>I want to use them</Highlight>{" "}
            in my project. Framer motion is a godsend ngl tbh fam 🙏
          </p>
        ),
      },

      {
        id: 3,
        name: "Next.js Development",
        designation: "Full Stack Development",
        content: (
          <p>
            These cards are amazing, <Highlight>I want to use them</Highlight>{" "}
            in my project. Framer motion is a godsend ngl tbh fam 🙏
          </p>
        ),
      },
    ],
  },
  {
    num: "02",
    title: "Nocode / Lowcode",
    href: "",
    description: "Build mobile applications for iOS and Android.",
    subServices: [
      {
        id: 4,
        name: "FlutterFlow Development",
        designation: "Cross-platform Development",
        content: "Create native-like mobile apps using Flutter.",
      },
      {
        id: 5,
        name: "Wordpress Development",
        designation: "Mobile Development",
        content: "Develop cross-platform apps with React Native.",
      },

      {
        id: 6,
        name: "Bubble Development",
        designation: "Mobile Development",
        content: "Develop cross-platform apps with React Native.",
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
