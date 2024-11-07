import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairEffect from "@/components/animation/stairs/StairEffect";
import { Analytics } from "@vercel/analytics/react";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsmono",
});

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
    images: ["https://princedegloire.fr/assets/apercu.png"],
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
        <Header />
        <StairEffect />
        <PageTransition>{children}</PageTransition>
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
