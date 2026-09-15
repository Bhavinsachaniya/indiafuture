"use client";

import React from "react";
import Image from "next/image";
import { clsx } from "clsx";
import { motion } from "framer-motion";
import { fadeUpVariant, defaultViewport } from "@/lib/motion";
import {
  MousePointerClick,
  Rocket,
  Landmark,
  TrendingUp,
  MessageSquare,
  FileText,
  Sparkles,
  Settings,
} from "lucide-react";

export function WhyIndiaFutureBento() {
  return (
    <section className="bg-[#faf9f8] py-28 relative overflow-hidden">
      {/* Background line graphics similar to Image 2 (left and right sides) */}
      <div className="absolute top-20 left-0 w-64 h-32 opacity-50 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80h40l20-20h100" stroke="#f97316" strokeWidth="1" strokeOpacity="0.3" />
          <path d="M0 60h30l20-20h60" stroke="#f97316" strokeWidth="1" strokeOpacity="0.3" />
          <circle cx="160" cy="60" r="2" fill="#f97316" fillOpacity="0.5" />
          <circle cx="110" cy="40" r="2" fill="#f97316" fillOpacity="0.5" />
        </svg>
      </div>
      <div className="absolute top-20 right-0 w-64 h-32 opacity-50 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M200 80h-40l-20-20h-100" stroke="#f97316" strokeWidth="1" strokeOpacity="0.3" />
          <path d="M200 40h-80l-20 20h-40" stroke="#f97316" strokeWidth="1" strokeOpacity="0.3" />
          <circle cx="40" cy="60" r="2" fill="#f97316" fillOpacity="0.5" />
          <circle cx="60" cy="60" r="2" fill="#f97316" fillOpacity="0.5" />
        </svg>
      </div>

      <div className="container-x relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#f97316]">
            WHY INDIAFUTUREAI
          </p>
          <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[1.05] tracking-tight text-[#161413] text-balance">
            Practical AI.
            <br />
            <span className="relative inline-block border border-brand bg-brand/5 text-ink px-4 py-1 mx-2 align-middle overflow-visible font-light">
              <span className="absolute -top-1 -left-1 w-2 h-2 bg-brand border border-brand"></span>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-brand border border-brand"></span>
              <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-brand border border-brand"></span>
              <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-brand border border-brand"></span>
              Real-world outcomes.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#161413]/70">
            We go beyond theory. Our programs are designed to help students, institutions, and
            organizations actually use AI.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Card 1: Hands-on Learning */}
          <BentoCard
            icon={MousePointerClick}
            eyebrow="HANDS-ON LEARNING"
            title="Build, Don't Just Watch"
            description="Every session is built around practical exercises, real AI tools, and guided implementation—not passive lectures or slide decks."
            graphic={<HandsOnGraphic />}
          />

          {/* Card 2: Real-world Application */}
          <BentoCard
            icon={Rocket}
            eyebrow="REAL-WORLD APPLICATION"
            title="Skills You Can Use Immediately"
            description="Build AI assistants, automate workflows, create content, research faster, and solve real academic or workplace problems from day one."
            graphic={<ApplicationGraphic />}
          />

          {/* Card 3: Institutional Impact */}
          <BentoCard
            icon={Landmark}
            eyebrow="INSTITUTIONAL IMPACT"
            title="Designed for Long-Term AI Adoption"
            description="From AI labs and faculty development to curriculum support, we help institutions build lasting AI capabilities—not one-time workshops."
            graphic={<InstitutionGraphic />}
          />

          {/* Card 4: Implementation */}
          <BentoCard
            icon={TrendingUp}
            eyebrow="IMPLEMENTATION"
            title="Beyond Learning. Into Action."
            description="Our programs focus on implementation, measurable outcomes, and practical AI adoption that creates real impact."
            graphic={<ImplementationGraphic />}
          />
        </div>
      </div>
    </section>
  );
}

function BentoCard({
  icon: Icon,
  eyebrow,
  title,
  description,
  graphic,
}: {
  icon: React.ElementType;
  eyebrow: string;
  title: string;
  description: string;
  graphic: React.ReactNode;
}) {
  return (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className="group relative flex flex-col sm:flex-row overflow-hidden rounded-[2rem] border border-[#f97316]/10 bg-white shadow-[0_10px_40px_-20px_rgba(249,115,22,0.1)] hover:shadow-[0_20px_60px_-20px_rgba(249,115,22,0.15)] transition-all duration-500 hover:-translate-y-1"
    >
      <div className="flex-1 p-6 sm:p-8 flex flex-col relative z-10">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#fff5ec] mb-5 border border-[#f97316]/10 group-hover:bg-[#f97316] transition-colors duration-500">
          <Icon
            className="w-4 h-4 text-[#f97316] group-hover:text-white transition-colors duration-500"
            strokeWidth={1.5}
          />
        </div>

        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#f97316]">
          {eyebrow}
        </p>
        <h3 className="mt-2 font-display text-2xl leading-tight text-[#161413]">{title}</h3>
        <p className="mt-3 text-[14px] leading-relaxed text-[#161413]/70">{description}</p>
      </div>

      <div className="w-full sm:w-[45%] shrink-0 bg-transparent relative overflow-hidden min-h-[240px] sm:min-h-full">
        <div className="absolute inset-0 flex items-center justify-center p-6">{graphic}</div>
      </div>
    </motion.div>
  );
}

/* ---------- Graphics ---------- */

function HandsOnGraphic() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-2 transform group-hover:scale-105 transition-transform duration-700">
      <Image
        src="/Bento/img3.jpg"
        alt="Hands-on Learning"
        width={400}
        height={300}
        unoptimized
        className="max-w-full max-h-full object-contain mix-blend-multiply"
      />
    </div>
  );
}

function ApplicationGraphic() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-2 transform group-hover:scale-105 transition-transform duration-700">
      <Image
        src="/Bento/img4.jpg"
        alt="Real-world Application"
        width={400}
        height={300}
        unoptimized
        className="max-w-full max-h-full object-contain mix-blend-multiply"
      />
    </div>
  );
}

function InstitutionGraphic() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-2 transform group-hover:scale-105 transition-transform duration-700">
      <Image
        src="/Bento/img1.jpg"
        alt="Institutional Impact"
        width={400}
        height={300}
        unoptimized
        className="max-w-full max-h-full object-contain mix-blend-multiply"
      />
    </div>
  );
}

function ImplementationGraphic() {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-2 transform group-hover:scale-105 transition-transform duration-700">
      <Image
        src="/Bento/img2.jpg"
        alt="Implementation"
        width={400}
        height={300}
        unoptimized
        className="max-w-full max-h-full object-contain mix-blend-multiply"
      />
    </div>
  );
}
