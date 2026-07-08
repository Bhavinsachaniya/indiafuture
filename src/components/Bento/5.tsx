import React, { useState, useEffect, useCallback } from "react";

// --- TypeScript Interfaces ---
interface AnimationPhases {
  vLines: boolean;
  hLines: boolean;
  chartLine: boolean;
  chartFill: boolean;
  nodes: boolean;
  annotations: boolean;
}

export default function App() {
  // --- State Hooks ---
  const [animKey, setAnimKey] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [phases, setPhases] = useState<AnimationPhases>({
    vLines: false,
    hLines: false,
    chartLine: false,
    chartFill: false,
    nodes: false,
    annotations: false,
  });

  // --- Replay Handler ---
  const handleReplay = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    // Incrementing the key forces the SVG to completely unmount and remount,
    // which flawlessly resets all animations without needing manual DOM reflows.
    setAnimKey((prev) => prev + 1);
  }, [isAnimating]);

  // --- Animation Sequencer ---
  useEffect(() => {
    // Reset all phases to false initially
    setPhases({
      vLines: false,
      hLines: false,
      chartLine: false,
      chartFill: false,
      nodes: false,
      annotations: false,
    });

    const timers: NodeJS.Timeout[] = [];

    // Sequence the animations exactly as mapped in the original jQuery timings
    timers.push(setTimeout(() => setPhases((p) => ({ ...p, vLines: true })), 100));
    timers.push(setTimeout(() => setPhases((p) => ({ ...p, hLines: true })), 300));
    timers.push(setTimeout(() => setPhases((p) => ({ ...p, chartLine: true })), 600));
    timers.push(setTimeout(() => setPhases((p) => ({ ...p, chartFill: true })), 900));
    timers.push(setTimeout(() => setPhases((p) => ({ ...p, nodes: true })), 1400));
    timers.push(setTimeout(() => setPhases((p) => ({ ...p, annotations: true })), 1900));

    // Release animation lock
    timers.push(setTimeout(() => setIsAnimating(false), 2700));

    return () => timers.forEach(clearTimeout);
  }, [animKey]);

  // --- Embedded Styles (Converted to clean CSS-in-JS string) ---
  const styles = `
    /* --- ORIGINAL SVG STYLES (Enhanced for Animation) --- */
    .cls-0 { fill: #F8F4EE; }
    .cls-1 { fill: none; stroke: #977B66; stroke-width: 0.3004; stroke-miterlimit: 10; opacity: 0.3; }
    .cls-3 { fill: none; stroke: #7D5A41; stroke-width: 0.3; stroke-miterlimit: 10; opacity: 0.2; }
    .cls-4 { fill: #EADBC7; }
    .cls-5 { fill: none; stroke: #7C502D; stroke-width: 1.67; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; }
    .cls-6 { fill: #FFFFFF; stroke: #FFFFFF; stroke-width: 1.2524; stroke-miterlimit: 10; }
    .cls-7 { fill: #562F18; stroke: #FFFFFF; stroke-width: 1.2524; stroke-miterlimit: 10; }
    .cls-8 { fill: none; stroke: #562F18; stroke-width: 0.3004; stroke-linecap: round; stroke-linejoin: round; stroke-dasharray: 1.458,1.4584; }
    .cls-9 { fill: none; stroke: #562F18; stroke-width: 0.4506; stroke-linecap: round; stroke-linejoin: round; stroke-dasharray: 1.3519,1.352; }
    .cls-10 { fill: none; stroke: #562F18; stroke-width: 0.4506; stroke-linecap: round; stroke-linejoin: round; }
    .cls-11 { fill: #562F18; }
    .cls-12 { fill: none; stroke: #CBBDB7; stroke-width: 0.5165; stroke-miterlimit: 10; }
    .cls-13 { fill: none; stroke: #CD7431; stroke-linecap: square; stroke-linejoin: round; stroke-miterlimit: 10; }
    .cls-14 { fill: none; stroke: #CD7431; stroke-width: 0.9858; stroke-miterlimit: 10; }
    .cls-15 { fill: #443128; }
    .cls-16 { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; font-weight: 700; }
    .cls-17 { font-size: 11px; }
    .cls-18 { fill: none; stroke: #CBBDB7; stroke-width: 0.4277; stroke-linecap: square; stroke-linejoin: round; stroke-miterlimit: 10; }
    .cls-19 { fill: none; stroke: #A29286; stroke-width: 0.5; stroke-miterlimit: 10; }
    .cls-20 { fill: none; stroke: #CC7331; stroke-width: 1.0314; stroke-linecap: square; stroke-linejoin: round; }

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
      opacity: 0.25;
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

    /* 5. UI Markers and Annotations */
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
      animation: pulse-ring 2.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite alternate;
    }
    @keyframes pulse-ring {
      0% { filter: drop-shadow(0 0 0 rgba(222, 137, 69, 0.4)); transform: scale(1); }
      100% { filter: drop-shadow(0 0 8px rgba(222, 137, 69, 0.8)); transform: scale(1.05); }
    }
  `;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative bg-[#f1f5f9] text-[#0f172a] font-[-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,Helvetica,Arial,sans-serif]">
      <style>{styles}</style>

      {/* Header Controls */}
      <div className="mb-8 text-center w-full max-w-4xl flex justify-between items-end z-10">
        <div className="text-left">
          <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-md bg-amber-100 text-amber-800 text-xs font-bold tracking-wide uppercase mb-3 border border-amber-200 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            Live Sync
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 drop-shadow-sm">
            Market Intelligence
          </h1>
          <p className="text-slate-500 text-sm mt-1 font-medium">
            Real-time competitor pricing index
          </p>
        </div>

        <button
          onClick={handleReplay}
          disabled={isAnimating}
          className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-sm font-semibold py-2 px-5 rounded-lg shadow-sm transition-all active:scale-95 flex items-center gap-2 h-fit disabled:opacity-50 disabled:active:scale-100"
        >
          <svg
            className={`w-4 h-4 text-amber-600 ${isAnimating ? "animate-spin" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            ></path>
          </svg>
          Re-run Analysis
        </button>
      </div>

      {/* Dashboard Card Container */}
      <div className="dashboard-card w-full max-w-4xl relative z-10">
        {/* Top Nav Bar Mockup */}
        <div className="w-full bg-white border-b border-slate-100 px-6 py-4 flex justify-between items-center z-20 relative">
          <div className="flex gap-4">
            <div className="h-2 w-16 bg-slate-200 rounded-full"></div>
            <div className="h-2 w-24 bg-slate-100 rounded-full"></div>
          </div>
          <div className="flex gap-2">
            <div className="h-6 w-6 rounded bg-amber-50 border border-amber-100"></div>
            <div className="h-6 w-6 rounded bg-slate-50 border border-slate-100"></div>
          </div>
        </div>

        <div className="svg-wrapper relative bg-[#F8F4EE]">
          {/* Organized SVG (Controlled by animKey to allow complete reset) */}
          <svg
            key={animKey}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 359 360"
            className="w-full h-auto block"
          >
            {/* 1. Base Background */}
            <path
              className="cls-0"
              d="m348 360h-337c-6 0-11-5-11-11v-338c0-6 5-11 11-11h337c6.1 0 11 5 11 11v338c0 6-5 11-11 11z"
            />

            {/* Chart Title */}
            <text
              className={`cls-15 cls-16 cls-17 annotation ${phases.annotations ? "is-visible" : ""}`}
              style={{ transitionDelay: "0ms" }}
              transform="translate(35.98 80.74)"
            >
              Real-Time Pricing Intelligence
            </text>

            {/* 2. Grid Lines */}
            <g className="chart-grid">
              {/* Vertical Lines (Staggered by 30ms) */}
              {[
                { x1: 52.1, x2: 52.1 },
                { x1: 73.3, x2: 73.3 },
                { x1: 94.8, x2: 94.8 },
                { x1: 116.9, x2: 116.9 },
                { x1: 138.2, x2: 138.2 },
                { x1: 159.3, x2: 159.3 },
                { x1: 179.1, x2: 178.8 },
                { x1: 199.4, x2: 199.4 },
                { x1: 221.6, x2: 221.6 },
                { x1: 243.1, x2: 243.1 },
                { x1: 263.9, x2: 263.9 },
                { x1: 285.4, x2: 285.4 },
                { x1: 307.2, x2: 307.2 },
              ].map((line, i) => (
                <line
                  key={`v-${i}`}
                  className={`cls-1 grid-line v-line ${phases.vLines ? "is-visible" : ""}`}
                  style={{ transitionDelay: `${i * 30}ms` }}
                  x1={line.x1}
                  x2={line.x2}
                  y1="90.2"
                  y2="293.5"
                />
              ))}

              {/* Horizontal Lines (Staggered by 40ms) */}
              {[105, 124.9, 145.7, 165.5, 183.6, 203.3, 221, 240.1, 262.4, 281].map((y, i) => (
                <line
                  key={`h-${i}`}
                  className={`cls-3 grid-line h-line ${phases.hLines ? "is-visible" : ""}`}
                  style={{ transitionDelay: `${i * 40}ms` }}
                  x1="20.6"
                  x2="338.4"
                  y1={y}
                  y2={y}
                />
              ))}
            </g>

            {/* 3. Fill Area under the chart */}
            <path
              className={`cls-4 chart-fill ${phases.chartFill ? "is-visible" : ""}`}
              d="m52.1 262 0.1-41 72-0.5c6.8-9.8 14.9-30 28.6-30s15.3 8.3 24.7 10.5 9.5 4 11.7 0 9.8-50.5 25.8-52c10 1 15 17 22.5 22.5 27.5 16.5 54.5-22.5 69-67.5l0.5 117h-253l-1.9 41z"
            />

            {/* 4. Main Chart Line */}
            <path
              className={`cls-5 chart-line ${phases.chartLine ? "is-visible" : ""}`}
              d="m53.6 261.3c4.5-9.2 11.4-19.8 22.9-20 10.7-0.2 11.6 4.2 22.5 4.2 20.8 0 26.1-20.5 32.4-31.5 5.5-9.6 13.8-22.4 23.6-22.4s14.6 6.9 22.6 10.9c12.8 4.5 15-24 24.9-43.9 4.3-8.6 8.5-9.1 11-9.6 6.5-1 11.5 6.5 16.5 13.5 3 4.2 7.8 12.1 17.3 12.8 23.4 1.8 41.9-29.3 59.1-70.3"
            />

            {/* 5. Annotations (Staggered by 80ms) */}
            <g className="annotations">
              <path
                className={`cls-8 annotation annotation-dash ${phases.annotations ? "is-visible" : ""}`}
                style={{ transitionDelay: "80ms" }}
                d="m220 153.1-23.2 58.2-17.3 0.2"
              />
              <path
                className={`cls-9 annotation annotation-dash ${phases.annotations ? "is-visible" : ""}`}
                style={{ transitionDelay: "160ms" }}
                d="m159.3 202c-4.8 1.3-9.8 3.1-13.2 8l-22.4 42.2-18.6 0.1"
              />
              <path
                className={`cls-10 annotation annotation-dash ${phases.annotations ? "is-visible" : ""}`}
                style={{ transitionDelay: "240ms" }}
                d="m250.2 183.2h19.4c2.9-0.3 3.5-1.2 4.5-2.7l11.2-22.5c0.9-1.4 2.7-2.2 4.7-3l2.8-7 14.4-27.6"
              />

              <g
                className={`annotation ${phases.annotations ? "is-visible" : ""}`}
                style={{ transitionDelay: "320ms" }}
              >
                <path
                  className="cls-11"
                  d="m40.3 166.2-1.8-0.3 1.9-3.3c0.3-0.5 0.9-0.5 1.2 0l1.9 3-1.6 0.7v1.7c-0.1 1-1.6 0.9-1.6 0v-1.8z"
                />
                <path
                  className="cls-11"
                  d="m40.1 176 0.9 0.7v-2.7c0-1 1.6-1 1.6 0v2.6l0.8-0.7 0.5 1.1-2.1 2.2-2.9-2.5 1.2-0.7z"
                />
                <path
                  className="cls-11"
                  d="m45.8 176.6c0-0.3-0.4-0.6 0-0.6h3.2c0.9 0 1 0.3 1 0.6s0 0.8-0.9 0.8h-3.3c-0.4 0 0-0.4 0-0.8z"
                />
                <polygon
                  className="cls-12"
                  points="38.9 196.6 38.9 199.8 41.6 199.8 41.6 197.6 42.2 196"
                />
                <path
                  className="cls-13"
                  d="m39 195 4 0.3m-1.9-1.5-0.1 3.6m-0.9-0.7c1-1.1 2.5-0.6 2.9-2.1"
                />
                <rect className="cls-11" x="45.3" y="195.8" width="4.4" height=".5" />
                <path
                  className="cls-11"
                  d="m57.1 275.5v-2.2c0-0.9 1.5-0.9 1.4 0l0.1 2.2 0.7-0.3c0.6-0.2 1.2 0.6 0.6 1.1l-2 2.2c-0.6 0.4-3-2.6-3-2.6-0.4-0.9 0.2-1.2 0.7-0.7l1.5 0.3z"
                />
                <line className="cls-19" x1="69.9" x2="66" y1="235.9" y2="235.9" />
                <line className="cls-19" x1="61.5" x2="61.5" y1="227.1" y2="231.2" />
                <line className="cls-19" x1="59.7" x2="63.5" y1="229.1" y2="229.1" />
              </g>

              <g
                className={`annotation ${phases.annotations ? "is-visible" : ""}`}
                style={{ transitionDelay: "400ms" }}
              >
                <rect className="cls-11" x="142.4" y="182.2" width="5.1" height=".6" />
                <line className="cls-18" x1="145.1" x2="145.1" y1="175.3" y2="179" />
                <line className="cls-18" x1="143.2" x2="146.9" y1="177" y2="177" />
                <path className="cls-19" d="m176.8 217.6c1.8 0.4 2.1-0.7 2.1-0.7v-3.5l2.3 3.2" />
                <line className="cls-19" x1="177.4" x2="181.2" y1="216.8" y2="216.6" />
                <line className="cls-20" x1="128.8" x2="132.8" y1="259" y2="259" />
                <line className="cls-20" x1="130.7" x2="130.8" y1="255.9" y2="261.1" />
                <line className="cls-19" x1="104" x2="104" y1="256.7" y2="261.4" />
                <line className="cls-19" x1="101.8" x2="106" y1="259" y2="258.9" />
                <ellipse className="cls-11" cx="180" cy="211.5" rx=".8" ry=".7" />
                <ellipse className="cls-11" cx="140.3" cy="218.2" rx=".9" ry=".8" />
                <ellipse className="cls-11" cx="104" cy="252.3" rx=".9" ry="1" />
              </g>

              <g
                className={`annotation ${phases.annotations ? "is-visible" : ""}`}
                style={{ transitionDelay: "480ms" }}
              >
                <line className="cls-19" x1="249.8" x2="251.9" y1="189.1" y2="189.1" />
                <line className="cls-19" x1="249.8" x2="251.2" y1="189.1" y2="189.1" />
                <line className="cls-19" x1="250.3" x2="250.3" y1="187.7" y2="191.4" />
                <line className="cls-19" x1="248.5" x2="251.9" y1="189.1" y2="189.1" />
                <line className="cls-19" x1="228.8" x2="228.8" y1="135.7" y2="140" />
                <line className="cls-19" x1="227" x2="230.7" y1="137.4" y2="137.4" />
                <path
                  className="cls-11"
                  d="m236.5 133.5c0-1.1 1.4-1.8 1.4-0.5l-0.2 4c0 1-1.1 0.8-1.1 0l-0.1-3.5z"
                />
                <line className="cls-14" x1="235.5" x2="238.9" y1="134" y2="134" />
                <rect className="cls-11" x="225.9" y="142.2" width="5.3" height=".6" opacity=".6" />
                <ellipse className="cls-11" cx="250.2" cy="183.1" rx=".85" ry=".81" />
                <line className="cls-20" x1="201.8" x2="205.4" y1="216.7" y2="216.7" />
                <line className="cls-20" x1="203.6" x2="203.6" y1="214.5" y2="218.1" />
              </g>

              <g
                className={`annotation ${phases.annotations ? "is-visible" : ""}`}
                style={{ transitionDelay: "560ms" }}
              >
                <path
                  className="cls-11"
                  d="m315.7 96.3c0 0.4 0 0.2 0.3 0.4v-2.7s-0.6-0.9-0.5-0.5l0.2 0.5s0.3-1 0.3 0l-0.3 2.3z"
                />
                <circle className="cls-11" cx="307.4" cy="118.6" r="1.2" />
                <path className="cls-11" d="m316 175.5v0.4h5.3" />
                <path className="cls-14" d="m308.7 114.4 2.8 3.2m-2.8 0.1 3-3.3" />
                <path
                  className="cls-11"
                  d="m314.6 175.8-0.2-0.4 4-2.8h3.1s0 3.2-0.1 3.3-4.4-0.1-4.4-0.1-1.2 0.3-2.4 0zm6.4-2.4-1.8 0.6 0.8 1h1v-1.6z"
                />
                <path
                  className="cls-11"
                  d="m315 181h1c-0.9 0 2.5 0 0 0 0 0 0.7 4.9-0.3 6h-0.2-0.5 0.2-0.1c-0.1 0-0.1-6-0.1-6z"
                />
                <path className="cls-12" d="m318.6 185c0.4 0 3.3-2 1-2.5 0 0-2.6-0.2-0.9 2.5" />
                <path
                  className="cls-11"
                  d="m316.1 199.9 3.4 3.1-1.2 0.1-1.1 2.4c-0.8 0.9-2.5-1.5-2.6-2l1.5-3.6z"
                />
                <path
                  className="cls-11"
                  d="m315.1 217.3 2.5 2.2-0.9 2.4h-0.2l-0.5 0.6c-0.3 0.2-1.4 0.2-1.7-0.5l-1.3-2.5h2.2l-0.1-2.2z"
                />
                <path className="cls-14" d="m316.6 217.9v-0.4l-0.6-0.5h-0.6l-0.8 0.4 0.9 0.4" />
                <path
                  className="cls-11"
                  d="m315.7 96.5c0 0.9-0.9 0 0 0v-2.5c0-1 1.7-1 1.3 0l-1.3 2.5z"
                />
                <path className="cls-14" d="m314.1 92.6 0.4 0.6h1.2" />
                <rect x="309.1" y="173.8" width="4.4" height=".6" fill="#CA7331" />
                <rect className="cls-11" x="309.2" y="201.8" width="4.4" height=".6" />
                <rect className="cls-11" x="309.3" y="212" width="4.5" height=".5" />
                <path className="cls-11" d="m309.3 220.3c3.3 0 6.7 0.7 7 0.4" />
                <line className="cls-1" x1="308.2" x2="315.2" y1="183.6" y2="183.6" />
                <path className="cls-14" d="m309.8 93.4" />
                <path className="cls-7" d="m315 199.5" />
                <path
                  className="cls-11"
                  d="m293.4 171.9c0.7 0 1 0 1 1s0 1.1-1 1.1h-4.2c-0.7 0-0.7-2 0-2l4.2-0.1z"
                />
                <path
                  className="cls-11"
                  d="m290.5 170.6c0-0.7-0.1-1 0.9-1s1.1 0 1.1 1v4.2c0 1.2-2 1.2-2 0v-4.2z"
                />
                <line className="cls-20" x1="279" x2="282.9" y1="192.7" y2="192.7" />
                <line className="cls-20" x1="281" x2="281.1" y1="190.7" y2="194.3" />
                <polyline
                  className="cls-11"
                  points="314.7 172.2 318 173.6 316.4 174.7 315 175.4 315.2 175.3 316 175 314.7 175 314.7 175.8 314.5 175.3"
                />
              </g>
            </g>

            {/* 6. Data Nodes (Staggered by 100ms) */}
            <g className="data-nodes">
              <g
                className={`data-node ${phases.nodes ? "is-visible" : ""}`}
                style={{ transitionDelay: "0ms" }}
              >
                <circle className="cls-6" cx="52.2" cy="263.2" r="2.7" />
                <circle className="cls-7" cx="52.2" cy="263.2" r="2.3" />
              </g>
              <g
                className={`data-node ${phases.nodes ? "is-visible" : ""}`}
                style={{ transitionDelay: "100ms" }}
              >
                <circle className="cls-6" cx="125.9" cy="218.3" r="2.7" />
                <circle className="cls-7" cx="125.9" cy="218.4" r="2.3" />
              </g>
              <g
                className={`data-node ${phases.nodes ? "is-visible" : ""}`}
                style={{ transitionDelay: "200ms" }}
              >
                <circle className="cls-6" cx="179" cy="203.3" r="2.7" />
                <circle className="cls-7" cx="179" cy="203.3" r="2.3" />
              </g>
              <g
                className={`data-node ${phases.nodes ? "is-visible" : ""}`}
                style={{ transitionDelay: "300ms" }}
              >
                <circle className="cls-6" cx="214.9" cy="148.9" r="2.7" />
                <circle className="cls-7" cx="215" cy="148.9" r="2.3" />
              </g>
              {/* Key Orange Metric Node */}
              <g
                className={`data-node pulse-node ${phases.nodes ? "is-visible" : ""}`}
                style={{ transitionDelay: "400ms" }}
              >
                <ellipse
                  cx="315.7"
                  cy="93.5"
                  rx=".5"
                  ry=".4"
                  fill="#DE8945"
                  stroke="#DE8945"
                  strokeMiterlimit="10"
                  strokeWidth=".2627"
                />
                <circle
                  cx="307.2"
                  cy="102.6"
                  r="3.9"
                  fill="#DE8945"
                  stroke="#DE8945"
                  strokeMiterlimit="10"
                  strokeWidth="1.037"
                />
                <circle className="cls-7" cx="307.3" cy="102.5" r="2.3" />
              </g>
            </g>
          </svg>
        </div>
      </div>

      {/* Decorative ambient background glow */}
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-orange-400 opacity-[0.03] blur-[80px] -z-10 pointer-events-none"></div>
    </div>
  );
}
