import React, { useState } from "react";
import { Plus, Minus, MessageCircle, Laptop, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { HighlightText } from "@/components/ui/HighlightText";

const faqs = [
  {
    q: "Is this a course or a program?",
    a: "It's a hands-on AI implementation program. Every session is built around practical tools, projects, and real-world application.",
    icon: <Laptop className="w-5 h-5 text-[#f97316]" />,
  },
  {
    q: "Do I need prior AI experience?",
    a: "No. Our flagship 8-Week AI Upskilling Program is designed for students to start from the fundamentals and become AI-ready.",
    icon: <Laptop className="w-5 h-5 text-[#f97316]" />,
  },
  {
    q: "Who are the programs designed for?",
    a: "Our programs are designed for students, educators, and professionals looking to apply AI practically in their fields.",
    icon: <Laptop className="w-5 h-5 text-[#f97316]" />,
  },
  {
    q: "Do you work with schools and organizations?",
    a: "Yes. We design exclusive AI learning, certification programs, and masterclasses for institutions, MSMEs, and professional communities based on specific objectives.",
    icon: <Laptop className="w-5 h-5 text-[#f97316]" />,
  },
  {
    q: "Will I receive a certificate?",
    a: "Participants may receive industry-recognized certificates of participation or completion based on program structure, attendance, assessments, or project completion.",
    icon: <Laptop className="w-5 h-5 text-[#f97316]" />,
  },
  {
    q: "What makes IndiaFutureAI different?",
    a: "We focus on building, not just watching. You will leave with actual tools, workflows, and a portfolio of AI projects you can immediately use.",
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
            Everything you need to know about our programs, workshops, and AI solutions.
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
            to="/contact"
            className="text-[#f97316] font-bold flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            Contact us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
});
