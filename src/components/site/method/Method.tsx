import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import { MethodHeader } from "./MethodHeader";
import { MethodProcess } from "./MethodProcess";
import { MethodFooter } from "./MethodFooter";
import { MethodCard } from "./MethodCard";
import { steps } from "./constants";

export function Method() {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section id="method" className="bg-ink text-cream relative pt-24">
      {/* Top Header Section */}
      <div className="relative w-full z-10 pt-[10vh]">
        <MethodHeader />
      </div>

      {/* New Process Flow */}
      <MethodProcess />
      <MethodFooter />

      {/* Existing Stacked Cards Animation Section */}
      <main ref={container} className="relative w-full">
        {/* We keep a subtle sticky text or just let the cards scroll */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="sticky top-[15vh] h-[100vh] w-full flex justify-center items-start">
             <h3 className="font-display text-4xl md:text-5xl text-cream/40 hidden md:block">
               The Process in Detail
             </h3>
          </div>
        </div>

        <div className="relative w-full pt-[10vh]">
          {steps.map((step, i) => (
            <MethodCard
              key={`step_${i}`}
              i={i}
              n={step.n}
              t={step.t}
              d={step.d}
              totalCards={steps.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </main>
    </section>
  );
}
