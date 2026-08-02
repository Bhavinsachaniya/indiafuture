import { Suspense } from "react";
import Link from "next/link";
import { ArrowRight, Briefcase, GraduationCap } from "lucide-react";
import { SuccessStoriesSection } from "@/components/cohort/SuccessStoriesSection";

export default function CohortPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <Suspense
          fallback={
            <section className="bg-[#faf9f8] pt-28 pb-16 md:pt-32">
              <div className="container-x text-center text-ink-soft">Loading fellows…</div>
            </section>
          }
        >
          <SuccessStoriesSection />
        </Suspense>

        <section className="bg-[#faf9f8] pb-16 pt-2 md:pb-24 md:pt-4">
          <div className="container-x">
            <div className="mx-auto mb-8 max-w-2xl text-center md:mb-10">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                Next step
              </p>
              <h2 className="mt-3 font-display text-2xl font-medium tracking-[-0.02em] text-ink md:text-3xl">
                Found someone you like — or ready to become one of them?
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 md:gap-6">
              <Link
                href="/contact"
                className="group relative overflow-hidden rounded-[1.75rem] border border-border/70 bg-white p-7 shadow-[0_8px_28px_-18px_rgba(22,20,19,0.2)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_20px_40px_-22px_rgba(249,115,22,0.35)] md:p-8"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-soft text-brand">
                  <Briefcase className="h-5 w-5" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                  For brands &amp; teams
                </p>
                <h3 className="mt-2 font-display text-xl font-medium leading-snug tracking-[-0.02em] text-ink md:text-2xl">
                  Want to hire any of these?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-[15px]">
                  Looking for AI creators who already ship? Tell us who you need — we&apos;ll
                  connect you.
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand">
                  Talk to us
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>

              <Link
                href="/programs/ai-upskilling"
                className="group relative overflow-hidden rounded-[1.75rem] border border-ink/10 bg-ink p-7 text-cream shadow-[0_8px_28px_-18px_rgba(22,20,19,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-22px_rgba(249,115,22,0.45)] md:p-8"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand/25 blur-3xl"
                />
                <div className="relative z-10">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cream/10 text-brand">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                    For aspiring creators
                  </p>
                  <h3 className="mt-2 font-display text-xl font-medium leading-snug tracking-[-0.02em] md:text-2xl">
                    Wanna upskill with us to learn it all?
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/70 md:text-[15px]">
                    Join Creator Fellowship and build the same skills these fellows used to ship
                    their portfolios.
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cream">
                    Enroll here
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
