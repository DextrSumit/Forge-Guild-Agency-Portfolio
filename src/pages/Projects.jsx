import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PROJECTS } from '../data/projects'
import './Projects.css'
import coverImg from '../assets/cover.jpg'

const FILTERS = ['ALL', 'WEB', 'VIDEO', 'BRAND']

/* ── Discipline accent colours (match projects.js accentColor) ── */
const DISCIPLINE_META = {
  WEB:   { color: '#2563EB', label: 'Web Development' },
  VIDEO: { color: '#E05252', label: 'Video Production' },
  BRAND: { color: '#C5A059', label: 'Brand Identity'  },
}

/* ── Thumbnail placeholder gradient per discipline ── */
function CardVisual({ project, onClick }) {
  const meta = DISCIPLINE_META[project.discipline] ?? DISCIPLINE_META.WEB
  const hasThumb = Boolean(project.thumbnail)

  return (
    <div className="archive-card__visual" onClick={onClick} style={{ cursor: 'pointer' }}>
      {hasThumb ? (
        <img
          src={project.thumbnail}
          alt={project.title}
          className="archive-card__thumb"
          loading="lazy"
        />
      ) : (
        <div
          className="archive-card__visual-inner"
          style={{
            background: `radial-gradient(ellipse at 30% 40%, ${meta.color}22 0%, #111113 70%)`,
          }}
        >
          <div className="archive-card__placeholder">
            <span
              className="archive-card__placeholder-icon"
              style={{ color: meta.color }}
            >
              {project.discipline === 'VIDEO' ? '▶' : project.discipline === 'WEB' ? '⌗' : '◆'}
            </span>
            <span className="archive-card__visual-label">{project.discipline}</span>
          </div>
        </div>
      )}
      <div className="archive-card__overlay" style={{ '--overlay-color': meta.color }}>
        <span className="archive-card__overlay-cta">VIEW PROJECT →</span>
      </div>
    </div>
  )
}

/* ── Project Modal ─────────────────────────────────────────── */
function ProjectModal({ project, onClose }) {
  const meta = DISCIPLINE_META[project.discipline] ?? DISCIPLINE_META.WEB

  // Close on Escape
  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <motion.div
        className="modal"
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.97 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Close */}
        <button className="modal__close" onClick={onClose} aria-label="Close">✕</button>

        {/* Media area */}
        <div className="modal__media">
          {project.videoEmbedUrl ? (
            <div className="modal__video-wrap">
              <iframe
                src={project.videoEmbedUrl}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="modal__iframe"
              />
            </div>
          ) : project.thumbnail ? (
            <img src={project.thumbnail} alt={project.title} className="modal__image" />
          ) : (
            <div
              className="modal__media-placeholder"
              style={{
                background: `radial-gradient(ellipse at 30% 50%, ${meta.color}33 0%, #111113 65%)`,
              }}
            >
              <span className="modal__media-icon" style={{ color: meta.color }}>
                {project.discipline === 'VIDEO' ? '▶' : project.discipline === 'WEB' ? '⌗' : '◆'}
              </span>
              <p className="modal__media-hint">
                Add a thumbnail or video embed in <code>src/data/projects.js</code>
              </p>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="modal__body">
          <div className="modal__meta">
            <span
              className="modal__discipline"
              style={{ color: meta.color, borderColor: meta.color, background: `${meta.color}18` }}
            >
              {meta.label}
            </span>
            <span className="modal__year">{project.year}</span>
          </div>

          <h2 className="modal__title">{project.title}</h2>
          <p className="modal__desc">{project.longDesc || project.desc}</p>

          <div className="modal__tags">
            {project.tags.map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary modal__cta"
            >
              {project.discipline === 'VIDEO' ? 'WATCH NOW ↗' : 'VIEW LIVE ↗'}
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ── Projects Page ──────────────────────────────────────────── */
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('ALL')
  const [selected, setSelected] = useState(null)

  const filtered = activeFilter === 'ALL'
    ? PROJECTS
    : PROJECTS.filter(p => p.discipline === activeFilter)

  const openProject = useCallback(project => setSelected(project), [])
  const closeModal   = useCallback(() => setSelected(null), [])

  return (
    <div className="archive-page">
      {/* Cover Banner */}
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ 
            position: 'relative',
            width: '100%', 
            minHeight: '280px', 
            borderRadius: '16px', 
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '40px 24px'
          }}
        >
          {/* Background Image with Overlay */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
            <img src={coverImg} alt="Cover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(10, 14, 44, 0.7)' }}></div>
          </div>

          {/* Text Content */}
          <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
            <h1 className="section-title" style={{ margin: '8px 0' }}>Past Work &amp; Case Studies</h1>
          </div>
        </motion.div>
      </div>

      <section className="section" style={{ paddingTop: '64px' }}>
        <div className="container">
          <p className="section-sub" style={{ maxWidth: '100%', marginBottom: '48px', fontSize: '1.2rem', textAlign: 'center' }}>
            A curated record of completed missions — each one a proof point
            of our precision-first approach.
          </p>

          {/* Filters */}
          <div className="archive-filters">
            {FILTERS.map(f => (
              <button
                key={f}
                id={`filter-${f.toLowerCase()}`}
                className={`archive-filter${activeFilter === f ? ' archive-filter--active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="divider" style={{ marginBottom: 48 }} />

          {/* Grid */}
          <motion.div className="archive-grid" layout>
            <AnimatePresence mode="popLayout">
              {filtered.map(project => {
                const meta = DISCIPLINE_META[project.discipline] ?? DISCIPLINE_META.WEB
                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3 }}
                    className="archive-card"
                    onClick={() => openProject(project)}
                    style={{ cursor: 'pointer' }}
                  >
                    <CardVisual project={project} onClick={() => openProject(project)} />

                    <div className="archive-card__body">
                      <div className="archive-card__meta">
                        <span
                          className="archive-card__discipline"
                          style={{
                            color: meta.color,
                            borderColor: meta.color,
                            background: `${meta.color}18`,
                          }}
                        >
                          {project.discipline}
                        </span>
                        <span className="archive-card__year">{project.year}</span>
                      </div>
                      <h3 className="archive-card__title">{project.title}</h3>
                      <p className="archive-card__desc">{project.desc}</p>
                      <div className="archive-card__tags">
                        {project.tags.map(t => (
                          <span key={t} className="tag">{t}</span>
                        ))}
                      </div>
                      <div className="archive-card__footer">
                        <span className="archive-card__view-cta">View Project →</span>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={closeModal} />
        )}
      </AnimatePresence>
    </div>
  )
}
