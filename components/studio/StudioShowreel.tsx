"use client";

import { useRef, useState } from "react";
import Image from "next/image";

const PLAYLIST_URL = "https://youtube.com/playlist?list=PLWxuGuwEp0ek&si=6_3ShbceA8WylqOO";

const REELS = [
  {
    id: "studio1",
    image: "/Studio/studio1.png",
    label: "Founder Story",
    title: "Building what matters.",
  },
  {
    id: "studio2",
    image: "/Studio/studio2.png",
    label: "Paid Campaign",
    title: "Ideas that move markets.",
  },
  {
    id: "studio3",
    image: "/Studio/studio3.png",
    label: "Brand Film",
    title: "Branding with depth.",
  },
] as const;

function PlaySvg({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

export function StudioShowreel() {
  const [active, setActive] = useState(1);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const select = (index: number) => {
    setActive(index);
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const card = scroller.children[index] as HTMLElement | undefined;
    card?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  };

  return (
    <section className="st-showreel" id="showreel">
      <div className="st-showreel-inner">
        <div className="st-showreel-copy">
          <span className="st-eyebrow">The Studio, in Motion</span>
          <h2>Showreel</h2>
          <p>A glimpse of ideas in action — crafted for founders, built to perform.</p>
          <div className="st-tag-row">
            <span>Founder Content</span>
            <span>Paid Creative</span>
            <span>Brand Design</span>
          </div>
          <a href={PLAYLIST_URL} target="_blank" rel="noopener noreferrer" className="st-sound-btn">
            <span className="st-play-circle">
              <PlaySvg />
            </span>
            View with sound ↗
          </a>

          <div className="st-thumb-strip" role="tablist" aria-label="Showreel stills">
            {REELS.map((reel, index) => (
              <button
                key={reel.id}
                type="button"
                role="tab"
                aria-selected={index === active}
                className={`st-thumb${index === active ? " is-active" : ""}`}
                onClick={() => select(index)}
              >
                <Image
                  src={reel.image}
                  alt={reel.title}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </button>
            ))}
          </div>
          <div className="st-dots">
            {REELS.map((reel, index) => (
              <button
                key={reel.id}
                type="button"
                className={`st-dot${index === active ? " is-active" : ""}`}
                onClick={() => select(index)}
                aria-label={`Show ${reel.title}`}
              />
            ))}
          </div>
        </div>

        <div className="st-reel-cards">
          <div
            ref={scrollerRef}
            className="st-reel-cards-row"
            onScroll={(event) => {
              const el = event.currentTarget;
              const cardWidth = el.scrollWidth / (REELS.length + 1);
              const next = Math.round(el.scrollLeft / Math.max(cardWidth, 1));
              const clamped = Math.min(Math.max(next, 0), REELS.length - 1);
              if (clamped !== active) setActive(clamped);
            }}
          >
            {REELS.map((reel, index) => (
              <ReelCard
                key={reel.id}
                reel={reel}
                featured={index === active}
                onSelect={() => select(index)}
              />
            ))}
            <div className="st-reel-card st-bg-landing">
              <div className="st-landing-inner">
                <div>
                  <span className="st-landing-top">Landing Page</span>
                  <h3>
                    A better way
                    <br className="st-landing-break" /> to work with <em>AI.</em>
                  </h3>
                  <p>IndiaFutureAI Studio helps founders and enterprises build what&apos;s next.</p>
                  <span className="st-cta-pill">Book a Consultation ↗</span>
                </div>
                <div>
                  <div className="st-logos-row">
                    <span>Trusted by innovative teams</span>
                  </div>
                  <div className="st-logos-row st-logos-brands">
                    <span>Zerodha</span>
                    <span>ramp⚡</span>
                    <span>◎CRED</span>
                    <span>slice</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ReelCard({
  reel,
  featured = false,
  onSelect,
}: {
  reel: (typeof REELS)[number];
  featured?: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      className={`st-reel-card${featured ? " is-featured" : ""}`}
      onClick={onSelect}
    >
      <Image
        src={reel.image}
        alt=""
        fill
        unoptimized
        className="st-reel-card-img object-cover"
        aria-hidden
      />
      <span className="st-reel-card-veil" />
      <div className="st-card-top">
        <span className="st-card-label">{reel.label}</span>
        <h3>{reel.title}</h3>
      </div>
    </button>
  );
}
