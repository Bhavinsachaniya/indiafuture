import React from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Cpu, Link2, LineChart, ShieldCheck, ArrowRight } from "lucide-react";
import { HighlightText } from "@/components/ui/HighlightText";
import { fadeUpVariant, defaultViewport } from "@/lib/motion";

export function ProgramsList() {
  return (
    <section className="bg-[#faf9f8] py-28 relative overflow-hidden">
      <div className="container-x relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f97316]">
            THE PROGRAMS
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-[#161413] text-balance">
            Four paths. One outcome{" "}
            <br />
            <HighlightText className="mx-2 inline-block">practical skills</HighlightText>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#161413]/70">
            Pick the program that matches where you are. We conduct customized AI masterclasses and
            certification programs for every audience.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Card 1 */}
          <ProgramCard
            icon={Cpu}
            badge="8 weeks"
            eyebrow="UPSKILLING"
            title="AI Upskilling Programs"
            description="A comprehensive hands-on AI program designed to help students become AI-ready with practical skills."
            link="/programs/ai-upskilling"
          />

          {/* Card 2 */}
          <ProgramCard
            icon={Link2}
            badge="Live"
            eyebrow="MASTERCLASSES"
            title="Masterclasses & Certifications"
            description="Customized AI masterclasses for schools, colleges, working professionals, and MSMEs to use AI workflows immediately."
            link="#"
          />

          {/* Card 3 */}
          <ProgramCard
            icon={LineChart}
            badge="Custom"
            eyebrow="WORKSHOPS"
            title="Hands-on Automation Labs"
            description="AI Labs and productivity training for educators and teams to automate repetitive tasks and build workflows."
            link="#"
          />

          {/* Card 4 */}
          <ProgramCard
            icon={ShieldCheck}
            badge="Bespoke"
            eyebrow="CUSTOM"
            title="Customized AI Programs"
            description="Exclusive AI learning and certification programs designed for organizations and communities based on specific objectives."
            link="#"
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
}: {
  icon: React.ElementType;
  badge: string;
  eyebrow: string;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className="group relative flex flex-col p-8 sm:p-10 rounded-[2rem] border border-[#f97316]/10 bg-white shadow-[0_10px_40px_-20px_rgba(249,115,22,0.1)] hover:shadow-[0_20px_60px_-20px_rgba(249,115,22,0.15)] transition-all duration-500 hover:-translate-y-1"
    >
      <div className="flex items-start justify-between mb-8">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#fff5ec] border border-[#f97316]/10 group-hover:bg-[#f97316] transition-colors duration-500">
          <Icon
            className="w-5 h-5 text-[#161413] group-hover:text-white transition-colors duration-500"
            strokeWidth={1.5}
          />
        </div>
        <div className="px-4 py-1.5 rounded-full border border-border/50 text-xs font-medium text-[#161413]/70 group-hover:border-[#f97316]/30 transition-colors">
          {badge}
        </div>
      </div>

      <div className="flex-1">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#161413]/50 mb-2">
          {eyebrow}
        </p>
        <h3 className="font-display text-2xl lg:text-3xl leading-tight text-[#161413] mb-4">
          {title}
        </h3>
        <p className="text-[15px] leading-relaxed text-[#161413]/70 mb-8">{description}</p>
      </div>

      <div className="mt-auto">
        <Link
          to={link as any}
          className="inline-flex items-center text-[13px] font-medium text-[#161413] hover:text-[#f97316] transition-colors"
        >
          Explore program
          <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
