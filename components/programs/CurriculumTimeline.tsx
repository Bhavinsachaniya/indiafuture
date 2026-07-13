"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { ProgramData } from "@/config/programs";
import { Target } from "lucide-react";

export function CurriculumTimeline({ data }: { data: ProgramData }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden" ref={containerRef}>
      <div className="container-x">
        <div className="max-w-3xl mx-auto mb-20 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <p className="text-xs uppercase tracking-[0.2em] text-brand font-semibold flex items-center justify-center gap-4">
              <span className="w-12 h-[1px] bg-brand/40" /> CURRICULUM{" "}
              <span className="w-12 h-[1px] bg-brand/40" />
            </p>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05]">
            The Journey
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Animated Background Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-ink/5 -translate-x-1/2" />

          {/* Animated Foreground Line (Brand Color) */}
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 w-[2px] bg-brand -translate-x-1/2 origin-top"
            style={{ height: lineHeight }}
          />

          <div className="space-y-16">
            {data.curriculum.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className={`relative flex items-center md:justify-between ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                } flex-row pl-24 md:pl-0`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-white border-[3px] border-brand -translate-x-1/2 z-10" />

                {/* Content Box */}
                <div className="w-full md:w-[45%]">
                  <div className="bg-surface border border-ink/5 rounded-2xl p-6 md:p-8 hover:border-brand/20 transition-colors shadow-sm group">
                    <span className="inline-block px-3 py-1 rounded-md bg-brand/10 text-brand text-xs font-semibold uppercase tracking-wider mb-4">
                      {item.week}
                    </span>
                    <h3 className="font-display text-2xl text-ink mb-3 group-hover:text-brand transition-colors">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-ink-soft leading-relaxed text-lg">{item.description}</p>
                    )}
                    {item.topics && (
                      <div className="mb-6 mt-4">
                        <p className="text-xs uppercase tracking-widest text-ink-soft mb-2 font-semibold">
                          Topics
                        </p>
                        <ul className="grid gap-2">
                          {item.topics.map((topic, i) => (
                            <li key={i} className="text-sm text-ink flex items-center gap-2">
                              <span className="w-1 h-1 rounded-full bg-brand/50" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {item.outcome && (
                      <div className="pt-4 border-t border-ink/5">
                        <p className="text-xs uppercase tracking-widest text-brand mb-1 font-semibold flex items-center gap-1.5">
                          <Target className="w-3.5 h-3.5" />
                          Outcome
                        </p>
                        <p className="text-sm font-medium text-ink">{item.outcome}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Empty Space for the other side (Desktop only) */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            ))}

            {/* Final Goal Node */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative flex items-center md:justify-center mt-16 pl-24 md:pl-0"
            >
              <div className="absolute left-8 md:left-1/2 w-6 h-6 rounded-full bg-brand border-[4px] border-brand/20 -translate-x-1/2 z-10" />
              <div className="w-full md:w-auto md:mt-12 bg-brand text-white px-8 py-4 rounded-xl md:rounded-full font-medium shadow-lg shadow-brand/20 text-center">
                Certification Complete
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
