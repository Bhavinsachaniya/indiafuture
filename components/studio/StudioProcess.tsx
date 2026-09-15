"use client";

import Image from "next/image";

const FOUNDER_REEL_ID = "xMy4HEQOC44";
const FOUNDER_REEL_URL = `https://youtu.be/${FOUNDER_REEL_ID}`;

export function StudioProcess() {
  return (
    <section className="st-process">
      <h2>
        Great brands don&apos;t struggle with ideas.
        <br />
        They struggle with <em>execution</em>.
      </h2>

      <div className="st-process-divider">
        <span className="st-process-line" />
        <span className="st-process-label">Where most teams slow down</span>
        <span className="st-process-line" />
      </div>

      <div className="st-flow">
        <div className="st-flow-col">
          <span className="st-col-title">The Idea</span>
          <div className="st-idea-card">
            <div className="st-idea-icon" aria-hidden>
              <svg
                width="34"
                height="34"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3 11.2c.6.4 1 1.1 1 1.8v.5h4v-.5c0-.7.4-1.4 1-1.8A6 6 0 0 0 12 3z" />
              </svg>
            </div>
            <p>
              A spark of
              <br />
              possibility.
            </p>
          </div>
        </div>

        <span className="st-flow-arrow" aria-hidden>
          →
        </span>

        <div className="st-flow-col">
          <div className="st-stack" aria-hidden>
            <div className="st-stack-card st-briefs">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
                <path d="M14 3v5h5" />
              </svg>
              <span>Briefs</span>
            </div>
            <div className="st-stack-card st-revisions">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M21 12a9 9 0 1 1-3-6.7M21 3v6h-6" />
              </svg>
              <span>Revisions</span>
            </div>
            <div className="st-stack-card st-approvals">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
              <span>Approvals</span>
            </div>
          </div>
          <p className="st-caption-note">
            More handoffs. More delays.
            <br />
            Momentum lost.
          </p>
        </div>

        <span className="st-flow-arrow" aria-hidden>
          →
        </span>

        <div className="st-flow-col">
          <span className="st-col-title">Shipped</span>
          <div className="st-shipped-cards">
            <a
              href={FOUNDER_REEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="st-ship-card st-ship-card-link"
              aria-label="Watch founder reel on YouTube"
            >
              <div className="st-ship-media st-ship-reel">
                <Image
                  src={`https://img.youtube.com/vi/${FOUNDER_REEL_ID}/hqdefault.jpg`}
                  alt="Founder reel"
                  fill
                  unoptimized
                  className="st-ship-reel-img object-cover"
                />
                <span className="st-ship-reel-veil" aria-hidden />
                <span className="st-play-btn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </div>
              <div className="st-ship-caption">Founder Reel</div>
            </a>
            <div className="st-ship-card">
              <div className="st-ship-media st-ship-carousel">
                <span className="st-ship-num">01</span>
                <h5>Scaling AI teams with focus.</h5>
                <span className="st-ship-arrow">→</span>
              </div>
              <div className="st-ship-caption">Carousel Post</div>
            </div>
            <div className="st-ship-card">
              <div className="st-ship-media st-ship-landing">
                <span className="st-ship-bar">☰</span>
                <h5>AI systems that scale your business.</h5>
                <span className="st-book-btn">Book a call</span>
              </div>
              <div className="st-ship-caption">Landing Page</div>
            </div>
          </div>
        </div>
      </div>

      <p className="st-closer">
        IndiaFutureAI Studio closes the gap between vision and shipped work.
      </p>
    </section>
  );
}
