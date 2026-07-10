import { ArrowRight, Play, Sparkles } from "lucide-react";
import Link from "next/link";
import { HighlightText } from "./ui/HighlightText";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 bg-[#fdfaf5]">
      {/* Background Glows & Filter (Responsive for mobile & light mode optimized) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Grain overlay for texture */}
        <div className="absolute inset-0 z-10 opacity-[0.15] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxmaWx0ZXIgaWQ9Im4iPjxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjciIG51bU9jdGF2ZXM9IjIiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmZmIi8+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI24pIiBvcGFjaXR5PSIwLjM1Ii8+PC9zdmc+')]"></div>

        {/* Fiery Orbs */}
        <div className="absolute -top-[10%] -left-[20%] w-[120%] md:w-[60%] h-[60%] rounded-full bg-gradient-to-br from-[#FFB800] via-[#FF5C00] to-[#E91E63] blur-[100px] md:blur-[140px] opacity-[0.25] md:opacity-[0.18] mix-blend-multiply animate-pulse-slow" />
        <div className="absolute top-[30%] -right-[20%] w-[120%] md:w-[60%] h-[70%] rounded-full bg-gradient-to-tl from-[#FFD600] via-[#FF3D00] to-[#9C27B0] blur-[100px] md:blur-[140px] opacity-[0.25] md:opacity-[0.15] mix-blend-multiply" />
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
