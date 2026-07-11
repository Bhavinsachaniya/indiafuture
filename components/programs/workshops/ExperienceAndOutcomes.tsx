"use client";

import React from "react";
import { motion } from "framer-motion";
import { Monitor, User, Award, GraduationCap } from "lucide-react";
import { HighlightText } from "@/components/ui/HighlightText";

export function ExperienceAndOutcomes() {
  const experiences = [
    {
      num: "01",
      icon: Monitor,
      title: "AI Lab Setup",
      desc: "A customized AI-ready environment built around your institution's infrastructure and requirements.",
    },
    {
      num: "02",
      icon: User,
      title: "Recurring Training",
      desc: "Ongoing practical training for students, faculty, and mixed cohorts.",
    },
    {
      num: "03",
      icon: Award,
      title: "Co-Branded Skill Certifications",
      desc: "Institution-linked AI skill certifications that add credibility and recognition.",
    },
    {
      num: "04",
      icon: GraduationCap,
      title: "Centre of Excellence Positioning",
      desc: "Strengthen your institution's identity as an innovation-led, future-ready campus.",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <p className="text-xs uppercase tracking-[0.2em] text-brand font-semibold flex items-center gap-4">
                  <span className="w-12 h-[1px] bg-brand/40" /> METHODOLOGY
                </p>
              </div>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05] mb-8">
                How does it <br />
                <HighlightText>work?</HighlightText>
              </h2>
              <p className="text-ink-soft text-lg leading-relaxed mb-8 max-w-md">
                In order to deliver world class operations, we follow an international SoP to deliver best quality results.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-6">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-surface border border-ink/5 rounded-3xl p-8 hover:border-brand/20 hover:shadow-lg hover:shadow-brand/5 transition-all duration-300 group"
                >
                  <p className="text-brand/80 font-medium text-sm mb-4">{exp.num}</p>
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand/10 transition-transform duration-300 border border-ink/5">
                    <exp.icon className="w-6 h-6 text-ink group-hover:text-brand transition-colors" />
                  </div>
                  <h3 className="font-display text-xl text-ink mb-3">{exp.title}</h3>
                  <p className="text-ink-soft leading-relaxed text-sm">{exp.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
