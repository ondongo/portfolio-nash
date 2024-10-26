import { AnimatedPinDemo } from "@/components/AnimatePinDemo";

import React from "react";

function page() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 ">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between">
          <div className="flex-1 flex">Section tab </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            <AnimatedPinDemo />
            <AnimatedPinDemo />
            <AnimatedPinDemo />
            <AnimatedPinDemo />
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
