import React, { useState, useEffect, useCallback } from "react";

// --- TypeScript Interfaces ---
interface TiltState {
  rotX: number;
  rotY: number;
}

interface AnimationPhases {
  base: boolean;
  header: boolean;
  search: boolean;
  items: boolean[];
}

export default function App() {
  // --- State Hooks ---
  const [animKey, setAnimKey] = useState<number>(0);
  const [isReplaying, setIsReplaying] = useState<boolean>(false);
  const [tilt, setTilt] = useState<TiltState>({ rotX: 0, rotY: 0 });
  const [activePhases, setActivePhases] = useState<AnimationPhases>({
    base: false,
    header: false,
    search: false,
    items: Array(9).fill(false),
  });

  // --- Replay Handler ---
  const handleReplay = useCallback(() => {
    // Briefly remove the base to simulate a closing animation
    setActivePhases((prev) => ({ ...prev, base: false }));
    setIsReplaying(true);

    setTimeout(() => {
      setAnimKey((prev) => prev + 1);
      setIsReplaying(false);
    }, 300);
  }, []);

  // --- Keyboard Shortcut (Cmd/Ctrl + K) ---
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        handleReplay();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleReplay]);

  // --- Animation Sequencer ---
  useEffect(() => {
    // Reset all phases before starting
    setActivePhases({
      base: false,
      header: false,
      search: false,
      items: Array(9).fill(false),
    });

    const timers: NodeJS.Timeout[] = [];

    // 1. Pop in the main window
    timers.push(setTimeout(() => setActivePhases((p) => ({ ...p, base: true })), 100));

    // 2. Drop down the header
    timers.push(setTimeout(() => setActivePhases((p) => ({ ...p, header: true })), 200));

    // 3. Drop down the search bar
    timers.push(setTimeout(() => setActivePhases((p) => ({ ...p, search: true })), 300));

    // 4. Stagger the list items sliding in from the left (60ms stagger per item starting at 400ms)
    for (let i = 0; i < 9; i++) {
      timers.push(
        setTimeout(
          () => {
            setActivePhases((prev) => {
              const newItems = [...prev.items];
              newItems[i] = true;
              return { ...prev, items: newItems };
            });
          },
          400 + i * 60,
        ),
      );
    }

    return () => timers.forEach(clearTimeout);
  }, [animKey]);

  // --- 3D Interactive Mouse Move ---
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth > 768) {
        const x = (e.clientX / window.innerWidth - 0.5) * 6; // max 3 deg rotation
        const y = (e.clientY / window.innerHeight - 0.5) * 6;
        setTilt({ rotX: -y, rotY: x });
      }
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

  // --- CSS Styles Embedded ---
  const styles = `
    .cls-0 {fill:#FFB970;}
    .cls-1 {fill:#FCCFA6;}
    .cls-2 {fill:#FFE4C8;}
    .cls-3 {fill:#FFF1E2;}
    .cls-4 {fill:#F7A446;}
    .cls-5 {fill:none;stroke:#EA9D43;stroke-width:0.4462;stroke-linecap:round;stroke-miterlimit:10;}
    .cls-6 {fill:none;stroke:#FFFFFF;stroke-width:0.4462;stroke-linecap:round;stroke-miterlimit:10;}
    .cls-7 {fill:#2AAD65;}
    .cls-8 {fill:#FFFFFF;}
    .cls-9 {fill:#12090B;}
    .cls-10 {fill:none;stroke:#F7A446;stroke-width:0.5506;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
    .cls-11 {fill:none;stroke:#FEFCFC;stroke-width:0.8041;stroke-linecap:round;stroke-miterlimit:10;}
    .cls-12 {fill-rule:evenodd;clip-rule:evenodd;fill:#FFFFFF;}

    .palette-container {
      filter: drop-shadow(0 30px 60px rgba(0,0,0,0.4)) drop-shadow(0 4px 15px rgba(0,0,0,0.2));
      transition: transform 0.2s ease-out;
    }

    /* Initial Hidden States */
    #command-palette {
      opacity: 0;
      transform: scale(0.92) translateY(30px);
      transform-origin: center top;
      transition: opacity 0.6s ease, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .header-element, .search-bar-element {
      opacity: 0;
      transform: translateY(-10px);
      transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .menu-item {
      opacity: 0;
      transform: translateX(-15px);
      transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1); /* Spring effect */
      cursor: pointer;
    }

    /* SVG internal transitions for hover effects */
    .menu-item text {
      transition: transform 0.3s ease, fill 0.3s ease;
    }
    
    .menu-item .icon-wrapper {
      transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
      transform-origin: center;
      transform-box: fill-box;
    }

    .menu-item .hover-bg {
      opacity: 0;
      transition: opacity 0.2s ease;
    }

    .blinking-cursor {
      opacity: 0;
      animation: blink 1s step-end infinite;
    }

    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }

    /* --- ACTIVE STATES --- */
    #command-palette.is-visible {
      opacity: 1;
      transform: scale(1) translateY(0);
    }

    .header-element.is-visible, 
    .search-bar-element.is-visible {
      opacity: 1;
      transform: translateY(0);
    }

    .menu-item.is-visible {
      opacity: 1;
      transform: translateX(0);
    }

    /* Hover interaction applied directly via CSS for performance */
    .menu-item:hover text {
      transform: translateX(2px);
      fill: #EA9D43; /* Matches the orange theme */
    }
    
    .menu-item:hover .icon-wrapper {
      transform: scale(1.2);
    }

    .menu-item:hover .hover-bg {
      opacity: 0.05;
    }

    /* Special hover for the active green item */
    .menu-item.active-item:hover text {
      fill: #ffffff;
      transform: translateX(2px);
    }
  `;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden bg-[linear-gradient(135deg,#1e1e24_0%,#2b2b36_100%)] text-white font-[-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,Helvetica,Arial,sans-serif]">
      <style>{styles}</style>

      {/* UI Controls */}
      <div className="mb-8 text-center z-10">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Command Palette</h1>
        <p className="text-gray-400 mb-6 text-sm">
          Interactive SaaS micro-animations fully typed in React.
        </p>
        <button
          onClick={handleReplay}
          className={`border text-sm font-medium py-2 px-6 rounded-full backdrop-blur-sm transition-all active:scale-95 ${
            isReplaying
              ? "bg-white/20 border-white/40 text-white"
              : "bg-white/10 hover:bg-white/20 border-white/20 text-white"
          }`}
        >
          Press ⌘K (or Click) to Re-open
        </button>
      </div>

      {/* SVG Container */}
      <div
        className="palette-container w-full max-w-md relative z-10"
        style={{
          transform: `perspective(1000px) rotateY(${tilt.rotY}deg) rotateX(${tilt.rotX}deg)`,
        }}
      >
        <svg
          id="command-palette"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 144.5 151"
          className={`w-full h-auto ${activePhases.base ? "is-visible" : ""}`}
        >
          {/* 1. Window Base & Shadows */}
          <g id="window-base">
            <path
              className="cls-1"
              d="m116 127.5h-84.6c-2.2 0-4-1.8-4-4v-92.6c0-2.2 1.8-4 4-4h84.5c2.3 0 4.4 1.8 4.4 4l0.1 92.6c0 2.2-1.8 4-4.4 4z"
            />
            <path
              className="cls-2"
              d="m113.3 124.1h-85.1v-100.3h85c2.2 0 4 1.8 4 4v92.4c-0.2 2.2-1.9 3.9-3.9 3.9z"
            />
          </g>

          {/* 2. Header Top Bar */}
          <g className={`header-element ${activePhases.header ? "is-visible" : ""}`}>
            <path
              className="cls-3"
              d="m111.8 36.2h-82.5c-1 0-1.9-0.8-1.9-1.9v-5.7c0-1.1 0.9-2.1 2-2.1h81.8c1.6 0 2.6 1 2.6 2.1v5.7c0 1.1-0.9 1.9-2 1.9z"
            />

            {/* Command icons top left */}
            <path
              className="cls-4"
              d="m24.5 18.6h-7.5c-2.7 0-5.3-2.1-5.3-5.2s2.6-5.2 5.1-5.2h7.6c2.6 0 5.5 2.1 5.5 5.2s-2.4 5.2-5.4 5.2z"
            />
            <path
              className="cls-8"
              d="m22.1 11-0.1 4.8h0.8v-1.4l0.6-0.6 1.3 2h1.1l-1.9-2.6 1.8-2.2h-1l-1.8 2.3v-2.3h-0.8zm-2.4 2c0-1.1 0.3-1.4 0.8-1.4 0.2 0 0.3 0.1 0.3 0.5 0 0.5-0.5 0.9-1.1 0.9zm-1.7 0c-0.7 0-1.2-0.4-1.1-0.9 0-0.4 0.2-0.5 0.3-0.5 0.5 0 0.8 0.4 0.8 1.4zm0.8-1.1c-0.2-0.6-0.6-1-1.3-1s-1.3 0.3-1.1 1.3c0.1 0.7 0.6 1.2 1.5 1.2v0.5c-0.9 0-1.6 0.6-1.6 1.2-0.1 0.5 0.4 0.9 0.9 0.9 0.7 0 1.1-0.4 1.3-1.1l0.1-0.5h0.6l0.2 0.5c0.1 0.7 0.5 1.1 1.2 1.1s0.8-0.4 0.8-0.6c0.1-0.9-0.8-1.5-1.6-1.5l-0.1-0.5c0.8 0 1.4-0.5 1.5-1.2 0.3-0.7-0.2-1.3-0.9-1.3s-1.3 0.4-1.3 1l-0.2 0.9h-0.4l0.4-0.9zm-0.8 2.5c-0.1 0.5-0.4 0.9-0.7 0.9-0.2 0-0.4-0.1-0.3-0.4 0-0.3 0.4-0.5 0.9-0.5h0.1zm1.7 0c0.6 0 0.9 0.2 0.9 0.5 0.1 0.3 0 0.4-0.2 0.4-0.4 0-0.7-0.4-0.8-0.9h0.1zm-1.2-0.5v-0.6h0.6v0.6h-0.6z"
            />
            <path
              className="cls-4"
              d="m12.4 26.4c2.8-0.3 5.3 1.8 5.4 4.6 0.2 2.7-1.9 5.3-4.8 5.4-2.8 0.2-5.3-1.8-5.5-4.6-0.1-2.7 1.9-5.2 4.9-5.4z"
            />
            <polyline className="cls-11" points="10.6 31.7 11.9 33 14.6 30.2" />
            <path
              fill="#FFF"
              d="m20.5 11.2c0.5 0 0.3 1.3-0.5 1.2 0-0.6 0.1-1.2 0.5-1.2zm-3.1 4c-0.5 0-0.2-1.3 0.6-1.3 0 0.8-0.2 1.3-0.6 1.3zm0-4c0.4 0 0.6 0.4 0.6 1.2-0.9 0.1-1.1-1.2-0.6-1.2zm3.1 4c-0.4 0-0.6-0.4-0.5-1.2 0.7 0 1 1.2 0.5 1.2zm-1-0.5c0.1 0.6 0.5 1 1.2 1s0.7-0.1 0.7-0.6-0.4-1.4-1.7-1.5v-0.5c1.3 0.1 1.5-0.5 1.6-1.3 0.1-0.6-0.2-0.9-0.8-0.9-1 0-1.3 0.8-1.3 1.8h-0.5c0.1-1.1-0.2-1.8-1.1-1.8-0.6 0-1.3 0.2-1.2 1.2 0.2 1.2 1.6 1 1.6 1v0.5c-1.2 0-1.9 0.6-1.9 1.4 0 0.4 0.4 0.8 0.9 0.8 0.8 0 1.2-0.4 1.3-1.1l0.2-0.5h0.6l0.4 0.5zm-0.9-1.1v-0.6h0.5v0.6h-0.5z"
            />
            <path
              className="cls-12"
              d="m22 15.8h0.8v-1.4l0.5-0.6 1.4 2h1l-1.8-2.5 1.8-2.3h-1l-2 2.3v-2.3h-0.7v4.8z"
            />

            {/* Header corner controls */}
            <path className="cls-4" d="m106.9 29.7" />
            <path className="cls-4" d="m109.5 29.7h-2.1l-0.5 1v2.3l2.3 0.2 1.1-0.9v-2.2z" />
            <path
              fill="#fff"
              d="m108.4 30.2h-0.1c-0.3 0-0.6 0.3-0.5 0.4v0.3c0 0.2 0.1 0.4 0.4 0.4h0.2c0.2 0 0.4-0.1 0.4-0.4v-0.3c0-0.2-0.2-0.5-0.4-0.4zm0 1.4h-0.8v1.1h0.8c0.2 0 0.3-0.1 0.3-0.3v-0.6c0.1-0.1-0.1-0.2-0.3-0.2zm1.2-0.4c-0.3 0-0.7 0.1-0.8 0.2l0.1 0.6c0 0.1 0.1 0.2 0.3 0.2h0.4c0-0.2 0.4-0.3 0.4-0.6 0.1-0.3-0.2-0.4-0.4-0.4z"
            />
            <path className="cls-3" d="m109.5 29.7" />
          </g>

          {/* 3. Search Bar Area */}
          <g className={`search-bar-element ${activePhases.search ? "is-visible" : ""}`}>
            <path className="cls-5" d="m34.9 31.9 0.7 0.7v0.1 0.3l-1-1" />
            <circle className="cls-5" cx="33.6" cy="31" r="1.3" />
            <text
              x="38"
              y="32.8"
              fill="#1a171b"
              fontFamily="'AcuminPro', sans-serif"
              fontSize="3.8px"
            >
              Search commands or files...
            </text>
            <rect
              className="blinking-cursor"
              x="88.5"
              y="29.5"
              width="0.4"
              height="4"
              fill="#F7A446"
            />
          </g>

          {/* 4. Menu Items */}
          {/* Item 1 */}
          <g className={`menu-item active-item ${activePhases.items[0] ? "is-visible" : ""}`}>
            <rect className="hover-bg" x="28" y="41" width="85" height="6.5" fill="#111" />
            <path
              className="cls-7"
              d="m113.8 47.3h-86.4v-6.4c0-1.1 0.9-1.9 1.9-1.9h82.5c1.1 0 2 0.8 2 1.9v6.4z"
            />
            <g className="icon-wrapper">
              <circle className="cls-1" cx="33.9" cy="43.3" r="1.8" />
              <polyline className="cls-6" points="33 43.3 33.5 43.8 34.6 42.8" />
            </g>
            <text
              x="38"
              y="44.5"
              fill="#f0f0f0"
              fontFamily="'AcuminPro-BoldItalic', sans-serif"
              fontWeight="bold"
              fontSize="3.7px"
            >
              Open Recent Project
            </text>
          </g>

          {/* Item 2 */}
          <g className={`menu-item ${activePhases.items[1] ? "is-visible" : ""}`}>
            <rect className="hover-bg" x="28" y="50" width="85" height="6" fill="#111" />
            <g className="icon-wrapper">
              <circle className="cls-4" cx="33.9" cy="52.5" r="1.8" />
              <polyline className="cls-6" points="32.9 52.6 33.5 53.2 34.7 51.9" />
            </g>
            <text
              x="38"
              y="54"
              fill="#12090B"
              fontFamily="'AcuminPro', sans-serif"
              fontSize="3.8px"
            >
              New Document
            </text>
          </g>

          {/* Item 3 */}
          <g className={`menu-item ${activePhases.items[2] ? "is-visible" : ""}`}>
            <rect className="hover-bg" x="28" y="60" width="85" height="6" fill="#111" />
            <g className="icon-wrapper">
              <circle className="cls-4" cx="33.9" cy="62.2" r="1.8" />
              <polyline className="cls-6" points="33.1 62.3 33.6 62.8 34.8 61.6" />
            </g>
            <text
              x="38"
              y="63.6"
              fill="#12090B"
              fontFamily="'AcuminPro', sans-serif"
              fontSize="3.8px"
            >
              New Document
            </text>
          </g>

          {/* Item 4 */}
          <g className={`menu-item ${activePhases.items[3] ? "is-visible" : ""}`}>
            <rect className="hover-bg" x="28" y="69" width="85" height="6" fill="#111" />
            <g className="icon-wrapper">
              <circle className="cls-4" cx="33.9" cy="71.3" r="1.8" />
              <polyline className="cls-6" points="33 71.3 33.5 71.8 34.7 70.6" />
            </g>
            <text
              x="38.1"
              y="72.7"
              fill="#12090B"
              fontFamily="'AcuminPro', sans-serif"
              fontSize="3.8px"
            >
              Open Recent Project
            </text>
          </g>

          {/* Item 5 */}
          <g className={`menu-item ${activePhases.items[4] ? "is-visible" : ""}`}>
            <rect className="hover-bg" x="28" y="78" width="85" height="6" fill="#111" />
            <g className="icon-wrapper">
              <path className="cls-10" d="m32.4 81.7c0.1-1.1 0-1.4 2.4-1.4" />
              <polygon className="cls-4" points="34.3 78.7 35.8 80.2 34.3 81.6" />
            </g>
            <text
              x="38"
              y="81.7"
              fill="#12090B"
              fontFamily="'AcuminPro', sans-serif"
              fontSize="3.8px"
            >
              New Document
            </text>
          </g>

          {/* Item 6 */}
          <g className={`menu-item ${activePhases.items[5] ? "is-visible" : ""}`}>
            <rect className="hover-bg" x="28" y="87" width="85" height="6" fill="#111" />
            <g className="icon-wrapper">
              <path className="cls-10" d="m32.4 90.7c0.1-1.2 0-1.6 2.4-1.5" />
              <polygon className="cls-4" points="34.1 87.8 35.7 89.3 34.2 90.6" />
            </g>
            <text
              x="38"
              y="90.7"
              fill="#12090B"
              fontFamily="'AcuminPro', sans-serif"
              fontSize="3.8px"
            >
              New Document
            </text>
          </g>

          {/* Item 7 */}
          <g className={`menu-item ${activePhases.items[6] ? "is-visible" : ""}`}>
            <rect className="hover-bg" x="28" y="96" width="85" height="6" fill="#111" />
            <g className="icon-wrapper">
              <path className="cls-10" d="m32.4 99.7c0.1-1.1-0.1-1.6 2.4-1.4" />
              <polygon className="cls-4" points="34.1 96.7 35.7 98.2 34.1 99.6" />
            </g>
            <text
              x="38"
              y="99.7"
              fill="#12090B"
              fontFamily="'AcuminPro', sans-serif"
              fontSize="3.8px"
            >
              Open Recement
            </text>
          </g>

          {/* Item 8 */}
          <g className={`menu-item ${activePhases.items[7] ? "is-visible" : ""}`}>
            <rect className="hover-bg" x="28" y="106" width="85" height="6" fill="#111" />
            <g className="icon-wrapper">
              <path className="cls-10" d="m32.4 109.5c0-1.3-0.1-1.7 2.3-1.6" />
              <polygon className="cls-4" points="34.2 106.3 35.7 107.7 34.2 109.1" />
            </g>
            <text
              x="38"
              y="109.4"
              fill="#12090B"
              fontFamily="'AcuminPro', sans-serif"
              fontSize="3.8px"
            >
              New Document
            </text>
          </g>

          {/* Item 9 */}
          <g className={`menu-item ${activePhases.items[8] ? "is-visible" : ""}`}>
            <rect className="hover-bg" x="28" y="115" width="85" height="6" fill="#111" />
            <g className="icon-wrapper">
              <path className="cls-10" d="m32.4 118.6c0-1.3-0.1-1.7 2.3-1.5" />
              <polygon className="cls-4" points="34.1 115.8 35.7 117.2 34.1 118.5" />
            </g>
            <text
              x="38"
              y="118.5"
              fill="#12090B"
              fontFamily="'AcuminPro', sans-serif"
              fontSize="3.8px"
            >
              New Document
            </text>
          </g>

          {/* Footer Icons */}
          <g className="footer-elements opacity-50">
            <path
              className="cls-4"
              d="m131 114.3c2.7-0.1 5.7 1.8 6 4.7 0.2 2.9-2 4.9-4.4 5.1-2.6 0.3-5.4-1.3-5.9-4.2-0.3-2.7 1.7-5.4 4.3-5.6z"
            />
            <path
              className="cls-8"
              d="m130.6 117.4c-0.3 0-0.8-0.2-0.2 0.2l1.8 0.6-2.4 2.4c-0.2 0.2 0.4 0.6 0.5 0.4l2.9-2.5v1.7l0.3 0.2 0.4-0.2 0.1-2.2v-0.5l-0.2-0.1h-3.2z"
            />
            <path
              className="cls-4"
              d="m130.9 142.6h-19.1c-2.2-0.3-4.7-2-4.8-4.9s2.1-5.3 5.2-5.4h18.7c3.1 0.1 5.2 2.3 5.3 5.3-0.1 2.7-2 4.6-5.3 5z"
            />
            <path
              className="cls-8"
              d="m114.7 136.4c-0.1-0.5-0.5-0.6-1-0.6-0.8 0-1.3 0.6-1.3 1.8s0.5 1.5 1.3 1.5c0.6 0 0.9-0.3 1.1-0.7h0.9c-0.2 0.8-0.9 1.4-2 1.4-1.2 0-2.2-0.8-2.2-2.4 0-1.5 0.9-2.3 2.1-2.3 0.9 0 1.8 0.5 2 1.5h-0.9v-0.2z"
            />
            <path
              className="cls-8"
              d="m118.1 136.9h-0.7v1.8c0 0.4 0.2 0.5 0.4 0.5h0.3v0.6c-0.1 0-0.3 0.2-0.5 0-0.5 0-1.1-0.2-1.1-0.8v-2.1h-0.4v-0.6h0.5v-0.8h0.8v0.8h0.8l-0.1 0.6z"
            />
            <path
              className="cls-8"
              d="m118.8 136.3h0.7v0.5c0.1-0.4 0.5-0.6 0.9-0.6h0.6l-0.1 0.7c-0.2 0-0.3-0.1-0.5 0-0.4 0-0.8 0.5-0.8 0.7v2.2h-0.8v-3.5z"
            />
            <path className="cls-8" d="m122.5 139.7h-0.8v-4.6h0.8v4.6z" />
            <path
              className="cls-8"
              d="m124.8 135.9h0.7l0.1 1.3h1.3v0.6h-1.3v1.3h-0.7v-1.3h-1.3v-0.6h1.3v-1.3h-0.1z"
            />
            <path
              className="cls-8"
              d="m127.8 135.2h0.9l0.1 2.2 1.9-2.2h1.1l-1.7 2.1 1.8 2.4h-0.9l-1.4-1.8-0.7 0.6v1.2h-0.9l-0.1-4.5h-0.1z"
            />
            <path className="cls-6" d="m106.9 43.4 1 0.7 1.8-1.8" />
          </g>
        </svg>
      </div>
    </div>
  );
}
