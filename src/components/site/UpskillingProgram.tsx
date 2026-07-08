import { motion } from "framer-motion";
import { 
  Layers, 
  MessageSquare, 
  Search, 
  Edit3, 
  Settings, 
  Zap, 
  Code2, 
  Award,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

const weeks = [
  {
    week: "01",
    title: "Build Your First AI Assistant",
    description: "Learn the fundamentals of AI and build your first working assistant on day one.",
    tags: "ship · assistant.indiafuture",
    icon: <Layers className="w-4 h-4 text-brand" />,
    iconBg: "bg-brand/10",
  },
  {
    week: "02",
    title: "Prompt Engineering",
    description: "Master the art of communicating with LLMs to craft reliable, high-quality outputs for real tasks.",
    tags: "craft · reliable outputs",
    icon: <MessageSquare className="w-4 h-4 text-orange-500" />,
    iconBg: "bg-orange-500/10",
  },
  {
    week: "03",
    title: "AI Research",
    description: "Use AI to accelerate learning, synthesize complex topics, and dive into research in depth.",
    tags: "read · synthesize · cite",
    icon: <Search className="w-4 h-4 text-indigo-500" />,
    iconBg: "bg-indigo-500/10",
  },
  {
    week: "04",
    title: "AI Content Creation",
    description: "Generate, iterate, and polish written and visual content with AI as your collaborative partner.",
    tags: "write · design · publish",
    icon: <Edit3 className="w-4 h-4 text-purple-500" />,
    iconBg: "bg-purple-500/10",
  },
  {
    week: "05",
    title: "AI Productivity",
    description: "Email, planning, notes, scheduling — build a personal system that saves hours weekly.",
    tags: "system · workflow · time",
    icon: <Settings className="w-4 h-4 text-cyan-500" />,
    iconBg: "bg-cyan-500/10",
  },
  {
    week: "06",
    title: "AI Automation",
    description: "Connect tools, automate repetitive tasks, and build small workflows that run for you.",
    tags: "connect · trigger · run",
    icon: <Zap className="w-4 h-4 text-amber-500" />,
    iconBg: "bg-amber-500/10",
  },
  {
    week: "07",
    title: "Projects",
    description: "Pick a real problem — academic, personal, or professional — and build a solution end-to-end.",
    tags: "scope · build · iterate",
    icon: <Code2 className="w-4 h-4 text-emerald-500" />,
    iconBg: "bg-emerald-500/10",
  },
  {
    week: "08",
    title: "Showcase & Implementation",
    description: "Demo your project, get feedback, and ship it into real use — portfolio, campus, or workplace.",
    tags: "demo · ship · implement",
    badge: "Capstone",
    icon: <Award className="w-4 h-4 text-rose-500" />,
    iconBg: "bg-rose-500/10",
  }
];

export function UpskillingProgram() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container-x relative z-10">
        
        {/* Header Area */}
        <div className="flex flex-col items-center text-center gap-8 mb-16">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="w-6 h-[1px] bg-ink-soft"></span>
              <p className="text-sm font-mono text-ink-soft tracking-wider uppercase">03 • Flagship Program</p>
              <span className="w-6 h-[1px] bg-ink-soft"></span>
            </div>
            
            <h2 className="text-[clamp(2.5rem,4vw,4rem)] md:text-5xl lg:text-6xl font-medium tracking-tight text-ink mb-6 text-balance max-w-4xl mx-auto leading-[1.1]">
              The <span className="relative inline-block border border-brand bg-brand/5 text-ink px-3 py-1 mx-2 align-middle not-italic overflow-visible"><span className="absolute -top-1 -left-1 w-2 h-2 bg-brand border border-brand"></span><span className="absolute -top-1 -right-1 w-2 h-2 bg-brand border border-brand"></span><span className="absolute -bottom-1 -left-1 w-2 h-2 bg-brand border border-brand"></span><span className="absolute -bottom-1 -right-1 w-2 h-2 bg-brand border border-brand"></span>8-Week</span> AI Upskilling Program.
            </h2>
            
            <p className="text-lg md:text-xl text-ink-soft leading-relaxed max-w-xl mx-auto">
              A structured journey for students — from your first AI assistant to a shipped, showcase-ready project. 
              Each week builds on the last; by week eight, you have a working portfolio, not a folder of notes.
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-3 shrink-0">
            <div className="text-sm font-mono text-ink-soft uppercase tracking-wider flex items-center justify-center gap-2">
              <span>Next Cohort</span>
            </div>
            <div className="flex items-center justify-center gap-4">
              <span className="text-lg font-medium text-ink">February 2025</span>
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white rounded-md px-8" asChild>
                <Link to="/contact">Apply now</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Grid of Weeks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {weeks.map((week, idx) => (
            <motion.div
              key={week.week}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group relative flex flex-col p-6 rounded-2xl border border-border/50 bg-white shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Card Header */}
              <div className="flex justify-between items-start mb-12">
                <span className="text-sm font-mono text-orange-600 font-medium tracking-wide">
                  WEEK {week.week}
                </span>
                
                {week.badge ? (
                  <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-mono font-medium flex items-center gap-1.5">
                    {week.badge}
                  </span>
                ) : (
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${week.iconBg} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    {week.icon}
                  </div>
                )}
              </div>
              
              {/* Card Body */}
              <div className="flex-1">
                <h3 className="text-xl font-medium text-ink mb-3 group-hover:text-orange-600 transition-colors">
                  {week.title}
                </h3>
                <p className="text-ink-soft text-sm leading-relaxed mb-12">
                  {week.description}
                </p>
              </div>
              
              {/* Card Footer */}
              <div className="mt-auto pt-4 border-t border-border/30">
                <p className="text-xs font-mono text-ink-soft/70">
                  {week.tags}
                </p>
              </div>
              
              {/* Subtle hover background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/0 to-orange-50/0 group-hover:from-orange-50/50 group-hover:to-transparent rounded-2xl transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t border-border/40">
          <div className="flex items-center gap-2 text-sm text-ink-soft">
            <span className="flex items-center justify-center w-5 h-5 rounded-full border border-ink-soft/50 text-[10px]">i</span>
            <p>The 8-week program is one of Indiafuture's student offerings — explore institutional and corporate tracks above.</p>
          </div>
          
          <a href="#programs" className="text-sm font-medium text-ink flex items-center gap-2 hover:text-orange-600 transition-colors group">
            See all programs 
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
}
