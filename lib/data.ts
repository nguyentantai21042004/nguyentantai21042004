// Centralized data file for easy maintenance and updates
import type { LucideIcon } from "lucide-react";
import { Server, Cloud, Database, GitBranch } from "lucide-react";

// ============ PERSONAL INFO ============
export const personalInfo = {
  name: "Nguyen Tan Tai",
  title: "Software Engineer",
  subtitle: "Cloud-Native & Backend Developer",
  location: "Ho Chi Minh City, Vietnam",
  email: "nguyentantai.dev@gmail.com",
  phone: "0369169678",
  portfolio: "tantai.dev",
  linkedin: "https://linkedin.com/in/ngtantai2104",
  github: "https://github.com/nguyentantai21042004",
  cvPath: "/CV-NGUYEN_TAN_TAI.pdf",
  avatarPath: "/avatar.jpg",
  available: true,
  yearsOfExperience: "1,5+",
  projectsCount: "2+",
};

export const summary = {
  intro: "Software engineer with hands-on experience building",
  highlight1: "microservices using Golang",
  middle: "in production environments. Currently focusing on",
  highlight2: "Cloud & Cloud-Native Engineering",
  outro: ", Kubernetes, and distributed systems.",
};

// ============ ABOUT HIGHLIGHTS ============
export interface Highlight {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const highlights: Highlight[] = [
  {
    icon: Server,
    title: "Microservices",
    description:
      "Building production microservices with Golang (Gin), Python (FastAPI), Node.js (TypeScript) for various domains.",
  },
  {
    icon: Cloud,
    title: "Cloud-Native",
    description:
      "Deep focus on Kubernetes, distributed systems, and scalable cloud infrastructure with hands-on homelab experience.",
  },
  {
    icon: Database,
    title: "Infrastructure",
    description:
      "Built and operated Kubernetes homelab on ESXi with Terraform provisioning and Ansible configuration management.",
  },
  {
    icon: GitBranch,
    title: "AWS Production",
    description:
      "Production experience with AWS services including EC2, RDS, S3, and CloudWatch for robotic systems.",
  },
];

// ============ EXPERIENCE ============
export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
  technologies: string[];
  type: "work" | "education"; // Added type to differentiate
}

export const experiences: Experience[] = [
  {
    company: "ROBO-HI VIET NAM CO.,LTD",
    role: "Backend Developer (Part-time)",
    period: "Oct 2025 - Dec 2025",
    description: [
      "Worked in AWS environment supporting database, logging, and command processing for robotic systems",
      "Joined Dispatcher team focusing on IoT robot command orchestration using Python (FastAPI) and Node.js (TypeScript)",
      "Developed backend services for AI tasks and robot logic coordination with real-time communication",
    ],
    technologies: ["Python", "FastAPI", "AWS", "IoT", "TypeScript", "Node.js"],
    type: "work",
  },
  {
    company: "TANCA.,JSC",
    role: "Backend Developer (Part-time)",
    period: "Aug 2024 - Sep 2025",
    description: [
      "Completed 1-month intensive training on Golang (Gin), MongoDB, Mockery, Jenkins CI/CD, Rancher, RabbitMQ, and Swagger/OpenAPI",
      "Developed and maintained Golang (Gin) microservices in production for large-scale HRM system",
      "Designed and implemented Talent Management service with AI-powered career path generation",
      "Maintained attendance and leave management services based on Vietnam labor laws",
      "Built custom integrations for enterprise clients including Ha Long Cement and Decathlon",
      "Developed Payment Package middleware for service availability validation from multiple system sources",
    ],
    technologies: [
      "Golang",
      "Gin",
      "MongoDB",
      "Jenkins",
      "RabbitMQ",
      "Rancher",
      "Docker",
      "Kubernetes",
    ],
    type: "work",
  },
  {
    company: "Ho Chi Minh City University of Technology (HCMUT)",
    role: "Bachelor of Engineering - Computer Science",
    period: "2022 - 2026 (Expected)",
    description: [
      "Focus on Software Engineering and Distributed Systems",
      "GPA: 3.2/4.0",
      "Active member of HCMUT Information Security Club",
    ],
    technologies: [
      "Algorithms",
      "Data Structures",
      "System Design",
      "Networks",
    ],
    type: "education",
  },
];

// ============ DEPLOYED PROJECTS ============
export interface DeployedProject {
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  docsUrl?: string;
  featured?: boolean;
}

