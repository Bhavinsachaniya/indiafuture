import React from "react";
import { ArrowRight, Rocket, Users, Briefcase, Award } from "lucide-react";
import Link from "next/link";
import { HighlightText } from "@/components/ui/HighlightText";

export const CTA = React.memo(function CTA() {
  return (
    <section className="py-24 bg-[#faf9f8]">
      <div className="container-x mx-auto">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#161413] text-white px-6 md:px-12 py-16 md:py-20 text-center shadow-xl">
          {/* Glowing orb effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[250px] w-[80%] max-w-[600px] rounded-[100%] bg-[#f97316] opacity-20 blur-[80px]" />

          {/* SVG Concentric Circles Background */}
          <div className="absolute bottom-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <svg
              viewBox="0 0 1000 600"
              className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[100%] opacity-[0.15]"
            >
              <circle cx="200" cy="500" r="200" fill="none" stroke="#f97316" strokeWidth="2" />
              <circle cx="200" cy="500" r="300" fill="none" stroke="#f97316" strokeWidth="1" />
              <circle cx="200" cy="500" r="400" fill="none" stroke="#f97316" strokeWidth="0.5" />
            </svg>
            <svg
              viewBox="0 0 1000 600"
              className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[100%] opacity-[0.15]"
            >
              <circle cx="800" cy="500" r="200" fill="none" stroke="#f97316" strokeWidth="2" />
              <circle cx="800" cy="500" r="300" fill="none" stroke="#f97316" strokeWidth="1" />
              <circle cx="800" cy="500" r="400" fill="none" stroke="#f97316" strokeWidth="0.5" />
            </svg>
          </div>

          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] max-w-3xl mx-auto mb-6">
              Stop reading about AI from afar!
              <br />
              Start using it to make{" "}
              <HighlightText className="text-white !bg-[#f97316]/10 !border-[#f97316]">
                REAL MONEY
              </HighlightText>
            </h2>
            <p className="mt-6 text-white/70 max-w-xl mx-auto text-lg md:text-xl font-light">
              Join our next Upskilling Fellowship for Professionals to advance your career and make
              real money
            </p>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12 relative">
              {/* Vertical dividers hidden on small screens */}
              <div className="hidden md:block absolute top-1/2 left-1/4 -translate-y-1/2 w-[1px] h-12 bg-white/10"></div>
              <div className="hidden md:block absolute top-1/2 left-2/4 -translate-y-1/2 w-[1px] h-12 bg-white/10"></div>
              <div className="hidden md:block absolute top-1/2 left-3/4 -translate-y-1/2 w-[1px] h-12 bg-white/10"></div>

              <div className="flex flex-col items-center text-center gap-3">
                <Rocket className="w-8 h-8 text-[#f97316]" strokeWidth={1.5} />
                <span className="text-white/80 text-sm font-medium">Hands-on Learning</span>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <Users className="w-8 h-8 text-[#f97316]" strokeWidth={1.5} />
                <span className="text-white/80 text-sm font-medium">10k+ active community</span>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <Briefcase className="w-8 h-8 text-[#f97316]" strokeWidth={1.5} />
                <span className="text-white/80 text-sm font-medium">Placement Opportunities</span>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <Award className="w-8 h-8 text-[#f97316]" strokeWidth={1.5} />
                <span className="text-white/80 text-sm font-medium">Trusted by 1000+ Learners</span>
              </div>
            </div>

            <Link
              href="https://pages.razorpay.com/pl_TCX5i1BuJ6T8yV/view"
              className="inline-flex items-center gap-3 rounded-full bg-white text-[#161413] px-8 py-4 text-base font-bold hover:bg-[#f9f8f6] transition-colors shadow-lg"
            >
              Join the next cohort
              <ArrowRight className="h-4 w-4" />
            </Link>

            <p className="mt-6 text-white/40 text-[13px] font-medium tracking-wide">
              Next Fellowship Cohort &bull; Seats are limited
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});
