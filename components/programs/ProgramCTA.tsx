"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import type { ProgramData } from "@/config/programs";
import { HighlightText } from "../ui/HighlightText";

export function ProgramCTA({ data }: { data: ProgramData }) {
  return (
    <section className="py-24 md:py-32 bg-ink text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/10 rounded-full blur-[150px]" />
      </div>

      <div className="container-x relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {data.id === "custom" && (
            <div className="flex items-center justify-center gap-4 mb-6">
              <p className="text-xs uppercase tracking-[0.14em] text-brand font-semibold flex items-center justify-center gap-4">
                <span className="w-12 h-[1px] bg-brand/40" /> GET STARTED{" "}
                <span className="w-12 h-[1px] bg-brand/40" />
              </p>
            </div>
          )}
          <h2 className="font-display text-5xl md:text-7xl leading-[1.05] mb-8">
            {data.id === "custom" ? (
              <>Bring an AI Lab to Your Institution</>
            ) : data.id === "workshops" ? (
              <>
                Ready to <HighlightText>automate?</HighlightText>
              </>
            ) : (
              <>
                Ready to <HighlightText>master AI?</HighlightText>
              </>
            )}
          </h2>
          <p className="text-xl md:text-2xl text-cream/70 leading-relaxed mb-12 max-w-2xl mx-auto">
            {data.id === "custom"
              ? "Build a customized AI Lab with infrastructure support, recurring training, and co-branded skill certifications."
              : data.id === "workshops"
                ? "Take the next logical step to prepare your organization AI ready. It’s not about IF, it’s about When. So, when do you start?"
                : "Hosting us at your institution’s campus will make it worthwhile. Maximize your organization’s revenue with procedural employee productivity today."}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/contact?program=${data.id}`}
              className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-brand text-white px-8 py-4 text-lg font-medium transition-all hover:bg-brand/90 hover:-translate-y-0.5 shadow-lg shadow-brand/20 overflow-hidden w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center gap-2">
                {data.id === "custom"
                  ? "SET UP AN AI LAB"
                  : data.id === "workshops"
                    ? "Start Now"
                    : "Invite us"}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            {/*   {data.id !== "workshops" && data.id !== "custom" && (
              <button className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 text-white px-8 py-4 text-lg font-medium transition-all hover:bg-white/10 hover:-translate-y-0.5 w-full sm:w-auto">
                <Download className="w-5 h-5 text-cream/70 group-hover:text-brand transition-colors" />
                Download Brochure
              </button>
            )} */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
