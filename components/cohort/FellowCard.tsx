"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { CohortFellow } from "@/data/cohort";
import { FellowDetailDialog } from "@/components/cohort/FellowDetailDialog";

type FellowCardProps = {
  fellow: CohortFellow;
  index: number;
};

export function FellowCard({ fellow, index }: FellowCardProps) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const candidates = fellow.photoCandidates?.length
    ? fellow.photoCandidates
    : fellow.photoUrl
      ? [fellow.photoUrl]
      : [];
  const activePhoto = candidates[photoIndex] ?? null;
  const showPhoto = Boolean(activePhoto);
  const preview = (fellow.shortBio || fellow.fullBio).trim();
  const full = (fellow.fullBio || fellow.shortBio).trim();
  const needsReadMore = full.length > 110 || full !== preview;

  return (
    <>
      <motion.article
        layout
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{
          duration: 0.4,
          delay: Math.min(index * 0.04, 0.28),
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{ y: -5 }}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-white shadow-[0_6px_20px_rgba(22,20,19,0.04)] transition-shadow duration-500 hover:shadow-[0_16px_36px_-16px_rgba(249,115,22,0.25)]"
      >
        <div className="relative aspect-[5/4] overflow-hidden bg-surface">
          {showPhoto ? (
            <Image
              src={activePhoto!}
              alt={fellow.name}
              fill
              unoptimized
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              onError={() => {
                if (photoIndex < candidates.length - 1) {
                  setPhotoIndex((i) => i + 1);
                } else {
                  setPhotoIndex(candidates.length);
                }
              }}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-soft via-surface to-cream">
              <span className="font-display text-3xl font-medium tracking-tight text-brand/80">
                {fellow.initials}
              </span>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent opacity-80" />

          {fellow.city && (
            <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1 text-cream/95">
              <MapPin className="h-3 w-3 shrink-0 text-brand" />
              <span className="truncate text-[11px] font-medium tracking-[-0.01em]">
                {fellow.city}
              </span>
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-4">
          <h3 className="font-display text-lg font-medium leading-tight tracking-[-0.02em] text-ink">
            {fellow.name}
          </h3>

          <p className="mt-2 line-clamp-3 flex-1 text-[13px] leading-relaxed text-ink-soft">
            {preview}
          </p>

          {needsReadMore && (
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="mt-2 self-start text-[12px] font-semibold text-brand transition-colors hover:text-brand/80"
            >
              Read more
            </button>
          )}

          {fellow.portfolioUrl ? (
            <a
              href={fellow.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-1.5 rounded-full bg-ink px-4 py-2 text-xs font-semibold text-cream transition-all duration-300 hover:bg-brand group-hover:gap-2.5"
            >
              View Portfolio
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ) : (
            <div className="mt-4 inline-flex items-center justify-center rounded-full border border-border px-4 py-2 text-xs font-medium text-ink-soft">
              Portfolio coming soon
            </div>
          )}
        </div>
      </motion.article>

      <FellowDetailDialog fellow={fellow} open={open} onOpenChange={setOpen} />
    </>
  );
}
