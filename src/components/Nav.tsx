"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
function Nav() {
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Skills",
      path: "/skills",
    },
    {
      name: "projects",
      path: "/work",
    },


    {
      name: "contact",
      path: "/contact",
    },
  ];

  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname &&
              "text-green-300 border-b-2 border-green-300"
            } capitalize font-medium hover:text-green-300 transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}

export default Nav;
