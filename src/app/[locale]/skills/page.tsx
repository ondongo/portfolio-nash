"use client";

import { AnimatedPinDemo } from "@/components/AnimatePinDemo";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import React from "react";
import { useTranslations } from "next-intl";

import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPhp,
  FaWordpress,
  FaPython,
  FaDatabase,
  FaServer,
  FaRandom,
  FaRocket,
  FaDesktop,
  FaEnvelopeOpen,
  FaFileExcel,
  FaFilePowerpoint,
  FaFileWord,
  FaMoneyBillWaveAlt,
  FaMousePointer,
  FaRobot,
  FaShoppingBag,
  FaNetworkWired,
  FaCreditCard,
  FaCloud,
  FaCodeBranch,
  FaShoppingCart,
  FaLayerGroup,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiSpringboot,
  SiFlutter,
  SiFirebase,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiVercel,
  SiJira,
  SiConfluence,
  SiVisualstudiocode,
  SiGit,
  SiStripe,
  SiAlgolia,
  SiGooglecloud,
  SiFramer,
  SiCsharp,
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
  SiShopify,
  SiMicrosoftazure,
  SiNotion,
  SiStorybook,
} from "react-icons/si";

// ─── Couleurs de niveau ──────────────────────────────────────────────────────
const L = {
  learning: "bg-gradient-to-br from-orange-300 via-orange-500 to-orange-700",
  novice: "bg-gradient-to-br from-red-300 via-red-500 to-red-700",
  intermediate: "bg-gradient-to-br from-yellow-300 via-yellow-500 to-yellow-700",
  advanced: "bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700",
  expert: "bg-gradient-to-br from-green-300 via-green-500 to-green-700",
};

// ─── CORE SKILLS ─────────────────────────────────────────────────────────────
const coreSkills = {
  frontend: [
    { title: "React", desc: "UI library for building interactive interfaces.", icon: <FaReact />, levelColor: L.expert },
    { title: "Next.js", desc: "React framework for fast, scalable web apps.", icon: <SiNextdotjs />, levelColor: L.expert },
    { title: "TypeScript", desc: "Typed JavaScript for reliable codebases.", icon: <SiTypescript />, levelColor: L.advanced },
    { title: "JavaScript", desc: "Core language of the modern web.", icon: <SiJavascript />, levelColor: L.advanced },
    { title: "Tailwind CSS", desc: "Utility-first CSS for fast UI development.", icon: <SiTailwindcss />, levelColor: L.advanced },
    { title: "Framer Motion", desc: "Advanced animations for React applications.", icon: <SiFramer />, levelColor: L.advanced },
  ],
  backend: [
    { title: "Java", desc: "Robust language for enterprise backend systems.", icon: <FaJava />, levelColor: L.intermediate },
    { title: "Spring Boot", desc: "Java framework for scalable backend services.", icon: <SiSpringboot />, levelColor: L.intermediate },
    { title: "Node.js", desc: "Server-side JavaScript runtime.", icon: <FaNodeJs />, levelColor: L.advanced },
    { title: "Express.js", desc: "Minimalist web framework for Node.js.", icon: <SiExpress />, levelColor: L.advanced },
    { title: "REST APIs", desc: "Design and consume RESTful web services.", icon: <SiJsonwebtokens />, levelColor: L.expert },
    { title: "GraphQL", desc: "Flexible query language for APIs.", icon: <SiGraphql />, levelColor: L.advanced },
  ],
  databases: [
    { title: "PostgreSQL", desc: "Open-source relational database.", icon: <SiPostgresql />, levelColor: L.advanced },
    { title: "MySQL", desc: "Widely used relational database system.", icon: <SiMysql />, levelColor: L.advanced },
    { title: "Firebase", desc: "Real-time database and BaaS by Google.", icon: <SiFirebase />, levelColor: L.advanced },
    { title: "Redis", desc: "In-memory data store for caching and queues.", icon: <SiRedis />, levelColor: L.intermediate },
  ],
  ecommerce: [
    { title: "Shopify", desc: "E-commerce platform for modern online stores.", icon: <SiShopify />, levelColor: L.intermediate },
    { title: "E-commerce Arch.", desc: "Designing scalable e-commerce systems.", icon: <FaShoppingCart />, levelColor: L.advanced },
    { title: "Payment Systems", desc: "Stripe, Paydunya, webhooks and order flows.", icon: <FaCreditCard />, levelColor: L.advanced },
    { title: "B2B Platforms", desc: "Roles, permissions, catalogs and B2B flows.", icon: <FaLayerGroup />, levelColor: L.advanced },
  ],
  cloudDevops: [
    { title: "Google Cloud", desc: "GCP services: Cloud Functions, Storage, etc.", icon: <SiGooglecloud />, levelColor: L.advanced },
    { title: "Docker", desc: "Containerization for consistent deployments.", icon: <SiDocker />, levelColor: L.advanced },
    { title: "CI/CD", desc: "Automated build and deployment pipelines.", icon: <FaCodeBranch />, levelColor: L.intermediate },
    { title: "Vercel", desc: "Deployment platform for frontend projects.", icon: <SiVercel />, levelColor: L.advanced },
    { title: "Git", desc: "Distributed version control system.", icon: <SiGit />, levelColor: L.expert },
    { title: "Postman", desc: "API testing and documentation tool.", icon: <SiPostman />, levelColor: L.advanced },
    { title: "Azure", desc: "Microsoft cloud platform — currently learning.", icon: <SiMicrosoftazure />, levelColor: L.learning },
  ],
};

