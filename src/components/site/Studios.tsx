import { Cpu, Workflow, LineChart, ShieldCheck } from "lucide-react";

const studios = [
  {
    icon: Cpu,
    tag: "Foundations",
    title: "AI Systems Studio",
    desc: "Build the mental model. Ship your first evaluated agent, retrieval pipeline, and structured output workflow.",
    weeks: "6 weeks",
  },
  {
    icon: Workflow,
    tag: "Applied",
    title: "Implementation Studio",
    desc: "Bring your own product surface. Ship AI features into a real codebase with reviews from senior engineers.",
    weeks: "8 weeks",
  },
  {
    icon: LineChart,
    tag: "Growth",
    title: "AI for Operators",
    desc: "For founders, PMs and operators. Design internal AI workflows that compound without a growing team.",
    weeks: "4 weeks",
  },
  {
    icon: ShieldCheck,
    tag: "Enterprise",
    title: "Team Deployments",
    desc: "Cohort-based rollouts for engineering orgs. Governance, evals, and adoption — end to end.",
    weeks: "Bespoke",
  },
];

export function Studios() {
  return (
    <section id="studios" className="py-28">
      <div className="container-x">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-brand">The studios</p>
          <h2 className="mt-3 font-display text-5xl md:text-6xl leading-[1.05] text-balance">
            Four studios. One <em className="italic">outcome</em> —
            <span className="relative inline-block border border-brand bg-brand/5 text-ink px-3 py-1 ml-2 align-middle">
              <span className="absolute -top-1 -left-1 w-2 h-2 bg-brand border border-brand"></span>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-brand border border-brand"></span>
              <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-brand border border-brand"></span>
              <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-brand border border-brand"></span>
              you ship
            </span>
            .
          </h2>
          <p className="mt-4 text-ink-soft text-lg max-w-xl">
            Pick the studio that matches where you are. Each runs live, in cohorts, with real
            reviews and a repo you can point to.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {studios.map((s) => (
            <article
              key={s.title}
              className="group relative rounded-3xl border border-border bg-card p-8 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.2)] transition-all duration-500"
            >
              <div className="flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-ink group-hover:bg-ink group-hover:text-cream transition-colors">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="text-xs text-ink-soft border border-border rounded-full px-3 py-1">
                  {s.weeks}
                </span>
              </div>
              <p className="mt-8 text-xs uppercase tracking-widest text-ink-soft">{s.tag}</p>
              <h3 className="mt-2 font-display text-3xl">{s.title}</h3>
              <p className="mt-3 text-ink-soft leading-relaxed">{s.desc}</p>
              <a
                href="#pricing"
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-ink group-hover:text-brand transition-colors"
              >
                Explore studio{" "}
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
