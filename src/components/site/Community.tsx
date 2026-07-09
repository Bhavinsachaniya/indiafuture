import React from "react";
import { Users, MessageCircle, Briefcase, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUpVariant, strictViewport } from "@/lib/motion";
import { HighlightText } from "../ui/HighlightText";

export const Community = React.memo(function Community() {
  return (
    <section id="community" className="py-24 bg-[#faf9f8] relative overflow-hidden">
      <div className="container-x relative z-10 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-brand font-semibold mb-4 flex items-center justify-center gap-4">
            <span className="w-12 h-[1px] bg-brand/40" /> THE COMMUNITY{" "}
            <span className="w-12 h-[1px] bg-brand/40" />
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-[#161413] text-balance max-w-4xl mx-auto mb-6">
            The learning ends.
            <br />
            The
            <HighlightText>community</HighlightText>
            doesn't.
          </h2>
          <p className="text-lg md:text-xl text-[#161413]/70 font-medium">
            Stay connected. Keep building. Grow together.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6 mb-12">
          {/* Card 1 */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={strictViewport}
            className="bg-white rounded-[2rem] p-8 border border-[#161413]/5 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow flex flex-col overflow-hidden relative min-h-[400px]"
          >
            <div className="w-12 h-12 rounded-full border border-[#f97316]/20 flex items-center justify-center text-[#f97316] mb-6 shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-display text-2xl mb-4 text-[#161413]">Build Together</h3>
            <div className="w-6 h-[2px] bg-[#f97316] mb-4 shrink-0"></div>
            <p className="text-[15px] leading-relaxed text-[#161413]/70 mb-12 relative z-10">
              Connect with learners, creators, and AI practitioners building real projects.
            </p>
            <div className="mt-auto relative w-full h-[140px] flex items-end justify-center pointer-events-none">
              <Graphic1 />
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={strictViewport}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-[2rem] p-8 border border-[#161413]/5 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow flex flex-col overflow-hidden relative min-h-[400px]"
          >
            <div className="w-12 h-12 rounded-full border border-[#f97316]/20 flex items-center justify-center text-[#f97316] mb-6 shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <h3 className="font-display text-2xl mb-4 text-[#161413]">Learn Together</h3>
            <div className="w-6 h-[2px] bg-[#f97316] mb-4 shrink-0"></div>
            <p className="text-[15px] leading-relaxed text-[#161413]/70 mb-12 relative z-10">
              Share ideas, get feedback, and keep improving with an active community.
            </p>
            <div className="mt-auto relative w-full h-[140px] flex items-end justify-center pointer-events-none">
              <Graphic2 />
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={strictViewport}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-[2rem] p-8 border border-[#161413]/5 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow flex flex-col overflow-hidden relative min-h-[400px]"
          >
            <div className="w-12 h-12 rounded-full border border-[#f97316]/20 flex items-center justify-center text-[#f97316] mb-6 shrink-0">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="font-display text-2xl mb-4 text-[#161413]">Grow Together</h3>
            <div className="w-6 h-[2px] bg-[#f97316] mb-4 shrink-0"></div>
            <p className="text-[15px] leading-relaxed text-[#161413]/70 mb-12 relative z-10">
              Discover internships, freelance opportunities, collaborations, and career connections.
            </p>
            <div className="mt-auto relative w-full h-[140px] flex items-end justify-center pointer-events-none">
              <Graphic3 />
            </div>
          </motion.div>
        </div>

        <div className="flex items-center justify-center gap-2 text-[15px] text-[#161413]/70">
          <Heart className="w-5 h-5 text-[#f97316]" />
          <span>A community of curious minds building the future with AI.</span>
        </div>
      </div>
    </section>
  );
});

/* --- Graphics --- */

function Graphic1() {
  return (
    <div className="relative w-full h-full max-w-[240px]">
      {/* Dashed lines connecting nodes */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 240 140" fill="none">
        <path
          d="M60 40 Q150 -10 200 80"
          stroke="#f97316"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          strokeOpacity="0.4"
        />
        <path
          d="M60 100 Q140 120 200 80"
          stroke="#f97316"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          strokeOpacity="0.4"
        />
        <path
          d="M60 40 L60 100"
          stroke="#f97316"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          strokeOpacity="0.2"
        />
      </svg>

      {/* Top Left Profile Pill */}
      <div className="absolute top-[10px] left-[0px] w-28 bg-[#fff5ec] rounded-lg shadow-sm border border-[#f97316]/10 flex items-center p-1.5 gap-2">
        <AvatarIcon />
        <div className="flex flex-col gap-1.5 w-full pr-2">
          <div className="w-full h-1.5 bg-[#f97316]/30 rounded-full"></div>
          <div className="w-2/3 h-1.5 bg-[#f97316]/15 rounded-full"></div>
        </div>
      </div>

      {/* Bottom Left Profile Pill */}
      <div className="absolute top-[80px] left-[0px] w-28 bg-[#fff5ec] rounded-lg shadow-sm border border-[#f97316]/10 flex items-center p-1.5 gap-2">
        <AvatarIcon />
        <div className="flex flex-col gap-1.5 w-full pr-2">
          <div className="w-full h-1.5 bg-[#f97316]/30 rounded-full"></div>
          <div className="w-2/3 h-1.5 bg-[#f97316]/15 rounded-full"></div>
        </div>
      </div>

      {/* Center Top Small Node */}
      <div className="absolute top-[40px] left-[100px] w-8 h-8 rounded-full bg-[#fce7d6] shadow-sm border-2 border-white flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 24 24" fill="#f97316" className="w-5 h-5 mt-1">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      </div>

      {/* Bottom Center Small Node */}
      <div className="absolute top-[100px] left-[110px] w-8 h-8 rounded-full bg-[#fce7d6] shadow-sm border-2 border-white flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 24 24" fill="#f97316" className="w-5 h-5 mt-1">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      </div>

      {/* Right Large Node */}
      <div className="absolute top-[60px] right-[10px] w-12 h-12 rounded-full bg-[#fce7d6] shadow-sm border-2 border-white flex items-center justify-center overflow-hidden">
        <svg viewBox="0 0 24 24" fill="#f97316" className="w-8 h-8 mt-2">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      </div>
    </div>
  );
}

function Graphic2() {
  return (
    <div className="relative w-full h-full max-w-[240px] bg-[#fff5ec]/60 rounded-xl overflow-hidden border border-[#f97316]/10 shadow-sm">
      {/* Top left bubble with avatar */}
      <div className="absolute top-4 left-4 flex gap-2 items-end">
        <AvatarIcon />
        <div className="bg-white p-3 rounded-[1rem] rounded-bl-sm shadow-sm border border-[#f97316]/10 w-32">
          <div className="w-full h-2 bg-[#f97316]/20 rounded-full mb-2"></div>
          <div className="w-3/4 h-2 bg-[#f97316]/10 rounded-full"></div>
        </div>
      </div>

      {/* Right side bubble */}
      <div className="absolute top-14 right-4">
        <div className="bg-white p-3 rounded-[1rem] rounded-br-sm shadow-sm border border-[#f97316]/10 w-24">
          <div className="w-full h-2 bg-[#f97316]/20 rounded-full mb-2"></div>
          <div className="w-1/2 h-2 bg-[#f97316]/10 rounded-full"></div>
        </div>
      </div>

      {/* Bottom orange bubble */}
      <div className="absolute bottom-8 left-14">
        <div className="bg-[#f97316] p-3 rounded-[1rem] rounded-bl-sm shadow-md w-24 flex flex-col gap-2">
          <div className="w-full h-2 bg-white/50 rounded-full"></div>
          <div className="w-2/3 h-2 bg-white/30 rounded-full"></div>
        </div>
      </div>

      {/* Typing dots */}
      <div className="absolute bottom-4 left-4 bg-white px-3 py-2 rounded-full shadow-sm border border-[#f97316]/10 flex gap-1 items-center">
        <div className="w-1.5 h-1.5 bg-[#f97316]/40 rounded-full"></div>
        <div className="w-1.5 h-1.5 bg-[#f97316]/60 rounded-full"></div>
        <div className="w-1.5 h-1.5 bg-[#f97316]/40 rounded-full"></div>
      </div>

      {/* Thumbs up badge */}
      <div className="absolute bottom-4 right-4 w-7 h-7 bg-[#fff5ec] rounded-full flex items-center justify-center border border-[#f97316]/30 shadow-sm text-[#f97316]">
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
          <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z" />
        </svg>
      </div>
    </div>
  );
}

function Graphic3() {
  return (
    <div className="relative w-full h-full max-w-[240px]">
      {/* Background Profile card */}
      <div className="absolute top-4 right-8 w-36 h-24 bg-white rounded-xl shadow-[0_4px_15px_-5px_rgba(0,0,0,0.05)] border border-[#f97316]/10 p-4 flex flex-col gap-3 transform rotate-[4deg]">
        <div className="flex gap-3 items-center">
          <AvatarIcon className="w-10 h-10 rounded-lg" />
          <div className="flex flex-col gap-2 w-full">
            <div className="w-full h-2 bg-[#f97316]/20 rounded-full"></div>
            <div className="w-2/3 h-2 bg-[#f97316]/10 rounded-full"></div>
          </div>
        </div>
        <div className="w-full h-1.5 bg-[#f97316]/5 rounded-full mt-1"></div>
        <div className="w-4/5 h-1.5 bg-[#f97316]/5 rounded-full"></div>
      </div>

      {/* Briefcase */}
      <div className="absolute bottom-6 left-6 w-32 h-20 bg-[#e4be9e] rounded-xl shadow-lg border border-[#c99a73] relative z-10">
        {/* Briefcase top handle */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-5 border-4 border-[#b48660] rounded-t-xl border-b-0"></div>
        {/* Briefcase details */}
        <div className="absolute top-3 w-full h-[2px] bg-[#d3a57f] shadow-sm"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-6 bg-[#b48660] rounded-sm shadow-sm"></div>
      </div>

      {/* Arrow box */}
      <div className="absolute bottom-4 right-2 w-12 h-12 bg-[#fff5ec] rounded-2xl flex items-center justify-center shadow-[0_4px_15px_-5px_rgba(249,115,22,0.15)] border border-[#f97316]/20 text-[#f97316]">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
        >
          <line x1="7" y1="17" x2="17" y2="7"></line>
          <polyline points="7 7 17 7 17 17"></polyline>
        </svg>
      </div>

      {/* Dashed line connecting briefcase to arrow */}
      <svg className="absolute bottom-6 left-32 w-28 h-10 -z-10" viewBox="0 0 100 40" fill="none">
        <path
          d="M0 20 Q50 30 100 0"
          stroke="#f97316"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          strokeOpacity="0.4"
        />
      </svg>
    </div>
  );
}

function AvatarIcon({ className = "w-7 h-7 rounded-full" }: { className?: string }) {
  return (
    <div
      className={`bg-[#fce7d6] flex items-center justify-center overflow-hidden shrink-0 ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="#f97316" className="w-full h-full mt-1.5 p-1">
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
      </svg>
    </div>
  );
}
