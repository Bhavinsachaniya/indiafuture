import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { HighlightText } from "@/components/ui/HighlightText";

const testimonials = [
  {
    id: 1,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces", // Placeholder avatar
    stars: 5,
    text: (
      <>
        "I run Oakcraft, a ₹100 cr ARR furniture business. A lot of my operations & processes at the
        factory and client dealing had been manual.{" "}
        <span className="font-semibold text-brand">
          India Future AI helped me automate these processes saving ₹1 cr+ every year.
        </span>
        "
      </>
    ),
    name: "Vishu Mittal",
    role: "Founder",
    linkedin: "https://www.linkedin.com/in/vishuoakcraft/",
    companyLogo: (
      <div className="flex flex-col items-start leading-none">
        <span className="font-bold text-ink tracking-tight text-lg">Oakcraft</span>
      </div>
    ),
    companyNameText: "Oakcraft",
  },
  {
    id: 2,
    avatar: "/Testimonials/KEshav Singla.png",
    stars: 5,
    text: (
      <>
        "I am blown away with the ease of process automations that India Future AI set up for my
        business. What was otherwise direct cost of ₹3 lac/pm is now{" "}
        <span className="font-semibold text-brand">reduced to ₹4,000/mo</span> leading to direct
        savings for the company."
      </>
    ),
    name: "Keshav Singla",
    role: "Founder CEO",
    linkedin: "https://www.linkedin.com/in/keshav-singla-gow/",
    companyLogo: (
      <div className="font-bold text-ink tracking-tight text-lg leading-tight">
        Grocery
        <br />
        <span className="text-brand">on Wheels</span>
      </div>
    ),
    companyNameText: "Grocery on Wheels",
  },
  {
    id: 3,
    avatar: "/Testimonials/harsh Mittal.png",
    stars: 5,
    text: (
      <>
        "I run a Proptech business that runs on traditional methods of outreach. I had an idea on
        how AI can automate lot of my marketing outreach but{" "}
        <span className="font-semibold text-brand">
          it is only through India Future AI that I could see the magic of it happening.
        </span>
        "
      </>
    ),
    name: "Harsh Mittal",
    role: "Director",
    companyLogo: (
      <div className="flex items-center gap-1.5">
        <span className="font-bold text-ink text-lg tracking-tight">Golden</span>
        <span className="font-bold text-brand text-lg tracking-tight">Key</span>
      </div>
    ),
    companyNameText: "GoldenKey",
  },
  {
    id: 4,
    avatar: "/Testimonials/Shrey Saxena.png",
    stars: 5,
    text: (
      <>
        "India Future AI has cracked ease of execution with their automations.{" "}
        <span className="font-semibold text-brand">
          A lot of our processes are now running automated without external intervention.
        </span>{" "}
        Away from costs it save, it gets us direct business."
      </>
    ),
    name: "Shrey Saxena",
    role: "Director",
    linkedin: "https://www.linkedin.com/in/shrenewable",
    companyLogo: (
      <div className="flex items-center gap-1.5">
        <span className="font-bold text-ink text-lg tracking-tight">Growdiesel</span>
      </div>
    ),
    companyNameText: "Growdiesel",
  },
];

export const Testimonials = React.memo(function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      className="py-24 bg-surface relative overflow-hidden font-sans selection:bg-brand/20 selection:text-brand"
      id="testimonials"
    >
      {/* Subtle dotted background pattern */}
      <div
        className="absolute bottom-0 left-0 right-0 h-96 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(0,0,0,0.5) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse at bottom, black 40%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at bottom, black 40%, transparent 70%)",
        }}
      />

      <div className="container-x relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-brand/40" />
            <span className="text-brand font-bold text-sm tracking-[0.2em] uppercase">
              Testimonials
            </span>
            <div className="h-[1px] w-12 bg-brand/40" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem]  text-ink tracking-tight leading-[1.1] mb-6 font-display">
            Loved by{" "}
            <HighlightText className="text-brand tracking-normal">
              Innovators.
            </HighlightText>{" "}
            Trusted by{" "}
            <HighlightText className="text-brand tracking-normal">
              Leaders.
            </HighlightText>
          </h2>

          <p className="text-ink-soft text-lg md:text-xl max-w-2xl mx-auto">
            Real stories from businesses that have transformed with our AI solutions.
          </p>
        </div>

        {/* Grid Area */}
        <div className="relative flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full">
            {testimonials.map((t, idx) => (
              <div
                key={t.id}
                className="bg-cream rounded-[2rem] p-8 lg:p-10 border border-ink/5 relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 hover:border-brand/30 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_40px_-12px_rgba(255,107,0,0.15)] flex flex-col"
              >
                {/* Large Background Quote */}
                <Quote
                  className="absolute top-8 right-8 w-24 h-24 text-ink/5 opacity-50 rotate-12"
                  fill="currentColor"
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Header: Avatar */}
                  <div className="mb-6 flex justify-between items-start">
                    <div>
                      <div className="w-20 h-20 rounded-full p-1 bg-cream shadow-lg shadow-brand/10 mb-4 inline-block relative overflow-hidden group-hover:shadow-brand/20 transition-shadow">
                        <img
                          src={t.avatar}
                          alt={t.name}
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>

                      {/* Stars */}
                      <div className="flex items-center gap-1">
                        {[...Array(t.stars)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-brand fill-brand" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-ink text-[1.05rem] leading-relaxed mb-10 flex-grow font-medium">
                    {t.text}
                  </p>

                  {/* Divider */}
                  <div className="h-[1px] w-full bg-gradient-to-r from-ink/10 via-ink/10 to-transparent mb-6" />

                  {/* Footer: Author & Company */}
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mt-auto pt-2">
                    <div>
                      <h4 className="font-bold text-ink text-[1.1rem] leading-none mb-1.5 flex items-center gap-2">
                        {t.name}
                        {t.linkedin && (
                          <a
                            href={t.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#0A66C2] hover:opacity-80 transition-opacity"
                            title="LinkedIn Profile"
                          >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                          </a>
                        )}
                      </h4>
                      <p className="text-ink-soft text-[0.85rem]">{t.role}</p>
                    </div>

                    {/* Company */}
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 flex items-center h-8">{t.companyLogo}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
