"use client";

import React from "react";
import { motion, MotionValue } from "framer-motion";
import { useCardProgress } from "./useCardProgress";
import { LucideIcon } from "lucide-react";

interface MethodCardProps {
  icon: LucideIcon;
  t: string;
  d: string;
  i: number;
  totalCards: number;
  progress: MotionValue<number>;
}

export function MethodCard({ icon: Icon, t, d, i, totalCards, progress }: MethodCardProps) {
  const { scale, y, opacity, filter } = useCardProgress(progress, i, totalCards);

  return (
    <div
      className="sticky top-[55vh] md:top-[60vh] w-full flex items-start justify-center h-[100vh]"
      style={{ zIndex: i }}
    >
      <motion.div
        style={{
          scale,
          y,
          opacity,
          filter,
          transformOrigin: "top center",
          perspective: 1000,
          willChange: "transform, opacity, filter",
        }}
        className="flex flex-col items-center text-center gap-6 p-10 md:p-14 w-full max-w-lg rounded-[32px] md:rounded-[40px] border border-cream/10 bg-[#161413] shadow-[0_30px_80px_rgba(0,0,0,0.8)] overflow-hidden relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand/5 to-transparent pointer-events-none" />

        <div className="w-24 h-24 rounded-full bg-[#111] border border-white/5 flex items-center justify-center shadow-[0_0_40px_rgba(255,100,0,0.15)] relative z-10">
          <Icon className="w-10 h-10 text-brand" strokeWidth={1.5} />
        </div>

        <div className="w-8 h-[2px] bg-brand rounded-full relative z-10" />

        <div className="relative z-10">
          <h3 className="font-display text-3xl md:text-4xl mb-4 text-cream">{t}</h3>
          <p className="text-cream/70 leading-relaxed text-base md:text-lg">{d}</p>
        </div>
      </motion.div>
    </div>
  );
}
