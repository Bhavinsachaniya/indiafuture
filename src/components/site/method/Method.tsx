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
        <MethodHeader />

        <div className="mt-16">
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
