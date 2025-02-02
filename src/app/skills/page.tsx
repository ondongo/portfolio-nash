"use client";

import { AnimatedPinDemo } from "@/components/AnimatePinDemo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

import React from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaAngular,
  FaNodeJs,
  FaJava,
  FaPhp,
  FaWordpress,
  FaPython,
  FaDatabase,
  FaFacebookF,
  FaMailchimp,
  FaRegCommentDots,
  FaWhatsapp,
  FaMailBulk,
  FaServer,
  FaPlus,
  FaRandom,
  FaScroll,
  FaRocket,
  FaWindows,
  FaDesktop,
  FaEnvelopeOpen,
  FaFileExcel,
  FaFilePowerpoint,
  FaFileWord,
  FaMoneyBillWaveAlt,
  FaMousePointer,
} from "react-icons/fa";
import {
  SiChakraui,
  SiTailwindcss,
  SiNextdotjs,
  SiJavascript,
  SiSpringboot,
  SiFlutter,
  SiFirebase,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiVercel,
  SiJira,
  SiConfluence,
  SiSlack,
  SiVisualstudiocode,
  SiAirtable,
  SiGit,
  SiRedbubble,
  SiSwift,
  SiStripe,
  SiTwilio,
  SiGooglemaps,
  SiApifox,
  SiAlgolia,
  SiGooglecloud,
  SiFramer,
  SiScrollreveal,
  SiCsharp,
  Si99Designs,
  SiCanva,
  SiFigma,
  SiDocker,
  SiGithub,
  SiPostman,
  SiJsonwebtokens,
  SiGraphql,
  SiExpress,
  SiDjango,
  SiFlask,
  SiHibernate,
  SiSequelize,
  SiPrisma,
  SiPython,
} from "react-icons/si";

