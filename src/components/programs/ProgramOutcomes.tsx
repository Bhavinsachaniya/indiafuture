import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, ArrowDown } from "lucide-react";
import type { ProgramData } from "@/config/programs";

export function ProgramOutcomes({ data }: { data: ProgramData }) {
  if (!data.outcomes || data.outcomes.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container-x">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <p className="text-xs uppercase tracking-[0.2em] text-brand font-semibold flex items-center justify-center gap-4">
              <span className="w-12 h-[1px] bg-brand/40" /> THE TRANSFORMATION <span className="w-12 h-[1px] bg-brand/40" />
            </p>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05]">
            Your Growth <br />
            <span className="italic text-ink-soft">Trajectory</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-6 relative z-10">
            {data.outcomes.map((outcome, idx) => {
              const isLast = idx === data.outcomes.length - 1;
              return (
                <div key={idx} className="flex flex-col items-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className={`w-full p-8 md:p-10 rounded-[2rem] border text-center relative ${
                      isLast
                        ? "bg-brand text-white border-brand shadow-xl shadow-brand/20"
                        : "bg-surface border-ink/5"
                    }`}
                  >
                    <p className={`text-xs uppercase tracking-widest font-semibold mb-3 ${isLast ? "text-white/70" : "text-brand"}`}>
                      {outcome.phase}
                    </p>
                    <p className={`text-xl md:text-2xl font-medium leading-relaxed ${isLast ? "text-white" : "text-ink"}`}>
                      {outcome.description}
                    </p>
                    
                    {isLast && (
                      <div className="absolute -top-4 -right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg border border-brand/10">
                        <TrendingUp className="w-6 h-6 text-brand" />
                      </div>
                    )}
                  </motion.div>
                  
                  {/* Down Arrow separator */}
                  {!isLast && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                      className="py-4"
                    >
                      <div className="w-10 h-10 rounded-full border border-ink/10 flex items-center justify-center bg-white shadow-sm text-ink-soft">
                        <ArrowDown className="w-4 h-4" />
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
