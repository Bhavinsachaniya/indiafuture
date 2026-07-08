import React from "react";
import { motion, MotionValue } from "framer-motion";
import { useCardProgress } from "./useCardProgress";

interface MethodCardProps {
  n: string;
  t: string;
  d: string;
  i: number;
  totalCards: number;
  progress: MotionValue<number>;
}

export function MethodCard({ n, t, d, i, totalCards, progress }: MethodCardProps) {
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
        }}
        className="flex flex-col md:flex-row md:items-center gap-6 p-8 md:p-10 w-full max-w-4xl rounded-[32px] md:rounded-[40px] border border-cream/10 bg-[#161413] shadow-[0_30px_80px_rgba(0,0,0,0.8)] overflow-hidden"
      >
        <span className="font-display text-5xl md:text-6xl text-brand shrink-0 leading-none">
          {n}
        </span>
        <div>
          <h3 className="font-display text-2xl md:text-3xl mb-2">{t}</h3>
          <p className="text-cream/70 leading-relaxed text-sm md:text-base">
            {d}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
