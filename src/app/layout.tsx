import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsmono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://princedegloire.fr"),
  title: "Prince de Gloire ONDONGO - Full Stack Developer",
  description:
    "Portfolio of Prince de Gloire ONDONGO — Next.js & React Developer, Java Spring Boot, E-commerce.",
  keywords: [
    "Prince de Gloire ONDONGO",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Java Spring Boot",
    "E-commerce",
    "Portfolio",
  ],
  openGraph: {
    title: "Prince de Gloire ONDONGO - Portfolio",
    description:
      "Next.js & React Developer — e-commerce, Java Spring Boot, modern web applications.",
    images: ["https://princedegloire.fr/assets/apercu1.png"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="ca-pub-6591466028014726"
        />
      </head>
      <body className={jetBrainsMono.variable}>
        {children}
        <script
          defer
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6591466028014726"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
