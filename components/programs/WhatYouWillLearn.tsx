"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, BarChart } from "lucide-react";
import type { ProgramData } from "@/config/programs";
import { HighlightText } from "../ui/HighlightText";

export function WhatYouWillLearn({ data }: { data: ProgramData }) {
  return (
    <section className="py-24 md:py-32 bg-[#fdfaf5] relative overflow-hidden">
      <div className="container-x">
        {/* Section Header */}
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <p className="text-xs uppercase tracking-[0.14em] text-brand font-semibold flex items-center justify-center gap-4">
              <span className="w-12 h-[1px] bg-brand/40" /> CURRICULUM HIGHLIGHTS{" "}
              <span className="w-12 h-[1px] bg-brand/40" />
            </p>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05]">
            The <HighlightText> capability </HighlightText> map.
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
              className="bg-white rounded-[2rem] p-8 md:p-10 transition-all duration-300 flex flex-col group border border-ink/5 hover:border-transparent hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-full border border-ink/10 group-hover:border-brand/30 flex items-center justify-center mb-8 bg-transparent group-hover:bg-brand/10 transition-colors duration-300">
                <item.icon
                  className="w-5 h-5 text-ink group-hover:text-brand transition-colors duration-300"
                  strokeWidth={1}
                />
              </div>

              {/* Content */}
              <h3 className="font-display text-[1.4rem] text-ink mb-3 group-hover:text-brand transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-ink-soft/80 text-[0.95rem] leading-relaxed mb-10 flex-grow font-light">
                {item.description}
              </p>

              {/* Metadata Pills */}
              <div className="flex flex-wrap gap-2 mt-auto">
                <div className="px-4 py-1.5 rounded-full border border-ink/10 text-[0.65rem] tracking-wider text-ink-soft/70 font-medium">
                  {item.difficulty}
                </div>
                <div className="px-4 py-1.5 rounded-full border border-ink/10 text-[0.65rem] tracking-wider text-ink-soft/70 font-medium">
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
