"use client";

import React from "react";
import { motion } from "framer-motion";

export function TrustedBy() {
  const logos = ["Google", "Microsoft", "Amazon", "Meta", "Apple", "Netflix", "Tesla", "OpenAI"];

  return (
    <section className="py-20 bg-surface border-y border-ink/5 overflow-hidden">
      <div className="container-x mb-10 text-center">
        <p className="text-sm font-medium text-ink-soft uppercase tracking-widest">
          Trusted by innovators worldwide
        </p>
      </div>

      {/* Infinite Marquee */}
      <div className="relative flex overflow-hidden w-full group">
        {/* Left Gradient Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-surface to-transparent z-10" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          className="flex whitespace-nowrap items-center gap-16 px-8"
        >
          {/* Double the logos to make the infinite loop seamless */}
          {[...logos, ...logos, ...logos].map((logo, idx) => (
            <div
              key={idx}
              className="text-3xl font-display font-bold text-ink/20 grayscale transition-all duration-300 hover:text-ink hover:grayscale-0 hover:scale-110"
            >
              {logo}
            </div>
          ))}
        </motion.div>

        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-surface to-transparent z-10" />
      </div>
    </section>
  );
}
