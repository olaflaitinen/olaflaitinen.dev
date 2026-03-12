import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Leadership & Impact',
  description:
    'Leadership roles, strategic impact, and key metrics from Gustav Olaf Yunus Laitinen-Fredriksson Lundström-Imanov, CTO, research leadership, advisory, and cross-institutional coordination.',
}

const pillars = [
  {
    icon: 'rocket_launch',
    label: 'Startup CTO & Co-Founder',
    description:
      'Co-founded Skolyn, a clinical AI platform for radiology and pathology. Led all technical strategy, ML architecture, regulatory readiness, enterprise SaaS design, and fundraising narrative. Scaled infrastructure to 50,000+ scans in pilot.',
    metrics: [
      { value: '127', label: 'Pathological indicators per scan' },
      { value: '<3s', label: 'Inference per scan' },
      { value: '95%+', label: 'Diagnostic accuracy' },
      { value: '50k+', label: 'Scans in pilot' },
    ],
  },
  {
    icon: 'medical_services',
    label: 'Clinical AI Research Leadership',
    description:
      'Led multi-institutional benchmark studies, clinical evaluation protocols, and human-AI collaboration research at Google Health, Uppsala University, and FCAI. Designed clinician-in-the-loop studies involving 50+ clinicians and 1M+ simulated interactions.',
    metrics: [
      { value: '50+', label: 'Clinicians in evaluation studies' },
      { value: '1M+', label: 'Simulated patient interactions' },
      { value: '5', label: 'Hospital networks benchmarked' },
      { value: '95%+', label: 'AUC on neuro disease classification' },
    ],
  },
  {
    icon: 'code_blocks',
    label: 'Bioinformatics & Data Infrastructure',
    description:
      'Designed and operated large-scale proteomics and genomics pipelines at the Technical University of Denmark and Linköping University, processing terabytes of mass spectrometry and genomic data across SLURM HPC clusters with Nextflow/nf-core standards.',
    metrics: [
      { value: '10 TB+', label: 'Proteomic data processed annually' },
      { value: '5', label: 'Bioinformatics pipelines built' },
      { value: '30%', label: 'Runtime reduction achieved' },
      { value: '0.87→0.94', label: 'AUC improvement in biomarker model' },
    ],
  },
  {
    icon: 'account_balance',
    label: 'Public Sector & Policy Advisory',
    description:
      'Advised on AI strategy and research policy at the European Research Council (Horizon Europe), the German Bundeswehr, and the Republic of Azerbaijan, delivering evidence-based analytics and strategic AI implementation guidance.',
    metrics: [
      { value: '3', label: 'Government / intergovernmental bodies' },
      { value: 'Horizon Europe', label: 'Programme analytics framework' },
      { value: 'EU + MENA', label: 'Geographic advisory scope' },
    ],
  },
  {
    icon: 'science',
    label: 'Research & Publication Output',
    description:
      'Published 11+ peer-reviewed papers and preprints spanning medical AI, foundation models, bioinformatics, geospatial intelligence, scientific computing, and trustworthy AI. Peer reviewer for IEEE Journal of Biomedical and Health Informatics.',
    metrics: [
      { value: '11+', label: 'Publications & preprints' },
      { value: '6', label: 'Research domains' },
      { value: 'IEEE JBHI', label: 'Peer reviewer' },
      { value: '2026', label: 'Most recent publications' },
    ],
  },
  {
    icon: 'school',
    label: 'Teaching & Mentoring',
    description:
      'Adjunct instructor at Linköping University delivering lectures and labs in statistics, machine learning, and bioinformatics. MSc student co-supervision at the Technical University of Denmark. Developed curriculum materials and Jupyter notebook assignments.',
    metrics: [
      { value: 'LiU', label: 'Adjunct instructor' },
      { value: 'TU Denmark', label: 'MSc co-supervision' },
      { value: 'Strong', label: 'Teaching evaluations' },
    ],
  },
]

export default function LeadershipPage() {
  return (
    <>
      <div className="page-hero">
        <div className="site-container">
          <p className="type-label-lg text-primary mb-3">Impact</p>
          <h1 className="type-headline-lg text-on-surface mb-4">Leadership &amp; Impact</h1>
          <p className="type-body-lg text-on-surface-variant max-w-2xl">
            Leading across startups, academia, and government, from founding clinical AI companies
            to advising on national AI strategy and running multi-hospital benchmark studies.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="site-container">
          <div className="grid lg:grid-cols-2 gap-6">
            {pillars.map((pillar, i) => (
              <div key={pillar.label} className={`md-card p-6 animate-fade-up stagger-${Math.min(i + 1, 5)}`}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="material-symbols-outlined icon-xl text-primary">{pillar.icon}</span>
                  <h2 className="type-title-md text-on-surface">{pillar.label}</h2>
                </div>
                <p className="type-body-md text-on-surface-variant mb-6">{pillar.description}</p>

                {pillar.metrics.length > 0 && (
                  <div className={`grid grid-cols-${Math.min(pillar.metrics.length, 3)} gap-4 pt-4 border-t border-outline/50`}>
                    {pillar.metrics.map((metric) => (
                      <div key={metric.label}>
                        <p className="type-headline-sm text-primary">{metric.value}</p>
                        <p className="type-label-sm text-on-surface-variant mt-0.5">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/experience" className="btn-filled">
              <span className="material-symbols-outlined icon-sm">work</span>
              Full experience
            </Link>
            <Link href="/contact" className="btn-outlined">
              <span className="material-symbols-outlined icon-sm">mail</span>
              Advisory inquiries
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