// ─── AI & AUTOMATION SKILLS ──────────────────────────────────────────────────
const aiSkills = [
  { title: "MCP", desc: "Model Context Protocol — connecting LLMs to tools and APIs.", icon: <FaNetworkWired />, levelColor: L.intermediate },
  { title: "RAG", desc: "Retrieval-Augmented Generation for document-based AI.", icon: <FaDatabase />, levelColor: L.intermediate },
  { title: "Vector Databases", desc: "Semantic search with Pinecone, pgvector.", icon: <FaServer />, levelColor: L.intermediate },
  { title: "AI Rules Engine", desc: "Rule-based logic for AI-assisted workflows.", icon: <FaLayerGroup />, levelColor: L.intermediate },
  { title: "Prompt Engineering", desc: "Crafting effective prompts for LLMs.", icon: <FaRobot />, levelColor: L.intermediate },
  { title: "AI Workflow Automation", desc: "Building AI-powered automation pipelines.", icon: <FaCloud />, levelColor: L.intermediate },
];

// ─── OTHER SKILLS ─────────────────────────────────────────────────────────────
const otherSkills = [
  { title: "WordPress", icon: <FaWordpress />, level: "Expert" },
  { title: "FlutterFlow", icon: <SiFlutter />, level: "Expert" },
  { title: "Framer", icon: <SiFramer />, level: "Intermediate" },
  { title: "Storybook", icon: <SiStorybook />, level: "Intermediate" },
  { title: "Prisma", icon: <SiPrisma />, level: "Intermediate" },
  { title: "Sequelize", icon: <SiSequelize />, level: "Intermediate" },
  { title: "Hibernate", icon: <SiHibernate />, level: "Intermediate" },
  { title: "SQLAlchemy", icon: <SiPython />, level: "Intermediate" },
  { title: "Python Flask", icon: <SiFlask />, level: "Advanced" },
  { title: "Django", icon: <SiDjango />, level: "Intermediate" },
  { title: "PHP / Symfony", icon: <FaPhp />, level: "Intermediate" },
  { title: "Algolia", icon: <SiAlgolia />, level: "Advanced" },
  { title: "Stripe", icon: <SiStripe />, level: "Advanced" },
  { title: "PayDunya", icon: <FaMoneyBillWaveAlt />, level: "Advanced" },
  { title: "VTEX", icon: <FaShoppingBag />, level: "Learning" },
  { title: "C# .NET", icon: <SiCsharp />, level: "Intermediate" },
  { title: "Cursor AI", icon: <FaMousePointer />, level: "Expert" },
  { title: "Figma", icon: <SiFigma />, level: "Advanced" },
  { title: "Canva", icon: <SiCanva />, level: "Intermediate" },
  { title: "Jira", icon: <SiJira />, level: "Advanced" },
  { title: "Confluence", icon: <SiConfluence />, level: "Advanced" },
  { title: "Notion", icon: <SiNotion />, level: "Advanced" },
  { title: "Microsoft Word", icon: <FaFileWord />, level: "Intermediate" },
  { title: "Microsoft Excel", icon: <FaFileExcel />, level: "Intermediate" },
  { title: "PowerPoint", icon: <FaFilePowerpoint />, level: "Intermediate" },
];

