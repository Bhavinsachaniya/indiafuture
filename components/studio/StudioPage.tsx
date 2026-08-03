"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { StudioShowreel } from "@/components/studio/StudioShowreel";
import { StudioProcess } from "@/components/studio/StudioProcess";
import { StudioMotionShowcase } from "@/components/studio/StudioMotionShowcase";
import "./studio.css";

const CONTACT_HREF = "/contact";

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
          <Link href={CONTACT_HREF} className="nav-cta">
            <span className="nav-cta-full">Start a Conversation</span>
            <span className="nav-cta-short">Talk to us</span>
          </Link>
        </nav>
      </div>

      <section className="hero hero-compact">
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
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={viewport}>
            <Link href={CONTACT_HREF} className="btn-primary">
              Start a Conversation <ArrowIcon />
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="wrap st-sections-pad">
        <StudioShowreel />
      </div>

      <StudioProcess />

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
            <StudioMotionShowcase />
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
            <Link href={CONTACT_HREF} className="btn-primary">
              Start a Conversation <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
          <footer className="studio-footer">
            <div className="foot-row">
              <span>IndiaFutureAI Studio — a part of the IndiaFutureAI ecosystem.</span>
              <div className="foot-links">
                <a href="#work">Work</a>
                <a href="#capabilities">What We Do</a>
                <Link href="/">IndiaFutureAI.com</Link>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}
