import Link from 'next/link'
import type { Metadata } from 'next'
import { experiences } from '@/data/experience'
import { publications } from '@/data/publications'

export const metadata: Metadata = {
  title: 'Gustav Olaf Yunus Laitinen-Fredriksson Lundström-Imanov, AI Leader, Researcher & Engineer',
  description:
    'Personal site of Gustav Olaf Yunus Laitinen-Fredriksson Lundström-Imanov, AI leader, researcher, and engineer working across medical AI, explainable AI, bioinformatics, and strategic technology leadership.',
}

const stats = [
  { value: '11+', label: 'Publications' },
  { value: '25+', label: 'Roles & Engagements' },
  { value: '8', label: 'Skill Domains' },
  { value: '5+', label: 'Countries' },
]

const focusAreas = [
  { icon: 'biotech', label: 'Medical & Clinical AI', href: '/skills' },
  { icon: 'visibility', label: 'Explainable AI', href: '/skills' },
  { icon: 'hub', label: 'Multimodal Systems', href: '/research' },
  { icon: 'code_blocks', label: 'Bioinformatics & Omics', href: '/skills' },
  { icon: 'settings_suggest', label: 'MLOps & Infrastructure', href: '/skills' },
  { icon: 'balance', label: 'Trustworthy AI', href: '/research' },
  { icon: 'map', label: 'Geospatial & Urban AI', href: '/research' },
  { icon: 'groups', label: 'AI Leadership & Strategy', href: '/leadership' },
]

const highlightedExperience = experiences.filter((e) => e.highlighted).slice(0, 3)
const recentPublications = publications.slice(0, 3)

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="page-hero">
        <div className="site-container">
          <div className="max-w-3xl">
            <p className="type-label-lg text-primary mb-4 animate-fade-in">
              AI Leader · Researcher · Engineer
            </p>
            <h1 className="type-display-sm text-on-surface mb-6 animate-fade-up stagger-1">
              Gustav Olaf Yunus Laitinen-Fredriksson Lundström-Imanov
            </h1>
            <p className="type-body-lg text-on-surface-variant max-w-2xl mb-8 animate-fade-up stagger-2">
              Building trustworthy AI systems that work reliably in the real world, from
              clinical diagnostics and bioinformatics to geospatial intelligence and strategic
              technology leadership. Currently completing dual PhDs at the Technical University of Denmark and University of Luxembourg.
            </p>
            <div className="flex flex-wrap gap-3 animate-fade-up stagger-3">
              <Link href="/about" className="btn-filled">
                <span className="material-symbols-outlined icon-sm">person</span>
                About me
              </Link>
              <Link href="/publications" className="btn-outlined">
                <span className="material-symbols-outlined icon-sm">article</span>
                Publications
              </Link>
              <Link href="/contact" className="btn-text">
                <span className="material-symbols-outlined icon-sm">mail</span>
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────── */}
      <section className="bg-surface-dim border-b border-outline">
        <div className="site-container py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={stat.label} className={`text-center animate-fade-up stagger-${i + 1}`}>
                <p className="type-display-sm text-primary">{stat.value}</p>
                <p className="type-body-sm text-on-surface-variant mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Focus Areas ──────────────────────────────────── */}
      <section className="section">
        <div className="site-container">
          <div className="mb-8">
            <p className="type-label-md text-primary mb-2">Expertise</p>
            <h2 className="type-headline-md text-on-surface">Focus Areas</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {focusAreas.map((area, i) => (
              <Link
                key={area.label}
                href={area.href}
                className={`md-card flex flex-col items-start gap-3 p-5 hover:border-primary/30 animate-fade-up stagger-${Math.min(i + 1, 5)}`}
              >
                <span className="material-symbols-outlined icon-md text-primary">{area.icon}</span>
                <p className="type-label-lg text-on-surface">{area.label}</p>
              </Link>
            ))}
          </div>
          <Link href="/skills" className="btn-text">
            View all skills
            <span className="material-symbols-outlined icon-sm">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* ── Featured Experience ───────────────────────────── */}
      <section className="section bg-surface-dim">
        <div className="site-container">
          <div className="flex items-end justify-between mb-8 gap-4">
            <div>
              <p className="type-label-md text-primary mb-2">Career</p>
              <h2 className="type-headline-md text-on-surface">Featured Experience</h2>
            </div>
            <Link href="/experience" className="btn-text flex-shrink-0">
              All roles
              <span className="material-symbols-outlined icon-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {highlightedExperience.map((exp, i) => (
              <div key={exp.id} className={`md-card p-5 animate-fade-up stagger-${i + 1}`}>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className={`badge-${exp.endDate === 'Present' ? 'current' : 'neutral'}`}>
                    {exp.endDate === 'Present' ? 'Current' : exp.endDate}
                  </span>
                  {exp.confidential && (
                    <span className="badge-neutral">Confidential</span>
                  )}
                </div>
                <h3 className="type-title-sm text-on-surface mb-1">{exp.title}</h3>
                <p className="type-body-sm text-primary mb-3">{exp.organization}</p>
                <p className="type-body-sm text-on-surface-variant line-clamp-3 mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {exp.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="md-tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recent Publications ───────────────────────────── */}
      <section className="section">
        <div className="site-container">
          <div className="flex items-end justify-between mb-8 gap-4">
            <div>
              <p className="type-label-md text-primary mb-2">Research</p>
              <h2 className="type-headline-md text-on-surface">Recent Publications</h2>
            </div>
            <Link href="/publications" className="btn-text flex-shrink-0">
              All publications
              <span className="material-symbols-outlined icon-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentPublications.map((pub, i) => (
              <div key={pub.id} className={`md-card flex flex-col p-5 animate-fade-up stagger-${i + 1}`}>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="badge-primary">{pub.venue}</span>
                  <span className="type-label-sm text-on-surface-dim">{pub.date}</span>
                </div>
                <h3 className="type-title-sm text-on-surface mb-3 flex-1">{pub.title}</h3>
                <div className="flex flex-wrap gap-1 mb-4">
                  {pub.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="md-tag">{tag}</span>
                  ))}
                </div>
                <div className="mt-auto pt-3 border-t border-outline/50">
                  <a
                    href={pub.arxivUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 type-label-sm text-on-surface-variant hover:text-primary transition-colors"
                  >
                    <span className="material-symbols-outlined icon-xs">open_in_new</span>
                    View on arXiv
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="section bg-blue-container/30">
        <div className="site-container text-center">
          <h2 className="type-headline-sm text-on-surface mb-4">
            Open to research collaborations and advisory engagements
          </h2>
          <p className="type-body-lg text-on-surface-variant max-w-xl mx-auto mb-8">
            Interested in medical AI, responsible systems, translational research, or technical strategy?
            Let&apos;s connect.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="btn-filled">
              <span className="material-symbols-outlined icon-sm">mail</span>
              Get in touch
            </Link>
            <Link href="/research" className="btn-outlined">
              <span className="material-symbols-outlined icon-sm">science</span>
              View research
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
