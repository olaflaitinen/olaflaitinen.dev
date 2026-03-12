import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Gustav Olaf Yunus Laitinen-Fredriksson Lundström-Imanov for research collaborations, advisory engagements, or technical consulting.',
}

const contactMethods = [
  {
    icon: 'mail',
    label: 'Email',
    value: 'contact@olaflaitinen.dev',
    href: 'mailto:contact@olaflaitinen.dev',
    description: 'For research inquiries, collaboration proposals, and professional matters.',
  },
  {
    icon: 'open_in_new',
    label: 'LinkedIn',
    value: 'linkedin.com/in/olafylimanov',
    href: 'https://www.linkedin.com/in/olafylimanov/',
    description: 'Professional network and career history.',
  },
  {
    icon: 'code',
    label: 'GitHub',
    value: 'github.com/olaflaitinen',
    href: 'https://github.com/olaflaitinen',
    description: 'Open-source projects and code.',
  },
  {
    icon: 'school',
    label: 'Google Scholar',
    value: 'scholar.google.com/citations?user=WSqps1YAAAAJ',
    href: 'https://scholar.google.com/citations?user=WSqps1YAAAAJ&hl=en',
    description: 'Full publication list, citation metrics, and academic profile.',
  },
]

const collaborationTypes = [
  {
    icon: 'science',
    label: 'Research Partnerships',
    description:
      'Joint publications, co-designed studies, grant applications, and collaborative benchmarking in medical AI, explainability, bioinformatics, or geospatial AI.',
  },
  {
    icon: 'support_agent',
    label: 'Technical Advisory',
    description:
      'Strategic advising on AI architecture, clinical AI deployment, evaluation methodology, responsible AI governance, and research strategy.',
  },
  {
    icon: 'groups',
    label: 'Speaking & Lecturing',
    description:
      'Conference talks, guest lectures, and workshop facilitation on medical AI, trustworthy systems, and applied machine learning.',
  },
  {
    icon: 'laptop_mac',
    label: 'Contract & Consulting',
    description:
      'Focused project-based engagements in ML engineering, bioinformatics pipeline development, evaluation design, or AI system prototyping.',
  },
]

export default function ContactPage() {
  return (
    <>
      <div className="page-hero">
        <div className="site-container">
          <p className="type-label-lg text-primary mb-3">Contact</p>
          <h1 className="type-headline-lg text-on-surface mb-4">Let&apos;s Work Together</h1>
          <p className="type-body-lg text-on-surface-variant max-w-2xl">
            Open to research collaborations, advisory engagements, technical consulting, and
            speaking opportunities. Particularly interested in work at the intersection of
            rigorous AI methods and real-world deployment.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="site-container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact methods */}
            <div>
              <h2 className="type-headline-sm text-on-surface mb-6">Get in Touch</h2>
              <div className="space-y-4">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="md-card flex items-start gap-4 p-5 hover:border-primary/40 transition-all"
                  >
                    <span className="material-symbols-outlined icon-lg text-primary flex-shrink-0 mt-0.5">
                      {method.icon}
                    </span>
                    <div>
                      <p className="type-title-sm text-on-surface mb-0.5">{method.label}</p>
                      <p className="type-body-sm text-primary mb-1">{method.value}</p>
                      <p className="type-body-sm text-on-surface-variant">{method.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Collaboration types */}
            <div>
              <h2 className="type-headline-sm text-on-surface mb-6">Collaboration Areas</h2>
              <div className="space-y-4">
                {collaborationTypes.map((type) => (
                  <div key={type.label} className="flex items-start gap-4 p-4 rounded-xl bg-surface-container">
                    <span className="material-symbols-outlined icon-md text-primary flex-shrink-0 mt-0.5">
                      {type.icon}
                    </span>
                    <div>
                      <p className="type-title-sm text-on-surface mb-1">{type.label}</p>
                      <p className="type-body-sm text-on-surface-variant">{type.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Location / availability note */}
          <div className="mt-12 md-card-elevated p-6">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined icon-lg text-primary flex-shrink-0">location_on</span>
              <div>
                <p className="type-title-sm text-on-surface mb-2">Location &amp; Availability</p>
                <p className="type-body-md text-on-surface-variant">
                  Based between Finland, Sweden, and Denmark. Open to remote collaboration globally
                  and on-site engagements across Europe. Currently completing dual PhD programmes
                  at the Technical University of Denmark and University of Luxembourg.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
