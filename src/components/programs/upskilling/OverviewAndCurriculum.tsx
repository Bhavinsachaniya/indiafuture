import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function OverviewAndCurriculum() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });


  const weeks = [
    {
      week: "Week 01",
      title: "Build Your First AI Assistant",
      topics: ["AI fundamentals", "ChatGPT", "Prompt basics", "Personal assistant"],
      outcome: "Build a working AI assistant.",
    },
    {
      week: "Week 02",
      title: "Advanced Prompt Engineering",
      topics: ["Few-shot prompting", "Chain of thought", "System prompts", "Persona building"],
      outcome: "Master steering LLMs for reliable outputs.",
    },
    {
      week: "Week 03",
      title: "No-Code Automation Workflows",
      topics: ["Zapier & Make", "Triggers & Actions", "Webhooks", "API basics"],
      outcome: "Connect your AI assistant to Gmail and Slack.",
    },
    {
      week: "Week 04",
      title: "Content Generation Pipelines",
      topics: ["Bulk processing", "Data formatting", "Markdown generation", "Social media automation"],
      outcome: "Create a self-running content engine.",
    },
    {
      week: "Week 05",
      title: "Custom GPTs and Knowledge Bases",
      topics: ["Vector databases", "RAG concepts", "OpenAI Custom GPTs", "Document parsing"],
      outcome: "Build an AI that knows your private data.",
    },
    {
      week: "Week 06",
      title: "Image & Audio AI Generation",
      topics: ["Midjourney", "Stable Diffusion", "ElevenLabs", "Video synthesis"],
      outcome: "Generate a complete multimedia marketing campaign.",
    },
    {
      week: "Week 07",
      title: "Capstone Project Development",
      topics: ["Project scoping", "Architecture design", "Debugging", "User testing"],
      outcome: "Begin building your final portfolio piece.",
    },
    {
      week: "Week 08",
      title: "Deployment & Certification",
      topics: ["Hosting", "API limits", "Cost management", "Final presentations"],
      outcome: "Deploy your project and receive your certification.",
    }
  ];

  return (
    <>
      {/* Program Overview */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="container-x max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
            <p className="text-xs uppercase tracking-[0.2em] text-brand font-semibold flex items-center justify-center gap-4">
              <span className="w-12 h-[1px] bg-brand/40" /> THE WHY <span className="w-12 h-[1px] bg-brand/40" />
            </p>
          </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-tight mb-8">
              AI isn't replacing you. <br />
              <span className="italic text-ink-soft">Someone using AI is.</span>
            </h2>
            <div className="space-y-6 text-lg text-ink-soft leading-relaxed text-left max-w-2xl mx-auto">
              <p>
                The market doesn't need more people who simply know what ChatGPT is. It needs builders who can integrate AI into daily workflows, automate repetitive tasks, and construct custom intelligent systems.
              </p>
              <p>
                This program exists to cross the chasm between theory and application. We remove the fluff and focus purely on practical, hands-on implementation that you can use on Monday morning to save 10 hours a week.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Curriculum Timeline */}
      <section className="py-24 md:py-32 bg-surface relative overflow-hidden border-t border-ink/5">
        <div className="container-x">
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
            <p className="text-xs uppercase tracking-[0.2em] text-brand font-semibold flex items-center justify-center gap-4">
              <span className="w-12 h-[1px] bg-brand/40" /> THE JOURNEY <span className="w-12 h-[1px] bg-brand/40" />
            </p>
          </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05]">
              8 Weeks to Mastery
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
                        <p className="text-xs uppercase tracking-widest text-ink-soft mb-2 font-semibold">Topics</p>
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
                        <p className="text-xs uppercase tracking-widest text-ink-soft mb-1 font-semibold">Outcome</p>
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
