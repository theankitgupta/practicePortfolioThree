import React, { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null); // The outer glow (Nebula)
  const dotRef = useRef(null); // The inner dot (Star core)

  const mouse = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });

  // State to track interactions without triggering re-renders for coordinates
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Detect hovering over interactive elements
    const handleMouseOver = (e) => {
      // Check if the target is interactive (link, button, or input)
      if (
        e.target.tagName === "A" ||
        e.target.tagName === "BUTTON" ||
        e.target.closest("a") ||
        e.target.closest("button") ||
        e.target.classList.contains("interactive") // Custom class for other elements
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    // Use capture phase to catch events deep in the DOM tree
    window.addEventListener("mouseover", handleMouseOver, true);

    // --- ANIMATION LOOP ---
    let rafId;
    const animate = () => {
      // 1. The Dot (Core) follows mouse quickly (almost instant)
      // Lerp factor 0.5 = fast catch up
      dotPos.current.x += (mouse.current.x - dotPos.current.x) * 0.5;
      dotPos.current.y += (mouse.current.y - dotPos.current.y) * 0.5;

      // 2. The Cursor (Glow) follows slowly (floaty feel)
      // Lerp factor 0.15 = smooth lag matching the particles' drift
      cursorPos.current.x += (mouse.current.x - cursorPos.current.x) * 0.15;
      cursorPos.current.y += (mouse.current.y - cursorPos.current.y) * 0.15;

      // 3. Apply Transformations
      if (dotRef.current && cursorRef.current) {
        // Move Dot
        dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0)`;

        // Move Glow
        cursorRef.current.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver, true);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // --- STYLES ---
  // Dynamic classes based on state
  const glowSize = isHovering
    ? "w-24 h-24"
    : isClicking
    ? "w-12 h-12"
    : "w-16 h-16";
  const glowOpacity = isHovering ? "opacity-50" : "opacity-30";
  const glowColor = isClicking ? "bg-violet-500" : "bg-sky-400";

  // The core dot disappears when hovering to let the glow act as a spotlight
  const dotSize = isHovering ? "w-0 h-0 opacity-0" : "w-2 h-2 opacity-100";

  return (
    <div className="fixed inset-0 pointer-events-none z-9999 overflow-hidden">
      {/* 1. The Nebula Glow (Outer) */}
      <div
        ref={cursorRef}
        className={`absolute rounded-full blur-2xl transition-all duration-300 ease-out mix-blend-screen 
          -translate-x-1/2 -translate-y-1/2
          ${glowSize} ${glowOpacity} ${glowColor}
        `}
      />

      {/* 2. The Star Core (Inner) */}
      <div
        ref={dotRef}
        className={`absolute bg-white rounded-full shadow-[0_0_10px_2px_rgba(255,255,255,0.8)] 
          transition-all duration-200 ease-out 
          -translate-x-1/2 -translate-y-1/2
          ${dotSize}
        `}
      />
    </div>
  );
};

export default CustomCursor;
