import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Services.css'
import imgVideo from '../assets/Video Editing.jpg'
import imgGraphic from '../assets/Graphic Design.jpg'
import imgWeb from '../assets/Web Development.jpg'
import imgBrand from '../assets/Brand Identity.jpg'
import coverImg from '../assets/cover.jpg'

const SERVICES = [
  {
    id: 'video',
    index: '01',
    title: 'Video Editing Services',
    bg: imgVideo,
    summary: 'High-retention video production engineered for engagement and brand authority.',
    features: [
      'Short Form Video Editing (Reels, Shorts, TikTok)',
      'Long Form Video Editing (YouTube Videos, Podcasts)',
      'Corporate & Business Videos',
      'Promotional & Advertisement Videos',
      'Color Correction & Color Grading',
      'Subtitles & Captions',
      'Video Thumbnails',
      'Event Video Highlights',
      'Product Showcase Videos',
    ],
  },
  {
    id: 'graphic',
    index: '02',
    title: 'Graphic Design Services',
    bg: imgGraphic,
    summary: 'Visual assets designed to command attention and signal premium market positioning.',
    features: [
      'Social Media Post Design',
      'Banner & Poster Design',
      'YouTube Thumbnails',
      'Presentation Design',
      'Packaging Design',
      'Marketing Creatives & Ad Designs',
      'Brochure & Flyer Design',
    ],
  },
  {
    id: 'web',
    index: '03',
    title: 'Web Development Services',
    bg: imgWeb,
    summary: 'High-converting websites architected for speed, scale, and measurable growth.',
    features: [
      'Business Websites',
      'Portfolio Websites',
      'Landing Pages',
      'E-commerce Stores',
      'Website Redesign',
      'Responsive Mobile-Friendly Websites',
      'Website Maintenance & Updates',
      'Speed Optimization',
      'Contact Forms & Lead Generation Setup',
      'Custom Web Applications',
    ],
  },
  {
    id: 'brand',
    index: '04',
    title: 'Brand Identity',
    bg: imgBrand,
    summary: 'Complete brand positioning and social media management systems.',
    features: [
      'Content Planning & Strategy',
      'Post Creation & Scheduling',
      'Reel & Short Video Management',
      'Profile Optimization',
      'Community Engagement',
      'Social Media Growth Strategy',
      'Ad Creative Design',
      'Analytics & Performance Reports',
      'Personal Brand Building',
    ],
  },
]


const PROTOCOL_STEPS = [
  {
    title: 'Discovery & Strategy',
    detail: 'System diagnostic and goal mapping via our initial consultation.'
  },
  {
    title: 'Proposal & Onboarding',
    detail: 'Scope locked with transparent pricing, followed immediately by project kickoff.'
  },
  {
    title: 'Design & Production',
    detail: 'The active build phase where your assets are forged with precision.'
  },
  {
    title: 'Review & Refinement',
    detail: 'Structured feedback loops and targeted revision cycles to ensure perfection.'
  },
  {
    title: 'Final Delivery & Deployment',
    detail: 'Handoff of the complete asset package and successful launch of your project.'
  },
  {
    title: 'Ongoing Support & Growth',
    detail: 'Optional retainers for continuous content management, scaling, and maintenance.'
  },
]

export default function Services() {
  const [openId, setOpenId] = useState('web')
  const [activeStep, setActiveStep] = useState(0)

  return (
    <div className="capabilities-page">
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
            <h1 className="section-title" style={{ margin: '8px 0' }}>What We Provide</h1>
          </div>
        </motion.div>
      </div>

      <section className="section" style={{ paddingTop: '64px' }}>
        <div className="container">
          <p className="section-sub" style={{ maxWidth: '100%', marginBottom: '64px', fontSize: '1.2rem', textAlign: 'center' }}>
            Four specialized disciplines designed to scale your brand and drive measurable results.
          </p>

          {/* ── Accordion panels ── */}
          <div className="capabilities-list">
            {SERVICES.map((service, i) => {
              const isOpen = openId === service.id
              return (
                <motion.div
                  key={service.id}
                  className={`capabilities-item${isOpen ? ' capabilities-item--open' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  style={{
                    backgroundImage: `linear-gradient(to right, rgba(10, 14, 44, 0.92) 0%, rgba(10, 14, 44, 0.75) 100%), url("${service.bg}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <button
                    id={`capability-${service.id}`}
                    className="capabilities-item__trigger"
                    onClick={() => setOpenId(isOpen ? null : service.id)}
                    aria-expanded={isOpen}
                  >
                    <div className="capabilities-item__trigger-left">
                      <span className="capabilities-item__index">{service.index}</span>
                      <span className="capabilities-item__title">{service.title}</span>
                    </div>
                    <span className={`capabilities-item__chevron${isOpen ? ' capabilities-item__chevron--open' : ''}`}>
                      ↓
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div className="capabilities-item__body">
                          <p className="capabilities-item__summary">{service.summary}</p>
                          <div className="capabilities-item__features">
                            {service.features.map(f => (
                              <div key={f} className="capabilities-item__feature">
                                <span className="capabilities-item__feature-arrow">→</span>
                                <span>{f}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>

          {/* ── Process ── */}
          <div className="divider" style={{ margin: '96px 0 64px' }} />
          <div className="section-label" style={{ marginBottom: 16 }}>THE PROTOCOL</div>
          <h2 className="section-title">Our Delivery Process</h2>
          <p className="section-sub" style={{ marginBottom: 48 }}>
            Every project follows the same six-step protocol — no surprises, no scope creep.
          </p>

          <div className="protocol-timeline">
            {PROTOCOL_STEPS.map((step, i) => {
              const isActive = activeStep === i
              return (
                <motion.div
                  key={i}
                  className={`protocol-node ${isActive ? 'active' : ''}`}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                >
                  <div className="protocol-node__line" />
                  <div className="protocol-node__dot" />
                  <div 
                    className="protocol-node__content"
                    onClick={() => setActiveStep(isActive ? null : i)}
                  >
                    <div className="protocol-node__header">
                      <span className="protocol-node__num">0{i + 1}</span>
                      <h3 className="protocol-node__title">{step.title}</h3>
                      <span className="protocol-node__chevron">{isActive ? '−' : '+'}</span>
                    </div>
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                          style={{ overflow: 'hidden' }}
                        >
                          <div className="protocol-node__detail">
                            <p>{step.detail}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              )
            })}
          </div>


        </div>
      </section>
    </div>
  )
}
