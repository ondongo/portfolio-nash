"use client";

import React from "react";
import CountUp from "react-countup";
import { useTranslations } from "next-intl";

export default function Stats() {
  const t = useTranslations("stats");

  const stats = [
    { num: 3,  key: "experience" },
    { num: 5,  key: "studies" },
    { num: 50, key: "projects" },
    { num: 60, key: "technologies" },
  ] as const;

  return (
    <section className="pt-4 pb-12 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item) => {
            const showPlus = item.num > 10;
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={item.key}
              >
                <p className="text-4xl xl:text-6xl font-extrabold flex items-center">
                  {showPlus && (
                    <span className="transition-opacity duration-500">+&nbsp;</span>
                  )}
                  <CountUp end={item.num} duration={5} delay={2} className="inline" />
                </p>
                <p className={item.key.length < 10 ? "max-w-[100px]" : "max-w-[150px]"}>
                  {t(item.key)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
