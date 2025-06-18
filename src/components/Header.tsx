"use client";
import Link from "next/link";
import React, { useState } from "react";
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";

function Header() {

  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <Link href={"/"}>
          <h1 className="text-2xl sm:text-2xl md:text-3xl font-semibold">
            Prince of Code{" "}
            <span className="text-green-300"> &lt; 👨🏾‍💻 &gt; </span>
          </h1>
        </Link>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />

    

          {/* Bouton recrutement */}
          <Link
            href={
              "mailto:gloireondongo1205@gmail.com?subject=Alternance%20Full%20Stack%20chez%20[Nom%20de%20l'entreprise]&body=Bonjour%20Prince%2C%0A%0ANous%20souhaiterions%20échanger%20avec%20toi%20concernant%20une%20opportunité%20d'alternance%20au%20sein%20de%20notre%20équipe%20tech.%0A%0ASerais-tu%20disponible%20pour%20un%20échange%20dans%20les%20jours%20à%20venir%20%3F%0A%0ABien%20à%20toi%2C%0A[Signature]"
            }
          >
            <Button className="remplissage cursor-pointer">Recrutez moi</Button>
          </Link>
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>

        {/* Audio player (hidden) */}
        <audio id="lofi-audio" src="/lofi-295209.mp3" loop />
      </div>
    </header>
  );
}

export default Header;