export const deployedProjects: DeployedProject[] = [
  {
    title: "SMAP - Social Media Analytics Platform",
    description:
      "Distributed analytics system for social media with high-throughput event-driven architecture and AI-powered insights extraction.",
    longDescription:
      "Core engine processing raw data asynchronously, extracting insights from YouTube, TikTok, Facebook. Features idempotency patterns and failure isolation for fault tolerance.",
    image: "/social-media-analytics-dashboard-dark.png",
    technologies: [
      "Golang (Gin)",
      "RabbitMQ",
      "Redis",
      "PostgreSQL",
      "SQLBoiler",
      "Docker",
    ],
    liveUrl: "https://smap.ngtantai.pro",
    githubUrl: "https://github.com/nguyentantai21042004/analytics-engine",
    docsUrl: "https://github.com/nguyentantai21042004/analytics-engine#readme",
    featured: true,
  },
  {
    title: "SMAP Speech-to-Text Worker",
    description:
      "Specialized AI worker service handling compute-intensive speech-to-text conversion from video/audio collected from social platforms.",
    image: "/placeholder.svg",
    technologies: ["Python", "AI/ML", "MinIO (S3)", "Worker Pattern"],
    githubUrl: "https://github.com/nguyentantai21042004/speech-to-text",
    featured: false,
  },
  {
    title: "Kanban Board - Real-time Collaboration",
    description:
      "Modern task management with real-time WebSocket broadcasting for instant state sync across multiple clients.",
    image: "/kanban-board-dark-theme-project-management.jpg",
    technologies: [
      "Golang (Gin)",
      "Next.js 14",
      "PostgreSQL",
      "WebSocket",
      "MinIO",
    ],
    liveUrl: "https://kanban.ngtantai.pro",
    githubUrl: "https://github.com/nguyentantai21042004/kanban-api",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio deployed on self-managed homelab infrastructure with automated CI/CD pipeline via Cloudflare Tunnel.",
    image: "/portfolio-website-dark-theme-developer.jpg",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Docker",
      "Nginx",
    ],
    liveUrl: "https://tantai.dev",
    githubUrl: "https://github.com/nguyentantai21042004/portfolio",
    featured: false,
  },
];

// ============ ACADEMIC REPOS ============
export interface AcademicRepo {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  docsUrl?: string;
  highlight?: string;
}

export const academicRepos: AcademicRepo[] = [
  {
    title: "Homelab IaC (Infrastructure as Code)",
    description:
      "Automated VM provisioning and configuration on ESXi using Terraform + Ansible workflow. Manages complete infrastructure lifecycle from VM creation to K8s cluster setup.",
    technologies: ["Terraform", "Ansible", "VMware ESXi", "Linux", "Shell"],
    githubUrl: "https://github.com/nguyentantai21042004/homelab-iac",
    highlight:
      "Full infrastructure automation - simulating enterprise cloud environment",
  },
  {
    title: "On-premise Architecture Documentation",
    description:
      "Centralized knowledge base documenting network architecture, NAT/VPN configuration, and operational procedures for homelab environment.",
    technologies: ["Markdown", "Network Topology", "System Design"],
    githubUrl: "https://github.com/nguyentantai21042004/onprem-document",
    highlight:
      "Documentation as Code - version-controlled infrastructure knowledge",
  },
  {
    title: "Kanban Web Frontend",
    description:
      "Modern React frontend with Next.js 14 App Router, real-time WebSocket integration, and drag-and-drop task management.",
    technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "WebSocket"],
    githubUrl: "https://github.com/nguyentantai21042004/kanban-web",
  },
  {
    title: "Analytics Engine Backend",
    description:
      "Event-driven microservice architecture with RabbitMQ message queue, implementing idempotency and failure isolation patterns.",
    technologies: ["Golang", "RabbitMQ", "PostgreSQL", "Redis"],
    githubUrl: "https://github.com/nguyentantai21042004/analytics-engine",
    highlight:
      "Production-grade patterns: Event-driven, Idempotency, Failure Isolation",
  },
];

// ============ SKILLS ============
export interface Skill {
  name: string;
  category: string;
  description: string;
  proficiency: "Learning" | "Comfortable" | "Proficient" | "Expert";
}

