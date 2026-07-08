import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
    stars: 5,
    text: (
      <>
        "The automation reduced our manual work by <span className="font-semibold text-blue-600">72%</span> and saved us <span className="font-semibold text-blue-600">200+ hours</span> every month. The ROI was visible within the first month."
      </>
    ),
    name: "Rahul Sharma",
    role: "Founder & CEO",
    company: "ABC Manufacturing",
    companyLogo: (
      <div className="flex flex-col items-start leading-none">
        <span className="font-bold text-blue-700 tracking-tight text-lg">ABC</span>
        <span className="text-[0.6rem] font-bold text-blue-500 uppercase tracking-widest">Manufacturing</span>
      </div>
    ),
    companyNameText: "ABC Manufacturing Pvt. Ltd."
  },
  {
    id: 2,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
    stars: 5,
    text: (
      <>
        "Their AI solution streamlined our entire workflow. <span className="font-semibold text-blue-600">Productivity has never been this high.</span> Exceptional support from day one!"
      </>
    ),
    name: "Priya Mehta",
    role: "COO",
    company: "TechNova",
    companyLogo: (
      <div className="font-bold text-blue-900 tracking-tight text-xl">
        Tech<span className="text-blue-600">Nova</span>
      </div>
    ),
    companyNameText: "TechNova Solutions"
  },
  {
    id: 3,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
    stars: 5,
    text: (
      <>
        "Exceptional team, <span className="font-semibold text-blue-600">seamless execution</span>, and <span className="font-semibold text-blue-600">outstanding results</span>. Highly recommended for any organization looking to scale with AI."
      </>
    ),
    name: "Ankit Verma",
    role: "CTO",
    company: "VERMA LOGISTICS",
    companyLogo: (
      <div className="flex items-center gap-1.5">
        <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
          <div className="w-4 h-2 border-b-2 border-l-2 border-white -rotate-45 -mt-1" />
        </div>
        <div className="flex flex-col leading-[0.8]">
          <span className="font-bold text-black text-[0.65rem] tracking-widest">VERMA</span>
          <span className="text-gray-500 text-[0.5rem] tracking-widest">LOGISTICS</span>
        </div>
      </div>
    ),
    companyNameText: "Verma Logistics Pvt. Ltd."
  }
];

export const Testimonials = React.memo(function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50/30 relative overflow-hidden font-sans selection:bg-blue-200 selection:text-blue-900" id="testimonials">
      {/* Subtle dotted background pattern */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-96 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at center, #3b82f6 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse at bottom, black 40%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse at bottom, black 40%, transparent 70%)"
        }}
      />

      <div className="container-x relative z-10 max-w-[1400px] mx-auto px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-blue-300" />
            <span className="text-blue-600 font-bold text-sm tracking-[0.2em] uppercase">Testimonials</span>
            <div className="h-[1px] w-12 bg-blue-300" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-gray-900 tracking-tight leading-[1.1] mb-6">
            Loved by Innovators. <span className="text-blue-600">Trusted by Leaders.</span>
          </h2>
          
          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto">
            Real stories from businesses that have transformed with our AI solutions.
          </p>
        </div>

        {/* Carousel / Grid Area */}
        <div className="relative flex items-center justify-center">
          
          {/* Left Arrow */}
          <button className="hidden xl:flex absolute -left-6 z-20 w-12 h-12 bg-white rounded-full items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:scale-105 transition-transform text-gray-700 hover:text-blue-600 border border-gray-100">
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">
            {testimonials.map((t, idx) => (
              <div 
                key={t.id} 
                className="bg-gradient-to-br from-white to-[#f8fafe] rounded-[2rem] p-8 lg:p-10 shadow-[0_8px_40px_-12px_rgba(59,130,246,0.15)] border border-white relative overflow-hidden group hover:-translate-y-1 transition-all duration-300"
                style={{
                  boxShadow: "0 20px 40px -15px rgba(59, 130, 246, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 1), inset 0 0 20px rgba(59, 130, 246, 0.05)"
                }}
              >
                {/* Large Background Quote */}
                <Quote className="absolute top-8 right-8 w-24 h-24 text-blue-50 opacity-50 rotate-12" fill="currentColor" />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  
                  {/* Header: Avatar */}
                  <div className="mb-6">
                    <div className="w-20 h-20 rounded-full p-1 bg-white shadow-lg shadow-blue-500/10 mb-4 inline-block relative overflow-hidden group-hover:shadow-blue-500/20 transition-shadow">
                      <img src={t.avatar} alt={t.name} className="w-full h-full object-cover rounded-full" />
                    </div>
                    
                    {/* Stars */}
                    <div className="flex items-center gap-1">
                      {[...Array(t.stars)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-[#f59e0b] fill-[#f59e0b]" />
                      ))}
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-800 text-[1.05rem] leading-relaxed mb-10 flex-grow font-medium">
                    {t.text}
                  </p>

                  {/* Divider */}
                  <div className="h-[1px] w-full bg-gradient-to-r from-gray-200 via-gray-200 to-transparent mb-6" />

                  {/* Footer: Author & Company */}
                  <div className="flex flex-col gap-5 mt-auto pt-2">
                    {/* Author */}
                    <div>
                      <h4 className="font-bold text-gray-900 text-[1.1rem] leading-none mb-1.5">{t.name}</h4>
                      <p className="text-gray-500 text-[0.85rem]">{t.role}</p>
                    </div>
                    
                    {/* Company */}
                    <div className="flex items-center gap-4">
                      {/* Logo Area */}
                      <div className="flex-shrink-0 flex items-center h-8">
                        {t.companyLogo}
                      </div>
                      
                      {/* Vertical divider line */}
                      <div className="h-6 w-[1px] bg-gray-200" />
                      
                      {/* Company Name Text */}
                      <div className="text-[0.7rem] text-gray-500 font-medium">
                        {t.companyNameText}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button className="hidden xl:flex absolute -right-6 z-20 w-12 h-12 bg-white rounded-full items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:scale-105 transition-transform text-gray-700 hover:text-blue-600 border border-gray-100">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Carousel Dots */}
        <div className="flex items-center justify-center gap-3 mt-14">
          {[0, 1, 2, 3, 4].map((dot, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-3 h-3 bg-blue-600"
                  : "w-2.5 h-2.5 bg-gray-200 hover:bg-gray-300"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
});
