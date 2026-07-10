import React, { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Calendar, FileText, User, UserCheck, CreditCard, Copyright, ShieldAlert, Award, ExternalLink, AlertTriangle, UserX, Sliders, Scale, Mail } from "lucide-react";
import { HighlightText } from "@/components/ui/HighlightText";

export const Route = createFileRoute("/terms-of-service")({
  component: TermsOfService,
});

const sections = [
  {
    id: "services",
    icon: <FileText className="w-6 h-6 text-[#f97316]" />,
    title: "Services",
    content: (
      <p>IndiaFutureAI provides AI learning programs, workshops, implementation services, institutional partnerships, AI labs, and related educational services.</p>
    )
  },
  {
    id: "eligibility",
    icon: <User className="w-6 h-6 text-[#f97316]" />,
    title: "Eligibility",
    content: (
      <p>You must be legally capable of entering into binding agreements or have appropriate parental or institutional permission where applicable.</p>
    )
  },
  {
    id: "registration",
    icon: <UserCheck className="w-6 h-6 text-[#f97316]" />,
    title: "Registration",
    content: (
      <p>You agree to provide accurate information during registration and keep your details updated.</p>
    )
  },
  {
    id: "payments",
    icon: <CreditCard className="w-6 h-6 text-[#f97316]" />,
    title: "Payments",
    content: (
      <p>Certain programs require payment. Fees, refunds, and payment schedules will be communicated during registration.</p>
    )
  },
  {
    id: "intellectual-property",
    icon: <Copyright className="w-6 h-6 text-[#f97316]" />,
    title: "Intellectual Property",
    content: (
      <>
        <p className="mb-4">All content including course materials, videos, slides, documents, frameworks, designs, branding, and website content remain the intellectual property of IndiaFutureAI unless otherwise stated.</p>
        <p>No material may be copied, redistributed, recorded, resold, or commercially used without written permission.</p>
      </>
    )
  },
  {
    id: "acceptable-use",
    icon: <ShieldAlert className="w-6 h-6 text-[#f97316]" />,
    title: "Acceptable Use",
    content: (
      <>
        <p className="mb-4">Users agree not to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Share course access with others</li>
          <li>Copy or distribute learning materials</li>
          <li>Attempt unauthorized access</li>
          <li>Misuse the platform</li>
          <li>Engage in unlawful activities</li>
        </ul>
      </>
    )
  },
  {
    id: "certificates",
    icon: <Award className="w-6 h-6 text-[#f97316]" />,
    title: "Certificates",
    content: (
      <p>Certificates may be issued only upon successful completion of eligible programs and fulfillment of participation requirements.</p>
    )
  },
  {
    id: "third-party-tools",
    icon: <ExternalLink className="w-6 h-6 text-[#f97316]" />,
    title: "Third-Party Tools",
    content: (
      <p>Programs may include access to third-party AI platforms. IndiaFutureAI is not responsible for changes, outages, or policies of these external services.</p>
    )
  },
  {
    id: "limitation-of-liability",
    icon: <AlertTriangle className="w-6 h-6 text-[#f97316]" />,
    title: "Limitation of Liability",
    content: (
      <p>While we strive to provide high-quality learning experiences, IndiaFutureAI does not guarantee employment, internships, freelance opportunities, business outcomes, or specific results.</p>
    )
  },
  {
    id: "termination",
    icon: <UserX className="w-6 h-6 text-[#f97316]" />,
    title: "Termination",
    content: (
      <p>We reserve the right to suspend or terminate access in cases of misuse, policy violations, or unlawful conduct.</p>
    )
  },
  {
    id: "changes-to-services",
    icon: <Sliders className="w-6 h-6 text-[#f97316]" />,
    title: "Changes to Services",
    content: (
      <p>Programs, schedules, instructors, and content may evolve over time to improve the learning experience.</p>
    )
  },
  {
    id: "governing-law",
    icon: <Scale className="w-6 h-6 text-[#f97316]" />,
    title: "Governing Law",
    content: (
      <p>These Terms shall be governed by the laws of India. Any disputes shall be subject to the jurisdiction of the competent courts of Gurugram, Haryana.</p>
    )
  },
  {
    id: "contact",
    icon: <Mail className="w-6 h-6 text-[#f97316]" />,
    title: "Contact",
    content: (
      <>
        <p className="mb-2">For any questions regarding these Terms:</p>
        <p className="font-semibold">IndiaFutureAI</p>
        <p>Email: <strong>hello@indiafutureai.com</strong></p>
      </>
    )
  }
];

