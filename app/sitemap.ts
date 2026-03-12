import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://olaflaitinen.dev'
  const pages = [
    { path: '', priority: 1.0, freq: 'monthly' as const },
    { path: '/about', priority: 0.9, freq: 'monthly' as const },
    { path: '/experience', priority: 0.9, freq: 'monthly' as const },
    { path: '/research', priority: 0.9, freq: 'monthly' as const },
    { path: '/publications', priority: 0.95, freq: 'weekly' as const },
    { path: '/skills', priority: 0.8, freq: 'monthly' as const },
    { path: '/leadership', priority: 0.8, freq: 'monthly' as const },
    { path: '/contact', priority: 0.7, freq: 'yearly' as const },
  ]

  return pages.map(({ path, priority, freq }) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: freq,
    priority,
  }))
}
