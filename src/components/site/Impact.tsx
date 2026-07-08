import React from "react";
import { User, Building2, TrendingUp, Zap } from "lucide-react";
import { motion } from "framer-motion";

export const Impact = React.memo(function Impact() {
  return (
    <section className="bg-ink text-cream relative pt-24 pb-12" id="impact">
      <div className="container-x">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Sticky Header */}
          <div className="lg:col-span-5 lg:sticky lg:top-40 shrink-0 pt-8 pb-24 md:pt-14 md:pb-64 flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.2em] text-brand">The Impact</p>
            <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[1.05]">
              Real <em className="italic text-brand-soft">Growth</em>{" "}
              <br className="hidden lg:block" />
              At Every Level.
            </h2>
            <p className="mt-6 text-cream/70 text-lg max-w-md">
              AI isn't just about cutting costs. It's about exponential growth for both individuals
              and the organizations they power.
            </p>
          </div>

          {/* Right Scrolling Cards */}
          <div className="lg:col-span-7 flex flex-col gap-12 md:gap-24 pb-12">
            {/* Personal Impact Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="bg-[#161413] border border-cream/10 rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden group hover:border-brand/30 transition-colors duration-500"
            >
              <div className="absolute -top-32 -right-32 w-80 h-80 bg-brand/10 rounded-full blur-[100px] group-hover:bg-brand/20 transition-colors duration-500 pointer-events-none" />

              <div className="flex items-center gap-4 mb-10 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-cream text-ink flex items-center justify-center shrink-0">
                  <User className="w-7 h-7" />
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-cream">Personal Impact</h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-10 relative z-10 mt-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-display text-6xl text-brand">100X</span>
                    <Zap className="w-8 h-8 text-brand" />
                  </div>
                  <h4 className="text-xl font-medium text-cream mb-3">Productivity Boost</h4>
                  <p className="text-cream/70 font-display text-lg leading-relaxed tracking-wide">
                    Employees automate repetitive tasks to focus purely on high-value creative
                    problem solving and strategy.
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-display text-6xl text-brand">100X</span>
                    <TrendingUp className="w-8 h-8 text-brand" />
                  </div>
                  <h4 className="text-xl font-medium text-cream mb-3">Career Increment</h4>
                  <p className="text-cream/70 font-display text-lg leading-relaxed tracking-wide">
                    AI-skilled professionals command massive premiums in the market as highly
                    leverageable assets.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Organizational Impact Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="bg-[#161413] border border-cream/10 rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden group hover:border-brand/30 transition-colors duration-500"
            >
              <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-brand/10 rounded-full blur-[100px] group-hover:bg-brand/20 transition-colors duration-500 pointer-events-none" />

              <div className="flex items-center gap-4 mb-10 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-brand text-cream flex items-center justify-center shrink-0">
                  <Building2 className="w-7 h-7" />
                </div>
                <h3 className="font-display text-3xl md:text-4xl text-cream">
                  Organizational Growth
                </h3>
              </div>

              <div className="grid gap-10 relative z-10 mt-8">
                <div className="border-l-2 border-brand pl-6">
                  <h4 className="text-2xl font-medium text-cream mb-3">Exponential Scaling</h4>
                  <p className="text-cream/70 font-display text-xl leading-relaxed tracking-wide">
                    Scale operations infinitely without scaling headcount. Serve millions of
                    customers with the overhead of a startup.
                  </p>
                </div>
                <div className="border-l-2 border-brand/40 pl-6">
                  <h4 className="text-2xl font-medium text-cream mb-3">Operational Agility</h4>
                  <p className="text-cream/70 font-display text-xl leading-relaxed tracking-wide">
                    Adapt to market changes instantly with automated insights, predictive
                    intelligence, and rapid workflow generation.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
});
