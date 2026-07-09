import React from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { GraduationCap, Users, Landmark, Briefcase, ArrowRight } from "lucide-react";
import { HighlightText } from "@/components/ui/HighlightText";
import { fadeUpVariant, defaultViewport } from "@/lib/motion";

export function ProgramsList() {
  return (
    <section className="bg-[#faf9f8] py-28 relative overflow-hidden">
      <div className="container-x relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <p className="text-xs uppercase tracking-[0.2em] text-brand font-semibold mb-4 flex items-center justify-center gap-4">
              <span className="w-12 h-[1px] bg-brand/40" /> THE PROGRAMS{" "}
              <span className="w-12 h-[1px] bg-brand/40" />
            </p>
          </div>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-[#161413] text-balance">
            Four paths. One outcome <br />
            <HighlightText className="mx-2 inline-block">practical skills</HighlightText>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#161413]/70">
            Pick the program that matches where you are. We conduct customized AI masterclasses and
            certification programs for every audience.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <ProgramCard
            icon={GraduationCap}
            badge="STUDENTS"
            eyebrow="FLAGSHIP PROGRAM"
            title="AI Upskilling Program"
            description="An 8-week hands-on journey that takes learners from AI fundamentals to real-world implementation through projects, automation, and practical workflows."
            link="/programs/ai-upskilling"
            linkText="Explore Program"
          />

          <ProgramCard
            icon={Users}
            badge="INSTITUTIONS"
            eyebrow="WORKSHOPS"
            title="AI Workshops & Certifications"
            description="Interactive AI workshops and certification programs designed for schools, colleges, universities, organizations, and MSMEs."
            link="/programs/masterclasses"
            linkText="Explore Workshops"
          />

          <ProgramCard
            icon={Landmark}
            badge="INSTITUTIONS"
            eyebrow="AI LABS & ENABLEMENT"
            title="AI Labs & Campus Enablement"
            description="Build an AI-ready institution with faculty development, student upskilling, AI labs, curriculum support, and long-term implementation."
            link="/programs/workshops"
            linkText="Explore Solution"
          />

          <ProgramCard
            icon={Briefcase}
            badge="ORGANIZATIONS"
            eyebrow="ORGANIZATIONS"
            title="AI Adoption Programs"
            description="Help teams integrate AI into daily workflows through productivity training, automation, department-specific use cases, and implementation support."
            link="/programs/custom"
            linkText="Explore Solution"
          />
        </div>
      </div>
    </section>
  );
}

function ProgramCard({
  icon: Icon,
  badge,
  eyebrow,
  title,
  description,
  link,
  linkText,
  iconBg = "bg-[#fff5ec]",
  iconColor = "text-[#f97316]",
}: {
  icon: React.ElementType;
  badge: string;
  eyebrow: string;
  title: string;
  description: string;
  link: string;
  linkText: string;
  iconBg?: string;
  iconColor?: string;
}) {
  return (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className="group relative flex flex-col p-6 sm:p-8 rounded-3xl border border-[#f97316]/10 bg-white shadow-sm hover:shadow-[0_10px_40px_-15px_rgba(249,115,22,0.15)] transition-all duration-500 hover:-translate-y-1"
    >
      <div className="flex items-start justify-between mb-8">
        <div className={`flex items-center justify-center w-12 h-12 rounded-full ${iconBg} group-hover:bg-[#f97316] transition-colors duration-500`}>
          <Icon
            className={`w-5 h-5 ${iconColor} group-hover:text-white transition-colors duration-500`}
            strokeWidth={1.5}
          />
        </div>
        <div className="px-3 py-1 rounded-full border border-[#f97316]/30 text-[9px] font-bold text-[#f97316] uppercase tracking-[0.1em] transition-colors group-hover:bg-[#f97316] group-hover:text-white">
          {badge}
        </div>
      </div>

      <div className="flex-1">
        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#f97316] mb-3">
          {eyebrow}
        </p>
        <h3 className="font-display text-2xl leading-tight text-[#161413] mb-3">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-[#161413]/70 mb-8">{description}</p>
      </div>

      <div className="mt-auto">
        <Link
          to={link as any}
          className="inline-flex items-center text-sm font-semibold text-[#f97316] hover:text-[#f97316]/80 transition-colors"
        >
          {linkText}
          <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
