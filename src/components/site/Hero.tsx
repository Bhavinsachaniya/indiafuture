import { ArrowRight, Sparkles, Cpu, GitBranch, Zap, LineChart, Users, Terminal, Play } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 grain-bg">
      <div className="container-x relative">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 backdrop-blur px-3 py-1 text-xs text-ink-soft">
            <Sparkles className="h-3.5 w-3.5 text-brand" />
            Cohort 07 — Applications open
          </div>
          <h1 className="mt-6 font-display text-[clamp(1.5rem,3.5vw,5rem)] leading-[1.02] tracking-tight text-balance max-w-4xl mx-auto">
            The studio where <em className="italic text-brand">builders</em> learn to ship with AI.
          </h1>
          <p className="mt-6 text-lg text-ink-soft leading-relaxed max-w-xl mx-auto">
            Indiafuture isn't a course. It's a working studio — you implement production AI workflows alongside senior practitioners.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="#pricing" className="group inline-flex items-center gap-2 rounded-full bg-ink text-cream px-5 py-3 text-sm font-medium hover:-translate-y-0.5 transition-all shadow-[0_10px_30px_-10px_rgba(0,0,0,0.35)]">
              Join the next cohort
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href="#method" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium hover:bg-secondary transition-colors">
              <Play className="h-3.5 w-3.5" /> How it works
            </a>
          </div>
        </div>

        {/* Bento Grid — 9 components */}
        <div className="relative mx-auto mt-16 max-w-6xl">
          <div className="absolute -inset-10 -z-10 rounded-[3rem] bg-gradient-to-br from-brand-soft via-transparent to-transparent blur-3xl opacity-70" />
          <div className="grid grid-cols-6 auto-rows-[130px] gap-4">

            {/* 1 — Live cohort (wide) */}
            <div className="group col-span-6 md:col-span-4 row-span-2 rounded-3xl border border-border bg-card p-6 relative overflow-hidden hover:-translate-y-1 transition-all duration-500 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.15)]">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-xs text-ink-soft">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inset-0 rounded-full bg-brand animate-ping opacity-75" />
                    <span className="relative rounded-full h-2 w-2 bg-brand" />
                  </span>
                  Live now — Week 04
                </span>
                <span className="text-xs font-mono text-ink-soft">indiafuture.studio/lab</span>
              </div>
              <h3 className="mt-6 font-display text-3xl md:text-4xl leading-tight">
                Building an <em className="italic text-brand">evaluator-aware</em> agent
              </h3>
              <p className="mt-3 text-ink-soft max-w-md text-sm leading-relaxed">
                A working notebook. A working repo. A working eval set. Ship by Friday.
              </p>
              <div className="absolute -right-8 -bottom-8 h-40 w-40 rounded-full bg-brand/10 blur-2xl group-hover:bg-brand/20 transition-colors" />
              <div className="mt-6 grid grid-cols-3 gap-2 max-w-sm">
                {[["12", "sessions"], ["4", "reviews"], ["∞", "hours"]].map(([k, l]) => (
                  <div key={l} className="rounded-xl border border-border bg-surface px-3 py-2">
                    <div className="font-display text-xl">{k}</div>
                    <div className="text-[10px] uppercase tracking-widest text-ink-soft">{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2 — Ship counter */}
            <div className="col-span-3 md:col-span-2 row-span-1 rounded-3xl border border-border bg-ink text-cream p-6 relative overflow-hidden group hover:-translate-y-1 transition-all duration-500">
              <Zap className="h-4 w-4 text-brand-soft" />
              <div className="mt-3 font-display text-4xl md:text-5xl leading-none">
                2,431
              </div>
              <p className="mt-1 text-xs text-cream/60">ships in the last 30 days</p>
              <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-brand/30 blur-2xl" />
            </div>

            {/* 3 — Terminal */}
            <div className="col-span-3 md:col-span-2 row-span-1 rounded-3xl border border-border bg-card p-5 overflow-hidden group hover:-translate-y-1 transition-all duration-500">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-destructive/60" />
                <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
                <Terminal className="ml-2 h-3 w-3 text-ink-soft" />
              </div>
              <pre className="mt-3 font-mono text-[11px] leading-relaxed text-ink-soft">
<span className="text-brand">$</span> indiafuture ship agent
<span className="text-emerald-600">✓</span> evals passed 24/24
<span className="text-emerald-600">✓</span> deployed → prod
              </pre>
            </div>

            {/* 4 — Mentor avatars */}
            <div className="col-span-3 md:col-span-2 row-span-1 rounded-3xl border border-border bg-card p-6 hover:-translate-y-1 transition-all duration-500">
              <Users className="h-4 w-4 text-brand" />
              <p className="mt-3 font-display text-xl leading-tight">Reviewed by senior practitioners</p>
              <div className="mt-3 flex -space-x-2">
                {[0,1,2,3,4].map((i) => (
                  <div key={i} className={`h-8 w-8 rounded-full border-2 border-card bg-gradient-to-br ${
                    ["from-brand to-brand-soft","from-ink to-brand","from-brand-soft to-cream","from-ink-soft to-ink","from-brand to-ink"][i]
                  }`} />
                ))}
                <div className="h-8 w-8 rounded-full border-2 border-card bg-secondary grid place-items-center text-[10px] font-medium">+40</div>
              </div>
            </div>

            {/* 5 — Weeks pill (tall) */}
            <div className="col-span-3 md:col-span-2 row-span-2 rounded-3xl border border-border bg-surface p-6 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
              <p className="text-xs uppercase tracking-widest text-brand">Curriculum</p>
              <h3 className="mt-2 font-display text-2xl">Week by week</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {[
                  {w:"01", t:"Retrieval Pipelines"},
                  {w:"02", t:"Eval Harness"},
                  {w:"03", t:"Structured Outputs"},
                  {w:"04", t:"Agent Loops", active:true},
                  {w:"05", t:"Cost Guardrails"},
                  {w:"06", t:"Ship Review"},
                ].map((s) => (
                  <li key={s.w} className={`flex items-center gap-3 rounded-lg px-3 py-2 text-xs transition-colors ${s.active ? "bg-ink text-cream" : "hover:bg-card"}`}>
                    <span className="font-mono opacity-60">{s.w}</span>
                    <span>{s.t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 6 — Uptime metric */}
            <div className="col-span-3 md:col-span-2 row-span-1 rounded-3xl border border-border bg-card p-6 hover:-translate-y-1 transition-all duration-500 overflow-hidden">
              <LineChart className="h-4 w-4 text-brand" />
              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-display text-4xl">97%</span>
                <span className="text-xs text-ink-soft">ship rate</span>
              </div>
              <svg viewBox="0 0 120 30" className="mt-2 w-full h-8">
                <path d="M0,22 L15,18 L30,20 L45,12 L60,14 L75,8 L90,10 L105,4 L120,6" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-brand" />
              </svg>
            </div>

            {/* 7 — Repo card */}
            <div className="col-span-3 md:col-span-2 row-span-1 rounded-3xl border border-border bg-card p-5 hover:-translate-y-1 transition-all duration-500">
              <div className="flex items-center gap-2 text-xs text-ink-soft">
                <GitBranch className="h-3.5 w-3.5" />
                <span className="font-mono">agent-eval-kit</span>
              </div>
              <p className="mt-3 text-sm text-ink leading-snug">"Merged my first PR with real evals today."</p>
              <p className="mt-2 text-[11px] text-ink-soft">— Priya, cohort 06</p>
            </div>

            {/* 8 — Model logos */}
            <div className="col-span-6 md:col-span-2 row-span-1 rounded-3xl border border-border bg-ink text-cream p-6 relative overflow-hidden group hover:-translate-y-1 transition-all duration-500">
              <Cpu className="h-4 w-4 text-brand-soft" />
              <p className="mt-3 font-display text-lg leading-tight">Model-agnostic by design</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {["GPT-5","Claude","Gemini","Llama","Mistral"].map((m) => (
                  <span key={m} className="text-[10px] rounded-full border border-cream/20 px-2 py-0.5 text-cream/80">{m}</span>
                ))}
              </div>
            </div>

            {/* 9 — CTA card */}
            <div className="col-span-6 md:col-span-4 row-span-1 rounded-3xl border border-border bg-gradient-to-br from-brand-soft via-card to-card p-6 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:-translate-y-1 transition-all duration-500">
              <div>
                <p className="text-xs uppercase tracking-widest text-brand">Next cohort · Aug 12</p>
                <h3 className="mt-1 font-display text-2xl md:text-3xl">Seats capped at 40 — so reviews stay real.</h3>
              </div>
              <a href="#pricing" className="group inline-flex items-center gap-2 rounded-full bg-ink text-cream px-5 py-3 text-sm font-medium shrink-0 hover:-translate-y-0.5 transition-all">
                Apply now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
