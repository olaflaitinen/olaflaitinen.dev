import type { Metadata } from 'next'
import Link from 'next/link'
import { skillGroups } from '@/data/skills'

export const metadata: Metadata = {
  title: 'Skills & Capabilities',
  description:
    'Technical skills and capabilities of Gustav Olaf Yunus Laitinen-Fredriksson Lundström-Imanov, AI/ML methods, medical AI, bioinformatics, data infrastructure, MLOps, evaluation, leadership, and geospatial AI.',
}

export default function SkillsPage() {
  return (
    <>
      <div className="page-hero">
        <div className="site-container">
          <p className="type-label-lg text-primary mb-3">Capabilities</p>
          <h1 className="type-headline-lg text-on-surface mb-4">Skills &amp; Expertise</h1>
          <p className="type-body-lg text-on-surface-variant max-w-2xl">
            Technical depth across eight domains, from core ML methods and medical AI to
            bioinformatics pipelines, MLOps infrastructure, and trustworthy AI systems.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="site-container">
          <div className="grid sm:grid-cols-2 gap-6">
            {skillGroups.map((group, i) => (
              <div key={group.id} className={`md-card p-6 animate-fade-up stagger-${Math.min(i + 1, 5)}`}>
                <h2 className="type-title-md text-on-surface mb-1">{group.label}</h2>
                <p className="type-body-sm text-on-surface-variant mb-4">{group.description}</p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="md-chip">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/experience" className="btn-filled">
              <span className="material-symbols-outlined icon-sm">work</span>
              See experience
            </Link>
            <Link href="/publications" className="btn-outlined">
              <span className="material-symbols-outlined icon-sm">article</span>
              Publications
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