const skills = {
  frontend: [
    {
      title: "HTML & CSS",
      desc: "Structuration et stylisation des pages web.",
      icon: <FaHtml5 />,
      levelColor:
        "bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700", // Moyen
    },
    {
      title: "ChakraUI",
      desc: "Bibliothèque de composants React pour un design rapide et accessible.",
      icon: <SiChakraui />,
      levelColor: "bg-gradient-to-br from-green-300 via-green-500 to-green-700", // Expert
    },
    {
      title: "Tailwind",
      desc: "CSS utility-first pour des conceptions rapides et réactives.",
      icon: <SiTailwindcss />,
      levelColor:
        "bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700", // Moyen
    },
    {
      title: "React",
      desc: "Framework JavaScript pour la création d'interfaces utilisateur.",
      icon: <FaReact />,
      levelColor: "bg-gradient-to-br from-green-300 via-green-500 to-green-700", // Expert
    },
    {
      title: "Next.js",
      desc: "Framework React pour des applications web rapides et scalables.",
      icon: <SiNextdotjs />,
      levelColor: "bg-gradient-to-br from-green-300 via-green-500 to-green-700", // Expert
    },
    {
      title: "Angular",
      desc: "Framework web pour des applications dynamiques.",
      icon: <FaAngular />,
      levelColor:
        "bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700", // Moyen
    },
    {
      title: "Animation CSS",
      desc: "Animations pour améliorer l'expérience utilisateur.",
      icon: <FaCss3Alt />,
      levelColor:
        "bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700", // Moyen
    },
    {
      title: "FramerMotion",
      desc: "Animations avancées pour React.",
      icon: <SiFramer />,
      levelColor: "bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700", // Expert
    },
    {
      title: "AOS",
      desc: "Bibliothèque pour ajouter des animations lors du défilement.",
      icon: <SiScrollreveal />,
      levelColor:
        "bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700", // Moyen
    },
    {
      title: "GSAP",
      desc: "Bibliothèque d'animations pour des effets avancés (niveau de maîtrise : débutant).",
      icon: <FaRocket />,
      levelColor: "bg-gradient-to-br from-red-300 via-red-500 to-red-700", // Novice
    },
  ],
  backend: [
    {
      title: "Next.js",
      desc: "Côté serveur pour les applications React avec rendu dynamique.",
      icon: <SiNextdotjs />,
      levelColor: "bg-gradient-to-br from-green-300 via-green-500 to-green-700", // Expert
    },
    {
      title: "Node.js",
      desc: "Exécution côté serveur de JavaScript pour le développement backend.",
      icon: <FaNodeJs />,
      levelColor:
        "bg-gradient-to-br from-green-300 via-green-500 to-green-700", // Moyen
    },
    {
      title: "Express",
      desc: "Framework web minimaliste pour Node.js.",
      icon: <SiExpress />,
      levelColor:
        "bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700", // Moyen
    },
    {
      title: "Firebase",
      desc: "Plateforme de développement mobile et web offrant des services de backend.",
      icon: <SiFirebase />,
      levelColor: "bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700", // Avancé
    },
    {
      title: "Cloud Functions",
      desc: "Fonctions serverless pour exécuter du code en réponse à des événements.",
      icon: <SiGooglecloud />,
      levelColor: "bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700", // Avancé
    },
    {
      title: "Webhooks",
      desc: "Mécanisme permettant à une application d'envoyer des données en temps réel à d'autres applications.",
      icon: <FaRandom />,
      levelColor:
        "bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700", // Moyen
    },
    {
      title: "Python",
      desc: "Langage de programmation polyvalent pour le développement backend.",
      icon: <FaPython />,
      levelColor: "bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700", // Avancé
    },
    {
      title: "Flask",
      desc: "Framework micro pour des applications web en Python.",
      icon: <SiFlask />,
      levelColor: "bg-gradient-to-br from-green-300 via-green-500 to-green-700", // Avancé
    },
    {
      title: "Django",
      desc: "Framework web complet pour des applications Python robustes.",
      icon: <SiDjango />,
      levelColor: "bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700", // Avancé
    },
    {
      title: "Java",
      desc: "Langage robuste pour le développement backend.",
      icon: <FaJava />,
      levelColor:
        "bg-gradient-to-br from-green-300 via-green-500 to-green-700", // Moyen
    },
    {
      title: "Maven",
      desc: "Gestionnaire de dépendances pour Java.",
      icon: <SiSpringboot />,
      levelColor:
        "bg-gradient-to-br from-green-300 via-green-500 to-green-700", // Moyen
    },
    {
      title: "SpringBoot",
      desc: "Framework Java pour le développement d'applications rapides.",
      icon: <SiSpringboot />,
      levelColor:
        "bg-gradient-to-br from-green-300 via-green-500 to-green-700", // Moyen
    },
    {
      title: "PHP",
      desc: "Langage de script côté serveur pour les applications web.",
      icon: <FaPhp />,
      levelColor:
        "bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700", // Moyen
    },
    {
      title: "Symfony",
      desc: "Framework PHP pour le développement web.",
      icon: <FaPhp />,
      levelColor:
        "bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700", // Moyen
    },
  ],
  mobileNoCode: [
    {
      title: "WordPress",
      desc: "CMS populaire pour créer des sites web.",
      icon: <FaWordpress />,
      levelColor: "bg-gradient-to-br from-green-300 via-green-500 to-green-700", // Expert
    },
    {
      title: "FlutterFlow",
      desc: "Outil low-code pour créer des applications mobiles et PWA.",
      icon: <SiFlutter />,
      levelColor: "bg-gradient-to-br from-green-300 via-green-500 to-green-700", // Expert
    },
    {
      title: "Swift",
      desc: "Langage de programmation pour iOS.",
      icon: <SiSwift />,
      levelColor: "bg-gradient-to-br from-red-300 via-red-500 to-red-700", // Novice
    },
    {
      title: "SwiftUI",
      desc: "Framework pour construire des interfaces utilisateur iOS.",
      icon: <SiSwift />,
      levelColor: "bg-gradient-to-br from-red-300 via-red-500 to-red-700", // Novice
    },
    {
      title: "Bubble",
      desc: "Plateforme no-code pour créer des applications web.",
      icon: <SiRedbubble />,
      levelColor: "bg-gradient-to-br from-red-300 via-red-500 to-red-700", // Expert
    },
  ],
  database: [
    {
      title: "Firebase",
      desc: "Base de données en temps réel et plateforme mobile.",
      icon: <SiFirebase />,
      levelColor: "bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700", // Avancé
    },
    {
      title: "PostgreSQL",
      desc: "Base de données relationnelle open source.",
      icon: <SiPostgresql />,
      levelColor: "bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700", // Avancé
    },
    {
      title: "MySQL",
      desc: "Système de gestion de base de données relationnelle.",
      icon: <SiMysql />,
      levelColor: "bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700", // Avancé
    },
    {
      title: "SQLite",
      desc: "Base de données légère intégrée.",
      icon: <SiSqlite />,
      levelColor: "bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700", // Avancé
    },
    {
      title: "Airtable",
      desc: "Outil de gestion de base de données en ligne.",
      icon: <SiAirtable />,
      levelColor: "bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700", // Avancé
    },
  ],
  orm: [
    {
      title: "Sequelize",
      desc: "ORM pour Node.js supportant divers SGBD relationnels comme MySQL et PostgreSQL.",
      icon: <SiSequelize />,
      levelColor:
        "bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700", // Moyen
    },
    {
      title: "Prisma",
      desc: "ORM moderne et performant pour Node.js avec un typage fort.",
      icon: <SiPrisma />,
      levelColor:
        "bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700", // Moyen
    },
    {
      title: "Hibernate",
      desc: "ORM pour Java avec support avancé des bases de données relationnelles.",
      icon: <SiHibernate />,
      levelColor:
        "bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700", // Moyen
    },
    {
      title: "Django ORM",
      desc: "ORM intégré au framework Django pour travailler avec des bases de données relationnelles.",
      icon: <SiDjango />,
      levelColor:
        "bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700", // Moyen
    },
    {
      title: "SQLAlchemy",
      desc: "ORM pour Python utilisé avec Flask pour la gestion des bases de données relationnelles.",
      icon: <SiPython />,
      levelColor:
        "bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700", // Moyen
    },
    {
      title: "Doctrine ORM",
      desc: "ORM pour PHP intégré au framework Symfony, permettant la gestion des entités et des bases de données.",
      icon: <FaPhp />,
      levelColor:
        "bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700", // Moyen
    },
  ],

  tools: [
    {
      title: "Docker",
      desc: "Plateforme de conteneurisation pour déployer des applications.",
      icon: <SiDocker />,
      levelColor: "bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700", // Avancé
    },
    {
      title: "Git",
      desc: "Système de gestion de versions distribué.",
      icon: <SiGit />,
      levelColor: "bg-gradient-to-br from-green-300 via-green-500 to-green-700", // Avancé
    },
    {
      title: "GitHub",
      desc: "Plateforme d'hébergement et de collaboration pour le code.",
      icon: <SiGithub />,
      levelColor: "bg-gradient-to-br from-green-300 via-green-500 to-green-700", // Avancé
    },
    {
      title: "Postman",
      desc: "Outil de test d'API REST et GraphQL.",
      icon: <SiPostman />,
      levelColor: "bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700", // Avancé
    },
    {
      title: "REST API",
      desc: "Interface pour les échanges entre applications.",
      icon: <SiJsonwebtokens />,
      levelColor: "bg-gradient-to-br from-green-300 via-green-500 to-green-700", // Avancé
    },
    {
      title: "GraphQL",
      desc: "Langage de requêtes pour les API.",
      icon: <SiGraphql />,
      levelColor: "bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700", // Avancé
    },
    {
      title: "VSCode",
      desc: "Éditeur de code léger et extensible.",
      icon: <SiVisualstudiocode />,
      levelColor: "bg-gradient-to-br from-green-300 via-green-500 to-green-700", // Avancé
    },
    {
      title: "Cursor",
      desc: "Outil d'assistance au développement par IA.",
      icon: <FaMousePointer />,
      levelColor: "bg-gradient-to-br from-green-300 via-green-500 to-green-700", // Expert
    },
    {
      title: "Vercel",
      desc: "Plateforme de déploiement pour les projets front-end.",
      icon: <SiVercel />,
      levelColor: "bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700", // Avancé
    },
    {
      title: "Jira",
      desc: "Outil de gestion de projets agile.",
      icon: <SiJira />,
      levelColor: "bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700", // Avancé
    },
    {
      title: "Confluence",
      desc: "Outil de documentation et collaboration.",
      icon: <SiConfluence />,
      levelColor: "bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700", // Avancé
    },
    {
      title: "Slack",
      desc: "Plateforme de communication d'équipe.",
      icon: <SiSlack />,
      levelColor: "bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700", // Avancé
    },
  ],
  api: [
    {
      title: "API REST",
      desc: "Principes de conception d'API RESTful.",
      icon: <FaServer />,
      levelColor: "bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700", // Avancé
    },
    {
      title: "REST FULL API",
      desc: "Interface pour les échanges entre applications.",
      icon: <SiJsonwebtokens />,
      levelColor: "bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700", // Avancé
    },
    {
      title: "GraphQL",
      desc: "Langage de requêtes pour les API.",
      icon: <SiGraphql />,
      levelColor: "bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700", // Avancé
    },
    {
      title: "Autres Intégrations",
      desc: "Possibilité d'intégrer une variété d'autres API selon les besoins spécifiques du projet.",
      icon: <FaPlus />,
      levelColor:
        "bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700", // Moyen
    },
    {
      title: "Algolia",
      desc: "Service de recherche hébergé offrant une recherche rapide et pertinente.",
      icon: <SiAlgolia />,
      levelColor: "bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700", // Avancé
    },
    {
      title: "OpenStreetMap",
      desc: "API pour accéder aux données cartographiques.",
      icon: <SiGooglemaps />,
      levelColor: "bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700", // Avancé
    },
    {
      title: "Brevo",
      desc: "Outil d'email marketing et de communication.",
      icon: <FaMailBulk />,
      levelColor:
        "bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700", // Moyen
    },
    {
      title: "Stripe",
      desc: "Plateforme de paiement en ligne.",
      icon: <SiStripe />,
      levelColor: "bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700", // Avancé
    },
    {
      title: "Paydunya",
      desc: "Solution de paiement pour l'Afrique.",
      icon: <FaMoneyBillWaveAlt />,
      levelColor: "bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700", // Avancé
    },
    {
      title: "Twilio",
      desc: "API de communication pour SMS et voix.",
      icon: <SiTwilio />,
      levelColor: "bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700", // Avancé
    },
    {
      title: "Facebook",
      desc: "API pour intégrer les fonctionnalités de Facebook.",
      icon: <FaFacebookF />,
      levelColor:
        "bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700", // Moyen
    },
    {
      title: "WhatsApp",
      desc: "API pour intégrer WhatsApp dans les applications.",
      icon: <FaWhatsapp />,
      levelColor:
        "bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700", // Moyen
    },
  ],
  desktop: [
    {
      title: "C# .NET",
      desc: "Langage de programmation pour le développement d'applications desktop avec le framework .NET.",
      icon: <SiCsharp />,
      levelColor:
        "bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700", // Moyen
    },
    {
      title: "JavaFX",
      desc: "Framework Java pour créer des applications desktop modernes et riches.",
      icon: <FaJava />,
      levelColor:
        "bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700", // Moyen
    },
    {
      title: "Scene Builder",
      desc: "Outil pour créer des interfaces graphiques JavaFX par glisser-déposer.",
      icon: <FaDesktop />,
      levelColor:
        "bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700", // Moyen
    },
  ],
  other: [
    {
      title: "Figma",
      desc: "Outil utilisé pour consulter et intégrer des maquettes d'interface en tant que développeur.",
      icon: <SiFigma />,
      levelColor: "bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700", // Avancé
    },
    {
      title: "Canva",
      desc: "Outil de design graphique pour créer facilement des visuels.",
      icon: <SiCanva />,
      levelColor:
        "bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700", // Moyen
    },
    {
      title: "Microsoft Word",
      desc: "Traitement de texte pour la création de documents professionnels.",
      icon: <FaFileWord />,
      levelColor:
        "bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700", // Moyen
    },
    {
      title: "Microsoft Excel",
      desc: "Tableur puissant pour l'analyse de données et la gestion de feuilles de calcul.",
      icon: <FaFileExcel />,
      levelColor:
        "bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700", // Moyen
    },
    {
      title: "Microsoft PowerPoint",
      desc: "Outil de présentation pour créer des diaporamas professionnels.",
      icon: <FaFilePowerpoint />,
      levelColor:
        "bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700", // Moyen
    },
    {
      title: "Microsoft Outlook",
      desc: "Gestionnaire d'emails et d'agenda.",
      icon: <FaEnvelopeOpen />,
      levelColor:
        "bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700", // Moyen
    },
  ],
};

