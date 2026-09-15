"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HighlightText } from "@/components/ui/HighlightText";
import { Target } from "lucide-react";

export function OverviewAndCurriculum() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const weeks = [
    {
      week: "WEEK 01",
      title: "Prompt Foundations",
      topics: ["AI basics", "prompt structure", "role-task-format", "everyday use cases"],
      outcome: "Learn to write clear prompts for work, study, and content.",
    },
    {
      week: "WEEK 02",
      title: "Advanced Prompting",
      topics: ["prompt chaining", "refinement loops", "research prompts", "image prompts"],
      outcome: "Build stronger, more reliable AI outputs.",
    },
    {
      week: "WEEK 03",
      title: "AI Graphics & Design",
      topics: ["Canva + AI", "social creatives", "thumbnails & carousels", "brand visuals"],
      outcome: "Create polished graphics faster.",
    },
    {
      week: "WEEK 04",
      title: "AI Audio",
      topics: ["voice generation", "cleanup tools", "dubbing basics", "podcast workflows"],
      outcome: "Produce clean, engaging audio content.",
    },
    {
      week: "WEEK 05",
      title: "AI Video",
      topics: ["script to video", "short-form editing", "captions & B-roll", "creator workflows"],
      outcome: "Create high-quality videos at speed.",
    },
    {
      week: "WEEK 06",
      title: "Creator Systems",
      topics: ["content planning", "no-code automation", "repurposing", "workflow setup"],
      outcome: "Build repeatable content systems that save time.",
    },
    {
      week: "WEEK 07",
      title: "LinkedIn, X & Portfolio",
      topics: ["profile optimization", "personal brand", "posting strategy", "portfolio building"],
      outcome: "Build an online presence that attracts opportunities.",
    },
    {
      week: "WEEK 08",
      title: "Freelancing & Client Acquisition",
      topics: ["niche selection", "pricing", "outreach", "proposals"],
      outcome: "Start earning with AI-powered services.",
    },
  ];

  return (
    <>
      {/* Program Overview */}
      {/* <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="container-x max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <p className="text-xs uppercase tracking-[0.14em] text-brand font-semibold flex items-center justify-center gap-4">
                <span className="w-12 h-[1px] bg-brand/40" /> THE WHY{" "}
                <span className="w-12 h-[1px] bg-brand/40" />
              </p>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-tight mb-8">
              <HighlightText>AI</HighlightText> isn't replacing you. <br />
              <span className="italic text-ink-soft">Someone using AI is.</span>
            </h2>
            <div className="space-y-6 text-lg text-ink-soft leading-relaxed text-left max-w-2xl mx-auto">
              <p>
                The market doesn't need more people who simply know what ChatGPT is. It needs
                builders who can integrate AI into daily workflows, automate repetitive tasks, and
                construct custom intelligent systems.
              </p>
              <p>
                This program exists to cross the chasm between theory and application. We remove the
                fluff and focus purely on practical, hands-on implementation that you can use on
                Monday morning to save 10 hours a week.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
 */}
      {/* Interactive Curriculum Timeline */}
      <section className="py-24 md:py-32 bg-surface relative overflow-hidden border-t border-ink/5">
        <div className="container-x">
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <p className="text-xs uppercase tracking-[0.14em] text-brand font-semibold flex items-center justify-center gap-4">
                <span className="w-12 h-[1px] bg-brand/40" /> THE JOURNEY{" "}
                <span className="w-12 h-[1px] bg-brand/40" />
              </p>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05]">
              <HighlightText>8 Weeks</HighlightText> to Mastery
            </h2>
          </div>

          <div className="max-w-5xl mx-auto relative" ref={containerRef}>
            {/* Background Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-ink/5 md:-translate-x-1/2" />

            {/* Animated Draw Line */}
            <motion.div
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-brand md:-translate-x-1/2 origin-top"
              style={{ scaleY: scrollYProgress }}
            />

            <div className="space-y-12">
              {weeks.map((week, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex items-center md:justify-between ${
                    idx % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                  } flex-row pl-24 md:pl-0`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-5 h-5 rounded-full bg-white border-[4px] border-brand md:-translate-x-1/2 z-10 transition-transform hover:scale-125" />

                  {/* Card Content */}
                  <div className="w-full md:w-[45%]">
                    <div className="bg-white border border-ink/5 rounded-3xl p-8 hover:border-brand/30 hover:shadow-xl hover:shadow-brand/5 transition-all duration-300 group">
                      <span className="inline-block px-3 py-1 rounded-md bg-surface text-ink text-xs font-bold uppercase tracking-wider mb-4 border border-ink/5">
                        {week.week}
                      </span>
                      <h3 className="font-display text-2xl text-ink mb-4 group-hover:text-brand transition-colors">
                        {week.title}
                      </h3>

                      <div className="mb-6">
                        <p className="text-xs uppercase tracking-widest text-ink-soft mb-2 font-semibold">
                          Topics
                        </p>
                        <ul className="grid grid-cols-2 gap-2">
                          {week.topics.map((topic, i) => (
                            <li key={i} className="text-sm text-ink flex items-center gap-2">
                              <span className="w-1 h-1 rounded-full bg-brand/50" />
                              {topic}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-ink/5">
                        <p className="text-xs uppercase tracking-widest text-brand mb-1 font-semibold flex items-center gap-1.5">
                          <Target className="w-3.5 h-3.5" />
                          Outcome
                        </p>
                        <p className="text-sm font-medium text-ink">{week.outcome}</p>
                      </div>
                    </div>
                  </div>

                  <div className="hidden md:block w-[45%]" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
