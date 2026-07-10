"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, CalendarDays, Clock, MapPin, Ticket } from "lucide-react";
import Link from "next/link";
import { HighlightText } from "@/components/ui/HighlightText";

export function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-ink text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand/10 rounded-full blur-[150px]" />
      </div>

      <div className="container-x relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-display text-5xl md:text-7xl leading-[1.05] mb-8">
            Start Your <br className="md:hidden" />
            <HighlightText>AI Journey</HighlightText> Today
          </h2>
          <p className="text-xl md:text-2xl text-cream/70 leading-relaxed mb-12 max-w-2xl mx-auto">
            Join the next cohort of builders. Stop watching from the sidelines and start mastering
            the tools of the future.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-brand text-white px-8 py-4 text-lg font-medium transition-all hover:bg-brand/90 hover:-translate-y-0.5 shadow-lg shadow-brand/20 overflow-hidden w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2">
                Apply Now
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <button className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 text-white px-8 py-4 text-lg font-medium transition-all hover:bg-white/10 hover:-translate-y-0.5 w-full sm:w-auto">
              <Download className="w-5 h-5 text-cream/70 group-hover:text-brand transition-colors" />
              Download Brochure
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function StickyWidget() {
  return (
    <div className="hidden xl:block w-[320px] shrink-0 relative z-50">
      <div className="sticky top-32 bg-white border border-ink/10 rounded-3xl p-6 shadow-2xl shadow-ink/5">
        <div className="flex items-center justify-between mb-6 pb-6 border-b border-ink/10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-soft mb-1">
              Status
            </p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="font-medium text-ink">Accepting Apps</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-soft mb-1">
              Seats
            </p>
            <p className="font-medium text-ink">12 Remaining</p>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          {[
            { icon: CalendarDays, label: "Next Cohort", value: "Feb 15, 2025" },
            { icon: Clock, label: "Duration", value: "8 Weeks" },
            { icon: MapPin, label: "Mode", value: "Online / Hybrid" },
            { icon: Ticket, label: "Certificate", value: "Included" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-ink-soft shrink-0">
                <item.icon className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
                  {item.label}
                </p>
                <p className="font-medium text-ink">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/contact"
          className="w-full flex items-center justify-center gap-2 rounded-xl bg-brand text-white px-6 py-4 font-medium transition-all hover:bg-brand/90 hover:-translate-y-0.5 shadow-lg shadow-brand/20 mb-3 group"
        >
          Apply Now
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <button className="w-full flex items-center justify-center gap-2 rounded-xl bg-surface border border-ink/10 text-ink px-6 py-4 font-medium transition-all hover:bg-surface/50 mb-6">
          <Download className="w-4 h-4 text-ink-soft" />
          Get Syllabus
        </button>

        <p className="text-xs text-center text-ink-soft leading-relaxed">
          Need corporate pricing?{" "}
          <Link href="/contact" className="text-brand hover:underline">
            Contact our sales team
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
