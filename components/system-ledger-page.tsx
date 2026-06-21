import Image from "next/image";
import type { ReactNode } from "react";
import {
  ArrowRight,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Terminal,
} from "lucide-react";
import { EventTracker } from "@/components/event-tracker";
import {
  credentials,
  experiences,
  heroLedger,
  navItems,
  profile,
  projects,
  snapshotCards,
  stackGroups,
  type Project,
} from "@/lib/data";

const sectionShell = "mx-auto w-full max-w-[1248px] px-6 sm:px-8 xl:px-0";

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
      ? "border-ledger-teal bg-ledger-teal text-white hover:bg-[#13474e]"
      : variant === "dark"
        ? "border-ledger-amber bg-ledger-amber text-ledger-ink hover:bg-[#d3913c]"
        : "border-ledger-line bg-white text-ledger-ink hover:border-ledger-teal";

  return (
    <a
      href={href}
      data-track={trackId}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex min-h-9 items-center justify-center gap-2 rounded-md border px-4 text-[13px] font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-amber ${variantClass}`}
    >
      {children}
    </a>
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
          className="inline-flex min-h-9 items-center text-sm font-bold text-ledger-ink"
          aria-label="Back to top"
        >
          {profile.shortName}
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex min-h-9 min-w-9 items-center justify-center text-xs font-medium text-ledger-muted transition-colors hover:text-ledger-teal"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href={`mailto:${profile.email}`}
          data-track="nav_email"
          className="inline-flex min-h-9 items-center gap-2 rounded-md bg-white px-3.5 text-xs font-semibold text-ledger-ink ring-1 ring-ledger-line transition-colors hover:ring-ledger-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-amber"
        >
          <Mail className="h-3.5 w-3.5 text-ledger-teal" aria-hidden="true" />
          Email
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section
      className={`${sectionShell} grid gap-10 pb-16 pt-12 min-[380px]:pb-20 min-[380px]:pt-14 lg:grid-cols-[minmax(0,1fr)_minmax(320px,360px)] lg:gap-8 lg:pb-24 lg:pt-16 xl:grid-cols-[720px_360px]`}
    >
      <div>
        <p className="font-mono text-xs font-bold tracking-normal text-ledger-teal sm:text-[13px]">
          {profile.roleEyebrow}
        </p>
        <h1 className="mt-6 max-w-[720px] font-serif text-[38px] font-bold leading-[1.02] text-ledger-ink min-[380px]:text-[42px] sm:text-5xl lg:text-[58px] xl:text-[68px]">
          {profile.headline}
        </h1>
        <p className="mt-6 max-w-[600px] text-[15px] leading-7 text-ledger-muted min-[380px]:text-base min-[380px]:leading-8 sm:text-[18px]">
          {profile.intro}
        </p>
        <div className="mt-6 flex items-center gap-2 text-sm font-medium text-ledger-muted">
          <MapPin className="h-4 w-4 text-ledger-teal" aria-hidden="true" />
          {profile.location}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <ActionLink href="#contact" trackId="hero_contact">
            <Mail className="h-3.5 w-3.5" aria-hidden="true" />
            Contact me
          </ActionLink>
          <ActionLink
            href={profile.cvPath}
            variant="secondary"
            trackId="hero_download_cv"
            external
          >
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            Download CV
          </ActionLink>
        </div>
      </div>

      <aside className="mx-auto w-full max-w-[360px] rounded-lg border border-ledger-line bg-white p-5 lg:mx-0">
        <div className="overflow-hidden rounded-md">
          <Image
            src={profile.avatarPath}
            alt={profile.name}
            width={320}
            height={260}
            priority
            className="h-[260px] w-full object-cover"
          />
        </div>
        <p className="mt-4 font-mono text-[11px] font-bold text-ledger-teal">
          ENTRY 01 — 2026
        </p>
        <dl className="mt-1.5">
          {heroLedger.map((item) => (
            <LedgerRow key={item.label} label={item.label} value={item.value} />
          ))}
        </dl>
      </aside>
    </section>
  );
}

function RoleSnapshot() {
  return (
    <section
      id="ledger"
      className={`${sectionShell} scroll-mt-24 pb-20 sm:pb-24`}
    >
      <SectionHeading
        id="role-snapshot"
        index="01"
        eyebrow="ROLE SNAPSHOT"
        title="Proof before polish"
      />
      <p className="mt-6 max-w-[600px] text-[15px] leading-7 text-ledger-muted">
        A recruiter should understand the current role, core stack, and
        strongest projects in the first 30 seconds.
      </p>
      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
        {snapshotCards.map((card) => (
          <article
            key={card.label}
            className="min-h-[132px] rounded-lg border border-ledger-line bg-white p-5"
          >
            <p className="font-mono text-[10px] font-bold text-ledger-teal">
              {card.label}
            </p>
            <h3 className="mt-4 text-[19px] font-bold leading-tight text-ledger-ink">
              {card.value}
            </h3>
            <p className="mt-3 text-[13px] leading-6 text-ledger-muted">
              {card.detail}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className={`${sectionShell} pb-20 sm:pb-24`}>
      <SectionHeading
        id="experience"
        index="02"
        eyebrow="EXPERIENCE"
        title="A concise engineering ledger"
      />
      <div className="mt-8 space-y-4 sm:mt-12">
        {experiences.map((experience) => (
          <article
            key={`${experience.period}-${experience.title}`}
            className="grid gap-6 rounded-lg border border-ledger-line bg-white p-5 md:grid-cols-[170px_1fr] md:p-6"
          >
            <p className="font-mono text-xs font-bold leading-6 text-ledger-teal">
              {experience.period}
            </p>
            <div>
              <h3 className="text-xl font-bold leading-tight text-ledger-ink">
                {experience.title}
              </h3>
              <p className="mt-3 max-w-4xl text-sm leading-7 text-ledger-muted">
                {experience.summary}
              </p>
              <ul className="mt-4 grid gap-2.5 text-sm leading-7 text-ledger-ink">
                {experience.details.map((detail) => (
                  <li key={detail} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-ledger-amber" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {experience.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-ledger-line bg-ledger-paper px-2.5 py-1 font-mono text-[11px] font-bold text-ledger-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-ledger-line bg-white">
      {project.image ? (
        <Image
          src={project.image}
          alt={`${project.shortTitle} project preview`}
          width={560}
          height={160}
          loading="eager"
          className="h-40 w-full object-cover"
        />
      ) : (
        <div className="flex h-40 items-center justify-between border-b border-ledger-line bg-ledger-ink px-6">
          <div className="flex items-center gap-3">
            <Terminal
              className="h-6 w-6 text-ledger-amber"
              aria-hidden="true"
            />
            <p className="font-mono text-sm font-bold text-ledger-paper">
              {project.shortTitle}
            </p>
          </div>
          <p className="font-mono text-[11px] font-bold text-ledger-paper/60">
            CLI · Apple Silicon
          </p>
        </div>
      )}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="font-mono text-[11px] font-bold text-ledger-teal">
          {project.caseLabel}
        </p>
        <h3 className="mt-3 font-serif text-[22px] font-bold leading-tight text-ledger-ink">
          {project.title}
        </h3>
        <dl className="mt-5 space-y-4">
          <div className="grid gap-1.5 sm:grid-cols-[88px_1fr]">
            <dt className="font-mono text-[10px] font-bold text-ledger-muted">
              SITUATION
            </dt>
            <dd className="text-[13px] leading-6 text-ledger-ink">
              {project.situation}
            </dd>
          </div>
          <div className="grid gap-1.5 sm:grid-cols-[88px_1fr]">
            <dt className="font-mono text-[10px] font-bold text-ledger-muted">
              STACK
            </dt>
            <dd className="font-mono text-xs font-bold leading-6 text-ledger-ink">
              {project.stack}
            </dd>
          </div>
          {project.services && project.services.length > 0 ? (
            <div className="grid gap-1.5 sm:grid-cols-[88px_1fr]">
              <dt className="font-mono text-[10px] font-bold text-ledger-muted">
                SERVICES
              </dt>
              <dd className="flex flex-wrap gap-1.5">
                {project.services.map((svc) => (
                  <span
                    key={svc}
                    className="rounded-md border border-ledger-line bg-ledger-paper px-2 py-0.5 font-mono text-[11px] font-bold text-ledger-muted"
                  >
                    {svc}
                  </span>
                ))}
              </dd>
            </div>
          ) : null}
          <div className="grid gap-1.5 sm:grid-cols-[88px_1fr]">
            <dt className="font-mono text-[10px] font-bold text-ledger-muted">
              OUTCOME
            </dt>
            <dd className="text-[13px] leading-6 text-ledger-ink">
              {project.outcome}
            </dd>
          </div>
        </dl>
        <div className="mt-auto flex flex-wrap gap-4 pt-6">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-track={`${project.shortTitle.toLowerCase().replace(/\s+/g, "_")}_repo`}
            className="inline-flex min-h-9 items-center gap-2 font-mono text-xs font-bold text-ledger-amber transition-colors hover:text-ledger-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ledger-amber"
          >
            View repo <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-track={`${project.shortTitle.toLowerCase().replace(/\s+/g, "_")}_live_demo`}
              className="inline-flex min-h-9 items-center gap-2 font-mono text-xs font-bold text-ledger-muted transition-colors hover:text-ledger-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ledger-amber"
            >
              Live demo{" "}
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function Projects() {
  const [thesis, ...rest] = projects;
  return (
    <section className={`${sectionShell} pb-20 sm:pb-24`}>
      <SectionHeading
        id="projects"
        index="03"
        eyebrow="PROJECT EVIDENCE"
        title="Projects shown as working systems"
      />
      <div className="mt-8 sm:mt-12">
        {thesis ? (
          <div className="mb-6">
            <ProjectCard project={thesis} />
          </div>
        ) : null}
        <div className="grid gap-6 lg:grid-cols-2">
          {rest.map((project) => (
            <ProjectCard key={project.caseLabel} project={project} />
          ))}
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
      <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
        {stackGroups.map((group) => (
          <article
            key={group.label}
            className="rounded-lg border border-ledger-line bg-white p-5"
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
            className="rounded-lg border border-ledger-line bg-white/70 p-5"
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
    <section id="contact" className={`${sectionShell} scroll-mt-24 pb-16`}>
      <div className="rounded-lg bg-ledger-ink p-6 text-ledger-paper sm:p-8 lg:px-10 lg:py-10">
        <h2 className="max-w-[600px] font-serif text-[26px] font-bold leading-tight min-[380px]:text-[30px] sm:text-[36px]">
          Direct line for backend work.
        </h2>
        <p className="mt-5 text-base text-[#d9d2c5]">{profile.email}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <ActionLink
            href={`mailto:${profile.email}`}
            variant="dark"
            trackId="contact_email"
          >
            <Mail className="h-3.5 w-3.5" aria-hidden="true" />
            Send email
          </ActionLink>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            data-track="contact_linkedin"
            className="inline-flex min-h-9 items-center justify-center gap-2 rounded-md border border-ledger-amber px-4 text-[13px] font-semibold text-ledger-amber transition-colors hover:bg-ledger-amber hover:text-ledger-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-amber"
          >
            <Linkedin className="h-3.5 w-3.5" aria-hidden="true" />
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            data-track="contact_github"
            className="inline-flex min-h-9 items-center justify-center gap-2 rounded-md border border-ledger-amber/50 px-4 text-[13px] font-semibold text-ledger-amber transition-colors hover:bg-ledger-amber hover:text-ledger-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ledger-amber"
          >
            <Github className="h-3.5 w-3.5" aria-hidden="true" />
            GitHub
          </a>
        </div>
        <p className="mt-6 font-mono text-[13px] leading-7 text-[#9ba098]">
          {profile.linkedinLabel} · {profile.location} · {profile.phone}
        </p>
      </div>
    </section>
  );
}

export function SystemLedgerPage() {
  return (
    <main className="min-h-screen bg-ledger-paper text-ledger-ink">
      <EventTracker />
      <Header />
      <Hero />
      <RoleSnapshot />
      <Experience />
      <Projects />
      <Stack />
      <Contact />
    </main>
  );
}
