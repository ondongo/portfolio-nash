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
  FaMousePointer
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
    },
    {
      title: "ChakraUI",
      desc: "Bibliothèque de composants React pour un design rapide et accessible.",
      icon: <SiChakraui />,
    },
    {
      title: "Tailwind",
      desc: "CSS utility-first pour des conceptions rapides et réactives.",
      icon: <SiTailwindcss />,
    },
    {
      title: "React",
      desc: "Framework JavaScript pour la création d'interfaces utilisateur.",
      icon: <FaReact />,
    },
    {
      title: "Next.js",
      desc: "Framework React pour des applications web rapides et scalables.",
      icon: <SiNextdotjs />,
    },
    {
      title: "Angular",
      desc: "Framework web pour des applications dynamiques.",
      icon: <FaAngular />,
    },
    {
      title: "Animation CSS",
      desc: "Animations pour améliorer l'expérience utilisateur.",
      icon: <FaCss3Alt />,
    },
    {
      title: "FramerMotion",
      desc: "Animations avancées pour React.",
      icon: <SiFramer />,
    },
    {
      title: "AOS",
      desc: "Bibliothèque pour ajouter des animations lors du défilement.",
      icon: <SiScrollreveal />,
    },
    {
      title: "GSAP",
      desc: "Bibliothèque d'animations pour des effets avancés (niveau de maîtrise : débutant).",
      icon: <FaRocket />,
    },
  ],
  backend: [
    {
      title: "Next.js",
      desc: "Côté serveur pour les applications React avec rendu dynamique.",
      icon: <SiNextdotjs />,
    },
    {
      title: "Node.js",
      desc: "Exécution côté serveur de JavaScript pour le développement backend.",
      icon: <FaNodeJs />,
    },
    {
      title: "Express",
      desc: "Framework web minimaliste pour Node.js.",
      icon: <SiExpress />,
    },
    {
      title: "Firebase",
      desc: "Plateforme de développement mobile et web offrant des services de backend.",
      icon: <SiFirebase />,
    },
    {
      title: "Cloud Functions",
      desc: "Fonctions serverless pour exécuter du code en réponse à des événements.",
      icon: <SiGooglecloud />,
    },
    {
      title: "Webhooks",
      desc: "Mécanisme permettant à une application d'envoyer des données en temps réel à d'autres applications.",
      icon: <FaRandom />,
    },
    {
      title: "Python",
      desc: "Langage de programmation polyvalent pour le développement backend.",
      icon: <FaPython />,
    },
    {
      title: "Flask",
      desc: "Framework micro pour des applications web en Python.",
      icon: <SiFlask />,
    },
    {
      title: "Django",
      desc: "Framework web complet pour des applications Python robustes.",
      icon: <SiDjango />,
    },
    {
      title: "Java",
      desc: "Langage robuste pour le développement backend.",
      icon: <FaJava />,
    },
    {
      title: "Maven",
      desc: "Gestionnaire de dépendances pour Java.",
      icon: <SiSpringboot />,
    },
    {
      title: "SpringBoot",
      desc: "Framework Java pour le développement d'applications rapides.",
      icon: <SiSpringboot />,
    },
    {
      title: "PHP",
      desc: "Langage de script côté serveur pour les applications web.",
      icon: <FaPhp />,
    },
    {
      title: "Symfony",
      desc: "Framework PHP pour le développement web.",
      icon: <FaPhp />,
    },
  ],
  mobileNoCode: [
    {
      title: "WordPress",
      desc: "CMS populaire pour créer des sites web.",
      icon: <FaWordpress />,
    },
    {
      title: "FlutterFlow",
      desc: "Outil low-code pour créer des applications mobiles et PWA.",
      icon: <SiFlutter />,
    },
    {
      title: "Swift",
      desc: "Langage de programmation pour iOS.",
      icon: <SiSwift />,
    },
    {
      title: "SwiftUI",
      desc: "Framework pour construire des interfaces utilisateur iOS.",
      icon: <SiSwift />,
    },
    {
      title: "Bubble",
      desc: "Plateforme no-code pour créer des applications web.",
      icon: <SiRedbubble />,
    },
  ],
  database: [
    {
      title: "Firebase",
      desc: "Base de données en temps réel et plateforme mobile.",
      icon: <SiFirebase />,
    },
    {
      title: "PostgreSQL",
      desc: "Base de données relationnelle open source.",
      icon: <SiPostgresql />,
    },
    {
      title: "MySQL",
      desc: "Système de gestion de base de données relationnelle.",
      icon: <SiMysql />,
    },
    {
      title: "SQLite",
      desc: "Base de données légère intégrée.",
      icon: <SiSqlite />,
    },
    {
      title: "Airtable",
      desc: "Outil de gestion de base de données en ligne.",
      icon: <SiAirtable />,
    },
  ],
  orm: [
    {
      title: "Sequelize",
      desc: "ORM pour Node.js supportant divers SGBD relationnels comme MySQL et PostgreSQL.",
      icon: <SiSequelize />,
    },
    {
      title: "Prisma",
      desc: "ORM moderne et performant pour Node.js avec un typage fort.",
      icon: <SiPrisma />,
    },
    {
      title: "Hibernate",
      desc: "ORM pour Java avec support avancé des bases de données relationnelles.",
      icon: <SiHibernate />,
    },
    {
      title: "Django ORM",
      desc: "ORM intégré au framework Django pour travailler avec des bases de données relationnelles.",
      icon: <SiDjango />,
    },
    {
      title: "SQLAlchemy",
      desc: "ORM pour Python utilisé avec Flask pour la gestion des bases de données relationnelles.",
      icon: <SiPython />,
    },
    {
      title: "Doctrine ORM",
      desc: "ORM pour PHP intégré au framework Symfony, permettant la gestion des entités et des bases de données.",
      icon: <FaPhp />,
    },
  ],
  
  tools: [
    {
      title: "Docker",
      desc: "Plateforme de conteneurisation pour déployer des applications.",
      icon: <SiDocker />,
    },
    {
      title: "Git",
      desc: "Système de gestion de versions distribué.",
      icon: <SiGit />,
    },
    {
      title: "GitHub",
      desc: "Plateforme d'hébergement et de collaboration pour le code.",
      icon: <SiGithub />,
    },
    {
      title: "Postman",
      desc: "Outil de test d'API REST et GraphQL.",
      icon: <SiPostman />,
    },
    {
      title: "REST API",
      desc: "Interface pour les échanges entre applications.",
      icon: <SiJsonwebtokens />,
    },
    {
      title: "GraphQL",
      desc: "Langage de requêtes pour les API.",
      icon: <SiGraphql />,
    },
    {
      title: "VSCode",
      desc: "Éditeur de code léger et extensible.",
      icon: <SiVisualstudiocode />,
    },
    {
      title: "Cursor",
      desc: "Outil d'assistance au développement par IA.",
      icon: <FaMousePointer />,
    },
    
    {
      title: "Vercel",
      desc: "Plateforme de déploiement pour les projets front-end.",
      icon: <SiVercel />,
    },
    
    {
      title: "Jira",
      desc: "Outil de gestion de projets agile.",
      icon: <SiJira />,
    },
    {
      title: "Confluence",
      desc: "Outil de documentation et collaboration.",
      icon: <SiConfluence />,
    },
    {
      title: "Slack",
      desc: "Plateforme de communication d'équipe.",
      icon: <SiSlack />,
    },
  ],
  api: [
    {
      title: "API REST",
      desc: "Principes de conception d'API RESTful.",
      icon: <FaServer />,
    },
    {
      title: "REST FULL API",
      desc: "Interface pour les échanges entre applications.",
      icon: <SiJsonwebtokens />,
    },
    {
      title: "GraphQL",
      desc: "Langage de requêtes pour les API.",
      icon: <SiGraphql />,
    },
    {
      title: "Autres Intégrations",
      desc: "Possibilité d'intégrer une variété d'autres API selon les besoins spécifiques du projet.",
      icon: <FaPlus />,
    },
    {
      title: "Algolia",
      desc: "Service de recherche hébergé offrant une recherche rapide et pertinente.",
      icon: <SiAlgolia />,
    },
    {
      title: "OpenStreetMap",
      desc: "API pour accéder aux données cartographiques.",
      icon: <SiGooglemaps />,
    },
    {
      title: "Brevo",
      desc: "Outil d'email marketing et de communication.",
      icon: <FaMailBulk />,
    },
    {
      title: "Stripe",
      desc: "Plateforme de paiement en ligne.",
      icon: <SiStripe />,
    },
    {
      title: "Paydunya",
      desc: "Solution de paiement pour l'Afrique.",
      icon: <FaMoneyBillWaveAlt />,
    },
    {
      title: "Twilio",
      desc: "API de communication pour SMS et voix.",
      icon: <SiTwilio />,
    },
    {
      title: "Facebook",
      desc: "API pour intégrer les fonctionnalités de Facebook.",
      icon: <FaFacebookF />,
    },
    {
      title: "WhatsApp",
      desc: "API pour intégrer WhatsApp dans les applications.",
      icon: <FaWhatsapp />,
    },
  ],
  desktop: [
    {
      title: "C# .NET",
      desc: "Langage de programmation pour le développement d'applications desktop avec le framework .NET.",
      icon: <SiCsharp />,
    },
    {
      title: "JavaFX",
      desc: "Framework Java pour créer des applications desktop modernes et riches.",
      icon: <FaJava />,
    },
    {
      title: "Scene Builder",
      desc: "Outil pour créer des interfaces graphiques JavaFX par glisser-déposer.",
      icon: <FaDesktop />,
    },
  ],
  other: [
    {
      title: "Figma",
      desc: "Outil utilisé pour consulter et intégrer des maquettes d'interface en tant que développeur.",
      icon: <SiFigma />,
    },
    {
      title: "Canva",
      desc: "Outil de design graphique pour créer facilement des visuels.",
      icon: <SiCanva />,
    },
    {
      title: "Microsoft Word",
      desc: "Traitement de texte pour la création de documents professionnels.",
      icon: <FaFileWord />,
    },
    {
      title: "Microsoft Excel",
      desc: "Tableur puissant pour l'analyse de données et la gestion de feuilles de calcul.",
      icon: <FaFileExcel />,
    },
    {
      title: "Microsoft PowerPoint",
      desc: "Outil de présentation pour créer des diaporamas professionnels.",
      icon: <FaFilePowerpoint />,
    },
    {
      title: "Microsoft Outlook",
      desc: "Gestionnaire d'emails et d'agenda.",
      icon: <FaEnvelopeOpen />,
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
