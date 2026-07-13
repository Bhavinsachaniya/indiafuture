"use client";

import React, { useState } from "react";
import { Plus, Minus, MessageCircle, Laptop, ArrowRight } from "lucide-react";
import Link from "next/link";
import { HighlightText } from "@/components/ui/HighlightText";

const faqs = [
  {
    q: "What is AI Creator Fellowship? How do I benefit from it?",
    a: "It is an 8 week community program. You learn 360 AI Creation and by the end of it you get placed via our partner networks. 100% of our fellows get Placement Opportunities and a certificate.",
    icon: <Laptop className="w-5 h-5 text-[#f97316]" />,
  },
  {
    q: "Do you have AI for Professionals?",
    a: "Yes, we have a cohort where we enable professionals to make efficient processes and smarter personal automations to make better money, save time and increase their income streams. You get a professional certificate.",
    icon: <Laptop className="w-5 h-5 text-[#f97316]" />,
  },
  {
    q: "Do I need prior AI experience?",
    a: "No! All you need is a device (either of phone, laptop, tab) and basic Hindi/English/other language knowledge",
    icon: <Laptop className="w-5 h-5 text-[#f97316]" />,
  },
  {
    q: "How do you engage with Schools, Colleges and Universities?",
    a: "We have exclusive AI upskilling and certification programs for students, teachers, and professors. At the same time, we set up AI labs & Centre for Excellence on campuses.",
    icon: <Laptop className="w-5 h-5 text-[#f97316]" />,
  },
  {
    q: "What do you have for hospitals?",
    a: "For hospitals, we have exclusive automation programs to deliver results leading to smoother processes, efficient work flow, direct savings and increased revenue.",
    icon: <Laptop className="w-5 h-5 text-[#f97316]" />,
  },
  {
    q: "How do you help MSMEs?",
    a: "We own end to end automations for MSMEs to give them income boost, savings and expanded business.",
    icon: <Laptop className="w-5 h-5 text-[#f97316]" />,
  },
  {
    q: "How can Consultants and Business Coaches benefit from IndiaFutureAI?",
    a: "At IFAI, we are committed to upskilling professionals as well as partner with them to further strengthen our mission of making India AI ready. If you are a coach, a consultant or a person with great network, we welcome you to partner with us for expansion.",
    icon: <Laptop className="w-5 h-5 text-[#f97316]" />,
  },
  {
    q: "How big is your community?",
    a: "IndiaFutureAI is India’s largest AI Community with 10k+ active members",
    icon: <Laptop className="w-5 h-5 text-[#f97316]" />,
  },
];

export const FAQ = React.memo(function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 bg-[#faf9f8]">
      <div className="container-x mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 text-[#f97316] font-bold text-[11px] uppercase tracking-[0.2em] mb-4">
            <div className="w-8 h-[1px] bg-[#f97316]"></div>
            QUESTIONS
            <div className="w-8 h-[1px] bg-[#f97316]"></div>
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-[#161413] mb-6">
            Frequently Asked .
          </h2>
          <p className="text-lg text-[#161413]/70 max-w-lg mx-auto">
            Answering all your questions to help you become part of India’s Largest AI Community.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            const num = String(i + 1).padStart(2, "0");
            return (
              <div
                key={f.q}
                className={`bg-white rounded-2xl border ${isOpen ? "border-[#f97316]/20 shadow-md" : "border-[#161413]/5 shadow-sm"} transition-all duration-300 overflow-hidden`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 p-6 text-left group"
                >
                  <span className="font-display text-xl md:text-2xl text-[#161413]">{f.q}</span>
                  {isOpen ? (
                    <Minus className="h-6 w-6 shrink-0 text-[#f97316]" />
                  ) : (
                    <Plus className="h-6 w-6 shrink-0 text-[#161413]/60 group-hover:text-[#161413] transition-colors" />
                  )}
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-2">
                      <div className="pt-4 border-t border-[#161413]/10">
                        <p className="text-[15px] leading-relaxed text-[#161413]/70 font-medium">
                          {f.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex items-center gap-3 text-[#161413]/70 font-medium">
            <MessageCircle className="w-6 h-6 text-[#f97316]" />
            Still have questions? We're here to help.
          </div>
          <Link
            href="/contact"
            className="text-[#f97316] font-bold flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            Contact us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
});
