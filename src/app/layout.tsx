import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairEffect from "@/components/animation/stairs/StairEffect";


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
  openGraph: {
    title: "Prince de Gloire ONDONGO - Portfolio",
    description:
      "Discover my work as a full stack developer. Find out more about my projects and expertise in web development.",
    images: ["/assets/apercu.png"], 
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
      <body className={`${jetBrainsMono.variable}  `}>
        <Header />
        <StairEffect />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
