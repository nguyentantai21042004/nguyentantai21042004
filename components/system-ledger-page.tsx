"use client";

import Image from "next/image";
import { useState, useCallback, useEffect, type ReactNode } from "react";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Copy,
  Cpu,
  Download,
  ExternalLink,
  FileText,
  Github,
  Globe,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Maximize2,
  SlidersHorizontal,
  Terminal,
  X,
} from "lucide-react";
import { EventTracker } from "@/components/event-tracker";
import {
  credentials,
  experiences,
  heroLedger,
  keyMetrics,
  navItems,
  profile,
  projectCategories,
  projects,
  snapshotCards,
  stackGroups,
  type Project,
  type ProjectCategory,
} from "@/lib/data";

const sectionShell = "mx-auto w-full max-w-[1248px] px-5 sm:px-8 lg:px-10";

function SectionHeading({
  id,
  index,
  title,
  eyebrow,
}: {
  id: string;
  index: string;
  title: string;
  eyebrow: string;
}) {
  return (
    <div id={id} className="scroll-mt-24">
      <p className="font-mono text-xs font-bold tracking-normal text-ledger-teal">
        {index} / {eyebrow}
      </p>
      <h2 className="mt-3 max-w-3xl font-serif text-3xl font-bold leading-[1.1] text-ledger-ink sm:text-[32px]">
        {title}
      </h2>
    </div>
  );
}

function ActionLink({
  href,
  children,
  variant = "primary",
  trackId,
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark";
  trackId?: string;
  external?: boolean;
}) {
  const variantClass =
    variant === "primary"
      ? "border-ledger-teal bg-ledger-teal text-white hover:bg-ledger-teal-dark"
      : variant === "dark"
        ? "border-ledger-amber bg-ledger-amber text-ledger-ink hover:bg-[#d3913c]"
        : "border-ledger-line bg-white text-ledger-ink hover:border-ledger-teal";

  return (
    <a
      href={href}
      data-track={trackId}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`tactile-press inline-flex min-h-9 items-center justify-center gap-2 rounded-md border px-4 text-[13px] font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-amber ${variantClass}`}
    >
      {children}
    </a>
  );
}

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  return (
    <button
      onClick={handleCopy}
      type="button"
      data-track="copy_email_button"
      className="tactile-press inline-flex min-h-9 items-center justify-center gap-2 rounded-md border border-ledger-line bg-white px-3.5 text-xs font-semibold text-ledger-ink hover:border-ledger-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-amber"
      title="Copy email to clipboard"
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5 text-ledger-teal animate-check" aria-hidden="true" />
          <span className="font-mono text-ledger-teal">Copied!</span>
        </>
      ) : (
        <>
          <Copy className="h-3.5 w-3.5 text-ledger-muted" aria-hidden="true" />
          <span>Copy</span>
        </>
      )}
    </button>
  );
}

function LedgerRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[64px_1fr] gap-4 border-b border-ledger-line/80 py-2.5 last:border-b-0">
      <dt className="font-mono text-[10px] font-bold text-ledger-muted">
        {label}
      </dt>
      <dd className="text-sm font-bold text-ledger-ink">{value}</dd>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-ledger-line/70 bg-ledger-paper/92 backdrop-blur-md">
      <nav className={`${sectionShell} flex h-14 items-center justify-between`}>
        <a
          href="#"
          className="tactile-press inline-flex min-h-9 items-center text-sm font-bold text-ledger-ink"
          aria-label="Back to top"
        >
          {profile.shortName}
          <span className="ml-2 inline-flex items-center rounded-full bg-ledger-teal/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-ledger-teal">
            G1
          </span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="tactile-press inline-flex min-h-9 min-w-9 items-center justify-center text-xs font-medium text-ledger-muted transition-colors hover:text-ledger-teal"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <CopyEmailButton />
          <a
            href={`mailto:${profile.email}`}
            data-track="nav_email"
            className="tactile-press inline-flex min-h-9 items-center gap-2 rounded-md bg-ledger-teal px-3.5 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-ledger-teal-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-amber"
          >
            <Mail className="h-3.5 w-3.5 text-white/90" aria-hidden="true" />
            Email
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero({ onOpenCv }: { onOpenCv?: () => void }) {
  return (
    <section
      className={`${sectionShell} pt-8 pb-10 sm:pt-12 sm:pb-14 lg:pt-14 lg:pb-16`}
    >
      <div className="grid items-center gap-8 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_380px]">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <p className="font-mono text-xs font-bold tracking-normal text-ledger-teal sm:text-[13px]">
              {profile.roleEyebrow}
            </p>
          </div>
          <h1 className="mt-4 max-w-[720px] font-serif text-[36px] font-bold leading-[1.05] text-ledger-ink min-[380px]:text-[40px] sm:text-5xl lg:text-[54px] xl:text-[58px]">
            {profile.headline}
          </h1>
          <p className="mt-5 max-w-[620px] text-[15px] leading-7 text-ledger-muted min-[380px]:text-base min-[380px]:leading-8 sm:text-[17px]">
            {profile.intro}
          </p>
          <div className="mt-5 flex items-center gap-2 text-sm font-medium text-ledger-muted">
            <MapPin className="h-4 w-4 text-ledger-teal" aria-hidden="true" />
            {profile.location}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <ActionLink href="#contact" trackId="hero_contact">
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              Contact me
            </ActionLink>
            <button
              type="button"
              onClick={onOpenCv}
              data-track="hero_download_cv"
              className="tactile-press inline-flex min-h-9 items-center justify-center gap-2 rounded-md border border-ledger-line bg-white px-4 text-[13px] font-semibold text-ledger-ink hover:border-ledger-teal hover:bg-ledger-paper/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-amber"
            >
              <Download className="h-3.5 w-3.5 text-ledger-teal" aria-hidden="true" />
              Download CV
            </button>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              data-track="hero_github"
              className="tactile-press inline-flex min-h-9 items-center justify-center gap-2 rounded-md border border-ledger-line bg-white px-4 text-[13px] font-semibold text-ledger-ink hover:border-ledger-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-amber"
            >
              <Github className="h-3.5 w-3.5" aria-hidden="true" />
              GitHub
            </a>
          </div>
        </div>

        <aside className="tactile-card mx-auto w-full max-w-[380px] rounded-xl border border-ledger-line bg-white p-5 shadow-xs lg:mx-0">
          <div className="overflow-hidden rounded-lg">
            <Image
              src={profile.avatarPath}
              alt={profile.name}
              width={380}
              height={260}
              priority
              className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <p className="mt-4 font-mono text-[11px] font-bold text-ledger-teal">
            SYSTEM LEDGER — 2026
          </p>
          <dl className="mt-1.5">
            {heroLedger.map((item) => (
              <LedgerRow key={item.label} label={item.label} value={item.value} />
            ))}
          </dl>
        </aside>
      </div>
    </section>
  );
}

