import { useEffect, useRef, useState } from 'react';
import './Card2.css';

export function Card2() {
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
      <svg className="bento-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.5 151">
      
      {/*  LAYER 1: Base Shell  */}
      <g className="ui-base">
        <path className="cls-1" d="m116 127.5h-84.6c-2.2 0-4-1.8-4-4v-92.6c0-2.2 1.8-4 4-4h84.5c2.3 0 4.4 1.8 4.4 4l0.1 92.6c0 2.2-1.8 4-4.4 4z"/>
        <path className="cls-2" d="m113.3 124.1h-85.1v-100.3h85c2.2 0 4 1.8 4 4v92.4c-0.2 2.2-1.9 3.9-3.9 3.9z"/>
        <path className="cls-3" d="m111.8 36.2h-82.5c-1 0-1.9-0.8-1.9-1.9v-5.7c0-1.1 0.9-2.1 2-2.1h81.8c1.6 0 2.6 1 2.6 2.1v5.7c0 1.1-0.9 1.9-2 1.9z"/>
      </g>

      {/*  LAYER 2: Header & Search  */}
      <g className="ui-header">
        {/*  Top Left App Logo  */}
        <path className="cls-4" d="m24.5 18.6h-7.5c-2.7 0-5.3-2.1-5.3-5.2s2.6-5.2 5.1-5.2h7.6c2.6 0 5.5 2.1 5.5 5.2s-2.4 5.2-5.4 5.2z"/>
        <path className="cls-8" d="m22.1 11-0.1 4.8h0.8v-1.4l0.6-0.6 1.3 2h1.1l-1.9-2.6 1.8-2.2h-1l-1.8 2.3v-2.3h-0.8zm-2.4 2c0-1.1 0.3-1.4 0.8-1.4 0.2 0 0.3 0.1 0.3 0.5 0 0.5-0.5 0.9-1.1 0.9zm-1.7 0c-0.7 0-1.2-0.4-1.1-0.9 0-0.4 0.2-0.5 0.3-0.5 0.5 0 0.8 0.4 0.8 1.4zm0.8-1.1c-0.2-0.6-0.6-1-1.3-1s-1.3 0.3-1.1 1.3c0.1 0.7 0.6 1.2 1.5 1.2v0.5c-0.9 0-1.6 0.6-1.6 1.2-0.1 0.5 0.4 0.9 0.9 0.9 0.7 0 1.1-0.4 1.3-1.1l0.1-0.5h0.6l0.2 0.5c0.1 0.7 0.5 1.1 1.2 1.1s0.8-0.4 0.8-0.6c0.1-0.9-0.8-1.5-1.6-1.5l-0.1-0.5c0.8 0 1.4-0.5 1.5-1.2 0.3-0.7-0.2-1.3-0.9-1.3s-1.3 0.4-1.3 1l-0.2 0.9h-0.4l0.4-0.9zm-0.8 2.5c-0.1 0.5-0.4 0.9-0.7 0.9-0.2 0-0.4-0.1-0.3-0.4 0-0.3 0.4-0.5 0.9-0.5h0.1zm1.7 0c0.6 0 0.9 0.2 0.9 0.5 0.1 0.3 0 0.4-0.2 0.4-0.4 0-0.7-0.4-0.8-0.9h0.1zm-1.2-0.5v-0.6h0.6v0.6h-0.6z"/>
        <path fill="#1a1a1a" d="m20.5 11.2c0.5 0 0.3 1.3-0.5 1.2 0-0.6 0.1-1.2 0.5-1.2zm-3.1 4c-0.5 0-0.2-1.3 0.6-1.3 0 0.8-0.2 1.3-0.6 1.3zm0-4c0.4 0 0.6 0.4 0.6 1.2-0.9 0.1-1.1-1.2-0.6-1.2zm3.1 4c-0.4 0-0.6-0.4-0.5-1.2 0.7 0 1 1.2 0.5 1.2zm-1-0.5c0.1 0.6 0.5 1 1.2 1s0.7-0.1 0.7-0.6-0.4-1.4-1.7-1.5v-0.5c1.3 0.1 1.5-0.5 1.6-1.3 0.1-0.6-0.2-0.9-0.8-0.9-1 0-1.3 0.8-1.3 1.8h-0.5c0.1-1.1-0.2-1.8-1.1-1.8-0.6 0-1.3 0.2-1.2 1.2 0.2 1.2 1.6 1 1.6 1v0.5c-1.2 0-1.9 0.6-1.9 1.4 0 0.4 0.4 0.8 0.9 0.8 0.8 0 1.2-0.4 1.3-1.1l0.2-0.5h0.6l0.4 0.5zm-0.9-1.1v-0.6h0.5v0.6h-0.5z"/>
        <path className="cls-12" d="m22 15.8h0.8v-1.4l0.5-0.6 1.4 2h1l-1.8-2.5 1.8-2.3h-1l-2 2.3v-2.3h-0.7v4.8z"/>
        
        {/*  Search Input Elements  */}
        <path className="cls-5" d="m34.9 31.9 0.7 0.7v0.1 0.3l-1-1"/>
        <circle className="cls-5" cx="33.6" cy="31" r="1.3"/>
        <text x="38" y="32.8" fill="#1a171b" fontSize="3.8px">Search commands or files...</text>
        
        {/*  Settings/Option Top Right  */}
        <path className="cls-4" d="m106.9 29.7"/>
        <path className="cls-4" d="m109.5 29.7h-2.1l-0.5 1v2.3l2.3 0.2 1.1-0.9v-2.2z"/>
        <path fill="#1a1a1a" d="m108.4 30.2h-0.1c-0.3 0-0.6 0.3-0.5 0.4v0.3c0 0.2 0.1 0.4 0.4 0.4h0.2c0.2 0 0.4-0.1 0.4-0.4v-0.3c0-0.2-0.2-0.5-0.4-0.4zm0 1.4h-0.8v1.1h0.8c0.2 0 0.3-0.1 0.3-0.3v-0.6c0.1-0.1-0.1-0.2-0.3-0.2zm1.2-0.4c-0.3 0-0.7 0.1-0.8 0.2l0.1 0.6c0 0.1 0.1 0.2 0.3 0.2h0.4c0-0.2 0.4-0.3 0.4-0.6 0.1-0.3-0.2-0.4-0.4-0.4z"/>
        <path className="cls-3" d="m109.5 29.7"/>
      </g>

      {/*  LAYER 3: Command List (Staggered Groups)  */}
      
      {/*  Row 1: Active Highlight  */}
      <g className="ui-row ui-active delay-1">
        <path className="cls-7" d="m113.8 47.3h-86.4v-6.4c0-1.1 0.9-1.9 1.9-1.9h82.5c1.1 0 2 0.8 2 1.9v6.4z"/>
        <circle className="cls-1" cx="33.9" cy="43.3" r="1.8"/>
        <polyline className="cls-6" points="33 43.3 33.5 43.8 34.6 42.8"/>
        <text x="38" y="44.5" fill="#1a1a1a" fontWeight="600" fontStyle="italic" fontSize="3.7px">Open Recent Project</text>
        <path className="cls-6" d="m106.9 43.4 1 0.7 1.8-1.8"/>
      </g>

      <g className="ui-row delay-2">
        <circle className="cls-4" cx="33.9" cy="52.5" r="1.8"/>
        <polyline className="cls-6" points="32.9 52.6 33.5 53.2 34.7 51.9"/>
        <text x="38" y="54" fill="#12090B" fontSize="3.8px">New Document</text>
      </g>

      <g className="ui-row delay-3">
        <circle className="cls-4" cx="33.9" cy="62.2" r="1.8"/>
        <polyline className="cls-6" points="33.1 62.3 33.6 62.8 34.8 61.6"/>
        <text x="38" y="63.6" fill="#12090B" fontSize="3.8px">New Document</text>
      </g>

      <g className="ui-row delay-4">
        <circle className="cls-4" cx="33.9" cy="71.3" r="1.8"/>
        <polyline className="cls-6" points="33 71.3 33.5 71.8 34.7 70.6"/>
        <text x="38.1" y="72.7" fill="#12090B" fontSize="3.8px">Open Recent Project</text>
      </g>

      <g className="ui-row delay-5">
        <path className="cls-10" d="m32.4 81.7c0.1-1.1 0-1.4 2.4-1.4"/>
        <polygon className="cls-4" points="34.3 78.7 35.8 80.2 34.3 81.6"/>
        <text x="38" y="81.7" fill="#12090B" fontSize="3.8px">New Document</text>
      </g>

      <g className="ui-row delay-6">
        <path className="cls-10" d="m32.4 90.7c0.1-1.2 0-1.6 2.4-1.5"/>
        <polygon className="cls-4" points="34.1 87.8 35.7 89.3 34.2 90.6"/>
        <text x="38" y="90.7" fill="#12090B" fontSize="3.8px">New Document</text>
      </g>

      <g className="ui-row delay-7">
        <path className="cls-10" d="m32.4 99.7c0.1-1.1-0.1-1.6 2.4-1.4"/>
        <polygon className="cls-4" points="34.1 96.7 35.7 98.2 34.1 99.6"/>
        <text x="38" y="99.7" fill="#12090B" fontSize="3.8px">Open Recement</text>
      </g>

      <g className="ui-row delay-8">
        <path className="cls-10" d="m32.4 109.5c0-1.3-0.1-1.7 2.3-1.6"/>
        <polygon className="cls-4" points="34.2 106.3 35.7 107.7 34.2 109.1"/>
        <text x="38" y="109.4" fill="#12090B" fontSize="3.8px">New Document</text>
      </g>

      <g className="ui-row delay-9">
        <path className="cls-10" d="m32.4 118.6c0-1.3-0.1-1.7 2.3-1.5"/>
        <polygon className="cls-4" points="34.1 115.8 35.7 117.2 34.1 118.5"/>
        <text x="38" y="118.5" fill="#12090B" fontSize="3.8px">New Document</text>
      </g>

      {/*  LAYER 4: Footer Buttons  */}
      <g className="ui-footer">
        {/*  Left bottom icon  */}
        <path className="cls-4" d="m12.4 26.4c2.8-0.3 5.3 1.8 5.4 4.6 0.2 2.7-1.9 5.3-4.8 5.4-2.8 0.2-5.3-1.8-5.5-4.6-0.1-2.7 1.9-5.2 4.9-5.4z"/>
        <polyline className="cls-11" points="10.6 31.7 11.9 33 14.6 30.2"/>

        {/*  Middle Action  */}
        <path className="cls-4" d="m131 114.3c2.7-0.1 5.7 1.8 6 4.7 0.2 2.9-2 4.9-4.4 5.1-2.6 0.3-5.4-1.3-5.9-4.2-0.3-2.7 1.7-5.4 4.3-5.6z"/>
        <path className="cls-8" d="m130.6 117.4c-0.3 0-0.8-0.2-0.2 0.2l1.8 0.6-2.4 2.4c-0.2 0.2 0.4 0.6 0.5 0.4l2.9-2.5v1.7l0.3 0.2 0.4-0.2 0.1-2.2v-0.5l-0.2-0.1h-3.2z"/>
        
        {/*  Right Action  */}
        <path className="cls-4" d="m130.9 142.6h-19.1c-2.2-0.3-4.7-2-4.8-4.9s2.1-5.3 5.2-5.4h18.7c3.1 0.1 5.2 2.3 5.3 5.3-0.1 2.7-2 4.6-5.3 5z"/>
        <path className="cls-8" d="m114.7 136.4c-0.1-0.5-0.5-0.6-1-0.6-0.8 0-1.3 0.6-1.3 1.8s0.5 1.5 1.3 1.5c0.6 0 0.9-0.3 1.1-0.7h0.9c-0.2 0.8-0.9 1.4-2 1.4-1.2 0-2.2-0.8-2.2-2.4 0-1.5 0.9-2.3 2.1-2.3 0.9 0 1.8 0.5 2 1.5h-0.9v-0.2z"/>
        <path className="cls-8" d="m118.1 136.9h-0.7v1.8c0 0.4 0.2 0.5 0.4 0.5h0.3v0.6c-0.1 0-0.3 0.2-0.5 0-0.5 0-1.1-0.2-1.1-0.8v-2.1h-0.4v-0.6h0.5v-0.8h0.8v0.8h0.8l-0.1 0.6z"/>
        <path className="cls-8" d="m118.8 136.3h0.7v0.5c0.1-0.4 0.5-0.6 0.9-0.6h0.6l-0.1 0.7c-0.2 0-0.3-0.1-0.5 0-0.4 0-0.8 0.5-0.8 0.7v2.2h-0.8v-3.5z"/>
        <path className="cls-8" d="m122.5 139.7h-0.8v-4.6h0.8v4.6z"/>
        <path className="cls-8" d="m124.8 135.9h0.7l0.1 1.3h1.3v0.6h-1.3v1.3h-0.7v-1.3h-1.3v-0.6h1.3v-1.3h-0.1z"/>
        <path className="cls-8" d="m127.8 135.2h0.9l0.1 2.2 1.9-2.2h1.1l-1.7 2.1 1.8 2.4h-0.9l-1.4-1.8-0.7 0.6v1.2h-0.9l-0.1-4.5h-0.1z"/>
      </g>
    </svg>
    </div>
  );
}
