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
          <div className="sticky top-[24vh] h-[143vh] md:h-[148vh] w-full">
            <MethodHeader />
          </div>
        </div>

        <div className="relative w-full pt-[35vh]">
          {steps.map((step, i) => (
            <MethodCard
              key={`step_${i}`}
              i={i}
              icon={step.icon}
              t={step.t}
              d={step.d}
              totalCards={steps.length}
              progress={scrollYProgress}
            />
          ))}
        </div>

        <div className="relative w-full min-h-[80vh] flex flex-col items-center justify-center py-24 z-10 bg-ink mt-24">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">
              {/* Optional: Add a dotted line connecting them on desktop */}
              <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[1px] border-t border-dashed border-brand/30 -z-10" />
              
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={i} className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-[#111] border border-white/5 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,100,0,0.15)] bg-ink">
                      <Icon className="w-8 h-8 text-brand" strokeWidth={1.5} />
                    </div>
                    <div className="w-6 h-[2px] bg-brand rounded-full mb-4" />
                    <h4 className="font-display text-2xl mb-2 text-cream">{step.t}</h4>
                    <p className="text-cream/50 text-sm leading-relaxed max-w-[200px]">
                      {step.d}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
