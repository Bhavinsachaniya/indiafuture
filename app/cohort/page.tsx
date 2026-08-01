"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HighlightText } from "@/components/ui/HighlightText";
import { SuccessStoriesSection } from "@/components/cohort/SuccessStoriesSection";
import { COHORT_FELLOWS } from "@/data/cohort";
import { fadeUpVariant, staggerContainerVariant } from "@/lib/motion";

export default function CohortPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <section className="relative overflow-hidden pt-28 pb-12 md:pt-36 md:pb-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.3]"
            style={{
              backgroundImage:
                "linear-gradient(to right, hsl(28 40% 70% / 0.16) 1px, transparent 1px), linear-gradient(to bottom, hsl(28 40% 70% / 0.16) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 35%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 80% 60% at 50% 30%, black 35%, transparent 80%)",
            }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-24 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-brand-soft/70 blur-3xl"
            animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.06, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="container-x relative z-10">
            <motion.div
              className="mx-auto max-w-4xl text-center"
              variants={staggerContainerVariant}
              initial="hidden"
              animate="visible"
            >
              <motion.p
                variants={fadeUpVariant}
                className="text-xs font-semibold uppercase tracking-[0.18em] text-brand"
              >
                Creator Fellowship Alumni
              </motion.p>
              <motion.h1
                variants={fadeUpVariant}
                className="mt-5 font-display text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1.08] tracking-[-0.025em] text-ink"
              >
                From learners to <HighlightText>AI creators</HighlightText>
              </motion.h1>
              <motion.p
                variants={fadeUpVariant}
                className="mx-auto mt-6 max-w-2xl text-lg leading-[1.7] tracking-[-0.01em] text-ink-soft md:text-xl"
              >
                Explore portfolios from {COHORT_FELLOWS.length}+ fellows who shipped real AI
                storytelling work through IndiaFutureAI — switch between Batch 1 and Batch 2 below.
              </motion.p>

              <motion.div
                variants={fadeUpVariant}
                className="mt-8 flex flex-wrap items-center justify-center gap-3"
              >
                <a
                  href="#success-stories"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-cream transition-opacity hover:opacity-90"
                >
                  Browse success stories
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/programs/ai-upskilling"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-brand/40 hover:text-brand"
                >
                  Join the Fellowship
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <SuccessStoriesSection />

        <section className="bg-background py-20 md:py-24">
          <div className="container-x">
            <motion.div
              className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-center text-cream md:px-12 md:py-16"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute left-1/2 top-0 h-48 w-[70%] -translate-x-1/2 rounded-full bg-brand/20 blur-[80px]" />
              <div className="relative z-10">
                <h2 className="font-display text-3xl font-medium tracking-[-0.02em] md:text-4xl lg:text-5xl">
                  Ready to write your success story?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-cream/70 leading-relaxed">
                  Join the next Creator Fellowship cohort and build a portfolio that opens doors.
                </p>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
                >
                  Talk to us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
