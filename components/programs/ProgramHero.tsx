"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import Link from "next/link";
import type { ProgramData } from "@/config/programs";
import { HighlightText } from "@/components/ui/HighlightText";

export function ProgramHero({ data }: { data: ProgramData }) {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-24 overflow-hidden">
      {/* Background Gradients & Elements */}
      <div className="absolute inset-0 bg-surface z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[150px] translate-x-1/3 pointer-events-none" />

      {/* Floating SVG Particles (Abstract) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-[10%] w-24 h-24 border border-brand/20 rounded-2xl rotate-12"
        />
        <motion.div
          animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-[10%] w-32 h-32 border border-ink/5 rounded-full"
        />
      </div>

      <div className="container-x relative z-10 flex flex-col items-center text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-semibold tracking-widest uppercase mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
          {data.label}
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.05] tracking-tight text-ink mb-6">
            {typeof data.title === "string" && data.highlightWord
              ? data.title.split(new RegExp(`(${data.highlightWord})`, "gi")).map((part, i) => {
                  if (part.toLowerCase() === data.highlightWord!.toLowerCase()) {
                    return (
                      <HighlightText key={i} className="font-light">
                        {part}
                      </HighlightText>
                    );
                  }
                  return part;
                })
              : data.title}
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-ink-soft max-w-2xl mx-auto leading-relaxed mb-12"
        >
          {data.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-20"
        >
          <Link
            href="/payment"
            className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-brand text-white px-8 py-3.5 text-sm font-medium transition-all hover:bg-brand/90 hover:-translate-y-0.5 shadow-lg shadow-brand/20 w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center gap-2">
              {data.id === "custom" || data.id === "workshops" ? "Ask us how" : "Join Now"}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>

          {data.id === "custom" && (
            <button className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-white text-ink border border-ink/10 px-8 py-3.5 text-sm font-medium transition-all hover:bg-surface hover:-translate-y-0.5 shadow-sm w-full sm:w-auto">
              <PlayCircle className="w-5 h-5 text-ink-soft group-hover:text-brand transition-colors" />
              Watch Preview
            </button>
          )}
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 pt-12 border-t border-ink/5 w-full max-w-5xl"
        >
          {data.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center">
              <span className="font-display text-4xl md:text-5xl text-ink mb-2">{stat.value}</span>
              <span className="text-sm font-medium text-ink-soft uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
