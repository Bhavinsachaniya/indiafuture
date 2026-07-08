import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink text-cream">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-cream text-ink font-display text-lg font-bold">I</span>
              <span className="font-display text-2xl tracking-tight">Indiafuture</span>
            </div>
            <p className="mt-6 text-sm text-cream/60 leading-relaxed">
              An AI learning and implementation studio for people who build. We don't just teach AI, we help you ship it to production.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-brand mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link to="/" className="text-cream/70 hover:text-brand transition-colors font-medium">Home</Link>
              </li>
              <li>
                <Link to="/contact" className="text-cream/70 hover:text-brand transition-colors font-medium">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-brand mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="text-cream/70 hover:text-cream transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-cream/70 hover:text-cream transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream/40">
          <p>© {new Date().getFullYear()} Indiafuture Studios. Built by practitioners.</p>
        </div>
      </div>
    </footer>
  );
}
