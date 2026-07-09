import React from "react";
import { GraduationCap, Users, Landmark, Briefcase } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { HighlightText } from "@/components/ui/HighlightText";

const studios = [
  {
    icon: GraduationCap,
    tag: "FLAGSHIP PROGRAM",
    title: "AI Upskilling Program",
    desc: "An 8-week hands-on journey that takes learners from AI fundamentals to real-world implementation through projects, automation, and practical workflows.",
    audience: "STUDENTS",
    linkText: "Explore Program",
    link: "/programs/upskilling",
  },
  {
    icon: Users,
    tag: "WORKSHOPS",
    title: "AI Workshops & Certifications",
    desc: "Interactive AI workshops and certification programs designed for schools, colleges, universities, organizations, and MSMEs.",
    audience: "INSTITUTIONS",
    linkText: "Explore Workshops",
    link: "/programs/masterclasses",
  },
  {
    icon: Landmark,
    tag: "AI LABS & ENABLEMENT",
    title: "AI Labs & Campus Enablement",
    desc: "Build an AI-ready institution with faculty development, student upskilling, AI labs, curriculum support, and long-term implementation.",
    audience: "INSTITUTIONS",
    linkText: "Explore Solution",
    link: "/programs/workshops",
  },
  {
    icon: Briefcase,
    tag: "ORGANIZATIONS",
    title: "AI Adoption Programs",
    desc: "Help teams integrate AI into daily workflows through productivity training, automation, department-specific use cases, and implementation support.",
    audience: "ORGANIZATIONS",
    linkText: "Explore Solution",
    link: "/programs/custom",
  },
];

export const Studios = React.memo(function Studios() {
  return (
    <section id="studios" className="py-28 bg-[#faf9f8]">
      <div className="container-x">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-brand">OUR SOLUTIONS</p>
          <h2 className="mt-3 font-display text-5xl md:text-6xl leading-[1.05] text-balance">
            Four solutions. One <em className="italic">outcome</em> —
            <HighlightText className="text-ink ml-2 tracking-normal">
              real AI implementation.
            </HighlightText>
          </h2>
          <p className="mt-6 text-ink-soft text-lg max-w-2xl mx-auto">
            Whether you're a student, an institution, or an organization, our programs are designed to help you learn, build, and implement AI in real-world settings.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {studios.map((s) => (
            <article
              key={s.title}
              className="group relative rounded-3xl border border-border bg-white p-6 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col"
            >
              <div className="flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-[#faf9f8] text-ink group-hover:bg-brand/10 transition-all duration-300">
                  <s.icon className="h-5 w-5 group-hover:text-brand transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <span className="text-[10px] font-bold tracking-wider uppercase text-brand">
                  {s.audience}
                </span>
              </div>
              <p className="mt-6 text-[10px] font-bold uppercase tracking-widest text-brand">{s.tag}</p>
              <h3 className="mt-2 font-display text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm text-ink-soft leading-relaxed flex-grow">{s.desc}</p>
              <Link
                to={s.link}
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-brand group-hover:text-brand/80 transition-colors"
              >
                {s.linkText} <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
});
