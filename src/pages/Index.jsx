import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import './Index.css'

const STATS = [
  { value: '40+', label: 'Projects Delivered' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '3×', label: 'Avg. Engagement Lift' },
]

import discoverySvg from '../assets/Discovery and Strategy.svg'
import proposalSvg from '../assets/Proposal and Onboarding.svg'
import designSvg from '../assets/Design And Production.svg'
import reviewSvg from '../assets/Review and Refinement.svg'
import deliverySvg from '../assets/Delivery and Deployment.svg'
import supportSvg from '../assets/Ongoing Support & Growth.svg'

const WORKFLOW_STEPS = [
  {
    title: 'Discovery & Strategy',
    detail: 'System diagnostic and goal mapping via our initial consultation.',
    img: discoverySvg
  },
  {
    title: 'Proposal & Onboarding',
    detail: 'Scope locked with transparent pricing, followed immediately by project kickoff.',
    img: proposalSvg
  },
  {
    title: 'Design & Production',
    detail: 'The active build phase where your assets are forged with precision.',
    img: designSvg
  },
  {
    title: 'Review & Refinement',
    detail: 'Structured feedback loops and targeted revision cycles to ensure perfection.',
    img: reviewSvg
  },
  {
    title: 'Final Delivery & Deployment',
    detail: 'Handoff of the complete asset package and successful launch of your project.',
    img: deliverySvg
  },
  {
    title: 'Ongoing Support & Growth',
    detail: 'Optional retainers for continuous content management, scaling, and maintenance.',
    img: supportSvg
  },
]

const SOLUTIONS_DATA = {
  'video': {
    label: 'VIDEO EDITING',
    items: [
      {
        title: 'Youtube Videos',
        watermark: 'YouTube',
        description: 'High-retention YouTube videos, podcast edits, and repurposing long-form content into viral short-form Reels, TikToks, and Shorts.',
      },
      {
        title: 'Travel Videos',
        watermark: 'Travel',
        description: 'Cinematic travel videos, daily vlogs, and destination highlights that require engaging pacing and dynamic storytelling.',
      },
      {
        title: 'Educational Videos',
        watermark: 'Education',
        description: 'Editing educational modules, online courses, and informative explainer videos to keep students engaged.',
      },
      {
        title: 'Real Estate',
        watermark: 'Real Estate',
        description: 'Property walkthroughs, agent profile videos, and neighborhood guides showcasing properties in their best light.',
      },
      {
        title: 'Finance Creators',
        watermark: 'Finance',
        description: 'Market analysis breakdowns, personal finance tips, and high-retention short-form clips for social media.',
      },
    ]
  },
  'graphic': {
    label: 'GRAPHIC DESIGN',
    items: [
      {
        title: 'E-commerce & D2C',
        watermark: 'Commerce',
        description: 'Constant need for ad creatives, product mockups, and banner designs.',
      },
      {
        title: 'Food & Beverage',
        watermark: 'Food',
        description: 'Menu designs, appetizing social media posts, and unique packaging.',
      },
      {
        title: 'Fashion & Beauty',
        watermark: 'Fashion',
        description: 'Lookbooks, elegant brand assets, and aesthetic social media grids.',
      },
      {
        title: 'Print Design',
        watermark: 'Print',
        description: 'Design visually appealing print materials such as brochures, business cards, and packaging.',
      },
      {
        title: 'Social Media Graphics',
        watermark: 'Social',
        description: 'Create eye-catching graphics for social media platforms to engage your audience and increase brand awareness.',
      },
    ]
  },
  'web': {
    label: 'WEB DEVELOPMENT',
    items: [
      {
        title: 'Law Firms',
        watermark: 'Legal',
        description: 'Professional, fast, and trustworthy sites focusing on lead generation and appointment booking.',
      },
      {
        title: 'Local Services',
        watermark: 'Local',
        description: 'High-converting landing pages focused on local SEO and instant contact forms.',
      },
      {
        title: 'Healthcare',
        watermark: 'Health',
        description: 'Informational sites with patient portals, booking systems, and clear service breakdowns.',
      },
      {
        title: 'High-End E-commerce',
        watermark: 'Luxury',
        description: 'Custom, high-performance online stores that require a premium user experience beyond basic templates.',
      },
      {
        title: 'SaaS Startups',
        watermark: 'Startup',
        description: 'High-converting landing pages and custom web applications that need to explain complex products simply.',
      },
    ]
  },
  'brand': {
    label: 'BRAND IDENTITY',
    items: [
      {
        title: 'Brand Identity',
        watermark: 'BRANDING',
        description: 'Create a cohesive and memorable brand identity, including logos, color palettes, and typography.',
      },
      {
        title: 'Personal Brands',
        watermark: 'Personal',
        description: 'Complete positioning, profile optimization, and thought-leadership content strategy.',
      },
      {
        title: 'Fitness Studios',
        watermark: 'Fitness',
        description: 'Establishing a premium aesthetic, community engagement, and lifestyle-driven social media management.',
      },
      {
        title: 'Eco-Friendly Brands',
        watermark: 'Eco',
        description: 'Mission-driven branding that requires specific tone-of-voice, earthy aesthetics, and educational content planning.',
      },
      {
        title: 'Corporate B2B',
        watermark: 'Corporate',
        description: 'Professional brand revamps, corporate social media management, and employee-advocacy content systems.',
      },
    ]
  }
}

