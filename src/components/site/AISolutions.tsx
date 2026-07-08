import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Workflow,
  MessageSquare,
  TrendingUp,
  BarChart3,
  Cpu,
  CheckCircle2
} from "lucide-react";

const solutions = [
  {
    id: "process",
    title: "AI Process Automation",
    icon: Workflow,
    description: "Streamline operations and eliminate manual repetitive tasks across your entire organization.",
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
    title: "AI Customer Engagement",
    icon: MessageSquare,
    description: "Deliver instant, personalized support and scale your customer interactions infinitely.",
    items: [
      "AI Chatbots",
      "WhatsApp Automation",
      "Voice AI Agents",
      "Customer Support Automation",
      "CRM Integration",
    ],
  },
  {
    id: "sales",
    title: "AI Sales & Marketing",
    icon: TrendingUp,
    description: "Accelerate revenue growth with intelligent lead generation and hyper-personalized outreach.",
    items: [
      "Lead Capture & Qualification",
      "Automated Follow-ups",
      "Email Automation",
      "Proposal Generation",
      "Marketing Campaign Automation",
    ],
  },
  {
    id: "operations",
    title: "AI Operations & Analytics",
    icon: BarChart3,
    description: "Transform raw data into actionable insights with predictive modeling and real-time monitoring.",
    items: [
      "Real-time Dashboards",
      "Business Intelligence",
      "KPI Monitoring",
      "Predictive Analytics",
      "Automated Reports",
    ],
  },
  {
    id: "custom",
    title: "Custom AI Solutions",
    icon: Cpu,
    description: "Bespoke AI architectures designed specifically for your unique enterprise challenges.",
    items: [
      "AI Agents",
      "Custom LLM Applications",
      "API Integrations",
      "Enterprise AI Solutions",
      "AI Consulting & Deployment",
    ],
  },
];

export const AISolutions = React.memo(function AISolutions() {
  const [activeTab, setActiveTab] = useState(solutions[0].id);

  const activeContent = solutions.find((s) => s.id === activeTab)!;

  return (
    <section className="py-28 bg-surface relative overflow-hidden" id="solutions">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      
      <div className="container-x relative z-10">
        <div className="max-w-3xl mb-16">
          <p className="text-xs uppercase tracking-[0.2em] text-brand">Solutions</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl leading-[1.1]">
            Comprehensive AI Implementation for <em className="italic text-brand-soft">Every Department.</em>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Tabs Sidebar */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {solutions.map((solution) => {
              const isActive = activeTab === solution.id;
              const Icon = solution.icon;
              return (
                <button
                  key={solution.id}
                  onClick={() => setActiveTab(solution.id)}
                  className={`flex items-center gap-4 p-5 rounded-2xl text-left transition-all duration-300 border ${
                    isActive
                      ? "bg-ink text-cream border-ink shadow-lg scale-[1.02]"
                      : "bg-transparent text-ink hover:bg-white border-transparent hover:border-border"
                  }`}
                >
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-full shrink-0 transition-colors ${
                      isActive ? "bg-cream text-ink" : "bg-card text-ink-soft border border-border"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg sm:text-xl">{solution.title}</h3>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-7">
            <div className="bg-card border border-border rounded-[2rem] p-8 md:p-12 h-full shadow-sm relative overflow-hidden flex flex-col justify-center min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                      <activeContent.icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-display text-3xl md:text-4xl text-ink">{activeContent.title}</h3>
                  </div>
                  
                  <p className="text-ink-soft text-lg mb-10 max-w-lg leading-relaxed">
                    {activeContent.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
                    {activeContent.items.map((item, idx) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 + 0.2, duration: 0.4 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                        <span className="text-ink font-medium">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
