import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ArrowRight, Mail, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for reaching out! We'll be in touch soon.");
  };

  return (
    <div className="min-h-screen bg-ink text-cream font-sans flex flex-col selection:bg-brand selection:text-white">
      <Nav theme="dark" />
      <main className="flex-1 flex flex-col items-center justify-center pt-32 pb-24 px-4 relative overflow-hidden">
        
        {/* Background Accents */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px] -translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[150px] translate-x-1/3 pointer-events-none" />

        <div className="w-full max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Left Column: Copy */}
          <div>
            <p className="text-brand text-sm font-semibold tracking-widest uppercase mb-4 flex items-center gap-2">
              <MessageSquare className="h-4 w-4" /> Get in touch
            </p>
            <h1 className="font-display text-5xl md:text-7xl mb-6 leading-[1.1]">
              Let's build <br />
              <span className="italic text-brand-soft">something real.</span>
            </h1>
            <p className="text-cream/70 text-lg md:text-xl max-w-md mb-8">
              Whether you want to join the next upskilling cohort, curate a masterclass for your school, or deploy AI in your team—we're here.
            </p>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#161413] border border-cream/10 max-w-sm">
              <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-brand" />
              </div>
              <div>
                <p className="text-sm text-cream/50 uppercase tracking-wider mb-1">Direct Email</p>
                <a href="mailto:hello@indiafuture.com" className="text-cream hover:text-brand transition-colors font-medium">
                  hello@indiafuture.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Column: Form */}
          <div className="bg-[#161413] border border-cream/10 rounded-[32px] p-8 md:p-10 shadow-2xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2 col-span-2 sm:col-span-1">
                  <label htmlFor="firstName" className="text-sm font-medium text-cream/90">First Name</label>
                  <input type="text" id="firstName" required className="w-full bg-ink border border-cream/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all placeholder:text-cream/20" placeholder="Jane" />
                </div>
                <div className="space-y-2 col-span-2 sm:col-span-1">
                  <label htmlFor="lastName" className="text-sm font-medium text-cream/90">Last Name</label>
                  <input type="text" id="lastName" required className="w-full bg-ink border border-cream/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all placeholder:text-cream/20" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-cream/90">Work Email</label>
                <input type="email" id="email" required className="w-full bg-ink border border-cream/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all placeholder:text-cream/20" placeholder="jane@company.com" />
              </div>

              <div className="space-y-2">
                <label htmlFor="interest" className="text-sm font-medium text-cream/90">I'm interested in...</label>
                <select id="interest" required className="w-full bg-ink border border-cream/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all appearance-none cursor-pointer">
                  <option value="" disabled selected>Select an option</option>
                  <option value="cohort">8-Week AI Upskilling Program</option>
                  <option value="masterclass">Masterclasses & Certification</option>
                  <option value="team">Customized AI Programs for Orgs</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-cream/90">Message</label>
                <textarea id="message" required rows={4} className="w-full bg-ink border border-cream/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all resize-none placeholder:text-cream/20" placeholder="Tell us a bit about your goals..."></textarea>
              </div>
              
              <button type="submit" className="w-full group inline-flex items-center justify-center gap-2 rounded-xl bg-brand text-white px-6 py-4 text-base font-medium transition-all hover:bg-brand/90 hover:-translate-y-0.5 shadow-lg shadow-brand/20">
                Send Message <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
