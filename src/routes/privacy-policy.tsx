import React, { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Calendar, User, ShieldCheck, Cookie, Share2, Lock, ExternalLink, UserCog, Users, RefreshCcw, Mail } from "lucide-react";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicy,
});

const sections = [
  {
    id: "information-we-collect",
    icon: <User className="w-6 h-6 text-[#f97316]" />,
    title: "Information We Collect",
    content: (
      <>
        <p className="mb-4">We may collect the following information:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Name, email address, phone number</li>
          <li>Organization or institution (if applicable)</li>
          <li>Payment information (processed securely through third-party payment providers)</li>
          <li>Course registrations and program preferences</li>
          <li>Communication records</li>
          <li>Website analytics and device information</li>
        </ul>
      </>
    )
  },
  {
    id: "how-we-use-your-information",
    icon: <ShieldCheck className="w-6 h-6 text-[#f97316]" />,
    title: "How We Use Your Information",
    content: (
      <>
        <p className="mb-4">We use your information to:</p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Deliver our programs and workshops</li>
          <li>Process registrations and payments</li>
          <li>Respond to enquiries</li>
          <li>Send important updates</li>
          <li>Improve our website and services</li>
          <li>Issue certificates where applicable</li>
          <li>Comply with legal obligations</li>
        </ul>
      </>
    )
  },
  {
    id: "cookies",
    icon: <Cookie className="w-6 h-6 text-[#f97316]" />,
    title: "Cookies",
    content: (
      <>
        <p className="mb-4">Our website may use cookies and similar technologies to improve your browsing experience and understand website usage.</p>
        <p>You may disable cookies through your browser settings.</p>
      </>
    )
  },
  {
    id: "data-sharing",
    icon: <Share2 className="w-6 h-6 text-[#f97316]" />,
    title: "Data Sharing",
    content: (
      <>
        <p className="mb-4">We do not sell your personal information.</p>
        <p className="mb-4">We may share limited information with trusted service providers for:</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Payment processing</li>
          <li>Email communication</li>
          <li>Website hosting</li>
          <li>Analytics</li>
          <li>Certification services</li>
        </ul>
        <p>These partners are required to protect your information.</p>
      </>
    )
  },
  {
    id: "data-security",
    icon: <Lock className="w-6 h-6 text-[#f97316]" />,
    title: "Data Security",
    content: (
      <>
        <p className="mb-4">We use reasonable administrative, technical, and organizational measures to safeguard your personal information.</p>
        <p>However, no online system can guarantee absolute security.</p>
      </>
    )
  },
  {
    id: "third-party-services",
    icon: <ExternalLink className="w-6 h-6 text-[#f97316]" />,
    title: "Third-Party Services",
    content: (
      <>
        <p className="mb-4">Our website may contain links to third-party platforms.</p>
        <p>IndiaFutureAI is not responsible for their privacy practices.</p>
      </>
    )
  },
  {
    id: "your-rights",
    icon: <UserCog className="w-6 h-6 text-[#f97316]" />,
    title: "Your Rights",
    content: (
      <>
        <p className="mb-4">You may request to:</p>
        <ul className="list-disc pl-5 space-y-2 mb-4">
          <li>Access your data</li>
          <li>Update your information</li>
          <li>Delete your information</li>
          <li>Withdraw marketing consent</li>
        </ul>
        <p>Requests may be sent to: <strong>hello@indiafutureai.com</strong></p>
      </>
    )
  },
  {
    id: "childrens-privacy",
    icon: <Users className="w-6 h-6 text-[#f97316]" />,
    title: "Children's Privacy",
    content: (
      <>
        <p>Our services are intended for individuals aged 13 years and above. Users below the applicable legal age should participate only with appropriate parental or institutional consent.</p>
      </>
    )
  },
  {
    id: "policy-updates",
    icon: <RefreshCcw className="w-6 h-6 text-[#f97316]" />,
    title: "Policy Updates",
    content: (
      <>
        <p>We may update this Privacy Policy periodically. Changes become effective upon publication on this page.</p>
      </>
    )
  },
  {
    id: "contact",
    icon: <Mail className="w-6 h-6 text-[#f97316]" />,
    title: "Contact",
    content: (
      <>
        <p className="mb-2">For any privacy-related queries:</p>
        <p className="font-semibold">IndiaFutureAI</p>
        <p>Email: <strong>hello@indiafutureai.com</strong></p>
      </>
    )
  }
];

function PrivacyPolicy() {
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
              Privacy <span className="text-[#f97316]">Policy</span>
            </h1>
            <div className="flex items-center justify-center gap-2 text-[#f97316] font-medium text-sm mb-8">
              <Calendar className="w-4 h-4" />
              <span>Last Updated: 12 May, 2025</span>
            </div>
            <p className="text-[#161413]/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Your privacy is important to us. This Privacy Policy explains how IndiaFutureAI collects, uses, stores, and protects your information when you visit our website, enroll in our programs, or interact with our services.
            </p>
          </div>
        </section>

        {/* TWO-COLUMN READING GRID */}
        <section className="container-x mx-auto max-w-5xl px-6 grid grid-cols-1 lg:grid-cols-[0.3fr_0.7fr] gap-12 items-start">
          
          {/* Left Column: Sticky Sidebar Index */}
          <aside className="hidden lg:block sticky top-32 w-full pr-6 max-h-[70vh] overflow-y-auto no-scrollbar">
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
