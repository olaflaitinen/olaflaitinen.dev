import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Publications & Preprints',
  description:
    'All publications and preprints by Gustav Olaf Yunus Laitinen-Fredriksson Lundström-Imanov, medical AI, foundation models, bioinformatics, geospatial intelligence, scientific computing, and trustworthy AI.',
}

export default function PublicationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
