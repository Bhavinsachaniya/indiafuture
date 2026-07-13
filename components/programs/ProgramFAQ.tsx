"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import type { ProgramData } from "@/config/programs";

export function ProgramFAQ({ data }: { data: ProgramData }) {
  const [open, setOpen] = useState<number | null>(0);

  if (!data.faqs || data.faqs.length === 0) return null;

  return (
    <section id="faq" className="py-28 bg-[#fdfaf5]">
      <div className="container-x max-w-3xl">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-brand">Questions</p>
          <h2 className="mt-3 font-display text-5xl md:text-6xl leading-[1.05]">
            Frequently asked.
          </h2>
        </div>
        <div className="mt-12 divide-y divide-border border-y border-border">
          {data.faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="py-2">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 py-5 text-left group"
                >
                  <span className="font-display text-2xl">{faq.question}</span>
                  <Plus
                    className={`h-5 w-5 shrink-0 text-ink-soft transition-transform duration-300 ${isOpen ? "rotate-45 text-brand" : ""}`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-500 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="text-ink-soft leading-relaxed max-w-2xl">{faq.answer}</p>
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
