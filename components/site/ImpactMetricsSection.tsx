"use client";

import React from "react";
import { User, Building2, TrendingUp, Zap } from "lucide-react";
import { motion } from "framer-motion";

export const ImpactMetricsSection = React.memo(function ImpactMetricsSection() {
  return (
    <section className="bg-ink text-cream relative pt-24 pb-12" id="impact">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Sticky Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-40 shrink-0 pt-8 pb-24 md:pt-14 md:pb-64 flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.2em] text-brand">The Impact</p>
            <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[1.05]">
              Measurable
              {/* <em className="italic text-brand-soft">Growth</em> */}
              <span className="relative inline-block border border-brand bg-brand/10 text-white px-3 py-1 mx-2 align-middle overflow-visible">
                <span className="absolute -top-1 -left-1 w-2 h-2 bg-brand border border-brand"></span>
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-brand border border-brand"></span>
                <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-brand border border-brand"></span>
                <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-brand border border-brand"></span>
                Growth
              </span>{" "}
              <br className="hidden lg:block" />
              At Every Level.
            </h2>
            <p className="mt-6 text-cream/70 text-lg max-w-md">
              We help you not JUST cut the costs but also make more money! How? Upskilling for
              professionals & automations for organizations
            </p>
          </div>

          {/* Right Scrolling Cards */}
          <div className="lg:col-span-7 flex flex-col gap-12 md:gap-24 pb-12">
            {/* Personal Impact Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="bg-[#161413] border border-cream/10 rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden group hover:border-brand/30 transition-colors duration-500"
            >
              <div className="absolute -top-32 -right-32 w-80 h-80 bg-brand/10 rounded-full blur-[100px] group-hover:bg-brand/20 transition-colors duration-500 pointer-events-none" />

              <div className="flex items-center gap-4 mb-10 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-cream text-ink flex items-center justify-center shrink-0">
                  <User className="w-7 h-7" />
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-cream">Personal Impact</h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-10 relative z-10 mt-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-display text-6xl text-brand">20X</span>
                    <Zap className="w-8 h-8 text-brand" />
                  </div>
                  <h4 className="text-xl font-medium text-cream mb-3">Productivity Boost</h4>
                  <p className="text-cream/60 leading-relaxed">
                    Professionals automate repetitive tasks to focus on high-value inputs, solve
                    problems and strategy
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-display text-6xl text-brand">10x</span>
                    <TrendingUp className="w-8 h-8 text-brand" />
                  </div>
                  <h4 className="text-xl font-medium text-cream mb-3">Career Increment</h4>
                  <p className="text-cream/60 leading-relaxed">
                    Our AI upskilled professionals command premiums in the market serving high
                    leverage skills.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Organizational Impact Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="bg-[#161413] border border-cream/10 rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden group hover:border-brand/30 transition-colors duration-500"
            >
              <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-brand/10 rounded-full blur-[100px] group-hover:bg-brand/20 transition-colors duration-500 pointer-events-none" />

              <div className="flex items-center gap-4 mb-10 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-brand text-cream flex items-center justify-center shrink-0">
                  <Building2 className="w-7 h-7" />
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-cream">
                  Organizational Growth
                </h3>
              </div>

              <div className="grid gap-10 relative z-10 mt-8">
                <div className="border-l-2 border-brand pl-6">
                  <h4 className="text-2xl font-medium text-cream mb-3">10x scale</h4>
                  <p className="text-cream/60 text-lg leading-relaxed">
                    Scale your operations with increased employee efficiency upskilled with
                    IndiaFutureAI. Save costs while maximizing revenue with high returns operations.
                  </p>
                </div>
                <div className="border-l-2 border-brand/40 pl-6">
                  <h4 className="text-2xl font-medium text-cream mb-3">20x Operational Agility</h4>
                  <p className="text-cream/60 text-lg leading-relaxed">
                    Our automations will help you win markets with precise insights, predictive
                    intelligence, and rapid workflow generation leading to expansion beyond current
                    horizons.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});
