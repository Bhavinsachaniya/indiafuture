"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { HighlightText } from "@/components/ui/HighlightText";

export function GalleryCTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -left-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute -right-[10%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-[100px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-ink text-cream px-8 md:px-16 py-20 md:py-24 text-center shadow-2xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.2 }}
            className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-brand/20 text-brand"
          >
            <Play className="h-10 w-10 ml-1" />
          </motion.div>

          <h2 className="mb-6 font-display text-5xl md:text-7xl leading-[1.02] max-w-3xl mx-auto text-cream">
            Ready to Create Videos <br className="hidden md:block" />
            <HighlightText className="text-brand">Like These?</HighlightText>
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-cream/70 md:text-xl">
            Join our AI Creator Program and start building professional AI-generated videos from day
            one. No prior experience required.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="group relative flex h-14 w-full items-center justify-center gap-2 rounded-full bg-brand px-8 text-base font-semibold text-white shadow-lg transition-all hover:bg-brand/90 hover:-translate-y-0.5 sm:w-auto">
              Enroll Now
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="flex h-14 w-full items-center justify-center rounded-full border border-cream/20 bg-cream/10 px-8 text-base font-medium text-cream backdrop-blur-md transition-all hover:bg-cream/20 sm:w-auto hover:-translate-y-0.5">
              Talk to Mentor
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
