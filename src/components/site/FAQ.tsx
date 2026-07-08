import React, { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  { q: "Is this a course or a program?", a: "It's a practical upskilling program. We believe AI should not just be understood—it should be used. Every week you ship a real deliverable." },
  { q: "Do I need to know AI already?", a: "No. Our flagship 8-Week AI Upskilling Program is designed for students to start from the fundamentals and become AI-ready." },
  { q: "Who receives certificates?", a: "Participants may receive industry-recognized certificates of participation or completion based on program structure, attendance, assessments, or project completion." },
  { q: "Do you work with organizations?", a: "Yes. We design exclusive AI learning, certification programs, and masterclasses for institutions, MSMEs, and professional communities based on specific objectives." },
];

export const FAQ = React.memo(function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-28">
      <div className="container-x max-w-3xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-brand">Questions</p>
          <h2 className="mt-3 font-display text-5xl md:text-6xl leading-[1.05]">
            Frequently asked.
          </h2>
        </div>
        <div className="mt-12 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="py-2">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-5 text-left group"
                >
                  <span className="font-display text-2xl">{f.q}</span>
                  <Plus className={`h-5 w-5 shrink-0 text-ink-soft transition-transform duration-300 ${isOpen ? "rotate-45 text-brand" : ""}`} />
                </button>
                <div className={`grid transition-all duration-500 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <p className="text-ink-soft leading-relaxed max-w-2xl">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});
