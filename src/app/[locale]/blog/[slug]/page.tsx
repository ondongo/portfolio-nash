import { notFound } from "next/navigation";
import { blogArticles } from "@/data/blog";
import { CodeBlock } from "@/components/CodeBlock";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";

interface PageProps {
  params: { locale: string; slug: string };
}

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

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    blogArticles.map((article) => ({ locale, slug: article.slug }))
  );
}

export default function BlogArticlePage({ params }: PageProps) {
  const article = blogArticles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const readingTime =
    article.readingTime ??
    `${Math.ceil(article.sections.length * 1.5)} min read`;

  return (
    <div className="min-h-[80vh] py-12 xl:py-16">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          {/* Retour */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-green-300 transition-colors mb-10"
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
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            Back to blog
          </Link>

          {/* En-tête */}
          <header className="mb-10">
            <div className="flex items-center gap-4 mb-3">
              <time className="text-xs text-neutral-500">
                {formatDate(article.date)}
              </time>
              <span className="text-neutral-600">·</span>
              <span className="text-xs text-neutral-500">{readingTime}</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-5">
              {article.title}
            </h1>
            <p className="text-neutral-400 text-base leading-relaxed mb-6">
              {article.summary}
            </p>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className={`text-xs font-medium px-3 py-1 rounded-full border ${getTagColor(tag)}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <hr className="border-white/10 mb-10" />

          {/* Sections */}
          <div className="space-y-10">
            {article.sections.map((section, index) => (
              <section key={index}>
                <h2 className="text-xl font-semibold text-white mb-3">
                  {section.heading}
                </h2>
                <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                  {section.content}
                </p>
                {section.code && (
                  <CodeBlock
                    language={section.code.language}
                    value={section.code.value}
                  />
                )}
              </section>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-green-300 hover:gap-4 transition-all duration-300 font-medium"
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
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              See all articles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
