/**
 * ============================================================================
 * [EDIT: PORTFOLIO CONTENT CONFIGURATION]
 * Edit your personal details, bio, skills, projects, and timeline in this file.
 * All React components read directly from this object.
 * ============================================================================
 */

export const portfolioData = {
  // --------------------------------------------------------------------------
  // 1. PERSONAL & HERO INFO
  // --------------------------------------------------------------------------
  name: 'Dushmin Maleesha',
  role: 'Full-Stack Developer',
  tagline:
    'Engineering resilient, high-precision web applications, distributed backends, and interactive 3D experiences with clean architecture.',
  location: 'Colombo, Sri Lanka', // [EDIT: City, Country]
  timezone: 'Asia/Colombo',
  utcOffset: 'UTC+05:30',
  availableForWork: true,
  availabilityText: 'Available for work & select roles',
  coreStack: ['React', 'Node.js', 'Python', 'PostgreSQL'],

  // --------------------------------------------------------------------------
  // 2. SOCIAL & CONTACT LINKS
  // [EDIT: Replace URLs and email with your real profiles]
  // --------------------------------------------------------------------------
  links: {
    github: 'https://github.com/dushminmaleesha',
    githubHandle: '@dushminmaleesha',
    linkedin: 'https://linkedin.com/in/dushminmaleesha',
    linkedinHandle: '/in/dushminmaleesha',
    email: 'dushmin@example.com',
    resumeUrl: '/resume.pdf',
  },

  // --------------------------------------------------------------------------
  // 3. ABOUT SECTION
  // [EDIT: Update bio paragraphs, optional photo URL, and 3 quick facts]
  // --------------------------------------------------------------------------
  about: {
    // Set photoUrl to '/your-photo.jpg' (placed in the /public folder) to display your photo
    // alongside or instead of the 3D interactive portrait core. Leave empty ('') for 3D placeholder.
    photoUrl: '',
    lead: "I’m Dushmin Maleesha, a full-stack developer focused on turning complex systems into fast, tactile, and maintainable software.",
    paragraphs: [
      'My engineering approach bridges deep backend data integrity with modern, high-frame-rate frontend craft. From relational data modeling in PostgreSQL and asynchronous API design in Node.js & Python, to interactive React interfaces and WebGL/3D visualizations, I build with precision across the entire stack.',
      'I believe memorable software feels effortless—not because the underlying domain is simple, but because every boundary, query, and interaction was engineered with intention.',
    ],
    quickFacts: [
      {
        id: 'FACT_01',
        label: '// EXPERIENCE',
        value: '3+ Years',
        description:
          'Architecting full-stack web platforms, distributed APIs, and production database systems.',
      },
      {
        id: 'FACT_02',
        label: '// CORE_FOCUS',
        value: 'End-to-End',
        description:
          'Full lifecycle ownership from PostgreSQL schemas and Python/Node microservices to React UI.',
      },
      {
        id: 'FACT_03',
        label: '// BASE_NODE',
        value: 'Colombo, LK',
        description:
          'Collaborating with remote engineering teams globally across overlap timezones (UTC+5:30).',
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 4. SKILLS SECTION (Grouped by Frontend, Backend, Tools)
  // --------------------------------------------------------------------------
  skills: [
    {
      id: '02.1',
      category: 'Frontend',
      meta: '// UI, 3D & STATE',
      items: [
        { name: 'React', role: 'Core UI', isCore: true },
        { name: 'TypeScript', role: 'Type Safety', isCore: false },
        { name: 'Next.js', role: 'SSR / App Router', isCore: false },
        { name: 'Tailwind CSS', role: 'Design Systems', isCore: false },
        { name: 'Three.js / WebGL', role: '3D Graphics', isCore: false },
        { name: 'TanStack Query / Redux', role: 'Async State', isCore: false },
        { name: 'HTML5 & Modern CSS', role: 'A11y / Layout', isCore: false },
      ],
    },
    {
      id: '02.2',
      category: 'Backend',
      meta: '// APIS & DATA STORAGE',
      items: [
        { name: 'Node.js', role: 'Core Runtime', isCore: true },
        { name: 'Python', role: 'Core Services', isCore: true },
        { name: 'PostgreSQL', role: 'Core Database', isCore: true },
        { name: 'FastAPI / Django', role: 'Python APIs', isCore: false },
        { name: 'Express / NestJS', role: 'Node Frameworks', isCore: false },
        { name: 'Redis', role: 'Caching & Queues', isCore: false },
        { name: 'REST, GraphQL & WebSockets', role: 'Protocols', isCore: false },
      ],
    },
    {
      id: '02.3',
      category: 'Tools',
      meta: '// INFRASTRUCTURE & QA',
      items: [
        { name: 'Docker & Compose', role: 'Containers', isCore: false },
        { name: 'Git & GitHub Actions', role: 'CI/CD Pipelines', isCore: false },
        { name: 'Linux / Bash', role: 'Systems', isCore: false },
        { name: 'AWS / Cloudflare', role: 'Cloud Edge', isCore: false },
        { name: 'Prisma / SQLAlchemy', role: 'ORM & Migrations', isCore: false },
        { name: 'Vitest / Pytest', role: 'Automated Testing', isCore: false },
        { name: 'OpenTelemetry', role: 'Observability', isCore: false },
      ],
    },
  ],

  // --------------------------------------------------------------------------
  // 5. PROJECTS / WORK SECTION (3-4 Cards)
  // --------------------------------------------------------------------------
  projects: [
    {
      index: '01',
      category: '// DISTRIBUTED TELEMETRY',
      title: 'PulseGrid — Real-Time API Observability Engine',
      description:
        'High-throughput monitoring and anomaly detection platform ingesting 15k+ webhook events per minute with time-series rollups in PostgreSQL and live 3D topology streams.',
      archHighlight:
        'Cut p95 query latency by 64% via partitioned PostgreSQL tables and Redis write-behind buffers.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Three.js'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/dushminmaleesha',
    },
    {
      index: '02',
      category: '// AI & DATA PIPELINE',
      title: 'VectorLedger — Semantic Document & SQL Studio',
      description:
        'Hybrid search workspace pairing Python ingestion workers and pgvector embeddings with a keyboard-first React query workbench for technical repositories.',
      archHighlight:
        'Asynchronous FastAPI worker pool achieving sub-80ms hybrid BM25 + vector similarity retrieval.',
      tags: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'pgvector'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/dushminmaleesha',
    },
    {
      index: '03',
      category: '// WORKFLOW ORCHESTRATION',
      title: 'ChronosFlow — Distributed DAG & Job Scheduler',
      description:
        'Fault-tolerant task runner for engineering teams supporting cron triggers, visual dependency graphs, exponential backoff retries, and live terminal log streaming.',
      archHighlight:
        'Zero duplicate executions during node failover using PostgreSQL advisory locks.',
      tags: ['Node.js', 'TypeScript', 'React', 'PostgreSQL', 'Docker'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/dushminmaleesha',
    },
    {
      index: '04',
      category: '// FINTECH INFRASTRUCTURE',
      title: 'KinetixPay — Double-Entry Ledger & Billing API',
      description:
        'Multi-currency accounting microservice and merchant portal enforcing strict ACID transaction guarantees, webhook cryptographic signing, and immutable audit logs.',
      archHighlight:
        '100% mutation path test coverage using Pytest and isolated PostgreSQL test containers.',
      tags: ['Python', 'React', 'Node.js', 'PostgreSQL', 'Stripe API'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/dushminmaleesha',
    },
  ],

  // --------------------------------------------------------------------------
  // 6. RESUME / EXPERIENCE TIMELINE
  // --------------------------------------------------------------------------
  timeline: [
    {
      period: '2024 — PRESENT',
      badge: 'CURRENT',
      isCurrent: true,
      role: 'Full-Stack Software Engineer',
      organization: 'AetherLabs Systems · Hybrid',
      summary:
        'Architecting customer-facing analytics applications and distributed backend services across React, Node.js, Python, and PostgreSQL.',
      highlights: [
        'Designed and shipped a multi-tenant reporting engine in PostgreSQL & Node.js serving 40k+ daily active users with sub-120ms response times.',
        'Built reusable, accessible React component primitives and 3D data visualizations that accelerated feature delivery by 30%.',
        'Automated CI/CD pipelines with GitHub Actions and Docker for zero-downtime deployments.',
      ],
    },
    {
      period: '2022 — 2024',
      badge: 'EXPERIENCE',
      isCurrent: false,
      role: 'Software Developer (Full-Stack)',
      organization: 'Vertex Digital Studio · Remote',
      summary:
        'Developed custom web platforms, asynchronous data pipelines, and REST/GraphQL APIs for fintech and logistics clients.',
      highlights: [
        'Migrated legacy monolithic endpoints into modular Python (FastAPI) and Node.js services backed by PostgreSQL.',
        'Engineered real-time order telemetry dashboards in React with WebSocket synchronization and optimistic UI state.',
      ],
    },
    {
      period: '2019 — 2023',
      badge: 'EDUCATION',
      isCurrent: false,
      role: 'B.Sc. (Hons) in Computer Science & Software Engineering',
      organization: 'University / Institute of Technology',
      summary:
        'Focused on Distributed Systems, Relational Database Internals, Computer Graphics, Algorithms & Data Structures, and Software Architecture.',
      highlights: [],
    },
  ],
};

