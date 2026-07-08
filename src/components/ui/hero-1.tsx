import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { LogoCloud } from "@/components/ui/logo-cloud-3";
import { Link } from "@tanstack/react-router";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-background pt-32 pb-24">
      {/* Grid / circuit background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(28 40% 70% / 0.18) 1px, transparent 1px), linear-gradient(to bottom, hsl(28 40% 70% / 0.18) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 90% 70% at 50% 40%, black 40%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 40%, black 40%, transparent 85%)",
        }}
      />
      {/* Corner circuit accents */}
      <svg
        aria-hidden
        className="pointer-events-none absolute left-8 top-24 -z-10 h-64 w-64 text-brand/25"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M0 60 H60 V0" />
        <path d="M0 120 H100 V40" />
        <circle cx="60" cy="0" r="2" fill="currentColor" />
        <circle cx="100" cy="40" r="2" fill="currentColor" />
      </svg>
      <svg
        aria-hidden
        className="pointer-events-none absolute right-8 top-32 -z-10 h-64 w-64 text-brand/25"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M200 60 H140 V0" />
        <path d="M200 120 H100 V40" />
        <circle cx="140" cy="0" r="2" fill="currentColor" />
        <circle cx="100" cy="40" r="2" fill="currentColor" />
      </svg>
      {/* Soft glow */}
      <div className="pointer-events-none absolute left-1/2 top-40 -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-brand-soft/70 blur-3xl" />

      <div className="relative container-x">
        <div className="mx-auto max-w-5xl text-center">
          {/* Eyebrow */}
          <p className="text-xs sm:text-sm font-medium tracking-[0.25em] text-brand uppercase">
            LEARN. &nbsp;BUILD. &nbsp;SHIP.
          </p>

          <h1 className="mt-8 font-display font-normal text-ink text-[clamp(2.5rem,4vw,5rem)] leading-[1.1] tracking-tight text-balance max-w-4xl mx-auto">
            Become The AI Builder That{" "}
            <br className="hidden md:block" />
            <span className="relative inline-block border border-brand bg-brand/5 text-ink px-3 py-1 mx-2 align-middle overflow-visible">
              <span className="absolute -top-1 -left-1 w-2 h-2 bg-brand border border-brand"></span>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-brand border border-brand"></span>
              <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-brand border border-brand"></span>
              <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-brand border border-brand"></span>
              Teams
            </span>{" "}
            Want To Hire!
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Join a working studio of practitioners implementing real AI workflows at Indiafuture.
          </p>

          {/* Avatars + count */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <div className="flex -space-x-2">
              {[
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=faces",
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=faces",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="h-8 w-8 rounded-full border-2 border-background object-cover"
                />
              ))}
            </div>
            <p className="text-sm text-ink">
              <span className="font-semibold text-brand">2,400+</span>{" "}
              <span className="text-ink-soft">builders shipping in Indiafuture cohorts</span>
            </p>
          </div>

          {/* CTA */}
          <div className="mt-10 flex justify-center">
            <Button
              size="lg"
              className={cn(
                "group h-14 rounded-md px-8 text-base font-medium text-white",
                "bg-gradient-to-b from-[oklch(0.72_0.19_42)] to-[oklch(0.58_0.19_42)]",
                "shadow-[0_10px_30px_-8px_oklch(0.62_0.19_42/0.55)]",
                "hover:from-[oklch(0.74_0.19_42)] hover:to-[oklch(0.60_0.19_42)]",
                "hover:-translate-y-0.5 transition-all",
              )}
              asChild
            >
              <Link to="/contact">
                Start Journey
                <ArrowRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>
        </div>
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
              <span key={i} className="text-lg md:text-xl font-display text-ink font-medium tracking-tight">
                {company}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
