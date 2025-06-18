"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "./ui/button";

const links = [
  {
    name: "accueil",
    path: "/",
  },

  {
    name: "Abiut",
    path: "/about",
  },
  {
    name: "skills",
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

function MobileNav() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-green-300 " />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}{" "}
        <div className="mt-24 mb-12 md:mb-20 text-center text-2xl">
          <Link href={""}>
            <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold">
              Prince of Code <span className="text-green-300"> &lt; 👨🏾‍💻 &gt; </span>
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

          <Link
            href={"https://calendly.com/gloireondongo1205/prise-de-contact"}
          >
            <Button className="remplissage">Engagez moi</Button>
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
