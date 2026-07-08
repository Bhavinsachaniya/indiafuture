import React, { useState, useEffect } from "react";

// --- TypeScript Interfaces ---
interface TiltState {
  rotX: number;
  rotY: number;
}

interface AnimationPhases {
  base: boolean;
  lines: boolean;
  icon: boolean;
  nodes: boolean;
  bars: boolean;
  text: boolean;
}

export default function App() {
  // --- State Hooks ---
  const [animKey, setAnimKey] = useState<number>(0);
  const [isReplaying, setIsReplaying] = useState<boolean>(false);
  const [tilt, setTilt] = useState<TiltState>({ rotX: 0, rotY: 0 });
  const [activePhases, setActivePhases] = useState<AnimationPhases>({
    base: false,
    lines: false,
    icon: false,
    nodes: false,
    bars: false,
    text: false,
  });

  // --- Animation Sequencer ---
  useEffect(() => {
    // Reset all phases before restarting
    setActivePhases({
      base: false,
      lines: false,
      icon: false,
      nodes: false,
      bars: false,
      text: false,
    });

    // Sequence the animations mapped exactly to the original timings
    const t1 = setTimeout(() => setActivePhases((p) => ({ ...p, base: true })), 100);
    const t2 = setTimeout(() => setActivePhases((p) => ({ ...p, lines: true })), 500);
    const t3 = setTimeout(() => setActivePhases((p) => ({ ...p, icon: true })), 900);
    const t4 = setTimeout(() => setActivePhases((p) => ({ ...p, nodes: true })), 1100);
    const t5 = setTimeout(() => setActivePhases((p) => ({ ...p, bars: true })), 1600);
    const t6 = setTimeout(() => setActivePhases((p) => ({ ...p, text: true })), 2200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
  }, [animKey]); // Re-run when animKey changes (Replay)

  // --- 3D Interactive Mouse Move ---
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      setTilt({ rotX: -y, rotY: x });
    };

    const handleMouseLeave = () => {
      setTilt({ rotX: 0, rotY: 0 });
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // --- Handlers ---
  const handleReplay = () => {
    setAnimKey((prev) => prev + 1);
    setIsReplaying(true);
    setTimeout(() => setIsReplaying(false), 200);
  };

  // --- CSS Styles Embedded (Migrated from original HTML) ---
  const styles = `
    .cls-0 { fill: #E6DFD4; }
    .cls-1 { fill: url(#SVGID_1_); }
    .cls-2 { fill: #EAE6DD; stroke: #F4F2EC; stroke-width: 0.9; stroke-miterlimit: 10; }
    .cls-3 { fill: url(#SVGID_2_); stroke: #F9F8F6; stroke-width: 0.75; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; }
    .cls-4 { fill: none; stroke: #F4EFEB; stroke-width: 0.2612; stroke-linecap: square; stroke-miterlimit: 10; }
    .cls-5 { fill: none; stroke: #FFFFFF; stroke-width: 0.2612; stroke-linecap: square; stroke-miterlimit: 10; }
    .cls-6 { fill: none; stroke: #302B2A; stroke-width: 0.7212; stroke-linecap: round; stroke-linejoin: round; stroke-miterlimit: 10; }
    .cls-7 { fill: #E6955C; }
    .cls-8 { fill: url(#SVGID_3_); }
    .cls-9 { fill: #2B2B2B; }
    .cls-10 { fill: url(#SVGID_4_); }
    .cls-11 { fill: url(#SVGID_5_); }

    .svg-container {
      filter: drop-shadow(0 25px 40px rgba(0, 0, 0, 0.08));
      transition: transform 0.3s ease;
    }

    /* 1. Base Cards */
    .cls-1, .cls-2, .cls-3 {
      opacity: 0;
      transform: translateY(40px) scale(0.95);
      transform-origin: center;
      transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
    }

    /* 2. Grid Lines */
    .cls-4, .cls-5 {
      opacity: 0;
      stroke-dasharray: 300;
      stroke-dashoffset: 300;
      transition: stroke-dashoffset 1.5s ease-out, opacity 1s ease-out;
    }

    /* 3. Graph Nodes */
    circle.cls-6, ellipse.cls-6 {
      opacity: 0;
      transform: scale(0);
      transform-box: fill-box;
      transform-origin: center;
      transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    path.cls-6 {
      opacity: 0;
      stroke-dasharray: 40;
      stroke-dashoffset: 40;
      transition: stroke-dashoffset 0.8s ease-in-out, opacity 0.8s;
    }

    /* 4. Top Left Icon */
    .cls-7 {
      opacity: 0;
      transform: scale(0) rotate(-15deg);
      transform-box: fill-box;
      transform-origin: center;
      transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    /* 5. Progress Bars */
    .cls-8, .cls-10, .cls-11 {
      clip-path: inset(0 100% 0 0);
      transition: clip-path 1.5s cubic-bezier(0.2, 0.9, 0.1, 1), transform 0.3s ease, filter 0.3s ease;
      cursor: pointer;
      transform-box: fill-box;
      transform-origin: left center;
    }

    /* Ported JS Hover logic to native CSS */
    .cls-8:hover, .cls-10:hover, .cls-11:hover {
      transform: scaleY(1.3) scaleX(1.02);
      filter: drop-shadow(0px 4px 6px rgba(241, 140, 53, 0.4));
    }

    /* 6. Percentage Texts */
    .cls-9 {
      opacity: 0;
      transform: translateX(-15px);
      transition: all 0.5s cubic-bezier(0.2, 0.9, 0.1, 1);
    }

    /* --- ACTIVE STATES (Toggled by React State) --- */
    .is-loaded .cls-1 { opacity: 1; transform: translateY(0) scale(1); transition-delay: 0.1s; }
    .is-loaded .cls-2 { opacity: 1; transform: translateY(0) scale(1); transition-delay: 0.2s; }
    .is-loaded .cls-3 { opacity: 1; transform: translateY(0) scale(1); transition-delay: 0.3s; }

    .line-animate { stroke-dashoffset: 0 !important; opacity: 1 !important; }
    .icon-animate { opacity: 1 !important; transform: scale(1) rotate(0) !important; }
    .node-animate { opacity: 1 !important; transform: scale(1) !important; }
    .path-animate { stroke-dashoffset: 0 !important; opacity: 1 !important; }
    .bar-animate { clip-path: inset(0 0 0 0) !important; }
    .text-animate { opacity: 1 !important; transform: translateX(0) !important; }
  `;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden bg-[linear-gradient(135deg,#fdfbfb_0%,#ebedee_100%)] font-[-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,Helvetica,Arial,sans-serif]">
      <style>{styles}</style>

      {/* Header / Controls */}
      <div className="mb-10 text-center z-10">
        <h1 className="text-3xl font-bold text-gray-800 tracking-tight mb-3">Dashboard Activity</h1>
        <p className="text-gray-500 mb-6 text-sm max-w-md mx-auto">
          SaaS micro-interactions fully refactored in strict React & TypeScript.
        </p>
        <button
          onClick={handleReplay}
          className={`text-white font-medium py-2 px-6 rounded-full shadow-lg shadow-orange-500/30 transition-all transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 ${
            isReplaying ? "bg-orange-600" : "bg-orange-500 hover:bg-orange-600"
          }`}
        >
          Replay Animation
        </button>
      </div>

      {/* SVG Container */}
      <div
        className={`svg-container w-full max-w-3xl relative z-10 bg-white rounded-3xl p-4 sm:p-10 border border-gray-100 shadow-2xl ${
          activePhases.base ? "is-loaded" : ""
        }`}
        style={{
          transform: `perspective(1000px) rotateY(${tilt.rotY}deg) rotateX(${tilt.rotX}deg)`,
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 285.7 209" className="w-full h-auto">
          {/* Gradients */}
          <linearGradient
            id="SVGID_1_"
            x1="144"
            x2="183.5"
            y1="159.8"
            y2="201.3"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#CAC2AF" offset=".002474" />
            <stop stopColor="#E6DFD4" stopOpacity="0" offset="1" />
          </linearGradient>
          <linearGradient
            id="SVGID_2_"
            x1="33.2"
            x2="243.8"
            y1="26.21"
            y2="172.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F4F1ED" offset=".008287" />
            <stop stopColor="#E6DED3" offset="1" />
          </linearGradient>
          <linearGradient
            id="SVGID_3_"
            x1="70.4"
            x2="210.6"
            y1="70.1"
            y2="70.1"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E1643A" offset=".004301" />
            <stop stopColor="#F18C35" offset="1" />
          </linearGradient>
          <linearGradient
            id="SVGID_4_"
            x1="70.4"
            x2="196.6"
            y1="102"
            y2="102"
            gradientTransform="translate(6e-4)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E1643A" offset=".004301" />
            <stop stopColor="#F18C35" offset="1" />
          </linearGradient>
          <linearGradient
            id="SVGID_5_"
            x1="70.36"
            x2="154.3"
            y1="133.3"
            y2="133.3"
            gradientTransform="translate(.002)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E1643A" offset=".004301" />
            <stop stopColor="#F18C35" offset="1" />
          </linearGradient>

          {/* Cards */}
          <path
            className="cls-1"
            d="m257 22c-3-2.8-7.5-6.5-15.2-6.5h-205.9c-11 0-20.8 9.1-20.9 21.1v125.4c-0.1 6.8 1.9 10.5 4.5 14l31.7 33h234.5l0.3-18v-141.6l-29-27.4z"
          />
          <path
            className="cls-2"
            d="m242 182.6h-206.3c-10.7 0-20.7-7.9-20.7-20.6v-125c0-10.8 9.2-21.7 20.7-21.7h206.5c11.9 0 20.8 8.9 20.8 20.4v126.1c0 12.2-8.8 20.8-21 20.8z"
          />
          <path
            className="cls-3"
            d="m235.9 174.6h-194.4c-8.5 0-16.8-6.7-16.8-17.1v-116.7c-0.1-7.4 6.4-16.8 17-16.8h194.2c9.5 0 17.3 6.7 17.3 16.2v117.3c0 9.4-7.2 17.1-17.3 17.1z"
          />

          {/* Grid Lines (Converted staggered animation delay to inline styles mapped to phase) */}
          <line
            className={`cls-4 ${activePhases.lines ? "line-animate" : ""}`}
            style={{ transitionDelay: "0s" }}
            x1="235.2"
            x2="70.5"
            y1="60.1"
            y2="60.1"
          />
          <line
            className={`cls-5 ${activePhases.lines ? "line-animate" : ""}`}
            style={{ transitionDelay: "0.03s" }}
            x1="235.3"
            x2="70.5"
            y1="76.9"
            y2="76.9"
          />
          <line
            className={`cls-5 ${activePhases.lines ? "line-animate" : ""}`}
            style={{ transitionDelay: "0.06s" }}
            x1="84.6"
            x2="84.6"
            y1="46.2"
            y2="153"
          />
          <line
            className={`cls-5 ${activePhases.lines ? "line-animate" : ""}`}
            style={{ transitionDelay: "0.09s" }}
            x1="100.5"
            x2="100.5"
            y1="46.2"
            y2="153.2"
          />
          <line
            className={`cls-5 ${activePhases.lines ? "line-animate" : ""}`}
            style={{ transitionDelay: "0.12s" }}
            x1="116"
            x2="116"
            y1="46.2"
            y2="153.2"
          />
          <line
            className={`cls-5 ${activePhases.lines ? "line-animate" : ""}`}
            style={{ transitionDelay: "0.15s" }}
            x1="131.1"
            x2="131.1"
            y1="46.2"
            y2="153.2"
          />
          <line
            className={`cls-5 ${activePhases.lines ? "line-animate" : ""}`}
            style={{ transitionDelay: "0.18s" }}
            x1="145.9"
            x2="145.9"
            y1="46.2"
            y2="153.2"
          />
          <line
            className={`cls-5 ${activePhases.lines ? "line-animate" : ""}`}
            style={{ transitionDelay: "0.21s" }}
            x1="161.1"
            x2="161.1"
            y1="46.5"
            y2="153.2"
          />
          <line
            className={`cls-5 ${activePhases.lines ? "line-animate" : ""}`}
            style={{ transitionDelay: "0.24s" }}
            x1="176.6"
            x2="176.6"
            y1="46.2"
            y2="153.2"
          />
          <line
            className={`cls-5 ${activePhases.lines ? "line-animate" : ""}`}
            style={{ transitionDelay: "0.27s" }}
            x1="192.1"
            x2="192.1"
            y1="46.2"
            y2="153.2"
          />
          <line
            className={`cls-5 ${activePhases.lines ? "line-animate" : ""}`}
            style={{ transitionDelay: "0.30s" }}
            x1="207.3"
            x2="207.3"
            y1="46.2"
            y2="153.2"
          />
          <line
            className={`cls-5 ${activePhases.lines ? "line-animate" : ""}`}
            style={{ transitionDelay: "0.33s" }}
            x1="235.2"
            x2="70.5"
            y1="92.4"
            y2="92.4"
          />
          <line
            className={`cls-5 ${activePhases.lines ? "line-animate" : ""}`}
            style={{ transitionDelay: "0.36s" }}
            x1="235.2"
            x2="70.5"
            y1="108"
            y2="108"
          />
          <line
            className={`cls-5 ${activePhases.lines ? "line-animate" : ""}`}
            style={{ transitionDelay: "0.39s" }}
            x1="235.2"
            x2="70.5"
            y1="123.7"
            y2="123.7"
          />
          <line
            className={`cls-5 ${activePhases.lines ? "line-animate" : ""}`}
            style={{ transitionDelay: "0.42s" }}
            x1="235.2"
            x2="70.5"
            y1="139"
            y2="139"
          />

          {/* Graph Nodes */}
          <circle
            className={`cls-6 ${activePhases.nodes ? "node-animate" : ""}`}
            style={{ transitionDelay: "0s" }}
            cx="50.8"
            cy="70.2"
            r="11.3"
          />
          <ellipse
            className={`cls-6 ${activePhases.nodes ? "node-animate" : ""}`}
            style={{ transitionDelay: "0.1s" }}
            cx="50.8"
            cy="66.7"
            rx="3.8"
            ry="3.7"
          />
          <path
            className={`cls-6 ${activePhases.nodes ? "path-animate" : ""}`}
            style={{ transitionDelay: "0.15s" }}
            d="m42.9 79c0.6-3.8 3.7-6.4 8-6.4s7.7 2.4 8.1 6.4"
          />

          <circle
            className={`cls-6 ${activePhases.nodes ? "node-animate" : ""}`}
            style={{ transitionDelay: "0.2s" }}
            cx="50.7"
            cy="102.2"
            r="11.4"
          />
          <ellipse
            className={`cls-6 ${activePhases.nodes ? "node-animate" : ""}`}
            style={{ transitionDelay: "0.3s" }}
            cx="50.8"
            cy="99"
            rx="3.8"
            ry="3.7"
          />
          <path
            className={`cls-6 ${activePhases.nodes ? "path-animate" : ""}`}
            style={{ transitionDelay: "0.25s" }}
            d="m43.1 110.5c0.7-3.9 3.8-6.1 7.9-6.1s7.6 2.3 8 5.8"
          />

          <circle
            className={`cls-6 ${activePhases.nodes ? "node-animate" : ""}`}
            style={{ transitionDelay: "0.4s" }}
            cx="50.8"
            cy="133.5"
            r="11.4"
          />
          <ellipse
            className={`cls-6 ${activePhases.nodes ? "node-animate" : ""}`}
            style={{ transitionDelay: "0.5s" }}
            cx="50.8"
            cy="130.4"
            rx="3.7"
            ry="3.6"
          />
          <path
            className={`cls-6 ${activePhases.nodes ? "path-animate" : ""}`}
            style={{ transitionDelay: "0.35s" }}
            d="m43.1 141.6c0.6-3.7 3.7-6 7.8-6s7.6 2 8 5.6"
          />

          {/* Top Left Icon */}
          <path
            className={`cls-7 ${activePhases.icon ? "icon-animate" : ""}`}
            d="m47.2 37.7v-2.7h0.6v2.7h-0.6z"
          />
          <path
            className={`cls-7 ${activePhases.icon ? "icon-animate" : ""}`}
            d="m45.8 38.2-1.5-1.4 0.4-0.4 1.5 1.4-0.4 0.4z"
          />
          <path
            className={`cls-7 ${activePhases.icon ? "icon-animate" : ""}`}
            d="m44.7 40.3h-2.4v-0.7h2.3v0.7h0.1z"
          />
          <path
            className={`cls-7 ${activePhases.icon ? "icon-animate" : ""}`}
            d="m43.7 43 1.8-1.7 0.5 0.4-1.8 1.8-0.5-0.5z"
          />
          <path
            className={`cls-7 ${activePhases.icon ? "icon-animate" : ""}`}
            d="m46.8 44.9 0.2-2.5h0.6v2.5h-0.8z"
          />
          <path
            className={`cls-7 ${activePhases.icon ? "icon-animate" : ""}`}
            d="m49.6 41.4 0.5-0.4 1 1.4v0.7l-1.5-1.7z"
          />
          <path
            className={`cls-7 ${activePhases.icon ? "icon-animate" : ""}`}
            d="m49.9 39.5h2.5v0.7h-2.6l0.1-0.7z"
          />
          <path
            className={`cls-7 ${activePhases.icon ? "icon-animate" : ""}`}
            d="m49.1 37.4 1.4-1.4 0.4 0.4-1.4 1.5-0.4-0.5z"
          />
          <ellipse
            className={`cls-7 ${activePhases.icon ? "icon-animate" : ""}`}
            cx="47.3"
            cy="40"
            rx="1.5"
            ry="1.5"
          />

          {/* Progress Bars */}
          <path
            className={`cls-8 ${activePhases.bars ? "bar-animate" : ""}`}
            style={{ transitionDelay: "0s" }}
            d="m204.9 76.2h-129.3c-2.8 0-5.2-2.4-5.2-5.9 0-2.8 2.7-6.1 5.7-6.1l128.9-0.1c2.9 0 5.6 2.5 5.6 5.4 0 3.8-2.4 6.7-5.7 6.7z"
          />
          <path
            className={`cls-10 ${activePhases.bars ? "bar-animate" : ""}`}
            style={{ transitionDelay: "0.25s" }}
            d="m191.1 107.4h-115.5c-2.8 0-5.2-2.4-5.2-5.9 0-2.8 3.1-5.4 5.1-5.4l115.8 0.1c2.8 0 5.3 2.3 5.3 5.3 0 3.5-2.3 5.9-5.5 5.9z"
          />
          <path
            className={`cls-11 ${activePhases.bars ? "bar-animate" : ""}`}
            style={{ transitionDelay: "0.5s" }}
            d="m148.8 138.6h-73.3c-2.8 0-5.2-2.7-5.2-5.6 0-2.6 2.7-5.4 5.3-5.4h73.5c2.8 0 5.2 2.5 5.2 5.5-0.1 2.8-2.3 5.5-5.5 5.5z"
          />

          {/* Percentage Texts */}
          <path
            className={`cls-9 ${activePhases.text ? "text-animate" : ""}`}
            style={{ transitionDelay: "0s" }}
            d="m216.9 72.3 0.8-0.3c0.3 0.7 0.8 1.3 1.6 1.3 1.2 0 1.8-1.1 1.8-2.6-0.4 0.4-0.9 0.9-1.8 0.9-1.5 0-2.4-0.9-2.4-2.6 0-1.3 0.9-2.4 2.4-2.4 1.8 0 2.6 1.6 2.6 3.6 0 2.1-0.7 3.8-2.5 3.8-1.3 0-2.1-0.8-2.5-1.7zm4.1-3.3c-0.1-1.1-0.6-1.7-1.7-1.7-0.9 0-1.5 0.6-1.5 1.6 0 0.9 0.5 1.8 1.5 1.8 0.9 0.1 1.6-0.7 1.7-1.7z"
          />
          <path
            className={`cls-9 ${activePhases.text ? "text-animate" : ""}`}
            style={{ transitionDelay: "0.015s" }}
            d="m222.6 73.5 2.6-2.6c0.5-0.6 1-1.2 1-1.9 0-0.9-0.5-1.5-1.3-1.5s-1.3 0.4-1.5 1.5l-0.8-0.1c0.1-1.2 0.9-2.2 2.3-2.2 1.3 0 2.2 0.8 2.2 2.2 0 1.1-0.6 1.8-1.4 2.6l-1.7 1.7h3.1v0.8h-4.5v-0.5z"
          />
          <path
            className={`cls-9 ${activePhases.text ? "text-animate" : ""}`}
            style={{ transitionDelay: "0.030s" }}
            d="m228.2 68c0-0.8 0.5-1.6 1.4-1.6s1.4 0.7 1.4 1.6c0 0.7-0.4 1.7-1.4 1.7-0.9-0.1-1.4-0.9-1.4-1.7zm5.2-1.5h0.8l-4.9 7.7h-0.8l4.9-7.7zm-3.1 1.5c0-0.5-0.2-1.1-0.8-1.1-0.5 0-0.7 0.6-0.7 1.1s0.2 1 0.8 1c0.5 0 0.7-0.5 0.7-1zm1.3 4.6c0-0.8 0.5-1.6 1.4-1.6s1.4 0.7 1.4 1.7c0 0.9-0.4 1.7-1.4 1.7-0.9-0.2-1.4-0.8-1.4-1.8zm2.1 0c0-0.4-0.1-1.1-0.7-1.1-0.5 0-0.8 0.6-0.8 1.1s0.1 1.1 0.7 1.1 0.8-0.5 0.8-1.1z"
          />
          <path
            className={`cls-9 ${activePhases.text ? "text-animate" : ""}`}
            style={{ transitionDelay: "0.045s" }}
            d="m220.5 99h-3.6v-0.8h4.8v0.6l-3.1 6.4h-1l2.9-6.2z"
          />
          <path
            className={`cls-9 ${activePhases.text ? "text-animate" : ""}`}
            style={{ transitionDelay: "0.060s" }}
            d="m222.2 101.9c0-1.9 0.8-3.8 2.6-3.9 1.1 0 1.9 0.6 2.2 1.8l-0.8 0.1c-0.2-0.6-0.5-1.1-1.4-1.1-1.2 0-1.7 1.2-1.7 2.6 0.4-0.5 1-1 1.8-1 1.5 0 2.2 1 2.2 2.5 0 1.4-0.9 2.5-2.4 2.5-1.7-0.1-2.5-1.4-2.5-3.5zm4 1c0-1-0.5-1.6-1.4-1.6-0.8 0-1.5 0.6-1.7 1.2 0.1 1.3 0.6 2 1.6 2 1 0.1 1.5-0.6 1.5-1.6z"
          />
          <path
            className={`cls-9 ${activePhases.text ? "text-animate" : ""}`}
            style={{ transitionDelay: "0.075s" }}
            d="m228.1 99.7c0-0.8 0.5-1.7 1.4-1.7s1.5 0.8 1.5 1.7c0 0.8-0.4 1.7-1.4 1.7s-1.5-0.8-1.5-1.7zm5.3-1.7h0.8l-4.9 7.4h-0.7l4.8-7.4zm-3.1 1.7c0-0.5-0.2-1.1-0.7-1.1s-0.8 0.6-0.8 1.1 0.2 1.1 0.7 1.1c0.6-0.1 0.8-0.6 0.8-1.1zm1.3 4.3c0-0.8 0.5-1.8 1.4-1.8s1.5 0.8 1.5 1.7-0.5 1.6-1.4 1.6-1.5-0.6-1.5-1.5zm2.2 0c0-0.5-0.1-1.1-0.7-1.1-0.5 0-0.7 0.6-0.7 1.1s0.2 1 0.7 1 0.7-0.5 0.7-1z"
          />
          <path
            className={`cls-9 ${activePhases.text ? "text-animate" : ""}`}
            style={{ transitionDelay: "0.090s" }}
            d="m165.5 135h-3.4v-0.6l3.2-4.7h0.9v4.6h0.9v0.7h-0.9v1.6h-0.8v-1.6h0.1zm0-0.7v-3.4l-2.3 3.4h2.3z"
          />
          <path
            className={`cls-9 ${activePhases.text ? "text-animate" : ""}`}
            style={{ transitionDelay: "0.105s" }}
            d="m168.2 134.6c0-1 0.6-1.5 1.4-1.7-0.6-0.3-1.1-0.7-1.1-1.5 0-1.1 1-1.8 2.2-1.8s2.2 0.6 2.2 1.7c0 0.8-0.5 1.4-1.1 1.6 0.8 0.3 1.4 0.8 1.4 1.7 0 1.3-1 2.1-2.5 2.1-1.4 0-2.5-0.8-2.5-2.1zm4 0c0-0.8-0.6-1.3-1.5-1.3s-1.6 0.5-1.6 1.3 0.7 1.3 1.6 1.3 1.5-0.4 1.5-1.3zm-0.3-3.1c0-0.7-0.5-1.2-1.3-1.2s-1.3 0.5-1.3 1.2 0.5 1.1 1.3 1.1 1.3-0.4 1.3-1.1z"
          />
          <path
            className={`cls-9 ${activePhases.text ? "text-animate" : ""}`}
            style={{ transitionDelay: "0.120s" }}
            d="m174.4 131.2c0-0.8 0.5-1.7 1.2-1.7 0.8 0 1.3 0.7 1.3 1.7 0 0.8-0.5 1.7-1.3 1.7-0.7 0-1.2-0.8-1.2-1.7zm4.7-1.6h0.7l-4.3 7h-0.8l4.4-7zm-2.8 1.6c0-0.5-0.1-1-0.6-1s-0.6 0.5-0.6 1c0 0.6 0.1 1.1 0.6 1.1s0.6-0.7 0.6-1.1zm1.3 3.9c0-0.8 0.5-1.6 1.3-1.6s1.4 0.8 1.4 1.7c0 0.8-0.5 1.6-1.4 1.6-0.7-0.1-1.3-0.7-1.3-1.7zm2.1 0c0-0.5-0.1-1-0.7-1-0.7 0-0.8 0.5-0.8 1.1 0 0.5 0.1 1 0.7 1s0.8-0.5 0.8-1.1z"
          />
        </svg>
      </div>

      {/* Decorative Glow Elements */}
      <div className="fixed top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-orange-400 opacity-[0.03] blur-3xl -z-10 pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-orange-600 opacity-[0.02] blur-3xl -z-10 pointer-events-none"></div>
    </div>
  );
}
