"use client";

import React, { Suspense, useState } from "react";
import { ArrowRight, Mail, MessageSquare } from "lucide-react";
import { HighlightText } from "@/components/ui/HighlightText";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSearchParams } from "next/navigation";

// --- Form Validation Schema (Zod) ---
const INTEREST_OPTIONS = [
  { value: "upskilling-ai", label: "Upskilling with AI" },
  { value: "ai-automations", label: "AI Automations for my company" },
  { value: "hiring-ai-creators", label: "Hiring AI Creators" },
  { value: "upskill-employees", label: "Upskill my employees with AI" },
  { value: "ai-lab-campus", label: "Setting up AI Lab on my college campus" },
] as const;

const contactSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters."),
  lastName: z.string().min(2, "Last name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z
    .string()
    .min(1, "Please enter your phone number.")
    .refine((value) => {
      const digits = value.replace(/\D/g, "");
      return digits.length >= 10 && digits.length <= 15;
    }, "Please enter a valid phone number."),
  interest: z.string().min(1, "Please select an interest."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

function interestLabel(value: string) {
  return INTEREST_OPTIONS.find((option) => option.value === value)?.label ?? value;
}

// --- Form Component ---
function ContactForm() {
  const searchParams = useSearchParams();
  const programParam = searchParams.get("program");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Map URL parameter to dropdown value
  const defaultInterest = React.useMemo(() => {
    if (programParam === "ai-upskilling" || programParam === "upskilling") return "upskilling-ai";
    if (programParam === "custom") return "ai-automations";
    if (programParam === "masterclasses" || programParam === "workshops")
      return "upskill-employees";
    if (programParam === "ai-lab") return "ai-lab-campus";
    if (programParam === "hiring") return "hiring-ai-creators";
    return "";
  }, [programParam]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      interest: defaultInterest,
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    setIsSuccess(false);
    try {
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
      if (!scriptUrl) {
        throw new Error("Contact form is not configured. Missing NEXT_PUBLIC_GOOGLE_SCRIPT_URL.");
      }

      // text/plain avoids a CORS preflight; Google Apps Script accepts this reliably.
      const response = await fetch(scriptUrl, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          ...data,
          interest: interestLabel(data.interest),
          otherContext: "",
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) throw new Error("Failed to submit");

      const result = await response.json().catch(() => null);
      if (result && result.result === "error") {
        throw new Error(result.error || "Failed to submit");
      }

      setIsSuccess(true);
      reset();

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      {isSuccess && (
        <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl text-sm font-medium">
          Thanks for reaching out! We&apos;ll be in touch soon.
        </div>
      )}

      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2 col-span-2 sm:col-span-1">
          <label htmlFor="firstName" className="text-sm font-medium text-ink/90">
            First Name
          </label>
          <input
            {...register("firstName")}
            id="firstName"
            className={`w-full bg-surface border ${errors.firstName ? "border-red-500 focus:ring-red-500" : "border-ink/10 focus:ring-brand"} rounded-xl px-4 py-3 text-ink focus:outline-none focus:border-brand focus:ring-1 transition-all placeholder:text-ink/30`}
            placeholder="Rahul"
          />
          {errors.firstName && (
            <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
          )}
        </div>
        <div className="space-y-2 col-span-2 sm:col-span-1">
          <label htmlFor="lastName" className="text-sm font-medium text-ink/90">
            Last Name
          </label>
          <input
            {...register("lastName")}
            id="lastName"
            className={`w-full bg-surface border ${errors.lastName ? "border-red-500 focus:ring-red-500" : "border-ink/10 focus:ring-brand"} rounded-xl px-4 py-3 text-ink focus:outline-none focus:border-brand focus:ring-1 transition-all placeholder:text-ink/30`}
            placeholder="Kumar"
          />
          {errors.lastName && (
            <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-ink/90">
          Work Email
        </label>
        <input
          {...register("email")}
          type="email"
          id="email"
          className={`w-full bg-surface border ${errors.email ? "border-red-500 focus:ring-red-500" : "border-ink/10 focus:ring-brand"} rounded-xl px-4 py-3 text-ink focus:outline-none focus:border-brand focus:ring-1 transition-all placeholder:text-ink/30`}
          placeholder="rahul@company.com"
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="phone" className="text-sm font-medium text-ink/90">
          Phone Number
        </label>
        <input
          {...register("phone")}
          type="tel"
          id="phone"
          inputMode="tel"
          autoComplete="tel"
          className={`w-full bg-surface border ${errors.phone ? "border-red-500 focus:ring-red-500" : "border-ink/10 focus:ring-brand"} rounded-xl px-4 py-3 text-ink focus:outline-none focus:border-brand focus:ring-1 transition-all placeholder:text-ink/30`}
          placeholder="+91 98765 43210"
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="interest" className="text-sm font-medium text-ink/90">
          I&apos;m interested in...
        </label>
        <select
          {...register("interest")}
          id="interest"
          className={`w-full bg-surface border ${errors.interest ? "border-red-500 focus:ring-red-500" : "border-ink/10 focus:ring-brand"} rounded-xl px-4 py-3 text-ink focus:outline-none focus:border-brand focus:ring-1 transition-all appearance-none cursor-pointer`}
        >
          <option value="" disabled>
            Select an option
          </option>
          {INTEREST_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.interest && <p className="text-red-500 text-xs mt-1">{errors.interest.message}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-ink/90">
          Message
        </label>
        <textarea
          {...register("message")}
          id="message"
          rows={4}
          className={`w-full bg-surface border ${errors.message ? "border-red-500 focus:ring-red-500" : "border-ink/10 focus:ring-brand"} rounded-xl px-4 py-3 text-ink focus:outline-none focus:border-brand focus:ring-1 transition-all resize-none placeholder:text-ink/30`}
          placeholder="Tell us a bit about your goals..."
        ></textarea>
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full group inline-flex items-center justify-center gap-2 rounded-xl bg-brand text-white px-6 py-4 text-base font-medium transition-all hover:bg-brand/90 hover:-translate-y-0.5 shadow-lg shadow-brand/20 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>
    </form>
  );
}

// --- Main Page Component ---
function Contact() {
  return (
    <div className="min-h-screen bg-surface text-ink font-sans flex flex-col selection:bg-brand/20 selection:text-brand">
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
              Let&apos;s bring you{" "}
              <HighlightText className="text-black tracking-normal">the magic</HighlightText>
            </h1>
            <p className="text-ink-soft text-lg md:text-xl max-w-md mb-8">
              From upskilling to automations to AI labs, we got you covered, Just fill this form and
              select your purpose!
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=indiafutureai.connect@gmail.com&su=Doubts%20regarding%20IndiafutureAI%20Programs&body=Hi%2C%20I%20have%20some%20doubts%20regarding%20the%20programs%20at%20IndiafutureAI..."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-ink/5 shadow-sm max-w-sm hover:shadow-md hover:border-brand/30 transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="h-5 w-5 text-brand" />
                </div>
                <div>
                  <p className="text-sm text-ink/50 uppercase tracking-wider mb-1">Direct Email</p>
                  <span className="text-ink group-hover:text-brand transition-colors font-medium break-all">
                    indiafutureai.connect@gmail.com
                  </span>
                </div>
              </a>

              <a
                href="https://wa.me/917011596808?text=Hi%2C%20I%20have%20some%20doubts%20regarding%20the%20programs%20at%20IndiafutureAI..."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-ink/5 shadow-sm max-w-sm hover:shadow-md hover:border-[#25D366]/30 transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-ink/50 uppercase tracking-wider mb-1">
                    WhatsApp &amp; Phone
                  </p>
                  <span className="text-ink group-hover:text-[#25D366] transition-colors font-medium">
                    +91 70115 96808
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Form with Suspense Boundary */}
          <div className="bg-white border border-ink/5 rounded-[32px] p-8 md:p-10 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.05)]">
            <Suspense
              fallback={
                <div className="h-64 flex items-center justify-center text-ink-soft">
                  Loading form...
                </div>
              }
            >
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Contact;
