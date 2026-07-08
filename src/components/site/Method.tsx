import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    n: "01",
    t: "Diagnose",
    d: "A working session with a senior engineer to map your stack, your bottleneck, and the shape of the AI feature worth building.",
  },
  {
    n: "02",
    t: "Build in public",
    d: "Every week you ship. Every ship gets reviewed — code, evals, latency, cost — by someone who has done it before.",
  },
  {
    n: "03",
    t: "Deploy",
    d: "Ship to a real environment. We stay with you through the first live traffic — the part every course skips.",
  },
];

const MethodCard = ({
  i,
  n,
  t,
  d,
  progress,
  range,
  targetScale,
}: {
  i: number;
  n: string;
  t: string;
  d: string;
  progress: any;
  range: [number, number];
  targetScale: number;
}) => {
  const container = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-0 flex h-screen w-full items-start justify-center pt-[50vh] md:pt-[45vh]"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 20}px)`,
        }}
        className="relative origin-top flex flex-col md:flex-row md:items-center gap-6 p-8 md:p-10 w-full max-w-4xl rounded-[32px] md:rounded-[40px] border border-cream/10 bg-[#161413] shadow-[0_30px_80px_rgba(0,0,0,0.8)] overflow-hidden"
      >
        <span className="font-display text-5xl md:text-6xl text-brand shrink-0 leading-none">
          {n}
        </span>
        <div>
          <h3 className="font-display text-2xl md:text-3xl mb-2">{t}</h3>
          <p className="text-cream/70 leading-relaxed text-sm md:text-base">
            {d}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export function Method() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section id="method" className="bg-ink text-cream">
      <main
        ref={container}
        className="relative flex w-full flex-col items-center justify-center pb-[50vh]"
      >
        <div className="sticky top-28 z-10 w-full text-center px-4 pointer-events-none mt-24 mb-[-20vh]">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs uppercase tracking-[0.2em] text-brand-soft/80">The method</p>
            <h2 className="mt-3 font-display text-5xl md:text-6xl leading-[1.05] text-balance max-w-4xl mx-auto">
              We don't <em className="italic">teach</em> AI. We help
              <span className="relative inline-block border border-brand bg-brand/10 text-white px-3 py-1 mx-2 align-middle overflow-visible">
                <span className="absolute -top-1 -left-1 w-2 h-2 bg-brand border border-brand"></span>
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-brand border border-brand"></span>
                <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-brand border border-brand"></span>
                <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-brand border border-brand"></span>
                you ship it
              </span>
              .
            </h2>
            <p className="mt-6 text-cream/70 text-lg leading-relaxed max-w-2xl mx-auto">
              Indiafuture is closer to a residency than a course. Every week is a real deliverable,
              reviewed by senior practitioners who work on production AI systems every day.
            </p>
          </div>
        </div>

        {steps.map((step, i) => {
          const targetScale = Math.max(
            0.5,
            1 - (steps.length - i - 1) * 0.05
          );
          return (
            <MethodCard
              key={`step_${i}`}
              i={i}
              {...step}
              progress={scrollYProgress}
              range={[i * 0.33, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </main>
    </section>
  );
}
