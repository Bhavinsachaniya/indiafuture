"use client";

import React from "react";
import { motion } from "framer-motion";
import { HighlightText } from "@/components/ui/HighlightText";
import { fadeUpVariant, staggerContainerVariant, defaultViewport } from "@/lib/motion";

export function MethodHeader() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-start w-full text-center px-4 pointer-events-none">
      <motion.div
        className="max-w-4xl mx-auto pointer-events-auto"
        variants={staggerContainerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
      >
        <motion.div
          variants={fadeUpVariant}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <p className="text-xs uppercase tracking-[0.14em] text-brand font-semibold flex items-center justify-center gap-4">
            <span className="w-12 h-[1px] bg-brand/40" /> Fellowship/Masterclass{" "}
            <span className="w-12 h-[1px] bg-brand/40" />
          </p>
        </motion.div>
        <motion.h2
          variants={fadeUpVariant}
          className="mt-3 font-display font-medium text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.12] tracking-[-0.02em] text-balance max-w-4xl mx-auto"
        >
          We don’t just teach AI. We make you do it,{" "}
          <HighlightText className="italic">LIVE!</HighlightText>
        </motion.h2>
        <motion.p
          variants={fadeUpVariant}
          className="mt-5 text-cream/70 text-lg leading-[1.7] max-w-3xl mx-auto tracking-[-0.01em]"
        >
          Our Fellowship and Masterclasses are hands-on training programs with Learning & Execution
          modules. Comes with access to India’s largest AI professionals community!
        </motion.p>
      </motion.div>
    </div>
  );
}
