import React from "react";
import { Link } from "@tanstack/react-router";

export const Pricing = React.memo(function Pricing() {
  return (
    <section id="pricing" className="py-28">
      <div className="container-x">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-brand">Pricing</p>
          <h2 className="mt-3 font-display text-5xl md:text-6xl leading-[1.05]">
            One membership. <em className="italic">Every studio.</em>
          </h2>
          <p className="mt-6 text-ink-soft text-lg">
            If you have any doubts or want to learn more about our programs, please directly contact us.
          </p>
          
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-ink text-cream px-8 py-4 text-base font-medium transition-all hover:bg-ink/90 hover:-translate-y-0.5 shadow-lg"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
});
