"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import React from "react";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "./ui/button";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

type Locale = (typeof routing.locales)[number];

const links = [
  { key: "home",     path: "/" },
  { key: "about",    path: "/about" },
  { key: "skills",   path: "/skills" },
  { key: "projects", path: "/work" },
  { key: "blog",     path: "/blog" },
  { key: "contact",  path: "/contact" },
] as const;

const flags: { code: Locale; flag: string }[] = [
  { code: "fr", flag: "🇫🇷" },
  { code: "en", flag: "🇬🇧" },
];

function MobileNav() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale() as Locale;
  const tNav = useTranslations("nav");
  const tHeader = useTranslations("header");

  const switchLocale = (next: Locale) => {
    router.replace(pathname, { locale: next });
  };

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-green-300" />
      </SheetTrigger>
      <SheetContent className="flex flex-col px-6">
        {/* Logo */}
        <div className="mt-10 mb-8">
          <Link href="/">
            <h1 className="text-lg font-semibold tracking-tight">
              Prince of Code
              <span className="text-green-300 font-light"> &lt;/&gt;</span>
            </h1>
          </Link>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-1 flex-1">
          {links.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link
                href={link.path}
                key={link.path}
                className={`flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? "text-green-300 bg-green-300/10"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <span className="w-1 h-4 rounded-full bg-green-300 shrink-0" />
                )}
                {!isActive && <span className="w-1 shrink-0" />}
                {tNav(link.key)}
              </Link>
            );
          })}
        </nav>

        {/* Bottom row: lang + CTA */}
        <div className="flex items-center justify-between pt-6 pb-4 border-t border-white/10">
          <div className="flex items-center gap-2 border border-white/20 rounded-full px-3 py-1.5">
            {flags.map(({ code, flag }, i) => (
              <React.Fragment key={code}>
                <button
                  onClick={() => switchLocale(code)}
                  className={`text-base transition-all duration-200 ${
                    locale === code
                      ? "opacity-100 scale-110"
                      : "opacity-40 hover:opacity-70"
                  }`}
                >
                  {flag}
                </button>
                {i < flags.length - 1 && (
                  <span className="text-white/20 text-xs">/</span>
                )}
              </React.Fragment>
            ))}
          </div>

          <a
            href="mailto:gloireondongo1205@gmail.com?subject=CDI%20Full%20Stack%20Developer%20-%20Prince%20de%20Gloire&body=Bonjour%20Prince%2C%0A%0ANous%20souhaiterions%20%C3%A9changer%20avec%20vous%20concernant%20une%20opportunit%C3%A9%20en%20CDI%20au%20sein%20de%20notre%20%C3%A9quipe%20tech.%0A%0ACordialement%2C"
          >
            <Button className="remplissage cursor-pointer text-xs px-4 py-2 h-auto">
              {tHeader("hire")}
            </Button>
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