const levelBadge: Record<string, string> = {
  Learning: "bg-orange-500/20 text-orange-300 border-orange-500/40",
  Novice: "bg-red-500/20 text-red-300 border-red-500/40",
  Intermediate: "bg-yellow-500/20 text-yellow-300 border-yellow-500/40",
  Advanced: "bg-blue-500/20 text-blue-300 border-blue-500/40",
  Expert: "bg-green-500/20 text-green-300 border-green-500/40",
};

const expertiseAreas = [
  "Modern Frontend Engineering",
  "Java Backend Development",
  "E-commerce Development",
  "API & System Integration",
  "Payment Systems",
  "B2B Platforms",
  "AI & Automation",
  "Cloud & DevOps",
];

const coreSections = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "databases", label: "Databases" },
  { key: "ecommerce", label: "E-commerce" },
  { key: "cloudDevops", label: "Cloud & DevOps" },
] as const;

function SkillsPage() {
  const t = useTranslations("skills");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] py-12 xl:py-8"
    >
      <div className="container mx-auto">

        {/* ── Expertise Areas ── */}
        <div className="max-w-7xl mx-auto mb-12 pt-4">
          <h2 className="text-lg md:text-3xl font-bold text-white mb-2">
            {t("expertiseTitle")}
          </h2>
          <p className="text-neutral-400 text-sm mb-6">
            {t("expertiseDesc")}
          </p>
          <div className="flex flex-wrap gap-3">
            {expertiseAreas.map((area) => (
              <span
                key={area}
                className="text-sm font-medium px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-white/80 hover:border-green-300/40 hover:text-white transition-all duration-200"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* ── Level legend ── */}
        <div className="max-w-7xl mx-auto mb-8">
          <div className="flex flex-wrap gap-x-6 gap-y-3 items-center">
            {[
              { color: "bg-orange-500", label: "Learning" },
              { color: "bg-yellow-500", label: "Intermediate" },
              { color: "bg-blue-500", label: "Advanced" },
              { color: "bg-green-500", label: "Expert" },
            ].map(({ color, label }) => (
              <div key={label} className="flex items-center space-x-2">
                <span className={`w-4 h-4 ${color} rounded-full`} />
                <span className="text-white text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Tabs ── */}
        <Tabs
          defaultValue="core"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[320px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="core">Core Skills</TabsTrigger>
            <TabsTrigger value="ai">AI &amp; Automation</TabsTrigger>
            <TabsTrigger value="other">Other Skills</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">

            {/* ─── Core Skills ─────────────────────────────────── */}
            <TabsContent value="core">
              <div className="space-y-12">
                {coreSections.map(({ key, label }) => (
                  <div key={key}>
                    <h3 className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-6 border-b border-white/10 pb-2">
                      {label}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
                      {coreSkills[key].map((skill, index) => (
                        <AnimatedPinDemo
                          key={index}
                          title={skill.title}
                          desc={skill.desc}
                          icon={skill.icon}
                          levelColor={skill.levelColor}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* ─── AI & Automation ─────────────────────────────── */}
            <TabsContent value="ai">
              <div className="mb-6">
                <p className="text-neutral-400 text-sm max-w-xl">
                  Building intelligent features and experimenting with
                  AI-powered workflows for modern web applications.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-[16px]">
                {aiSkills.map((skill, index) => (
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

            {/* ─── Other Skills ────────────────────────────────── */}
            <TabsContent value="other">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3">
                {otherSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-3 p-4 border border-white/10 rounded-xl bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-200"
                  >
                    <div className="text-3xl text-white/70">{skill.icon}</div>
                    <span className="text-white text-xs font-medium text-center leading-tight">
                      {skill.title}
                    </span>
                    <span
                      className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${
                        levelBadge[skill.level] ?? levelBadge["Intermediate"]
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default SkillsPage;
