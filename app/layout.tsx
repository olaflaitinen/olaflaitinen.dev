import type { Metadata } from 'next'
import './globals.css'
import TopAppBar from '@/components/layout/TopAppBar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://olaflaitinen.dev'),
  title: {
    default: 'Gustav Olaf Yunus Laitinen-Fredriksson Lundström-Imanov, AI Leader, Researcher & Engineer',
    template: '%s | Gustav Olaf Yunus Laitinen-Fredriksson Lundström-Imanov',
  },
  description:
    'AI leader, researcher, and engineer working across medical AI, multimodal systems, explainable AI, bioinformatics, evaluation, and strategic technology leadership.',
  keywords: [
    'Gustav Olaf Yunus Laitinen-Fredriksson Lundström-Imanov',
    'AI researcher',
    'Medical AI',
    'Explainable AI',
    'Multimodal AI',
    'Bioinformatics',
    'Machine Learning',
    'Clinical AI',
    'MLOps',
    'Human-in-the-Loop AI',
    'Federated Learning',
    'AI leadership',
    'Proteomics',
    'Multi-omics',
    'LLM evaluation',
  ],
  authors: [{ name: 'Gustav Olaf Yunus Laitinen-Fredriksson Lundström-Imanov', url: 'https://olaflaitinen.dev' }],
  creator: 'Gustav Olaf Yunus Laitinen-Fredriksson Lundström-Imanov',
  publisher: 'Gustav Olaf Yunus Laitinen-Fredriksson Lundström-Imanov',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://olaflaitinen.dev',
    title: 'Gustav Olaf Yunus Laitinen-Fredriksson Lundström-Imanov, AI Leader, Researcher & Engineer',
    description:
      'AI leader, researcher, and engineer working across medical AI, multimodal systems, explainable AI, bioinformatics, evaluation, and strategic technology leadership.',
    siteName: 'Gustav Olaf Yunus Laitinen-Fredriksson Lundström-Imanov',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Gustav Olaf Yunus Laitinen-Fredriksson Lundström-Imanov, AI Leader, Researcher & Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gustav Olaf Yunus Laitinen-Fredriksson Lundström-Imanov, AI Leader, Researcher & Engineer',
    description:
      'AI leader, researcher, and engineer working across medical AI, multimodal systems, explainable AI, bioinformatics, evaluation, and strategic technology leadership.',
    images: ['/og-image.svg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://olaflaitinen.dev',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Gustav Olaf Yunus Laitinen-Fredriksson Lundström-Imanov',
  url: 'https://olaflaitinen.dev',
  jobTitle: 'AI Leader, Researcher & Engineer',
  description:
    'AI leader, researcher, and engineer working across medical AI, explainable AI, multimodal systems, bioinformatics, and strategic technology leadership.',
  sameAs: [
    'https://www.linkedin.com/in/olafylimanov/',
    'https://github.com/olaflaitinen',
    'https://scholar.google.com/citations?user=WSqps1YAAAAJ&hl=en',
  ],
  knowsAbout: [
    'Medical AI',
    'Explainable AI',
    'Multimodal Systems',
    'Bioinformatics',
    'Machine Learning',
    'MLOps',
    'Federated Learning',
    'Human-in-the-Loop AI',
    'LLM Evaluation',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans:ital,wght@0,400;0,500;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
          <TopAppBar />
          <main>{children}</main>
          <Footer />
        </body>
    </html>
  )
}
