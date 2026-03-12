import type { Metadata } from 'next'
import Link from 'next/link'
import { education } from '@/data/education'

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Gustav Olaf Yunus Laitinen-Fredriksson Lundström-Imanov, AI leader, researcher, and engineer. Background, philosophy, working style, and research domains.',
}

const domains = [
  {
    icon: 'biotech',
    label: 'Medical & Clinical AI',
    description:
      'Design and evaluation of AI systems for radiology, pathology, and clinical decision support. Human-AI collaboration studies, federated learning for privacy-preserving clinical research.',
  },
  {
    icon: 'visibility',
    label: 'Explainable AI',
    description:
      'Building AI systems that clinicians and domain experts can understand, trust, and meaningfully override. XAI methods, uncertainty quantification, and human-in-the-loop workflows.',
  },
  {
    icon: 'hub',
    label: 'Foundation Models & LLMs',
    description:
      'Evaluation methodology for generative and multimodal models in high-stakes settings. Clinical NLP, model cards, transparency frameworks, and continual learning.',
  },
  {
    icon: 'code_blocks',
    label: 'Bioinformatics & Omics',
    description:
      'Large-scale proteomics pipelines, WGS/WES workflows, multi-omics integration, and ML-driven biomarker discovery for neurodegenerative disease.',
  },
  {
    icon: 'map',
    label: 'Geospatial & Urban AI',
    description:
      'GeoAI frameworks for urban mobility, climate resilience, housing, and public-sector analytics. Spatio-temporal modeling and evidence-based policy.',
  },
  {
    icon: 'groups',
    label: 'AI Strategy & Leadership',
    description:
      'Technical strategy, R&D leadership, startup co-founding, and enterprise SaaS. Cross-functional execution at Google Health, ERC, and Skolyn.',
  },
]

const workingStyle = [
  {
    icon: 'science',
    label: 'Rigorous by default',
    description: 'Every claim is evaluated, every model is tested, every assumption is made explicit.',
  },
  {
    icon: 'handshake',
    label: 'Team-first execution',
    description: 'Effective across research and engineering teams. Comfortable leading and being led.',
  },
  {
    icon: 'build',
    label: 'End-to-end thinking',
    description: 'From raw data through deployment. I care about systems that actually work in production.',
  },
  {
    icon: 'policy',
    label: 'Domain-aware',
    description: 'Deep context in medicine, bioinformatics, defence, geospatial, and policy environments.',
  },
]

export default function AboutPage() {
  return (
    <>
      <div className="page-hero">
        <div className="site-container">
          <p className="type-label-lg text-primary mb-3">About</p>
          <h1 className="type-headline-lg text-on-surface mb-4">
            AI Leader, Researcher &amp; Engineer
          </h1>
          <p className="type-body-lg text-on-surface-variant max-w-2xl">
            I build AI systems that are reliable, interpretable, and deployable in the real world , 
            across clinical medicine, bioinformatics, geospatial domains, and strategic technology.
          </p>
        </div>
      </div>

      {/* ── Biography ────────────────────────────────────── */}
      <section className="section">
        <div className="site-container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-5">
              <h2 className="type-headline-sm text-on-surface">Background</h2>
              <p className="type-body-lg text-on-surface-variant">
                I&apos;m Gustav Olaf Yunus Laitinen-Fredriksson Lundström-Imanov, a Finland-based AI researcher and engineer currently completing
                dual PhD programmes at the Technical University of Denmark in Human-XAI
                Collaboration for Fetal Ultrasound, and at the University of Luxembourg in Systems and
                Molecular Biomedicine.
              </p>
              <p className="type-body-lg text-on-surface-variant">
                My career spans academia, industry, and government, from Google Health and the Finnish
                Center for Artificial Intelligence to the European Research Council and the Swedish
                Security Service. I co-founded Skolyn, a clinical AI platform for radiology and
                pathology, where I served as CTO and shaped the architecture, go-to-market strategy,
                and clinical validation pipeline.
              </p>
              <p className="type-body-lg text-on-surface-variant">
                Across these settings, I&apos;ve consistently worked at the intersection of rigorous
                machine learning and real-world deployment constraints, designing systems that clinicians
                can trust, regulators can audit, and engineers can maintain. My research touches
                multimodal AI, federated learning, explainability, bioinformatics, and geospatial
                intelligence, with over 11 publications spanning these domains.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/experience" className="btn-filled">
                  <span className="material-symbols-outlined icon-sm">work</span>
                  Experience
                </Link>
                <Link href="/publications" className="btn-outlined">
                  <span className="material-symbols-outlined icon-sm">article</span>
                  Publications
                </Link>
              </div>
            </div>

            {/* Education sidebar */}
            <div>
              <h2 className="type-headline-sm text-on-surface mb-6">Education</h2>
              <div className="space-y-4">
                {education.map((edu, i) => (
                  <div key={edu.id} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={i < 2 ? 'timeline-node' : 'timeline-node-dim'} />
                      {i < education.length - 1 && (
                        <div className="timeline-line flex-1 mt-2" style={{ minHeight: 32 }} />
                      )}
                    </div>
                    <div className="pb-4">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className={i < 2 ? 'badge-phd' : i === 2 ? 'badge-primary' : 'badge-neutral'}>
                          {edu.degree}
                        </span>
                        {edu.endDate > '2025' && (
                          <span className="badge-current">Active</span>
                        )}
                      </div>
                      <p className="type-title-sm text-on-surface">{edu.institution}</p>
                      <p className="type-body-sm text-on-surface-variant mt-0.5">{edu.field}</p>
                      <p className="type-label-sm text-on-surface-dim mt-1">
                        {edu.startDate} - {edu.endDate}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Research Domains ─────────────────────────────── */}
      <section className="section bg-surface-dim">
        <div className="site-container">
          <div className="mb-8">
            <p className="type-label-md text-primary mb-2">Expertise</p>
            <h2 className="type-headline-sm text-on-surface">Research &amp; Practice Domains</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {domains.map((domain) => (
              <div key={domain.label} className="md-card p-5">
                <span className="material-symbols-outlined icon-lg text-primary mb-3 block">{domain.icon}</span>
                <h3 className="type-title-sm text-on-surface mb-2">{domain.label}</h3>
                <p className="type-body-sm text-on-surface-variant">{domain.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Working Style ────────────────────────────────── */}
      <section className="section">
        <div className="site-container">
          <div className="mb-8">
            <p className="type-label-md text-primary mb-2">Approach</p>
            <h2 className="type-headline-sm text-on-surface">How I Work</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {workingStyle.map((item) => (
              <div key={item.label} className="flex flex-col gap-3 p-5 rounded-xl bg-surface-container">
                <span className="material-symbols-outlined icon-lg text-primary">{item.icon}</span>
                <h3 className="type-title-sm text-on-surface">{item.label}</h3>
                <p className="type-body-sm text-on-surface-variant">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="section-sm bg-surface-dim border-t border-outline">
        <div className="site-container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="type-title-md text-on-surface mb-1">Interested in collaborating?</p>
            <p className="type-body-sm text-on-surface-variant">Open to research partnerships, advisory roles, and technical consulting.</p>
          </div>
          <Link href="/contact" className="btn-filled flex-shrink-0">
            <span className="material-symbols-outlined icon-sm">mail</span>
            Contact me
          </Link>
        </div>
      </section>
    </>
  )
}
