"use client";

import React from "react";
import { motion } from "framer-motion";
import { Video, MessagesSquare, Users, Trophy, ChevronRight, Briefcase } from "lucide-react";
import { HighlightText } from "@/components/ui/HighlightText";

export function ExperienceAndOutcomes() {
  const experiences = [
    {
      icon: Video,
      title: "Live Interactive Classes",
      desc: "Two 90-minute live sessions per week focusing purely on building and debugging.",
    },
    {
      icon: Trophy,
      title: "Weekly Assignments",
      desc: "Build a specific micro-workflow each week to lock in your muscle memory.",
    },
    {
      icon: Users,
      title: "Mentorship & Office Hours",
      desc: "Stuck on an API error? Jump into office hours and screen-share with instructors.",
    },
    {
      icon: MessagesSquare,
      title: "Community Support",
      desc: "A private Discord filled with fellow builders, resources, and job opportunities.",
    },
  ];

  const outcomes = [
    "Before Joining",
    "Learning Phase",
    "Building Projects",
    "Portfolio Ready",
    "Freelancing / Internships",
    "Job Ready",
    "AI Professional",
  ];

  return (
    <>
      {/* Learning Methodology */}
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
                <div className="flex items-center justify-center gap-4 mb-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-brand font-semibold flex items-center justify-center gap-4">
                    <span className="w-12 h-[1px] bg-brand/40" /> METHODOLOGY{" "}
                    <span className="w-12 h-[1px] bg-brand/40" />
                  </p>
                </div>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05] mb-8">
                  How you will <br />
                  <HighlightText>learn.</HighlightText>
                </h2>
                <p className="text-ink-soft text-lg leading-relaxed mb-8 max-w-md">
                  We don't do pre-recorded monologues. Our methodology is built entirely around
                  active building, rapid feedback loops, and community accountability.
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

      {/* Outcomes Timeline */}
      <section className="py-24 md:py-32 bg-brand text-white relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px]" />
        </div>

        <div className="container-x relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Your <HighlightText>Transformation</HighlightText>
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2">
              {outcomes.map((phase, idx) => {
                const isLast = idx === outcomes.length - 1;
                return (
                  <React.Fragment key={idx}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      className={`flex flex-col items-center text-center p-4 rounded-xl ${
                        isLast
                          ? "bg-white text-brand shadow-xl scale-110"
                          : "bg-black/10 text-white"
                      }`}
                    >
                      {isLast && <Briefcase className="w-6 h-6 mb-2 text-brand" />}
                      <span
                        className={`text-sm md:text-xs lg:text-sm font-semibold uppercase tracking-wider ${
                          isLast ? "text-brand" : "text-white/80"
                        }`}
                      >
                        {phase}
                      </span>
                    </motion.div>

                    {!isLast && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.1 + 0.1 }}
                        className="hidden md:block text-white/30"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </motion.div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
