import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ArrowRight, Mail, MessageSquare } from "lucide-react";
import { HighlightText } from "@/components/ui/HighlightText";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for reaching out! We'll be in touch soon.");
  };

  return (
    <div className="min-h-screen bg-surface text-ink font-sans flex flex-col selection:bg-brand/20 selection:text-brand">
      <Nav theme="light" />
      <main className="flex-1 flex flex-col items-center justify-center pt-32 pb-24 px-4 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px] -translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[150px] translate-x-1/3 pointer-events-none" />

        <div className="container-x w-full mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left Column: Copy */}
          <div>
            <p className="text-brand text-sm font-semibold tracking-widest uppercase mb-4 flex items-center gap-2">
              <MessageSquare className="h-4 w-4" /> Get in touch
            </p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6 leading-[1.1]">
              Let's build{" "}
              <HighlightText className="text-black tracking-normal">
                something real.
              </HighlightText>
            </h1>
            <p className="text-ink-soft text-lg md:text-xl max-w-md mb-8">
              Whether you want to join the next upskilling cohort, curate a masterclass for your
              school, or deploy AI in your team—we're here.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-ink/5 shadow-sm max-w-sm">
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-brand" />
                </div>
                <div>
                  <p className="text-sm text-ink/50 uppercase tracking-wider mb-1">Direct Email</p>
                  <a
                    href="mailto:indiafutureai.connect@gmail.com"
                    className="text-ink hover:text-brand transition-colors font-medium break-all"
                  >
                    indiafutureai.connect@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-ink/5 shadow-sm max-w-sm">
                <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-ink/50 uppercase tracking-wider mb-1">
                    WhatsApp & Phone
                  </p>
                  <a
                    href="https://wa.me/917011596808?text=Hey,%20I%20need%20more%20info%20about%20IndiafutureAI"
                    target="_blank"
                    rel="noreferrer"
                    className="text-ink hover:text-[#25D366] transition-colors font-medium"
                  >
                    +91 70115 96808
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="bg-white border border-ink/5 rounded-[32px] p-8 md:p-10 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.05)]">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2 col-span-2 sm:col-span-1">
                  <label htmlFor="firstName" className="text-sm font-medium text-ink/90">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    required
                    className="w-full bg-surface border border-ink/10 rounded-xl px-4 py-3 text-ink focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all placeholder:text-ink/30"
                    placeholder="Jane"
                  />
                </div>
                <div className="space-y-2 col-span-2 sm:col-span-1">
                  <label htmlFor="lastName" className="text-sm font-medium text-ink/90">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    required
                    className="w-full bg-surface border border-ink/10 rounded-xl px-4 py-3 text-ink focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all placeholder:text-ink/30"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-ink/90">
                  Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full bg-surface border border-ink/10 rounded-xl px-4 py-3 text-ink focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all placeholder:text-ink/30"
                  placeholder="jane@company.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="interest" className="text-sm font-medium text-ink/90">
                  I'm interested in...
                </label>
                <select
                  id="interest"
                  required
                  className="w-full bg-surface border border-ink/10 rounded-xl px-4 py-3 text-ink focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all appearance-none cursor-pointer"
                >
                  <option value="" disabled selected>
                    Select an option
                  </option>
                  <option value="cohort">8-Week AI Upskilling Program</option>
                  <option value="masterclass">Masterclasses & Certification</option>
                  <option value="team">Customized AI Programs for Orgs</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-ink/90">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full bg-surface border border-ink/10 rounded-xl px-4 py-3 text-ink focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all resize-none placeholder:text-ink/30"
                  placeholder="Tell us a bit about your goals..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full group inline-flex items-center justify-center gap-2 rounded-xl bg-brand text-white px-6 py-4 text-base font-medium transition-all hover:bg-brand/90 hover:-translate-y-0.5 shadow-lg shadow-brand/20"
              >
                Send Message{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
