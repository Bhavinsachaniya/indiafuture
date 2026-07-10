"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Bot,
  MessageSquare,
  Search,
  Pencil,
  Clock,
  Zap,
  Code,
  Rocket,
  Info,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { fadeUpVariant, strictViewport } from "@/lib/motion";
import { HighlightText } from "../ui/HighlightText";

const weeks = [
  {
    week: "01",
    title: "Build Your\nFirst AI Assistant",
    description: "Ship your first AI assistant.",
    tags: "ship · assistant · implement",
    icon: <Bot className="w-5 h-5 text-[#f97316]" />,
    iconBg: "bg-[#fff5ec] border border-[#f97316]/20",
  },
  {
    week: "02",
    title: "Prompt\nEngineering",
    description: "Write prompts that work.",
    tags: "prompt · create · refine",
    icon: <MessageSquare className="w-5 h-5 text-[#f97316]" />,
    iconBg: "bg-[#fff5ec] border border-[#f97316]/20",
  },
  {
    week: "03",
    title: "AI\nResearch",
    description: "Research smarter. Learn faster.",
    tags: "read · research · synthesize",
    icon: <Search className="w-5 h-5 text-indigo-500" />,
    iconBg: "bg-indigo-50 border border-indigo-200",
  },
  {
    week: "04",
    title: "AI Content\nCreation",
    description: "Create content with AI.",
    tags: "write · design · publish",
    icon: <Pencil className="w-5 h-5 text-purple-500" />,
    iconBg: "bg-purple-50 border border-purple-200",
  },
  {
    week: "05",
    title: "AI\nProductivity",
    description: "Save hours every day.",
    tags: "system · workflow · optimize",
    icon: <Clock className="w-5 h-5 text-emerald-600" />,
    iconBg: "bg-emerald-50 border border-emerald-200",
  },
  {
    week: "06",
    title: "AI\nAutomation",
    description: "Automate repetitive work.",
    tags: "connect · automate · deploy",
    icon: <Zap className="w-5 h-5 text-amber-500" />,
    iconBg: "bg-amber-50 border border-amber-200",
  },
  {
    week: "07",
    title: "Projects\n ",
    description: "Build something real.",
    tags: "build · iterate · improve",
    icon: <Code className="w-5 h-5 text-emerald-600" />,
    iconBg: "bg-emerald-50 border border-emerald-200",
  },
  {
    week: "08",
    title: "Showcase & Ship\n ",
    description: "Launch your first AI project.",
    tags: "launch · portfolio · career",
    badge: "CAPSTONE",
    icon: <Rocket className="w-8 h-8 text-[#f97316]" />,
    iconBg: "transparent",
  },
];

export function UpskillingProgram() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#faf9f8]">
      <div className="container-x relative z-10 mx-auto">
        {/* Header Area */}
        <div className="flex flex-col items-center text-center mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-brand font-semibold mb-4 flex items-center justify-center gap-4">
            <span className="w-12 h-[1px] bg-brand/40" /> FLAGSHIP PROGRAM{" "}
            <span className="w-12 h-[1px] bg-brand/40" />
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#161413] mb-6">
            The Flagship <HighlightText>8-Week</HighlightText> AI Program.
          </h2>
          <div className="text-[#161413]/70 text-lg md:text-xl space-y-1 mb-8">
            <p>Eight weeks. Real tools. Real projects.</p>
            <p>Learn AI by building, applying, and shipping practical solutions.</p>
          </div>
          <Link
            href="/programs/ai-upskilling"
            className="inline-flex items-center justify-center whitespace-nowrap bg-[#f97316] hover:bg-[#ea580c] text-white rounded-full px-8 py-6 text-base font-medium transition-all shadow-md hover:shadow-lg"
          >
            View Curriculum &rarr;
          </Link>
        </div>

        {/* Grid of Weeks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {weeks.map((week, idx) => (
            <motion.div
              key={week.week}
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={strictViewport}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-6 border border-[#161413]/5 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              {week.badge ? (
                // Layout for Week 8 with Capstone badge
                <>
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[11px] font-bold tracking-[0.1em] text-[#f97316]">
                      WEEK {week.week}
                    </span>
                    <span className="bg-[#f97316] text-white text-[10px] font-bold px-2 py-1 rounded tracking-wider">
                      {week.badge}
                    </span>
                  </div>
                  <div className="mb-4">{week.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl leading-tight text-[#161413] mb-3 whitespace-pre-line">
                      {week.title}
                    </h3>
                    <div className="w-5 h-[2px] bg-[#f97316] mb-4"></div>
                    <p className="text-[14px] text-[#161413]/70">{week.description}</p>
                  </div>
                </>
              ) : (
                // Layout for Weeks 1-7
                <>
                  <div className="flex justify-between items-start mb-8">
                    <span className="text-[11px] font-bold tracking-[0.1em] text-[#f97316] mt-2">
                      WEEK {week.week}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${week.iconBg}`}
                    >
                      {week.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-2xl leading-tight text-[#161413] mb-3 whitespace-pre-line">
                      {week.title}
                    </h3>
                    <div className="w-5 h-[2px] bg-[#f97316] mb-4"></div>
                    <p className="text-[14px] text-[#161413]/70">{week.description}</p>
                  </div>
                </>
              )}

              {/* Card Footer (Tags) */}
              <div className="pt-5 mt-5 border-t border-border/50">
                <p className="text-xs font-mono text-[#161413]/50 tracking-tight">{week.tags}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="bg-white rounded-2xl p-4 px-6 border border-[#161413]/5 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-[#161413]/70 text-sm">
            <Info className="w-5 h-5 text-[#161413]/40" />
            <span>One program. Endless possibilities.</span>
          </div>
          <Link
            href="/programs/ai-upskilling"
            className="text-sm font-bold text-[#161413] hover:text-[#f97316] flex items-center gap-2 transition-colors group"
          >
            See all programs
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