export const skills: Skill[] = [
  {
    name: "Golang (Gin)",
    category: "Backend",
    description:
      "Production experience at TANCA building HRM microservices. Strong understanding of concurrency patterns, channels, goroutines, and clean architecture.",
    proficiency: "Proficient",
  },
  {
    name: "Python (FastAPI)",
    category: "Backend",
    description:
      "Used at ROBO-HI for AI tasks and IoT backend services. Familiar with async programming, Pydantic validation, and worker patterns.",
    proficiency: "Comfortable",
  },
  {
    name: "Node.js (TypeScript)",
    category: "Backend",
    description:
      "Building IoT robot coordination logic at ROBO-HI. Strong TypeScript typing and experience with Express patterns.",
    proficiency: "Comfortable",
  },
  {
    name: "RESTful APIs",
    category: "Backend",
    description:
      "Designed and implemented numerous production APIs with proper versioning, error handling, Swagger/OpenAPI documentation.",
    proficiency: "Proficient",
  },
  {
    name: "Kubernetes",
    category: "Cloud & DevOps",
    description:
      "Built and operated homelab K8s cluster on ESXi. Experienced with Deployments, Services, Ingress, ConfigMaps, Secrets, and Helm charts.",
    proficiency: "Comfortable",
  },
  {
    name: "Docker",
    category: "Cloud & DevOps",
    description:
      "Production containerization at TANCA & homelab. Multi-stage builds, docker-compose, image optimization, and container orchestration.",
    proficiency: "Proficient",
  },
  {
    name: "AWS",
    category: "Cloud & DevOps",
    description:
      "Production experience at ROBO-HI. Familiar with EC2, RDS, S3, Lambda, CloudWatch for robotic system infrastructure.",
    proficiency: "Comfortable",
  },
  {
    name: "Terraform",
    category: "Cloud & DevOps",
    description:
      "IaC for homelab VM provisioning on ESXi. Understanding of state management, providers, and infrastructure lifecycle.",
    proficiency: "Learning",
  },
  {
    name: "Ansible",
    category: "Cloud & DevOps",
    description:
      "Configuration management for homelab. Automating Docker/K8s installation, system configs using playbooks and roles.",
    proficiency: "Learning",
  },
  {
    name: "Jenkins CI/CD",
    category: "Cloud & DevOps",
    description:
      "Built production pipelines at TANCA for automated testing, building, and deployment to Rancher-managed K8s.",
    proficiency: "Comfortable",
  },
  {
    name: "Rancher",
    category: "Cloud & DevOps",
    description:
      "K8s cluster management at TANCA. Familiar with workload deployment, monitoring, and multi-cluster operations.",
    proficiency: "Comfortable",
  },
  {
    name: "ESXi / VMware",
    category: "Cloud & DevOps",
    description:
      "Running self-managed homelab hypervisor hosting K8s cluster, databases, and various development services.",
    proficiency: "Comfortable",
  },
  {
    name: "MongoDB",
    category: "Database",
    description:
      "Primary database at TANCA for HRM system. Experienced with aggregation pipelines, indexing strategies, and schema design.",
    proficiency: "Proficient",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    description:
      "Used in personal projects (SMAP, Kanban). Strong SQL skills, query optimization, and relational schema design.",
    proficiency: "Comfortable",
  },
  {
    name: "Redis",
    category: "Database",
    description:
      "Caching and pub/sub at SMAP project. Familiar with cache invalidation strategies, sorted sets, and session management.",
    proficiency: "Comfortable",
  },
  {
    name: "RabbitMQ",
    category: "Database",
    description:
      "Message queue at TANCA & SMAP for async processing, service decoupling, and event-driven architecture.",
    proficiency: "Comfortable",
  },
  {
    name: "Git",
    category: "Tools",
    description:
      "Daily workflow with branching strategies (GitFlow), rebasing, cherry-picking, and collaborative PR-based development.",
    proficiency: "Proficient",
  },
  {
    name: "Nginx",
    category: "Tools",
    description:
      "Reverse proxy and load balancing for homelab. SSL termination, upstream configuration, and caching setup.",
    proficiency: "Comfortable",
  },
  {
    name: "Cloudflare",
    category: "Tools",
    description:
      "DNS management, CDN, SSL certificates, and Tunnel configuration for exposing homelab services to internet.",
    proficiency: "Comfortable",
  },
];

export const skillCategories = [
  "All",
  "Backend",
  "Cloud & DevOps",
  "Database",
  "Tools",
];

// ============ NAV ITEMS ============
export const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Repositories", href: "#repositories" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];
