"use client";

import React from "react";
import { motion } from "framer-motion";
import { FolderGit2, Sparkles, Clock, Puzzle } from "lucide-react";
import { HighlightText } from "@/components/ui/HighlightText";

export function ProjectsAndTools() {
  const projects = [
    {
      title: "AI Resume Builder",
      desc: "Takes raw text and automatically formats, optimizes, and exports a clean PDF tailored to a specific job description.",
      difficulty: "Beginner",
      tech: ["ChatGPT", "Make.com", "Google Docs API"],
      hours: "4 Hours",
    },
    {
      title: "Smart Research Assistant",
      desc: "Scrapes URLs, summarizes findings, and drops clean bullet points into Notion.",
      difficulty: "Intermediate",
      tech: ["Perplexity", "Notion API", "Zapier"],
      hours: "6 Hours",
    },
    {
      title: "Email Automation System",
      desc: "Sorts inbound emails, drafts replies based on context, and tags them by priority.",
      difficulty: "Intermediate",
      tech: ["Gmail API", "Claude", "n8n"],
      hours: "8 Hours",
    },
    {
      title: "Portfolio AI Chatbot",
      desc: "A custom embedded widget on your website trained exclusively on your past work and resume.",
      difficulty: "Advanced",
      tech: ["Custom GPT", "Vector DB", "React"],
      hours: "12 Hours",
    },
  ];

  const tools = [
    { name: "ChatGPT", role: "Primary LLM", icon: "💬" },
    { name: "Claude", role: "Long Context", icon: "🧠" },
    { name: "Perplexity", role: "Research", icon: "🔍" },
    { name: "Zapier", role: "Automation", icon: "⚡" },
    { name: "Make.com", role: "Complex Flows", icon: "🔄" },
    { name: "Cursor", role: "AI IDE", icon: "💻" },
    { name: "Notion AI", role: "Knowledge", icon: "📝" },
    { name: "Midjourney", role: "Image Gen", icon: "🎨" },
  ];

  return (
    <>
      {/* Projects Showcase */}
      <section className="py-24 md:py-32 bg-ink text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="container-x relative z-10">
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <p className="text-xs uppercase tracking-[0.14em] text-brand font-semibold flex items-center justify-center gap-4">
                <span className="w-12 h-[1px] bg-brand/40" /> REAL DELIVERABLES{" "}
                <span className="w-12 h-[1px] bg-brand/40" />
              </p>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              Build <HighlightText>Live Projects</HighlightText>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative bg-surface/5 border border-white/10 rounded-3xl p-8 hover:bg-surface/10 hover:border-brand/30 transition-all duration-500 overflow-hidden flex flex-col"
                style={{ transformStyle: "preserve-3d" }}
                whileHover={{ rotateX: 2, rotateY: -2, z: 20 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-brand/20 text-brand flex items-center justify-center shrink-0">
                    <FolderGit2 className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-cream/80 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-brand" /> {project.difficulty}
                  </span>
                </div>

                <h3 className="font-display text-2xl md:text-3xl mb-4 group-hover:text-brand transition-colors relative z-10">
                  {project.title}
                </h3>
                <p className="text-cream/70 text-lg leading-relaxed mb-8 relative z-10 flex-grow">
                  {project.desc}
                </p>

                <div className="space-y-6 mt-auto relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-lg bg-black/40 text-cream/80 text-sm font-medium border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="pt-6 border-t border-white/10 flex gap-6">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-cream/40 mb-2 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> Duration
                      </p>
                      <p className="text-sm text-brand font-medium">{project.hours}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-24 md:py-32 bg-surface relative overflow-hidden">
        <div className="container-x">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <p className="text-xs uppercase tracking-[0.14em] text-brand font-semibold flex items-center justify-center gap-4">
                <span className="w-12 h-[1px] bg-brand/40" /> YOUR NEW ARSENAL{" "}
                <span className="w-12 h-[1px] bg-brand/40" />
              </p>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-[1.05]">
              <HighlightText>Tools</HighlightText> You'll Master
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {tools.map((tool, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white border border-ink/5 rounded-2xl p-6 text-center hover:border-brand/20 hover:shadow-lg hover:shadow-brand/5 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300 inline-block">
                  {tool.icon}
                </div>
                <h3 className="font-display text-lg text-ink mb-1 group-hover:text-brand transition-colors">
                  {tool.name}
                </h3>
                <p className="text-sm text-ink-soft">{tool.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
