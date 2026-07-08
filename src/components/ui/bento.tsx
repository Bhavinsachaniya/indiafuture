"use client";
import { clsx } from "clsx";
import { motion } from "framer-motion";
import { fadeUpVariant, defaultViewport } from "@/lib/motion";
import { LineChart, MapPin, Sparkles, Users, Zap } from "lucide-react";
import { HighlightText } from "@/components/ui/HighlightText";

export default function FUIBentoGrid() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="container-x">
        <h2 className="text-center text-xs font-medium uppercase tracking-[0.2em] text-brand">
          Sales
        </h2>
        <p className="mx-auto mt-4 max-w-4xl text-center font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] tracking-tight text-ink text-balance">
          Know more about your{" "}
          <HighlightText className="text-ink tracking-normal">
            customers
          </HighlightText>{" "}
          than they do.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-6 lg:grid-rows-2">
          <BentoCard
            eyebrow="Insight"
            title="Get perfect clarity"
            description="Radiant uses source-available Customer Analysis AI to determine which leads are worth pursuing."
            graphic={<InsightGraphic />}
            fade={["bottom"]}
            className="max-lg:rounded-t-3xl lg:col-span-3 lg:rounded-tl-3xl"
          />
          <BentoCard
            eyebrow="Analysis"
            title="Undercut your competition"
            description="Track competitor pricing in real-time and get alerts when to adjust your rates."
            graphic={<AnalysisGraphic />}
            className="lg:col-span-3 lg:rounded-tr-3xl"
          />
          <BentoCard
            eyebrow="Speed"
            title="Built for power users"
            description="Every interaction is optimized for speed with keyboard shortcuts and instant search."
            graphic={<SpeedGraphic />}
            className="lg:col-span-2 lg:rounded-bl-3xl"
          />
          <BentoCard
            eyebrow="Source"
            title="Get the furthest reach"
            description="Bypass the tedious grind of manual outreach — reach every prospect."
            graphic={<SourceGraphic />}
            className="lg:col-span-2"
          />
          <BentoCard
            eyebrow="Limitless"
            title="Sell globally"
            description="Radiant helps you sell in 200+ countries with local currencies and languages."
            graphic={<LimitlessGraphic />}
            fade={["top"]}
            className="max-lg:rounded-b-3xl lg:col-span-2 lg:rounded-br-3xl"
          />
        </div>
      </div>
    </section>
  );
}

export function BentoCard({
  className = "",
  eyebrow,
  title,
  description,
  graphic,
  fade = [],
}: {
  className?: string;
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  graphic?: React.ReactNode;
  fade?: ("top" | "bottom")[];
}) {
  return (
    <motion.div
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      className={clsx(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_1px_0_0_rgba(0,0,0,0.03),0_20px_60px_-30px_rgba(0,0,0,0.15)]",
        className,
      )}
    >
      <div className="relative h-64 shrink-0 overflow-hidden bg-surface">
        {graphic}
        {fade.includes("top") && (
          <div className="absolute inset-0 bg-gradient-to-b from-card via-card/40 to-transparent" />
        )}
        {fade.includes("bottom") && (
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        )}
      </div>
      <div className="p-8">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-brand">{eyebrow}</p>
        <p className="mt-3 font-display text-2xl leading-tight tracking-tight text-ink">{title}</p>
        <p className="mt-2 max-w-lg text-sm leading-relaxed text-ink-soft">{description}</p>
      </div>
    </motion.div>
  );
}

/* ---------- Graphics ---------- */

function InsightGraphic() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-8">
      <div className="relative w-full max-w-sm rounded-xl border border-border bg-card p-4 shadow-sm">
        <div className="flex items-center gap-2">
          <Sparkles className="h-3.5 w-3.5 text-brand" />
          <span className="text-[10px] uppercase tracking-widest text-ink-soft">Signal</span>
        </div>
        <div className="mt-3 space-y-2">
          {[85, 62, 44].map((w, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-gradient-to-br from-brand to-brand-soft" />
              <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface">
                <div className="h-full rounded-full bg-ink" style={{ width: `${w}%` }} />
              </div>
              <span className="font-mono text-[10px] text-ink-soft">{w}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AnalysisGraphic() {
  return (
    <div className="absolute inset-0 flex items-end justify-center p-8">
      <svg viewBox="0 0 300 140" className="w-full max-w-sm">
        <defs>
          <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.25" className="text-brand" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" className="text-brand" />
          </linearGradient>
        </defs>
        <path
          d="M0,110 L30,95 L60,105 L90,70 L120,80 L150,50 L180,60 L210,30 L240,42 L270,20 L300,28 L300,140 L0,140 Z"
          fill="url(#area)"
        />
        <path
          d="M0,110 L30,95 L60,105 L90,70 L120,80 L150,50 L180,60 L210,30 L240,42 L270,20 L300,28"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-brand"
        />
        <g className="text-ink" fill="currentColor">
          {[
            [90, 70],
            [150, 50],
            [210, 30],
            [270, 20],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="3" />
          ))}
        </g>
      </svg>
      <LineChart className="absolute right-4 top-4 h-4 w-4 text-brand" />
    </div>
  );
}

function SpeedGraphic() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-8">
      <div className="w-full max-w-[240px] rounded-xl border border-border bg-card p-4 shadow-sm font-mono text-[11px]">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-destructive/50" />
          <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
          <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
        </div>
        <div className="mt-3 space-y-1 text-ink-soft">
          <div>
            <span className="text-brand">›</span> radiant search
          </div>
          <div className="text-emerald-600">✓ 2.4k results in 12ms</div>
          <div>
            <span className="text-brand">›</span> radiant ship
          </div>
          <div className="flex items-center gap-1 text-ink">
            <Zap className="h-3 w-3 text-brand" /> deployed
          </div>
        </div>
      </div>
    </div>
  );
}

function SourceGraphic() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative h-full w-full">
        {[80, 130, 180].map((r, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 rounded-full border border-border"
            style={{
              width: r * 2,
              height: r * 2,
              transform: "translate(-50%,-50%)",
              opacity: 1 - i * 0.25,
            }}
          />
        ))}
        <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-2 border-card shadow-lg bg-ink">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces"
            alt="Avatar"
            className="h-full w-full object-cover"
          />
        </div>
        {[
          {
            top: "20%",
            left: "22%",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
          },
          {
            top: "30%",
            right: "18%",
            img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100&h=100&fit=crop&crop=faces",
          },
          {
            bottom: "22%",
            left: "28%",
            img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces",
          },
          {
            bottom: "18%",
            right: "22%",
            img: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=100&h=100&fit=crop&crop=faces",
          },
        ].map((pos, i) => (
          <div
            key={i}
            className="absolute h-8 w-8 overflow-hidden rounded-full shadow"
            style={{ top: pos.top, left: pos.left, right: pos.right, bottom: pos.bottom }}
          >
            <img src={pos.img} alt="Orbiting Face" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}

function LimitlessGraphic() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-6">
      <div className="relative h-full w-full overflow-hidden rounded-xl bg-gradient-to-br from-brand-soft via-card to-card">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "18px 18px",
            color: "hsl(var(--brand))",
          }}
        />
        {[
          { top: "25%", left: "20%" },
          { top: "45%", left: "60%" },
          { top: "65%", left: "35%" },
          { top: "30%", left: "78%" },
        ].map((pos, i) => (
          <div key={i} className="absolute" style={pos}>
            <MapPin className="h-4 w-4 text-brand" fill="currentColor" />
          </div>
        ))}
      </div>
    </div>
  );
}
