import React from "react";

const stats = [
  { k: "500+", l: "Students in ongoing cohort" },
  { k: "100%", l: "Practical AI Training" },
  { k: "Custom", l: "Masterclasses & AI Labs" },
  { k: "Real", l: "World implementation" },
];

export const Stats = React.memo(function Stats() {
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
});
