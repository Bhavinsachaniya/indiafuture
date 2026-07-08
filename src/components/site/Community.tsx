import { Users, MessageSquare, Briefcase } from "lucide-react";

const blocks = [
  { icon: Users, t: "2,400+ practitioners", d: "A private network of engineers, founders and operators who ship AI at work." },
  { icon: MessageSquare, t: "Always-on reviews", d: "Post a repo, get feedback within hours from someone who's done it before." },
  { icon: Briefcase, t: "Jobs & intros", d: "Curated roles, warm intros to the teams building AI you actually want to work with." },
];

export function Community() {
  return (
    <section id="community" className="py-28 bg-surface">
      <div className="container-x">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-brand">The community</p>
          <h2 className="mt-3 font-display text-[clamp(2.5rem,4vw,5rem)] leading-[1.05] text-balance max-w-4xl mx-auto">
            The <span className="relative inline-block border border-brand bg-brand/5 text-ink px-3 py-1 mx-2 align-middle overflow-visible"><span className="absolute -top-1 -left-1 w-2 h-2 bg-brand border border-brand"></span><span className="absolute -top-1 -right-1 w-2 h-2 bg-brand border border-brand"></span><span className="absolute -bottom-1 -left-1 w-2 h-2 bg-brand border border-brand"></span><span className="absolute -bottom-1 -right-1 w-2 h-2 bg-brand border border-brand"></span>room stays open</span> <em className="italic">after</em> the cohort.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {blocks.map((b) => (
            <div key={b.t} className="rounded-3xl bg-card border border-border p-8">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-cream">
                <b.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-display text-2xl">{b.t}</h3>
              <p className="mt-2 text-ink-soft leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
