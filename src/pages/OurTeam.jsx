import { useState } from 'react'
import { motion } from 'framer-motion'
import './OurTeam.css'
import imgAditya from '../assets/aditya.jpg'

const FOUNDERS = [
  {
    name: 'Aryawart',
    avatar: '/avatar-aryan.jpg',
    role: 'Creative Director',
    tag: 'CREATIVE',
    accentFrom: '#E05252',
    accentTo: '#C5A059',
    focus: [
      'Video editing & production',
      'Graphic & Thumbnail design',
      'Creative direction & strategy',
      'Social media content scaling',
      'Brand storytelling',
    ],
    bio: "A storyteller at heart with a creative director's eye. Aryawart brings 2+ years of professional video editing experience across YouTube, brand content, and social media — with clients generating millions of collective views. He handles video editing, graphic design, thumbnail systems, and creative direction for Forge Guild. When he's not in the edit bay, you'll find him analyzing anime, deep in story-mode games, or building the next product idea.",
    skills: ['Premiere Pro', 'After Effects', 'Canva Pro', 'Photoshop', 'Thumbnail Design', 'Content Strategy']
  },
  {
    name: 'Sumit',
    avatar: '/avatar-sumit.jpg',
    role: 'Tech Lead',
    tag: 'ENGINEERING',
    accentFrom: '#10B981',
    accentTo: '#2563EB',
    focus: [
      'Website development (React / Node.js)',
      'UI/UX & Figma-to-code',
      'Technical delivery & QA',
      'System architecture',
      'Performance optimization',
    ],
    bio: "Sumit is the technical backbone of Forge Guild. He architects and builds the web experiences that make brands look world-class online — from pixel-perfect UI designs to performant, scalable React applications. His approach combines technical precision with a sharp eye for design, ensuring every website isn't just functional, but genuinely impressive. He leads all web development and Figma-to-code work for the agency.",
    skills: ['React', 'Next.js', 'Figma', 'Webflow', 'UI/UX Design', 'Node.js']
  },
  {
    name: 'Aditya',
    avatar: imgAditya,
    role: 'Project Manager',
    tag: 'OPERATIONS',
    accentFrom: '#A855F7',
    accentTo: '#6366F1',
    focus: [
      'Project planning & execution',
      'Client communication & liaison',
      'Deadline & milestone tracking',
      'Team coordination & workflow',
      'Quality assurance & delivery',
    ],
    bio: "Aditya is the operational heartbeat of Forge Guild — the person who makes sure every project lands on time, on spec, and above expectation. He acts as the bridge between clients and the creative/tech team, translating goals into structured workflows and keeping every moving part aligned. With a sharp eye for process and a calm under-pressure mindset, Aditya ensures no ball gets dropped from kickoff to final delivery.",
    skills: ['Project Planning', 'Client Management', 'Notion', 'Agile', 'Risk Management', 'Communication']
  },
]

const VALUES = [
  {
    index: '01',
    title: 'Speed Without Compromise',
    desc: '48-hour turnarounds on most deliverables. Fast doesn\'t mean careless — it means we\'ve mastered our craft enough to move quickly without cutting corners.',
  },
  {
    index: '02',
    title: 'Results Over Aesthetics',
    desc: 'Everything we make has a job to do. Beautiful is table stakes — the real question is: does this convert, retain, and grow? That\'s what we optimize for.',
  },
  {
    index: '03',
    title: 'Partners, Not Vendors',
    desc: 'We act like a founding member of your team, not a service provider. Your growth is our north star, and we\'re invested in it the same way you are.',
  },
  {
    index: '04',
    title: 'Radical Transparency',
    desc: 'No jargon, no agency BS. You always know what we\'re doing, why, and what to expect. Honest feedback, clear timelines, no surprises.',
  },
]

/* ── Pixel Art Image Avatar ────────────────────────────────── */
function AnimatedAvatar({ avatar, name, accentFrom }) {
  return (
    <div className="avatar-wrap" style={{ '--accent': accentFrom }}>
      <img
        src={avatar}
        alt={name}
        className="avatar-img"
      />
      {/* Scanline overlay for pixel-art aesthetic */}
      <div className="avatar-scanlines" />
      {/* Glow border on hover */}
      <div className="avatar-border" />
    </div>
  )
}

export default function OurTeam() {
  return (
    <div className="structure-page">
      <section className="section">
        <div className="container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="section-label">OUR TEAM</div>
            <h1 className="section-title">Meet Our Team</h1>
            <p className="section-sub" style={{ marginBottom: 64 }}>
              Three specialists with complementary expertise — creativity, engineering,
              and operations working in lockstep to deliver precision-first results.
            </p>
          </motion.div>

          {/* Founder Cards */}
          <div className="structure-founders">
            {FOUNDERS.map((founder, i) => (
              <FounderCard key={founder.name} founder={founder} index={i} />
            ))}
          </div>

          {/* Divider */}
          <div className="divider" style={{ margin: '96px 0' }} />

          {/* Values */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="section-label">THE FORGE CODE</div>
            <h2 className="section-title">What We Stand For</h2>
            <p className="section-sub" style={{ marginBottom: 48 }}>
              Four principles that govern every decision we make.
            </p>
          </motion.div>

          <div className="grid-2">
            {VALUES.map(({ index, title, desc }, i) => (
              <motion.div
                key={title}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div 
                  className="section-label" 
                  style={{ 
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '32px',
                    height: '32px',
                    background: 'var(--cobalt-dim)',
                    color: 'var(--cobalt)',
                    borderRadius: '4px',
                    marginBottom: '16px' 
                  }}
                >
                  {index}
                </div>
                <h3 className="structure-value-title">{title}</h3>
                <p className="structure-value-desc">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

/* ── Founder Card with Flip ────────────────────────────────── */
function FounderCard({ founder, index }) {
  const [isFlipped, setIsFlipped] = useState(false)
  const { name, avatar, role, title, tag, accentFrom, bio, skills, focus } = founder

  return (
    <motion.div
      className="structure-founder-card-scene"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className={`structure-founder-card-flipper ${isFlipped ? 'is-flipped' : ''}`}>
        
        {/* FRONT FACE */}
        <div className="structure-founder-card structure-founder-card--front">
          <div className="structure-founder-card__header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="tag tag--bronze">{tag}</span>
            <span style={{ fontSize: 11, color: 'var(--slate)', fontStyle: 'italic' }}>Flip ↺</span>
          </div>

          <div className="structure-founder-card__body">
            <AnimatedAvatar
              avatar={avatar}
              name={name}
              accentFrom={accentFrom}
            />
            <div className="structure-founder-card__identity">
              <p className="structure-founder-card__role" style={{ color: accentFrom }}>{role}</p>
              <h2 className="structure-founder-card__name">{name}</h2>
            </div>
          </div>

          <div className="structure-founder-card__focus">
            <p className="structure-founder-card__focus-label">FOCUS AREAS</p>
            <ul>
              {focus.map(item => (
                <li key={item} className="structure-founder-card__focus-item">
                  <span
                    className="structure-founder-card__focus-dot"
                    style={{ background: accentFrom }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BACK FACE */}
        <div className="structure-founder-card structure-founder-card--back">
          <div className="structure-founder-card__header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span className="tag tag--bronze">ABOUT</span>
            <span style={{ fontSize: 11, color: 'var(--slate)', fontStyle: 'italic' }}>Flip ↺</span>
          </div>
          
          <div className="structure-founder-card__bio">
            <p>{bio}</p>
          </div>

          <div className="structure-founder-card__skills">
            {skills.map(skill => (
              <span key={skill} className="structure-founder-skill">{skill}</span>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  )
}

