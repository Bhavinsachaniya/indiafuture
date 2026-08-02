"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { HighlightText } from "@/components/ui/HighlightText";
import {
  COHORT_BATCHES,
  COHORT_FELLOWS,
  getFellowsByBatch,
  parseBatchParam,
  type CohortBatchId,
} from "@/data/cohort";
import { FellowCard } from "./FellowCard";
import { fadeUpVariant, staggerContainerVariant, defaultViewport } from "@/lib/motion";

export function SuccessStoriesSection() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [activeBatch, setActiveBatch] = useState<CohortBatchId>(() =>
    parseBatchParam(searchParams.get("batch")),
  );

  useEffect(() => {
    setActiveBatch(parseBatchParam(searchParams.get("batch")));
  }, [searchParams]);

  const fellows = useMemo(() => getFellowsByBatch(activeBatch), [activeBatch]);
  const activeMeta = COHORT_BATCHES.find((b) => b.id === activeBatch)!;

  const selectBatch = (batch: CohortBatchId) => {
    setActiveBatch(batch);
    router.replace(`/cohort?batch=${batch}`, { scroll: false });
  };

  return (
    <section
      className="relative overflow-hidden bg-[#faf9f8] pt-28 pb-10 md:pt-32 md:pb-12"
      id="success-stories"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[320px] w-[560px] -translate-x-1/2 rounded-full bg-brand-soft/45 blur-3xl"
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
            className="mt-3 font-display text-3xl font-medium leading-[1.12] tracking-[-0.02em] text-ink md:text-4xl lg:text-5xl"
          >
            Our <HighlightText>Success Stories</HighlightText>
          </motion.h2>
          <motion.p
            variants={fadeUpVariant}
            className="mx-auto mt-4 max-w-xl text-base leading-[1.7] tracking-[-0.01em] text-ink-soft"
          >
            Explore portfolios from {COHORT_FELLOWS.length}+ fellows across Batch 1, Batch 2, and
            Batch 3.
          </motion.p>
        </motion.div>

        <LayoutGroup>
          <motion.div
            className="mx-auto mt-8 flex w-full max-w-lg flex-col items-center gap-3 sm:mt-10"
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
                    onClick={() => selectBatch(batch.id)}
                    className={`relative z-10 flex flex-1 items-center justify-center rounded-full px-2 py-3 transition-colors sm:px-4 ${
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
                    <span className="relative z-10 text-sm font-semibold tracking-[-0.01em]">
                      {batch.label}
                      <span className="ml-1 text-xs font-medium opacity-70">({count})</span>
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
                Showing {fellows.length} fellows from {activeMeta.label}
              </motion.p>
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>

        <div className="mt-8 md:mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeBatch}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4"
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
