"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Twitter, Youtube, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeUpVariant,
  staggerContainerVariant,
  staggerFastVariant,
  defaultViewport,
  springSoft,
} from "@/lib/motion";

const socials = [
  {
    href: "https://instagram.com/indiafuture.ai",
    label: "Instagram",
    Icon: Instagram,
  },
  {
    href: "https://x.com/indiafutureai",
    label: "X (Twitter)",
    Icon: Twitter,
  },
  {
    href: "https://youtube.com/@indiafuture_ai",
    label: "YouTube",
    Icon: Youtube,
  },
  {
    href: "https://www.linkedin.com/company/indiafutureai/",
    label: "LinkedIn",
    Icon: Linkedin,
  },
];

export const Footer = React.memo(function Footer() {
  return (
    <footer className="border-t border-border bg-ink text-cream">
      <div className="container-x mx-auto py-16">
        <motion.div
          className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]"
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <motion.div variants={fadeUpVariant} className="max-w-sm">
            <div className="flex items-center gap-2">
              <Image
                src="/favicon1.png"
                alt="IndiaFutureAI Logo"
                width={32}
                height={32}
                unoptimized
                className="object-contain rounded-full bg-white"
              />
              <span className="font-display text-2xl font-medium tracking-tight">
                IndiaFutureAI
              </span>
            </div>
            <p className="mt-6 text-[0.95rem] text-cream/60 leading-relaxed tracking-[-0.01em]">
              India&apos;s AI upskilling partner empowering young Indians; learn with us to win your
              career!
            </p>
            <motion.div
              className="mt-8 flex items-center gap-4"
              variants={staggerFastVariant}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
            >
              {socials.map(({ href, label, Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeUpVariant}
                  whileHover={{ y: -4, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  transition={springSoft}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-cream/70 hover:bg-[#f97316] hover:text-white hover:border-[#f97316]"
                >
                  <Icon className="w-4 h-4" />
                  <span className="sr-only">{label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={fadeUpVariant}>
            <h4 className="text-xs uppercase tracking-[0.14em] font-semibold text-brand mb-6">
              Programs
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  href="/programs/ai-upskilling"
                  className="text-cream/70 hover:text-brand transition-colors font-medium"
                >
                  AI Upskilling
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/masterclasses"
                  className="text-cream/70 hover:text-brand transition-colors font-medium"
                >
                  Masterclasses
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/workshops"
                  className="text-cream/70 hover:text-brand transition-colors font-medium"
                >
                  Automation Labs
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/custom"
                  className="text-cream/70 hover:text-brand transition-colors font-medium"
                >
                  Custom Programs
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeUpVariant}>
            <h4 className="text-xs uppercase tracking-[0.14em] font-semibold text-brand mb-6">
              Navigation
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-cream/70 hover:text-brand transition-colors font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/cohort"
                  className="text-cream/70 hover:text-brand transition-colors font-medium"
                >
                  Cohort
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-cream/70 hover:text-brand transition-colors font-medium"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-cream/70 hover:text-brand transition-colors font-medium"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div variants={fadeUpVariant}>
            <h4 className="text-xs uppercase tracking-[0.14em] font-semibold text-brand mb-6">
              Legal
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-cream/70 hover:text-cream transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-cream/70 hover:text-cream transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={defaultViewport}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p>
            © {new Date().getFullYear()} IndiaFutureAI. India&apos;s Practical AI Upskilling
            Partner.
          </p>
        </motion.div>
      </div>
    </footer>
  );
});
