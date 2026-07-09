import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import type { ProgramData } from "@/config/programs";

export function ProgramTestimonials({ data }: { data: ProgramData }) {
  if (!data.testimonials || data.testimonials.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-surface relative overflow-hidden border-t border-ink/5">
      <div className="container-x">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <p className="text-xs uppercase tracking-[0.2em] text-brand font-semibold flex items-center justify-center gap-4">
              <span className="w-12 h-[1px] bg-brand/40" /> STUDENT STORIES <span className="w-12 h-[1px] bg-brand/40" />
            </p>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05]">
            Don't just take <br />
            <span className="italic text-brand-soft">our word for it.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {data.testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-ink/5 rounded-3xl p-8 md:p-10 shadow-sm relative group hover:border-brand/20 transition-colors"
            >
              <div className="absolute top-8 right-8 text-ink/5 group-hover:text-brand/5 transition-colors">
                <Quote className="w-16 h-16" />
              </div>
              
              <div className="flex gap-1 mb-8">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand text-brand" />
                ))}
              </div>
              
              <p className="text-xl md:text-2xl text-ink font-medium leading-relaxed mb-8 relative z-10">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface border border-ink/10 flex items-center justify-center font-display text-xl text-ink">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-ink">{testimonial.author}</p>
                  <p className="text-sm text-ink-soft">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
