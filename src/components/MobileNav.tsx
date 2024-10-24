"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "home",
    path: "/",
  },

  {
    name: "services",
    path: "/services",
  },

  {
    name: "résumé",
    path: "/about",
  },
  {
    name: "projets",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

function MobileNav() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-green-300 " />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}{" "}
        <div className="mt-32 mb-20 text-center text-2xl">
          <Link href={""}>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Developer<span className="text-green-300"> &lt; 👨🏾‍💻 &gt; </span>  
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col items-center justify-center gap-8 ">
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
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
