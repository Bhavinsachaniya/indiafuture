"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, MapPin, ArrowRight, Users } from "lucide-react";
import { HighlightText } from "@/components/ui/HighlightText";
import { FellowDetailDialog } from "@/components/cohort/FellowDetailDialog";
import { COHORT_FELLOWS, type CohortFellow } from "@/data/cohort";
import { fadeUpVariant, staggerContainerVariant, defaultViewport } from "@/lib/motion";

function LoveCard({ fellow }: { fellow: CohortFellow }) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const candidates = fellow.photoCandidates?.length
    ? fellow.photoCandidates
    : fellow.photoUrl
      ? [fellow.photoUrl]
      : [];
  const activePhoto = candidates[photoIndex] ?? null;
  const showPhoto = Boolean(activePhoto);

  return (
    <>
      <article className="group w-[168px] shrink-0 overflow-hidden rounded-2xl border border-[#161413]/06 bg-white/90 shadow-[0_8px_24px_-16px_rgba(22,20,19,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/25 hover:shadow-[0_18px_36px_-18px_rgba(249,115,22,0.35)] md:w-[184px]">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="relative aspect-[4/5] w-full cursor-pointer overflow-hidden bg-surface text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          aria-label={`View ${fellow.name}'s story`}
        >
          {showPhoto ? (
            <Image
              src={activePhoto!}
              alt={fellow.name}
              fill
              unoptimized
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => {
                if (photoIndex < candidates.length - 1) {
                  setPhotoIndex((i) => i + 1);
                } else {
                  setPhotoIndex(candidates.length);
                }
              }}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-soft to-cream">
              <span className="font-display text-3xl font-medium text-brand/80">
                {fellow.initials}
              </span>
            </div>
          )}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent opacity-80" />
        </button>

        <div className="px-3 py-3">
          <h3 className="truncate font-display text-[0.95rem] font-medium leading-tight tracking-[-0.02em] text-ink md:text-[1.05rem]">
            {fellow.name}
          </h3>
          {fellow.city ? (
            <p className="mt-1.5 flex items-center gap-1 text-[11px] font-medium text-ink-soft">
              <MapPin className="h-3 w-3 shrink-0 text-brand" />
              <span className="truncate">{fellow.city}</span>
            </p>
          ) : null}
        </div>
      </article>

      <FellowDetailDialog fellow={fellow} open={open} onOpenChange={setOpen} />
    </>
  );
}

function MarqueeRow({
  fellows,
  direction,
}: {
  fellows: CohortFellow[];
  direction: "left" | "right";
}) {
  const loop = [...fellows, ...fellows];

  return (
    <div className="relative overflow-hidden py-2">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#faf9f8] to-transparent md:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#faf9f8] to-transparent md:w-28" />

      <div
        className={`flex w-max gap-4 px-3 hover:[animation-play-state:paused] ${
          direction === "left" ? "animate-marquee-slow" : "animate-marquee-reverse"
        }`}
      >
        {loop.map((fellow, idx) => (
          <LoveCard key={`${direction}-${fellow.id}-${idx}`} fellow={fellow} />
        ))}
      </div>
    </div>
  );
}

export function WallOfLoveSection() {
  const { rowA, rowB } = useMemo(() => {
    const all = [...COHORT_FELLOWS];
    const mid = Math.ceil(all.length / 2);
    return {
      rowA: all.slice(0, mid),
      rowB: all.slice(mid).length ? all.slice(mid) : all.slice(0, mid),
    };
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-[#faf9f8] pb-12 pt-2 md:pb-14 md:pt-4"
      id="wall-of-love"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-10 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-brand-soft/50 blur-3xl"
        animate={{ opacity: [0.35, 0.6, 0.35], scale: [1, 1.06, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-x relative z-10 mx-auto mb-6 px-4 text-center md:mb-8 md:px-8">
        <motion.div
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <motion.p
            variants={fadeUpVariant}
            className="mb-4 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand"
          >
            <span className="h-px w-10 bg-brand/40" />
            <span className="inline-flex items-center gap-2">
              <Heart className="h-3.5 w-3.5 fill-brand/30" />
              Fellows
            </span>
            <span className="h-px w-10 bg-brand/40" />
          </motion.p>

          <motion.h2
            variants={fadeUpVariant}
            className="font-display text-3xl font-medium leading-[1.12] tracking-[-0.02em] text-ink md:text-4xl lg:text-[2.75rem]"
          >
            Wall of <HighlightText>Love</HighlightText>
          </motion.h2>
        </motion.div>
      </div>

      <motion.div
        className="relative space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <MarqueeRow fellows={rowA} direction="left" />
        <MarqueeRow fellows={rowB} direction="right" />
      </motion.div>

      <motion.div
        className="container-x relative z-10 mx-auto mt-6 flex justify-center px-4 md:mt-8"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={defaultViewport}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link
          href="/cohort"
          className="group inline-flex items-center gap-2 rounded-full border border-brand/25 bg-white px-6 py-3 text-sm font-semibold text-brand shadow-sm transition-all hover:-translate-y-0.5 hover:bg-brand hover:text-white"
        >
          Meet all fellows
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>

      <motion.div
        className="container-x relative z-10 mx-auto mt-10 px-4 pb-2 text-center md:mt-12 md:px-8"
        variants={staggerContainerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={defaultViewport}
      >
        <motion.div
          variants={fadeUpVariant}
          className="mb-4 flex flex-col items-center justify-center gap-3 text-sm font-medium text-[#161413]/70 sm:flex-row md:text-base"
        >
          <Users className="h-5 w-5 text-[#f97316]" />
          <span>
            Join a community of <HighlightText className="text-brand">2,000+</HighlightText>{" "}
            learners, <HighlightText className="text-brand"> 20+ </HighlightText> institutions!
          </span>
        </motion.div>

        <motion.div variants={fadeUpVariant}>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 font-bold text-[#f97316] transition-opacity hover:opacity-80"
          >
            Join the Journey
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