function page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-8 "
    >
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto py-10 ">
          <h2 className="text-lg md:text-4xl mb-4 text-white max-w-4xl">
            Aperçu de mes compétences techniques ✨
          </h2>
          <p className="text-neutral-400 text-sm md:text-base max-w-sm">
            Les couleurs représentent le niveau de maîtrise que j&apos;ai
            atteint dans chaque domaine technique
          </p>

          <div className="mt-10">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-orange-500 rounded-full"></span>
                <span className="text-white">Niveau Novice</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-yellow-500 rounded-full"></span>
                <span className="text-white">Niveau Intermédiaire</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
                <span className="text-white">Niveau Avancée</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-4 h-4  bg-green-500 rounded-full"></span>
                <span className="text-white">Niveau Expert</span>
              </div>
            </div>
          </div>
        </div>

        <Tabs
          defaultValue="frontend"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[320px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="mobileNoCode">Mobile/No-Code</TabsTrigger>
            <TabsTrigger value="database">Base de données</TabsTrigger>
            <TabsTrigger value="orm">ORM</TabsTrigger>
            <TabsTrigger value="tools">Outils</TabsTrigger>
            <TabsTrigger value="api">APIs</TabsTrigger>
            <TabsTrigger value="desktop">Desktop</TabsTrigger>
            <TabsTrigger value="other">Autres compétences</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            {Object.keys(skills).map((tab) => (
              <TabsContent key={tab} value={tab}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
                  {skills[tab].map((skill: any, index: any) => (
                    <AnimatedPinDemo
                      key={index}
                      title={skill.title}
                      desc={skill.desc}
                      icon={skill.icon}
                      levelColor={skill.levelColor}
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default page;
