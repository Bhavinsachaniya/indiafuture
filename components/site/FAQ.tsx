"use client";

import React, { useState } from "react";
import { Plus, Minus, MessageCircle, Laptop, ArrowRight } from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { fadeUpVariant, staggerContainerVariant, defaultViewport, springSoft } from "@/lib/motion";

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
    <section id="faq" className="bg-[#faf9f8] pb-24 pt-4 md:pt-6">
      <div className="container-x mx-auto">
        <motion.div
          className="text-center mb-12"
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          <motion.div
            variants={fadeUpVariant}
            className="flex items-center justify-center gap-4 text-[#f97316] font-bold text-[11px] uppercase tracking-[0.14em] mb-4"
          >
            <div className="w-8 h-[1px] bg-[#f97316]"></div>
            QUESTIONS
            <div className="w-8 h-[1px] bg-[#f97316]"></div>
          </motion.div>
          <motion.h2
            variants={fadeUpVariant}
            className="font-display font-medium text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.12] tracking-[-0.02em] text-[#161413] mb-6"
          >
            Frequently Asked
          </motion.h2>
          <motion.p
            variants={fadeUpVariant}
            className="text-lg text-[#161413]/70 max-w-lg mx-auto tracking-[-0.01em] leading-[1.7]"
          >
            Answering all your questions to help you become part of India’s Largest AI Community.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col gap-4"
          variants={staggerContainerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={f.q}
                variants={fadeUpVariant}
                layout
                className={`bg-white rounded-2xl border overflow-hidden ${
                  isOpen
                    ? "border-[#f97316]/25 shadow-md"
                    : "border-[#161413]/5 shadow-sm hover:border-[#f97316]/15"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 p-6 text-left group"
                >
                  <span className="font-display text-xl md:text-2xl text-[#161413]">{f.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={springSoft}
                    className="shrink-0"
                  >
                    {isOpen ? (
                      <Minus className="h-6 w-6 text-[#f97316]" />
                    ) : (
                      <Plus className="h-6 w-6 text-[#161413]/60 group-hover:text-[#161413]" />
                    )}
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="pt-4 border-t border-[#161413]/10">
                          <p className="text-[15px] leading-relaxed text-[#161413]/70 font-medium">
                            {f.a}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-16 flex flex-col items-center justify-center gap-4 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.55 }}
        >
          <div className="flex items-center gap-3 text-[#161413]/70 font-medium">
            <MessageCircle className="w-6 h-6 text-[#f97316]" />
            Still have questions? We're here to help.
          </div>
          <Link
            href="/contact"
            className="text-[#f97316] font-bold flex items-center gap-2 hover:opacity-80 transition-opacity group"
          >
            Contact us{" "}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
});
