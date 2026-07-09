import React from "react";
import { User, Building2, TrendingUp, Zap } from "lucide-react";
import { motion } from "framer-motion";

export const Impact = React.memo(function Impact() {
  return (
    <section className="bg-ink text-cream relative py-24 border-t border-ink/10 font-sans" id="impact">
      {/* Subtle dotted background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at center, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container-x relative z-10">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Large Left (Header & Intro) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-1 lg:row-span-2 bg-[#161413] rounded-3xl border border-cream/10 p-8 md:p-12 relative overflow-hidden flex flex-col justify-between group hover:border-brand/30 transition-colors duration-500"
          >
            <div className="absolute -top-32 -left-32 w-80 h-80 bg-brand/10 rounded-full blur-[100px] group-hover:bg-brand/20 transition-colors duration-500 pointer-events-none" />
            
            <div className="relative z-10">
              <p className="text-xs uppercase tracking-[0.2em] text-brand font-semibold mb-6">The Impact</p>
              <h2 className="font-display text-5xl lg:text-6xl leading-[1.05] text-cream mb-8">
                Real <em className="italic text-brand-soft">Growth</em> <br className="hidden lg:block"/>
                At Every Level.
              </h2>
            </div>

            <div className="relative z-10 mt-auto pt-12">
              <div className="h-[1px] w-full bg-gradient-to-r from-cream/10 to-transparent mb-8" />
              <p className="text-cream/70 font-display text-xl leading-relaxed tracking-wide">
                AI isn't just about cutting costs. It's about exponential growth for both individuals and the organizations they power.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Top Right Wide (Organizational Growth) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-2 bg-[#161413] rounded-3xl border border-cream/10 p-8 md:p-12 relative overflow-hidden group hover:border-brand/30 transition-colors duration-500 flex flex-col"
          >
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-brand/10 rounded-full blur-[100px] group-hover:bg-brand/20 transition-colors duration-500 pointer-events-none" />
            
            <div className="relative z-10 flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-brand/20 text-brand flex items-center justify-center shrink-0 border border-brand/20">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-display text-3xl text-cream">Organizational Growth</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 relative z-10 mt-auto">
              <div className="border-l-2 border-brand/40 pl-6 group-hover:border-brand transition-colors duration-500">
                <h4 className="text-xl font-medium text-cream mb-3">Exponential Scaling</h4>
                <p className="text-cream/70 font-display text-lg leading-relaxed tracking-wide">
                  Scale operations infinitely without scaling headcount. Serve millions of customers with the overhead of a startup.
                </p>
              </div>
              <div className="border-l-2 border-brand/40 pl-6 group-hover:border-brand transition-colors duration-500">
                <h4 className="text-xl font-medium text-cream mb-3">Operational Agility</h4>
                <p className="text-cream/70 font-display text-lg leading-relaxed tracking-wide">
                  Adapt to market changes instantly with automated insights, predictive intelligence, and rapid workflow generation.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Bottom Middle (Personal Impact - Productivity) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-1 bg-[#161413] rounded-3xl border border-cream/10 p-8 relative overflow-hidden group hover:border-brand/30 transition-colors duration-500 min-h-[280px] flex flex-col justify-between"
          >
            <div className="relative z-10 flex items-center gap-3 mb-6">
              <span className="font-display text-5xl text-brand">100X</span>
              <div className="w-10 h-10 rounded-xl bg-cream/5 flex items-center justify-center shrink-0 border border-cream/10">
                <Zap className="w-5 h-5 text-brand" />
              </div>
            </div>
            
            <div className="relative z-10 mt-4">
              <h4 className="text-xl font-medium text-cream mb-3">Productivity Boost</h4>
              <p className="text-cream/70 font-display text-lg leading-relaxed tracking-wide">
                Employees automate repetitive tasks to focus purely on high-value creative problem solving and strategy.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Bottom Right (Personal Impact - Career) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-1 bg-[#161413] rounded-3xl border border-cream/10 p-8 relative overflow-hidden group hover:border-brand/30 transition-colors duration-500 min-h-[280px] flex flex-col justify-between"
          >
            <div className="relative z-10 flex items-center gap-3 mb-6">
              <span className="font-display text-5xl text-brand">100X</span>
              <div className="w-10 h-10 rounded-xl bg-cream/5 flex items-center justify-center shrink-0 border border-cream/10">
                <TrendingUp className="w-5 h-5 text-brand" />
              </div>
            </div>
            
            <div className="relative z-10 mt-4">
              <h4 className="text-xl font-medium text-cream mb-3">Career Increment</h4>
              <p className="text-cream/70 font-display text-lg leading-relaxed tracking-wide">
                AI-skilled professionals command massive premiums in the market as highly leverageable assets.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
});

