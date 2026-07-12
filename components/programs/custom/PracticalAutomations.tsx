"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  PhoneCall,
  Bot,
  MessageCircle,
  Database,
  Workflow,
  Headset,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export function PracticalAutomations() {
  const automations = [
    {
      title: "AI Voice Agents",
      desc: "Answer, qualify, and route calls automatically.",
      icon: PhoneCall,
    },
    {
      title: "AI Chatbots",
      desc: "24/7 conversational support for websites and landing pages.",
      icon: Bot,
    },
    {
      title: "WhatsApp Automation",
      desc: "Automate follow-ups, reminders, and customer conversations.",
      icon: MessageCircle,
    },
    {
      title: "CRM Automation",
      desc: "Keep your pipeline updated without manual entry.",
      icon: Database,
    },
    {
      title: "Workflow Automation",
      desc: "Connect tools and remove repetitive busywork.",
      icon: Workflow,
    },
    {
      title: "AI Customer Support",
      desc: "Resolve common queries before they reach your team.",
      icon: Headset,
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#FDFBF7] relative overflow-hidden">
      <div className="container-x max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <p className="text-xs uppercase tracking-[0.2em] text-brand font-semibold">
              AI AUTOMATIONS
            </p>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05] mb-6">
            Practical AI Automations
            <br />
            for Modern Businesses
          </h2>
          <p className="text-lg text-ink-soft leading-relaxed max-w-3xl mx-auto">
            From first customer contact to internal operations, we build practical AI systems that
            save time, reduce manual work, and improve customer experience.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {automations.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-[1.5rem] p-8 transition-all duration-300 flex flex-col group shadow-sm border border-ink/5 hover:border-brand/20 hover:shadow-md"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl border border-brand/20 bg-brand/5 flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-brand" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="font-semibold text-lg text-ink mb-3">{item.title}</h3>
              <p className="text-ink-soft text-[15px] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center relative">
          <Link
            href="/contact?program=custom"
            className="relative z-10 inline-flex items-center justify-center gap-2 rounded-xl bg-brand text-white px-10 py-4 text-base font-medium transition-all hover:bg-brand/90 hover:-translate-y-0.5 shadow-lg shadow-brand/20"
          >
            Book a Demo
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          {/* Decorative line */}
          <div className="absolute top-1/2 left-0 right-0 flex items-center justify-center -z-0">
            <div className="h-[1px] w-full max-w-2xl bg-gradient-to-r from-transparent via-brand/20 to-transparent" />
            <div className="absolute w-2 h-2 rotate-45 border border-brand/30 bg-[#FDFBF7]" />
          </div>
        </div>
      </div>
    </section>
  );
}
