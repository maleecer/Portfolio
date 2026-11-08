import React, { useEffect, useRef } from 'react';

/**
 * Soft Cursor-Follow Ambient Spotlight + Precision Engineered Ring & Dot Cursor.
 * Automatically disabled on touch devices or when prefers-reduced-motion is active.
 */
export default function CustomCursor() {
  const spotlightRef = useRef(null);
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;

    if (prefersReducedMotion || !isFinePointer) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let hasMoved = false;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!hasMoved) {
        hasMoved = true;
        ringX = mouseX;
        ringY = mouseY;
        if (spotlightRef.current) spotlightRef.current.style.opacity = '1';
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX - 3}px, ${mouseY - 3}px, 0)`;
      }
      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${mouseX - 280}px, ${mouseY - 280}px, 0)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let frameId;
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current && hasMoved) {
        ringRef.current.style.transform = `translate3d(${ringX - 15}px, ${ringY - 15}px, 0)`;
      }
      frameId = requestAnimationFrame(animateRing);
    };
    frameId = requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      {/* Ambient cursor-follow radial highlight */}
      <div
        ref={spotlightRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 w-[560px] h-[560px] rounded-full opacity-0 transition-opacity duration-500 -z-10 hidden md:block"
        style={{
          background:
            'radial-gradient(circle, rgba(198, 255, 61, 0.055) 0%, rgba(198, 255, 61, 0.015) 38%, transparent 70%)',
        }}
      />
      {/* Precision cursor dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-lime-dark dark:bg-lime z-[9998] hidden md:block -translate-x-24 -translate-y-24"
      />
      {/* Precision cursor ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 w-[30px] h-[30px] rounded-full border border-lime-dark/40 dark:border-lime/40 z-[9997] hidden md:block -translate-x-24 -translate-y-24"
      />
    </>
  );
}

