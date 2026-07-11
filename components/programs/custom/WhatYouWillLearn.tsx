"use client";

import React from "react";
import { motion } from "framer-motion";
import { Server, Target, Users, Award } from "lucide-react";
import { HighlightText } from "@/components/ui/HighlightText";

export function WhatYouWillLearn() {
  const items = [
    {
      title: "Existing infrastructure",
      icon: Server,
    },
    {
      title: "Institutional goals",
      icon: Target,
    },
    {
      title: "Cohort size and learner profile",
      icon: Users,
    },
    {
      title: "Training and certification requirements",
      icon: Award,
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#fdfaf5] relative overflow-hidden">
      <div className="container-x">
        {/* Section Header */}
        <div className="mb-16 max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-brand/40" />
            <p className="text-xs uppercase tracking-[0.2em] text-brand font-semibold">
              BUILT AROUND YOUR INSTITUTION
            </p>
            <span className="w-12 h-[1px] bg-brand/40" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05] mb-6">
            No fixed package. <HighlightText>No one-size-fits-all model.</HighlightText>
          </h2>
          <p className="text-lg text-ink-soft leading-relaxed max-w-2xl mx-auto mb-12">
            Every AI Lab is customized according to:
          </p>

          {/* SUITABLE FOR Block */}
          <div className="mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-ink-soft font-semibold mb-4">
              SUITABLE FOR
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Schools", "Colleges", "Universities", "Other educational institutions"].map(
                (audience, i) => (
                  <div
                    key={i}
                    className="px-5 py-2.5 bg-white border border-ink/10 rounded-sm text-sm text-ink-soft font-medium"
                  >
                    {audience}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => {
            const isHighlighted = idx === 1;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 transition-all duration-300 flex flex-col group border border-ink/5 hover:border-transparent hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] min-h-[220px]"
              >
                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-full border flex items-center justify-center mb-10 transition-colors duration-300 ${
                    isHighlighted
                      ? "border-brand/30 bg-brand/5"
                      : "border-ink/10 bg-transparent group-hover:bg-brand/5 group-hover:border-brand/20"
                  }`}
                >
                  <item.icon
                    className={`w-4 h-4 transition-colors duration-300 ${
                      isHighlighted ? "text-brand" : "text-ink group-hover:text-brand"
                    }`}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Content */}
                <h3
                  className={`font-display text-xl leading-snug transition-colors duration-300 ${
                    isHighlighted ? "text-brand" : "text-ink group-hover:text-brand"
                  }`}
                >
                  {item.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
