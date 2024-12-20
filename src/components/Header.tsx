import Link from "next/link";
import React from "react";

import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

function Header() {

 
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
          Gloire<span className="text-green-300"> &lt; 👨🏾‍💻 &gt; </span> Code 
          </h1>
        </Link>

        {/* Desktop nav  */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href={"https://calendly.com/gloireondongo1205/prise-de-contact"}>
            <Button className="remplissage" >Engagez moi</Button>
          </Link>
        </div>

        {/* Mobile nav  */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