const TECH_ICONS = [
  // Row 1 (Top)
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aftereffects/aftereffects-original.svg', top: '5%', right: '5%', left: 'auto', delay: 2, size: 46 },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', top: '10%', right: '15%', left: 'auto', delay: 0, size: 56 },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', top: '8%', right: '35%', left: 'auto', delay: 1.2, size: 44 },

  // Row 2
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg', top: '30%', right: '8%', left: 'auto', delay: 0.5, size: 48 },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg', top: '38%', right: '18%', left: 'auto', delay: 0.3, size: 48 },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', top: '32%', right: '28%', left: 'auto', delay: 1, size: 52 },

  // Row 3
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg', top: '55%', right: '5%', left: 'auto', delay: 1.8, size: 50 },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg', top: '65%', right: '15%', left: 'auto', delay: 0.7, size: 46 },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', top: '58%', right: '25%', left: 'auto', delay: 1.5, size: 48 },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg', top: '60%', right: '35%', left: 'auto', delay: 0.8, size: 50 },

  // Row 4 (Bottom)
  { src: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg', top: '80%', right: '8%', left: 'auto', delay: 1.6, size: 48 },
  { src: 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg', top: '88%', right: '18%', left: 'auto', delay: 0.9, size: 52 },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', top: '82%', right: '30%', left: 'auto', delay: 1.3, size: 56 },
]

