import React from "react";
import { motion } from "framer-motion";
import { Clock, BarChart } from "lucide-react";
import type { ProgramData } from "@/config/programs";

export function WhatYouWillLearn({ data }: { data: ProgramData }) {
  return (
    <section className="py-24 md:py-32 bg-surface relative overflow-hidden border-t border-ink/5">
      <div className="container-x">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-brand font-semibold mb-4">
            Curriculum Highlights
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05]">
            What you'll learn
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {data.learnings.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative bg-white border border-ink/5 rounded-[2rem] p-8 lg:p-10 overflow-hidden hover:border-brand/30 hover:shadow-[0_20px_60px_-15px_rgba(255,107,0,0.1)] shadow-sm transition-all duration-500 flex flex-col justify-between ${
                idx === 0 || idx === 3 ? "md:col-span-1" : "md:col-span-1" // Can adjust spans if we want asymmetric bento
              }`}
            >
              {/* Subtle Grid Background */}
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle, #000 1.5px, transparent 1.5px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand group-hover:text-white transition-all duration-500 shrink-0">
                  <item.icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="font-display text-3xl text-ink mb-4 group-hover:text-brand transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-ink-soft text-lg leading-relaxed mb-10 flex-grow">
                  {item.description}
                </p>

                {/* Metadata Pills */}
                <div className="flex flex-wrap gap-3 mt-auto pt-6 border-t border-ink/5">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface text-ink/70 text-sm font-medium border border-ink/5">
                    <Clock className="w-4 h-4 text-brand" />
                    {item.duration}
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface text-ink/70 text-sm font-medium border border-ink/5">
                    <BarChart className="w-4 h-4 text-brand" />
                    {item.difficulty}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
