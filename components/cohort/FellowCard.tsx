"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import type { CohortFellow } from "@/data/cohort";

type FellowCardProps = {
  fellow: CohortFellow;
  index: number;
};

export function FellowCard({ fellow, index }: FellowCardProps) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const candidates = fellow.photoCandidates?.length
    ? fellow.photoCandidates
    : fellow.photoUrl
      ? [fellow.photoUrl]
      : [];
  const activePhoto = candidates[photoIndex] ?? null;
  const showPhoto = Boolean(activePhoto);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 16, scale: 0.97 }}
      transition={{
        duration: 0.45,
        delay: Math.min(index * 0.05, 0.35),
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -8 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-border/70 bg-white shadow-[0_8px_30px_rgba(22,20,19,0.04)] transition-shadow duration-500 hover:shadow-[0_22px_50px_-18px_rgba(249,115,22,0.28)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-surface">
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
            <span className="font-display text-5xl font-medium tracking-tight text-brand/80">
              {fellow.initials}
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent opacity-80" />

        {fellow.city && (
          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-1.5 text-cream/95">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-brand" />
            <span className="truncate text-xs font-medium tracking-[-0.01em]">{fellow.city}</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="font-display text-2xl font-medium leading-tight tracking-[-0.02em] text-ink">
          {fellow.name}
        </h3>

        <p className="mt-3 line-clamp-4 flex-1 text-sm leading-relaxed text-ink-soft">
          {fellow.shortBio || fellow.fullBio}
        </p>

        {fellow.portfolioUrl ? (
          <a
            href={fellow.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-cream transition-all duration-300 hover:bg-brand group-hover:gap-3"
          >
            View Portfolio
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        ) : (
          <div className="mt-5 inline-flex items-center justify-center rounded-full border border-border px-5 py-2.5 text-sm font-medium text-ink-soft">
            Portfolio coming soon
          </div>
        )}
      </div>

      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand/10 blur-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
    </motion.article>
  );
}
