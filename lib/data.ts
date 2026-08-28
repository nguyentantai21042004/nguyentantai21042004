export const profile = {
  name: "Nguyen Tan Tai",
  shortName: "Tan Tai",
  roleEyebrow: "DISTRIBUTED SYSTEMS / CLOUD-NATIVE BACKEND / SYSTEMS ENGINEERING",
  headline: "Systems that read clearly, run reliably, and age well.",
  intro:
    "Specializing in high-concurrency Go microservices, event-driven distributed architectures, cloud-native infrastructure, and systems programming in Rust. Focused on building resilient backends that power mission-critical platforms.",
  location: "Ho Chi Minh City, VN",
  email: "nguyentantai.dev@gmail.com",
  phone: "0369169678",
  portfolio: "https://tantai.dev",
  linkedinLabel: "linkedin.com/in/ngtantai2104",
  linkedin: "https://linkedin.com/in/ngtantai2104",
  github: "https://github.com/nguyentantai21042004",
  cvPath: "/CV-NGUYEN_TAN_TAI.pdf",
  avatarPath: "/avatar.jpg",
};

export const navItems = [
  { label: "Ledger", href: "#ledger" },
  { label: "Metrics", href: "#metrics" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Stack", href: "#stack" },
];

export const heroLedger = [
  { label: "ROLE", value: "Software Engineer · G1" },
  { label: "SINCE", value: "Feb 2026 · Full-time" },
  { label: "BASE", value: "Ho Chi Minh City, VN" },
  { label: "STATUS", value: "Active in Production" },
];

export const keyMetrics = [
  {
    value: "50+",
    label: "Production Releases",
    detail: "Order lifecycle, truck shifts, e-contracts & routing",
  },
  {
    value: "9",
    label: "SMAP Microservices",
    detail: "Event-driven social analytics, Qdrant RAG vector pipeline",
  },
  {
    value: "<1ms",
    label: "Routing Latency",
    detail: "High-throughput Go evaluation & real-time OSM toll calculation",
  },
  {
    value: "Zero",
    label: "Balance Leakage",
    detail: "Automated debt sweeping & decoupled reimbursement audits",
  },
];

export const snapshotCards = [
  {
    label: "PRODUCTION SCALE",
    value: "Ahamove Core Backend",
    detail:
      "High-concurrency Go services powering order lifecycle, shift rentals, routing, and paperless contracting.",
  },
  {
    label: "BUSINESS IMPACT",
    value: "Onboarding & Fleet Velocity",
    detail:
      "Cut partner contracting from days to minutes; prevented fleet deadhead mileage during order pooling.",
  },
  {
    label: "SYSTEMS & TOOLS",
    value: "Rust & Desktop Native",
    detail:
      "Zero-telemetry offline-first MongoDB GUI in Tauri 2/Rust with embedded mongosh and visual explain plans.",
  },
  {
    label: "DISTRIBUTED ARCHITECTURE",
    value: "Kafka, Queues, pgvector",
    detail:
      "Serverless edge workers, dual-store relational + vector pipelines, and event-driven microservices.",
  },
];

export const experiences = [
  {
    period: "Feb 2026 - Present",
    title: "Software Engineer, G1 — Ahamove",
    company: "Ahamove",
    roleLevel: "Level G1 · Core Logistics Backend",
    location: "Ho Chi Minh City, VN",
    logoPath: "/ahamove-logo.svg",
    summary:
      "Core backend engineer delivering high-scale logistics, order management, partner operations, and financial reconciliation in a nationwide delivery network.",
    details: [
      "Truck Rental Shifts: Architected on-demand vehicle hiring by time and distance blocks (hours + km bundles) with checkpoint visual evidence validation and automated odometer overage billing, unlocking a key corporate B2B logistics revenue stream.",
      "Fleet Utilization: Implemented intelligent cancellation restriction windows for pooling orders in IDLE status, protecting driver earnings and preventing vehicle idle fragmentation.",
      "Electronic Contracting Platform: Built greenfield econtract service with dynamic legal template generation for Household Businesses (Hộ Kinh Doanh) and Enterprises; engineered secure CMC webhook proxy with audit logging and automated contract renewal.",
      "High-Throughput Routing: Migrated legacy routing endpoints to Go for sub-millisecond route evaluations; integrated OpenStreetMap (OSM) real-time toll and ferry pricing lookups to eliminate fare estimation discrepancies.",
      "Franchise Partner Portal: Designed internal smart routing and server-to-server (S2S) debt query endpoints for franchise fleet owners; instrumented behavioral analytics via PostHog.",
      "Financial Audit & Reconciliation: Decoupled reimbursement payments from standard order revenue and implemented an automated debt sweeping mechanism to eliminate balance leakage.",
    ],
    stack: [
      "Golang",
      "Gin",
      "PostgreSQL",
      "MongoDB",
      "RabbitMQ",
      "Kafka",
      "Redis",
      "Kubernetes",
      "PostHog",
      "OSM",
    ],
  },
  {
    period: "Oct 2025 - Dec 2025",
    title: "Backend Developer (Part-time) — ROBO-HI VIET NAM (ZMP Inc.)",
    company: "ROBO-HI (ZMP Inc.)",
    roleLevel: "Cloud Dispatch & Robotics IoT",
    location: "Tokyo, JP (Remote)",
    logoPath: "/robo-hi-logo.png",
    summary:
      "Engineered IoT communication layers and cloud dispatching services connecting cloud command centers to autonomous robot fleets on AWS.",
    details: [
      "Improved MQTTConnection architecture in Node.js/TypeScript to support concurrent multi-robot connection pooling and command queues.",
      "Researched ROS 2 (Humble) and ROS 1 DDS communication layers as low-latency, high-performance replacements for Redis Pub/Sub.",
      "Contributed to distributed fleet command dispatching workflows for multi-type robot fleets.",
    ],
    stack: ["AWS", "MQTT", "Node.js", "TypeScript", "Golang", "ROS 1", "ROS 2", "Redis"],
  },
  {
    period: "Aug 2024 - Sep 2025",
    title: "Backend Developer (Part-time) — TANCA.,JSC",
    company: "TANCA.,JSC",
    roleLevel: "Enterprise HRM SaaS Backend",
    location: "Ho Chi Minh City, VN",
    logoPath: "/tanca-logo.svg",
    summary:
      "Developed high-throughput Golang (Gin) microservices for an enterprise Human Resource Management (HRM) SaaS platform.",
    details: [
      "Designed and delivered Talent Management services featuring multi-tier performance evaluations and automated career matrix generation.",
      "Engineered enterprise ETL export pipelines and partner CSV integrations for enterprise clients (Xi Măng Hạ Long, Decathlon).",
      "Developed cross-system subscription middleware validating company feature packages and user quotas.",
      "Maintained core attendance and leave services with full compliance with Vietnamese labor laws.",
    ],
    stack: [
      "Golang",
      "Gin",
      "MongoDB",
      "RabbitMQ",
      "Jenkins",
      "Rancher",
      "Docker",
      "Kubernetes",
    ],
  },
];

export type ProjectCategory = "all" | "systems" | "distributed" | "cloud" | "tools";

export type Project = {
  caseLabel: string;
  title: string;
  shortTitle: string;
  category: ProjectCategory;
  image?: string;
  badge?: string;
  metrics?: { label: string; value: string }[];
  thesis?: boolean;
  services?: string[];
  situation: string;
  problemStatement?: string;
  highlights?: string[];
  stack: string;
  architecture?: string;
  outcome: string;
  repoUrl: string;
  secondaryRepoUrl?: string;
  liveUrl?: string;
};

export const projectCategories: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "All Works" },
  { id: "systems", label: "Systems & Low-Level" },
  { id: "distributed", label: "Distributed & Backend" },
  { id: "cloud", label: "Cloud & Infrastructure" },
  { id: "tools", label: "Developer Tools & AI" },
];

