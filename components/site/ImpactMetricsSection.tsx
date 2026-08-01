"use client";

import React from "react";
import { User, Building2, TrendingUp, Zap } from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeLeftVariant,
  fadeUpVariant,
  scaleInVariant,
  defaultViewport,
  springSoft,
} from "@/lib/motion";

export const ImpactMetricsSection = React.memo(function ImpactMetricsSection() {
  return (
    <section className="bg-ink text-cream relative pt-24 pb-12 overflow-hidden" id="impact">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-40 h-72 w-72 rounded-full bg-brand/15 blur-3xl"
        animate={{ opacity: [0.25, 0.5, 0.25], x: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-20 h-80 w-80 rounded-full bg-brand/10 blur-3xl"
        animate={{ opacity: [0.2, 0.45, 0.2], y: [0, -24, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="container-x relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <motion.div
            className="lg:col-span-5 lg:sticky lg:top-40 shrink-0 pt-8 pb-24 md:pt-14 md:pb-64 flex flex-col justify-center"
            variants={fadeLeftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
          >
            <p className="text-xs uppercase tracking-[0.14em] text-brand">The Impact</p>
            <h2 className="mt-4 font-display font-medium text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.12] tracking-[-0.02em]">
              Measurable
              <motion.span
                className="relative inline-block border border-brand bg-brand/10 text-white px-3 py-1 mx-2 align-middle overflow-visible"
                whileInView={{ scale: [0.92, 1] }}
                viewport={{ once: true }}
                transition={springSoft}
              >
                <span className="absolute -top-1 -left-1 w-2 h-2 bg-brand border border-brand"></span>
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-brand border border-brand"></span>
                <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-brand border border-brand"></span>
                <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-brand border border-brand"></span>
                Growth
              </motion.span>{" "}
              <br className="hidden lg:block" />
              At Every Level.
            </h2>
            <p className="mt-6 text-cream/70 text-lg max-w-md">
              We help you not JUST cut the costs but also make more money! How? Upskilling for
              professionals & automations for organizations
            </p>
          </motion.div>

          <div className="lg:col-span-7 flex flex-col gap-12 md:gap-24 pb-12">
            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -6 }}
              transition={springSoft}
              className="bg-[#161413] border border-cream/10 rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden group hover:border-brand/30 transition-colors duration-500"
            >
              <motion.div
                className="absolute -top-32 -right-32 w-80 h-80 bg-brand/10 rounded-full blur-[100px] pointer-events-none"
                animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.6, 0.35] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="flex items-center gap-4 mb-10 relative z-10">
                <motion.div
                  variants={scaleInVariant}
                  className="w-14 h-14 rounded-2xl bg-cream text-ink flex items-center justify-center shrink-0"
                  whileHover={{ rotate: -8, scale: 1.08 }}
                >
                  <User className="w-7 h-7" />
                </motion.div>
                <h3 className="font-display text-3xl md:text-4xl text-cream">Personal Impact</h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-10 relative z-10 mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-display text-6xl text-brand">20X</span>
                    <Zap className="w-8 h-8 text-brand" />
                  </div>
                  <h4 className="text-xl font-medium text-cream mb-3">Productivity Boost</h4>
                  <p className="text-cream/60 leading-relaxed">
                    Professionals automate repetitive tasks to focus on high-value inputs, solve
                    problems and strategy
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-display text-6xl text-brand">10x</span>
                    <TrendingUp className="w-8 h-8 text-brand" />
                  </div>
                  <h4 className="text-xl font-medium text-cream mb-3">Career Increment</h4>
                  <p className="text-cream/60 leading-relaxed">
                    Our AI upskilled professionals command premiums in the market serving high
                    leverage skills.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -6 }}
              transition={springSoft}
              className="bg-[#161413] border border-cream/10 rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden group hover:border-brand/30 transition-colors duration-500"
            >
              <motion.div
                className="absolute -bottom-32 -left-32 w-80 h-80 bg-brand/10 rounded-full blur-[100px] pointer-events-none"
                animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.55, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              />

              <div className="flex items-center gap-4 mb-10 relative z-10">
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-brand text-cream flex items-center justify-center shrink-0"
                  whileHover={{ rotate: 8, scale: 1.08 }}
                >
                  <Building2 className="w-7 h-7" />
                </motion.div>
                <h3 className="font-display text-3xl md:text-4xl text-cream">
                  Organizational Growth
                </h3>
              </div>

              <div className="grid gap-10 relative z-10 mt-8">
                <motion.div
                  className="border-l-2 border-brand pl-6"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h4 className="text-2xl font-medium text-cream mb-3">10x scale</h4>
                  <p className="text-cream/60 text-lg leading-relaxed">
                    Scale your operations with increased employee efficiency upskilled with
                    IndiaFutureAI. Save costs while maximizing revenue with high returns operations.
                  </p>
                </motion.div>
                <motion.div
                  className="border-l-2 border-brand/40 pl-6"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.12 }}
                >
                  <h4 className="text-2xl font-medium text-cream mb-3">20x Operational Agility</h4>
                  <p className="text-cream/60 text-lg leading-relaxed">
                    Our automations will help you win markets with precise insights, predictive
                    intelligence, and rapid workflow generation leading to expansion beyond current
                    horizons.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});
