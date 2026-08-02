"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, MapPin, X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import type { CohortFellow } from "@/data/cohort";

type FellowDetailDialogProps = {
  fellow: CohortFellow;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function FellowDetailDialog({ fellow, open, onOpenChange }: FellowDetailDialogProps) {
  const [photoIndex, setPhotoIndex] = useState(0);
  const candidates = fellow.photoCandidates?.length
    ? fellow.photoCandidates
    : fellow.photoUrl
      ? [fellow.photoUrl]
      : [];
  const activePhoto = candidates[photoIndex] ?? null;
  const showPhoto = Boolean(activePhoto);
  const bio = (fellow.fullBio || fellow.shortBio).trim();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        hideCloseButton
        overlayClassName="bg-ink/45 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
        className="max-h-[min(90vh,720px)] w-[calc(100%-1.5rem)] max-w-lg gap-0 overflow-hidden rounded-3xl border border-border/60 bg-cream p-0 shadow-[0_32px_80px_-24px_rgba(22,20,19,0.55)] sm:rounded-3xl"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-surface">
          {showPhoto ? (
            <Image
              src={activePhoto!}
              alt={fellow.name}
              fill
              unoptimized
              className="object-cover"
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
          <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-transparent" />
          <div className="absolute bottom-4 left-5 right-14">
            <DialogTitle className="font-display text-2xl font-medium leading-tight tracking-[-0.02em] text-cream">
              {fellow.name}
            </DialogTitle>
            {fellow.city && (
              <p className="mt-1.5 flex items-center gap-1.5 text-sm text-cream/85">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-brand" />
                <span>{fellow.city}</span>
              </p>
            )}
          </div>
        </div>

        <div className="overflow-y-auto px-5 pb-6 pt-5 sm:px-6">
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand">
            {fellow.batchLabel}
          </p>
          <DialogDescription className="whitespace-pre-line text-[15px] leading-relaxed text-ink-soft">
            {bio}
          </DialogDescription>

          {fellow.portfolioUrl ? (
            <a
              href={fellow.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-cream transition-colors hover:bg-brand"
            >
              View Portfolio
              <ArrowUpRight className="h-4 w-4" />
            </a>
          ) : null}
        </div>

        <DialogClose className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-cream/25 bg-ink/40 text-cream backdrop-blur-md transition-colors hover:bg-ink/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
