import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairEffect from "@/components/animation/stairs/StairEffect";
import { Analytics } from "@vercel/analytics/react";
import CursorLightMask from "@/components/TailwindBackgroundEffects";
import MusicToggle from "@/components/MusicToggle";
import { ChatWidget } from "@/components/ChatWidget";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <CursorLightMask />
      <Header />
      <StairEffect />
      <PageTransition>{children}</PageTransition>
      <MusicToggle />
      <ChatWidget />
      <Analytics />
    </NextIntlClientProvider>
  );
}
