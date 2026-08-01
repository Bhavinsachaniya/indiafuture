"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { GraduationCap, Users, Landmark, Briefcase, ArrowRight } from "lucide-react";
import { HighlightText } from "@/components/ui/HighlightText";
import { fadeUpVariant, staggerContainerVariant, defaultViewport } from "@/lib/motion";

export function ProgramOfferingsSection() {
  return (
    <section className="bg-[#faf9f8] py-28 relative overflow-hidden">
      <div className="container-x relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <motion.div variants={fadeUpVariant} className="flex items-center justify-center gap-4 mb-6">
            <p className="text-xs uppercase tracking-[0.14em] text-brand font-semibold mb-4 flex items-center justify-center gap-4">
              <span className="w-12 h-[1px] bg-brand/40" /> Pick one to help us help you!{" "}
              <span className="w-12 h-[1px] bg-brand/40" />
            </p>
          </motion.div>
          <motion.h2
            variants={fadeUpVariant}
            className="mt-4 font-display font-medium text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.12] tracking-[-0.02em] text-[#161413] text-balance"
          >
            Four paths. One outcome <br />
            <HighlightText className="mx-2 inline-block">practical skills</HighlightText>
          </motion.h2>
          <motion.p
            variants={fadeUpVariant}
            className="mx-auto mt-6 max-w-xl text-lg leading-[1.7] text-[#161413]/70 tracking-[-0.01em]"
          >
            Pick the program for your goals. Our AI Masterclasses and certification programs are
            curated for audiences of varying Industries.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto"
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <ProgramCard
            icon={GraduationCap}
            badge="YOUNG INDIANS"
            eyebrow="FLAGSHIP PROGRAM"
            title="AI Creator Fellowship for Students & Young Professionals"
            description="8 Week Fellowship to master AI Creator Skills through projects, automation lessons, peer & community learning and placement opportunities."
            link="/programs/ai-upskilling"
            linkText="Explore Program"
          />

          <ProgramCard
            icon={Users}
            badge="INSTITUTIONS"
            eyebrow="MASTERCLASSES"
            title="AI Masterclasses & Certifications"
            description="Interactive AI masterclasses with 7 days Mentor Implementation Access designed for professionals, institutions, startups and corporates."
            link="/programs/masterclasses"
            linkText="Explore Masterclasses"
          />

          <ProgramCard
            icon={Landmark}
            badge="INSTITUTIONS"
            eyebrow="AI Labs & Certification"
            title="AI Skill Labs & Certification"
            description="Build a future ready AI lab or Centre of Excellence serving certified AI upskilling for students with personalized curriculum and long term implementation."

            link="/programs/workshops"
            linkText="Explore AI Labs"
          />

          <ProgramCard
            icon={Briefcase}
            badge="ORGANIZATIONS"
            eyebrow="ORGANIZATIONS"
            title="AI Automations"
            description="We automate repetitive operations for startups, institutions and MSMEs leading to increased efficiency, higher savings and generating more revenue."
            link="/programs/custom"
            linkText="Explore Solution"
          />
        </motion.div>
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
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 320, damping: 28 }}
      className="group relative flex flex-col p-7 sm:p-9 rounded-3xl border border-[#f97316]/10 bg-white shadow-sm hover:shadow-[0_16px_48px_-16px_rgba(249,115,22,0.2)] transition-shadow duration-500"
    >
      <div className="flex items-start justify-between mb-8">
        <div
          className={`flex items-center justify-center w-12 h-12 rounded-full ${iconBg} group-hover:bg-[#f97316] transition-colors duration-500`}
        >
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
        <h3 className="font-display text-2xl leading-tight text-[#161413] mb-3">{title}</h3>
        <p className="text-sm leading-relaxed text-[#161413]/70 mb-8">{description}</p>
      </div>

      <div className="mt-auto">
        <Link
          href={link as any}
          className="inline-flex items-center text-sm font-semibold text-[#f97316] hover:text-[#f97316]/80 transition-colors before:absolute before:inset-0 before:z-10"
        >
          {linkText}
          <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
