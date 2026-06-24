"use client";
import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { useTranslations } from "next-intl";

const IMG_CLS =
  "rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]";

export function TimelineDemo() {
  const t = useTranslations("about");

  const data = [
    {
      title: "2025 — 2026",
      content: (
        <div>
          <h2 className="text-xl font-bold mb-4">{t("niji_title")}</h2>
          <p className="text-neutral-400 text-sm font-normal mb-6">
            {t("niji_desc")}
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              "Entertainment",
              "B2B E-commerce",
              "Frontend",
              "API Integration",
              "Agile",
              "Product",
            ].map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium px-3 py-1 rounded-full border border-green-300/40 text-green-300 bg-green-300/10"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/Niji1.png"
              alt="Niji - B2B e-commerce project"
              width={500}
              height={500}
              className={IMG_CLS}
            />
            <Image
              src="/niji2.webp"
              alt="Niji - entertainment mission"
              width={500}
              height={500}
              className={IMG_CLS}
            />
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <h2 className="text-xl font-bold mb-4">{t("clarins_title")}</h2>
          <p className="text-neutral-400 text-sm font-normal mb-8">
            {t("clarins_desc")}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/clarins2.webp"
              alt="Clarins project"
              width={500}
              height={500}
              className={IMG_CLS}
            />
            <Image
              src="/freelanceClarins1.avif"
              alt="Clarins project"
              width={500}
              height={500}
              className={IMG_CLS}
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024 — 2026",
      content: (
        <div>
          <h2 className="text-xl font-bold mb-4">{t("mds_title")}</h2>
          <p className="text-neutral-400 text-sm font-normal mb-8">
            {t("mds_desc")}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/mydigitalschool1.png"
              alt="MyDigitalSchool"
              width={500}
              height={500}
              className={IMG_CLS}
            />
            <Image
              src="/assets/mydigitalschool2.jpg"
              alt="MyDigitalSchool"
              width={500}
              height={500}
              className={IMG_CLS}
            />
            <Image
              src="/assets/mydigitalschool3.jpg"
              alt="MyDigitalSchool"
              width={500}
              height={500}
              className={IMG_CLS}
            />
            <Image
              src="/assets/mydigitalschool4.png"
              alt="MyDigitalSchool"
              width={500}
              height={500}
              className={IMG_CLS}
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023 — 2024",
      content: (
        <div>
          <h2 className="text-xl font-bold mb-4">{t("dysoft_title")}</h2>
          <p className="text-neutral-400 text-sm font-normal mb-8">
            {t("dysoft_desc")}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/dysoft1.png"
              alt="Dysoft Consulting"
              width={500}
              height={500}
              className={IMG_CLS}
            />
            <Image
              src="/assets/dysoft2.png"
              alt="Dysoft Consulting"
              width={500}
              height={500}
              className={IMG_CLS}
            />
            <Image
              src="/assets/dysoft3.png"
              alt="Dysoft Consulting"
              width={500}
              height={500}
              className={IMG_CLS}
            />
            <Image
              src="/assets/dysoft5.png"
              alt="Dysoft Consulting"
              width={500}
              height={500}
              className={IMG_CLS}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Mid 2022",
      content: (
        <div>
          <h2 className="text-xl font-bold mb-4">{t("monark_title")}</h2>
          <p className="text-neutral-400 text-sm font-normal mb-8">
            {t("monark_desc")}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/monark1.jpg"
              alt="Monark Group"
              width={500}
              height={500}
              className={IMG_CLS}
            />
            <Image
              src="/assets/monark2.gif"
              alt="Monark Group"
              width={500}
              height={500}
              className={IMG_CLS}
            />
            <Image
              src="/assets/monark3.png"
              alt="Monark Group"
              width={500}
              height={500}
              className={IMG_CLS}
            />
            <Image
              src="/assets/monark4.jpg"
              alt="Monark Group"
              width={500}
              height={500}
              className={IMG_CLS}
            />
          </div>
        </div>
      ),
    },
    {
      title: "2020 — 2023",
      content: (
        <div>
          <h2 className="text-xl font-bold mb-4">{t("ism_title")}</h2>
          <p className="text-neutral-400 text-sm font-normal mb-8">
            {t("ism_desc")}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/ism1.jpg"
              alt="ISM Digital Campus"
              width={500}
              height={500}
              className={IMG_CLS}
            />
            <Image
              src="/assets/ism2.jpg"
              alt="ISM Digital Campus"
              width={500}
              height={500}
              className={IMG_CLS}
            />
            <Image
              src="/assets/ism3.jpg"
              alt="ISM Digital Campus"
              width={500}
              height={500}
              className={IMG_CLS}
            />
            <Image
              src="/assets/ism4.jpeg"
              alt="ISM Digital Campus"
              width={500}
              height={500}
              className={IMG_CLS}
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
