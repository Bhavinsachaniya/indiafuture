"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const STUDIO_VIDEOS = [
  { id: "xMy4HEQOC44", title: "Studio Reel 01", category: "Motion" },
  { id: "_-ZmXDGXg-Y", title: "Studio Reel 02", category: "Founder Content" },
  { id: "TBNPwe2oXFI", title: "Studio Reel 03", category: "Brand Film" },
  { id: "AMAk9m7ft1k", title: "Studio Reel 04", category: "Paid Creative" },
  { id: "nA4ZHB1OhGo", title: "Studio Reel 05", category: "Campaign" },
] as const;

function thumb(id: string) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="white" width="18" height="18" aria-hidden>
      <path d="M4 2.5v11l10-5.5-10-5.5z" />
    </svg>
  );
}

export function StudioMotionShowcase() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const current = STUDIO_VIDEOS[active];

  useEffect(() => {
    if (playing) return;
    const timer = window.setInterval(() => {
      setActive((i) => (i + 1) % STUDIO_VIDEOS.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [playing, active]);

  const goTo = (index: number) => {
    setActive(index);
    setPlaying(false);
  };

  const prev = () => goTo((active - 1 + STUDIO_VIDEOS.length) % STUDIO_VIDEOS.length);
  const next = () => goTo((active + 1) % STUDIO_VIDEOS.length);

  return (
    <div className="studio-motion">
      <div className="sub-label">Motion</div>

      <div className="studio-motion-stage">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            className="studio-motion-feature"
            initial={{ opacity: 0, scale: 0.985, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.015, y: -8 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            {playing ? (
              <iframe
                title={current.title}
                src={`https://www.youtube.com/embed/${current.id}?autoplay=1&rel=0`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="studio-motion-iframe"
              />
            ) : (
              <button
                type="button"
                className="studio-motion-poster"
                onClick={() => setPlaying(true)}
                aria-label={`Play ${current.title}`}
              >
                <Image
                  src={thumb(current.id)}
                  alt={current.title}
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="(max-width: 900px) 100vw, 920px"
                />
                <span className="studio-motion-poster-veil" />
                <span className="play">
                  <PlayIcon />
                </span>
              </button>
            )}
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          className="studio-motion-nav prev"
          onClick={prev}
          aria-label="Previous video"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          className="studio-motion-nav next"
          onClick={next}
          aria-label="Next video"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="work-meta studio-motion-meta">
        <AnimatePresence mode="wait">
          <motion.span
            key={`${current.id}-name`}
            className="name"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
          >
            {current.title}
          </motion.span>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.span
            key={`${current.id}-cat`}
            className="cat"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
          >
            {current.category} · {active + 1} / {STUDIO_VIDEOS.length}
          </motion.span>
        </AnimatePresence>
      </div>

      {!playing && (
        <div className="studio-motion-progress" aria-hidden>
          <motion.div
            key={current.id}
            className="studio-motion-progress-bar"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 4.5, ease: "linear" }}
          />
        </div>
      )}

      <div className="studio-motion-thumbs" role="tablist" aria-label="Studio motion reels">
        {STUDIO_VIDEOS.map((video, index) => {
          const isActive = index === active;
          return (
            <button
              key={video.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              className={`studio-motion-thumb${isActive ? " is-active" : ""}`}
              onClick={() => goTo(index)}
            >
              <Image
                src={thumb(video.id)}
                alt={video.title}
                fill
                unoptimized
                className="object-cover"
                sizes="160px"
              />
              <span className="studio-motion-thumb-veil" />
              {isActive && (
                <motion.span
                  layoutId="studio-motion-active"
                  className="studio-motion-thumb-ring"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
