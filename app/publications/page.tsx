'use client'

import { useState } from 'react'
import { publications } from '@/data/publications'

const allTags = Array.from(new Set(publications.flatMap((p) => p.tags))).sort()

export default function PublicationsPage() {
  const [activeTag, setActiveTag] = useState<string | null>(null)
  const [showAll, setShowAll] = useState(false)

  const filtered = activeTag
    ? publications.filter((p) => p.tags.includes(activeTag))
    : publications

  const visible = showAll ? filtered : filtered.slice(0, 9)

  return (
    <>
      <div className="page-hero">
        <div className="site-container">
          <p className="type-label-lg text-primary mb-3">Research</p>
          <h1 className="type-headline-lg text-on-surface mb-4">Publications &amp; Preprints</h1>
          <p className="type-body-lg text-on-surface-variant max-w-2xl">
            {publications.length} publications spanning medical AI, foundation models,
            bioinformatics, geospatial intelligence, scientific computing, and trustworthy AI.
            All recent work available on arXiv.
          </p>
        </div>
      </div>

      {/* ── Filter chips ──────────────────────────────────── */}
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur border-b border-outline">
        <div className="site-container py-3">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => { setActiveTag(null); setShowAll(false) }}
              className={`md-filter-chip${activeTag === null ? ' md-filter-chip-selected' : ''}`}
            >
              {activeTag === null && (
                <span className="material-symbols-outlined icon-xs">check</span>
              )}
              All ({publications.length})
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => { setActiveTag(activeTag === tag ? null : tag); setShowAll(false) }}
                className={`md-filter-chip${activeTag === tag ? ' md-filter-chip-selected' : ''}`}
              >
                {activeTag === tag && (
                  <span className="material-symbols-outlined icon-xs">check</span>
                )}
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Publications grid ─────────────────────────────── */}
      <section className="section">
        <div className="site-container">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <span className="material-symbols-outlined icon-xl text-on-surface-dim mb-4 block">search_off</span>
              <p className="type-body-lg text-on-surface-variant">No publications found for this filter.</p>
              <button
                onClick={() => setActiveTag(null)}
                className="btn-text mt-4"
              >
                Clear filter
              </button>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {visible.map((pub, i) => (
                  <article
                    key={pub.id}
                    className={`md-card flex flex-col p-5 animate-fade-up stagger-${Math.min(i + 1, 5)}`}
                  >
                    {/* Venue + Date + Co-authored */}
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="flex flex-wrap items-center gap-1.5 min-w-0">
                        <span className="badge-primary flex-shrink-0">{pub.venue}</span>
                        {pub.coAuthored && (
                          <span className="badge-neutral flex-shrink-0">Co-authored</span>
                        )}
                      </div>
                      <span className="type-label-sm text-on-surface-dim flex-shrink-0">{pub.date}</span>
                    </div>

                    {/* Title */}
                    <h2 className="type-title-sm text-on-surface leading-snug mb-3 flex-1">
                      {pub.title}
                    </h2>

                    {/* Abstract */}
                    <p className="type-body-sm text-on-surface-variant leading-relaxed mb-4 line-clamp-3">
                      {pub.abstract}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {pub.tags.slice(0, 4).map((tag) => (
                        <button
                          key={tag}
                          onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                          className={`md-tag cursor-pointer hover:bg-blue-container hover:text-primary transition-colors${
                            activeTag === tag ? ' bg-blue-container text-primary' : ''
                          }`}
                        >
                          {tag}
                        </button>
                      ))}
                      {pub.tags.length > 4 && (
                        <span className="md-tag">+{pub.tags.length - 4}</span>
                      )}
                    </div>

                    {/* Link */}
                    <div className="mt-auto pt-3 border-t border-outline/50">
                      <a
                        href={pub.arxivUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 type-label-sm text-on-surface-variant hover:text-primary transition-colors"
                      >
                        <span className="material-symbols-outlined icon-xs">open_in_new</span>
                        View on arXiv
                      </a>
                    </div>
                  </article>
                ))}
              </div>

              {filtered.length > 9 && (
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="btn-outlined"
                >
                  {showAll ? (
                    <>
                      <span className="material-symbols-outlined icon-sm">expand_less</span>
                      Show fewer
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined icon-sm">expand_more</span>
                      Show all {filtered.length} publications
                    </>
                  )}
                </button>
              )}
            </>
          )}

          {/* Scholar / arXiv links */}
          <div className="mt-12 pt-8 border-t border-outline flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="type-body-md text-on-surface-variant">
              Full citation list and additional work available on Google Scholar and arXiv.
            </p>
            <div className="flex gap-3">
              <a
                href="https://scholar.google.com/citations?user=WSqps1YAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outlined btn-sm"
              >
                <span className="material-symbols-outlined icon-xs">open_in_new</span>
                Google Scholar
              </a>
              <a
                href="https://arxiv.org/search/?searchtype=author&query=Laitinen%2C+Olaf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outlined btn-sm"
              >
                <span className="material-symbols-outlined icon-xs">open_in_new</span>
                arXiv Profile
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