export default function Index() {
  const [activeStep, setActiveStep] = useState(0)
  const [activeSolutionTab, setActiveSolutionTab] = useState('video')
  const headlineRef = useRef(null)
  const glowRef = useRef(null)

  useEffect(() => {
    if (!headlineRef.current) return

    // GSAP char-by-char reveal — line by line so each <span.hero__line> breaks naturally
    const lines = headlineRef.current.querySelectorAll('.hero__line')
    let runningDelay = 0.3
    lines.forEach(line => {
      const raw = line.textContent
      line.innerHTML = raw
        .split('')
        .map(c => c === ' ' ? ' ' : `<span class="hero__char">${c}</span>`)
        .join('')
      const spans = line.querySelectorAll('.hero__char')
      gsap.fromTo(
        spans,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.025, duration: 0.4, ease: 'power2.out', delay: runningDelay }
      )
      runningDelay += spans.length * 0.025
    })

    // Subtle glow pulse
    gsap.to(glowRef.current, {
      opacity: 0.5,
      scale: 1.1,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })
  }, [])

  useEffect(() => {
    const heroSection = document.querySelector('.hero')
    if (!heroSection) return

    const onMouseMove = (e) => {
      const mouseX = e.clientX
      const mouseY = e.clientY
      
      // Optional subtle parallax on the whole orbit container
      const orbitContainer = document.querySelector('.hero__orbit-container')
      if (orbitContainer) {
        const xOffset = (mouseX / window.innerWidth - 0.5) * 30
        const yOffset = (mouseY / window.innerHeight - 0.5) * 30
        gsap.to(orbitContainer, {
          x: xOffset,
          y: yOffset,
          duration: 1,
          ease: 'power2.out'
        })
      }
    }

    heroSection.addEventListener('mousemove', onMouseMove)
    heroSection.addEventListener('mouseleave', () => {
      const orbitContainer = document.querySelector('.hero__orbit-container')
      if (orbitContainer) {
        gsap.to(orbitContainer, {
          x: 0,
          y: 0,
          duration: 1,
          ease: 'power2.out'
        })
      }
    })

    return () => {
      heroSection.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <div className="index-page">
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="hero">
        {/* Mobile/Tablet Tech Marquee (hidden on desktop) */}
        <div className="hero__mobile-marquee">
          <div className="hero__mobile-marquee-track">
            {TECH_ICONS.map((icon, i) => (
              <img key={`m1-${i}`} src={icon.src} alt="tech" className="hero__mobile-marquee-icon" />
            ))}
            {/* Duplicate for infinite scroll */}
            {TECH_ICONS.map((icon, i) => (
              <img key={`m2-${i}`} src={icon.src} alt="tech" className="hero__mobile-marquee-icon" />
            ))}
          </div>
        </div>

        <div className="hero__glow" ref={glowRef} />

        <div className="container hero__content" style={{ position: 'relative' }}>
          
          {/* Desktop Orbiting Tech Stack (Framer Motion) */}
          <div className="hero__orbit-container desktop-only-icons" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
            {TECH_ICONS.map((icon, i) => {
              const isInner = i % 2 === 0;
              const radius = isInner ? 380 : 540;
              const duration = isInner ? 45 : 60;
              const initialAngle = (i / TECH_ICONS.length) * 360;
              const direction = isInner ? 1 : -1;
              const iconSize = isInner ? 40 : 48;
              
              return (
                <motion.div
                  key={i}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: radius * 2,
                    height: radius * 2,
                    marginLeft: -radius,
                    marginTop: -radius,
                  }}
                  animate={{ rotate: [initialAngle, initialAngle + 360 * direction] }}
                  transition={{ duration, repeat: Infinity, ease: "linear" }}
                >
                  <motion.img
                    src={icon.src}
                    alt="tech"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: '50%',
                      width: iconSize,
                      height: iconSize,
                      marginLeft: -iconSize / 2,
                      opacity: 0.25,
                    }}
                    animate={{ rotate: [-initialAngle, -(initialAngle + 360 * direction)] }}
                    transition={{ duration, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>
              );
            })}
          </div>

          <h1 className="hero__headline" ref={headlineRef}>
            <span className="hero__line">Ideas Forged</span>
            <span className="hero__line">Into Impact.</span>
          </h1>

          <motion.p
            className="hero__sub"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            We are a premium digital studio that takes raw ambition and forges it
            into websites, content, and brands that actually move the needle.
            No templates. No guesswork. Just precision craft.
          </motion.p>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            style={{ position: 'relative', zIndex: 10 }}
          >
            <Link to="/contact" className="btn btn-white">
              START A PROJECT ↗
            </Link>
            <Link to="/projects" className="btn btn-outline">
              VIEW OUR WORK
            </Link>
          </motion.div>
        </div>

      </section>

      {/* ── Services Marquee ────────────────────────────── */}
      <div className="services-marquee">
        <div className="services-marquee__track">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="services-marquee__group">
              {['Video Editing', 'Graphic Design', 'Web Development', 'Brand Identity'].map(title => (
                <span key={title} className="services-marquee__item">
                  {title.toUpperCase()}
                  <span className="services-marquee__dot">•</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── Stats ─────────────────────────────────────────── */}
      <section className="section--sm index-stats">
        <div className="container">
          <div className="divider" style={{ marginBottom: 48 }} />
          <div className="index-stats__grid">
            {STATS.map(({ value, label }, i) => (
              <motion.div
                key={label}
                className="index-stats__item"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className="index-stats__value">{value}</span>
                <span className="index-stats__label">{label}</span>
              </motion.div>
            ))}
          </div>
          <div className="divider" style={{ marginTop: 48 }} />
        </div>
      </section>

      {/* ── Workflow Process ──────────────────────────────── */}
      <section className="section workflow-section">
        <div className="container">
          <motion.div
            className="solutions-header-wrap"
            style={{ marginBottom: '64px' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="solutions-title-area">
              <div className="solutions-pill">
                <span className="solutions-pill-dot">●</span> PROTOCOL
              </div>
              <h2 className="solutions-title">
                Our <span className="text-primary">Workflow</span> Process
              </h2>
              <p className="section-sub" style={{ maxWidth: '500px', marginTop: '16px', textAlign: 'left' }}>
                Six specialized steps designed to scale your brand and drive measurable results.
              </p>
            </div>
          </motion.div>

          <div className="workflow-carousel-container">
            {/* Left Arrow */}
            <button 
              className="workflow-arrow workflow-arrow--left"
              onClick={() => setActiveStep((activeStep - 1 + WORKFLOW_STEPS.length) % WORKFLOW_STEPS.length)}
            >
              ←
            </button>

            <div className="workflow-carousel">
              {WORKFLOW_STEPS.map((step, index) => {
                const total = WORKFLOW_STEPS.length;
                let position = "hidden";
                
                if (index === activeStep) position = "active";
                else if (index === (activeStep - 1 + total) % total) position = "prev";
                else if (index === (activeStep + 1) % total) position = "next";

                let className = "workflow-card";
                if (position === "active") className += " workflow-card--active";
                else if (position === "prev") className += " workflow-card--prev";
                else if (position === "next") className += " workflow-card--next";
                else className += " workflow-card--hidden";

                return (
                  <div 
                    key={index} 
                    className={className}
                    onClick={() => {
                      if (position === "prev") setActiveStep((activeStep - 1 + total) % total);
                      if (position === "next") setActiveStep((activeStep + 1) % total);
                    }}
                  >
                     <div className="workflow-card__inner">
                       <img src={step.img} alt={step.title} className="workflow-card__img" />
                       <h3 className="workflow-card__title">{step.title}</h3>
                       {position === "active" && (
                         <p className="workflow-card__desc">{step.detail}</p>
                       )}
                     </div>
                  </div>
                )
              })}
            </div>

            {/* Right Arrow */}
            <button 
              className="workflow-arrow workflow-arrow--right"
              onClick={() => setActiveStep((activeStep + 1) % WORKFLOW_STEPS.length)}
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* ── Hashtags Marquee ──────────────────────────────── */}
      <div className="hashtags-marquee">
        <div className="hashtags-marquee__track">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="hashtags-marquee__group">
              {['#WEB DEVELOPMENT', '#VIDEO EDITING', '#PREMIUM DESIGN', '#SHORT-FORM CONTENT', '#BRAND IDENTITY', '#GRAPHIC DESIGN'].map(tag => (
                <span key={`${tag}-${i}`} className="hashtags-marquee__item">
                  {tag}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── Solutions (Niches) ────────────────────────────── */}
      <section className="section solutions-section">
        <div className="container">
          <div className="solutions-header-wrap">
            <div className="solutions-title-area">
              <div className="solutions-pill">
                <span className="solutions-pill-dot">●</span> SOLUTIONS
              </div>
              <h2 className="solutions-title">
                Providing <span className="text-primary">Professional</span><br/>Services
              </h2>
            </div>
            <div className="solutions-tabs">
              {Object.keys(SOLUTIONS_DATA).map(key => (
                <button
                  key={key}
                  className={`solutions-tab ${activeSolutionTab === key ? 'active' : ''}`}
                  onClick={() => setActiveSolutionTab(key)}
                >
                  {SOLUTIONS_DATA[key].label}
                </button>
              ))}
            </div>
          </div>

          <div className="solutions-content">
            <div className="solutions-list">
              {SOLUTIONS_DATA[activeSolutionTab].items.map((item, i) => (
                <div key={i} className="solution-item">
                  <div className="solution-item-bg">
                    <div className="solution-item-watermark">{item.watermark}</div>
                  </div>
                  <div className="solution-item-inner">
                    <div className="solution-item-left">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="solution-star">
                        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="#E83828"/>
                      </svg>
                      <h3 className="solution-item-title">{item.title}</h3>
                    </div>
                    <p className="solution-item-desc">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────── */}
      <section className="section index-cta-section">
        <div className="container">
          <motion.div
            className="index-cta"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="index-cta__left">
              <div className="index-cta__pill">
                <span className="index-cta__pill-dot">●</span> READY TO START?
              </div>
              <h2 className="index-cta__title">
                LET'S BUILD SOMETHING PRECISE.
              </h2>
              <p className="index-cta__sub">
                Book a free discovery call. Scope defined in 48 hours.
              </p>
            </div>
            
            <div className="index-cta__divider" />

            <div className="index-cta__right">
              <Link to="/contact" className="index-cta__btn">
                <span>Get In Touch</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
