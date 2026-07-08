import React from "react";
import { motion } from "framer-motion";
import { Code2, ExternalLink, Flame, Target } from "lucide-react";
import type { ProgramData } from "@/config/programs";

export function LiveProjects({ data }: { data: ProgramData }) {
  if (!data.projects || data.projects.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-ink text-white relative overflow-hidden selection:bg-brand/30 selection:text-white">
      {/* Dark theme background accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
      
      <div className="container-x relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="text-xs uppercase tracking-[0.2em] text-brand font-semibold mb-4">
            Real World Application
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Build <span className="italic text-cream/70">Live Projects</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {data.projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-surface/5 border border-white/10 rounded-3xl p-8 hover:bg-surface/10 hover:border-brand/30 transition-all duration-500 overflow-hidden flex flex-col"
            >
              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="relative z-10 flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand/20 text-brand flex items-center justify-center shrink-0">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-cream/80 flex items-center gap-1">
                      <Flame className="w-3 h-3 text-brand" /> {project.difficulty}
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-2xl md:text-3xl mb-4 group-hover:text-brand transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-cream/70 text-lg leading-relaxed mb-8">
                  {project.previewText}
                </p>

                <div className="space-y-6 mt-auto">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-cream/40 mb-3">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1.5 rounded-lg bg-black/40 text-cream/80 text-sm font-medium border border-white/5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-6">
                    <div className="flex-1">
                      <p className="text-xs uppercase tracking-widest text-cream/40 mb-2 flex items-center gap-1">
                        <Target className="w-3 h-3" /> Outcome
                      </p>
                      <p className="text-sm text-cream/90 font-medium">{project.outcome}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-cream/40 mb-2">Duration</p>
                      <p className="text-sm text-brand font-medium">{project.hours}</p>
                    </div>
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
