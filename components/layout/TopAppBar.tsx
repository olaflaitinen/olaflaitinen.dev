'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Experience', href: '/experience' },
  { label: 'Research', href: '/research' },
  { label: 'Publications', href: '/publications' },
  { label: 'Skills', href: '/skills' },
  { label: 'Leadership', href: '/leadership' },
  { label: 'Contact', href: '/contact' },
]

export default function TopAppBar() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setDrawerOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  return (
    <>
      <header className={`top-app-bar${scrolled ? ' scrolled' : ''}`}>
        <div className="site-container flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="type-title-lg text-on-surface hover:text-primary transition-colors"
            style={{ fontWeight: 500, textDecoration: 'none' }}
          >
            Gustav Olaf Yunus Laitinen-Fredriksson Lundström-Imanov
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`md-tab${isActive ? ' md-tab-active' : ''}`}
                  style={{ height: 40, padding: '0 16px', fontSize: 14 }}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-container transition-colors"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open navigation menu"
          >
            <span className="material-symbols-outlined icon-md text-on-surface-variant">menu</span>
          </button>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      {drawerOpen && (
        <div
          className="nav-drawer-overlay"
          onClick={() => setDrawerOpen(false)}
          style={{ opacity: drawerOpen ? 1 : 0 }}
        />
      )}

      {/* Mobile nav drawer */}
      <nav className={`nav-drawer${drawerOpen ? ' open' : ''}`} aria-label="Mobile navigation">
        <div className="flex items-center justify-between px-4 h-16 border-b border-outline/40">
          <span className="type-title-lg text-on-surface">Navigation</span>
          <button
            className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-surface-container transition-colors"
            onClick={() => setDrawerOpen(false)}
            aria-label="Close navigation menu"
          >
            <span className="material-symbols-outlined icon-md text-on-surface-variant">close</span>
          </button>
        </div>

        <div className="flex flex-col py-2">
          <Link
            href="/"
            className={`flex items-center gap-3 px-6 py-3 type-label-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors${pathname === '/' ? ' text-primary bg-blue-container/60' : ''}`}
          >
            <span className="material-symbols-outlined icon-sm">home</span>
            Home
          </Link>
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-6 py-3 type-label-lg hover:bg-surface-container transition-colors${
                  isActive ? ' text-primary bg-blue-container/60' : ' text-on-surface-variant hover:text-on-surface'
                }`}
              >
                <span className="material-symbols-outlined icon-sm">
                  {drawerIconMap[link.href] || 'arrow_forward'}
                </span>
                {link.label}
              </Link>
            )
          })}
        </div>

        <div className="mt-auto px-6 py-6 border-t border-outline/40">
          <p className="type-body-sm text-on-surface-dim mb-3">Gustav Olaf Yunus Laitinen-Fredriksson Lundström-Imanov</p>
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/olafylimanov/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 type-label-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined icon-xs">open_in_new</span>
              LinkedIn
            </a>
            <a
              href="https://github.com/olaflaitinen"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 type-label-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined icon-xs">open_in_new</span>
              GitHub
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

const drawerIconMap: Record<string, string> = {
  '/about': 'person',
  '/experience': 'work',
  '/research': 'science',
  '/publications': 'article',
  '/skills': 'psychology',
  '/leadership': 'groups',
  '/contact': 'mail',
}
