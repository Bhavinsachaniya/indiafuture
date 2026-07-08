import { Check } from "lucide-react";
import { Link } from "@tanstack/react-router";

const tiers = [
  {
    name: "Individual",
    price: "₹49,000",
    per: "per cohort",
    desc: "For engineers and operators joining a single studio.",
    features: ["One studio track", "Weekly live reviews", "Community access", "Certificate of completion"],
    cta: "Apply now",
    featured: false,
  },
  {
    name: "All Access",
    price: "₹1,49,000",
    per: "per year",
    desc: "Every studio, every cohort, for a full year. Most popular for serious builders.",
    features: ["All four studios", "1:1 mentorship credits", "Priority code reviews", "Alumni network + jobs board", "Guest sessions from operators"],
    cta: "Join All Access",
    featured: true,
  },
  {
    name: "Team",
    price: "Custom",
    per: "5+ seats",
    desc: "Cohort deployments for engineering orgs with governance, evals and adoption.",
    features: ["Private cohort", "Custom curriculum", "Dedicated success lead", "Reporting + rollout support"],
    cta: "Talk to us",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-28">
      <div className="container-x">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-brand">Pricing</p>
          <h2 className="mt-3 font-display text-5xl md:text-6xl leading-[1.05]">
            One membership. <em className="italic">Every studio.</em>
          </h2>
          <p className="mt-4 text-ink-soft text-lg">
            Pay per cohort, or unlock everything for a year. Refund guarantee inside the first two weeks.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-5 items-stretch">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-3xl border p-8 flex flex-col ${
                t.featured
                  ? "bg-ink text-cream border-ink shadow-[0_40px_80px_-30px_rgba(0,0,0,0.35)] md:-translate-y-4"
                  : "bg-card border-border"
              }`}
            >
              {t.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand text-cream text-xs font-medium px-3 py-1">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-3xl">{t.name}</h3>
              <p className={`mt-2 text-sm ${t.featured ? "text-cream/70" : "text-ink-soft"}`}>{t.desc}</p>
              <div className="mt-8 flex items-baseline gap-2">
                <span className="font-display text-5xl">{t.price}</span>
                <span className={`text-sm ${t.featured ? "text-cream/60" : "text-ink-soft"}`}>{t.per}</span>
              </div>
              <ul className="mt-8 space-y-3 text-sm flex-1">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className={`h-4 w-4 mt-0.5 shrink-0 ${t.featured ? "text-brand-soft" : "text-brand"}`} />
                    <span className={t.featured ? "text-cream/85" : "text-ink"}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 ${
                  t.featured ? "bg-cream text-ink hover:bg-white" : "bg-ink text-cream hover:opacity-90"
                }`}
              >
                {t.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
