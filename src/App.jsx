import React, { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  Check,
  Copy,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  Moon,
  Send,
  Sun,
  X,
} from 'lucide-react';
import { portfolioData } from './data/portfolioData';
import HeroScene3D from './components/HeroScene3D';
import TiltCard3D from './components/TiltCard3D';
import AboutHolo3D from './components/AboutHolo3D';
import CustomCursor from './components/CustomCursor';

const NAV_ITEMS = [
  { id: 'home', idx: '00', label: 'Home' },
  { id: 'about', idx: '01', label: 'About' },
  { id: 'skills', idx: '02', label: 'Skills' },
  { id: 'projects', idx: '03', label: 'Work' },
  { id: 'experience', idx: '04', label: 'Resume' },
  { id: 'contact', idx: '05', label: 'Contact' },
];

export default function App() {
  // 1. Dark/Light Theme State (Dark by default)
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('dm_portfolio_theme') || 'dark';
    } catch {
      return 'dark';
    }
  });
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [localTime, setLocalTime] = useState(portfolioData.utcOffset);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Contact Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  // Sync theme with <html> class and localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('dm_portfolio_theme', theme);
    } catch {
      // Ignore private mode storage errors
    }
  }, [theme]);

  // Live Local Time Clock
  useEffect(() => {
    const updateClock = () => {
      try {
        const formatted = new Intl.DateTimeFormat('en-GB', {
          timeZone: portfolioData.timezone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(new Date());
        setLocalTime(`${formatted} ${portfolioData.utcOffset}`);
      } catch {
        setLocalTime(portfolioData.utcOffset);
      }
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  // Active Section Observer & Scroll-Reveal Observer
  useEffect(() => {
    const sections = document.querySelectorAll('main section[id]');
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: 0 }
    );
    sections.forEach((sec) => navObserver.observe(sec));

    const revealEls = document.querySelectorAll('.reveal-section');
    const revealObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );
    revealEls.forEach((el) => revealObserver.observe(el));

    return () => {
      navObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolioData.links.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      // Fallback
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setFormStatus('// ERR: Please complete all required fields.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setFormStatus('// ERR: Please enter a valid email address.');
      return;
    }

    setFormStatus('// STATUS: Payload verified. Opening mail client...');
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name.trim()}`);
    const body = encodeURIComponent(
      `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`
    );

    setTimeout(() => {
      window.location.href = `mailto:${portfolioData.links.email}?subject=${subject}&body=${body}`;
      setFormStatus('// TRANSMITTED: Message ready to send!');
      setFormData({ name: '', email: '', message: '' });
    }, 350);
  };

  return (
    <div id="top" className="min-h-screen relative">
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-lime focus:text-obsidian focus:font-mono focus:text-xs focus:font-semibold focus:px-4 focus:py-2 focus:rounded"
      >
        Skip to main content
      </a>

      {/* Engineered Background Grid, Film Grain & Custom Cursor */}
      <div className="fixed inset-0 pointer-events-none bg-engineered-grid -z-30" aria-hidden="true" />
      <div className="fixed inset-0 pointer-events-none bg-film-grain -z-20" aria-hidden="true" />
      <CustomCursor />

      {/* ====================================================================
          STICKY MINIMAL NAVIGATION HEADER
          ==================================================================== */}
      <header className="sticky top-0 z-50 h-[68px] border-b border-[#DCDCD4] dark:border-line bg-[#F6F6F2]/85 dark:bg-obsidian/80 backdrop-blur-md">
        <div className="max-w-[1120px] mx-auto px-6 h-full flex items-center justify-between gap-4">
          {/* Brand Monogram */}
          <a
            href="#home"
            className="inline-flex items-center gap-2 font-mono text-sm font-semibold group"
            aria-label={`${portfolioData.name} — Home`}
          >
            <span className="inline-flex items-center justify-center w-7 h-7 rounded border border-[#C2C2B8] dark:border-line-strong bg-[#ECECE6] dark:bg-surface text-xs font-bold">
              DM
              <span className="w-1 h-1 rounded-full bg-lime-dark dark:bg-lime ml-0.5" />
            </span>
            <span className="text-[#767685] dark:text-subtle">/</span>
            <span className="text-[#525260] dark:text-muted group-hover:text-[#111116] dark:group-hover:text-offwhite transition-colors">
              dushmin.dev
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav aria-label="Primary Navigation" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={isActive ? 'page' : undefined}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded font-mono text-xs border transition-all ${
                        isActive
                          ? 'border-[#C2C2B8] dark:border-line-strong bg-[#ECECE6] dark:bg-surface text-[#111116] dark:text-offwhite'
                          : 'border-transparent text-[#525260] dark:text-muted hover:text-[#111116] dark:hover:text-offwhite hover:bg-[#ECECE6]/60 dark:hover:bg-surface/60'
                      }`}
                    >
                      <span
                        className={`text-[11px] ${
                          isActive
                            ? 'text-lime-dark dark:text-lime font-semibold'
                            : 'text-[#767685] dark:text-subtle'
                        }`}
                      >
                        {item.idx}
                      </span>
                      <span>{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded border border-[#DCDCD4] dark:border-line bg-[#ECECE6] dark:bg-surface font-mono text-xs text-[#525260] dark:text-muted hover:border-lime-dark dark:hover:border-lime hover:text-[#111116] dark:hover:text-offwhite transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
              <span>{theme.toUpperCase()}</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded border border-[#DCDCD4] dark:border-line bg-[#ECECE6] dark:bg-surface text-[#111116] dark:text-offwhite"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <nav
            aria-label="Mobile Navigation"
            className="md:hidden border-b border-[#DCDCD4] dark:border-line bg-[#F6F6F2] dark:bg-obsidian px-6 py-4"
          >
            <ul className="flex flex-col gap-1.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-2.5 px-3 py-2.5 rounded font-mono text-xs border ${
                      activeSection === item.id
                        ? 'border-[#C2C2B8] dark:border-line-strong bg-[#ECECE6] dark:bg-surface text-[#111116] dark:text-offwhite'
                        : 'border-transparent text-[#525260] dark:text-muted'
                    }`}
                  >
                    <span className="text-lime-dark dark:text-lime">{item.idx}</span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <main id="main-content">
        {/* ==================================================================
            1. HOME (HERO) SECTION WITH INTERACTIVE 3D WEBGL SCENE
            ================================================================== */}
        <section
          id="home"
          aria-labelledby="hero-heading"
          className="relative min-h-[calc(100vh-68px)] flex items-center py-12 lg:py-16 border-b border-[#DCDCD4] dark:border-line section-crosshair overflow-hidden"
        >
          {/* Ambient Animated Gradient Glow behind Hero */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-10 right-[8%] w-[320px] sm:w-[480px] h-[320px] sm:h-[480px] rounded-full blur-[90px] animate-pulse-glow -z-10"
            style={{
              background:
                'radial-gradient(circle, rgba(198,255,61,0.20) 0%, rgba(90,120,255,0.06) 50%, transparent 72%)',
            }}
          />

          <div className="max-w-[1120px] mx-auto px-6 w-full flex flex-col justify-between gap-10">
            {/* Top Status & Coordinate Rail */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-[#DCDCD4] dark:border-line">
              {/* Available for work status dot */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#C2C2B8] dark:border-line-strong bg-[#ECECE6] dark:bg-surface font-mono text-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-dark dark:bg-lime" />
                </span>
                <span>{portfolioData.availabilityText}</span>
              </div>

              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#525260] dark:text-muted">
                <span className="text-[#767685] dark:text-subtle">// LOC:</span>
                <span>{portfolioData.location}</span>
                <span className="text-[#767685] dark:text-subtle">·</span>
                <span className="text-[#767685] dark:text-subtle">{localTime}</span>
              </div>
            </div>

            {/* Hero Split Grid: Left Typography + Right Interactive 3D Scene */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column: Headline, Tagline & CTAs */}
              <div className="lg:col-span-7 space-y-6">
                <p className="font-mono text-xs tracking-wider text-[#767685] dark:text-subtle">
                  <span className="text-lime-dark dark:text-lime font-semibold">//</span> 00 &mdash;
                  SYSTEM_INIT / 3D_ENGINEERED_PORTFOLIO
                </p>

                <h1
                  id="hero-heading"
                  className="text-4xl sm:text-6xl lg:text-[4.25rem] font-extrabold tracking-[-0.04em] leading-[1.03]"
                >
                  <span className="block text-[#111116] dark:text-offwhite">
                    {portfolioData.name}
                  </span>
                  <span className="block text-[#525260] dark:text-muted font-semibold mt-1">
                    {portfolioData.role}
                    <span className="text-lime-dark dark:text-lime">.</span>
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-[#525260] dark:text-muted max-w-[54ch] leading-relaxed">
                  {portfolioData.tagline}
                </p>

                {/* Primary CTA Buttons ("View Projects", "Contact Me") */}
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded bg-lime text-obsidian font-mono text-xs font-semibold hover:-translate-y-0.5 hover:shadow-[0_10px_28px_-6px_rgba(198,255,61,0.35)] transition-all"
                  >
                    <span>View Projects</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded border border-[#C2C2B8] dark:border-line-strong bg-[#ECECE6] dark:bg-surface font-mono text-xs font-semibold hover:border-lime-dark dark:hover:border-lime hover:-translate-y-0.5 transition-all"
                  >
                    <span>Contact Me</span>
                    <span className="text-[#767685] dark:text-subtle font-normal">// 05</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive Three.js 3D Scene */}
              <div className="lg:col-span-5">
                <HeroScene3D theme={theme} />
              </div>
            </div>

            {/* Bottom Core Stack & Channels Telemetry Strip */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#DCDCD4] dark:border-line">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-xs text-[#767685] dark:text-subtle">
                  // CORE_STACK
                </span>
                <ul className="flex flex-wrap gap-1.5" aria-label="Core Tech Stack">
                  {portfolioData.coreStack.map((tech) => (
                    <li
                      key={tech}
                      className="font-mono text-xs px-2.5 py-1 rounded border border-[#DCDCD4] dark:border-line bg-[#ECECE6] dark:bg-surface"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-5 font-mono text-xs">
                <span className="text-[#767685] dark:text-subtle hidden sm:inline">
                  // CHANNELS
                </span>
                <a
                  href={portfolioData.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#525260] dark:text-muted hover:text-lime-dark dark:hover:text-lime transition-colors"
                >
                  GitHub ↗
                </a>
                <a
                  href={portfolioData.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#525260] dark:text-muted hover:text-lime-dark dark:hover:text-lime transition-colors"
                >
                  LinkedIn ↗
                </a>
                <a
                  href={`mailto:${portfolioData.links.email}`}
                  className="text-[#525260] dark:text-muted hover:text-lime-dark dark:hover:text-lime transition-colors"
                >
                  Email ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            2. ABOUT SECTION
            ================================================================== */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="py-24 border-b border-[#DCDCD4] dark:border-line section-crosshair"
        >
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="mb-14 reveal-section">
              <div className="inline-flex items-center gap-3 font-mono text-xs mb-3">
                <span className="text-lime-dark dark:text-lime font-medium">// about</span>
                <span className="px-2 py-0.5 rounded border border-[#DCDCD4] dark:border-line bg-[#ECECE6] dark:bg-surface text-[#767685] dark:text-subtle">
                  01 / profile
                </span>
              </div>
              <h2
                id="about-heading"
                className="text-3xl sm:text-4xl font-bold tracking-tight"
              >
                Engineered for clarity &amp; scale.
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-12">
              {/* Bio Column */}
              <div className="lg:col-span-7 space-y-5 reveal-section">
                <p className="text-lg sm:text-xl font-medium leading-relaxed text-[#111116] dark:text-offwhite">
                  {portfolioData.about.lead}
                </p>
                {portfolioData.about.paragraphs.map((para, i) => (
                  <p key={i} className="text-[#525260] dark:text-muted leading-relaxed">
                    {para}
                  </p>
                ))}

                {/* Code-style Principle Snippet */}
                <div className="mt-6 rounded-lg border border-[#DCDCD4] dark:border-line bg-[#ECECE6] dark:bg-surface overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-2 border-b border-[#DCDCD4] dark:border-line bg-black/5 dark:bg-black/25 font-mono text-xs text-[#767685] dark:text-subtle">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-lime-dark dark:bg-lime" />
                      <span>architecture.config.ts</span>
                    </div>
                    <span>READONLY</span>
                  </div>
                  <pre className="p-4 font-mono text-xs leading-relaxed overflow-x-auto text-[#525260] dark:text-muted">
                    <code>
                      <span className="text-[#111116] dark:text-offwhite font-semibold">
                        export const
                      </span>{' '}
                      systemProfile = {'{\n'}
                      {'  '}stack: [
                      <span className="text-lime-dark dark:text-lime">
                        &quot;React&quot;, &quot;Node.js&quot;, &quot;Python&quot;,
                        &quot;PostgreSQL&quot;
                      </span>
                      ],{'\n'}
                      {'  '}principles: [&quot;clean_contracts&quot;, &quot;low_latency&quot;,
                      &quot;3D_craft&quot;],{'\n'}
                      {'  '}status:{' '}
                      <span className="text-lime-dark dark:text-lime">
                        &quot;ready_to_ship&quot;
                      </span>
                      {'\n};'}
                    </code>
                  </pre>
                </div>
              </div>

              {/* 3D Interactive Photo Placeholder / Stack Hologram */}
              <div className="lg:col-span-5 max-w-sm lg:max-w-none reveal-section">
                <AboutHolo3D
                  name={portfolioData.name}
                  photoUrl={portfolioData.about.photoUrl}
                />
              </div>
            </div>

            {/* 3 Quick Facts with 3D Perspective Tilt */}
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-5 reveal-section"
              aria-label="Quick facts"
            >
              {portfolioData.about.quickFacts.map((fact) => (
                <TiltCard3D
                  key={fact.id}
                  intensity={6}
                  as="article"
                  className="p-6 rounded-lg border border-[#DCDCD4] dark:border-line bg-white/75 dark:bg-surface/75 hover:border-[#C2C2B8] dark:hover:border-line-strong"
                >
                  <div className="flex items-center justify-between font-mono text-xs mb-3">
                    <span className="text-[#767685] dark:text-subtle">{fact.id}</span>
                    <span className="text-lime-dark dark:text-lime">{fact.label}</span>
                  </div>
                  <p className="text-2xl font-bold tracking-tight mb-1.5">{fact.value}</p>
                  <p className="text-sm text-[#525260] dark:text-muted leading-relaxed">
                    {fact.description}
                  </p>
                </TiltCard3D>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================
            3. SKILLS SECTION (Frontend, Backend, Tools — Minimal Tags)
            ================================================================== */}
        <section
          id="skills"
          aria-labelledby="skills-heading"
          className="py-24 border-b border-[#DCDCD4] dark:border-line section-crosshair"
        >
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="mb-14 reveal-section">
              <div className="inline-flex items-center gap-3 font-mono text-xs mb-3">
                <span className="text-lime-dark dark:text-lime font-medium">// skills</span>
                <span className="px-2 py-0.5 rounded border border-[#DCDCD4] dark:border-line bg-[#ECECE6] dark:bg-surface text-[#767685] dark:text-subtle">
                  02 / stack
                </span>
              </div>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <h2
                  id="skills-heading"
                  className="text-3xl sm:text-4xl font-bold tracking-tight"
                >
                  Technical capabilities.
                </h2>
                <p className="text-sm text-[#525260] dark:text-muted max-w-md">
                  Grouped by architectural layer—focused on production reliability, type safety, and clean interfaces.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 reveal-section">
              {portfolioData.skills.map((group) => (
                <TiltCard3D
                  key={group.id}
                  intensity={5}
                  className="p-6 rounded-lg border border-[#DCDCD4] dark:border-line bg-white/75 dark:bg-surface/75"
                >
                  <div>
                    <div className="pb-4 mb-4 border-b border-[#DCDCD4] dark:border-line">
                      <span className="font-mono text-xs text-lime-dark dark:text-lime">
                        {group.id}
                      </span>
                      <h3 className="text-lg font-bold mt-0.5">{group.category}</h3>
                      <span className="font-mono text-[11px] text-[#767685] dark:text-subtle">
                        {group.meta}
                      </span>
                    </div>

                    <ul
                      className="space-y-2"
                      aria-label={`${group.category} skills`}
                    >
                      {group.items.map((skill) => (
                        <li
                          key={skill.name}
                          className={`flex items-center justify-between px-3.5 py-2.5 rounded border border-[#DCDCD4] dark:border-line bg-[#ECECE6]/70 dark:bg-obsidian/70 hover:border-lime-dark dark:hover:border-lime hover:translate-x-1 transition-all ${
                            skill.isCore
                              ? 'border-l-2 border-l-lime-dark dark:border-l-lime'
                              : ''
                          }`}
                        >
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span
                            className={`font-mono text-[11px] ${
                              skill.isCore
                                ? 'text-lime-dark dark:text-lime font-semibold'
                                : 'text-[#767685] dark:text-subtle'
                            }`}
                          >
                            {skill.role}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TiltCard3D>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================
            4. PROJECTS / WORK SECTION (3D Perspective Cards)
            ================================================================== */}
        <section
          id="projects"
          aria-labelledby="projects-heading"
          className="py-24 border-b border-[#DCDCD4] dark:border-line section-crosshair"
        >
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="mb-14 reveal-section">
              <div className="inline-flex items-center gap-3 font-mono text-xs mb-3">
                <span className="text-lime-dark dark:text-lime font-medium">// work</span>
                <span className="px-2 py-0.5 rounded border border-[#DCDCD4] dark:border-line bg-[#ECECE6] dark:bg-surface text-[#767685] dark:text-subtle">
                  03 / projects
                </span>
              </div>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <h2
                  id="projects-heading"
                  className="text-3xl sm:text-4xl font-bold tracking-tight"
                >
                  Selected engineering work.
                </h2>
                <p className="text-sm text-[#525260] dark:text-muted max-w-md">
                  Hover any project card to inspect its 3D depth plane, architecture highlight, and source links.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal-section">
              {portfolioData.projects.map((project, idx) => (
                <TiltCard3D
                  key={project.index}
                  intensity={6}
                  as="article"
                  className="p-7 rounded-lg border border-[#DCDCD4] dark:border-line bg-white/80 dark:bg-surface/80 hover:border-[#C2C2B8] dark:hover:border-line-strong group"
                >
                  <div>
                    <div className="flex items-center justify-between font-mono text-xs mb-5">
                      <span className="text-lime-dark dark:text-lime font-semibold">
                        {project.index} / 0{portfolioData.projects.length}
                      </span>
                      <span className="text-[#767685] dark:text-subtle">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold tracking-tight mb-3 group-hover:text-lime-dark dark:group-hover:text-lime transition-colors">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.title}
                      </a>
                    </h3>

                    <p className="text-sm text-[#525260] dark:text-muted leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="p-3 rounded-r border-l-2 border-[#C2C2B8] dark:border-line-strong group-hover:border-lime-dark dark:group-hover:border-lime bg-[#ECECE6]/70 dark:bg-obsidian/70 text-xs text-[#525260] dark:text-muted mb-6 transition-colors">
                      <span className="font-mono text-lime-dark dark:text-lime font-semibold mr-2">
                        ARCH_NOTE:
                      </span>
                      <span>{project.archHighlight}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#DCDCD4] dark:border-line">
                    <ul
                      className="flex flex-wrap gap-1.5"
                      aria-label={`Technologies used in ${project.title}`}
                    >
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="font-mono text-[11px] px-2 py-0.5 rounded border border-[#DCDCD4] dark:border-line bg-[#ECECE6] dark:bg-obsidian text-[#525260] dark:text-muted"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-4 font-mono text-xs font-medium">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:text-lime-dark dark:hover:text-lime transition-colors"
                        aria-label={`Live demo of ${project.title}`}
                      >
                        <span>Live</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:text-lime-dark dark:hover:text-lime transition-colors"
                        aria-label={`GitHub code for ${project.title}`}
                      >
                        <span>GitHub</span>
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </TiltCard3D>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================
            5. RESUME / EXPERIENCE SECTION (Vertical Timeline + Download Button)
            ================================================================== */}
        <section
          id="experience"
          aria-labelledby="experience-heading"
          className="py-24 border-b border-[#DCDCD4] dark:border-line section-crosshair"
        >
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="mb-14 reveal-section">
              <div className="inline-flex items-center gap-3 font-mono text-xs mb-3">
                <span className="text-lime-dark dark:text-lime font-medium">// resume</span>
                <span className="px-2 py-0.5 rounded border border-[#DCDCD4] dark:border-line bg-[#ECECE6] dark:bg-surface text-[#767685] dark:text-subtle">
                  04 / timeline
                </span>
              </div>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <h2
                  id="experience-heading"
                  className="text-3xl sm:text-4xl font-bold tracking-tight"
                >
                  Experience &amp; education.
                </h2>

                <a
                  href={portfolioData.links.resumeUrl}
                  download="Dushmin_Maleesha_Resume.pdf"
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded border border-[#C2C2B8] dark:border-line-strong bg-[#ECECE6] dark:bg-surface font-mono text-xs font-semibold hover:border-lime-dark dark:hover:border-lime hover:-translate-y-0.5 transition-all"
                >
                  <Download className="w-4 h-4 text-lime-dark dark:text-lime" />
                  <span>Download Resume</span>
                  <span className="text-[#767685] dark:text-subtle font-normal">.PDF</span>
                </a>
              </div>
            </div>

            {/* Minimal Vertical Timeline */}
            <div className="relative border-l border-[#C2C2B8] dark:border-line-strong ml-2 pl-7 space-y-10 reveal-section">
              {portfolioData.timeline.map((item, idx) => (
                <article
                  key={idx}
                  className="relative grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-start group"
                >
                  {/* Timeline Dot */}
                  <span
                    aria-hidden="true"
                    className={`absolute -left-[33.5px] top-1.5 w-3 h-3 rounded-full border-2 transition-colors ${
                      item.isCurrent
                        ? 'border-lime-dark dark:border-lime bg-lime'
                        : 'border-[#C2C2B8] dark:border-line-strong bg-[#F6F6F2] dark:bg-obsidian group-hover:border-lime-dark dark:group-hover:border-lime'
                    }`}
                  />

                  {/* Period & Badge */}
                  <div className="lg:col-span-3 flex flex-col items-start gap-1.5">
                    <span className="font-mono text-xs font-semibold">{item.period}</span>
                    <span
                      className={`font-mono text-[10px] px-2 py-0.5 rounded border ${
                        item.isCurrent
                          ? 'border-lime-dark dark:border-lime text-lime-dark dark:text-lime bg-lime/10'
                          : 'border-[#DCDCD4] dark:border-line text-[#767685] dark:text-subtle bg-[#ECECE6] dark:bg-surface'
                      }`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Role Card */}
                  <div className="lg:col-span-9 p-6 rounded-lg border border-[#DCDCD4] dark:border-line bg-white/75 dark:bg-surface/75">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold">{item.role}</h3>
                      <span className="font-mono text-xs text-[#525260] dark:text-muted">
                        {item.organization}
                      </span>
                    </div>
                    <p className="text-sm text-[#525260] dark:text-muted leading-relaxed">
                      {item.summary}
                    </p>
                    {item.highlights.length > 0 && (
                      <ul className="mt-4 space-y-2">
                        {item.highlights.map((bullet, bIdx) => (
                          <li
                            key={bIdx}
                            className="relative pl-4 text-sm text-[#525260] dark:text-muted"
                          >
                            <span
                              aria-hidden="true"
                              className="absolute left-0 font-mono font-bold text-lime-dark dark:text-lime"
                            >
                              ›
                            </span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ==================================================================
            6. CONTACT SECTION
            ================================================================== */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="py-24 border-b border-[#DCDCD4] dark:border-line"
        >
          <div className="max-w-[1120px] mx-auto px-6">
            <div className="mb-14 reveal-section">
              <div className="inline-flex items-center gap-3 font-mono text-xs mb-3">
                <span className="text-lime-dark dark:text-lime font-medium">// contact</span>
                <span className="px-2 py-0.5 rounded border border-[#DCDCD4] dark:border-line bg-[#ECECE6] dark:bg-surface text-[#767685] dark:text-subtle">
                  05 / initiate
                </span>
              </div>
              <h2
                id="contact-heading"
                className="text-3xl sm:text-4xl font-bold tracking-tight"
              >
                Let’s build something precise.
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start reveal-section">
              {/* Left Column: Direct Email & Social Nodes */}
              <div className="lg:col-span-5 space-y-7">
                <p className="text-[#525260] dark:text-muted leading-relaxed">
                  Looking for a full-stack developer to architect a new product, optimize backend throughput, or build an interactive web experience? Reach out directly or send a message through the form.
                </p>

                {/* Direct Email Box with Copy Button */}
                <div className="p-5 rounded-lg border border-[#DCDCD4] dark:border-line bg-white/75 dark:bg-surface/75">
                  <span className="block font-mono text-[11px] text-[#767685] dark:text-subtle mb-2">
                    // DIRECT_TRANSMISSION
                  </span>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <a
                      href={`mailto:${portfolioData.links.email}`}
                      className="font-mono text-sm sm:text-base font-semibold hover:text-lime-dark dark:hover:text-lime break-all transition-colors"
                    >
                      {portfolioData.links.email}
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-[#C2C2B8] dark:border-line-strong bg-[#ECECE6] dark:bg-obsidian font-mono text-xs font-semibold hover:border-lime-dark dark:hover:border-lime transition-colors"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-lime-dark dark:text-lime" />
                          <span>COPIED</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>COPY</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Social Links List */}
                <div>
                  <span className="block font-mono text-[11px] text-[#767685] dark:text-subtle mb-2">
                    // NETWORK_NODES
                  </span>
                  <ul className="border-t border-[#DCDCD4] dark:border-line divide-y divide-[#DCDCD4] dark:divide-line">
                    <li>
                      <a
                        href={portfolioData.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between py-3.5 px-1 hover:pl-2.5 hover:text-lime-dark dark:hover:text-lime transition-all"
                      >
                        <span className="inline-flex items-center gap-2 text-sm font-medium">
                          <Github className="w-4 h-4" />
                          GitHub
                        </span>
                        <span className="font-mono text-xs text-[#525260] dark:text-muted">
                          {portfolioData.links.githubHandle} ↗
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href={portfolioData.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between py-3.5 px-1 hover:pl-2.5 hover:text-lime-dark dark:hover:text-lime transition-all"
                      >
                        <span className="inline-flex items-center gap-2 text-sm font-medium">
                          <Linkedin className="w-4 h-4" />
                          LinkedIn
                        </span>
                        <span className="font-mono text-xs text-[#525260] dark:text-muted">
                          {portfolioData.links.linkedinHandle} ↗
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href={`mailto:${portfolioData.links.email}`}
                        className="flex items-center justify-between py-3.5 px-1 hover:pl-2.5 hover:text-lime-dark dark:hover:text-lime transition-all"
                      >
                        <span className="inline-flex items-center gap-2 text-sm font-medium">
                          <Mail className="w-4 h-4" />
                          Email
                        </span>
                        <span className="font-mono text-xs text-[#525260] dark:text-muted">
                          {portfolioData.links.email} ↗
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-7">
                <form
                  onSubmit={handleFormSubmit}
                  noValidate
                  className="p-7 rounded-lg border border-[#DCDCD4] dark:border-line bg-white/80 dark:bg-surface/80 space-y-5"
                >
                  <div className="flex items-center justify-between pb-3.5 border-b border-[#DCDCD4] dark:border-line font-mono text-xs text-[#767685] dark:text-subtle">
                    <span>// MESSAGE_PAYLOAD</span>
                    <span>STATUS: READY</span>
                  </div>

                  <div>
                    <label
                      htmlFor="name"
                      className="flex items-center justify-between font-mono text-xs text-[#525260] dark:text-muted mb-2"
                    >
                      <span>01 / NAME</span>
                      <span className="text-lime-dark dark:text-lime">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ada Lovelace"
                      className="w-full px-3.5 py-2.5 rounded border border-[#C2C2B8] dark:border-line-strong bg-[#ECECE6]/70 dark:bg-obsidian text-sm focus:border-lime-dark dark:focus:border-lime focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="flex items-center justify-between font-mono text-xs text-[#525260] dark:text-muted mb-2"
                    >
                      <span>02 / EMAIL</span>
                      <span className="text-lime-dark dark:text-lime">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="ada@analytical.engine"
                      className="w-full px-3.5 py-2.5 rounded border border-[#C2C2B8] dark:border-line-strong bg-[#ECECE6]/70 dark:bg-obsidian text-sm focus:border-lime-dark dark:focus:border-lime focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="flex items-center justify-between font-mono text-xs text-[#525260] dark:text-muted mb-2"
                    >
                      <span>03 / MESSAGE</span>
                      <span className="text-lime-dark dark:text-lime">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your project, timeline, or engineering role..."
                      className="w-full px-3.5 py-2.5 rounded border border-[#C2C2B8] dark:border-line-strong bg-[#ECECE6]/70 dark:bg-obsidian text-sm focus:border-lime-dark dark:focus:border-lime focus:outline-none transition-colors resize-y"
                    />
                  </div>

                  <div className="pt-1 space-y-2.5">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-lime text-obsidian font-mono text-xs font-semibold hover:-translate-y-0.5 hover:shadow-[0_10px_28px_-6px_rgba(198,255,61,0.35)] transition-all"
                    >
                      <span>Send Transmission</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>

                    {formStatus && (
                      <p
                        role="status"
                        aria-live="polite"
                        className="font-mono text-xs text-lime-dark dark:text-lime"
                      >
                        {formStatus}
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ====================================================================
          FOOTER
          ==================================================================== */}
      <footer className="py-8">
        <div className="max-w-[1120px] mx-auto px-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded border border-[#C2C2B8] dark:border-line-strong bg-[#ECECE6] dark:bg-surface font-mono text-[11px] font-bold">
              DM
            </span>
            <p className="text-xs text-[#767685] dark:text-subtle">
              &copy; {new Date().getFullYear()} {portfolioData.name}. Engineered with React, Tailwind CSS &amp; Three.js.
            </p>
          </div>
          <a
            href="#top"
            className="font-mono text-xs text-[#525260] dark:text-muted hover:text-lime-dark dark:hover:text-lime transition-colors"
          >
            TOP_OF_PAGE ↑
          </a>
        </div>
      </footer>
    </div>
  );
}

