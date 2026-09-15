"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, ArrowUpRight, Linkedin } from "lucide-react";
import { HighlightText } from "@/components/ui/HighlightText";

export function CareerAndMentors() {
  const roles = [
    {
      title: "AI Productivity Specialist",
      salary: "$70k - $120k",
      skills: "Workflow Automation, Prompt Engineering",
    },
    {
      title: "AI Consultant",
      salary: "$90k - $150k",
      skills: "Business Strategy, LLM Implementation",
    },
    {
      title: "Automation Operations",
      salary: "$80k - $130k",
      skills: "Make.com, Zapier, API Architecture",
    },
    {
      title: "Content Strategist (AI)",
      salary: "$65k - $110k",
      skills: "Claude, Midjourney, Pipeline Design",
    },
  ];

  const mentors = [
    {
      name: "Alex Rivera",
      role: "Lead AI Architect at Nexus",
      bio: "Former Google engineer with 8 years of experience building large-scale ML pipelines. Specializes in custom LLM deployments.",
    },
    {
      name: "Sarah Chen",
      role: "Founder, Automate Now",
      bio: "No-code automation expert who has saved clients over 100,000 manual hours using Zapier and Make.",
    },
    {
      name: "Marcus Johnson",
      role: "Prompt Engineering Lead",
      bio: "Writes production prompts for Fortune 500 companies. Author of 'The Art of the Prompt'.",
    },
  ];

  return (
    <>
      {/* Career Opportunities */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-ink/5">
        <div className="container-x">
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <p className="text-xs uppercase tracking-[0.14em] text-brand font-semibold flex items-center justify-center gap-4">
                <span className="w-12 h-[1px] bg-brand/40" /> THE ROI{" "}
                <span className="w-12 h-[1px] bg-brand/40" />
              </p>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05]">
              <HighlightText>Career</HighlightText> Opportunities
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {roles.map((role, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-surface border border-ink/5 rounded-3xl p-8 hover:border-brand/20 transition-all duration-300 group flex flex-col"
              >
                <div className="w-10 h-10 rounded-full bg-brand/10 text-brand flex items-center justify-center mb-6">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl text-ink mb-2">{role.title}</h3>
                <p className="text-brand font-mono text-sm mb-6">{role.salary}</p>
                <div className="mt-auto pt-6 border-t border-ink/5">
                  <p className="text-xs uppercase tracking-widest text-ink-soft mb-2 font-semibold">
                    Key Skills
                  </p>
                  <p className="text-sm text-ink">{role.skills}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors */}
      <section className="py-24 md:py-32 bg-surface relative overflow-hidden">
        <div className="container-x">
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <p className="text-xs uppercase tracking-[0.14em] text-brand font-semibold flex items-center justify-center gap-4">
                <span className="w-12 h-[1px] bg-brand/40" /> LEARN FROM THE BEST{" "}
                <span className="w-12 h-[1px] bg-brand/40" />
              </p>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-[1.05]">
              Your <HighlightText>Instructors</HighlightText>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {mentors.map((mentor, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-ink/5 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-brand/5 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 rounded-full bg-surface border border-ink/10 flex items-center justify-center font-display text-2xl text-ink">
                    {mentor.name.charAt(0)}
                  </div>
                  <a href="#" className="text-ink-soft hover:text-brand transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
                <h3 className="font-display text-xl text-ink mb-1">{mentor.name}</h3>
                <p className="text-brand text-sm font-medium mb-4">{mentor.role}</p>
                <p className="text-ink-soft text-sm leading-relaxed">{mentor.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
