"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { HighlightText } from "@/components/ui/HighlightText";
import { COHORT_BATCHES, COHORT_FELLOWS, getFellowsByBatch, type CohortBatch } from "@/data/cohort";
import { FellowCard } from "./FellowCard";
import { fadeUpVariant, staggerContainerVariant, defaultViewport } from "@/lib/motion";

export function SuccessStoriesSection() {
  const [activeBatch, setActiveBatch] = useState<CohortBatch>("Visionaries");

  const fellows = useMemo(() => getFellowsByBatch(activeBatch), [activeBatch]);
  const activeMeta = COHORT_BATCHES.find((b) => b.id === activeBatch)!;

  return (
    <section className="relative overflow-hidden bg-[#faf9f8] py-20 md:py-28" id="success-stories">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-brand-soft/50 blur-3xl"
      />

      <div className="container-x relative z-10">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <motion.p
            variants={fadeUpVariant}
            className="text-xs font-semibold uppercase tracking-[0.14em] text-brand"
          >
            Fellowship Alumni
          </motion.p>
          <motion.h2
            variants={fadeUpVariant}
            className="mt-4 font-display text-4xl font-medium leading-[1.12] tracking-[-0.02em] text-ink md:text-5xl lg:text-[3.5rem]"
          >
            Our <HighlightText>Success Stories</HighlightText>
          </motion.h2>
          <motion.p
            variants={fadeUpVariant}
            className="mx-auto mt-5 max-w-2xl text-lg leading-[1.7] tracking-[-0.01em] text-ink-soft"
          >
            Meet the creators who turned AI learning into real portfolios, client work, and
            cinematic storytelling — across Batch 1 Visionaries and Batch 2 Innovators.
          </motion.p>
        </motion.div>

        <LayoutGroup>
          <motion.div
            className="mx-auto mt-10 flex w-full max-w-xl flex-col items-center gap-4 sm:mt-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={defaultViewport}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative flex w-full rounded-full border border-border/80 bg-white p-1.5 shadow-sm">
              {COHORT_BATCHES.map((batch) => {
                const count = COHORT_FELLOWS.filter((f) => f.batch === batch.id).length;
                const isActive = activeBatch === batch.id;
                return (
                  <button
                    key={batch.id}
                    type="button"
                    onClick={() => setActiveBatch(batch.id)}
                    className={`relative z-10 flex flex-1 flex-col items-center rounded-full px-3 py-3 transition-colors sm:px-5 ${
                      isActive ? "text-cream" : "text-ink-soft hover:text-ink"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="batch-pill"
                        className="absolute inset-0 rounded-full bg-ink"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10 text-[10px] font-semibold uppercase tracking-[0.16em] opacity-80">
                      {batch.eyebrow}
                    </span>
                    <span className="relative z-10 mt-0.5 text-sm font-semibold tracking-[-0.01em] sm:text-base">
                      {batch.label}
                      <span className="ml-1.5 text-xs font-medium opacity-70">({count})</span>
                    </span>
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.p
                key={activeBatch}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="text-sm text-ink-soft"
              >
                Showing {fellows.length} fellows from {activeMeta.eyebrow} · {activeMeta.label}
              </motion.p>
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        <div className="mt-10 md:mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeBatch}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {fellows.map((fellow, index) => (
                <FellowCard key={`${activeBatch}-${fellow.id}`} fellow={fellow} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
