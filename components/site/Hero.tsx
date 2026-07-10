import { ArrowRight, Play, Sparkles } from "lucide-react";
import Link from "next/link";
import { HighlightText } from "./ui/HighlightText";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 bg-[#fdfaf5]">
      {/* Background Glows & Filter (Strictly using the provided image for light mode) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 z-10 w-full h-full bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat opacity-[0.25] mix-blend-multiply filter contrast-125 saturate-150"></div>
      </div>

      <div className="container-x relative z-10 flex flex-col items-center justify-center text-center">
        {/* Pill */}
        <div className="inline-flex items-center justify-center gap-2 rounded-full bg-brand/10 text-brand px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-8">
          <Sparkles className="w-3 h-3" />
          Cohort 07
        </div>

        <h1 className="font-display text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] text-ink tracking-tight max-w-4xl">
          The studio where
          <span className="relative inline-block border border-brand bg-brand/5 text-ink px-4 py-1 mx-2 align-middle overflow-visible font-light">
            <span className="absolute -top-1 -left-1 w-2 h-2 bg-brand border border-brand"></span>
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-brand border border-brand"></span>
            <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-brand border border-brand"></span>
            <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-brand border border-brand"></span>
            builders
          </span>
          <br className="hidden md:block" />
          learn to ship with AI.
        </h1>

        {/* Description */}
        <p className="mt-8 text-lg text-ink-soft leading-relaxed max-w-2xl">
          Indiafuture isn't a course. It's a working studio — you implement production AI workflows
          alongside senior practitioners.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="glossy" className="rounded-xl px-10 py-6 text-lg shadow-xl" asChild>
            <Link href="/contact" className="group flex items-center gap-2">
              Join the next cohort
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Link
            href="/#method"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-white border border-ink/10 text-ink px-8 py-3.5 text-sm font-medium transition-all hover:bg-surface hover:-translate-y-0.5 shadow-sm w-full sm:w-auto"
          >
            <Play className="w-4 h-4 text-ink-soft group-hover:text-brand transition-colors" />
            How it works
          </Link>
        </div>

        {/* Stats Row */}
        <div className="mt-20 md:mt-32 pt-12 border-t border-ink/5 w-full max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            <div className="flex flex-col items-center">
              <span className="font-display text-4xl md:text-5xl text-ink">2,431+</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-ink-soft mt-2">
                Ships
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-display text-4xl md:text-5xl text-ink">97%</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-ink-soft mt-2">
                Ship Rate
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-display text-4xl md:text-5xl text-ink">40+</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-ink-soft mt-2">
                Mentors
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-display text-4xl md:text-5xl text-ink">12+</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-ink-soft mt-2">
                Sessions
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
