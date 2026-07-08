import React from "react";
import { motion } from "framer-motion";
import type { ProgramData } from "@/config/programs";

export function LearningExperience({ data }: { data: ProgramData }) {
  if (!data.experiences || data.experiences.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-surface relative overflow-hidden border-t border-ink/5">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Copy */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-brand font-semibold mb-4">
                The Experience
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05] mb-8">
                Learn by <br />
                <span className="italic text-brand-soft">doing.</span>
              </h2>
              <p className="text-ink-soft text-lg leading-relaxed mb-8 max-w-md">
                We believe in active learning. This isn't a passive video course where you sit back and watch. You will be building, debugging, and deploying from day one.
              </p>
            </motion.div>
          </div>

          {/* Right: Grid */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-6">
              {data.experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white border border-ink/5 rounded-3xl p-8 hover:border-brand/20 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand/10 transition-transform duration-300">
                    <exp.icon className="w-6 h-6 text-ink group-hover:text-brand transition-colors" />
                  </div>
                  <h3 className="font-display text-xl text-ink mb-3">{exp.title}</h3>
                  <p className="text-ink-soft leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
