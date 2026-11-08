import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

/**
 * Interactive Three.js 3D Engineered Core for the Hero Section.
 * Features:
 * - Switchable 3D architectural geometries (Geodesic Core, Hypercube Lattice, Torus Manifold)
 * - Counter-rotating gyroscopic telemetry rings & floating 3D vertex field
 * - Mouse-tracking parallax, click-and-drag orbital spin, and live telemetry HUD
 * - Theme-aware colors (Dark #0B0B0F + #C6FF3D / Light #F6F6F2 + #3E6B00)
 */
export default function HeroScene3D({ theme = 'dark' }) {
  const mountRef = useRef(null);
  const [geometryMode, setGeometryMode] = useState('geodesic'); // 'geodesic' | 'tesseract' | 'manifold'
  const [coords, setCoords] = useState({ rx: '0.24', ry: '0.58', zoom: '1.00' });
  const modeRef = useRef(geometryMode);

  useEffect(() => {
    modeRef.current = geometryMode;
  }, [geometryMode]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const width = container.clientWidth || 520;
    const height = container.clientHeight || 480;

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0, 6.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Theme-aware colors
    const isDark = theme === 'dark';
    const accentHex = isDark ? 0xc6ff3d : 0x4d7c0f;
    const primaryWireHex = isDark ? 0xededed : 0x181820;
    const subtleWireHex = isDark ? 0x38384a : 0xb8b8ad;

    // 2. Main Assembly Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Outer Wireframe Shell + Vertex Points
    const outerGeo = new THREE.IcosahedronGeometry(1.62, 1);
    const outerEdges = new THREE.EdgesGeometry(outerGeo);
    const outerLineMat = new THREE.LineBasicMaterial({
      color: primaryWireHex,
      transparent: true,
      opacity: isDark ? 0.34 : 0.45,
    });
    const outerWireframe = new THREE.LineSegments(outerEdges, outerLineMat);
    rootGroup.add(outerWireframe);

    // Glowing Lime Vertex Points on Outer Shell
    const vertexPointsMat = new THREE.PointsMaterial({
      color: accentHex,
      size: 0.055,
      transparent: true,
      opacity: 0.95,
    });
    const outerVertices = new THREE.Points(outerGeo, vertexPointsMat);
    rootGroup.add(outerVertices);

    // Inner Core Group (Morphs based on geometryMode)
    const innerCoreGroup = new THREE.Group();
    rootGroup.add(innerCoreGroup);

    const buildInnerCore = (mode) => {
      while (innerCoreGroup.children.length > 0) {
        const child = innerCoreGroup.children[0];
        if (child.geometry) child.geometry.dispose();
        if (child.material) child.material.dispose();
        innerCoreGroup.remove(child);
      }

      let coreGeo;
      if (mode === 'tesseract') {
        coreGeo = new THREE.BoxGeometry(1.35, 1.35, 1.35, 2, 2, 2);
      } else if (mode === 'manifold') {
        coreGeo = new THREE.TorusKnotGeometry(0.68, 0.2, 64, 12, 2, 3);
      } else {
        coreGeo = new THREE.OctahedronGeometry(0.98, 1);
      }

      // Solid subtle low-opacity dark core for depth occlusion
      const solidMat = new THREE.MeshBasicMaterial({
        color: isDark ? 0x0b0b0f : 0xf6f6f2,
        transparent: true,
        opacity: 0.72,
        polygonOffset: true,
        polygonOffsetFactor: 1,
        polygonOffsetUnits: 1,
      });
      const solidMesh = new THREE.Mesh(coreGeo, solidMat);
      innerCoreGroup.add(solidMesh);

      // Electric Lime Wireframe Overlay
      const wireGeo = new THREE.WireframeGeometry(coreGeo);
      const wireMat = new THREE.LineBasicMaterial({
        color: accentHex,
        transparent: true,
        opacity: isDark ? 0.88 : 0.95,
      });
      const wireMesh = new THREE.LineSegments(wireGeo, wireMat);
      innerCoreGroup.add(wireMesh);

      // If tesseract mode, add inner nested hypercube + connecting struts
      if (mode === 'tesseract') {
        const innerBoxGeo = new THREE.EdgesGeometry(new THREE.BoxGeometry(0.68, 0.68, 0.68));
        const innerBoxMat = new THREE.LineBasicMaterial({
          color: primaryWireHex,
          transparent: true,
          opacity: 0.75,
        });
        innerCoreGroup.add(new THREE.LineSegments(innerBoxGeo, innerBoxMat));
      }
    };

    buildInnerCore(modeRef.current);

    // 3. Gyroscopic Orbital Telemetry Rings
    const ringMatAccent = new THREE.MeshBasicMaterial({
      color: accentHex,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const ringMatSubtle = new THREE.MeshBasicMaterial({
      color: subtleWireHex,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });

    const ring1 = new THREE.Mesh(new THREE.TorusGeometry(2.15, 0.008, 8, 96), ringMatAccent);
    ring1.rotation.x = Math.PI / 2.6;
    ring1.rotation.y = Math.PI / 8;
    rootGroup.add(ring1);

    const ring2 = new THREE.Mesh(new THREE.TorusGeometry(2.42, 0.006, 6, 80), ringMatSubtle);
    ring2.rotation.x = -Math.PI / 3.2;
    ring2.rotation.y = -Math.PI / 5;
    rootGroup.add(ring2);

    // 4. Floating 3D Coordinate Particle Field
    const particleCount = 140;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const r = 2.3 + Math.random() * 1.9;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: accentHex,
      size: 0.032,
      transparent: true,
      opacity: 0.65,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // 5. Pointer & Drag Interaction
    let targetX = 0.35;
    let targetY = 0.55;
    let isDragging = false;
    let prevPointer = { x: 0, y: 0 };
    let activeMode = modeRef.current;

    const handlePointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      if (isDragging) {
        const dx = e.clientX - prevPointer.x;
        const dy = e.clientY - prevPointer.y;
        targetY += dx * 0.012;
        targetX += dy * 0.012;
        prevPointer = { x: e.clientX, y: e.clientY };
      } else {
        targetY = normX * 0.85;
        targetX = normY * 0.55;
      }
    };

    const handlePointerDown = (e) => {
      isDragging = true;
      prevPointer = { x: e.clientX, y: e.clientY };
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    container.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);

    // 6. Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 500;
      const h = container.clientHeight || 460;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // 7. Animation Loop
    let frameId;
    let frameCounter = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Check if user toggled 3D geometry mode
      if (modeRef.current !== activeMode) {
        activeMode = modeRef.current;
        buildInnerCore(activeMode);
      }

      if (!prefersReducedMotion) {
        // Smoothly interpolate toward pointer + continuous orbital rotation
        rootGroup.rotation.y += 0.0038 + (targetY - rootGroup.rotation.y) * 0.04;
        rootGroup.rotation.x += (targetX - rootGroup.rotation.x) * 0.04;

        innerCoreGroup.rotation.y = -elapsed * 0.45;
        innerCoreGroup.rotation.z = elapsed * 0.25;

        ring1.rotation.z = elapsed * 0.32;
        ring2.rotation.z = -elapsed * 0.22;

        particleSystem.rotation.y = elapsed * 0.08;
        particleSystem.rotation.x = Math.sin(elapsed * 0.2) * 0.12;

        // Subtle breathing scale on inner core
        const pulse = 1 + Math.sin(elapsed * 2.2) * 0.035;
        innerCoreGroup.scale.set(pulse, pulse, pulse);
      }

      renderer.render(scene, camera);

      // Update telemetry readout every ~15 frames
      frameCounter++;
      if (frameCounter % 15 === 0) {
        setCoords({
          rx: rootGroup.rotation.x.toFixed(2),
          ry: (rootGroup.rotation.y % (Math.PI * 2)).toFixed(2),
          zoom: '1.00',
        });
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [theme]);

  return (
    <div className="relative w-full h-[380px] sm:h-[450px] lg:h-[520px] rounded-lg border border-[#DCDCD4] dark:border-line bg-white/50 dark:bg-surface/60 backdrop-blur-sm overflow-hidden select-none group">
      {/* Subtle Corner Reticles */}
      <span className="pointer-events-none absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-lime-dark dark:border-lime z-10" />
      <span className="pointer-events-none absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-lime-dark dark:border-lime z-10" />
      <span className="pointer-events-none absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-lime-dark dark:border-lime z-10" />
      <span className="pointer-events-none absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-lime-dark dark:border-lime z-10" />

      {/* Top 3D Viewport Telemetry Bar */}
      <div className="absolute top-3 left-3.5 right-3.5 flex items-center justify-between font-mono text-[11px] text-[#767685] dark:text-subtle z-10 pointer-events-none">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-lime-dark dark:bg-lime animate-pulse" />
          <span>WEBGL_3D // INTERACTIVE_MESH</span>
        </div>
        <span className="hidden sm:inline">DRAG OR HOVER TO ORBIT</span>
      </div>

      {/* Three.js Canvas Mount Container */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        role="img"
        aria-label="Interactive 3D wireframe architectural core that responds to cursor movement"
      />

      {/* Bottom 3D Controls & Live Coordinate Readout */}
      <div className="absolute bottom-3 left-3.5 right-3.5 flex flex-wrap items-center justify-between gap-2 z-10">
        <div className="font-mono text-[11px] text-[#525260] dark:text-muted bg-[#ECECE6]/90 dark:bg-obsidian/85 px-2.5 py-1 rounded border border-[#DCDCD4] dark:border-line">
          <span>PITCH: {coords.rx}</span>
          <span className="mx-2 text-[#767685] dark:text-subtle">|</span>
          <span>YAW: {coords.ry}</span>
        </div>

        {/* Geometry Switcher Pills */}
        <div
          className="flex items-center gap-1 bg-[#ECECE6]/90 dark:bg-obsidian/85 p-1 rounded border border-[#DCDCD4] dark:border-line"
          role="group"
          aria-label="Switch 3D geometry mode"
        >
          {[
            { id: 'geodesic', label: 'CORE' },
            { id: 'tesseract', label: 'CUBE' },
            { id: 'manifold', label: 'TORUS' },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setGeometryMode(item.id)}
              className={`font-mono text-[10px] px-2 py-0.5 rounded transition-colors ${
                geometryMode === item.id
                  ? 'bg-lime text-obsidian font-semibold'
                  : 'text-[#525260] dark:text-muted hover:text-[#111116] dark:hover:text-offwhite'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

