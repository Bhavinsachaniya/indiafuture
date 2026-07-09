import React from "react";
import { BookOpen, Code2, Rocket, Briefcase } from "lucide-react";

const processSteps = [
  {
    title: "Learn",
    description: "Understand the fundamentals.",
    icon: <BookOpen className="w-8 h-8 text-brand" strokeWidth={1.5} />,
  },
  {
    title: "Build",
    description: "Create with AI.",
    icon: <Code2 className="w-8 h-8 text-brand" strokeWidth={1.5} />,
  },
  {
    title: "Implement",
    description: "Use AI every day.",
    icon: <Rocket className="w-8 h-8 text-brand" strokeWidth={1.5} />,
  },
  {
    title: "Launch",
    description: "Freelance. Get hired. Build more.",
    icon: <Briefcase className="w-8 h-8 text-brand" strokeWidth={1.5} />,
  },
];

export function MethodProcess() {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 mt-24 mb-32 z-20">
      {/* Connecting Dotted Line (Desktop only) */}
      <div className="hidden lg:block absolute top-[110px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-brand/30 to-transparent border-t border-dashed border-brand/40" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
        {processSteps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-8 rounded-3xl bg-[#11100F] border border-white/5 relative group hover:border-brand/30 transition-colors duration-300"
          >
            {/* Desktop Connection Dot */}
            <div className="hidden lg:block absolute top-[110px] -left-2 w-4 h-4 rounded-full bg-[#11100F] border-2 border-brand/50 shadow-[0_0_10px_rgba(255,102,0,0.5)] z-10" 
                 style={{ display: index === 0 ? 'none' : 'block' }} />
            
            <div className="w-20 h-20 rounded-2xl bg-black border border-white/5 flex items-center justify-center mb-8 relative z-10 shadow-inner">
              {step.icon}
            </div>
            
            <h3 className="font-display text-2xl text-cream mb-3">{step.title}</h3>
            <p className="text-cream/60 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
