import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ArrowLeft, ShieldCheck, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/programs/custom")({
  component: CustomPrograms,
});

function CustomPrograms() {
  return (
    <div className="min-h-screen bg-surface text-ink font-sans flex flex-col selection:bg-brand/20 selection:text-brand">
      <Nav theme="light" />
      
      <main className="flex-1 flex flex-col pt-32 pb-24 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-brand/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
        
        <div className="container-x relative z-10">
          
          {/* Back link */}
          <Link to="/" className="inline-flex items-center gap-2 text-ink-soft hover:text-brand transition-colors mb-12 font-medium">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Content */}
            <div>
              <div className="w-16 h-16 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mb-8 shadow-sm">
                <ShieldCheck className="w-8 h-8" />
              </div>
              
              <p className="text-xs uppercase tracking-[0.2em] text-brand font-semibold mb-4">Custom</p>
              
              <h1 className="font-display text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] text-ink tracking-tight mb-8">
                Customized AI <br className="hidden md:block" />
                <span className="italic text-brand-soft">Programs</span>
              </h1>
              
              <p className="text-ink-soft text-xl leading-relaxed mb-10 max-w-lg">
                Exclusive AI learning and certification programs designed for organizations and communities based on specific objectives.
              </p>
              
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand text-white px-8 py-4 text-lg font-medium transition-all hover:bg-brand/90 hover:-translate-y-0.5 shadow-lg shadow-brand/20 group">
                Enroll Now <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>

            {/* Right Content Box */}
            <div className="bg-white border border-ink/5 rounded-[32px] p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden">
               {/* Subtle Grid Background */}
               <div 
                className="absolute inset-0 opacity-[0.02] pointer-events-none" 
                style={{ 
                  backgroundImage: 'radial-gradient(circle, #000 1.5px, transparent 1.5px)', 
                  backgroundSize: '24px 24px' 
                }} 
              />
              <div className="relative z-10">
                <h3 className="font-display text-3xl mb-8 text-ink">What you'll learn</h3>
                
                <div className="flex flex-col gap-6">
                  {[
                    "Bespoke Curriculum Tailored to Your Industry",
                    "Dedicated Enterprise Automation Workshops",
                    "Executive AI Strategy Sessions",
                    "Custom Internal Training Programs",
                    "On-Site Consultation & Deployment"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-brand" />
                      </div>
                      <span className="text-lg font-medium text-ink/80">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
