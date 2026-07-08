import React from "react";
import { motion } from "framer-motion";
import { Clock, BarChart } from "lucide-react";
import type { ProgramData } from "@/config/programs";

export function WhatYouWillLearn({ data }: { data: ProgramData }) {
  return (
    <section className="py-24 md:py-32 bg-[#fdfaf5] relative overflow-hidden">
      <div className="container-x">
        {/* Section Header */}
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-brand font-semibold mb-4 flex justify-center">
            Curriculum Highlights
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05]">
            The capability map.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.learnings.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-ink/5 rounded-[2rem] p-8 hover:shadow-xl hover:border-ink/10 transition-all duration-300 flex flex-col group"
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-full bg-surface border border-ink/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-4 h-4 text-ink" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl text-ink mb-3 group-hover:text-brand transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-ink-soft text-sm leading-relaxed mb-8 flex-grow">
                {item.description}
              </p>

              {/* Metadata Pills */}
              <div className="flex flex-wrap gap-2 mt-auto">
                <div className="px-3 py-1 rounded-full border border-ink/10 text-[10px] text-ink-soft tracking-wide">
                  {item.difficulty}
                </div>
                <div className="px-3 py-1 rounded-full border border-ink/10 text-[10px] text-ink-soft tracking-wide">
                  {item.duration}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
