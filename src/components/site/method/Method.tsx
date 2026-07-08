import React from "react";
import { steps } from "./constants";
import { motion } from "framer-motion";

export const Method = React.memo(function Method() {
  return (
    <section id="method" className="bg-surface text-ink relative py-24 border-t border-ink/10 font-sans">
      <div className="container-x">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-brand font-semibold">The Method</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.1]">
            A structured system for reliable AI outputs.
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Card 1 (Large Left) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-2 lg:row-span-2 bg-white rounded-3xl border border-ink/10 p-8 md:p-12 relative overflow-hidden flex flex-col justify-between group hover:border-brand/30 transition-colors duration-500"
          >
            <div className="absolute inset-0 opacity-[0.3]" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.15) 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />
            
            <div className="relative z-10 flex justify-between items-start mb-24">
              <span className="bg-brand/10 text-brand px-4 py-1.5 rounded-full text-sm font-medium">{steps[0].t}</span>
              <span className="text-ink/30 font-mono text-sm tracking-widest">{steps[0].n}</span>
            </div>
            
            <div className="relative z-10">
              <h3 className="font-display text-4xl md:text-5xl mb-6 text-ink group-hover:text-brand transition-colors duration-300">{steps[0].t}</h3>
              <p className="text-ink/60 text-lg md:text-xl max-w-lg leading-relaxed">{steps[0].d}</p>
            </div>
          </motion.div>

          {/* Card 2 (Top Right) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="bg-white rounded-3xl border border-ink/10 p-8 relative overflow-hidden flex flex-col justify-between min-h-[280px] group hover:border-brand/30 transition-colors duration-500"
          >
            <div className="absolute inset-0 opacity-[0.3]" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.15) 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />
            
            <div className="relative z-10 flex justify-between items-start mb-8">
              <span className="text-xs uppercase tracking-widest text-ink/40 font-bold">{steps[1].t}</span>
              <span className="text-ink/30 font-mono text-sm tracking-widest">{steps[1].n}</span>
            </div>
            
            <div className="relative z-10">
              <h3 className="font-display text-3xl mb-4 text-ink group-hover:text-brand transition-colors duration-300">{steps[1].t}</h3>
              <p className="text-ink/60 leading-relaxed">{steps[1].d}</p>
            </div>
          </motion.div>

          {/* Card 3 (Bottom Right) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="bg-white rounded-3xl border border-ink/10 p-8 relative overflow-hidden flex flex-col justify-between min-h-[280px] group hover:border-brand/30 transition-colors duration-500"
          >
            <div className="absolute inset-0 opacity-[0.3]" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.15) 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }} />
            
            <div className="relative z-10 flex justify-between items-start mb-8">
              <span className="text-xs uppercase tracking-widest text-ink/40 font-bold">{steps[2].t}</span>
              <span className="text-ink/30 font-mono text-sm tracking-widest">{steps[2].n}</span>
            </div>
            
            <div className="relative z-10">
              <h3 className="font-display text-3xl mb-4 text-ink group-hover:text-brand transition-colors duration-300">{steps[2].t}</h3>
              <p className="text-ink/60 leading-relaxed">{steps[2].d}</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
});
