import type { Metadata } from 'next'
import Link from 'next/link'
import { publications } from '@/data/publications'

export const metadata: Metadata = {
  title: 'Research',
  description:
    'Research themes and areas of Gustav Olaf Yunus Laitinen-Fredriksson Lundström-Imanov, medical AI, explainable AI, bioinformatics, geospatial intelligence, and foundation models.',
}

const themes = [
  {
    icon: 'biotech',
    label: 'Medical & Clinical AI',
    description:
      'AI systems for radiology, pathology, fetal ultrasound, and clinical decision support. Human-AI collaboration studies, clinician-in-the-loop evaluation protocols, and federated learning for privacy-preserving clinical research. Current PhD focus at the Technical University of Denmark.',
    paperIds: ['fetal-ultrasound-xai', 'transparency-medical-lm'],
  },
  {
    icon: 'visibility',
    label: 'Explainability & Trustworthy AI',
    description:
      'Uncertainty-calibrated explainability methods including GradCAM variants, LIME-style surrogates, and uncertainty-weighted activation maps. Transparency frameworks, model cards, data provenance, and governance for responsible AI deployment.',
    paperIds: ['fetal-ultrasound-xai', 'transparency-medical-lm'],
  },
  {
    icon: 'code_blocks',
    label: 'Bioinformatics & Molecular Systems',
    description:
      'Multi-omics integration, large-scale proteomics pipelines, WGS/WES workflows, and ML-driven biomarker discovery. Current PhD focus at University of Luxembourg on systems and molecular biomedicine.',
    paperIds: [],
  },
  {
    icon: 'hub',
    label: 'Foundation Models & LLMs',
    description:
      'Evaluation methodology and architecture research for large language models and multimodal systems. Patch-based time series transformers, transparent clinical NLP, and mechanistic analysis of catastrophic forgetting.',
    paperIds: ['patchformer', 'catastrophic-forgetting', 'transparency-medical-lm'],
  },
  {
    icon: 'map',
    label: 'Geospatial & Urban AI',
    description:
      'GeoAI frameworks for urban mobility, spatio-temporal traffic modeling, climate-resilient housing, and autonomous site selection. Evidence-based urban policy and public-sector analytics.',
    paperIds: ['spatiotemporal-traffic', 'urban-foundation-models', 'autonomous-housing'],
  },
  {
    icon: 'calculate',
    label: 'Scientific Computing & Physics ML',
    description:
      'Physics-informed neural networks with Bayesian uncertainty quantification for PDEs. Multi-fidelity frameworks, neuromorphic edge computing, and graph neural networks for combinatorial optimization.',
    paperIds: ['multi-fidelity-pinns', 'neuromorphic-edge', 'vehicle-routing-gnn'],
  },
]

const pubMap = new Map(publications.map((p) => [p.id, p]))

export default function ResearchPage() {
  return (
    <>
      <div className="page-hero">
        <div className="site-container">
          <p className="type-label-lg text-primary mb-3">Research</p>
          <h1 className="type-headline-lg text-on-surface mb-4">Research Areas</h1>
          <p className="type-body-lg text-on-surface-variant max-w-2xl">
            Work at the intersection of machine learning methods, domain expertise, and real-world
            deployment constraints, across six core research themes.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="site-container">
          <div className="grid lg:grid-cols-2 gap-6">
            {themes.map((theme, i) => {
              const relatedPapers = theme.paperIds
                .map((id) => pubMap.get(id))
                .filter(Boolean) as typeof publications

              return (
                <div key={theme.label} className={`md-card p-6 animate-fade-up stagger-${Math.min(i + 1, 5)}`}>
                  <div className="flex items-start gap-4 mb-4">
                    <span className="material-symbols-outlined icon-xl text-primary flex-shrink-0">{theme.icon}</span>
                    <div>
                      <h2 className="type-title-lg text-on-surface mb-2">{theme.label}</h2>
                      <p className="type-body-md text-on-surface-variant">{theme.description}</p>
                    </div>
                  </div>

                  {relatedPapers.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-outline/50">
                      <p className="type-label-sm text-on-surface-dim mb-3">Related publications</p>
                      <div className="space-y-2">
                        {relatedPapers.slice(0, 2).map((pub) => (
                          <div key={pub.id} className="flex items-start gap-2">
                            <span className="material-symbols-outlined icon-xs text-primary flex-shrink-0 mt-0.5">article</span>
                            <p className="type-body-sm text-on-surface-variant line-clamp-2">{pub.title}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/publications" className="btn-filled">
              <span className="material-symbols-outlined icon-sm">article</span>
              View all publications
            </Link>
            <Link href="/contact" className="btn-outlined">
              <span className="material-symbols-outlined icon-sm">mail</span>
              Research collaborations
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
