"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const projects = [
  {
    num: "01",
    title: "portfolio-nash",
    description: "Portfolio personnel utilisant Nextjs.",
    category: "Portfolio",
    stack: [
      { name: "Nextjs" },
      { name: "TypeScript" },
      { name: "TailwindCss" },
      { name: "Css" },
      { name: "ShadcnUi" },
      { name: "AceternityUi" },
      { name: "FramerMotion" },
      { name: "Swipper" },
      { name: "Calendly" },
      { name: "Brevo" },
    ],
    image: "/assets/apercu1.png",
    live: "https://princedegloire.fr",
    github: "https://github.com/ondongo/portfolio-nash",
  },

  {
    num: "02",
    title: "BonwazDeals",
    description: "(En production) Site ecommerce multivendeur Dokan.",
    category: "Site Web",
    stack: [
      { name: "Wordpress" },
      { name: "WooCommerce" },
      { name: "PHP" },
      { name: "Js" },
      { name: "CSS" },
      { name: "Dokan" },
      { name: "Action Wordpress" },
    ],
    image: "/assets/bonwazdeals.png",
    live: "https://bonwazdeals.com/",
  },
  {
    num: "03",
    title: "Devi-a",
    description: "(En production) Sass pour analyse de devis",
    category: "Site Web",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Chakra UI" },
      { name: "OpenAI" },
      { name: "DocumentAI" },
      { name: "GoogleAI" },
    ],
    image: "/assets/devia.png",
    live: "https://artisan-a6u5.vercel.app/",
    github: "https://github.com/ondongo/artisan",
  },

  {
    num: "04",
    title: "DydyHair",
    description:
      "(En production) Site web pour prise de rendez-vous de coiffure.",
    category: "Site Web",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Framer Motion" },
      { name: "CSS" },
      { name: "NodeMailer" },
      { name: "Instastory" },
      { name: "Chakra UI" },
      { name: "AOS" },
    ],
    image: "/assets/dydyhair.png",
    live: "https://dydyhair.com",
    github: "https://github.com/ondongo/DydyHair",
  },

  {
    num: "05",
    title: "StandShop",
    description:
      "Création d'une application web e-commerce et blog dédié aux montres de luxes.",
    category: "Ecommerce - Blog",
    stack: [
      { name: "Wordpress" },
      { name: "Woocormerce" },
      { name: "Stripe" },
      { name: "Seo" },
      { name: "CSS" },
      { name: "Js" },
    ],
    image: "/assets/standshop.png",
  },
  {
    num: "06",
    title: "Kozua",
    description:
      "Application web dédié à la location de vehicule et d'appartement ",
    category: "Application Web",
    stack: [
      { name: "Next.js" },
      { name: "Firebase" },
      { name: "clean architecture" },
      { name: "Etc ..." },
    ],
    image: "/assets/kozua.png",
  },
  {
    num: "07",
    title: "DydyShop",
    description: "(En production) E-commerce utilisant Flask.",
    category: "E-commerce",
    stack: [
      { name: "Flask" },
      { name: "Twilio" },
      { name: "Flask-Login" },
      { name: "Flask-SQLAlchemy" },
      { name: "Bootstrap 5" },
      { name: "Tidio Chatbot" },
      { name: "Flask-Mail" },
    ],
    image: "/assets/dydyshop.png",
    github: "https://github.com/ondongo/DydyShop",
  },

  {
    num: "08",
    title: "LokalMarket",
    description:
      "Collaboration à la création d'une application web e-commerce multi-vendeur.",
    category: "Ecommerce ",
    stack: [
      { name: "Next.js" },
      { name: "Firebase" },
      { name: "Algolia" },
      { name: "Firebase Auth " },
      { name: "Etc ..." },
    ],
    image: "/assets/dysoft7.webp",
  },
  {
    num: "09",
    title: "ScrapAfrica",
    description:
      "Création d'une application web B2B avec Next.js, Firebase et Algolia.",
    category: "Application Web B2B",
    stack: [{ name: "Next.js" }, { name: "Firebase" }, { name: "Algolia" }],
    image: "/assets/dysoft4.png",
    live: "https://www.scrapafrica.com/",
  },
  {
    num: "10",
    title: "Mediane",
    description:
      "Collaboration à la création d'une application web de prise de rendez-vous.",
    category: "Application de Prise de Rendez-vous",
    stack: [{ name: "Next.js" }, { name: "Firebase" }],
    image: "/assets/dysoft8.png",
  },
  {
    num: "11",
    title: "Groopy",
    description:
      "Développement d’applications mobiles et Progressive Web Apps en FlutterFlow.",
    category: "Applications Mobiles et PWA",
    stack: [
      { name: "FlutterFlow" },
      { name: "CloudFunctions" },
      { name: "Firebase" },
      { name: "Stripe Connect" },
      { name: "Brevo" },
    ],
    image: "/assets/dysoft3.png",
  },

  {
    num: "12",
    title: "Biscoito",
    description:
      "Collaboration à la création d'une application web de mise en relations entre marques et prestataires de service.",
    category: "Mise en Relation entre Marques et Prestataires",
    stack: [
      { name: "Next.js" },
      { name: "Strapi" },
      { name: "NextAuth" },
      { name: "Middleware" },
      { name: "Etc ..." },
    ],
    image: "/assets/dysoft5.png",
  },
  {
    num: "13",
    title: "Web3 Studio",
    description:
      "(En production) Reproduction d'une maquette Figma avec Next.js.",
    category: "Développement Web",
    stack: [{ name: "Next.js" }, { name: "Chakra UI" }, { name: "AOS" }],
    image: "/assets/webstudio.png",
    live: "https://web3-studio-sigma.vercel.app/",
    github: "https://github.com/ondongo/web3Studio",
  },

  {
    num: "14",
    title: "Takeadoro Backend",
    description:
      "Backend pour l'application Takeadoro utilisant Firebase Cloud Functions.",
    category: "Backend",
    stack: [{ name: "Firebase Functions" }],
    image: "/assets/takeadoro.png",
    github: "https://github.com/ondongo/takeadoro-backend",
  },
  {
    num: "15",
    title: "Takeadoro Landing",
    description: "Landing page pour l'application Takeadoro.",
    category: "Landing Page",
    stack: [{ name: "TypeScript" }],
    image: "/assets/takeadoro.png",
    live: "https://takeadoro-landing.vercel.app/",
    github: "https://github.com/ondongo/takeadoro-landing",
  },

  {
    num: "16",
    title: "Orphelinat Newsletter",
    description: "Application de newsletter pour un orphelinat.",
    category: "Application",
    stack: [
      { name: "TypeScript" },
      { name: "Firebase" },
      { name: "Firestore" },
      { name: "Nodemailer" },
      { name: "ChakraUi" },
    ],
    image: "/assets/visite.png",
    live: "https://www.visiteauxorphelins.com/",
    github: "https://github.com/ondongo/orphelinat_newsletter",
  },

  {
    num: "17",
    title: "QRCode Generator",
    description: "(En production) Générateur de QR Code simple.",
    category: "Application",
    stack: [{ name: "Next.js" }, { name: "Chakra UI" }],
    image: "/assets/qr.png",
    live: "https://qrcode-generator-nine-mu.vercel.app/",
    github: "https://github.com/ondongo/qrcode_generator",
  },
  {
    num: "18",
    title: "LogeRapide",
    description: "(En développement) Plateforme de bibliothèque en ligne.",
    category: "Application",
    stack: [
      { name: "OpenStreetMap" },
      { name: "Next.js" },
      { name: "Firebase" },
      { name: "Stripe" },
      { name: "Algolia" },
    ],
    image: "/assets/logerapide.png",
  },

  {
    num: "19",
    title: "E-Library",
    description: "(En développement) Plateforme de bibliothèque en ligne.",
    category: "Application",
    stack: [
      { name: "Next.js" },
      { name: "Firebase" },
      { name: "Paypal" },
      { name: "Algolia" },
    ],
    image: "/assets/elibary.png",
  },

  {
    num: "20",
    title: "GameShopy",
    description:
      "Création d'une application web e-commerce et blog dédié au gaming.",
    category: "Ecommerce - Blog",
    stack: [
      { name: "Wordpress" },
      { name: "Woocormerce" },
      { name: "Stripe" },
      { name: "Seo" },
    ],
    image: "/assets/gameshopy.png",
  },
];

function Work() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col items-center justify-center py-12 xl:py-8 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl  leading-none font-extrabold text-outline text-transparent ">
                {" "}
                {project.num}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-green-300 transition-all duration-500 capitalize">
                {project.title}
              </h2>

              <h4 className="text-[24px] font-bold leading-none text-white/80 ">
                {project.category}
              </h4>

              <p className="text-white/60">{project.description}</p>

              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-lg text-green-300">
                      {item.name}
                      {index != project.stack.length - 1 && " , "}{" "}
                    </li>
                  );
                })}
              </ul>

              <div className="border border-white/20 "></div>
              <div className="flex gap-4">
                {project.live && (
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-green-300" />
                        </TooltipTrigger>

                        <TooltipContent>
                          <p>Voir le projet</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {project.github && (
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-green-300" />
                        </TooltipTrigger>

                        <TooltipContent>
                          <p>GitHub</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    {" "}
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 rounded-md">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                      <div className="relative w-full h-full">
                        <Image
                          src={item.image}
                          alt=""
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-green-300 hover:bg-green-300 text-[#020617] text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Work;
