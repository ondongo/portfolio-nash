"use client";

import React from "react";
import CountUp from "react-countup";

const stats = [
  {
    num: 2,
    text: "Ans d'experiences",
  },

  {
    num: 4,
    text: "Ans d'études",
  },
  {
    num: 50,
    text: "Projets completés",
  },
  {
    num: 54,
    text: "Technologies ",
  },
];
function Stats() {
  return (
    <section className="pt-4 pb-12 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none ">
          {stats.map((item: any, index: any) => {
            const shouldDisplayPlus = item.num > 10;
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <p className="text-4xl xl:text-6xl font-extrabold flex items-center">
                  {shouldDisplayPlus && (
                    <span className="transition-opacity duration-500"> +&nbsp;</span>
                  )}
                  <CountUp
                    end={item.num}
                    duration={5}
                    delay={2}
                    className="inline"
                  />
                </p>
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  }`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Stats;
