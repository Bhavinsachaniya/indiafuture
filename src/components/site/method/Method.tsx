import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import { MethodHeader } from "./MethodHeader";
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

      <main ref={container} className="relative w-full">
        {/* We need enough scroll height for: 4 cards stacking + 1 final spread phase */}
        
        <div className="relative w-full pt-[10vh]">
          {steps.map((step, i) => (
            <MethodCard
              key={`step_${i}`}
              i={i}
              n={step.n}
              t={step.t}
              d={step.d}
              icon={step.icon}
              totalCards={steps.length}
              progress={scrollYProgress}
            />
          ))}
          {/* Extra scroll space for the final spread animation */}
          <div className="h-[80vh] w-full" />
        </div>
      </main>

      <MethodFooter />
    </section>
  );
}
