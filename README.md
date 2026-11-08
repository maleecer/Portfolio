# Dushmin Maleesha — 3D Engineered Portfolio (React + Tailwind + Three.js)

A minimal, engineered single-page developer portfolio built with **React 18**, **Vite**, **Tailwind CSS**, and **Three.js** (`WebGL`).

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev

# 3. Build for production
npm run build
```

---

## 3D & Interactive Features
- **Interactive Three.js 3D Hero Core (`src/components/HeroScene3D.jsx`)**:
  - Real-time WebGL wireframe geodesic icosahedron + counter-rotating gyroscopic telemetry rings + 3D floating vertex lattice.
  - Responds to cursor movement, click-and-drag orbital rotation, and includes a live telemetry HUD with a 3D geometry mode switcher (`CORE`, `CUBE`, `TORUS`).
- **3D Perspective Tilt Cards (`src/components/TiltCard3D.jsx`)**:
  - Mouse-tracked 3D `rotateX` / `rotateY` perspective tilt with `translateZ` inner depth and radial specular glare (`#C6FF3D`) across Project cards, Quick Fact cards, and Skill panels.
- **3D Portrait & Exploded Stack Visualizer (`src/components/AboutHolo3D.jsx`)**:
  - Switchable between a 3D wireframe avatar frame and an isometric 4-layer stack diagram (`React`, `Node.js`, `Python`, `PostgreSQL`), or your real photo.

---

## How to Customize

### 1. Content (`src/data/portfolioData.js`)
All text, bio, quick facts, skills, projects, timeline entries, and links live in **one single file**: `src/data/portfolioData.js`.
- Update `name`, `role`, `tagline`, `location`, and `links`.
- Set `about.photoUrl: '/your-photo.jpg'` (and drop `your-photo.jpg` into `/public`) to show your photo in the 3D About frame.
- Replace `/public/resume.pdf` with your actual PDF resume.

### 2. Colors & Fonts (`tailwind.config.js` & `index.html`)
- Open `tailwind.config.js` to customize the palette:
  - `obsidian`: `#0B0B0F` (near-black background)
  - `offwhite`: `#EDEDED` (primary text)
  - `muted`: `#8E8E9E` (secondary text)
  - `lime.DEFAULT`: `#C6FF3D` (electric lime accent)
- Open `index.html` and `tailwind.config.js` (`fontFamily.sans` / `fontFamily.mono`) to swap `Inter` or `JetBrains Mono`.
