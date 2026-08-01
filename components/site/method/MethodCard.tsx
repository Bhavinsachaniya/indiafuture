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
      className="sticky top-[42vh] md:top-[38vh] px-4 md:px-8 w-full flex items-start justify-center h-[75vh] md:h-[80vh]"
      style={{ zIndex: i }}
    >
      <motion.div
        style={{
          scale,
          y,
          opacity,
          filter,
          transformOrigin: "top center",
          willChange: "transform, opacity, filter",
        }}
        className="flex flex-col items-center text-center gap-5 md:gap-6 p-7 md:p-10 lg:p-12 w-full max-w-2xl md:max-w-3xl lg:max-w-4xl rounded-[32px] md:rounded-[44px] border border-cream/10 bg-[#161413] shadow-[0_30px_80px_rgba(0,0,0,0.8)] overflow-hidden relative transition-[box-shadow] duration-500"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand/5 via-transparent to-transparent pointer-events-none" />
        <div className="absolute -top-24 left-1/2 h-48 w-[70%] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl pointer-events-none" />

        <motion.div
          className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-[#111] border border-white/5 flex items-center justify-center shadow-[0_0_40px_rgba(255,100,0,0.15)] relative z-10"
          whileInView={{ scale: [0.92, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <Icon className="w-10 h-10 md:w-12 md:h-12 text-brand" strokeWidth={1.5} />
        </motion.div>

        <div className="w-10 h-[2px] bg-brand rounded-full relative z-10" />

        <div className="relative z-10 max-w-2xl">
          <h3 className="font-display font-medium text-3xl md:text-5xl mb-4 md:mb-5 text-cream tracking-[-0.02em]">
            {t}
          </h3>
          <p className="text-cream/70 leading-[1.7] text-base md:text-xl tracking-[-0.01em]">{d}</p>
        </div>
      </motion.div>
    </div>
  );
}
