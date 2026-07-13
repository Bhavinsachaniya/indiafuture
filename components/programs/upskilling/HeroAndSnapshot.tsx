"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Calendar,
  Clock,
  MonitorPlay,
  Users,
  Award,
  BookOpen,
} from "lucide-react";
import Link from "next/link";

export function HeroAndSnapshot() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center pt-32 pb-24 overflow-hidden bg-surface">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[20%] -left-[10%] w-[800px] h-[800px] bg-brand/5 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
            className="absolute top-[20%] -right-[10%] w-[600px] h-[600px] bg-brand/5 rounded-full blur-[100px]"
          />
        </div>

        <div className="container-x relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-semibold tracking-widest uppercase mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                8-Week Premium Program
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-display text-5xl md:text-6xl lg:text-[5rem] leading-[1.05] tracking-tight text-ink mb-6"
              >
                Become an AI <br />
                <span className="relative inline-block border border-brand bg-brand/5 text-ink px-4 py-1 mx-2 align-middle not-italic overflow-visible">
                  <span className="absolute -top-1 -left-1 w-2 h-2 bg-brand border border-brand"></span>
                  <span className="absolute -top-1 -right-1 w-2 h-2 bg-brand border border-brand"></span>
                  <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-brand border border-brand"></span>
                  <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-brand border border-brand"></span>
                  Builder.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-ink-soft leading-relaxed mb-8 max-w-xl"
              >
                Stop reading about AI and start building with it. Master Prompt Engineering,
                Automation Workflows, and Custom Agents in an intensive 8-week bootcamp.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-4 mb-12"
              >
                <Link
                  href="/contact?program=upskilling"
                  className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-brand text-white px-8 py-4 text-base font-semibold transition-all hover:bg-brand/90 hover:-translate-y-0.5 shadow-xl shadow-brand/20 w-full sm:w-auto"
                >
                  Apply Now
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <button className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 rounded-xl bg-white border border-ink/10 text-ink px-8 py-4 text-lg font-medium transition-all hover:bg-surface hover:-translate-y-0.5 shadow-sm">
                  <Download className="w-5 h-5 text-ink-soft group-hover:text-brand transition-colors" />
                  Download Brochure
                </button>
              </motion.div>

              {/* Trust Badges / Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-ink/5"
              >
                {[
                  { label: "Learners", value: "3000+" },
                  { label: "Workshops", value: "120+" },
                  { label: "Completion", value: "95%" },
                  { label: "AI Tools", value: "40+" },
                ].map((stat, idx) => (
                  <div key={idx}>
                    <p className="font-display text-3xl text-ink mb-1">{stat.value}</p>
                    <p className="text-xs font-semibold text-ink-soft uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Illustration Area */}
            <div className="lg:col-span-5 relative hidden lg:block">
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 w-48 h-48 bg-white rounded-3xl border border-ink/5 shadow-2xl p-6 flex flex-col justify-between"
              >
                <div className="w-10 h-10 bg-brand/10 rounded-full flex items-center justify-center text-brand font-bold text-xl">
                  AI
                </div>
                <div>
                  <div className="w-3/4 h-2 bg-ink/10 rounded-full mb-2" />
                  <div className="w-1/2 h-2 bg-ink/10 rounded-full" />
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 left-10 w-56 h-32 bg-ink text-white rounded-3xl border border-white/10 shadow-2xl p-6 flex flex-col justify-between z-20"
              >
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono text-cream/70">Workflow Deployed</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.5)]" />
                </div>
                <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="h-full bg-green-400"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Snapshot Section */}
      <section className="py-16 bg-white relative z-20 -mt-10 border-y border-ink/5 shadow-sm">
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: Calendar, label: "Duration", value: "8 Weeks" },
              { icon: MonitorPlay, label: "Format", value: "Online Live" },
              { icon: Users, label: "Skill Level", value: "Beginner Friendly" },
              { icon: Clock, label: "Commitment", value: "8-10 hrs/week" },
              { icon: Award, label: "Certificate", value: "Verified" },
              { icon: BookOpen, label: "Resources", value: "Lifetime Access" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center p-4 rounded-2xl hover:bg-surface transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-brand/10 text-brand flex items-center justify-center mb-3">
                  <item.icon className="w-5 h-5" />
                </div>
                <p className="text-xs uppercase tracking-widest font-semibold text-ink-soft mb-1">
                  {item.label}
                </p>
                <p className="font-medium text-ink">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
