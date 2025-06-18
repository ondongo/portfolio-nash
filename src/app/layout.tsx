import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairEffect from "@/components/animation/stairs/StairEffect";
import { Analytics } from "@vercel/analytics/react";
import TailwindBackgroundEffects from "@/components/TailwindBackgroundEffects";
import CursorLightMask from "@/components/TailwindBackgroundEffects";
import MusicToggle from "@/components/MusicToggle";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsmono",
});

const effects = {
  mask: { cursor: true, x: 300, y: 300, radius: 200 },
  gradient: {
    display: true,
    x: 300,
    y: 300,
    width: 400,
    height: 400,
    tilt: 45,
    colorStart: "#00f",
    colorEnd: "#0ff",
    opacity: 40,
  },
  dots: {
    display: true,
    color: "#ffffff22",
    size: 2,
    opacity: 0.2,
  },
  grid: {
    display: true,
    color: "#ffffff10",
    width: 40,
    height: 40,
    opacity: 0.1,
  },
  lines: {
    display: true,
    opacity: 0.05,
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://princedegloire.fr"),
  title: "Prince de Gloire ONDONGO - Full Stack Developer",
  description:
    "Welcome to my portfolio! Explore my projects, skills, and experiences as a full stack developer specializing in web and mobile applications.",
  keywords: [
    "Prince de Gloire ONDONGO",
    "Full Stack Developer",
    "Web Development",
    "Portfolio",
    "React",
    "Next.js",
  ],
  openGraph: {
    title: "Prince de Gloire ONDONGO - Portfolio",
    description:
      "Discover my work as a full stack developer. Find out more about my projects and expertise in web development.",
    images: ["https://princedegloire.fr/assets/apercu1.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="ca-pub-6591466028014726"
        />
      </head>
      <body className={`${jetBrainsMono.variable}  `}>
        <CursorLightMask
        
        />

        <Header />
        <StairEffect />
        <PageTransition>{children}</PageTransition>
        <MusicToggle />
        <Analytics />
        <script
          defer
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6591466028014726"
          crossOrigin="anonymous"
        ></script>
      </body>
    </html>
  );
}
