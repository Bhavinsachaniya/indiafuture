import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function CTA() {
  return (
    <section className="py-24">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-ink text-cream px-8 md:px-16 py-20 md:py-24 text-center">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-[600px] rounded-full bg-brand/40 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-5xl md:text-7xl leading-[1.02] max-w-3xl mx-auto">
              Stop watching tutorials. <span className="relative inline-block border border-brand bg-brand/5 text-white px-3 py-1 mx-2 align-middle not-italic"><span className="absolute -top-1 -left-1 w-2 h-2 bg-brand border border-brand"></span><span className="absolute -top-1 -right-1 w-2 h-2 bg-brand border border-brand"></span><span className="absolute -bottom-1 -left-1 w-2 h-2 bg-brand border border-brand"></span><span className="absolute -bottom-1 -right-1 w-2 h-2 bg-brand border border-brand"></span>Start shipping.</span>
            </h2>
            <p className="mt-6 text-cream/70 max-w-xl mx-auto text-lg">
              The next cohort opens in two weeks. Seats are capped so the reviews stay real.
            </p>
            <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-cream text-ink px-6 py-3.5 text-sm font-medium hover:-translate-y-0.5 transition-all">
              Apply for cohort 07 <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
