import Link from 'next/link'

const footerLinks = [
  { label: 'About', href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Research', href: '/research' },
  { label: 'Publications', href: '/publications' },
  { label: 'Skills', href: '/skills' },
  { label: 'Leadership', href: '/leadership' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-outline bg-surface-dim">
      <div className="site-container py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <Link href="/" className="type-title-lg text-on-surface hover:text-primary transition-colors block mb-3">
              Gustav Olaf Yunus Laitinen-Fredriksson Lundström-Imanov
            </Link>
            <p className="type-body-sm text-on-surface-variant max-w-xs">
              AI Leader, Researcher &amp; Engineer. Building trustworthy AI systems
              across medical, geospatial, and strategic domains.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="type-label-md text-on-surface mb-4">Navigation</p>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="type-body-sm text-on-surface-variant hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="type-label-md text-on-surface mb-4">Connect</p>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.linkedin.com/in/olafylimanov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 type-body-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined icon-xs">open_in_new</span>
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/olaflaitinen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 type-body-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined icon-xs">open_in_new</span>
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://scholar.google.com/citations?user=WSqps1YAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 type-body-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined icon-xs">open_in_new</span>
                  Google Scholar
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@olaflaitinen.dev"
                  className="flex items-center gap-2 type-body-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined icon-xs">mail</span>
                  contact@olaflaitinen.dev
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="md-divider mb-6" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="type-body-sm text-on-surface-dim">
            &copy; {year} Gustav Olaf Yunus Laitinen-Fredriksson Lundström-Imanov. All rights reserved.
          </p>
          <p className="type-body-sm text-on-surface-dim">
            olaflaitinen.dev
          </p>
        </div>
      </div>
    </footer>
  )
}