function MetricsBanner() {
  return (
    <section id="metrics" className={`${sectionShell} scroll-mt-20 pb-16 sm:pb-20`}>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {keyMetrics.map((metric, idx) => (
          <div
            key={metric.label}
            className="tactile-card flex flex-col justify-between rounded-xl border border-ledger-line bg-white p-4.5 sm:p-5 shadow-2xs"
            style={{ animationDelay: `${idx * 70}ms` }}
          >
            <div>
              <p className="digit-pop font-mono text-2xl font-bold tracking-tight text-ledger-teal sm:text-3xl">
                {metric.value}
              </p>
              <p className="mt-1 font-mono text-xs font-bold uppercase tracking-wide text-ledger-ink">
                {metric.label}
              </p>
            </div>
            <p className="mt-2 text-[12px] leading-5 text-ledger-muted break-words">
              {metric.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function RoleSnapshot() {
  return (
    <section
      id="ledger"
      className={`${sectionShell} scroll-mt-20 border-t border-ledger-line/60 pt-16 pb-20 sm:pb-24`}
    >
      <SectionHeading
        id="role-snapshot"
        index="01"
        eyebrow="ROLE SNAPSHOT"
        title="Proof before polish"
      />
      <p className="mt-4 max-w-[620px] text-[15px] leading-7 text-ledger-muted">
        High-impact contributions spanning high-concurrency Go services in production,
        low-level macOS kernel &amp; virtual HID drivers, and edge-native distributed architectures.
      </p>
      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
        {snapshotCards.map((card) => (
          <article
            key={card.label}
            className="tactile-card flex min-h-[180px] flex-col justify-between rounded-xl border border-ledger-line bg-white p-6 shadow-xs"
          >
            <p className="font-mono text-[11px] font-bold text-ledger-teal">
              {card.label}
            </p>
            <h3 className="mt-3 text-[19px] font-bold leading-snug text-ledger-ink break-words">
              {card.value}
            </h3>
            <p className="mt-2.5 text-[13px] leading-6 text-ledger-muted break-words">
              {card.detail}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}function ProjectCard({
  project,
  onInspect,
}: {
  project: Project;
  onInspect: (p: Project) => void;
}) {
  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => onInspect(project)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onInspect(project);
        }
      }}
      aria-label={`View case study for ${project.title}`}
      className="tactile-card group flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border border-ledger-line bg-white transition-all duration-300 hover:-translate-y-1 hover:border-ledger-teal hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-amber"
    >
      {/* Project Image Banner */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden border-b border-ledger-line bg-[#0c1219]">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.shortTitle} project preview`}
            width={640}
            height={360}
            loading="eager"
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-between bg-ledger-ink px-6">
            <div className="flex items-center gap-3">
              <Terminal className="h-6 w-6 text-ledger-amber" aria-hidden="true" />
              <p className="font-mono text-base font-bold text-ledger-paper">
                {project.shortTitle}
              </p>
            </div>
          </div>
        )}

        {project.badge && (
          <span className="absolute right-3 top-3 rounded-md border border-white/15 bg-ledger-ink/90 px-2.5 py-1 font-mono text-[10px] font-bold text-ledger-paper shadow-sm backdrop-blur-xs">
            {project.badge}
          </span>
        )}

        {/* Hover hint */}
        <div className="absolute inset-0 flex items-center justify-center bg-ledger-ink/40 opacity-0 backdrop-blur-xs transition-opacity duration-200 group-hover:opacity-100">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-ledger-ink/95 px-4 py-2 font-mono text-xs font-bold text-white shadow-lg">
            <Maximize2 className="h-3.5 w-3.5 text-ledger-teal" />
            Click to View Case Study
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center justify-between gap-2">
          <p className="font-mono text-[11px] font-bold text-ledger-teal">
            {project.caseLabel}
          </p>
        </div>

        <h3 className="mt-2.5 font-serif text-[21px] font-bold leading-tight text-ledger-ink transition-colors group-hover:text-ledger-teal">
          {project.title}
        </h3>

        {project.metrics && project.metrics.length > 0 && (
          <div className="mt-4 grid grid-cols-3 gap-2 rounded-md border border-ledger-line/60 bg-ledger-paper/50 p-2.5">
            {project.metrics.map((m) => (
              <div key={m.label} className="min-w-0 text-center">
                <p className="truncate font-mono text-[9px] font-bold text-ledger-muted">
                  {m.label}
                </p>
                <p className="mt-0.5 truncate font-mono text-xs font-bold text-ledger-ink" title={m.value}>
                  {m.value}
                </p>
              </div>
            ))}
          </div>
        )}

        <dl className="mt-4 space-y-3.5">
          <div className="grid gap-1 sm:grid-cols-[76px_1fr]">
            <dt className="font-mono text-[10px] font-bold text-ledger-muted">
              SITUATION
            </dt>
            <dd className="min-w-0 break-words text-[13px] leading-6 text-ledger-ink">
              {project.situation}
            </dd>
          </div>
          <div className="grid gap-1 sm:grid-cols-[76px_1fr]">
            <dt className="font-mono text-[10px] font-bold text-ledger-muted">
              STACK
            </dt>
            <dd className="min-w-0 break-words font-mono text-xs font-bold leading-6 text-ledger-ink">
              {project.stack}
            </dd>
          </div>
          <div className="grid gap-1 sm:grid-cols-[76px_1fr]">
            <dt className="font-mono text-[10px] font-bold text-ledger-muted">
              OUTCOME
            </dt>
            <dd className="min-w-0 break-words text-[13px] leading-6 text-ledger-ink">
              {project.outcome}
            </dd>
          </div>
        </dl>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-ledger-line/50 pt-5">
          <div className="flex flex-wrap gap-4">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              data-track={`${project.shortTitle.toLowerCase().replace(/\s+/g, "_")}_repo`}
              className="tactile-press inline-flex min-h-8 items-center gap-1.5 font-mono text-xs font-bold text-ledger-amber transition-colors hover:text-ledger-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ledger-amber"
            >
              Repo <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                data-track={`${project.shortTitle.toLowerCase().replace(/\s+/g, "_")}_live_demo`}
                className="tactile-press inline-flex min-h-8 items-center gap-1.5 font-mono text-xs font-bold text-ledger-muted transition-colors hover:text-ledger-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ledger-amber"
              >
                Live <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            )}
          </div>

          <span className="inline-flex items-center gap-1 font-mono text-xs font-bold text-ledger-teal group-hover:underline">
            Case Study <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </div>
      </div>
    </article>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
    >
      <div
        className="modal-backdrop fixed inset-0 bg-ledger-ink/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="modal-content relative z-10 max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-ledger-line bg-ledger-paper p-5 shadow-2xl sm:p-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-ledger-line/70 pb-4">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs font-bold text-ledger-teal">
                {project.caseLabel}
              </span>
              <span className="rounded-sm border border-ledger-line bg-white px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-ledger-muted">
                {project.category}
              </span>
            </div>
            <h2
              id="project-modal-title"
              className="mt-1 font-serif text-2xl font-bold text-ledger-ink sm:text-3xl"
            >
              {project.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project inspection dialog"
            className="tactile-press rounded-md border border-ledger-line bg-white p-2 text-ledger-muted hover:border-ledger-teal hover:text-ledger-ink"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        {/* 16:9 Architecture Cover Banner */}
        {project.image && (
          <div className="relative mt-5 aspect-[16/9] w-full overflow-hidden rounded-lg border border-ledger-line bg-[#0c1219] shadow-md">
            <Image
              src={project.image}
              alt={`${project.shortTitle} preview`}
              width={800}
              height={450}
              className="h-full w-full object-contain object-center"
            />
            {project.badge && (
              <span className="absolute right-3 top-3 rounded-md border border-white/15 bg-ledger-ink/90 px-2.5 py-1 font-mono text-[10px] font-bold text-ledger-paper shadow-sm backdrop-blur-xs">
                {project.badge}
              </span>
            )}
          </div>
        )}

        {/* Metrics Banner */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="mt-5 grid grid-cols-3 gap-3 rounded-lg border border-ledger-line bg-white p-3.5 shadow-2xs">
            {project.metrics.map((m) => (
              <div key={m.label} className="text-center">
                <p className="font-mono text-[10px] font-bold text-ledger-muted">
                  {m.label}
                </p>
                <p className="mt-0.5 font-mono text-sm font-bold text-ledger-ink sm:text-base">
                  {m.value}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 space-y-5 text-sm leading-relaxed text-ledger-ink">
          {/* Section 1: Problem & System Objective */}
          <div className="rounded-lg border border-ledger-line/70 bg-white p-4 sm:p-5">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-ledger-muted">
              The Engineering Problem &amp; Core Objective
            </h3>
            <p className="mt-2 text-[14px] leading-7 text-ledger-ink">
              {project.problemStatement || project.situation}
            </p>
          </div>

          {/* Section 2: Architecture & Data Flow */}
          {project.architecture && (
            <div className="rounded-lg border border-ledger-line/70 bg-white p-4 sm:p-5">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-ledger-muted">
                System Architecture &amp; Data Pipeline
              </h3>
              <p className="mt-2 text-[14px] leading-7 text-ledger-ink">
                {project.architecture}
              </p>
            </div>
          )}

          {/* Section 3: Key Technical Implementations */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="rounded-lg border border-ledger-line/70 bg-white p-4 sm:p-5">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-ledger-muted">
                Key Technical Implementations
              </h3>
              <ul className="mt-3 space-y-2.5">
                {project.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2.5 text-[13.5px] leading-6 text-ledger-ink">
                    <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-ledger-teal" aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Section 4: Microservices Topology */}
          {project.services && project.services.length > 0 && (
            <div className="rounded-lg border border-ledger-line/70 bg-white p-4 sm:p-5">
              <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-ledger-muted">
                Microservices Topology
              </h3>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {project.services.map((svc) => (
                  <span
                    key={svc}
                    className="rounded-md border border-ledger-line bg-ledger-paper px-2.5 py-1 font-mono text-[11px] font-bold text-ledger-teal"
                  >
                    {svc}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Section 5: Technical Stack */}
          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-ledger-muted">
              Technical Stack
            </h3>
            <p className="mt-1.5 font-mono text-xs font-bold text-ledger-teal">
              {project.stack}
            </p>
          </div>

          {/* Section 6: Production Outcome & Delivery */}
          <div className="rounded-lg border border-ledger-teal/30 bg-ledger-teal/5 p-4 sm:p-5">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-ledger-teal">
              Production Outcome &amp; Verifiable Metrics
            </h3>
            <p className="mt-1.5 text-[14px] leading-7 font-medium text-ledger-ink">
              {project.outcome}
            </p>
          </div>
        </div>

        {/* Modal Footer Links */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-ledger-line/70 pt-5">
          <div className="flex flex-wrap gap-3">
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tactile-press inline-flex min-h-9 items-center gap-2 rounded-md border border-ledger-teal bg-ledger-teal px-4 text-xs font-semibold text-white shadow-xs hover:bg-ledger-teal-dark"
            >
              <Github className="h-3.5 w-3.5" aria-hidden="true" />
              Explore Codebase
            </a>
            {project.secondaryRepoUrl && (
              <a
                href={project.secondaryRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="tactile-press inline-flex min-h-9 items-center gap-2 rounded-md border border-ledger-line bg-white px-3.5 text-xs font-semibold text-ledger-ink hover:border-ledger-teal"
              >
                <Github className="h-3.5 w-3.5 text-ledger-muted" aria-hidden="true" />
                Secondary Repo
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="tactile-press inline-flex min-h-9 items-center gap-2 rounded-md border border-ledger-line bg-white px-4 text-xs font-semibold text-ledger-ink hover:border-ledger-teal"
              >
                <ExternalLink className="h-3.5 w-3.5 text-ledger-teal" aria-hidden="true" />
                Live Deployment
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="tactile-press font-mono text-xs font-semibold text-ledger-muted hover:text-ledger-ink"
          >
            Close (Esc)
          </button>
        </div>
      </div>
    </div>
  );
}

function CvModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
    >
      <div
        className="modal-backdrop fixed inset-0 bg-ledger-ink/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="modal-content relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-xl border border-ledger-line bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-ledger-line bg-ledger-paper px-4 py-3 sm:px-6 sm:py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-ledger-teal/10 text-ledger-teal">
              <FileText className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <h2
                id="cv-modal-title"
                className="font-serif text-lg font-bold text-ledger-ink sm:text-xl"
              >
                Curriculum Vitae
              </h2>
              <p className="font-mono text-[11px] font-medium text-ledger-muted">
                Nguyen Tan Tai · Software Engineer · PDF Document
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/CV-NGUYEN_TAN_TAI.pdf"
              download="CV-NGUYEN_TAN_TAI.pdf"
              data-track="cv_modal_download"
              className="tactile-press inline-flex min-h-8 items-center gap-1.5 rounded-md bg-ledger-teal px-3 py-1.5 text-xs font-semibold text-white shadow-xs hover:bg-ledger-teal-dark"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="hidden sm:inline">Download PDF</span>
              <span className="sm:hidden">PDF</span>
            </a>
            <a
              href="/CV-NGUYEN_TAN_TAI.pdf"
              target="_blank"
              rel="noopener noreferrer"
              data-track="cv_modal_open_tab"
              className="tactile-press inline-flex min-h-8 items-center gap-1.5 rounded-md border border-ledger-line bg-white px-3 py-1.5 text-xs font-semibold text-ledger-ink hover:border-ledger-teal"
              title="Open PDF in new tab"
            >
              <ExternalLink className="h-3.5 w-3.5 text-ledger-muted" aria-hidden="true" />
              <span className="hidden sm:inline">Open Tab</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close CV preview modal"
              className="tactile-press inline-flex h-8 w-8 items-center justify-center rounded-md border border-ledger-line bg-white text-ledger-muted hover:border-ledger-teal hover:text-ledger-ink"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto bg-ledger-paper/60 p-4 sm:p-6">
          <div className="mx-auto max-w-2xl overflow-hidden rounded-lg border border-ledger-line/80 bg-white shadow-md">
            <Image
              src="/cv-page-1.png"
              alt="Curriculum Vitae — Nguyen Tan Tai"
              width={1241}
              height={1755}
              className="h-auto w-full object-contain"
              priority
            />
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-ledger-line bg-white px-4 py-2.5 text-xs sm:px-6">
          <span className="font-mono text-[11px] text-ledger-muted">
            Format: PDF A4 · 84 KB · Direct Download
          </span>
          <button
            type="button"
            onClick={onClose}
            className="font-mono text-xs font-semibold text-ledger-teal hover:underline"
          >
            Close (Esc)
          </button>
        </div>
      </div>
    </div>
  );
}

function Projects() {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>("all");
  const [inspectedProject, setInspectedProject] = useState<Project | null>(null);

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section className={`${sectionShell} pb-20 sm:pb-24`}>
      <SectionHeading
        id="projects"
        index="02"
        eyebrow="PROJECT EVIDENCE"
        title="Projects shown as working systems"
      />
      <p className="mt-4 max-w-[640px] text-[15px] leading-7 text-ledger-muted">
        From low-level macOS DriverKit and virtual HID daemons to high-scale distributed
        logistics engines and edge vector databases.
      </p>

      {/* Tabs sliding navigation inspired by Jakub Antalik transitions.dev */}
      <div className="mt-8 flex flex-wrap items-center gap-2 border-b border-ledger-line/70 pb-4">
        <span className="mr-2 flex items-center gap-1.5 font-mono text-[11px] font-bold text-ledger-muted">
          <SlidersHorizontal className="h-3.5 w-3.5" aria-hidden="true" />
          FILTER:
        </span>
        {projectCategories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`tactile-press relative rounded-md px-3 py-1.5 font-mono text-xs font-bold transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-amber ${
                isActive
                  ? "bg-ledger-teal text-white shadow-xs"
                  : "bg-white text-ledger-muted hover:border-ledger-teal hover:text-ledger-ink border border-ledger-line"
              }`}
            >
              {cat.label}
              {isActive && (
                <span className="ml-1.5 rounded-full bg-white/20 px-1.5 py-0.2 text-[10px]">
                  {cat.id === "all"
                    ? projects.length
                    : projects.filter((p) => p.category === cat.id).length}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.caseLabel}
            project={project}
            onInspect={(p) => setInspectedProject(p)}
          />
        ))}
      </div>

      <ProjectModal
        project={inspectedProject}
        onClose={() => setInspectedProject(null)}
      />
    </section>
  );
}

function Experience() {
  return (
    <section className={`${sectionShell} pb-20 sm:pb-28`}>
      <SectionHeading
        id="experience"
        index="03"
        eyebrow="EXPERIENCE"
        title="Engineering timeline ledger"
      />
      <p className="mt-4 max-w-[640px] text-[15px] leading-7 text-ledger-muted">
        Progressive backend ownership across high-scale logistics, cloud robotics dispatch,
        and multi-tenant enterprise HRM platforms.
      </p>

      {/* Central Timeline Tree Container */}
      <div className="relative mt-12 sm:mt-16">
        {/* Central Tree Trunk Line (Line ở giữa như cái cây) */}
        <div
          className="absolute bottom-4 top-2 left-6 w-0.5 -translate-x-1/2 bg-gradient-to-b from-ledger-teal via-ledger-line to-ledger-teal/20 md:left-1/2"
          aria-hidden="true"
        />

        {/* Tree Crown Node: Active Production Pulse */}
        <div
          className="absolute -top-3 left-6 -translate-x-1/2 md:left-1/2"
          aria-hidden="true"
        >
          <span className="relative flex h-4 w-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ledger-teal opacity-60" />
            <span className="relative inline-flex h-4 w-4 rounded-full border-2 border-white bg-ledger-teal shadow-xs" />
          </span>
        </div>

        {/* Tiers (Mỗi kinh nghiệm là một tầng) */}
        <div className="space-y-12 sm:space-y-16">
          {experiences.map((experience, idx) => {
            const isEven = idx % 2 === 0; // Tier 1 (Ahamove): left, Tier 2 (ROBO-HI): right, Tier 3 (TANCA): left
            const tierNumber = `0${idx + 1}`;

            return (
              <div
                key={`${experience.period}-${experience.company}`}
                className="relative flex flex-col md:flex-row md:items-start"
              >
                {/* Milestone Node on the Tree Trunk */}
                <div
                  className="absolute left-6 top-7 z-10 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-ledger-paper bg-ledger-ink font-mono text-[11px] font-bold text-ledger-paper shadow-md md:left-1/2"
                  aria-hidden="true"
                >
                  {tierNumber}
                </div>

                {/* Left Column (Desktop) */}
                <div
                  className={`w-full pl-14 md:w-1/2 md:pl-0 ${
                    isEven ? "md:pr-12" : "md:order-2 md:pl-12"
                  }`}
                >
                  {/* Experience Tier Card */}
                  <article className="tactile-card relative rounded-xl border border-ledger-line bg-white p-5 shadow-xs sm:p-7">
                    {/* Branch connector line from trunk to card (Desktop) */}
                    <div
                      className={`hidden md:block absolute top-7 h-0.5 w-12 bg-ledger-line ${
                        isEven ? "-right-12" : "-left-12"
                      }`}
                      aria-hidden="true"
                    />

                    {/* Card Header */}
                    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ledger-line/70 pb-4">
                      <div className="flex items-center gap-3 min-w-0">
                        {experience.logoPath && (
                          <div className="flex h-10 w-28 shrink-0 items-center justify-center rounded-md border border-ledger-line/80 bg-ledger-paper/70 p-1.5 shadow-2xs">
                            <Image
                              src={experience.logoPath}
                              alt={experience.company || "Company logo"}
                              width={100}
                              height={28}
                              className="max-h-6 w-auto object-contain"
                            />
                          </div>
                        )}
                        <div className="min-w-0">
                          <p className="truncate font-mono text-[11px] font-bold uppercase tracking-wide text-ledger-teal">
                            {experience.company}
                          </p>
                          <p className="truncate font-mono text-[11px] text-ledger-muted">
                            {experience.roleLevel}
                          </p>
                        </div>
                      </div>

                      <span className="shrink-0 rounded-md border border-ledger-line/60 bg-ledger-paper px-2.5 py-1 font-mono text-[11px] font-bold text-ledger-ink">
                        {experience.period}
                      </span>
                    </div>

                    {/* Card Body */}
                    <div className="pt-4">
                      <h3 className="font-serif text-lg font-bold text-ledger-ink sm:text-xl">
                        {experience.title}
                      </h3>
                      <p className="mt-2 text-[13.5px] leading-6 text-ledger-muted sm:text-sm">
                        {experience.summary}
                      </p>

                      <ul className="mt-4 space-y-2.5 text-[13px] leading-6 text-ledger-ink sm:text-[13.5px]">
                        {experience.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ledger-amber" />
                            <span className="min-w-0 break-words">{detail}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 flex flex-wrap gap-1.5 pt-2">
                        {experience.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-ledger-line bg-ledger-paper/80 px-2 py-0.5 font-mono text-[11px] font-medium text-ledger-ink"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </div>

                {/* Right Column (Desktop Milestone Info Badge opposite to card) */}
                <div
                  className={`hidden md:flex md:w-1/2 md:flex-col ${
                    isEven
                      ? "md:order-2 md:items-start md:pl-12 md:text-left"
                      : "md:items-end md:pr-12 md:text-right"
                  }`}
                >
                  <div className="relative rounded-lg border border-dashed border-ledger-line bg-ledger-paper/60 p-4">
                    {/* Branch connector line from trunk to milestone box */}
                    <div
                      className={`hidden md:block absolute top-7 h-0.5 w-12 border-t border-dashed border-ledger-line ${
                        isEven ? "-left-12" : "-right-12"
                      }`}
                      aria-hidden="true"
                    />
                    <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-ledger-muted">
                      TIER {tierNumber} MILESTONE
                    </span>
                    <p className="mt-1 font-serif text-base font-bold text-ledger-ink">
                      {experience.company}
                    </p>
                    <p className="mt-0.5 font-mono text-xs font-semibold text-ledger-teal">
                      {experience.period}
                    </p>
                    <div className={`mt-2 flex items-center gap-1.5 text-xs text-ledger-muted ${!isEven ? "justify-end" : ""}`}>
                      <MapPin className="h-3.5 w-3.5 text-ledger-muted" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Stack() {
  return (
    <section className={`${sectionShell} pb-20 sm:pb-24`}>
      <SectionHeading
        id="stack"
        index="04"
        eyebrow="STACK"
        title="Stack grouped by surface"
      />
      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
        {stackGroups.map((group) => (
          <article
            key={group.label}
            className="tactile-card rounded-lg border border-ledger-line bg-white p-5"
          >
            <p className="font-mono text-[10px] font-bold text-ledger-teal">
              {group.label}
            </p>
            <p className="mt-3 text-sm font-bold leading-6 text-ledger-ink">
              {group.value}
            </p>
          </article>
        ))}
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        {credentials.map((item) => (
          <article
            key={item.label}
            className="tactile-card rounded-lg border border-ledger-line bg-white/70 p-5"
          >
            <p className="font-mono text-[10px] font-bold text-ledger-muted">
              {item.label}
            </p>
            <p className="mt-2.5 text-sm font-medium leading-6 text-ledger-ink">
              {item.value}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className={`${sectionShell} scroll-mt-20 border-t border-ledger-line/60 pt-16 pb-24 sm:pb-28`}
    >
      <div className="tactile-card rounded-2xl border border-ledger-line/30 bg-ledger-ink p-8 text-ledger-paper shadow-2xl sm:p-12 lg:px-16 lg:py-16">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-6">
          <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-wider text-ledger-amber">
            <Terminal className="h-4 w-4" />
            <span>DISPATCH &amp; RECONCILIATION STATION</span>
          </div>
          <span className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] font-bold text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            OPEN FOR PRODUCTION SYSTEMS
          </span>
        </div>

        <h2 className="mt-8 max-w-[720px] font-serif text-[32px] font-bold leading-tight min-[380px]:text-[38px] sm:text-[46px] lg:text-[52px]">
          Direct line for backend &amp; systems engineering.
        </h2>

        <p className="mt-5 font-mono text-base text-[#d9d2c5] sm:text-lg">
          {profile.email}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <ActionLink
            href={`mailto:${profile.email}`}
            variant="dark"
            trackId="contact_email"
          >
            <Mail className="h-3.5 w-3.5" aria-hidden="true" />
            Initiate Conversation
          </ActionLink>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-track="contact_linkedin"
            className="tactile-press inline-flex min-h-9 items-center justify-center gap-2 rounded-md border border-ledger-amber px-4 text-[13px] font-semibold text-ledger-amber transition-colors hover:bg-ledger-amber hover:text-ledger-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-amber"
          >
            <Linkedin className="h-3.5 w-3.5" aria-hidden="true" />
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            data-track="contact_github"
            className="tactile-press inline-flex min-h-9 items-center justify-center gap-2 rounded-md border border-white/20 px-4 text-[13px] font-semibold text-white transition-colors hover:bg-white hover:text-ledger-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-amber"
          >
            <Github className="h-3.5 w-3.5" aria-hidden="true" />
            GitHub
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 font-mono text-xs text-[#9ba098]">
          <p>
            {profile.linkedinLabel} · {profile.location} · {profile.phone}
          </p>
          <p className="text-[11px] text-[#9ba098]/80">
            System Ledger Architecture · Crafted with Next.js 15
          </p>
        </div>
      </div>
    </section>
  );
}

export function SystemLedgerPage() {
  const [isCvOpen, setIsCvOpen] = useState(false);

  return (
    <main className="min-h-screen bg-ledger-paper text-ledger-ink">
      <EventTracker />
      <Header />
      <Hero onOpenCv={() => setIsCvOpen(true)} />
      <MetricsBanner />
      <RoleSnapshot />
      <Projects />
      <Experience />
      <Stack />
      <Contact />
      <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
    </main>
  );
}
