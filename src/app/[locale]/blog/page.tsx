"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { blogArticles } from "@/data/blog";
import { useTranslations } from "next-intl";

const PAGE_SIZE = 6;

const tagColors: Record<string, string> = {
  IA: "border-purple-400/50 text-purple-300 bg-purple-400/10",
  MCP: "border-blue-400/50 text-blue-300 bg-blue-400/10",
  Automation: "border-cyan-400/50 text-cyan-300 bg-cyan-400/10",
  RAG: "border-indigo-400/50 text-indigo-300 bg-indigo-400/10",
  "Vector Database": "border-violet-400/50 text-violet-300 bg-violet-400/10",
  "E-commerce": "border-green-400/50 text-green-300 bg-green-400/10",
  "Front-end": "border-teal-400/50 text-teal-300 bg-teal-400/10",
  Performance: "border-yellow-400/50 text-yellow-300 bg-yellow-400/10",
  Paiement: "border-emerald-400/50 text-emerald-300 bg-emerald-400/10",
  Stripe: "border-blue-400/50 text-blue-300 bg-blue-400/10",
  B2B: "border-orange-400/50 text-orange-300 bg-orange-400/10",
  Produit: "border-rose-400/50 text-rose-300 bg-rose-400/10",
  "Full Stack": "border-green-400/50 text-green-300 bg-green-400/10",
  Kafka: "border-red-400/50 text-red-300 bg-red-400/10",
  Redis: "border-rose-400/50 text-rose-300 bg-rose-400/10",
  Algolia: "border-blue-400/50 text-blue-300 bg-blue-400/10",
  Java: "border-orange-400/50 text-orange-300 bg-orange-400/10",
  "Spring Boot": "border-green-400/50 text-green-300 bg-green-400/10",
  Marketplace: "border-purple-400/50 text-purple-300 bg-purple-400/10",
};

function getTagColor(tag: string): string {
  return tagColors[tag] ?? "border-green-300/40 text-green-300 bg-green-300/10";
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const t = useTranslations("blog");
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? blogArticles : blogArticles.slice(0, PAGE_SIZE);
  const hasMore = blogArticles.length > PAGE_SIZE;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] py-12 xl:py-16"
    >
      <div className="container mx-auto">
        {/* En-tête */}
        <div className="max-w-3xl mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t("title")}{" "}
            <span className="text-green-300">{t("subtitle")}</span>
          </h1>
          <p className="text-neutral-400 text-sm md:text-base">
            {t("description")}
          </p>
        </div>

        {/* Grille */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {displayed.map((article, index) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.05 * index, duration: 0.35, ease: "easeOut" },
                }}
                exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
                layout
              >
                <Link href={`/blog/${article.slug}`} className="group block h-full">
                  <article className="h-full flex flex-col border border-white/10 rounded-2xl p-6 bg-white/[0.02] hover:border-green-300/40 hover:bg-white/[0.04] transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <time className="text-xs text-neutral-500">
                        {formatDate(article.date)}
                      </time>
                      {article.readingTime && (
                        <>
                          <span className="text-neutral-600 text-xs">·</span>
                          <span className="text-xs text-neutral-500">
                            {article.readingTime}
                          </span>
                        </>
                      )}
                    </div>

                    <h2 className="text-white font-semibold text-lg leading-snug mb-3 group-hover:text-green-300 transition-colors duration-300">
                      {article.title}
                    </h2>

                    <p className="text-neutral-400 text-sm leading-relaxed mb-5 flex-1">
                      {article.summary}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs font-medium px-2.5 py-1 rounded-full border ${getTagColor(tag)}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-sm text-green-300 font-medium group-hover:gap-3 transition-all duration-300">
                      {t("read")}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </article>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination Show more / less */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.6 } }}
            className="flex justify-center mt-10"
          >
            <button
              onClick={() => setShowAll((v) => !v)}
              className="inline-flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full border border-white/20 text-white/70 hover:border-green-300/50 hover:text-green-300 transition-all duration-300"
            >
              {showAll ? (
                <>
                  {t("showLess")}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </>
              ) : (
                <>
                  {t("showMore")}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
