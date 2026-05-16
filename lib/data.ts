export const profile = {
  name: "Nguyen Tan Tai",
  shortName: "Tan Tai",
  roleEyebrow: "BACKEND ENGINEER / CLOUD-NATIVE SYSTEMS",
  headline: "Systems that read clearly, run reliably, and age well.",
  intro:
    "Software Engineer - Ahamove, G1. Full-time since Feb 2026. I build Go services, cloud-native infrastructure, and backend workflows with product context.",
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
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Stack", href: "#stack" },
];

export const heroLedger = [
  { label: "ROLE", value: "Software Engineer · G1" },
  { label: "SINCE", value: "Feb 2026 · Full-time" },
  { label: "BASE", value: "Ho Chi Minh City, VN" },
];

export const snapshotCards = [
  {
    label: "ROLE",
    value: "Ahamove G1",
    detail: "Full-time since Feb 2026 — backend product delivery.",
  },
  {
    label: "SHIP",
    value: "Go services in production",
    detail: "Gin APIs across TANCA, ROBO-HI, and current Ahamove backend work.",
  },
  {
    label: "SCALE",
    value: "Kubernetes operated daily",
    detail: "Homelab cluster plus production deployments on AWS.",
  },
  {
    label: "DATA",
    value: "Queues, stores, object I/O",
    detail: "RabbitMQ, Redis, Postgres, MongoDB, MinIO, MQTT pipelines.",
  },
];

export const experiences = [
  {
    period: "Feb 2026 - Present",
    title: "Software Engineer, G1 - Ahamove",
    summary:
      "Full-time engineering role after the February transition, focused on backend product delivery and operational reliability.",
    details: [
      "Work on backend services where correctness, API contracts, traceability, and production behavior matter more than surface polish.",
      "Bring production Go, queueing, database, and cloud-native experience into a larger product engineering environment.",
    ],
    stack: ["Golang", "Backend APIs", "Operational reliability", "Product delivery"],
  },
  {
    period: "Aug 2024 - Sep 2025",
    title: "Backend Developer (Part-time) - TANCA.,JSC",
    summary:
      "Built and maintained Golang microservices for a large-scale HRM system after an intensive production onboarding program.",
    details: [
      "Developed scalable Gin APIs for HRM domains including talent management, attendance, leave, integrations, and payment-package availability.",
      "Designed talent evaluation flows with AI-assisted career path generation and multi-level performance matrices.",
      "Built partner-specific CSV export and integration features for enterprise clients including Xi Mang Ha Long and Decathlon.",
      "Worked with MongoDB, Jenkins CI/CD, Rancher, RabbitMQ, Swagger/OpenAPI, Docker, and Kubernetes in production-adjacent workflows.",
    ],
    stack: ["Go", "Gin", "MongoDB", "RabbitMQ", "Jenkins", "Rancher", "Kubernetes"],
  },
  {
    period: "Oct 2025 - Dec 2025",
    title: "Backend Developer (Part-time) - ROBO-HI VIET NAM",
    summary:
      "Worked on robot dispatcher communication and AWS-backed services for IoT command handling.",
    details: [
      "Improved MQTT-based communication by enhancing connection handling for multiple robot clients and command flows.",
      "Evaluated ROS 2 Humble and ROS 1 as alternatives to Redis Pub/Sub for robot message exchange.",
      "Contributed to distributed command dispatching logic for multiple robot types and fleets.",
    ],
    stack: ["AWS", "MQTT", "Node.js", "TypeScript", "Golang", "ROS 1", "ROS 2"],
  },
];

export const projects = [
  {
    caseLabel: "CASE 01 — SMAP · 2025",
    title: "Distributed analytics platform",
    shortTitle: "SMAP",
    image: "/social-media-analytics-dashboard-dark.png",
    situation:
      "Build a social analytics platform that ingests crawl events, enriches mentions with NLP and AI, and turns raw social data into searchable insights.",
    stack:
      "Go · Python/FastAPI · Kafka/RabbitMQ · Redis · Postgres · MongoDB · MinIO · Qdrant · K8s",
    outcome:
      "Microservices across identity, project, ingest, analytics, knowledge, notification, and UI surfaces with event pipelines, vector search, object storage, trace propagation, and homelab Kubernetes deployment.",
    repoUrl: "https://github.com/smap-hcmut/report",
    secondaryRepoUrl: "https://github.com/smap-hcmut/analysis-srv",
    liveUrl: "https://smap.tantai.dev",
  },
  {
    caseLabel: "CASE 02 — KANBAN · 2024",
    title: "Real-time collaboration board",
    shortTitle: "Kanban",
    image: "/kanban-board-dark-theme-project-management.jpg",
    situation:
      "Multi-user task board needing live state sync, file storage, persistence, and predictable collaboration behavior.",
    stack: "Go · Next.js · PostgreSQL · MinIO · WebSocket",
    outcome:
      "Backend events bridge socket clients to stored state with conflict-safe ordering and S3-compatible attachment handling.",
    repoUrl: "https://github.com/nguyentantai21042004/kanban-api",
    secondaryRepoUrl: "https://github.com/nguyentantai21042004/kanban-web",
    liveUrl: "https://kanban.tantai.dev",
  },
];

export const stackGroups = [
  { label: "LANGUAGES", value: "Go · TypeScript · Python" },
  { label: "BACKEND", value: "Gin · FastAPI · Next.js · REST · gRPC" },
  { label: "INFRASTRUCTURE", value: "Kubernetes · Docker · Terraform · Ansible · AWS" },
  { label: "DATA & MESSAGING", value: "Postgres · MongoDB · Redis · Kafka · RabbitMQ · MinIO · Qdrant · MQTT" },
];

export const credentials = [
  { label: "EDUCATION", value: "HCMUT · Computer Science · Sep 2022 - May 2026" },
  { label: "ENGLISH", value: "TOEIC 847" },
  { label: "SYSTEMS", value: "Linux · pfSense · VPN · ESXi · Harbor · Nginx" },
];
