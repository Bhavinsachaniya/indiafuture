import { useEffect, useRef, useState } from 'react';
import './Card3.css';

export function Card3() {
  const ref = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      });
    }, { threshold: 0.2 });
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`bento-wrapper ${isActive ? 'is-active' : ''}`}>
      <svg className="network-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 165.8 154.7">
      
      {/*  DEFS: Gradients  */}
      <defs>
        <radialGradient id="SVGID_1_" cx="84" cy="83.05" r="18.22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F1A04C" offset="0"/>
          <stop stopColor="#F1A04C" stopOpacity="0" offset="1"/>
        </radialGradient>
        <radialGradient id="G_1" cx="107.9" cy="46.6" r="3.191" gradientTransform="matrix(1 0 0 .9494 0 2.5)" gradientUnits="userSpaceOnUse"><stop stopColor="#F1A04B" offset=".1499"/><stop stopColor="#F1A04B" stopOpacity="0" offset="1"/></radialGradient>
        <radialGradient id="G_2" cx="144.4" cy="46.7" r="3.191" gradientTransform="matrix(1 0 0 .9494 0 2.5)" gradientUnits="userSpaceOnUse"><stop stopColor="#F1A04B" offset=".1499"/><stop stopColor="#F1A04B" stopOpacity="0" offset="1"/></radialGradient>
        <radialGradient id="G_3" cx="72.1" cy="46.6" r="3.191" gradientTransform="matrix(1 0 0 .9494 0 2.5)" gradientUnits="userSpaceOnUse"><stop stopColor="#F1A04B" offset=".1499"/><stop stopColor="#F1A04B" stopOpacity="0" offset="1"/></radialGradient>
        <radialGradient id="G_4" cx="72.1" cy="71.5" r="3.191" gradientTransform="matrix(1 0 0 .9494 0 3.9)" gradientUnits="userSpaceOnUse"><stop stopColor="#F1A04B" offset=".1499"/><stop stopColor="#F1A04B" stopOpacity="0" offset="1"/></radialGradient>
        <radialGradient id="G_5" cx="23.6" cy="35.6" r="3.191" gradientTransform="matrix(1 0 0 .9494 0 1.9)" gradientUnits="userSpaceOnUse"><stop stopColor="#F1A04B" offset=".1499"/><stop stopColor="#F1A04B" stopOpacity="0" offset="1"/></radialGradient>
        <radialGradient id="G_6" cx="35.7" cy="119.5" r="3.191" gradientTransform="matrix(1 0 0 .9494 0 6.5)" gradientUnits="userSpaceOnUse"><stop stopColor="#F1A04B" offset=".1499"/><stop stopColor="#F1A04B" stopOpacity="0" offset="1"/></radialGradient>
        <radialGradient id="G_7" cx="60.2" cy="119.5" r="3.191" gradientTransform="matrix(1 0 0 .9494 0 6.5)" gradientUnits="userSpaceOnUse"><stop stopColor="#F1A04B" offset=".1499"/><stop stopColor="#F1A04B" stopOpacity="0" offset="1"/></radialGradient>
        <radialGradient id="G_8" cx="132.1" cy="119.5" r="3.191" gradientTransform="matrix(1 0 0 .9494 0 6.5)" gradientUnits="userSpaceOnUse"><stop stopColor="#F1A04B" offset=".1499"/><stop stopColor="#F1A04B" stopOpacity="0" offset="1"/></radialGradient>
        <radialGradient id="G_9" cx="120.1" cy="95.1" r="3.191" gradientTransform="matrix(1 0 0 .9494 0 5.1)" gradientUnits="userSpaceOnUse"><stop stopColor="#F1A04B" offset=".1499"/><stop stopColor="#F1A04B" stopOpacity="0" offset="1"/></radialGradient>
      </defs>

      {/*  GROUP 1: Background Dotted Grid  */}
      <g className="anim-grid">
        <path className="cls-1" d="m12 13.2c-0.7 0-2-1.2-1.2-2.3s2.1-0.6 2.3 0.3-0.5 2-1.1 2z"/>
        <path className="cls-1" d="m23.6 13.2c-0.6 0-1.9-1.2-1.1-2.3s2.1-0.6 2.4 0.3-0.6 2-1.3 2z"/>
        <path className="cls-1" d="m35.7 13.2c-0.7 0-1.9-1.2-1.1-2.4s2.3-0.5 2.6 0.5-0.9 1.9-1.5 1.9z"/>
        <circle className="cls-1" cx="47.9" cy="11.7" r="1.3"/>
        <circle className="cls-1" cx="60.2" cy="11.7" r="1.3"/>
        <path className="cls-1" d="m83.9 13.1c-0.7-0.1-1.5-1.1-1-2s1.6-1.2 2.4-0.4c0.9 1.2-0.1 2.6-1.4 2.4z"/>
        <circle className="cls-1" cx="96.1" cy="11.7" r="1.3"/>
        <circle className="cls-1" cx="108.1" cy="11.7" r="1.3"/>
        <circle className="cls-1" cx="120.2" cy="11.7" r="1.3"/>
        <circle className="cls-1" cx="132.2" cy="11.7" r="1.3"/>
        <circle className="cls-1" cx="144.5" cy="11.7" r="1.3"/>
        <circle className="cls-1" cx="156.5" cy="11.7" r="1.3"/>
        <circle className="cls-1" cx="11.2" cy="23.7" r="1.3"/>
        <circle className="cls-1" cx="23.6" cy="23.7" r="1.3"/>
        <circle className="cls-1" cx="35.7" cy="23.7" r="1.3"/>
        <circle className="cls-1" cx="47.9" cy="23.7" r="1.3"/>
        <circle className="cls-1" cx="60.2" cy="23.7" r="1.3"/>
        <circle className="cls-1" cx="72.2" cy="23.7" r="1.3"/>
        <circle className="cls-1" cx="83.9" cy="23.7" r="1.3"/>
        <circle className="cls-1" cx="96.1" cy="23.7" r="1.3"/>
        <circle className="cls-1" cx="108.1" cy="23.7" r="1.3"/>
        <circle className="cls-1" cx="120.2" cy="23.7" r="1.3"/>
        <circle className="cls-1" cx="132.2" cy="23.7" r="1.3"/>
        <circle className="cls-1" cx="156.5" cy="23.7" r="1.3"/>
        <ellipse className="cls-1" cx="11.3" cy="35.6" rx="1.3" ry="1.4"/>
        <circle className="cls-1" cx="11.3" cy="46.7" r="1.3"/>
        <circle className="cls-1" cx="23.6" cy="46.7" r="1.3"/>
        <circle className="cls-1" cx="35.7" cy="46.7" r="1.3"/>
        <circle className="cls-1" cx="47.9" cy="46.8" r="1.3"/>
        <circle className="cls-1" cx="60.2" cy="46.8" r="1.3"/>
        <circle className="cls-1" cx="72.2" cy="35.6" r="1.3"/>
        <circle className="cls-1" cx="83.9" cy="35.6" r="1.3"/>
        <circle className="cls-1" cx="96.1" cy="35.6" r="1.3"/>
        <circle className="cls-1" cx="108.1" cy="35.6" r="1.3"/>
        <circle className="cls-1" cx="120.2" cy="35.6" r="1.3"/>
        <circle className="cls-1" cx="132.2" cy="35.6" r="1.3"/>
        <circle className="cls-1" cx="144.5" cy="35.6" r="1.3"/>
        <circle className="cls-1" cx="156.5" cy="35.6" r="1.3"/>
        <circle className="cls-1" cx="83.9" cy="46.7" r="1.3"/>
        <circle className="cls-1" cx="96.1" cy="46.7" r="1.3"/>
        <circle className="cls-1" cx="156.5" cy="46.7" r="1.3"/>
        <circle className="cls-1" cx="11.3" cy="59.5" r="1.3"/>
        <circle className="cls-1" cx="23.6" cy="59.5" r="1.3"/>
        <circle className="cls-1" cx="47.9" cy="59.5" r="1.3"/>
        <circle className="cls-1" cx="60.2" cy="59.5" r="1.3"/>
        <circle className="cls-1" cx="72.2" cy="59.5" r="1.3"/>
        <circle className="cls-1" cx="83.9" cy="59.5" r="1.3"/>
        <circle className="cls-1" cx="108.1" cy="59.5" r="1.3"/>
        <circle className="cls-1" cx="120.2" cy="59.5" r="1.3"/>
        <circle className="cls-1" cx="132.2" cy="59.5" r="1.3"/>
        <circle className="cls-1" cx="144.5" cy="59.5" r="1.3"/>
        <circle className="cls-1" cx="156.5" cy="59.5" r="1.3"/>
        <circle className="cls-1" cx="11.3" cy="71.5" r="1.3"/>
        <circle className="cls-1" cx="23.6" cy="71.5" r="1.3"/>
        <circle className="cls-1" cx="35.7" cy="71.5" r="1.3"/>
        <circle className="cls-1" cx="47.9" cy="71.5" r="1.3"/>
        <circle className="cls-1" cx="60.2" cy="71.5" r="1.3"/>
        <circle className="cls-1" cx="83.9" cy="71.5" r="1.3"/>
        <circle className="cls-1" cx="96.1" cy="71.5" r="1.3"/>
        <circle className="cls-1" cx="108.1" cy="71.5" r="1.3"/>
        <circle className="cls-1" cx="120.2" cy="71.5" r="1.3"/>
        <circle className="cls-1" cx="132.2" cy="71.5" r="1.3"/>
        <circle className="cls-1" cx="144.5" cy="71.5" r="1.3"/>
        <circle className="cls-1" cx="156.5" cy="71.5" r="1.3"/>
        <circle className="cls-1" cx="23.6" cy="83.4" r="1.3"/>
        <circle className="cls-1" cx="35.7" cy="83.4" r="1.3"/>
        <circle className="cls-1" cx="47.9" cy="83.4" r="1.3"/>
        <circle className="cls-1" cx="60.2" cy="83.4" r="1.3"/>
        <circle className="cls-1" cx="72.2" cy="83.4" r="1.3"/>
        <circle className="cls-1" cx="96.1" cy="83.4" r="1.3"/>
        <circle className="cls-1" cx="108.1" cy="83.4" r="1.3"/>
        <circle className="cls-1" cx="120.2" cy="83.4" r="1.3"/>
        <circle className="cls-1" cx="132.2" cy="83.4" r="1.3"/>
        <circle className="cls-1" cx="144.5" cy="83.4" r="1.3"/>
        <circle className="cls-1" cx="156.5" cy="83.4" r="1.3"/>
        <circle className="cls-1" cx="11.3" cy="95" r="1.3"/>
        <circle className="cls-1" cx="23.6" cy="95" r="1.3"/>
        <circle className="cls-1" cx="35.7" cy="95" r="1.3"/>
        <circle className="cls-1" cx="47.9" cy="95.1" r="1.3"/>
        <circle className="cls-1" cx="60.2" cy="95.1" r="1.3"/>
        <circle className="cls-1" cx="72.2" cy="95.1" r="1.3"/>
        <circle className="cls-1" cx="83.9" cy="95" r="1.3"/>
        <circle className="cls-1" cx="96.1" cy="95" r="1.3"/>
        <circle className="cls-1" cx="108.1" cy="95" r="1.3"/>
        <circle className="cls-1" cx="132.2" cy="95.1" r="1.3"/>
        <circle className="cls-1" cx="144.5" cy="95.1" r="1.3"/>
        <circle className="cls-1" cx="156.5" cy="95.1" r="1.3"/>
        <circle className="cls-1" cx="11.3" cy="106.9" r="1.3"/>
        <circle className="cls-1" cx="23.6" cy="106.9" r="1.3"/>
        <circle className="cls-1" cx="35.7" cy="106.9" r="1.3"/>
        <circle className="cls-1" cx="47.9" cy="106.9" r="1.3"/>
        <circle className="cls-1" cx="60.2" cy="106.9" r="1.3"/>
        <circle className="cls-1" cx="83.9" cy="106.9" r="1.3"/>
        <circle className="cls-1" cx="96.1" cy="106.9" r="1.3"/>
        <circle className="cls-1" cx="120.2" cy="106.9" r="1.3"/>
        <circle className="cls-1" cx="132.2" cy="106.9" r="1.3"/>
        <circle className="cls-1" cx="156.5" cy="106.9" r="1.3"/>
        <circle className="cls-1" cx="11.3" cy="119.5" r="1.3"/>
        <circle className="cls-1" cx="23.6" cy="119.5" r="1.3"/>
        <circle className="cls-1" cx="72.2" cy="119.5" r="1.3"/>
        <circle className="cls-1" cx="83.9" cy="119.5" r="1.3"/>
        <circle className="cls-1" cx="96.1" cy="119.5" r="1.3"/>
        <circle className="cls-1" cx="108.1" cy="119.5" r="1.3"/>
        <circle className="cls-1" cx="120.2" cy="119.5" r="1.3"/>
        <circle className="cls-1" cx="144.5" cy="119.5" r="1.3"/>
        <circle className="cls-1" cx="156.5" cy="119.5" r="1.3"/>
        <circle className="cls-1" cx="11.3" cy="131.1" r="1.3"/>
        <circle className="cls-1" cx="35.7" cy="131.1" r="1.3"/>
        <circle className="cls-1" cx="47.9" cy="131.1" r="1.3"/>
        <circle className="cls-1" cx="60.2" cy="131.1" r="1.3"/>
        <circle className="cls-1" cx="72.2" cy="131.1" r="1.3"/>
        <circle className="cls-1" cx="83.9" cy="131.1" r="1.3"/>
        <circle className="cls-1" cx="96.1" cy="131.1" r="1.3"/>
        <circle className="cls-1" cx="108.1" cy="131.1" r="1.3"/>
        <circle className="cls-1" cx="120.2" cy="131.1" r="1.3"/>
        <circle className="cls-1" cx="132.2" cy="131.1" r="1.3"/>
        <circle className="cls-1" cx="144.5" cy="131.1" r="1.3"/>
        <circle className="cls-1" cx="156.5" cy="131.1" r="1.3"/>
        <circle className="cls-1" cx="11.3" cy="143.2" r="1.3"/>
        <circle className="cls-1" cx="23.6" cy="143.2" r="1.3"/>
        <circle className="cls-1" cx="35.7" cy="143.2" r="1.3"/>
        <circle className="cls-1" cx="47.9" cy="143.2" r="1.3"/>
        <circle className="cls-1" cx="60.2" cy="143.2" r="1.3"/>
        <circle className="cls-1" cx="72.2" cy="143.2" r="1.3"/>
        <circle className="cls-1" cx="83.9" cy="143.2" r="1.3"/>
        <circle className="cls-1" cx="108.1" cy="143.2" r="1.3"/>
        <circle className="cls-1" cx="120.2" cy="143.2" r="1.3"/>
        <circle className="cls-1" cx="132.2" cy="143.2" r="1.3"/>
        <circle className="cls-1" cx="156.5" cy="143.2" r="1.3"/>
        
        {/*  Remaining grid dots logically grouped  */}
        <circle className="cls-1" cx="35.7" cy="35.5" r="1.3"/>
        <circle className="cls-1" cx="47.9" cy="35.5" r="1.3"/>
        <circle className="cls-1" cx="72.2" cy="106.9" r="1.3"/>
        <circle className="cls-1" cx="47.9" cy="119.5" r="1.3"/>
        <circle className="cls-1" cx="96.1" cy="59.5" r="1.3"/>
        <circle className="cls-1" cx="120.2" cy="46.8" r="1.3"/>
        <circle className="cls-1" cx="132.2" cy="46.7" r="1.3"/>
      </g>

      {/*  GROUP 2: Glow Backgrounds (Pulsing effects)  */}
      <g>
        {/*  The ambient glows mapped around specific nodes  */}
        <circle className="anim-glow node-delay-2" cx="107.9" cy="46.6" r="3.2" fill="url(#G_1)" opacity=".24"/>
        <circle className="anim-glow node-delay-3" cx="144.4" cy="46.7" r="3.2" fill="url(#G_2)" opacity=".24"/>
        <circle className="anim-glow node-delay-2" cx="72.1" cy="46.6" r="3.2" fill="url(#G_3)" opacity=".24"/>
        <circle className="anim-glow node-delay-3" cx="72.1" cy="71.5" r="3.2" fill="url(#G_4)" opacity=".24"/>
        <circle className="anim-glow node-delay-1" cx="23.6" cy="35.6" r="3.2" fill="url(#G_5)" opacity=".24"/>
        <circle className="anim-glow node-delay-4" cx="35.7" cy="119.5" r="3.2" fill="url(#G_6)" opacity=".24"/>
        <circle className="anim-glow node-delay-4" cx="60.2" cy="119.5" r="3.2" fill="url(#G_7)" opacity=".24"/>
        <circle className="anim-glow node-delay-4" cx="132.1" cy="119.5" r="3.2" fill="url(#G_8)" opacity=".24"/>
        <circle className="anim-glow node-delay-3" cx="120.1" cy="95.1" r="3.2" fill="url(#G_9)" opacity=".24"/>
      </g>

      {/*  GROUP 3: Staggered Path Lines  */}
      <g>
        <path className="cls-2 anim-line line-delay-1" d="m36.3 35.5h11.8c25.7 0.6 33 26.9 33.8 42.9"/>
        <path className="cls-2 anim-line line-delay-2" d="m85.3 78.4c2-10.8 14.8-28.3 35.8-30.9 4.7-0.9 12.8-1 22.9-0.8"/>
        <path className="cls-2 anim-line line-delay-3" d="m87 87.2c5.8 11.1 27.6 27.7 45.3 32.2"/>
        <path className="cls-2 anim-line line-delay-3" d="m80.9 87.5c-2 11.2-9.7 32.2-34 32.1h-11.4"/>
      </g>

      {/*  GROUP 4: Main Solid and Ornamental Nodes  */}
      <g>
        <circle className="cls-6 anim-node node-delay-1" cx="23.6" cy="35.5" r="1.3"/>
        <path className="cls-8 anim-node node-delay-1" d="m23.6 29.7c-0.7 0-1.6 0.9-1 1.9l1 1.7 1.1-1.7c0.4-0.9 0-1.9-1.1-1.9zm0 2c-0.6 0-1-0.6-0.7-1.2s1.3-0.5 1.5 0-0.2 1.2-0.8 1.2z"/>

        <circle className="cls-6 anim-node node-delay-2" cx="72.2" cy="71.5" r="1.3"/>
        <path className="cls-8 anim-node node-delay-2" d="m72.1 65.7c-0.7 0-1.6 0.9-1 1.9l1 1.7 1.1-1.7c0.4-0.9 0-1.9-1.1-1.9zm0 2c-0.6 0-0.9-0.6-0.7-1.2s1.3-0.5 1.5 0-0.1 1.2-0.8 1.2z"/>

        <circle className="cls-6 anim-node node-delay-1" cx="35.7" cy="59.5" r="1.3"/>
        <path className="cls-8 anim-node node-delay-1" d="m35.7 53.5c-0.7 0-1.6 0.9-1 1.9l1 1.8 1-1.7c0.4-0.9 0.1-1.9-1-2zm0 2.1c-0.6 0-0.9-0.7-0.7-1.2s1.2-0.6 1.4 0-0.1 1.2-0.7 1.2z"/>

        <circle className="cls-6 anim-node node-delay-3" cx="108.1" cy="106.9" r="1.3"/>
        <path className="cls-8 anim-node node-delay-3" d="m108.1 41.2c-0.7 0-1.6 0.8-1 1.9l1 1.7 1-1.7c0.4-1 0.1-1.9-1-1.9zm0 2c-0.6 0-1-0.6-0.7-1.2s1.3-0.5 1.5 0-0.2 1.2-0.8 1.2z"/>
        
        <circle className="cls-6 anim-node node-delay-4" cx="132.2" cy="119.5" r="1.3"/>
        <path className="cls-8 anim-node node-delay-4" d="m132 113.8c-0.7 0-1.6 0.9-1 1.9l1.1 1.8 1-1.8c0.4-0.9 0-1.8-1.1-1.9zm0.1 2.1c-0.6 0-0.9-0.7-0.7-1.2s1.2-0.6 1.4 0-0.1 1.2-0.7 1.2z"/>

        {/*  Additional Solid Dots  */}
        <circle className="cls-6 anim-node node-delay-3" cx="35.7" cy="119.5" r="1.3"/>
        <circle className="cls-6 anim-node node-delay-4" cx="60.1" cy="119.5" r="1.3"/>
        <circle className="cls-6 anim-node node-delay-2" cx="72.2" cy="46.7" r="1.3"/>
        <circle className="cls-6 anim-node node-delay-3" cx="144.5" cy="46.7" r="1.3"/>
        <circle className="cls-6 anim-node node-delay-2" cx="108.1" cy="46.7" r="1.3"/>
        <circle className="cls-6 anim-node node-delay-4" cx="23.7" cy="131.1" r="1.3"/>
        <circle className="cls-6 anim-node node-delay-1" cx="60.2" cy="35.6" r="1.3"/>
        <circle className="cls-6 anim-node node-delay-3" cx="120.1" cy="95.1" r="1.3"/>
        <path className="cls-8 anim-node node-delay-3" d="m120.1 89.4c-0.7 0.5-1.4 1.1 0.1 3.5l1.1-1.7c0.6-1.1-0.2-2.3-1.2-1.8zm0 1.7c-0.6-0.3-0.7-1.1-0.1-1.4s1.2 0.2 1 0.8-0.6 0.8-0.9 0.6z"/>
      </g>

      {/*  GROUP 5: Outer Ring / Target Nodes  */}
      <g>
        <g className="anim-node node-delay-2">
          <circle className="cls-7" cx="11.2" cy="83.4" r="3.3"/>
          <circle className="cls-7" cx="11.2" cy="83.4" r="2.4"/>
          <circle className="cls-6" cx="11.2" cy="83.3" r="1.2"/>
        </g>
        <g className="anim-node node-delay-1">
          <circle className="cls-7" cx="72.2" cy="11.6" r="3.3"/>
          <circle className="cls-7" cx="72.2" cy="11.6" r="2.4"/>
          <circle className="cls-6" cx="72.1" cy="11.6" r="1.2"/>
        </g>
        <g className="anim-node node-delay-3">
          <circle className="cls-7" cx="144.5" cy="106.8" r="3.3"/>
          <circle className="cls-7" cx="144.5" cy="106.8" r="2.4"/>
          <circle className="cls-6" cx="144.5" cy="106.8" r="1.2"/>
        </g>
        <g className="anim-node node-delay-4">
          <circle className="cls-7" cx="144.4" cy="143.2" r="3.3"/>
          <circle className="cls-7" cx="144.4" cy="143.2" r="2.4"/>
          <circle className="cls-6" cx="144.4" cy="143.2" r="1.2"/>
        </g>
        <g className="anim-node node-delay-4">
          <circle className="cls-7" cx="96.1" cy="143.2" r="3.3"/>
          <circle className="cls-7" cx="96.1" cy="143.1" r="2.4"/>
          <circle className="cls-6" cx="96.1" cy="143.1" r="1.2"/>
        </g>
        <g className="anim-node node-delay-2">
          <circle className="cls-7" cx="144.5" cy="23.7" r="3.3"/>
          <circle className="cls-7" cx="144.5" cy="23.7" r="2.4"/>
          <circle className="cls-6" cx="144.5" cy="23.7" r="1.2"/>
        </g>
        <g className="anim-node node-delay-4">
          <circle className="cls-7" cx="23.6" cy="131" r="3.3"/>
          <circle className="cls-7" cx="23.6" cy="131" r="2.4"/>
          <circle className="cls-6" cx="23.6" cy="23.3" r="0"/>
        </g>
        <g className="anim-node node-delay-1">
          <circle className="cls-7" cx="35.7" cy="59.5" r="3.3"/>
          <circle className="cls-7" cx="35.7" cy="59.5" r="2.4"/>
        </g>
      </g>

      {/*  GROUP 6: Central Main Focal Point  */}
      <g className="center-focal">
        <circle fill="url(#SVGID_1_)" cx="83.9" cy="83" r="18.2"/>
        <circle className="cls-6" cx="83.9" cy="83" r="5.7"/>
      </g>

    </svg>
    </div>
  );
}
