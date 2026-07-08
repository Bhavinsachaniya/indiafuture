import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type { ProgramData } from "@/config/programs";

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
          <p className="text-xs uppercase tracking-[0.2em] text-brand font-semibold mb-4">
            Curriculum
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05]">
            The Journey
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Animated Background Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-ink/5 md:-translate-x-1/2" />
          
          {/* Animated Foreground Line (Brand Color) */}
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 w-[2px] bg-brand md:-translate-x-1/2 origin-top"
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
                <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-white border-[3px] border-brand md:-translate-x-1/2 z-10" />

                {/* Content Box */}
                <div className="w-full md:w-[45%]">
                  <div className="bg-surface border border-ink/5 rounded-2xl p-6 md:p-8 hover:border-brand/20 transition-colors shadow-sm group">
                    <span className="inline-block px-3 py-1 rounded-md bg-brand/10 text-brand text-xs font-semibold uppercase tracking-wider mb-4">
                      {item.week}
                    </span>
                    <h3 className="font-display text-2xl text-ink mb-3 group-hover:text-brand transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-ink-soft leading-relaxed text-lg">
                      {item.description}
                    </p>
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
              className="relative flex justify-center mt-16"
            >
              <div className="absolute left-8 md:left-1/2 w-6 h-6 rounded-full bg-brand border-[4px] border-brand/20 md:-translate-x-1/2 z-10" />
              <div className="ml-24 md:ml-0 md:mt-12 bg-brand text-white px-8 py-4 rounded-full font-medium shadow-lg shadow-brand/20 text-center">
                Certification Complete
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
