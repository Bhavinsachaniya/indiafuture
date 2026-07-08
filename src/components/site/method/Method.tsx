import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import { MethodHeader } from "./MethodHeader";
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
      <main ref={container} className="relative w-full">
        {/* Absolute wrapper matches main's height, allowing synchronized sticky un-sticking */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="sticky top-[12vh] h-[143vh] md:h-[148vh] w-full">
            <MethodHeader />
          </div>
        </div>

        <div className="relative w-full pt-[35vh]">
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
