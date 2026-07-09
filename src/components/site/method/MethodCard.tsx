import React from "react";
import { motion, MotionValue, useMotionTemplate, useTransform } from "framer-motion";
import { useCardProgress } from "./useCardProgress";

interface MethodCardProps {
  n: string;
  t: string;
  d: string;
  icon: React.ReactNode;
  i: number;
  totalCards: number;
  progress: MotionValue<number>;
}

export function MethodCard({ n, t, d, icon, i, totalCards, progress }: MethodCardProps) {
  const { scale, y, opacity, filter, spreadXDesktop, spreadYMobile } = useCardProgress(progress, i, totalCards);
  
  const spreadXTemplate = useMotionTemplate`${spreadXDesktop}px`;
  const spreadYTemplate = useMotionTemplate`${spreadYMobile}px`;
  const yTemplate = useMotionTemplate`${y}px`;

  const dotOpacity = useTransform(progress, [0.85, 0.95], [0, 1]);

  return (
    <div 
      className="sticky top-[20vh] md:top-[25vh] w-full flex items-start justify-center h-[100vh] pointer-events-none"
      style={{ zIndex: i }}
    >
      <div className="w-full flex items-center justify-center">
        <motion.div
          style={{
            scale,
            opacity,
            filter,
            "--spread-x": spreadXTemplate,
            "--spread-y": spreadYTemplate,
            "--stacked-y": yTemplate,
            transformOrigin: "center center",
            willChange: "transform, opacity, filter",
          } as any}
          className="pointer-events-auto flex flex-col items-center text-center p-8 rounded-3xl bg-[#11100F] border border-white/5 hover:border-brand/30 transition-colors duration-300 shadow-[0_30px_80px_rgba(0,0,0,0.8)] overflow-hidden w-[280px] h-[280px] shrink-0 transform-gpu translate-y-[calc(var(--stacked-y)+var(--spread-y))] md:translate-y-[var(--stacked-y)] md:translate-x-[var(--spread-x)]"
        >
          {/* Desktop Connection Dot (Only visible when spread) */}
          <motion.div className="hidden md:block absolute top-[140px] -left-[20px] w-4 h-4 rounded-full bg-[#11100F] border-2 border-brand/50 shadow-[0_0_10px_rgba(255,102,0,0.5)]" 
              style={{ display: i === 0 ? 'none' : 'block', opacity: dotOpacity }} />
              
          <div className="w-16 h-16 rounded-2xl bg-black border border-white/5 flex items-center justify-center mb-6 relative z-10 shadow-inner">
            {icon}
          </div>
          
          <h3 className="font-display text-2xl text-cream mb-2">{t}</h3>
          <p className="text-cream/60 text-sm leading-relaxed">{d}</p>
        </motion.div>
      </div>
    </div>
  );
}
