"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { fadeUpVariant, staggerContainerVariant, defaultViewport } from "@/lib/motion";

const stats = [
  { value: 20, suffix: "+", label: "Institution Partners", decimals: 0 },
  { value: 2000, suffix: "+", label: "Indians Upskilled", decimals: 0 },
  { value: 10, suffix: "x", label: "Organizational Efficiency", decimals: 0 },
  { value: 100, suffix: "%", label: "Practical Training", decimals: 0 },
];

export const Stats = React.memo(function Stats() {
  return (
    <section className="py-2 md:py-4">
      <div className="container-x">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 border-y border-border py-6"
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUpVariant}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 360, damping: 24 }}
              className="text-center px-4"
            >
              <div className="font-display font-medium text-5xl md:text-6xl leading-none tracking-[-0.02em] text-ink">
                <AnimatedCounter value={s.value} suffix={s.suffix} decimals={s.decimals} />
              </div>
              <p className="mt-3 text-sm text-ink-soft">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
});
