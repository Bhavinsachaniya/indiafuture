"use client";

import React from "react";
import { motion } from "framer-motion";
import { Server, Target, Users, Award } from "lucide-react";
import { strictViewport } from "@/lib/motion";
import { HighlightText } from "../ui/HighlightText";

export function LearningExperience({ data }: { data?: any }) {
  const items = [
    {
      title: "Existing infrastructure",
      desc: "Integrate seamlessly with your current technical setup.",
      icon: Server,
    },
    {
      title: "Institutional goals",
      desc: "Align curriculum directly with your strategic objectives.",
      icon: Target,
    },
    {
      title: "Cohort size and learner profile",
      desc: "Tailor content to your cohort's specific background.",
      icon: Users,
    },
    {
      title: "Training and certification requirements",
      desc: "Design verified credentials matching your standards.",
      icon: Award,
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#faf9f6] relative overflow-hidden">
      <div className="container-x mx-auto max-w-7xl px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-[#f97316]/30" />
            <p className="text-xs uppercase tracking-[0.14em] text-[#f97316] font-semibold">
              BUILT AROUND YOUR INSTITUTION
            </p>
            <span className="w-12 h-[1px] bg-[#f97316]/30" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#161413] tracking-tight leading-tight">
            No fixed package. <br className="hidden md:inline" />
            <HighlightText>No one-size-fits-all model.</HighlightText>
          </h2>
          <p className="text-lg text-[#161413]/70 leading-relaxed max-w-2xl mx-auto mt-8">
            Every AI Lab is customized according to:
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={strictViewport}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-[32px] p-8 transition-all duration-300 flex flex-col group border border-[#161413]/5 hover:border-transparent hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] min-h-[220px]"
            >
              {/* Icon Container */}
              <div className="w-10 h-10 rounded-full bg-[#fff5ec] border border-[#f97316]/20 flex items-center justify-center mb-10 group-hover:scale-105 transition-transform duration-300">
                <item.icon className="w-5 h-5 text-[#f97316]" strokeWidth={2} />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl leading-snug text-[#161413] mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#161413]/70 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
