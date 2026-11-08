import React, { useRef, useState } from 'react';

/**
 * Reusable 3D Perspective Tilt Card with radial cursor spotlight glare.
 * Automatically disables tilt when prefers-reduced-motion is active.
 */
export default function TiltCard3D({
  children,
  className = '',
  intensity = 7,
  as: Component = 'div',
}) {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('');
  const [glowPos, setGlowPos] = useState({ x: '50%', y: '0%', opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (((y - centerY) / centerY) * -intensity).toFixed(2);
    const rotateY = (((x - centerX) / centerX) * intensity).toFixed(2);

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`
    );
    setGlowPos({ x: `${x}px`, y: `${y}px`, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlowPos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <Component
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transformStyle: 'preserve-3d',
        transition: 'transform 260ms cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Dynamic cursor-tracked specular 3D spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-0"
        style={{
          opacity: glowPos.opacity,
          background: `radial-gradient(380px circle at ${glowPos.x} ${glowPos.y}, rgba(198, 255, 61, 0.11), transparent 65%)`,
        }}
      />
      <div className="relative z-10 h-full flex flex-col justify-between" style={{ transform: 'translateZ(16px)' }}>
        {children}
      </div>
    </Component>
  );
}

