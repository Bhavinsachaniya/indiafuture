import React from "react";
import { motion } from "framer-motion";
import {
  Workflow,
  MessageSquare,
  TrendingUp,
  BarChart3,
  Cpu,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const solutions = [
  {
    id: "process",
    title: "AI Process Automation",
    icon: Workflow,
    description:
      "Streamline operations and eliminate manual repetitive tasks across your entire organization with intelligent workflows.",
    className: "lg:col-span-2",
    items: [
      "Workflow Automation",
      "Document Processing",
      "Invoice Automation",
      "Approval Workflows",
      "Business Process Optimization",
    ],
  },
  {
    id: "customer",
    title: "Customer Engagement",
    icon: MessageSquare,
    description: "Deliver instant, personalized support at infinite scale.",
    className: "lg:col-span-1",
    items: ["AI Chatbots", "Voice Agents", "CRM Sync"],
  },
  {
    id: "sales",
    title: "Sales & Marketing",
    icon: TrendingUp,
    description: "Accelerate revenue growth with hyper-personalized outreach.",
    className: "lg:col-span-1",
    items: ["Lead Qualification", "Auto Follow-ups", "Email AI"],
  },
  {
    id: "operations",
    title: "Operations & Analytics",
    icon: BarChart3,
    description:
      "Transform raw data into actionable insights with predictive modeling and real-time monitoring.",
    className: "lg:col-span-1",
    items: ["Real-time Dashboards", "Predictive Analytics", "KPI Monitoring"],
  },
  {
    id: "custom",
    title: "Custom AI",
    icon: Cpu,
    description: "Bespoke AI architectures designed for unique enterprise challenges.",
    className: "lg:col-span-1",
    items: ["Custom LLMs", "AI Agents", "API Integrations"],
  },
];

export const AISolutions = React.memo(function AISolutions() {
  return (
    <section
      className="py-28 bg-surface relative overflow-hidden font-sans selection:bg-brand/20 selection:text-brand border-t border-ink/5"
      id="solutions"
    >
      <div className="container-x relative z-0">
        {/* Header */}
        <div className="max-w-4xl mx-auto mb-16 relative z-10 text-center flex flex-col items-center">
          <p className="text-xs uppercase tracking-[0.2em] text-brand font-semibold mb-4 flex items-center justify-center gap-4">
            <span className="w-12 h-[1px] bg-brand/40" /> Solutions{" "}
            <span className="w-12 h-[1px] bg-brand/40" />
          </p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] text-ink tracking-tight">
            Comprehensive AI for <br className="hidden md:block" />
            <span className="relative inline-block border border-brand bg-brand/5 text-black px-4 py-1 mx-3 align-middle overflow-visible tracking-normal text-4xl md:text-5xl lg:text-[4rem]">
              <span className="absolute -top-1 -left-1 w-2 h-2 bg-brand border border-brand"></span>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-brand border border-brand"></span>
              <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-brand border border-brand"></span>
              <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-brand border border-brand"></span>
              Every Department
            </span>
            .
          </h2>
          <p className="mt-8 text-lg md:text-xl text-ink-soft max-w-2xl mx-auto leading-relaxed">
            For MSMEs, we provide the specialized automation solutions mentioned below to streamline your operations and accelerate growth.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
          {solutions.map((solution, idx) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative bg-white border border-ink/5 rounded-[2rem] p-8 lg:p-10 overflow-hidden hover:border-brand/30 hover:shadow-[0_20px_60px_-15px_rgba(255,107,0,0.1)] shadow-[0_8px_30px_-12px_rgba(0,0,0,0.04)] transition-all duration-500 flex flex-col justify-between ${solution.className}`}
            >
              {/* Subtle Grid Background for High UX Feel */}
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle, #000 1.5px, transparent 1.5px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="relative z-10 h-full flex flex-col">
                {/* Content */}
                <div className="flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand group-hover:text-cream transition-all duration-500 shrink-0">
                    <solution.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl text-ink mb-4 group-hover:text-brand transition-colors duration-300 tracking-tight">
                    {solution.title}
                  </h3>
                  <p className="text-ink-soft text-lg leading-relaxed mb-8 flex-grow">
                    {solution.description}
                  </p>

                  {/* Pills */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {solution.items.map((item, itemIdx) => (
                      <span
                        key={itemIdx}
                        className="px-3 py-1.5 rounded-xl bg-surface/50 text-ink/70 text-sm font-medium border border-ink/5 group-hover:border-brand/20 group-hover:text-brand group-hover:bg-brand/5 transition-all duration-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative corner arrow */}
              {/* <div className="absolute bottom-8 right-8 opacity-0 translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 ease-out text-brand">
                <ArrowRight className="w-6 h-6 -rotate-45" />
              </div> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});
