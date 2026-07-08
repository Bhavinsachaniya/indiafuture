import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Share2, Search, CheckCircle } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export function CertificateAndFAQ() {
  const faqs = [
    { q: "Who can join?", a: "This program is designed for beginners and intermediate learners. No advanced coding experience is required, though a basic understanding of logic is helpful." },
    { q: "How much time is needed each week?", a: "You should dedicate 8-10 hours per week. This includes 3 hours of live sessions and 5-7 hours for assignments and projects." },
    { q: "Will sessions be recorded?", a: "Yes, all live sessions are recorded and made available within 24 hours. You have lifetime access to these recordings." },
    { q: "What certificate is awarded?", a: "Upon completion of your capstone project, you will receive a verified digital certificate and LinkedIn badge." },
  ];

  return (
    <>
      {/* Certificate Section */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-ink/5">
        <div className="container-x">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Certificate Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-brand/5 blur-3xl rounded-full" />
              <div className="relative bg-surface border border-ink/10 rounded-2xl p-8 md:p-12 shadow-2xl shadow-ink/5 overflow-hidden group">
                <div className="absolute top-0 left-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none" />
                <div className="text-center border-[8px] border-double border-ink/10 p-8">
                  <AwardIcon className="w-16 h-16 mx-auto text-brand mb-6" />
                  <h3 className="font-display text-3xl text-ink mb-2">Certificate of Completion</h3>
                  <p className="text-ink-soft mb-8">This certifies that</p>
                  <div className="border-b-2 border-ink/20 pb-2 mb-8">
                    <p className="font-display text-4xl text-ink">Your Name Here</p>
                  </div>
                  <p className="text-ink-soft text-sm uppercase tracking-widest font-semibold mb-2">Has successfully completed the</p>
                  <p className="font-bold text-ink mb-8">8-Week AI Upskilling Program</p>
                  <div className="flex justify-between items-end mt-12">
                    <div className="w-24 border-b border-ink/20" />
                    <div className="w-24 border-b border-ink/20" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Copy */}
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-brand font-semibold mb-4">
                Verifiable Credentials
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-ink leading-[1.05] mb-8">
                Proof of Work.
              </h2>
              <div className="space-y-6">
                {[
                  { icon: ShieldCheck, text: "Cryptographically verified digital badge" },
                  { icon: Share2, text: "One-click addition to your LinkedIn Profile" },
                  { icon: Search, text: "Unique URL for employer verification" },
                  { icon: CheckCircle, text: "Validation of all completed capstone projects" }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-brand/10 text-brand flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <p className="text-lg text-ink-soft">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-surface relative overflow-hidden">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <h2 className="font-display text-4xl md:text-5xl text-ink leading-[1.05] mb-6">
                Frequently <br /> Asked <span className="italic text-brand-soft">Questions</span>
              </h2>
              <p className="text-ink-soft text-lg leading-relaxed">
                Got a question? We've got answers. If you need more specific details, feel free to contact admissions.
              </p>
            </div>

            <div className="lg:col-span-8">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="bg-white border border-ink/5 rounded-2xl px-6 py-2 shadow-sm data-[state=open]:border-brand/20 transition-all">
                    <AccordionTrigger className="font-display text-xl text-ink hover:text-brand hover:no-underline py-4 text-left">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-lg text-ink-soft leading-relaxed pb-6">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function AwardIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  )
}
