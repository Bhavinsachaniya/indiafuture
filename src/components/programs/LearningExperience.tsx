import React from "react";
import { motion } from "framer-motion";
import type { ProgramData } from "@/config/programs";

export function LearningExperience({ data }: { data: ProgramData }) {
  if (!data.experiences || data.experiences.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-[#fdfaf5] relative overflow-hidden">
      <div className="container-x">
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] text-brand font-semibold mb-4 flex justify-center">
            Learning Experience
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05]">
            How the studio actually runs.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-ink/5 rounded-[2rem] p-8 hover:border-brand/20 hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-brand/20 transition-transform duration-300">
                <exp.icon className="w-5 h-5 text-brand" />
              </div>
              <h3 className="font-display text-2xl text-ink mb-3">{exp.title}</h3>
              <p className="text-ink-soft leading-relaxed text-sm">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
