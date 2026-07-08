const cols = [
  { h: "Studios", l: ["AI Systems", "Implementation", "For Operators", "Team Deployments"] },
  { h: "Company", l: ["About", "Mentors", "Careers", "Contact"] },
  { h: "Resources", l: ["Field notes", "Case studies", "Alumni ships", "Community"] },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-x py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink text-cream font-display text-lg">I</span>
              <span className="font-display text-2xl">Indiafuture</span>
            </div>
            <p className="mt-4 text-sm text-ink-soft max-w-xs">
              An AI learning and implementation studio for people who build.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.h}>
              <h4 className="text-xs uppercase tracking-[0.18em] text-ink-soft">{c.h}</h4>
              <ul className="mt-4 space-y-2 text-sm">
                {c.l.map((x) => (
                  <li key={x}><a href="#" className="hover:text-brand transition-colors">{x}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-border pt-8 text-xs text-ink-soft">
          <p>© {new Date().getFullYear()} Indiafuture Studios. Built by practitioners.</p>
          <div className="flex gap-6"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Security</a></div>
        </div>
      </div>
    </footer>
  );
}
