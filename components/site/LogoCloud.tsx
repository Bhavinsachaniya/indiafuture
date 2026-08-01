const logos = ["Ramp", "Linear", "Notion", "Vercel", "Stripe", "Anthropic", "Figma"];

export function LogoCloud() {
  return (
    <section className="border-y border-border bg-surface/60">
      <div className="container-x py-10">
        <p className="text-center text-xs uppercase tracking-[0.14em] text-ink-soft">Teams from</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {logos.map((l) => (
            <span
              key={l}
              className="font-display text-2xl text-ink-soft/70 hover:text-ink transition-colors"
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
