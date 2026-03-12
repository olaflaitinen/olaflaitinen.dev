'use client'

import { useState } from 'react'
import { experiences } from '@/data/experience'
import type { Experience } from '@/data/experience'

const categories: { id: string; label: string; icon: string }[] = [
  { id: 'all', label: 'All', icon: 'work_history' },
  { id: 'leadership', label: 'Leadership', icon: 'groups' },
  { id: 'research', label: 'Research', icon: 'science' },
  { id: 'applied-ai', label: 'Applied AI', icon: 'psychology' },
  { id: 'public-sector', label: 'Public Sector', icon: 'account_balance' },
  { id: 'teaching', label: 'Teaching', icon: 'school' },
]

const typeLabel: Record<Experience['type'], string> = {
  'full-time': 'Full-time',
  contract: 'Contract',
  'part-time': 'Part-time',
  internship: 'Internship',
  freelance: 'Freelance',
}

export default function ExperiencePage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered =
    activeCategory === 'all'
      ? experiences
      : experiences.filter((e) => e.category === activeCategory)

  return (
    <>
      <div className="page-hero">
        <div className="site-container">
          <p className="type-label-lg text-primary mb-3">Career</p>
          <h1 className="type-headline-lg text-on-surface mb-4">Experience</h1>
          <p className="type-body-lg text-on-surface-variant max-w-2xl">
            {experiences.length}+ roles spanning AI research, clinical AI, public-sector advisory,
            engineering leadership, and academia, across Sweden, Finland, Denmark, Luxembourg,
            Germany, Azerbaijan, and the US.
          </p>
        </div>
      </div>

      {/* ── Category tabs ────────────────────────────────── */}
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur border-b border-outline">
        <div className="site-container">
          <div className="md-tabs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`md-tab${activeCategory === cat.id ? ' md-tab-active' : ''}`}
              >
                <span className="material-symbols-outlined icon-sm">{cat.icon}</span>
                {cat.label}
                {cat.id !== 'all' && (
                  <span className="type-label-sm text-on-surface-dim ml-1">
                    ({experiences.filter((e) => e.category === cat.id).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Experience list ───────────────────────────────── */}
      <section className="section">
        <div className="site-container">
          <div className="max-w-3xl">
            {filtered.map((exp, i) => (
              <div key={exp.id} className="flex gap-4 mb-8">
                {/* Timeline */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className={exp.endDate === 'Present' ? 'timeline-node' : 'timeline-node-dim'} />
                  {i < filtered.length - 1 && (
                    <div className="timeline-line flex-1 mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`badge-${exp.endDate === 'Present' ? 'current' : 'neutral'}`}>
                      {exp.endDate === 'Present' ? 'Current' : exp.type === 'full-time' ? 'Full-time' : typeLabel[exp.type]}
                    </span>
                    {exp.confidential && <span className="badge-neutral">Confidential</span>}
                    {exp.highlighted && <span className="badge-primary">Featured</span>}
                  </div>

                  <h2 className="type-title-md text-on-surface mb-0.5">{exp.title}</h2>
                  <p className="type-body-md text-primary mb-1">{exp.organization}</p>
                  <p className="type-label-sm text-on-surface-dim mb-3">
                    {exp.startDate} - {exp.endDate} · {exp.location}
                  </p>

                  <p className="type-body-md text-on-surface-variant mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="md-tag">{tag}</span>
                    ))}
                  </div>

                  {i < filtered.length - 1 && (
                    <div className="md-divider mt-6" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
