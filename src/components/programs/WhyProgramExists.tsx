import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import type { ProgramData } from "@/config/programs";

export function WhyProgramExists({ data }: { data: ProgramData }) {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container-x">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-brand font-semibold mb-4">
              The Motivation
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-tight">
              Why this program <br className="hidden md:block" />
              <span className="italic text-ink-soft">exists right now.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-24 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-brand/20 via-brand/10 to-transparent -translate-x-1/2" />

            {/* The Problem */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="text-6xl text-brand/20 font-display absolute -top-8 -left-4 pointer-events-none">
                <Quote className="w-16 h-16 fill-brand/10 stroke-brand/10" />
              </div>
              <h3 className="text-2xl font-display text-ink mb-6 relative z-10">
                The Gap
              </h3>
              <p className="text-lg text-ink-soft leading-relaxed relative z-10">
                {data.whyExists.problem}
              </p>
            </motion.div>

            {/* The Solution */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative mt-8 md:mt-24"
            >
              <div className="w-12 h-[1px] bg-brand/40 mb-8 md:hidden" />
              <h3 className="text-2xl font-display text-brand mb-6">
                Our Solution
              </h3>
              <p className="text-lg text-ink leading-relaxed font-medium bg-brand/5 p-6 rounded-2xl border border-brand/10 shadow-sm">
                {data.whyExists.solution}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
