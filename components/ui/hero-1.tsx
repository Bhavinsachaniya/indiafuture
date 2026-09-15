"use client";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { HighlightText } from "@/components/ui/HighlightText";
import Image from "next/image";
import { motion } from "framer-motion";

const easeOut = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-background min-h-[calc(100vh-180px)] flex flex-col">
      {/* Grid / circuit background */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        animate={{ backgroundPosition: ["0px 0px", "56px 56px"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(28 40% 70% / 0.18) 1px, transparent 1px), linear-gradient(to bottom, hsl(28 40% 70% / 0.18) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 90% 70% at 50% 40%, black 40%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 40%, black 40%, transparent 85%)",
        }}
      />

      {/* Floating orbs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-[12%] top-[28%] -z-10 h-40 w-40 rounded-full bg-brand/10 blur-3xl"
        animate={{ y: [0, -18, 0], x: [0, 10, 0], opacity: [0.45, 0.75, 0.45] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[10%] top-[38%] -z-10 h-52 w-52 rounded-full bg-brand-soft/80 blur-3xl"
        animate={{ y: [0, 22, 0], x: [0, -14, 0], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />

      {/* Corner circuit accents */}
      <motion.svg
        aria-hidden
        className="pointer-events-none absolute left-8 top-24 -z-10 h-64 w-64 text-brand/25"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: easeOut }}
      >
        <motion.path
          d="M0 60 H60 V0"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, ease: easeOut, delay: 0.2 }}
        />
        <motion.path
          d="M0 120 H100 V40"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.6, ease: easeOut, delay: 0.35 }}
        />
        <motion.circle
          cx="60"
          cy="0"
          r="2"
          fill="currentColor"
          animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.4, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.circle
          cx="100"
          cy="40"
          r="2"
          fill="currentColor"
          animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.4, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        />
      </motion.svg>
      <motion.svg
        aria-hidden
        className="pointer-events-none absolute right-8 top-32 -z-10 h-64 w-64 text-brand/25"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: easeOut, delay: 0.15 }}
      >
        <motion.path
          d="M200 60 H140 V0"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, ease: easeOut, delay: 0.3 }}
        />
        <motion.path
          d="M200 120 H100 V40"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.6, ease: easeOut, delay: 0.45 }}
        />
        <motion.circle
          cx="140"
          cy="0"
          r="2"
          fill="currentColor"
          animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.4, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        />
        <motion.circle
          cx="100"
          cy="40"
          r="2"
          fill="currentColor"
          animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.4, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
        />
      </motion.svg>

      {/* Soft glow */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-40 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-brand-soft/70 blur-3xl"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.55, 0.85, 0.55],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative container-x my-auto pt-32 pb-12">
        <motion.div
          className="mx-auto max-w-5xl text-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={item}
            className="text-[13px] sm:text-[14px] font-semibold tracking-[0.18em] text-brand uppercase"
          >
            Learn · Build · Win
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-7 mx-auto max-w-5xl font-display font-medium text-ink text-[clamp(1.25rem,calc(0.55rem+4.2vw),5.625rem)] leading-[1.12] tracking-[-0.025em]"
          >
            <span className="block whitespace-nowrap">India&apos;s AI Upskilling Partner</span>
            <span className="block whitespace-nowrap">
              For the{" "}
              <HighlightText className="text-ink font-medium tracking-[-0.025em]">
                Future
              </HighlightText>
              , that is Today!
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-7 max-w-2xl text-lg md:text-xl leading-[1.7] text-ink-soft font-normal tracking-[-0.01em]"
          >
            Empowering professionals, institutions, and organizations with practical AI skills. We
            turn learning into opportunities, careers, and lasting impact.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <div className="flex -space-x-2 shrink-0">
              {[
                "/avatars/1.png",
                "/avatars/2.png",
                "/avatars/3.png",
                "/avatars/4.png",
                "/avatars/5.png",
              ].map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.85 + i * 0.08, duration: 0.45, ease: easeOut }}
                >
                  <Image
                    src={src}
                    alt=""
                    width={32}
                    height={32}
                    unoptimized
                    className="h-8 w-8 rounded-full border-2 border-background object-cover"
                  />
                </motion.div>
              ))}
            </div>
            <p className="text-sm text-ink text-center sm:text-left max-w-[280px] sm:max-w-none">
              <HighlightText className="font-semibold text-brand">2000+</HighlightText>{" "}
              <span className="text-ink-soft">Indians upskilled with AI via our programs</span>
            </p>
          </motion.div>

          <motion.div variants={item} className="mt-6 flex justify-center">
            <motion.div whileHover={{ y: -3 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/contact"
                className={cn(
                  "inline-flex items-center justify-center whitespace-nowrap",
                  "group h-14 rounded-md px-8 text-base font-medium text-white",
                  "bg-gradient-to-b from-[oklch(0.72_0.19_42)] to-[oklch(0.58_0.19_42)]",
                  "shadow-[0_10px_30px_-8px_oklch(0.62_0.19_42/0.55)]",
                  "hover:from-[oklch(0.74_0.19_42)] hover:to-[oklch(0.60_0.19_42)]",
                  "transition-colors",
                )}
              >
                Start Journey
                <ArrowRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const companies = [
  "Meridian Schools",
  "Arcline Capital",
  "Helix Health",
  "Brighton Institute",
  "Orbital Labs",
  "Crestwood College",
  "Northfield",
];

export function LogosSection() {
  return (
    <section className="border-y border-border bg-surface/60 overflow-hidden py-8 flex">
      <div className="flex items-center animate-marquee whitespace-nowrap w-max shrink-0">
        {[...Array(4)].map((_, blockIdx) => (
          <div key={blockIdx} className="flex items-center gap-12 shrink-0 pr-12">
            {companies.map((company, i) => (
              <span
                key={i}
                className="text-lg md:text-xl font-display text-ink font-medium tracking-tight"
              >
                {company}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
