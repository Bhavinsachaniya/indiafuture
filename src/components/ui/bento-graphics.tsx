import React from 'react';


export function InsightGraphic() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('insight-is-active');
          } else {
            entry.target.classList.remove('insight-is-active');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center p-8 overflow-hidden pointer-events-none">
        <div ref={containerRef} className="relative w-full max-w-sm bento-graphic-container group">
            <style dangerouslySetInnerHTML={{ __html: `
        /* SVG INTERNAL STYLES (Preserved from original) */
        .insight-cls-0 {fill:#E6DFD4;}
        .insight-cls-1 {fill:url(#insight-SVGID_1_);}
        .insight-cls-2 {fill:#EAE6DD;stroke:#F4F2EC;stroke-width:0.9;stroke-miterlimit:10;}
        .insight-cls-3 {fill:url(#insight-SVGID_2_);stroke:#F9F8F6;stroke-width:0.75;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
        .insight-cls-4 {fill:none;stroke:#F4EFEB;stroke-width:0.2612;stroke-linecap:square;stroke-miterlimit:10;}
        .insight-cls-5 {fill:none;stroke:#FFFFFF;stroke-width:0.2612;stroke-linecap:square;stroke-miterlimit:10;}
        .insight-cls-6 {fill:none;stroke:#302B2A;stroke-width:0.7212;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
        .insight-cls-7 {fill:#E6955C;}
        .insight-cls-8 {fill:url(#insight-SVGID_3_);}
        .insight-cls-9 {fill:#2B2B2B;}
        .insight-cls-10 {fill:url(#insight-SVGID_4_);}
        .insight-cls-11 {fill:url(#insight-SVGID_5_);}

        /* --- CUSTOM ANIMATION STYLES --- */
        

        .svg-container {
            filter: drop-shadow(0 25px 40px rgba(0, 0, 0, 0.08));
            transition: transform 0.3s ease;
        }

        /* 1. Base Cards (Shadow, Back, Front) */
        .insight-cls-1, .insight-cls-2, .insight-cls-3 {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
            transform-origin: center;
            transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* 2. Grid Lines */
        .insight-cls-4, .insight-cls-5 {
            opacity: 0;
            stroke-dasharray: 300;
            stroke-dashoffset: 300;
            transition: stroke-dashoffset 1.5s ease-out, opacity 1s ease-out;
        }

        /* 3. Graph Nodes (Circles & Ellipses) */
        circle.insight-cls-6, ellipse.insight-cls-6 {
            opacity: 0;
            transform: scale(0);
            transform-box: fill-box;
            transform-origin: center;
            /* Spring-like bounce effect */
            transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        /* Node Connectors (Paths) */
        path.insight-cls-6 {
            opacity: 0;
            stroke-dasharray: 40;
            stroke-dashoffset: 40;
            transition: stroke-dashoffset 0.8s ease-in-out, opacity 0.8s;
        }

        /* 4. Top Left Icon */
        .insight-cls-7 {
            opacity: 0;
            transform: scale(0) rotate(-15deg);
            transform-box: fill-box;
            transform-origin: center;
            transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        /* 5. Progress Bars */
        .insight-cls-8, .insight-cls-10, .insight-cls-11 {
            clip-path: inset(0 100% 0 0); /* Hidden to the left */
            transition: clip-path 1.5s cubic-bezier(0.2, 0.9, 0.1, 1), transform 0.3s ease;
            cursor: pointer;
            transform-box: fill-box;
            transform-origin: left center;
        }

        /* 6. Percentage Texts */
        .insight-cls-9 {
            opacity: 0;
            transform: translateX(-15px);
            transition: all 0.5s cubic-bezier(0.2, 0.9, 0.1, 1);
        }

        /* --- ACTIVE STATES (Triggered by jQuery) --- */
        .is-loaded .insight-cls-1 { opacity: 1; transform: translateY(0) scale(1); transition-delay: 0.1s; }
        .is-loaded .insight-cls-2 { opacity: 1; transform: translateY(0) scale(1); transition-delay: 0.2s; }
        .is-loaded .insight-cls-3 { opacity: 1; transform: translateY(0) scale(1); transition-delay: 0.3s; }

        .line-animate { 
            stroke-dashoffset: 0 !important; 
            opacity: 1 !important; 
        }

        .icon-animate {
            opacity: 1;
            transform: scale(1) rotate(0);
        }

        .node-animate { 
            opacity: 1 !important; 
            transform: scale(1) !important; 
        }
        
        .path-animate { 
            stroke-dashoffset: 0 !important; 
            opacity: 1 !important; 
        }

        .bar-animate { 
            clip-path: inset(0 0 0 0) !important; 
        }

        .text-animate { 
            opacity: 1 !important; 
            transform: translateX(0) !important; 
        }

        /* Hover States applied via JS */
        .bar-hover {
            transform: scaleY(1.3) scaleX(1.02);
            filter: drop-shadow(0px 4px 6px rgba(241, 140, 53, 0.4));
        }
    ` }} />
            <div dangerouslySetInnerHTML={{ __html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 285.7 209" class="w-full h-auto">
            <linearGradient id="insight-SVGID_1_" x1="144" x2="183.5" y1="159.8" y2="201.3" gradientUnits="userSpaceOnUse">
                <stop stop-color="#CAC2AF" offset=".002474"/>
                <stop stop-color="#E6DFD4" stop-opacity="0" offset="1"/>
            </linearGradient>
            <path class="insight-cls-1" d="m257 22c-3-2.8-7.5-6.5-15.2-6.5h-205.9c-11 0-20.8 9.1-20.9 21.1v125.4c-0.1 6.8 1.9 10.5 4.5 14l31.7 33h234.5l0.3-18v-141.6l-29-27.4z"/>
            <path class="insight-cls-2" d="m242 182.6h-206.3c-10.7 0-20.7-7.9-20.7-20.6v-125c0-10.8 9.2-21.7 20.7-21.7h206.5c11.9 0 20.8 8.9 20.8 20.4v126.1c0 12.2-8.8 20.8-21 20.8z"/>
            <linearGradient id="insight-SVGID_2_" x1="33.2" x2="243.8" y1="26.21" y2="172.5" gradientUnits="userSpaceOnUse">
                <stop stop-color="#F4F1ED" offset=".008287"/>
                <stop stop-color="#E6DED3" offset="1"/>
            </linearGradient>
            <path class="insight-cls-3" d="m235.9 174.6h-194.4c-8.5 0-16.8-6.7-16.8-17.1v-116.7c-0.1-7.4 6.4-16.8 17-16.8h194.2c9.5 0 17.3 6.7 17.3 16.2v117.3c0 9.4-7.2 17.1-17.3 17.1z"/>
            <line class="insight-cls-4" x1="235.2" x2="70.5" y1="60.1" y2="60.1"/>
            <line class="insight-cls-5" x1="235.3" x2="70.5" y1="76.9" y2="76.9"/>
            <line class="insight-cls-5" x1="84.6" x2="84.6" y1="46.2" y2="153"/>
            <line class="insight-cls-5" x1="100.5" x2="100.5" y1="46.2" y2="153.2"/>
            <line class="insight-cls-5" x1="116" x2="116" y1="46.2" y2="153.2"/>
            <line class="insight-cls-5" x1="131.1" x2="131.1" y1="46.2" y2="153.2"/>
            <line class="insight-cls-5" x1="145.9" x2="145.9" y1="46.2" y2="153.2"/>
            <line class="insight-cls-5" x1="161.1" x2="161.1" y1="46.5" y2="153.2"/>
            <line class="insight-cls-5" x1="176.6" x2="176.6" y1="46.2" y2="153.2"/>
            <line class="insight-cls-5" x1="192.1" x2="192.1" y1="46.2" y2="153.2"/>
            <line class="insight-cls-5" x1="207.3" x2="207.3" y1="46.2" y2="153.2"/>
            <line class="insight-cls-5" x1="235.2" x2="70.5" y1="92.4" y2="92.4"/>
            <line class="insight-cls-5" x1="235.2" x2="70.5" y1="108" y2="108"/>
            <line class="insight-cls-5" x1="235.2" x2="70.5" y1="123.7" y2="123.7"/>
            <line class="insight-cls-5" x1="235.2" x2="70.5" y1="139" y2="139"/>
            <circle class="insight-cls-6" cx="50.8" cy="70.2" r="11.3"/>
            <ellipse class="insight-cls-6" cx="50.8" cy="66.7" rx="3.8" ry="3.7"/>
            <path class="insight-cls-6" d="m42.9 79c0.6-3.8 3.7-6.4 8-6.4s7.7 2.4 8.1 6.4"/>
            <circle class="insight-cls-6" cx="50.7" cy="102.2" r="11.4"/>
            <ellipse class="insight-cls-6" cx="50.8" cy="99" rx="3.8" ry="3.7"/>
            <path class="insight-cls-6" d="m43.1 110.5c0.7-3.9 3.8-6.1 7.9-6.1s7.6 2.3 8 5.8"/>
            <circle class="insight-cls-6" cx="50.8" cy="133.5" r="11.4"/>
            <ellipse class="insight-cls-6" cx="50.8" cy="130.4" rx="3.7" ry="3.6"/>
            <path class="insight-cls-6" d="m43.1 141.6c0.6-3.7 3.7-6 7.8-6s7.6 2 8 5.6"/>
            <path class="insight-cls-7" d="m47.2 37.7v-2.7h0.6v2.7h-0.6z"/>
            <path class="insight-cls-7" d="m45.8 38.2-1.5-1.4 0.4-0.4 1.5 1.4-0.4 0.4z"/>
            <path class="insight-cls-7" d="m44.7 40.3h-2.4v-0.7h2.3v0.7h0.1z"/>
            <path class="insight-cls-7" d="m43.7 43 1.8-1.7 0.5 0.4-1.8 1.8-0.5-0.5z"/>
            <path class="insight-cls-7" d="m46.8 44.9 0.2-2.5h0.6v2.5h-0.8z"/>
            <path class="insight-cls-7" d="m49.6 41.4 0.5-0.4 1 1.4v0.7l-1.5-1.7z"/>
            <path class="insight-cls-7" d="m49.9 39.5h2.5v0.7h-2.6l0.1-0.7z"/>
            <path class="insight-cls-7" d="m49.1 37.4 1.4-1.4 0.4 0.4-1.4 1.5-0.4-0.5z"/>
            <ellipse class="insight-cls-7" cx="47.3" cy="40" rx="1.5" ry="1.5"/>
            <linearGradient id="insight-SVGID_3_" x1="70.4" x2="210.6" y1="70.1" y2="70.1" gradientUnits="userSpaceOnUse">
                <stop stop-color="#E1643A" offset=".004301"/>
                <stop stop-color="#F18C35" offset="1"/>
            </linearGradient>
            <path class="insight-cls-8" d="m204.9 76.2h-129.3c-2.8 0-5.2-2.4-5.2-5.9 0-2.8 2.7-6.1 5.7-6.1l128.9-0.1c2.9 0 5.6 2.5 5.6 5.4 0 3.8-2.4 6.7-5.7 6.7z"/>
            <path class="insight-cls-9" d="m216.9 72.3 0.8-0.3c0.3 0.7 0.8 1.3 1.6 1.3 1.2 0 1.8-1.1 1.8-2.6-0.4 0.4-0.9 0.9-1.8 0.9-1.5 0-2.4-0.9-2.4-2.6 0-1.3 0.9-2.4 2.4-2.4 1.8 0 2.6 1.6 2.6 3.6 0 2.1-0.7 3.8-2.5 3.8-1.3 0-2.1-0.8-2.5-1.7zm4.1-3.3c-0.1-1.1-0.6-1.7-1.7-1.7-0.9 0-1.5 0.6-1.5 1.6 0 0.9 0.5 1.8 1.5 1.8 0.9 0.1 1.6-0.7 1.7-1.7z"/>
            <path class="insight-cls-9" d="m222.6 73.5 2.6-2.6c0.5-0.6 1-1.2 1-1.9 0-0.9-0.5-1.5-1.3-1.5s-1.3 0.4-1.5 1.5l-0.8-0.1c0.1-1.2 0.9-2.2 2.3-2.2 1.3 0 2.2 0.8 2.2 2.2 0 1.1-0.6 1.8-1.4 2.6l-1.7 1.7h3.1v0.8h-4.5v-0.5z"/>
            <path class="insight-cls-9" d="m228.2 68c0-0.8 0.5-1.6 1.4-1.6s1.4 0.7 1.4 1.6c0 0.7-0.4 1.7-1.4 1.7-0.9-0.1-1.4-0.9-1.4-1.7zm5.2-1.5h0.8l-4.9 7.7h-0.8l4.9-7.7zm-3.1 1.5c0-0.5-0.2-1.1-0.8-1.1-0.5 0-0.7 0.6-0.7 1.1s0.2 1 0.8 1c0.5 0 0.7-0.5 0.7-1zm1.3 4.6c0-0.8 0.5-1.6 1.4-1.6s1.4 0.7 1.4 1.7c0 0.9-0.4 1.7-1.4 1.7-0.9-0.2-1.4-0.8-1.4-1.8zm2.1 0c0-0.4-0.1-1.1-0.7-1.1-0.5 0-0.8 0.6-0.8 1.1s0.1 1.1 0.7 1.1 0.8-0.5 0.8-1.1z"/>
            <linearGradient id="insight-SVGID_4_" x1="70.4" x2="196.6" y1="102" y2="102" gradientTransform="translate(6e-4)" gradientUnits="userSpaceOnUse">
                <stop stop-color="#E1643A" offset=".004301"/>
                <stop stop-color="#F18C35" offset="1"/>
            </linearGradient>
            <path class="insight-cls-10" d="m191.1 107.4h-115.5c-2.8 0-5.2-2.4-5.2-5.9 0-2.8 3.1-5.4 5.1-5.4l115.8 0.1c2.8 0 5.3 2.3 5.3 5.3 0 3.5-2.3 5.9-5.5 5.9z"/>
            <path class="insight-cls-9" d="m220.5 99h-3.6v-0.8h4.8v0.6l-3.1 6.4h-1l2.9-6.2z"/>
            <path class="insight-cls-9" d="m222.2 101.9c0-1.9 0.8-3.8 2.6-3.9 1.1 0 1.9 0.6 2.2 1.8l-0.8 0.1c-0.2-0.6-0.5-1.1-1.4-1.1-1.2 0-1.7 1.2-1.7 2.6 0.4-0.5 1-1 1.8-1 1.5 0 2.2 1 2.2 2.5 0 1.4-0.9 2.5-2.4 2.5-1.7-0.1-2.5-1.4-2.5-3.5zm4 1c0-1-0.5-1.6-1.4-1.6-0.8 0-1.5 0.6-1.7 1.2 0.1 1.3 0.6 2 1.6 2 1 0.1 1.5-0.6 1.5-1.6z"/>
            <path class="insight-cls-9" d="m228.1 99.7c0-0.8 0.5-1.7 1.4-1.7s1.5 0.8 1.5 1.7c0 0.8-0.4 1.7-1.4 1.7s-1.5-0.8-1.5-1.7zm5.3-1.7h0.8l-4.9 7.4h-0.7l4.8-7.4zm-3.1 1.7c0-0.5-0.2-1.1-0.7-1.1s-0.8 0.6-0.8 1.1 0.2 1.1 0.7 1.1c0.6-0.1 0.8-0.6 0.8-1.1zm1.3 4.3c0-0.8 0.5-1.8 1.4-1.8s1.5 0.8 1.5 1.7-0.5 1.6-1.4 1.6-1.5-0.6-1.5-1.5zm2.2 0c0-0.5-0.1-1.1-0.7-1.1-0.5 0-0.7 0.6-0.7 1.1s0.2 1 0.7 1 0.7-0.5 0.7-1z"/>
            <linearGradient id="insight-SVGID_5_" x1="70.36" x2="154.3" y1="133.3" y2="133.3" gradientTransform="translate(.002)" gradientUnits="userSpaceOnUse">
                <stop stop-color="#E1643A" offset=".004301"/>
                <stop stop-color="#F18C35" offset="1"/>
            </linearGradient>
            <path class="insight-cls-11" d="m148.8 138.6h-73.3c-2.8 0-5.2-2.7-5.2-5.6 0-2.6 2.7-5.4 5.3-5.4h73.5c2.8 0 5.2 2.5 5.2 5.5-0.1 2.8-2.3 5.5-5.5 5.5z"/>
            <path class="insight-cls-9" d="m165.5 135h-3.4v-0.6l3.2-4.7h0.9v4.6h0.9v0.7h-0.9v1.6h-0.8v-1.6h0.1zm0-0.7v-3.4l-2.3 3.4h2.3z"/>
            <path class="insight-cls-9" d="m168.2 134.6c0-1 0.6-1.5 1.4-1.7-0.6-0.3-1.1-0.7-1.1-1.5 0-1.1 1-1.8 2.2-1.8s2.2 0.6 2.2 1.7c0 0.8-0.5 1.4-1.1 1.6 0.8 0.3 1.4 0.8 1.4 1.7 0 1.3-1 2.1-2.5 2.1-1.4 0-2.5-0.8-2.5-2.1zm4 0c0-0.8-0.6-1.3-1.5-1.3s-1.6 0.5-1.6 1.3 0.7 1.3 1.6 1.3 1.5-0.4 1.5-1.3zm-0.3-3.1c0-0.7-0.5-1.2-1.3-1.2s-1.3 0.5-1.3 1.2 0.5 1.1 1.3 1.1 1.3-0.4 1.3-1.1z"/>
            <path class="insight-cls-9" d="m174.4 131.2c0-0.8 0.5-1.7 1.2-1.7 0.8 0 1.3 0.7 1.3 1.7 0 0.8-0.5 1.7-1.3 1.7-0.7 0-1.2-0.8-1.2-1.7zm4.7-1.6h0.7l-4.3 7h-0.8l4.4-7zm-2.8 1.6c0-0.5-0.1-1-0.6-1s-0.6 0.5-0.6 1c0 0.6 0.1 1.1 0.6 1.1s0.6-0.7 0.6-1.1zm1.3 3.9c0-0.8 0.5-1.6 1.3-1.6s1.4 0.8 1.4 1.7c0 0.8-0.5 1.6-1.4 1.6-0.7-0.1-1.3-0.7-1.3-1.7zm2.1 0c0-0.5-0.1-1-0.7-1-0.7 0-0.8 0.5-0.8 1.1 0 0.5 0.1 1 0.7 1s0.8-0.5 0.8-1.1z"/>
        </svg>` }} className="w-full h-auto drop-shadow-xl" />
        </div>
    </div>
  );
}

export function SpeedGraphic() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('speed-is-active');
          } else {
            entry.target.classList.remove('speed-is-active');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center p-8 overflow-hidden pointer-events-none">
        <div ref={containerRef} className="relative w-full max-w-sm bento-graphic-container group">
            <style dangerouslySetInnerHTML={{ __html: `
    /* =========================================
       BASE & CONTAINER STYLING
       ========================================= */
    

    .network-wrapper {
      width: 100%;
      max-width: 500px;
      padding: 2rem;
      perspective: 1000px;
    }

    /* Ambient continuous levitation */
    .network-svg {
      width: 100%;
      height: auto;
      filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.6));
      animation: speed-floatGraph 8s ease-in-out infinite;
      will-change: transform;
    }

    /* =========================================
       SVG INTERNAL STYLING
       ========================================= */
    .speed-cls-1 { fill: #F7EDDC; } /* Grid Dots */
    .speed-cls-2 { fill: none; stroke: #F1A04C; stroke-width: 0.5282; stroke-linecap: round; stroke-miterlimit: 10; }
    .speed-cls-6 { fill: #F1A04B; } /* Solid Nodes */
    .speed-cls-7 { fill: none; stroke: #F1A04B; stroke-width: 0.251; stroke-miterlimit: 10; } /* Ring Nodes */
    .speed-cls-8 { fill: #F1A04B; stroke: #F1A04B; stroke-width: 0.251; stroke-miterlimit: 10; } /* Ornament Paths */

    /* =========================================
       HARDWARE ACCELERATED MICRO-ANIMATIONS 
       (GPU Composite Layer - O(1) Main Thread)
       ========================================= */

    /* 1. Background Grid (Fade & Slide) */
    .speed-anim-grid {
      opacity: 0;
      transform: translateY(10px);
      will-change: opacity, transform;
    }
    .speed-is-active .speed-anim-grid {
      animation: speed-fadeUp 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    }

    /* 2. Connecting Lines (Path Drawing) */
    .speed-anim-line {
      stroke-dasharray: 200;
      stroke-dashoffset: 200;
      will-change: stroke-dashoffset;
    }
    .speed-is-active .speed-anim-line {
      animation: speed-drawLine 2s cubic-bezier(0.35, 0, 0.25, 1) forwards;
    }
    .speed-is-active .line-delay-1 { animation-delay: 0.4s; }
    .speed-is-active .line-delay-2 { animation-delay: 0.7s; }
    .speed-is-active .line-delay-3 { animation-delay: 1.0s; }

    /* 3. Data Nodes (Elastic Pop) */
    .speed-anim-node {
      transform: scale(0);
      transform-box: fill-box;
      transform-origin: center;
      will-change: transform;
    }
    .speed-is-active .speed-anim-node {
      animation: speed-popNode 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
    }
    .speed-is-active .node-delay-1 { animation-delay: 0.6s; }
    .speed-is-active .node-delay-2 { animation-delay: 0.9s; }
    .speed-is-active .node-delay-3 { animation-delay: 1.2s; }
    .speed-is-active .node-delay-4 { animation-delay: 1.5s; }

    /* 4. Ambient Glowing Halos */
    .speed-anim-glow {
      transform: scale(0);
      opacity: 0;
      transform-box: fill-box;
      transform-origin: center;
      will-change: transform, opacity;
    }
    .speed-is-active .speed-anim-glow {
      animation: speed-popNode 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards,
                 pulseGlow 3s ease-in-out infinite alternate forwards 2s;
    }
    
    /* Center Focal Point Animation */
    .center-focal {
      transform: scale(0);
      transform-box: fill-box;
      transform-origin: center;
    }
    .speed-is-active .center-focal {
      animation: speed-popNode 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards 1.2s;
    }

    /* =========================================
       KEYFRAMES
       ========================================= */
    @keyframes speed-fadeUp {
      0% { opacity: 0; transform: translateY(10px); }
      100% { opacity: 1; transform: translateY(0); }
    }

    @keyframes speed-drawLine {
      to { stroke-dashoffset: 0; }
    }

    @keyframes speed-popNode {
      0% { transform: scale(0); opacity: 0; }
      100% { transform: scale(1); opacity: 1; }
    }

    @keyframes speed-pulseGlow {
      0% { transform: scale(1); opacity: 0.8; }
      100% { transform: scale(1.15); opacity: 0.4; }
    }

    @keyframes speed-floatGraph {
      0%, 100% { transform: translateY(0px) rotateX(0deg); }
      50% { transform: translateY(-10px) rotateX(2deg); }
    }
  ` }} />
            <div dangerouslySetInnerHTML={{ __html: `<svg class="network-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 165.8 154.7">
      
      <!-- DEFS: Gradients -->
      <defs>
        <radialGradient id="speed-SVGID_1_" cx="84" cy="83.05" r="18.22" gradientUnits="userSpaceOnUse">
          <stop stop-color="#F1A04C" offset="0"/>
          <stop stop-color="#F1A04C" stop-opacity="0" offset="1"/>
        </radialGradient>
        <radialGradient id="speed-G_1" cx="107.9" cy="46.6" r="3.191" gradientTransform="matrix(1 0 0 .9494 0 2.5)" gradientUnits="userSpaceOnUse"><stop stop-color="#F1A04B" offset=".1499"/><stop stop-color="#F1A04B" stop-opacity="0" offset="1"/></radialGradient>
        <radialGradient id="speed-G_2" cx="144.4" cy="46.7" r="3.191" gradientTransform="matrix(1 0 0 .9494 0 2.5)" gradientUnits="userSpaceOnUse"><stop stop-color="#F1A04B" offset=".1499"/><stop stop-color="#F1A04B" stop-opacity="0" offset="1"/></radialGradient>
        <radialGradient id="speed-G_3" cx="72.1" cy="46.6" r="3.191" gradientTransform="matrix(1 0 0 .9494 0 2.5)" gradientUnits="userSpaceOnUse"><stop stop-color="#F1A04B" offset=".1499"/><stop stop-color="#F1A04B" stop-opacity="0" offset="1"/></radialGradient>
        <radialGradient id="speed-G_4" cx="72.1" cy="71.5" r="3.191" gradientTransform="matrix(1 0 0 .9494 0 3.9)" gradientUnits="userSpaceOnUse"><stop stop-color="#F1A04B" offset=".1499"/><stop stop-color="#F1A04B" stop-opacity="0" offset="1"/></radialGradient>
        <radialGradient id="speed-G_5" cx="23.6" cy="35.6" r="3.191" gradientTransform="matrix(1 0 0 .9494 0 1.9)" gradientUnits="userSpaceOnUse"><stop stop-color="#F1A04B" offset=".1499"/><stop stop-color="#F1A04B" stop-opacity="0" offset="1"/></radialGradient>
        <radialGradient id="speed-G_6" cx="35.7" cy="119.5" r="3.191" gradientTransform="matrix(1 0 0 .9494 0 6.5)" gradientUnits="userSpaceOnUse"><stop stop-color="#F1A04B" offset=".1499"/><stop stop-color="#F1A04B" stop-opacity="0" offset="1"/></radialGradient>
        <radialGradient id="speed-G_7" cx="60.2" cy="119.5" r="3.191" gradientTransform="matrix(1 0 0 .9494 0 6.5)" gradientUnits="userSpaceOnUse"><stop stop-color="#F1A04B" offset=".1499"/><stop stop-color="#F1A04B" stop-opacity="0" offset="1"/></radialGradient>
        <radialGradient id="speed-G_8" cx="132.1" cy="119.5" r="3.191" gradientTransform="matrix(1 0 0 .9494 0 6.5)" gradientUnits="userSpaceOnUse"><stop stop-color="#F1A04B" offset=".1499"/><stop stop-color="#F1A04B" stop-opacity="0" offset="1"/></radialGradient>
        <radialGradient id="speed-G_9" cx="120.1" cy="95.1" r="3.191" gradientTransform="matrix(1 0 0 .9494 0 5.1)" gradientUnits="userSpaceOnUse"><stop stop-color="#F1A04B" offset=".1499"/><stop stop-color="#F1A04B" stop-opacity="0" offset="1"/></radialGradient>
      </defs>

      <!-- GROUP 1: Background Dotted Grid -->
      <g class="speed-anim-grid">
        <path class="speed-cls-1" d="m12 13.2c-0.7 0-2-1.2-1.2-2.3s2.1-0.6 2.3 0.3-0.5 2-1.1 2z"/>
        <path class="speed-cls-1" d="m23.6 13.2c-0.6 0-1.9-1.2-1.1-2.3s2.1-0.6 2.4 0.3-0.6 2-1.3 2z"/>
        <path class="speed-cls-1" d="m35.7 13.2c-0.7 0-1.9-1.2-1.1-2.4s2.3-0.5 2.6 0.5-0.9 1.9-1.5 1.9z"/>
        <circle class="speed-cls-1" cx="47.9" cy="11.7" r="1.3"/>
        <circle class="speed-cls-1" cx="60.2" cy="11.7" r="1.3"/>
        <path class="speed-cls-1" d="m83.9 13.1c-0.7-0.1-1.5-1.1-1-2s1.6-1.2 2.4-0.4c0.9 1.2-0.1 2.6-1.4 2.4z"/>
        <circle class="speed-cls-1" cx="96.1" cy="11.7" r="1.3"/>
        <circle class="speed-cls-1" cx="108.1" cy="11.7" r="1.3"/>
        <circle class="speed-cls-1" cx="120.2" cy="11.7" r="1.3"/>
        <circle class="speed-cls-1" cx="132.2" cy="11.7" r="1.3"/>
        <circle class="speed-cls-1" cx="144.5" cy="11.7" r="1.3"/>
        <circle class="speed-cls-1" cx="156.5" cy="11.7" r="1.3"/>
        <circle class="speed-cls-1" cx="11.2" cy="23.7" r="1.3"/>
        <circle class="speed-cls-1" cx="23.6" cy="23.7" r="1.3"/>
        <circle class="speed-cls-1" cx="35.7" cy="23.7" r="1.3"/>
        <circle class="speed-cls-1" cx="47.9" cy="23.7" r="1.3"/>
        <circle class="speed-cls-1" cx="60.2" cy="23.7" r="1.3"/>
        <circle class="speed-cls-1" cx="72.2" cy="23.7" r="1.3"/>
        <circle class="speed-cls-1" cx="83.9" cy="23.7" r="1.3"/>
        <circle class="speed-cls-1" cx="96.1" cy="23.7" r="1.3"/>
        <circle class="speed-cls-1" cx="108.1" cy="23.7" r="1.3"/>
        <circle class="speed-cls-1" cx="120.2" cy="23.7" r="1.3"/>
        <circle class="speed-cls-1" cx="132.2" cy="23.7" r="1.3"/>
        <circle class="speed-cls-1" cx="156.5" cy="23.7" r="1.3"/>
        <ellipse class="speed-cls-1" cx="11.3" cy="35.6" rx="1.3" ry="1.4"/>
        <circle class="speed-cls-1" cx="11.3" cy="46.7" r="1.3"/>
        <circle class="speed-cls-1" cx="23.6" cy="46.7" r="1.3"/>
        <circle class="speed-cls-1" cx="35.7" cy="46.7" r="1.3"/>
        <circle class="speed-cls-1" cx="47.9" cy="46.8" r="1.3"/>
        <circle class="speed-cls-1" cx="60.2" cy="46.8" r="1.3"/>
        <circle class="speed-cls-1" cx="72.2" cy="35.6" r="1.3"/>
        <circle class="speed-cls-1" cx="83.9" cy="35.6" r="1.3"/>
        <circle class="speed-cls-1" cx="96.1" cy="35.6" r="1.3"/>
        <circle class="speed-cls-1" cx="108.1" cy="35.6" r="1.3"/>
        <circle class="speed-cls-1" cx="120.2" cy="35.6" r="1.3"/>
        <circle class="speed-cls-1" cx="132.2" cy="35.6" r="1.3"/>
        <circle class="speed-cls-1" cx="144.5" cy="35.6" r="1.3"/>
        <circle class="speed-cls-1" cx="156.5" cy="35.6" r="1.3"/>
        <circle class="speed-cls-1" cx="83.9" cy="46.7" r="1.3"/>
        <circle class="speed-cls-1" cx="96.1" cy="46.7" r="1.3"/>
        <circle class="speed-cls-1" cx="156.5" cy="46.7" r="1.3"/>
        <circle class="speed-cls-1" cx="11.3" cy="59.5" r="1.3"/>
        <circle class="speed-cls-1" cx="23.6" cy="59.5" r="1.3"/>
        <circle class="speed-cls-1" cx="47.9" cy="59.5" r="1.3"/>
        <circle class="speed-cls-1" cx="60.2" cy="59.5" r="1.3"/>
        <circle class="speed-cls-1" cx="72.2" cy="59.5" r="1.3"/>
        <circle class="speed-cls-1" cx="83.9" cy="59.5" r="1.3"/>
        <circle class="speed-cls-1" cx="108.1" cy="59.5" r="1.3"/>
        <circle class="speed-cls-1" cx="120.2" cy="59.5" r="1.3"/>
        <circle class="speed-cls-1" cx="132.2" cy="59.5" r="1.3"/>
        <circle class="speed-cls-1" cx="144.5" cy="59.5" r="1.3"/>
        <circle class="speed-cls-1" cx="156.5" cy="59.5" r="1.3"/>
        <circle class="speed-cls-1" cx="11.3" cy="71.5" r="1.3"/>
        <circle class="speed-cls-1" cx="23.6" cy="71.5" r="1.3"/>
        <circle class="speed-cls-1" cx="35.7" cy="71.5" r="1.3"/>
        <circle class="speed-cls-1" cx="47.9" cy="71.5" r="1.3"/>
        <circle class="speed-cls-1" cx="60.2" cy="71.5" r="1.3"/>
        <circle class="speed-cls-1" cx="83.9" cy="71.5" r="1.3"/>
        <circle class="speed-cls-1" cx="96.1" cy="71.5" r="1.3"/>
        <circle class="speed-cls-1" cx="108.1" cy="71.5" r="1.3"/>
        <circle class="speed-cls-1" cx="120.2" cy="71.5" r="1.3"/>
        <circle class="speed-cls-1" cx="132.2" cy="71.5" r="1.3"/>
        <circle class="speed-cls-1" cx="144.5" cy="71.5" r="1.3"/>
        <circle class="speed-cls-1" cx="156.5" cy="71.5" r="1.3"/>
        <circle class="speed-cls-1" cx="23.6" cy="83.4" r="1.3"/>
        <circle class="speed-cls-1" cx="35.7" cy="83.4" r="1.3"/>
        <circle class="speed-cls-1" cx="47.9" cy="83.4" r="1.3"/>
        <circle class="speed-cls-1" cx="60.2" cy="83.4" r="1.3"/>
        <circle class="speed-cls-1" cx="72.2" cy="83.4" r="1.3"/>
        <circle class="speed-cls-1" cx="96.1" cy="83.4" r="1.3"/>
        <circle class="speed-cls-1" cx="108.1" cy="83.4" r="1.3"/>
        <circle class="speed-cls-1" cx="120.2" cy="83.4" r="1.3"/>
        <circle class="speed-cls-1" cx="132.2" cy="83.4" r="1.3"/>
        <circle class="speed-cls-1" cx="144.5" cy="83.4" r="1.3"/>
        <circle class="speed-cls-1" cx="156.5" cy="83.4" r="1.3"/>
        <circle class="speed-cls-1" cx="11.3" cy="95" r="1.3"/>
        <circle class="speed-cls-1" cx="23.6" cy="95" r="1.3"/>
        <circle class="speed-cls-1" cx="35.7" cy="95" r="1.3"/>
        <circle class="speed-cls-1" cx="47.9" cy="95.1" r="1.3"/>
        <circle class="speed-cls-1" cx="60.2" cy="95.1" r="1.3"/>
        <circle class="speed-cls-1" cx="72.2" cy="95.1" r="1.3"/>
        <circle class="speed-cls-1" cx="83.9" cy="95" r="1.3"/>
        <circle class="speed-cls-1" cx="96.1" cy="95" r="1.3"/>
        <circle class="speed-cls-1" cx="108.1" cy="95" r="1.3"/>
        <circle class="speed-cls-1" cx="132.2" cy="95.1" r="1.3"/>
        <circle class="speed-cls-1" cx="144.5" cy="95.1" r="1.3"/>
        <circle class="speed-cls-1" cx="156.5" cy="95.1" r="1.3"/>
        <circle class="speed-cls-1" cx="11.3" cy="106.9" r="1.3"/>
        <circle class="speed-cls-1" cx="23.6" cy="106.9" r="1.3"/>
        <circle class="speed-cls-1" cx="35.7" cy="106.9" r="1.3"/>
        <circle class="speed-cls-1" cx="47.9" cy="106.9" r="1.3"/>
        <circle class="speed-cls-1" cx="60.2" cy="106.9" r="1.3"/>
        <circle class="speed-cls-1" cx="83.9" cy="106.9" r="1.3"/>
        <circle class="speed-cls-1" cx="96.1" cy="106.9" r="1.3"/>
        <circle class="speed-cls-1" cx="120.2" cy="106.9" r="1.3"/>
        <circle class="speed-cls-1" cx="132.2" cy="106.9" r="1.3"/>
        <circle class="speed-cls-1" cx="156.5" cy="106.9" r="1.3"/>
        <circle class="speed-cls-1" cx="11.3" cy="119.5" r="1.3"/>
        <circle class="speed-cls-1" cx="23.6" cy="119.5" r="1.3"/>
        <circle class="speed-cls-1" cx="72.2" cy="119.5" r="1.3"/>
        <circle class="speed-cls-1" cx="83.9" cy="119.5" r="1.3"/>
        <circle class="speed-cls-1" cx="96.1" cy="119.5" r="1.3"/>
        <circle class="speed-cls-1" cx="108.1" cy="119.5" r="1.3"/>
        <circle class="speed-cls-1" cx="120.2" cy="119.5" r="1.3"/>
        <circle class="speed-cls-1" cx="144.5" cy="119.5" r="1.3"/>
        <circle class="speed-cls-1" cx="156.5" cy="119.5" r="1.3"/>
        <circle class="speed-cls-1" cx="11.3" cy="131.1" r="1.3"/>
        <circle class="speed-cls-1" cx="35.7" cy="131.1" r="1.3"/>
        <circle class="speed-cls-1" cx="47.9" cy="131.1" r="1.3"/>
        <circle class="speed-cls-1" cx="60.2" cy="131.1" r="1.3"/>
        <circle class="speed-cls-1" cx="72.2" cy="131.1" r="1.3"/>
        <circle class="speed-cls-1" cx="83.9" cy="131.1" r="1.3"/>
        <circle class="speed-cls-1" cx="96.1" cy="131.1" r="1.3"/>
        <circle class="speed-cls-1" cx="108.1" cy="131.1" r="1.3"/>
        <circle class="speed-cls-1" cx="120.2" cy="131.1" r="1.3"/>
        <circle class="speed-cls-1" cx="132.2" cy="131.1" r="1.3"/>
        <circle class="speed-cls-1" cx="144.5" cy="131.1" r="1.3"/>
        <circle class="speed-cls-1" cx="156.5" cy="131.1" r="1.3"/>
        <circle class="speed-cls-1" cx="11.3" cy="143.2" r="1.3"/>
        <circle class="speed-cls-1" cx="23.6" cy="143.2" r="1.3"/>
        <circle class="speed-cls-1" cx="35.7" cy="143.2" r="1.3"/>
        <circle class="speed-cls-1" cx="47.9" cy="143.2" r="1.3"/>
        <circle class="speed-cls-1" cx="60.2" cy="143.2" r="1.3"/>
        <circle class="speed-cls-1" cx="72.2" cy="143.2" r="1.3"/>
        <circle class="speed-cls-1" cx="83.9" cy="143.2" r="1.3"/>
        <circle class="speed-cls-1" cx="108.1" cy="143.2" r="1.3"/>
        <circle class="speed-cls-1" cx="120.2" cy="143.2" r="1.3"/>
        <circle class="speed-cls-1" cx="132.2" cy="143.2" r="1.3"/>
        <circle class="speed-cls-1" cx="156.5" cy="143.2" r="1.3"/>
        
        <!-- Remaining grid dots logically grouped -->
        <circle class="speed-cls-1" cx="35.7" cy="35.5" r="1.3"/>
        <circle class="speed-cls-1" cx="47.9" cy="35.5" r="1.3"/>
        <circle class="speed-cls-1" cx="72.2" cy="106.9" r="1.3"/>
        <circle class="speed-cls-1" cx="47.9" cy="119.5" r="1.3"/>
        <circle class="speed-cls-1" cx="96.1" cy="59.5" r="1.3"/>
        <circle class="speed-cls-1" cx="120.2" cy="46.8" r="1.3"/>
        <circle class="speed-cls-1" cx="132.2" cy="46.7" r="1.3"/>
      </g>

      <!-- GROUP 2: Glow Backgrounds (Pulsing effects) -->
      <g>
        <!-- The ambient glows mapped around specific nodes -->
        <circle class="speed-anim-glow node-delay-2" cx="107.9" cy="46.6" r="3.2" fill="url(#speed-G_1)" opacity=".24"/>
        <circle class="speed-anim-glow node-delay-3" cx="144.4" cy="46.7" r="3.2" fill="url(#speed-G_2)" opacity=".24"/>
        <circle class="speed-anim-glow node-delay-2" cx="72.1" cy="46.6" r="3.2" fill="url(#speed-G_3)" opacity=".24"/>
        <circle class="speed-anim-glow node-delay-3" cx="72.1" cy="71.5" r="3.2" fill="url(#speed-G_4)" opacity=".24"/>
        <circle class="speed-anim-glow node-delay-1" cx="23.6" cy="35.6" r="3.2" fill="url(#speed-G_5)" opacity=".24"/>
        <circle class="speed-anim-glow node-delay-4" cx="35.7" cy="119.5" r="3.2" fill="url(#speed-G_6)" opacity=".24"/>
        <circle class="speed-anim-glow node-delay-4" cx="60.2" cy="119.5" r="3.2" fill="url(#speed-G_7)" opacity=".24"/>
        <circle class="speed-anim-glow node-delay-4" cx="132.1" cy="119.5" r="3.2" fill="url(#speed-G_8)" opacity=".24"/>
        <circle class="speed-anim-glow node-delay-3" cx="120.1" cy="95.1" r="3.2" fill="url(#speed-G_9)" opacity=".24"/>
      </g>

      <!-- GROUP 3: Staggered Path Lines -->
      <g>
        <path class="speed-cls-2 speed-anim-line line-delay-1" d="m36.3 35.5h11.8c25.7 0.6 33 26.9 33.8 42.9"/>
        <path class="speed-cls-2 speed-anim-line line-delay-2" d="m85.3 78.4c2-10.8 14.8-28.3 35.8-30.9 4.7-0.9 12.8-1 22.9-0.8"/>
        <path class="speed-cls-2 speed-anim-line line-delay-3" d="m87 87.2c5.8 11.1 27.6 27.7 45.3 32.2"/>
        <path class="speed-cls-2 speed-anim-line line-delay-3" d="m80.9 87.5c-2 11.2-9.7 32.2-34 32.1h-11.4"/>
      </g>

      <!-- GROUP 4: Main Solid and Ornamental Nodes -->
      <g>
        <circle class="speed-cls-6 speed-anim-node node-delay-1" cx="23.6" cy="35.5" r="1.3"/>
        <path class="speed-cls-8 speed-anim-node node-delay-1" d="m23.6 29.7c-0.7 0-1.6 0.9-1 1.9l1 1.7 1.1-1.7c0.4-0.9 0-1.9-1.1-1.9zm0 2c-0.6 0-1-0.6-0.7-1.2s1.3-0.5 1.5 0-0.2 1.2-0.8 1.2z"/>

        <circle class="speed-cls-6 speed-anim-node node-delay-2" cx="72.2" cy="71.5" r="1.3"/>
        <path class="speed-cls-8 speed-anim-node node-delay-2" d="m72.1 65.7c-0.7 0-1.6 0.9-1 1.9l1 1.7 1.1-1.7c0.4-0.9 0-1.9-1.1-1.9zm0 2c-0.6 0-0.9-0.6-0.7-1.2s1.3-0.5 1.5 0-0.1 1.2-0.8 1.2z"/>

        <circle class="speed-cls-6 speed-anim-node node-delay-1" cx="35.7" cy="59.5" r="1.3"/>
        <path class="speed-cls-8 speed-anim-node node-delay-1" d="m35.7 53.5c-0.7 0-1.6 0.9-1 1.9l1 1.8 1-1.7c0.4-0.9 0.1-1.9-1-2zm0 2.1c-0.6 0-0.9-0.7-0.7-1.2s1.2-0.6 1.4 0-0.1 1.2-0.7 1.2z"/>

        <circle class="speed-cls-6 speed-anim-node node-delay-3" cx="108.1" cy="106.9" r="1.3"/>
        <path class="speed-cls-8 speed-anim-node node-delay-3" d="m108.1 41.2c-0.7 0-1.6 0.8-1 1.9l1 1.7 1-1.7c0.4-1 0.1-1.9-1-1.9zm0 2c-0.6 0-1-0.6-0.7-1.2s1.3-0.5 1.5 0-0.2 1.2-0.8 1.2z"/>
        
        <circle class="speed-cls-6 speed-anim-node node-delay-4" cx="132.2" cy="119.5" r="1.3"/>
        <path class="speed-cls-8 speed-anim-node node-delay-4" d="m132 113.8c-0.7 0-1.6 0.9-1 1.9l1.1 1.8 1-1.8c0.4-0.9 0-1.8-1.1-1.9zm0.1 2.1c-0.6 0-0.9-0.7-0.7-1.2s1.2-0.6 1.4 0-0.1 1.2-0.7 1.2z"/>

        <!-- Additional Solid Dots -->
        <circle class="speed-cls-6 speed-anim-node node-delay-3" cx="35.7" cy="119.5" r="1.3"/>
        <circle class="speed-cls-6 speed-anim-node node-delay-4" cx="60.1" cy="119.5" r="1.3"/>
        <circle class="speed-cls-6 speed-anim-node node-delay-2" cx="72.2" cy="46.7" r="1.3"/>
        <circle class="speed-cls-6 speed-anim-node node-delay-3" cx="144.5" cy="46.7" r="1.3"/>
        <circle class="speed-cls-6 speed-anim-node node-delay-2" cx="108.1" cy="46.7" r="1.3"/>
        <circle class="speed-cls-6 speed-anim-node node-delay-4" cx="23.7" cy="131.1" r="1.3"/>
        <circle class="speed-cls-6 speed-anim-node node-delay-1" cx="60.2" cy="35.6" r="1.3"/>
        <circle class="speed-cls-6 speed-anim-node node-delay-3" cx="120.1" cy="95.1" r="1.3"/>
        <path class="speed-cls-8 speed-anim-node node-delay-3" d="m120.1 89.4c-0.7 0.5-1.4 1.1 0.1 3.5l1.1-1.7c0.6-1.1-0.2-2.3-1.2-1.8zm0 1.7c-0.6-0.3-0.7-1.1-0.1-1.4s1.2 0.2 1 0.8-0.6 0.8-0.9 0.6z"/>
      </g>

      <!-- GROUP 5: Outer Ring / Target Nodes -->
      <g>
        <g class="speed-anim-node node-delay-2">
          <circle class="speed-cls-7" cx="11.2" cy="83.4" r="3.3"/>
          <circle class="speed-cls-7" cx="11.2" cy="83.4" r="2.4"/>
          <circle class="speed-cls-6" cx="11.2" cy="83.3" r="1.2"/>
        </g>
        <g class="speed-anim-node node-delay-1">
          <circle class="speed-cls-7" cx="72.2" cy="11.6" r="3.3"/>
          <circle class="speed-cls-7" cx="72.2" cy="11.6" r="2.4"/>
          <circle class="speed-cls-6" cx="72.1" cy="11.6" r="1.2"/>
        </g>
        <g class="speed-anim-node node-delay-3">
          <circle class="speed-cls-7" cx="144.5" cy="106.8" r="3.3"/>
          <circle class="speed-cls-7" cx="144.5" cy="106.8" r="2.4"/>
          <circle class="speed-cls-6" cx="144.5" cy="106.8" r="1.2"/>
        </g>
        <g class="speed-anim-node node-delay-4">
          <circle class="speed-cls-7" cx="144.4" cy="143.2" r="3.3"/>
          <circle class="speed-cls-7" cx="144.4" cy="143.2" r="2.4"/>
          <circle class="speed-cls-6" cx="144.4" cy="143.2" r="1.2"/>
        </g>
        <g class="speed-anim-node node-delay-4">
          <circle class="speed-cls-7" cx="96.1" cy="143.2" r="3.3"/>
          <circle class="speed-cls-7" cx="96.1" cy="143.1" r="2.4"/>
          <circle class="speed-cls-6" cx="96.1" cy="143.1" r="1.2"/>
        </g>
        <g class="speed-anim-node node-delay-2">
          <circle class="speed-cls-7" cx="144.5" cy="23.7" r="3.3"/>
          <circle class="speed-cls-7" cx="144.5" cy="23.7" r="2.4"/>
          <circle class="speed-cls-6" cx="144.5" cy="23.7" r="1.2"/>
        </g>
        <g class="speed-anim-node node-delay-4">
          <circle class="speed-cls-7" cx="23.6" cy="131" r="3.3"/>
          <circle class="speed-cls-7" cx="23.6" cy="131" r="2.4"/>
          <circle class="speed-cls-6" cx="23.6" cy="23.3" r="0"/>
        </g>
        <g class="speed-anim-node node-delay-1">
          <circle class="speed-cls-7" cx="35.7" cy="59.5" r="3.3"/>
          <circle class="speed-cls-7" cx="35.7" cy="59.5" r="2.4"/>
        </g>
      </g>

      <!-- GROUP 6: Central Main Focal Point -->
      <g class="center-focal">
        <circle fill="url(#speed-SVGID_1_)" cx="83.9" cy="83" r="18.2"/>
        <circle class="speed-cls-6" cx="83.9" cy="83" r="5.7"/>
      </g>

    </svg>` }} className="w-full h-auto drop-shadow-xl" />
        </div>
    </div>
  );
}

export function AnalysisGraphic() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('analysis-is-active');
          } else {
            entry.target.classList.remove('analysis-is-active');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div className="absolute inset-0 flex items-center justify-center p-8 overflow-hidden pointer-events-none">
        <div ref={containerRef} className="relative w-full max-w-sm bento-graphic-container group">
            <style dangerouslySetInnerHTML={{ __html: `
        /* --- ORIGINAL SVG STYLES (Enhanced for Animation) --- */
        .analysis-cls-0 { fill: #F8F4EE; } /* Base background */
        .analysis-cls-1 { fill: none; stroke: #977B66; stroke-width: 0.3004; stroke-miterlimit: 10; opacity: 0.3; } /* V-Grid */
        .analysis-cls-3 { fill: none; stroke: #7D5A41; stroke-width: 0.3; stroke-miterlimit: 10; opacity: 0.2; } /* H-Grid */
        .analysis-cls-4 { fill: #EADBC7; } /* Chart Area Fill */
        .analysis-cls-5 { fill: none; stroke: #7C502D; stroke-width: 1.67; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; } /* Main Chart Line */
        .analysis-cls-6 { fill: #FFFFFF; stroke: #FFFFFF; stroke-width: 1.2524; stroke-miterlimit: 10; } /* Node Outer */
        .analysis-cls-7 { fill: #562F18; stroke: #FFFFFF; stroke-width: 1.2524; stroke-miterlimit: 10; } /* Node Inner */
        .analysis-cls-8 { fill: none; stroke: #562F18; stroke-width: 0.3004; stroke-linecap: round; stroke-linejoin: round; stroke-dasharray: 1.458,1.4584; }
        .analysis-cls-9 { fill: none; stroke: #562F18; stroke-width: 0.4506; stroke-linecap: round; stroke-linejoin: round; stroke-dasharray: 1.3519,1.352; }
        .analysis-cls-10 { fill: none; stroke: #562F18; stroke-width: 0.4506; stroke-linecap: round; stroke-linejoin: round; }
        .analysis-cls-11 { fill: #562F18; }
        .analysis-cls-12 { fill: none; stroke: #CBBDB7; stroke-width: 0.5165; stroke-miterlimit: 10; }
        .analysis-cls-13 { fill: none; stroke: #CD7431; stroke-linecap: square; stroke-linejoin: round; stroke-miterlimit: 10; }
        .analysis-cls-14 { fill: none; stroke: #CD7431; stroke-width: 0.9858; stroke-miterlimit: 10; }
        .analysis-cls-15 { fill: #443128; }
        .analysis-cls-16 { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; font-weight: 700; }
        .analysis-cls-17 { font-size: 11px; }
        .analysis-cls-18 { fill: none; stroke: #CBBDB7; stroke-width: 0.4277; stroke-linecap: square; stroke-linejoin: round; stroke-miterlimit: 10; }
        .analysis-cls-19 { fill: none; stroke: #A29286; stroke-width: 0.5; stroke-miterlimit: 10; }
        .analysis-cls-20 { fill: none; stroke: #CC7331; stroke-width: 1.0314; stroke-linecap: square; stroke-linejoin: round; }


        /* --- SAAS MICRO-ANIMATION STYLES --- */
        

        .dashboard-card {
            background: #ffffff;
            border: 1px solid #e2e8f0;
            border-radius: 20px;
            box-shadow: 0 10px 25px rgba(15, 23, 42, 0.05), 0 4px 6px rgba(15, 23, 42, 0.02);
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .dashboard-card:hover {
            box-shadow: 0 20px 40px rgba(15, 23, 42, 0.08), 0 8px 12px rgba(15, 23, 42, 0.03);
        }

        /* SVG Inner Masking to match card border radius smoothly */
        .svg-wrapper {
            clip-path: inset(0 0 0 0 round 0 0 16px 16px);
        }

        /* 1. Grid Lines Animation */
        .grid-line {
            stroke-dasharray: 400;
            stroke-dashoffset: 400;
            opacity: 0;
            transition: stroke-dashoffset 1.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 1s ease;
        }

        .grid-line.is-visible {
            stroke-dashoffset: 0;
            opacity: 1;
        }

        /* 2. Chart Fill Area */
        .chart-fill {
            opacity: 0;
            transform: translateY(20px);
            transition: all 1.2s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .chart-fill.is-visible {
            opacity: 0.25; /* Adjusted for light mode blend */
            transform: translateY(0);
        }

        /* 3. Main Chart Line Drawing */
        .chart-line {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            opacity: 0;
            transition: stroke-dashoffset 2.5s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.3s ease;
            filter: drop-shadow(0 4px 6px rgba(124, 80, 45, 0.15));
        }

        .chart-line.is-visible {
            stroke-dashoffset: 0;
            opacity: 1;
        }

        /* 4. Data Nodes (Circles) */
        .data-node {
            opacity: 0;
            transform: scale(0);
            transform-origin: center;
            transform-box: fill-box;
            transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
            cursor: pointer;
        }

        .data-node.is-visible {
            opacity: 1;
            transform: scale(1);
        }

        .data-node:hover {
            transform: scale(1.3) translateY(-2px);
            filter: drop-shadow(0 4px 8px rgba(124, 80, 45, 0.3));
            z-index: 10;
        }

        /* 5. UI Markers and Annotations (Tooltips, plus signs, dashes) */
        .annotation {
            opacity: 0;
            transform: translateY(-5px) scale(0.95);
            transform-origin: center;
            transform-box: fill-box;
            transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .annotation.is-visible {
            opacity: 1;
            transform: translateY(0) scale(1);
        }

        .annotation-dash {
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
            transition: stroke-dashoffset 1s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        
        .annotation.is-visible .annotation-dash {
            stroke-dashoffset: 0;
        }

        /* Continuous Pulse for Key Orange Metric Node */
        .pulse-node {
            animation: analysis-pulse-ring 2.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite alternate;
        }

        @keyframes analysis-pulse-ring {
            0% { filter: drop-shadow(0 0 0 rgba(222, 137, 69, 0.4)); transform: scale(1); }
            100% { filter: drop-shadow(0 0 8px rgba(222, 137, 69, 0.8)); transform: scale(1.05); }
        }
    ` }} />
            <div dangerouslySetInnerHTML={{ __html: `<svg class="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>` }} className="w-full h-auto drop-shadow-xl" />
        </div>
    </div>
  );
}
