"use client";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FiDownload } from "react-icons/fi";
import { useTranslations } from "next-intl";

export default function Home() {
  const router = useRouter();
  const t = useTranslations("hero");

  const handleDownload = () => {
    router.push("/CVPrinceDeGloire2026CDI.pdf");
  };

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-8">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl text-white/70">{t("role")}</span>
            <h1 className="h1">
              Hi 👋 je suis <br />{" "}
              <span className="text-green-300">Prince de Gloire</span>
            </h1>

            <p className="max-w-[500px] mb-4 text-white/80">
              {t("description")}
            </p>

            <p className="max-w-[500px] mb-4 text-green-300/80 text-sm font-medium">
              {t("availability")}
            </p>

            <p className="max-w-[500px] mb-9 text-white/40 text-xs tracking-widest uppercase">
              React • Next.js • Java • Spring Boot • E-commerce
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant={"outline"}
                size={"lg"}
                onClick={handleDownload}
                className="uppercase flex items-center gap-2 remplissage"
              >
                <span>{t("cv")}</span>
                <FiDownload className="text-xl" />
              </Button>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-green-300 rounded-full flex justify-center items-center text-green-300 text-base hover:bg-green-300 hover:text-[#020617] hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
    </section>
  );
}
