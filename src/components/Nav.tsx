"use client";
import React from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

const links = [
  { key: "home",     path: "/" },
  { key: "about",    path: "/about" },
  { key: "skills",   path: "/skills" },
  { key: "projects", path: "/work" },
  { key: "blog",     path: "/blog" },
  { key: "contact",  path: "/contact" },
] as const;

function Nav() {
  const pathname = usePathname();
  const t = useTranslations("nav");

  return (
    <nav className="flex gap-8">
      {links.map((link) => (
        <Link
          href={link.path}
          key={link.path}
          className={`${
            pathname === link.path
              ? "text-green-300 border-b-2 border-green-300"
              : ""
          } font-medium hover:text-green-300 transition-all`}
        >
          {t(link.key)}
        </Link>
      ))}
    </nav>
  );
}

export default Nav;
