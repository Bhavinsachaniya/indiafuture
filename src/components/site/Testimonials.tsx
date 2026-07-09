import React from "react";
import { Quote, GraduationCap, Landmark, Briefcase, Users, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { HighlightText } from "../ui/HighlightText";

const testimonials = [
  {
    id: 1,
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=faces",
    name: "Ananya Singh",
    role: "AI Program Learner",
    text: "The program gave me the skills and confidence to build real AI projects. I landed my first internship because of my portfolio.",
    badgeIcon: <GraduationCap className="w-4 h-4" />,
    badgeText: "Student",
  },
  {
    id: 2,
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=faces",
    name: "Dr. Rakesh Verma",
    role: (
      <>
        Dean, Tech & Innovation
        <br />
        XYZ Institute of Technology
      </>
    ),
    text: "IndiaFutureAI helped us set up our AI Lab and train faculty. Our students are now building solutions they were only learning about before.",
    badgeIcon: <Landmark className="w-4 h-4" />,
    badgeText: "Academic Leader",
  },
  {
    id: 3,
    avatar:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=faces",
    name: "Rohit Mehra",
    role: (
      <>
        Head of Operations
        <br />
        BrightEdge Solutions
      </>
    ),
    text: "The workshops helped our team automate key workflows and work smarter every day. The impact on productivity has been immediate.",
    badgeIcon: <Briefcase className="w-4 h-4" />,
    badgeText: "Organization Partner",
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
              <span className="w-12 h-[1px] bg-brand/40" /> THE COMMUNITY{" "}
              <span className="w-12 h-[1px] bg-brand/40" />
            </p>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#161413] tracking-tight leading-[1.1] mb-6 font-display">
            Built with <HighlightText className="text-brand">Learners</HighlightText>. Trusted by{" "}
            <HighlightText className="text-brand">Institutions</HighlightText>.
          </h2>

          <p className="text-[#161413]/70 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            Hear from learners, educators, and organizations building with AI.
          </p>
        </div>
      </div>

      {/* Marquee Area */}
      <div className="relative flex overflow-hidden py-4 w-full">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-[#faf9f8] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-[#faf9f8] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-6 px-3">
          {[...testimonials, ...testimonials, ...testimonials].map((t, idx) => (
            <div
              key={idx}
              className="w-[350px] md:w-[400px] shrink-0 bg-white rounded-3xl p-8 border border-[#161413]/5 relative overflow-hidden shadow-sm flex flex-col transition-shadow hover:shadow-md"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-[#fff5ec] fill-[#fff5ec]" />

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <img src={t.avatar} alt={t.name} className="w-16 h-16 object-cover rounded-full" />
                <div>
                  <h4 className="font-bold text-[#161413] text-lg leading-tight">{t.name}</h4>
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
            Join a growing community of 500+ learners, 20+ institutions & forward-thinking teams.
          </span>
        </div>

        <Link
          to="/contact"
          className="inline-flex items-center gap-2 text-[#f97316] font-bold hover:opacity-80 transition-opacity"
        >
          Join the Journey <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
});
