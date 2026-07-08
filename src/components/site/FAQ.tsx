import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  { q: "Is this a course or a program?", a: "Neither, really. It's a working studio — every week you ship a real deliverable, reviewed by senior practitioners. Closer to a residency than a course." },
  { q: "Do I need to know AI already?", a: "No. The Foundations studio assumes solid engineering fundamentals but no prior AI experience. Applied and Implementation studios expect Foundations-level fluency." },
  { q: "How much time per week?", a: "Plan for 6–8 focused hours: two live sessions, review time, and your build. It's the most honest number we can give you." },
  { q: "What if it's not for me?", a: "Full refund within the first two weeks, no questions. We'd rather you leave than stay in the wrong room." },
  { q: "Do you work with teams?", a: "Yes. We run private cohorts for engineering orgs, with a bespoke curriculum and a dedicated success lead. Talk to us." },
];

export function FAQ() {
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
}
