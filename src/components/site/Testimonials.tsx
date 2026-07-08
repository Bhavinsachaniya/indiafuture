const baseItems = [
  { q: "Indiafuture is the only program I've been in where you walk out with production code, not just notes.", n: "Priya Ramesh", r: "Staff Engineer, fintech", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces" },
  { q: "The weekly reviews changed how our whole team thinks about evals. Worth every rupee.", n: "Marcus Weller", r: "Head of AI, SaaS scale-up", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=faces" },
  { q: "I went from 'exploring LLMs' to shipping an agent that saves my ops team 20 hours a week.", n: "Ananya Kapoor", r: "Founder, ops platform", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=faces" },
  { q: "Their approach to practical AI implementation is unparalleled. My team learned more in 8 weeks than in 2 years of building internally.", n: "Sarah Jenkins", r: "VP Engineering", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=faces" },
];

const items = [...baseItems, ...baseItems];

export function Testimonials() {
  return (
    <section className="py-28 bg-surface overflow-hidden">
      <div className="container-x">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-brand">Voices from the studio</p>
          <h2 className="mt-3 font-display text-[clamp(2.5rem,4vw,5rem)] leading-[1.05] text-balance max-w-4xl mx-auto">
            Real people. <span className="relative inline-block border border-brand bg-brand/5 text-ink px-3 py-1 mx-2 align-middle overflow-visible"><span className="absolute -top-1 -left-1 w-2 h-2 bg-brand border border-brand"></span><span className="absolute -top-1 -right-1 w-2 h-2 bg-brand border border-brand"></span><span className="absolute -bottom-1 -left-1 w-2 h-2 bg-brand border border-brand"></span><span className="absolute -bottom-1 -right-1 w-2 h-2 bg-brand border border-brand"></span>Real ships</span>. <em className="italic">Real change.</em>
          </h2>
        </div>
        
        <div className="mt-14 relative w-full overflow-hidden flex" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
          <div className="flex gap-6 animate-marquee w-max py-4 hover:[animation-play-state:paused]">
            {items.map((it, idx) => (
              <figure key={`${it.n}-${idx}`} className="w-[400px] shrink-0 rounded-3xl bg-card border border-border p-8 hover:-translate-y-1 transition-transform duration-500 shadow-sm hover:shadow-md">
                <blockquote className="font-display text-2xl leading-snug text-ink">"{it.q}"</blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <img src={it.img} alt={it.n} className="h-12 w-12 rounded-full border border-border object-cover" />
                  <div>
                    <div className="text-sm font-medium">{it.n}</div>
                    <div className="text-xs text-ink-soft">{it.r}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
