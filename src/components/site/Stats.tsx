const stats = [
  { k: "2,400+", l: "practitioners in the network" },
  { k: "97%", l: "ship a working AI feature by week 4" },
  { k: "40+", l: "enterprise teams onboarded" },
  { k: "4.9", l: "average cohort rating" },
];

export function Stats() {
  return (
    <section className="py-24">
      <div className="container-x">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 border-y border-border py-14">
          {stats.map((s) => (
            <div key={s.l} className="text-center px-4">
              <div className="font-display text-5xl md:text-6xl leading-none text-ink">{s.k}</div>
              <p className="mt-3 text-sm text-ink-soft">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
