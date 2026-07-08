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
              className="bg-white border border-ink/5 rounded-[2rem] p-8 hover:shadow-xl hover:border-ink/10 transition-all duration-300 flex flex-col group"
            >
              <div className="w-12 h-12 rounded-full bg-ink flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="w-5 h-5 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-2xl text-ink mb-3 group-hover:text-brand transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-ink-soft text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
