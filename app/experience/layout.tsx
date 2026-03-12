import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Experience',
  description:
    'Gustav Olaf Yunus Laitinen-Fredriksson Lundström-Imanov career history, 25+ roles across AI research, clinical AI, public-sector advisory, engineering leadership, and academia across Europe and the US.',
}

export default function ExperienceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
