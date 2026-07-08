import React from "react";
import { motion } from "framer-motion";
import {
  Workflow,
  MessageSquare,
  TrendingUp,
  BarChart3,
  Cpu,
  ArrowRight
} from "lucide-react";

const solutions = [
  {
    id: "process",
    title: "AI Process Automation",
    icon: Workflow,
    description: "Streamline operations and eliminate manual repetitive tasks across your entire organization with intelligent workflows.",
    className: "md:col-span-2 md:row-span-2",
    items: ["Workflow Automation", "Document Processing", "Invoice Automation", "Approval Workflows", "Business Process Optimization"],
  },
  {
    id: "customer",
    title: "Customer Engagement",
    icon: MessageSquare,
    description: "Deliver instant, personalized support at infinite scale.",
    className: "md:col-span-1",
    items: ["AI Chatbots", "Voice Agents", "CRM Sync"],
  },
  {
    id: "sales",
    title: "Sales & Marketing",
    icon: TrendingUp,
    description: "Accelerate revenue growth with hyper-personalized outreach.",
    className: "md:col-span-1",
    items: ["Lead Qualification", "Auto Follow-ups", "Email AI"],
  },
  {
    id: "operations",
    title: "Operations & Analytics",
    icon: BarChart3,
    description: "Transform raw data into actionable insights with predictive modeling and real-time monitoring.",
    className: "md:col-span-2",
    items: ["Real-time Dashboards", "Predictive Analytics", "KPI Monitoring"],
  },
  {
    id: "custom",
    title: "Custom AI",
    icon: Cpu,
    description: "Bespoke AI architectures designed for unique enterprise challenges.",
    className: "md:col-span-1",
    items: ["Custom LLMs", "AI Agents", "API Integrations"],
  },
];

export const AISolutions = React.memo(function AISolutions() {
  return (
    <section className="py-28 bg-surface relative overflow-hidden font-sans selection:bg-brand/20 selection:text-brand border-t border-ink/5" id="solutions">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[150px] pointer-events-none translate-x-1/3 translate-y-1/3" />
      
      <div className="container-x relative z-0">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 relative z-10">
          <p className="text-xs uppercase tracking-[0.2em] text-brand font-semibold mb-4 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-brand/50" /> Solutions
          </p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] text-ink tracking-tight">
            Comprehensive AI <br />
            for <em className="italic text-brand">Every Department.</em>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)] relative z-10">
          {solutions.map((solution, idx) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative bg-cream border border-ink/5 rounded-[2rem] p-8 overflow-hidden hover:border-brand/30 hover:shadow-[0_8px_30px_-12px_rgba(255,107,0,0.15)] shadow-[0_8px_30px_-12px_rgba(0,0,0,0.05)] transition-all duration-500 flex flex-col justify-between ${solution.className}`}
            >
              {/* Hover Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              {/* Content Header */}
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand group-hover:text-cream transition-all duration-500">
                  <solution.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-3xl text-ink mb-4">{solution.title}</h3>
                <p className="text-ink-soft text-lg leading-relaxed max-w-md">
                  {solution.description}
                </p>
              </div>

              {/* Sub-items (Pills) */}
              <div className="relative z-10 mt-8">
                <div className="flex flex-wrap gap-2">
                  {solution.items.map((item, itemIdx) => (
                    <span 
                      key={itemIdx}
                      className="px-3 py-1.5 rounded-lg bg-surface text-ink-soft text-sm border border-ink/5 group-hover:border-brand/20 group-hover:text-ink transition-colors duration-300 shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative corner arrow */}
              <div className="absolute bottom-8 right-8 opacity-0 translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 ease-out text-brand">
                <ArrowRight className="w-6 h-6 -rotate-45" />
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
});
