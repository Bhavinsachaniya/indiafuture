import { useEffect, useRef, useState } from 'react';
import './Card5.css';

export function Card5() {
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
      <svg className="chart-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 359 360">
      
      {/*  Background Base  */}
      <path className="cls-0" d="m348 360h-337c-6 0-11-5-11-11v-338c0-6 5-11 11-11h337c6.1 0 11 5 11 11v338c0 6-5 11-11 11z"/>
      
      {/*  Vertical Grids (Staggered fade up)  */}
      <g className="anim-grid" style={{"animationDelay": "0.05s"}}>
        <line className="cls-1" x1="52.1" x2="52.1" y1="90.2" y2="293.5"/>
        <line className="cls-1" x1="73.3" x2="73.3" y1="90.2" y2="293.5"/>
        <line className="cls-1" x1="94.8" x2="94.8" y1="90.2" y2="293.5"/>
      </g>
      <g className="anim-grid" style={{"animationDelay": "0.1s"}}>
        <line className="cls-1" x1="116.9" x2="116.9" y1="90.2" y2="293.5"/>
        <line className="cls-1" x1="138.2" x2="138.2" y1="90.2" y2="293.5"/>
        <line className="cls-1" x1="159.3" x2="159.3" y1="90.2" y2="293.5"/>
      </g>
      <g className="anim-grid" style={{"animationDelay": "0.15s"}}>
        <line className="cls-1" x1="179.1" x2="178.8" y1="90.2" y2="293.5"/>
        <line className="cls-1" x1="199.4" x2="199.4" y1="90.2" y2="293.5"/>
        <line className="cls-1" x1="221.6" x2="221.6" y1="90.2" y2="293.5"/>
      </g>
      <g className="anim-grid" style={{"animationDelay": "0.2s"}}>
        <line className="cls-1" x1="243.1" x2="243.1" y1="90.1" y2="293.5"/>
        <line className="cls-1" x1="263.9" x2="263.9" y1="90.2" y2="293.5"/>
        <line className="cls-1" x1="285.4" x2="285.4" y1="90.2" y2="293.5"/>
        <line className="cls-1" x1="307.2" x2="307.2" y1="90.2" y2="293.5"/>
      </g>

      {/*  Horizontal Grids (Subtle uniform fade)  */}
      <g className="anim-grid" style={{"animationDelay": "0.25s"}}>
        <line className="cls-3" x1="20.6" x2="338.4" y1="105" y2="105"/>
        <line className="cls-3" x1="20.6" x2="338.4" y1="124.9" y2="124.9"/>
        <line className="cls-3" x1="20.6" x2="338.4" y1="145.7" y2="145.7"/>
        <line className="cls-3" x1="20.6" x2="338.4" y1="165.5" y2="165.5"/>
        <line className="cls-3" x1="20.6" x2="338.4" y1="183.6" y2="183.6"/>
        <line className="cls-3" x1="20.6" x2="338.4" y1="203.3" y2="203.3"/>
        <line className="cls-3" x1="20.6" x2="338.4" y1="221" y2="221"/>
        <line className="cls-3" x1="20.6" x2="338.4" y1="240.1" y2="240.1"/>
        <line className="cls-3" x1="20.6" x2="338.4" y1="262.4" y2="262.4"/>
        <line className="cls-3" x1="20.6" x2="338.4" y1="281" y2="281"/>
      </g>

      {/*  Shaded Graph Area (Animated Clip Path Sweep)  */}
      <path className="cls-4 anim-shade" d="m52.1 262 0.1-41 72-0.5c6.8-9.8 14.9-30 28.6-30s15.3 8.3 24.7 10.5 9.5 4 11.7 0 9.8-50.5 25.8-52c10 1 15 17 22.5 22.5 27.5 16.5 54.5-22.5 69-67.5l0.5 117h-253l-1.9 41z"/>
      
      {/*  Solid Dashboard Lines  */}
      <line className="cls-1 anim-ui ui-delay-1" x1="308.2" x2="315.2" y1="183.6" y2="183.6"/>

      {/*  Secondary Projected Path Dashes  */}
      <path className="cls-8 anim-path-dash" d="m220 153.1-23.2 58.2-17.3 0.2"/>
      <path className="cls-9 anim-path-dash" d="m159.3 202c-4.8 1.3-9.8 3.1-13.2 8l-22.4 42.2-18.6 0.1"/>
      <path className="cls-10 anim-path-dash" d="m250.2 183.2h19.4c2.9-0.3 3.5-1.2 4.5-2.7l11.2-22.5c0.9-1.4 2.7-2.2 4.7-3l2.8-7 14.4-27.6"/>

      {/*  Main Heavy Trend Line (Animated Path Drawing)  */}
      <path className="cls-5 anim-line" d="m53.6 261.3c4.5-9.2 11.4-19.8 22.9-20 10.7-0.2 11.6 4.2 22.5 4.2 20.8 0 26.1-20.5 32.4-31.5 5.5-9.6 13.8-22.4 23.6-22.4s14.6 6.9 22.6 10.9c12.8 4.5 15-24 24.9-43.9 4.3-8.6 8.5-9.1 11-9.6 6.5-1 11.5 6.5 16.5 13.5 3 4.2 7.8 12.1 17.3 12.8 23.4 1.8 41.9-29.3 59.1-70.3"/>

      {/*  UI Overlays & Texts  */}
      <text className="cls-15 cls-16 cls-17 anim-text" transform="translate(35.98 80.74)">Real-Time Pricing Intelligence </text>

      <g className="anim-ui ui-delay-2">
        <path className="cls-11" d="m40.3 166.2-1.8-0.3 1.9-3.3c0.3-0.5 0.9-0.5 1.2 0l1.9 3-1.6 0.7v1.7c-0.1 1-1.6 0.9-1.6 0v-1.8z"/>
        <path className="cls-11" d="m40.1 176 0.9 0.7v-2.7c0-1 1.6-1 1.6 0v2.6l0.8-0.7 0.5 1.1-2.1 2.2-2.9-2.5 1.2-0.7z"/>
        <path className="cls-11" d="m45.8 176.6c0-0.3-0.4-0.6 0-0.6h3.2c0.9 0 1 0.3 1 0.6s0 0.8-0.9 0.8h-3.3c-0.4 0 0-0.4 0-0.8z"/>
        <path className="cls-11" d="m57.1 275.5v-2.2c0-0.9 1.5-0.9 1.4 0l0.1 2.2 0.7-0.3c0.6-0.2 1.2 0.6 0.6 1.1l-2 2.2c-0.6 0.4-3-2.6-3-2.6-0.4-0.9 0.2-1.2 0.7-0.7l1.5 0.3z"/>
        
        {/*  Right side UI data panel details  */}
        <path className="cls-11" d="m315.7 96.3c0 0.4 0 0.2 0.3 0.4v-2.7s-0.6-0.9-0.5-0.5l0.2 0.5s0.3-1 0.3 0l-0.3 2.3z"/>
        <path className="cls-11" d="m316 175.5v0.4h5.3"/>
        <path className="cls-11" d="m314.6 175.8-0.2-0.4 4-2.8h3.1s0 3.2-0.1 3.3-4.4-0.1-4.4-0.1-1.2 0.3-2.4 0zm6.4-2.4-1.8 0.6 0.8 1h1v-1.6z"/>
        <path className="cls-11" d="m315 181h1c-0.9 0 2.5 0 0 0 0 0 0.7 4.9-0.3 6h-0.2-0.5 0.2-0.1c-0.1 0-0.1-6-0.1-6z"/>
        <path className="cls-12" d="m318.6 185c0.4 0 3.3-2 1-2.5 0 0-2.6-0.2-0.9 2.5"/>
        <path className="cls-11" d="m316.1 199.9 3.4 3.1-1.2 0.1-1.1 2.4c-0.8 0.9-2.5-1.5-2.6-2l1.5-3.6z"/>
        <path className="cls-11" d="m315.1 217.3 2.5 2.2-0.9 2.4h-0.2l-0.5 0.6c-0.3 0.2-1.4 0.2-1.7-0.5l-1.3-2.5h2.2l-0.1-2.2z"/>
        <path className="cls-14" d="m316.6 217.9v-0.4l-0.6-0.5h-0.6l-0.8 0.4 0.9 0.4"/>
        <path className="cls-11" d="m315.7 96.5c0 0.9-0.9 0 0 0v-2.5c0-1 1.7-1 1.3 0l-1.3 2.5z"/>
        <path className="cls-14" d="m314.1 92.6 0.4 0.6h1.2"/>
        <path className="cls-14" d="m309.8 93.4"/>
        <path className="cls-14" d="m308.7 114.4 2.8 3.2m-2.8 0.1 3-3.3"/>
        
        {/*  UI Bars / Indicators  */}
        <rect className="cls-11" x="45.3" y="195.8" width="4.4" height=".5"/>
        <rect x="309.1" y="173.8" width="4.4" height=".6" fill="#CA7331"/>
        <rect className="cls-11" x="309.2" y="201.8" width="4.4" height=".6"/>
        <rect className="cls-11" x="309.3" y="212" width="4.5" height=".5"/>
        <rect className="cls-11" x="142.4" y="182.2" width="5.1" height=".6"/>
        <rect className="cls-11" x="225.9" y="142.2" width="5.3" height=".6" opacity=".6"/>
        <path className="cls-11" d="m309.3 220.3c3.3 0 6.7 0.7 7 0.4"/>
      </g>

      {/*  Little UI Crosshairs / Points  */}
      <g className="anim-ui ui-delay-3">
        <circle className="cls-11" cx="307.4" cy="118.6" r="1.2"/>
        <ellipse className="cls-11" cx="180" cy="211.5" rx=".8" ry=".7"/>
        <ellipse className="cls-11" cx="140.3" cy="218.2" rx=".9" ry=".8"/>
        <ellipse className="cls-11" cx="104" cy="252.3" rx=".9" ry="1"/>
        <ellipse className="cls-11" cx="250.2" cy="183.1" rx=".85" ry=".81"/>
        
        <polygon className="cls-12" points="38.9 196.6 38.9 199.8 41.6 199.8 41.6 197.6 42.2 196"/>
        <path className="cls-13" d="m39 195 4 0.3m-1.9-1.5-0.1 3.6m-0.9-0.7c1-1.1 2.5-0.6 2.9-2.1"/>
        <line className="cls-18" x1="145.1" x2="145.1" y1="175.3" y2="179"/>
        <line className="cls-18" x1="143.2" x2="146.9" y1="177" y2="177"/>
        
        <line className="cls-19" x1="249.8" x2="251.9" y1="189.1" y2="189.1"/>
        <line className="cls-19" x1="249.8" x2="251.2" y1="189.1" y2="189.1"/>
        <line className="cls-19" x1="250.3" x2="250.3" y1="187.7" y2="191.4"/>
        <line className="cls-19" x1="248.5" x2="251.9" y1="189.1" y2="189.1"/>
        
        <line className="cls-19" x1="228.8" x2="228.8" y1="135.7" y2="140"/>
        <line className="cls-19" x1="227" x2="230.7" y1="137.4" y2="137.4"/>
        <path className="cls-19" d="m69.9 235.9h-3.9v-1s0.6-2 2.1-1.9c2 0 1.8 2.1 1.8 2.1v0.8z"/>
        
        <line className="cls-19" x1="61.5" x2="61.5" y1="227.1" y2="231.2"/>
        <line className="cls-19" x1="59.7" x2="63.5" y1="229.1" y2="229.1"/>
        <line className="cls-19" x1="104" x2="104" y1="256.7" y2="261.4"/>
        <line className="cls-19" x1="101.8" x2="106" y1="259" y2="258.9"/>
        
        <path className="cls-11" d="m236.5 133.5c0-1.1 1.4-1.8 1.4-0.5l-0.2 4c0 1-1.1 0.8-1.1 0l-0.1-3.5z"/>
        <line className="cls-14" x1="235.5" x2="238.9" y1="134" y2="134"/>
        <line className="cls-20" x1="201.8" x2="205.4" y1="216.7" y2="216.7"/>
        <line className="cls-20" x1="203.6" x2="203.6" y1="214.5" y2="218.1"/>
        <line className="cls-20" x1="128.8" x2="132.8" y1="259" y2="259"/>
        <line className="cls-20" x1="130.7" x2="130.8" y1="255.9" y2="261.1"/>
        
        <path className="cls-11" d="m293.4 171.9c0.7 0 1 0 1 1s0 1.1-1 1.1h-4.2c-0.7 0-0.7-2 0-2l4.2-0.1z"/>
        <path className="cls-11" d="m290.5 170.6c0-0.7-0.1-1 0.9-1s1.1 0 1.1 1v4.2c0 1.2-2 1.2-2 0v-4.2z"/>
        
        <line className="cls-20" x1="279" x2="282.9" y1="192.7" y2="192.7"/>
        <line className="cls-20" x1="281" x2="281.1" y1="190.7" y2="194.3"/>
        <path className="cls-19" d="m176.8 217.6c1.8 0.4 2.1-0.7 2.1-0.7v-3.5l2.3 3.2"/>
        <line className="cls-19" x1="177.4" x2="181.2" y1="216.8" y2="216.6"/>
        <polyline className="cls-11" points="314.7 172.2 318 173.6 316.4 174.7 315 175.4 315.2 175.3 316 175 314.7 175 314.7 175.8 314.5 175.3"/>
        <path className="cls-7" d="m315 199.5"/>
      </g>

      {/*  Main Data Point Nodes (Staggered Pop Animation based on X coordinate)  */}
      <g className="anim-dot dot-1">
        <circle className="cls-6" cx="52.2" cy="263.2" r="2.7"/>
        <circle className="cls-7" cx="52.2" cy="263.2" r="2.3"/>
      </g>

      <g className="anim-dot dot-2">
        <circle className="cls-6" cx="125.9" cy="218.3" r="2.7"/>
        <circle className="cls-7" cx="125.9" cy="218.4" r="2.3"/>
      </g>

      <g className="anim-dot dot-3">
        <circle className="cls-6" cx="179" cy="203.3" r="2.7"/>
        <circle className="cls-7" cx="179" cy="203.3" r="2.3"/>
      </g>

      <g className="anim-dot dot-4">
        <circle className="cls-6" cx="214.9" cy="148.9" r="2.7"/>
        <circle className="cls-7" cx="215" cy="148.9" r="2.3"/>
      </g>

      {/*  Final Orange "Beacon" Data Point  */}
      <g className="anim-dot dot-5 beacon">
        <ellipse cx="315.7" cy="93.5" rx=".5" ry=".4" fill="#DE8945" stroke="#DE8945" strokeMiterlimit="10" strokeWidth=".2627"/>
        <circle cx="307.2" cy="102.6" r="3.9" fill="#DE8945" stroke="#DE8945" strokeMiterlimit="10" strokeWidth="1.037"/>
        <circle className="cls-7" cx="307.3" cy="102.5" r="2.3"/>
      </g>

    </svg>
    </div>
  );
}
