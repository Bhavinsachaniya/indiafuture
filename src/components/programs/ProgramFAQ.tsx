import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import type { ProgramData } from "@/config/programs";

export function ProgramFAQ({ data }: { data: ProgramData }) {
  if (!data.faqs || data.faqs.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left: Copy */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <p className="text-xs uppercase tracking-[0.2em] text-brand font-semibold mb-4">
              Got Questions?
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-[1.05] mb-6">
              Frequently <br /> Asked <span className="italic text-brand-soft">Questions</span>
            </h2>
            <p className="text-ink-soft text-lg leading-relaxed">
              Everything you need to know about the {data.title}. Can't find the answer you're looking for? Reach out to our team.
            </p>
          </div>

          {/* Right: Accordion */}
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {data.faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="bg-surface border border-ink/5 rounded-2xl px-6 py-2 overflow-hidden shadow-sm data-[state=open]:bg-white data-[state=open]:border-brand/20 transition-all">
                  <AccordionTrigger className="font-display text-xl text-ink hover:text-brand hover:no-underline py-4 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-ink-soft leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
        </div>
      </div>
    </section>
  );
}
