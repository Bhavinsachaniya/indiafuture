"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Footer = React.memo(function Footer() {
  return (
    <footer className="border-t border-border bg-ink text-cream">
      <div className="container-x mx-auto py-16">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <Image
                src="/favicon1.png"
                alt="IndiaFutureAI Logo"
                width={32}
                height={32}
                unoptimized
                className="object-contain rounded-full bg-white"
              />
              <span className="font-display text-2xl tracking-tight">IndiaFutureAI</span>
            </div>
            <p className="mt-6 text-sm text-cream/60 leading-relaxed">
              India&apos;s Practical AI Upskilling Partner. We believe AI should not just be
              understood—it should be used.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-brand mb-6">
              Programs
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  href="/programs/ai-upskilling"
                  className="text-cream/70 hover:text-brand transition-colors font-medium"
                >
                  8-Week AI Upskilling
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/upskilling"
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
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-brand mb-6">
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
                  href="/contact"
                  className="text-cream/70 hover:text-brand transition-colors font-medium"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-brand mb-6">
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
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/40">
          <p>
            © {new Date().getFullYear()} IndiaFutureAI. India&apos;s Practical AI Upskilling
            Partner.
          </p>
        </div>
      </div>
    </footer>
  );
});
