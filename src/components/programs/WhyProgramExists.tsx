import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import type { ProgramData } from "@/config/programs";

export function WhyProgramExists({ data }: { data: ProgramData }) {
  return (
    <section className="py-24 md:py-32 bg-[#fdfaf5] relative overflow-hidden">
      <div className="container-x">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-brand font-semibold mb-4 flex justify-center">
              Why this program exists
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-tight mb-6">
              {data.whyExists.title}
            </h2>
            <p className="text-lg text-ink-soft leading-relaxed max-w-2xl mx-auto">
              {data.whyExists.description}
            </p>
          </motion.div>
        </div>

        {/* Grid of Reasons */}
        <div className="grid md:grid-cols-3 gap-6">
          {data.whyExists.reasons?.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-[2rem] p-8 md:p-10 transition-all duration-300 flex flex-col group border border-ink/5 hover:border-transparent hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
            >
              <div className="w-12 h-12 rounded-full border border-ink/10 bg-transparent group-hover:bg-brand/10 group-hover:border-brand/30 flex items-center justify-center mb-8 transition-colors duration-300">
                <reason.icon className="w-5 h-5 text-ink group-hover:text-brand transition-colors duration-300" strokeWidth={1} />
              </div>
              <h3 className="font-display text-[1.4rem] text-ink mb-3 transition-colors duration-300 group-hover:text-brand">
                {reason.title}
              </h3>
              <p className="text-ink-soft/80 text-[0.95rem] leading-relaxed font-light">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