export const projects: Project[] = [
  {
    caseLabel: "CASE 01 — CLOUD-NATIVE & VECTOR · 2026",
    title: "Winnow — Distributed Technical Reading Warehouse",
    shortTitle: "Winnow",
    category: "cloud",
    badge: "Cloudflare · pgvector · Hono",
    image: "/winnow-cover.svg",
    metrics: [
      { label: "CORE DB", value: "25 Tables" },
      { label: "VECTOR", value: "pgvector" },
      { label: "RUNTIME", value: "CF Workers" },
    ],
    situation:
      "Autonomous reading warehouse that continuously polls research sources, triages 100% of publications, extracts full text, and resurfaces knowledge via citation graphs.",
    problemStatement:
      "Modern engineering research is scattered across arXiv, conferences, and technical blogs. Engineers drown in noisy releases while missing foundational systems paradigms. Winnow solves this by autonomously triaging 100% of incoming sources by metadata, extracting and deep-parsing only the top 5% that matter, and building an interactive vector knowledge graph.",
    stack:
      "TypeScript · Cloudflare Workers · Cloudflare Queues · Hono · Neon Postgres (pgvector) · Python",
    architecture:
      "Strict 2-database boundary: CORE schema (25 PostgreSQL relational tables tracking authors, citations, and triage logs) and VECTOR schema (pgvector HNSW index for high-dimensional semantic search). Async event ingestion runs on Cloudflare Queues with sub-second Workers dispatch.",
    highlights: [
      "Serverless edge ingest running on Cloudflare Workers (Hono framework) with Cloudflare Queues for rate-limiting and async background triage.",
      "Custom arXiv LaTeX/HTML extractor and Python deep extraction service isolating complex academic PDF document trees.",
      "Citation resurfacing engine that traverses reference graphs to identify foundational prerequisite papers for any modern AI/systems publication.",
    ],
    outcome:
      "Indexes thousands of research articles with sub-15ms semantic vector retrieval, running completely serverless with zero continuous database compute idle cost.",
    repoUrl: "https://github.com/nguyentantai21042004/winnow",
  },
  {
    caseLabel: "CASE 02 — GRADUATION THESIS · HCMUT 2025-2026",
    title: "SMAP — Distributed Social Analytics Platform",
    shortTitle: "SMAP",
    category: "distributed",
    badge: "Graduation Thesis · High Honors",
    image: "/social-media-analytics-dashboard-dark.png",
    thesis: true,
    services: [
      "identity-srv",
      "project-srv",
      "ingest-srv",
      "analysis-srv",
      "knowledge-srv",
      "notification-srv",
      "scraper-srv",
      "shared-libs",
      "web-ui",
    ],
    metrics: [
      { label: "SERVICES", value: "9 Microservices" },
      { label: "DEFENSE", value: "June 2026" },
      { label: "SEARCH", value: "Qdrant Vector" },
    ],
    situation:
      "Distributed social listening and brand intelligence platform processing high-throughput crawl streams with NLP analysis, vector search, and real-time alert dispatching.",
    problemStatement:
      "Processing multi-platform social media streams (YouTube, TikTok, Facebook) requires handling irregular burst traffic, deduping millions of cross-platform comments, extracting multilingual sentiment, and executing sub-second semantic search across massive unstructured document collections without system collapse.",
    stack:
      "Go · Python/FastAPI · Kafka · RabbitMQ · Redis · Postgres · MongoDB · MinIO · Qdrant · Kubernetes",
    architecture:
      "Decoupled 9-microservice topology connected via Kafka & RabbitMQ event streams. Ingestion workers push raw mentions into MinIO and MongoDB, while analysis workers execute Python NLP enrichment and vectorize embeddings into Qdrant for RAG-powered query synthesis.",
    highlights: [
      "Event-driven asynchronous pipeline with Kafka for high-volume ingest topics and RabbitMQ for transactional work queues with dead-letter exchanges.",
      "Vectorized RAG pipeline combining Qdrant cosine similarity search with LLM synthesis for instant sentiment summarization.",
      "Production-grade resilience with Prometheus RED metrics, Grafana dashboards, automated K8s horizontal pod autoscaling, and zero-downtime rolling updates.",
    ],
    outcome:
      "Successfully defended HCMUT Capstone Thesis in June 2026 with high honors. Operating continuously on private Kubernetes homelab infrastructure.",
    repoUrl: "https://github.com/smap-hcmut/report",
    secondaryRepoUrl: "https://github.com/smap-hcmut/analysis-srv",
    liveUrl: "https://smap.tantai.dev",
  },
  {
    caseLabel: "CASE 03 — AI PIPELINE & HARDWARE ACCEL · 2026",
    title: "Caption Flow — Apple Silicon Video Subtitle & AI Summary Engine",
    shortTitle: "Caption Flow",
    category: "tools",
    badge: "Apple Metal · Whisper · DeepSeek",
    image: "/caption-flow-cover.svg",
    metrics: [
      { label: "SPEED", value: "<0.3x Realtime" },
      { label: "ACCELERATION", value: "Metal GPU" },
      { label: "AI ENGINE", value: "DeepSeek + Gemini" },
    ],
    situation:
      "Apple Silicon hardware-accelerated video transcription, subtitle burning, and structured AI summarization engine.",
    problemStatement:
      "Transcribing long-form video lectures and burning stylized subtitles usually requires expensive cloud APIs or CPU-bound local models that cause thermal throttling. Caption Flow leverages Apple Silicon unified memory and Metal GPU acceleration to execute local transcription faster than real-time, then summarizes transcripts into structured Vietnamese documents.",
    stack: "Go · FFmpeg · whisper.cpp · Apple Metal · DeepSeek API · Gemini API",
    architecture:
      "Go CLI coordinating whisper.cpp with Apple Metal shaders for voice-activity detection (VAD) and transcription, piping raw subtitle cues into FFmpeg with VideoToolbox hardware encoding (h264_videotoolbox), backed by a multi-provider LLM fallback router (DeepSeek R1 + Gemini 2.5 Flash).",
    highlights: [
      "Metal GPU acceleration achieving sub-0.3x realtime transcription speeds on Apple M4 Pro with zero CPU thermal throttling.",
      "Zero-copy subtitle burning pipeline using FFmpeg VideoToolbox hardware encoders directly in local memory.",
      "Resilient LLM synthesis client with exponential backoff, rate-limit quota switching, and formatted DOCX export.",
    ],
    outcome:
      "Processes a 1-hour 4K lecture video in under 18 minutes locally with zero external API fees for transcription and automatic failover for document generation.",
    repoUrl: "https://github.com/nguyentantai21042004/caption-flow",
  },
  {
    caseLabel: "CASE 04 — INFRASTRUCTURE AS CODE · 2026",
    title: "Homelab IaC — Production Bare-Metal Automation",
    shortTitle: "Homelab IaC",
    category: "cloud",
    badge: "Terraform · Ansible · ESXi",
    image: "/homelab-cover.svg",
    metrics: [
      { label: "PROVISION", value: "Terraform" },
      { label: "CONFIG", value: "Ansible" },
      { label: "CLUSTER", value: "Kubernetes" },
    ],
    situation:
      "Production-grade bare-metal infrastructure as code provisioning private Kubernetes clusters, storage, and networking on VMware ESXi.",
    problemStatement:
      "Testing distributed architectures, high-availability databases, and network partition scenarios on commercial clouds (AWS/GCP) incurs massive continuous costs. Homelab IaC creates a production-equivalent on-premise cloud platform with fully automated, repeatable code-driven provisioning.",
    stack: "Terraform · Ansible · VMware ESXi · Kubernetes · pfSense · WireGuard · Harbor",
    architecture:
      "Bare-metal hypervisor (VMware ESXi 8.0) orchestrated via Terraform vSphere provider, bootstrapped by idempotent Ansible playbooks that configure Linux kernels, deploy a k3s Kubernetes cluster with Longhorn distributed storage, pfSense firewall routing, and WireGuard mesh VPN.",
    highlights: [
      "100% automated provisioning: From bare VM creation to Kubernetes cluster join with zero manual ClickOps.",
      "Multi-zone network topology with pfSense VLAN isolation, WireGuard site-to-site tunnels, and private Harbor container registry.",
      "Full observability stack running Prometheus, Grafana, Loki, and alertmanager monitoring 38 service targets with 99.98% uptime.",
    ],
    outcome:
      "Hosts production-grade staging services, SMAP thesis cluster, and personal dev registries with self-healing failover and zero cloud runtime bills.",
    repoUrl: "https://github.com/nguyentantai21042004/homelab-iac",
    secondaryRepoUrl: "https://github.com/nguyentantai21042004/onprem-document",
  },
  {
    caseLabel: "CASE 05 — NATIVE DESKTOP GUI · 2026",
    title: "Sift — Offline-First Native Desktop MongoDB GUI",
    shortTitle: "Sift",
    category: "systems",
    badge: "Tauri 2 · Rust · React",
    image: "/sift-cover.svg",
    metrics: [
      { label: "FRAMEWORK", value: "Tauri 2" },
      { label: "TELEMETRY", value: "Zero" },
      { label: "TUNNEL", value: "SSH & TLS" },
    ],
    situation:
      "Offline-first, zero-telemetry native desktop MongoDB management tool with embedded mongosh, visual explain plans, and SSH bastion tunneling.",
    problemStatement:
      "Existing GUI database tools (MongoDB Compass, Studio 3T) are notoriously memory-heavy Electron wrappers that consume hundreds of megabytes of RAM and leak query telemetry to third-party servers. Sift provides a fast, lightweight, privacy-focused native desktop workbench built in Rust and Tauri 2.",
    stack: "Rust · Tauri 2 · React · TypeScript · Monaco Editor · Tailwind CSS",
    architecture:
      "Rust core handling native MongoDB wire protocol drivers and encrypted SSH/TLS tunneling with zero external HTTP telemetry. React frontend communicates over high-performance IPC with virtualized data grids and Monaco aggregation query editors.",
    highlights: [
      "100% offline & air-gapped ready: Zero phone-home telemetry, zero tracking scripts, standalone executable bundle under 18 MB.",
      "Visual Aggregation Pipeline Builder & Explain Plan inspector with stage-by-stage document preview and index usage analysis.",
      "Built-in SSH bastion tunnel manager with key-based authentication, auto-reconnect, and multi-cluster connection profiles.",
    ],
    outcome:
      "Delivers instantaneous startup (<150ms), consumes under 25 MB idle RAM (compared to ~400 MB in Electron), and provides secure production database exploration.",
    repoUrl: "https://github.com/nguyentantai21042004/sift",
  },
  {
    caseLabel: "CASE 06 — REAL-TIME COLLABORATION · 2024",
    title: "Kanban Real-Time — Collaborative Task Management",
    shortTitle: "Kanban",
    category: "tools",
    badge: "Go · WebSockets · Next.js",
    image: "/kanban-cover.svg",
    metrics: [
      { label: "SYNC", value: "WebSockets" },
      { label: "ATTACHMENTS", value: "MinIO S3" },
      { label: "DATABASE", value: "PostgreSQL" },
    ],
    situation:
      "Collaborative real-time task board engine with WebSockets, optimistic UI updates, MinIO S3 attachments, and PostgreSQL transactional persistence.",
    problemStatement:
      "Multi-user collaborative project management boards frequently suffer from desynchronized state, race conditions during rapid card reordering, and heavy attachment upload latencies. Kanban Real-Time provides instant sub-millisecond collaboration with atomic conflict resolution.",
    stack: "Go · Next.js 14 · WebSockets · MinIO · PostgreSQL",
    architecture:
      "Go WebSocket Hub maintaining concurrent client connection pools with goroutine workers and sync.RWMutex. State mutations are persisted in PostgreSQL with row-level locking (SELECT FOR UPDATE) and optimistic sequence checks, while attachments are streamed via MinIO S3 presigned URLs.",
    highlights: [
      "High-throughput Go WebSocket broadcast hub capable of fanning out hundreds of state updates per second with zero data race hazards.",
      "Optimistic Next.js 14 client state reconciliation with automatic rollback on network partition or server rejection.",
      "Direct S3-compatible attachment storage using MinIO presigned upload URLs to eliminate server memory buffering.",
    ],
    outcome:
      "Sub-10ms state propagation across distributed browsers with zero lost updates and verified conflict recovery.",
    repoUrl: "https://github.com/nguyentantai21042004/kanban-api",
    secondaryRepoUrl: "https://github.com/nguyentantai21042004/kanban-web",
    liveUrl: "https://kanban.tantai.dev",
  },
];

