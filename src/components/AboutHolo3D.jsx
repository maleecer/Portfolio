import React, { useState } from 'react';
import TiltCard3D from './TiltCard3D';

/**
 * 3D Interactive Portrait & Stack Hologram Placeholder for the About section.
 * To use a real photo, set `about.photoUrl` in `src/data/portfolioData.js`.
 */
export default function AboutHolo3D({ name, photoUrl }) {
  const [viewMode, setViewMode] = useState('portrait'); // 'portrait' | 'layers'

  return (
    <TiltCard3D
      intensity={9}
      as="figure"
      className="p-3.5 rounded-lg border border-[#DCDCD4] dark:border-line bg-white/75 dark:bg-surface/80"
    >
      {/* Corner Engineered Brackets */}
      <span className="pointer-events-none absolute top-0 left-0 w-2.5 h-2.5 border-t-2 border-l-2 border-lime-dark dark:border-lime" />
      <span className="pointer-events-none absolute top-0 right-0 w-2.5 h-2.5 border-t-2 border-r-2 border-lime-dark dark:border-lime" />
      <span className="pointer-events-none absolute bottom-0 left-0 w-2.5 h-2.5 border-b-2 border-l-2 border-lime-dark dark:border-lime" />
      <span className="pointer-events-none absolute bottom-0 right-0 w-2.5 h-2.5 border-b-2 border-r-2 border-lime-dark dark:border-lime" />

      {/* Top Frame Header */}
      <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#DCDCD4] dark:border-line font-mono text-[11px] text-[#767685] dark:text-subtle">
        <span>ID // FS-ARCHITECT</span>
        {!photoUrl && (
          <div className="flex gap-1">
            <button
              type="button"
              onClick={() => setViewMode('portrait')}
              className={`px-1.5 py-0.5 rounded text-[10px] transition-colors ${
                viewMode === 'portrait'
                  ? 'bg-lime text-obsidian font-semibold'
                  : 'hover:text-[#111116] dark:hover:text-offwhite'
              }`}
            >
              AVATAR
            </button>
            <button
              type="button"
              onClick={() => setViewMode('layers')}
              className={`px-1.5 py-0.5 rounded text-[10px] transition-colors ${
                viewMode === 'layers'
                  ? 'bg-lime text-obsidian font-semibold'
                  : 'hover:text-[#111116] dark:hover:text-offwhite'
              }`}
            >
              3D_STACK
            </button>
          </div>
        )}
      </div>

      {/* Main Frame Content */}
      {photoUrl ? (
        <img
          src={photoUrl}
          alt={`Portrait of ${name}`}
          className="w-full aspect-[4/4.3] object-cover rounded border border-[#DCDCD4] dark:border-line grayscale-[15%] contrast-105"
          loading="lazy"
        />
      ) : viewMode === 'portrait' ? (
        <div
          role="img"
          aria-label={`Portrait placeholder for ${name}`}
          className="relative w-full aspect-[4/4.2] rounded border border-dashed border-[#C2C2B8] dark:border-line-strong bg-[#ECECE6]/70 dark:bg-obsidian/80 flex flex-col items-center justify-center overflow-hidden"
        >
          {/* 3D Isometric Grid & Wireframe Silhouette SVG */}
          <svg
            viewBox="0 0 240 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4/5 h-auto text-[#111116] dark:text-offwhite"
            aria-hidden="true"
          >
            <line
              x1="0"
              y1="65"
              x2="240"
              y2="65"
              stroke="currentColor"
              strokeOpacity="0.12"
              strokeDasharray="3 3"
            />
            <line
              x1="0"
              y1="195"
              x2="240"
              y2="195"
              stroke="currentColor"
              strokeOpacity="0.12"
              strokeDasharray="3 3"
            />
            <line
              x1="120"
              y1="0"
              x2="120"
              y2="260"
              stroke="currentColor"
              strokeOpacity="0.12"
              strokeDasharray="3 3"
            />
            {/* Outer 3D Hexagonal Wireframe */}
            <polygon
              points="120,28 190,68 190,148 120,188 50,148 50,68"
              stroke="currentColor"
              strokeOpacity="0.2"
              strokeWidth="1"
            />
            <circle cx="120" cy="110" r="64" stroke="currentColor" strokeOpacity="0.16" />
            {/* Minimal Developer Silhouette */}
            <circle
              cx="120"
              cy="92"
              r="26"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeOpacity="0.65"
            />
            <path
              d="M68 190C74 154 94 138 120 138C146 138 166 154 172 190"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeOpacity="0.65"
              strokeLinecap="round"
            />
            {/* Electric Lime Reticle Nodes */}
            <circle cx="120" cy="28" r="3" fill="#C6FF3D" />
            <circle cx="190" cy="68" r="3" fill="#C6FF3D" />
            <circle cx="50" cy="148" r="3" fill="#C6FF3D" />
          </svg>

          <div className="absolute bottom-2.5 inset-x-3 flex items-center justify-between font-mono text-[10px] text-[#767685] dark:text-subtle">
            <span>PHOTO_SLOT // 4:5</span>
            <span className="text-lime-dark dark:text-lime">EDIT IN portfolioData.js</span>
          </div>
        </div>
      ) : (
        /* 3D Isometric Exploded Stack View */
        <div
          role="img"
          aria-label="3D layered stack architecture diagram"
          className="relative w-full aspect-[4/4.2] rounded border border-[#C2C2B8] dark:border-line-strong bg-[#ECECE6]/70 dark:bg-obsidian/80 flex flex-col items-center justify-center p-4 overflow-hidden"
        >
          <div className="w-full max-w-[210px] space-y-3 perspective-1000">
            {[
              { layer: 'L4 // UI_VIEWPORT', tech: 'React + Three.js', z: 'translate-y-0' },
              { layer: 'L3 // API_GATEWAY', tech: 'Node.js + GraphQL', z: 'translate-y-0.5' },
              { layer: 'L2 // WORKER_RUNTIME', tech: 'Python + FastAPI', z: 'translate-y-1' },
              { layer: 'L1 // ACID_STORAGE', tech: 'PostgreSQL + Redis', z: 'translate-y-1.5' },
            ].map((item, idx) => (
              <div
                key={item.layer}
                className={`p-2.5 rounded border border-[#DCDCD4] dark:border-line-strong bg-white/90 dark:bg-panel/90 shadow-sm transform -skew-x-6 hover:skew-x-0 hover:border-lime-dark dark:hover:border-lime transition-all duration-300 ${item.z}`}
              >
                <div className="flex items-center justify-between font-mono text-[10px] text-[#767685] dark:text-subtle">
                  <span>{item.layer}</span>
                  <span className="text-lime-dark dark:text-lime">0{idx + 1}</span>
                </div>
                <div className="font-mono text-xs font-semibold text-[#111116] dark:text-offwhite mt-0.5">
                  {item.tech}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Caption */}
      <figcaption className="flex items-center justify-between pt-3 font-mono text-xs text-[#111116] dark:text-offwhite">
        <span className="font-semibold tracking-tight">{name.toUpperCase()}</span>
        <span className="text-[#767685] dark:text-subtle text-[11px]">SYS_ONLINE</span>
      </figcaption>
    </TiltCard3D>
  );
}