function TermsOfService() {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sec) => {
      const element = document.getElementById(sec.id);
      if (element) observer.observe(element);
    });

    const handleScroll = () => {
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;
      if (isAtBottom && sections.length > 0) {
        setActiveSection(sections[sections.length - 1].id);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // accounting for sticky header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9f8] text-[#161413] flex flex-col">
      <Nav />
      <main className="flex-1 pt-32 pb-24">
        
        {/* HEADER TITLE */}
        <section className="container-x mx-auto max-w-5xl px-6 mb-16 text-center">
          <div className="border-b border-[#161413]/10 pb-12">
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
              Terms of <HighlightText className="text-brand">Service</HighlightText>
            </h1>
            <div className="flex items-center justify-center gap-2 text-[#f97316] font-medium text-sm mb-8">
              <Calendar className="w-4 h-4" />
              <span>Last Updated: 12 May, 2025</span>
            </div>
            <p className="text-[#161413]/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              By accessing or using IndiaFutureAI's website, programs, workshops, and services, you agree to these Terms of Service.
            </p>
          </div>
        </section>

        {/* TWO-COLUMN READING GRID */}
        <section className="container-x mx-auto max-w-5xl px-6 grid grid-cols-1 lg:grid-cols-[0.3fr_0.7fr] gap-12 items-start">
          
          {/* Left Column: Sticky Sidebar Index */}
          <aside className="hidden lg:block sticky top-32 w-full pr-6">
            <h3 className="text-[11px] font-bold text-[#161413]/40 uppercase tracking-[0.2em] mb-6">
              Outline
            </h3>
            <ul className="space-y-4 border-l border-[#161413]/10 pl-4">
              {sections.map((sec, index) => {
                const isActive = activeSection === sec.id;
                const numStr = String(index + 1).padStart(2, "0");
                return (
                  <li key={sec.id} className="relative">
                    {/* Active indicator dot */}
                    {isActive && (
                      <span className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-[#f97316]" />
                    )}
                    <button
                      onClick={() => handleScrollToSection(sec.id)}
                      className={`text-left text-sm font-semibold transition-colors duration-200 focus:outline-none flex gap-2 w-full ${
                        isActive
                          ? "text-[#f97316]"
                          : "text-[#161413]/50 hover:text-[#161413]"
                      }`}
                    >
                      <span>{numStr}.</span>
                      <span>{sec.title}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>

          {/* Right Column: Legal Text Content */}
          <article className="w-full flex flex-col gap-12">
            {sections.map((sec, index) => {
              const numStr = String(index + 1).padStart(2, "0");
              return (
                <section
                  key={sec.id}
                  id={sec.id}
                  className="scroll-mt-32 border-b border-[#161413]/5 pb-12 last:border-b-0 last:pb-0 flex flex-col sm:flex-row gap-6 md:gap-8"
                >
                  <div className="shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-[#fff5ec] border border-[#f97316]/20 flex items-center justify-center">
                      {sec.icon}
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h2 className="text-xl font-bold mb-4 text-[#161413]">
                      <span className="text-[#f97316] mr-2">{numStr}.</span>
                      {sec.title}
                    </h2>
                    <div className="text-[15px] text-[#161413]/70 leading-relaxed font-medium space-y-4">
                      {sec.content}
                    </div>
                  </div>
                </section>
              );
            })}
          </article>

        </section>
      </main>
      <Footer />
    </div>
  );
}
