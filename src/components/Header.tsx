"use client";
import React from "react";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname, Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

type Locale = (typeof routing.locales)[number];

// ── Switcher drapeaux ─────────────────────────────────────────────────────────
function LangSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const flags: { code: Locale; flag: string; label: string }[] = [
    { code: "fr", flag: "🇫🇷", label: "Français" },
    { code: "en", flag: "🇬🇧", label: "English" },
  ];

  const switchLocale = (next: Locale) => {
    router.replace(pathname, { locale: next });
  };

  return (
    <div className="flex items-center gap-1 border border-white/20 rounded-full px-2 py-1">
      {flags.map(({ code, flag, label }, i) => (
        <React.Fragment key={code}>
          <button
            onClick={() => switchLocale(code)}
            aria-label={`Switch to ${label}`}
            className={`text-base leading-none transition-all duration-200 ${
              locale === code
                ? "opacity-100 scale-110"
                : "opacity-40 hover:opacity-70"
            }`}
          >
            {flag}
          </button>
          {i < flags.length - 1 && (
            <span className="text-white/20 text-xs select-none">/</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

// ── Header ────────────────────────────────────────────────────────────────────
function Header() {
  const t = useTranslations("header");

  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
            Prince of Code
            <span className="text-green-300 font-light"> &lt;/&gt;</span>
          </h1>
        </Link>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-6">
          <Nav />
          <LangSwitcher />
          <a
            href="mailto:gloireondongo1205@gmail.com?subject=CDI%20Full%20Stack%20Developer%20-%20Prince%20de%20Gloire&body=Bonjour%20Prince%2C%0A%0ANous%20souhaiterions%20%C3%A9changer%20avec%20vous%20concernant%20une%20opportunit%C3%A9%20en%20CDI%20au%20sein%20de%20notre%20%C3%A9quipe%20tech.%0A%0ACordialement%2C"
          >
            <Button className="remplissage cursor-pointer">
              {t("hire")}
            </Button>
          </a>
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>

      </div>
    </header>
  );
}

export default Header;
