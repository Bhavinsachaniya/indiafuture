import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, GraduationCap, Landmark, Briefcase, Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import { HighlightText } from "../ui/HighlightText";

const testimonials = [
  {
    id: 1,
    avatar: "https://ui-avatars.com/api/?name=Vishu+Mittal&background=f97316&color=fff",
    name: "Vishu Mittal",
    role: "Founder, Oakcraft",
    text: "I run Oakcraft, a ₹100 cr ARR furniture business. A lot of my operations & processes at the factory and client dealing had been manual. India Future AI helped me automate these processes saving ₹1 cr+ every year.",
    badgeIcon: <Briefcase className="w-4 h-4" />,
    badgeText: "Industry Leader",
    linkedin: "https://www.linkedin.com/in/vishuoakcraft/",
  },
  {
    id: 2,
    avatar: "/Testimonials/keshav-singla.png",
    name: "Keshav Singla",
    role: "Founder CEO, Grocery on Wheels",
    text: "I am blown away with the ease of process automations that India Future AI set up for my business. What was otherwise direct cost of ₹3 lac/pm is now reduced to ₹4,000/mo leading to direct savings for the company.",
    badgeIcon: <Briefcase className="w-4 h-4" />,
    badgeText: "Industry Leader",
    linkedin: "https://www.linkedin.com/in/keshav-singla-gow/",
  },
  {
    id: 3,
    avatar: "/Testimonials/harsh-mittal.png",
    name: "Harsh Mittal",
    role: "Director, GoldenKey",
    text: "I run a Proptech business that runs on traditional methods of outreach. I had an idea on how AI can automate lot of my marketing outreach but it is only through India Future AI that I could see the magic of it happening.",
    badgeIcon: <Briefcase className="w-4 h-4" />,
    badgeText: "Industry Leader",
  },
  {
    id: 4,
    avatar: "/Testimonials/shrey-saxena.png",
    name: "Shrey Saxena",
    role: "Director, Growdiesel",
    text: "India Future AI has cracked ease of execution with their automations. A lot of our processes are now running automated without external intervention. Away from costs it save, it gets us direct business.",
    badgeIcon: <Briefcase className="w-4 h-4" />,
    badgeText: "Industry Leader",
    linkedin: "https://www.linkedin.com/in/shrenewable",
  },
];

export const Testimonials = React.memo(function Testimonials() {
  return (
    <section className="py-24 bg-[#faf9f8] relative overflow-hidden" id="testimonials">
      <div className="container-x relative z-10 mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <p className="text-xs uppercase tracking-[0.2em] text-brand font-semibold mb-4 flex items-center justify-center gap-4">
              <span className="w-12 h-[1px] bg-brand/40" /> What Industry says about us{" "}
              <span className="w-12 h-[1px] bg-brand/40" />
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#161413] tracking-tight leading-[1.1] mb-6 font-display">
            Built with <HighlightText className="text-brand">Learners</HighlightText>.{" "}
            <br className="md:hidden" />
            Trusted by <HighlightText className="text-brand">Leaders</HighlightText>.
          </h2>

          <p className="text-[#161413]/70 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Hear directly from Leaders building India who trust IndiaFutureAI.
          </p>
        </div>
      </div>

      {/* Marquee Area */}
      <div className="relative flex overflow-hidden py-4 w-full">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-[#faf9f8] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-[#faf9f8] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-6 px-3">
          {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((t, idx) => (
            <div
              key={idx}
              className="w-[350px] md:w-[400px] shrink-0 bg-white rounded-3xl p-8 border border-[#161413]/5 relative overflow-hidden shadow-sm flex flex-col transition-shadow hover:shadow-md"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-[#fff5ec] fill-[#fff5ec]" />

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={64}
                  height={64}
                  unoptimized
                  className="w-16 h-16 object-cover rounded-full"
                />
                <div>
                  {t.linkedin ? (
                    <a
                      href={t.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#161413] text-lg leading-tight hover:text-[#f97316] transition-colors inline-block"
                    >
                      {t.name}
                    </a>
                  ) : (
                    <h4 className="font-bold text-[#161413] text-lg leading-tight">{t.name}</h4>
                  )}
                  <p className="text-[#161413]/60 text-sm leading-tight mt-1">{t.role}</p>
                </div>
              </div>

              <p className="text-[#161413]/80 text-[15px] leading-relaxed mb-8 flex-grow font-medium relative z-10">
                {t.text}
              </p>

              <div className="mt-auto inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fff5ec] text-[#f97316] text-sm font-bold w-fit border border-[#f97316]/10">
                {t.badgeIcon}
                {t.badgeText}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Area */}
      <div className="container-x relative z-10 mx-auto px-4 md:px-8 mt-16 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-[#161413]/70 font-medium mb-4 text-sm md:text-base">
          <Users className="w-5 h-5 text-[#f97316]" />
          <span>
            Join a community of <HighlightText className="text-brand">2,000+</HighlightText>{" "}
            learners, <HighlightText className="text-brand"> 20+ </HighlightText> institutions!
          </span>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-[#f97316] font-bold hover:opacity-80 transition-opacity"
        >
          Join the Journey <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
});
