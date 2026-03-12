import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://olaflaitinen.dev/sitemap.xml',
    host: 'https://olaflaitinen.dev',
  }
}
