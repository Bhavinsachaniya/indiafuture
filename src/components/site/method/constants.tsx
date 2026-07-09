import React from "react";
import { BookOpen, Code2, Rocket, Briefcase } from "lucide-react";

export const steps = [
  {
    n: "01",
    t: "Learn",
    d: "Understand the fundamentals.",
    icon: <BookOpen className="w-8 h-8 text-brand" strokeWidth={1.5} />,
  },
  {
    n: "02",
    t: "Build",
    d: "Create with AI.",
    icon: <Code2 className="w-8 h-8 text-brand" strokeWidth={1.5} />,
  },
  {
    n: "03",
    t: "Implement",
    d: "Use AI every day.",
    icon: <Rocket className="w-8 h-8 text-brand" strokeWidth={1.5} />,
  },
  {
    n: "04",
    t: "Launch",
    d: "Freelance. Get hired. Build more.",
    icon: <Briefcase className="w-8 h-8 text-brand" strokeWidth={1.5} />,
  },
];
