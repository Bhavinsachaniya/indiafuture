"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Stethoscope,
  Home,
  GraduationCap,
  Utensils,
  Briefcase,
  Factory,
  ShieldCheck,
} from "lucide-react";

export function Industries() {
  const industries = [
    {
      title: "Retail & E-commerce",
      desc: "Order updates, support, inventory workflows and more.",
      icon: ShoppingBag,
    },
    {
      title: "Healthcare & Clinics",
      desc: "Appointment booking, internal follow ups and more.",
      icon: Stethoscope,
    },
    {
      title: "Real Estate",
      desc: "Lead qualification, site visit scheduling and more.",
      icon: Home,
    },
    {
      title: "Education",
      desc: "Admissions queries, student communication and more.",
      icon: GraduationCap,
    },
    {
      title: "Hospitality & Food",
      desc: "Reservations, orders, guest support and more.",
      icon: Utensils,
    },
    {
      title: "Professional Services",
      desc: "Client intake, routine case updates and more.",
      icon: Briefcase,
    },
    {
      title: "Manufacturing",
      desc: "Order processing, supplier coordination and more.",
      icon: Factory,
    },
    {
      title: "Financial & Insurance Services",
      desc: "Document processing, client onboarding and more.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#FDFBF7] relative overflow-hidden">
      {/* Decorative top border with star */}
      <div className="absolute top-0 left-0 right-0 flex items-center justify-center">
        <div className="h-[1px] w-full max-w-4xl bg-gradient-to-r from-transparent via-brand/20 to-transparent" />
        <div className="absolute w-2 h-2 rotate-45 border border-brand/30 bg-[#FDFBF7]" />
      </div>

      <div className="container-x max-w-7xl mx-auto pt-8">
        {/* Section Header */}
        <div className="mb-16 text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-6">
            <p className="text-xs uppercase tracking-[0.14em] text-brand font-semibold">
              INDUSTRIES
            </p>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05] mb-6">
            Built Around How Your Industry Works
          </h2>
          <p className="text-lg text-ink-soft leading-relaxed max-w-2xl mx-auto">
            AI automation works best when it fits your day-to-day operations.
            <br className="hidden md:block" />
            We design use cases around your workflow, not a generic template.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-[1.5rem] p-8 transition-all duration-300 flex flex-col group shadow-sm border border-ink/5 hover:border-brand/20 hover:shadow-md"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-2xl border border-brand/20 bg-brand/5 flex items-center justify-center mb-6">
                <item.icon className="w-5 h-5 text-brand" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <h3 className="font-semibold text-base text-ink mb-3">{item.title}</h3>
              <p className="text-ink-soft text-[14px] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