export const stackGroups = [
  {
    label: "LANGUAGES",
    value: "Golang (Production) · Rust · TypeScript / Node.js · Python · C++ · SQL",
  },
  {
    label: "BACKEND & DISTRIBUTED",
    value: "Gin · FastAPI · Hono · REST · gRPC · WebSockets · stdio JSON-RPC",
  },
  {
    label: "SYSTEMS & OS",
    value: "macOS DriverKit · IOKit · HID++ · CGEventTap · POSIX · Launchd",
  },
  {
    label: "DATA & STORAGE",
    value: "PostgreSQL · pgvector · MongoDB · Redis · Qdrant · SQLite (WAL) · MinIO",
  },
  {
    label: "MESSAGING & QUEUES",
    value: "Kafka · RabbitMQ · Cloudflare Queues · Redis Streams · MQTT",
  },
  {
    label: "CLOUD & INFRASTRUCTURE",
    value: "Kubernetes · Docker · Terraform · Ansible · Cloudflare Workers · AWS · ESXi",
  },
];

export const credentials = [
  {
    label: "EDUCATION",
    value: "HCMUT (ĐHQG-HCM) · Computer Science · Sep 2022 - May 2026 (Thesis Defended June 2026)",
  },
  { label: "ENGLISH", value: "TOEIC 847" },
  { label: "SYSTEMS & NETWORKING", value: "Linux · pfSense · WireGuard / Tailscale · Harbor · Nginx" },
];

