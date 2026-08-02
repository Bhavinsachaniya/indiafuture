"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "./studio.css";

const CONTACT_HREF = "https://indiafutureai.com/contact/";

const ease = [0.16, 1, 0.3, 1] as const;

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease },
  },
};

const viewport = { once: true, amount: 0.14 };

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="white"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="white" width="18" height="18" aria-hidden>
      <path d="M4 2.5v11l10-5.5-10-5.5z" />
    </svg>
  );
}

export function StudioPage() {
  return (
    <div className="studio-page">
      <div className="nav-outer">
        <nav className="studio-nav">
          <a href="#top" className="brand" id="top">
            <svg className="h-[26px] w-[26px] shrink-0" viewBox="0 0 40 40" fill="none" aria-hidden>
              <path
                d="M6 6 L22 6 L10 20 L26 20 L8 34"
                stroke="#E8752E"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <circle cx="31" cy="10" r="3.2" fill="#1B1714" />
            </svg>
            <span className="brand-word">IndiaFutureAI</span>
            <span className="brand-tag">Studio</span>
          </a>
          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#capabilities">What We Do</a>
            <a href="#contact">Contact</a>
          </div>
          <a href={CONTACT_HREF} className="nav-cta">
            Start a Conversation
          </a>
        </nav>
      </div>

      <section className="hero">
        <div className="grid-mark gm-tl" aria-hidden>
          <span className="v" />
          <span className="h" />
          <span className="dot" />
        </div>
        <div className="grid-mark gm-tr" aria-hidden>
          <span className="v" />
          <span className="h" />
          <span className="dot" />
        </div>

        <div className="wrap">
          <motion.div
            className="hero-eyebrow"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            INDIAFUTUREAI STUDIO
          </motion.div>
          <motion.h1 variants={reveal} initial="hidden" whileInView="visible" viewport={viewport}>
            Your Creative Team,
            <br />
            <span className="hl">On Demand.</span>
          </motion.h1>
          <motion.p
            className="hero-stat"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Your brand deserves your vision. We handle the execution.
          </motion.p>
          <motion.p
            className="hero-copy"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            IndiaFutureAI Studio is the implementation arm of IndiaFutureAI — a creative team built
            to run your organic content and paid media, end to end, without adding headcount.
          </motion.p>
          <motion.a
            href={CONTACT_HREF}
            className="btn-primary"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            Start a Conversation <ArrowIcon />
          </motion.a>

          <motion.div
            className="hero-figure"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="hero-canvas">
              <div className="tag">
                <div className="k">Now Shipping</div>
                <div className="t">
                  Founder content, paid creative, brand design — one team, one thread.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="problem"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <p className="problem-lead">
            Great brands don&apos;t struggle with ideas.
            <br />
            They struggle with <span className="hl">execution</span>.
          </p>

          <div className="gap-diagram">
            <div className="gap-node">
              <span className="dot" />
              <span className="label">The Idea</span>
            </div>
            <div className="gap-track">
              <span className="gap-callout">Most teams stall here</span>
            </div>
            <div className="gap-node end">
              <span className="dot" />
              <span className="label">Shipped</span>
            </div>
          </div>

          <p className="problem-close">IndiaFutureAI Studio is the team built to close that gap.</p>
        </motion.div>
      </section>

      <section className="capabilities" id="capabilities">
        <div className="wrap">
          <motion.div
            className="cap-head"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="eyebrow">What We Do</div>
            <h2>Everything your brand needs to stay in motion.</h2>
            <p>
              One creative team, three disciplines, one point of contact — no briefs lost in
              translation, no handoffs between agencies.
            </p>
          </motion.div>
          <motion.div
            className="cap-cols"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="cap-col">
              <div className="name">Organic</div>
              <ul>
                <li>Reels</li>
                <li>Carousels</li>
                <li>Founder Content</li>
                <li>Social Campaigns</li>
              </ul>
            </div>
            <div className="cap-col">
              <div className="name">Performance</div>
              <ul>
                <li>Ad Creatives</li>
                <li>Video Ads</li>
                <li>Campaign Creatives</li>
                <li>Creative Testing</li>
              </ul>
            </div>
            <div className="cap-col">
              <div className="name">Design</div>
              <ul>
                <li>Brand Graphics</li>
                <li>Product Visuals</li>
                <li>Landing Pages</li>
                <li>Presentations</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="work" id="work">
        <div className="wrap">
          <motion.div
            className="work-head"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="eyebrow">Portfolio</div>
            <h2>Selected Work</h2>
          </motion.div>

          <motion.div
            className="motion-block"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="sub-label">Motion</div>
            <div className="motion-card">
              <div className="play">
                <PlayIcon />
              </div>
            </div>
            <div className="work-meta">
              <span className="name">Brand Alpha</span>
              <span className="cat">Founder Content — placeholder, replace with your reel</span>
            </div>

            <div className="motion-grid">
              <div>
                <div className="motion-card">
                  <div className="play">
                    <PlayIcon />
                  </div>
                </div>
                <div className="work-meta">
                  <span className="name">Studio Nine</span>
                  <span className="cat">Paid Ad Film</span>
                </div>
              </div>
              <div>
                <div className="motion-card">
                  <div className="play">
                    <PlayIcon />
                  </div>
                </div>
                <div className="work-meta">
                  <span className="name">Wheelhouse</span>
                  <span className="cat">Brand Film</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            style={{ marginTop: 90 }}
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="sub-label">Still</div>
            <div className="still-grid">
              {[
                ["Campaign Creative", "Meridian"],
                ["Product Visual", "Halcyon"],
                ["Social Campaign", "Norse & Co."],
                ["Landing Page", "Elevate"],
              ].map(([ph, name]) => (
                <div key={name}>
                  <div className="still-card">
                    <span className="ph">{ph}</span>
                  </div>
                  <div className="work-meta">
                    <span className="name">{name}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="closing" id="contact">
        <div className="wrap">
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={viewport}>
            <h2>Let&apos;s build something worth remembering.</h2>
            <p className="lead">
              For brands ready to stop explaining ideas and start shipping them.
            </p>
            <a href="https://indiafutureai.com/contact/" className="btn-primary">
              Start a Conversation <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
          <footer className="studio-footer">
            <div className="foot-row">
              <span>IndiaFutureAI Studio — a part of the IndiaFutureAI ecosystem.</span>
              <div className="foot-links">
                <a href="#work">Work</a>
                <a href="#capabilities">What We Do</a>
                <a href="https://indiafutureai.com/">IndiaFutureAI.com</a>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}
