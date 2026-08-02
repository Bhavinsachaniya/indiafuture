import { Suspense } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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

        <section className="bg-background py-16 md:py-20">
          <div className="container-x">
            <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-12 text-center text-cream md:px-12 md:py-14">
              <div className="absolute left-1/2 top-0 h-48 w-[70%] -translate-x-1/2 rounded-full bg-brand/20 blur-[80px]" />
              <div className="relative z-10">
                <h2 className="font-display text-3xl font-medium tracking-[-0.02em] md:text-4xl">
                  Ready to write your success story?
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-cream/70 leading-relaxed">
                  Join the next Creator Fellowship cohort and build a portfolio that opens doors.
                </p>
                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-sm font-semibold text-ink transition-opacity hover:opacity-90"
                >
                  Talk to us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
