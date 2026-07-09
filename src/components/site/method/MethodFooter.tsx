import React from "react";
import { User, Terminal, Network, ShieldCheck, TrendingUp } from "lucide-react";

const footerItems = [
  { text: "Hands-on Learning", icon: <User className="w-5 h-5 text-brand" strokeWidth={1.5} /> },
  { text: "Real Projects", icon: <Terminal className="w-5 h-5 text-brand" strokeWidth={1.5} /> },
  { text: "AI Workflows", icon: <Network className="w-5 h-5 text-brand" strokeWidth={1.5} /> },
  { text: "Practical Implementation", icon: <ShieldCheck className="w-5 h-5 text-brand" strokeWidth={1.5} /> },
  { text: "Career Ready", icon: <TrendingUp className="w-5 h-5 text-brand" strokeWidth={1.5} /> },
];

export function MethodFooter() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 mb-32 z-20 relative">
      <div className="flex flex-wrap items-center justify-center gap-y-6 gap-x-8 md:gap-x-12 py-8 px-6 rounded-2xl bg-[#11100F] border border-white/5">
        {footerItems.map((item, index) => (
          <div key={index} className="flex items-center gap-3">
            {item.icon}
            <span className="text-cream/80 text-sm md:text-base font-medium">{item.text}</span>
            {index < footerItems.length - 1 && (
              <div className="hidden md:block w-px h-6 bg-white/10 ml-8 md:ml-12" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
