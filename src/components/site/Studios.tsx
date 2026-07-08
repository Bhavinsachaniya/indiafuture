import React from "react";
import { Cpu, Workflow, LineChart, ShieldCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";

const studios = [
  {
    icon: Cpu,
    tag: "Upskilling",
    title: "AI Upskilling Programs",
    desc: "A comprehensive hands-on AI program designed to help students become AI-ready with practical skills.",
    weeks: "8 weeks",
    link: "/programs/upskilling",
  },
  {
    icon: Workflow,
    tag: "Masterclasses",
    title: "Masterclasses & Certifications",
    desc: "Customized AI masterclasses for schools, colleges, working professionals, and MSMEs to use AI workflows immediately.",
    weeks: "Live",
    link: "/programs/masterclasses",
  },
  {
    icon: LineChart,
    tag: "Workshops",
    title: "Hands-on Automation Labs",
    desc: "AI Labs and productivity training for educators and teams to automate repetitive tasks and build workflows.",
    weeks: "Custom",
    link: "/programs/workshops",
  },
  {
    icon: ShieldCheck,
    tag: "Custom",
    title: "Customized AI Programs",
    desc: "Exclusive AI learning and certification programs designed for organizations and communities based on specific objectives.",
    weeks: "Bespoke",
    link: "/programs/custom",
  },
];

export const Studios = React.memo(function Studios() {
  return (
    <section id="studios" className="py-28">
      <div className="container-x">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-brand">The Programs</p>
          <h2 className="mt-3 font-display text-5xl md:text-6xl leading-[1.05] text-balance">
            Four paths. One <em className="italic">outcome</em> —
            <span className="relative inline-block border border-brand bg-brand/5 text-ink px-3 py-1 ml-2 align-middle">
              <span className="absolute -top-1 -left-1 w-2 h-2 bg-brand border border-brand"></span>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-brand border border-brand"></span>
              <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-brand border border-brand"></span>
              <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-brand border border-brand"></span>
              practical skills
            </span>
            .
          </h2>
          <p className="mt-4 text-ink-soft text-lg max-w-xl mx-auto">
            Pick the program that matches where you are. We conduct customized AI masterclasses and certification programs for every audience.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {studios.map((s) => (
            <article
              key={s.title}
              className="group relative rounded-3xl border border-border bg-card p-8 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.2)] transition-all duration-500"
            >
              <div className="flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-ink group-hover:bg-ink group-hover:text-cream transition-colors">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="text-xs text-ink-soft border border-border rounded-full px-3 py-1">
                  {s.weeks}
                </span>
              </div>
              <p className="mt-8 text-xs uppercase tracking-widest text-ink-soft">{s.tag}</p>
              <h3 className="mt-2 font-display text-3xl">{s.title}</h3>
              <p className="mt-3 text-ink-soft leading-relaxed">{s.desc}</p>
              <Link
                to={s.link}
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-ink group-hover:text-brand transition-colors"
              >
                Explore program{" "}
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
});
