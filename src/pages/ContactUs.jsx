import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import faqsSvgUrl from '../assets/FAQs.svg'
import './ContactUs.css'
import coverImg from '../assets/cover.jpg'

/* ================================================================
   CONFIGURATION
   ================================================================ */
const WEB3FORMS_ACCESS_KEY = 'a19067f0-80f1-4797-ae7d-87e4ee467536'
const WHATSAPP_NUMBER      = '919997956287'
const CAL_URL              = 'https://cal.com/forgeguild/15min'

/* ================================================================
   FAQS (from Specifications)
   ================================================================ */
const FAQS = [
  {
    id: 'faq-01',
    q: 'What types of businesses do you work with?',
    a: 'We work with startups, established brands, and growth-stage businesses across industries — primarily DTC, SaaS, professional services, and creator-led brands. If you are serious about your digital presence, we are a fit.',
  },
  {
    id: 'faq-02',
    q: 'How long does a typical project take?',
    a: 'A standard website project runs 4–6 weeks from kickoff to deployment. Brand identity projects take 3–4 weeks. Video content is delivered on a rolling monthly schedule. Timelines are confirmed during the discovery call after scoping.',
  },
  {
    id: 'faq-03',
    q: 'Do you work on retainer or project basis?',
    a: 'Both. We offer fixed productized retainer plans (CORE, VELOCITY) for ongoing monthly work, and fixed-scope project engagements (APEX) for one-off campaigns. Details are on the Services page.',
  },
  {
    id: 'faq-04',
    q: 'How do revisions work?',
    a: 'All projects include structured revision rounds built into the delivery protocol. The number of revision cycles is agreed on at the proposal stage. We do not do open-ended revisions — scope is locked upfront to protect timelines.',
  },
  {
    id: 'faq-05',
    q: 'Do you offer ongoing support after project delivery?',
    a: 'Yes. After any project delivery, clients can move onto a monthly support retainer. This covers hosting management, content updates, bug fixes, and priority access to the team.',
  },
  {
    id: 'faq-06',
    q: 'What is your payment structure?',
    a: 'For projects, we require a 50% deposit at contract signing and 50% upon final delivery. Monthly retainers are billed at the start of each cycle. We accept bank transfer and major payment platforms.',
  },
  {
    id: 'faq-07',
    q: 'Can I hire you for just one service?',
    a: 'Absolutely. While our full-stack approach delivers the best results, each discipline — web, video, and brand — is available as a standalone engagement. Many clients start with one and expand from there.',
  },
  {
    id: 'faq-08',
    q: 'How do I get started?',
    a: 'Book a discovery call via our booking link or send a message below or on WhatsApp. We will respond within 24 hours with next steps.',
  },
]

const PLANS = [
  { value: 'core', label: 'CORE — Standard Retainer' },
  { value: 'velocity', label: 'VELOCITY — Growth Retainer' },
  { value: 'apex', label: 'APEX — Fixed Project Campaign' },
  { value: 'custom', label: 'Custom / Yet to decide on call' },
]

export default function ContactUs() {
  // Form State
  const [formState, setFormState] = useState({
    name: '', email: '', company: '', plan: 'custom', message: '',
  })
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'success' | 'error'
  const [isPlanOpen, setIsPlanOpen] = useState(false)

  // FAQ State
  const [openFaqId, setOpenFaqId] = useState(null)

  const handleChange = e =>
    setFormState(s => ({ ...s, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New inquiry from ${formState.name} — Forge Guild`,
          from_name: 'Forge Guild Website',
          ...formState,
        }),
      })

      const data = await res.json()

      if (data.success) {
        setStatus('success')
      } else {
        console.error('Web3Forms error:', data)
        setStatus('error')
      }
    } catch (err) {
      console.error('Submission error:', err)
      setStatus('error')
    }
  }

  return (
    <div className="dispatch-page">
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
            <h1 className="section-title" style={{ margin: '8px 0' }}>Initiate Contact</h1>
          </div>
        </motion.div>
      </div>

      <section className="section" style={{ paddingTop: '64px' }}>
        <div className="container">
          <p className="section-sub" style={{ maxWidth: '100%', marginBottom: '64px', fontSize: '1.2rem', textAlign: 'center' }}>
            Two channels to reach us. Choose whichever you prefer —
            we respond within 24 hours on all lines.
          </p>

          <div className="dispatch-layout">
            {/* ── Left: Channels ── */}
            <motion.div
              className="dispatch-channels"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {/* Book a Call */}
              <div className="dispatch-channel">
                <div className="dispatch-channel__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                </div>
                <div>
                  <p className="dispatch-channel__label">BOOK A CALL</p>
                  <h3 className="dispatch-channel__title">Discovery Session</h3>
                  <p className="dispatch-channel__desc">
                    Schedule a 30-minute discovery call. We'll map your goals,
                    constraints, and find the right engagement model.
                  </p>
                  <a
                    href={CAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="cta-cal"
                    className="btn btn-primary dispatch-channel__btn"
                  >
                    BOOK ON CAL.COM ↗
                  </a>
                </div>
              </div>

              <div className="divider" />

              {/* WhatsApp */}
              <div className="dispatch-channel">
                <div className="dispatch-channel__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                </div>
                <div>
                  <p className="dispatch-channel__label">INSTANT MESSAGE</p>
                  <h3 className="dispatch-channel__title">WhatsApp Direct</h3>
                  <p className="dispatch-channel__desc">
                    Prefer to message first? Reach us on WhatsApp for a quick
                    intro. Typical response time under 2 hours.
                  </p>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="cta-whatsapp"
                    className="btn btn-outline dispatch-channel__btn"
                  >
                    OPEN WHATSAPP ↗
                  </a>
                </div>
              </div>

              <div className="divider" />

              {/* Instagram */}
              <div className="dispatch-channel">
                <div className="dispatch-channel__icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </div>
                <div>
                  <p className="dispatch-channel__label">SOCIAL MEDIA</p>
                  <h3 className="dispatch-channel__title">Instagram Direct</h3>
                  <p className="dispatch-channel__desc">
                    Follow our work and drop us a DM. We share our latest projects and studio updates here.
                  </p>
                  <a
                    href="https://instagram.com/_forgeguild"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline dispatch-channel__btn"
                  >
                    OPEN INSTAGRAM ↗
                  </a>
                </div>
              </div>
            </motion.div>

            {/* ── Right: Form ── */}
            <motion.div
              className="dispatch-form-wrap"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {status === 'success' && (
                <div className="dispatch-success">
                  <div className="dispatch-success__icon">✓</div>
                  <h3 className="dispatch-success__title">Message Dispatched</h3>
                  <p className="dispatch-success__sub">
                    We've received your message and will respond within 24 hours.
                  </p>
                </div>
              )}

              {status !== 'success' && (
                <form className="dispatch-form" onSubmit={handleSubmit} noValidate>
                  <div className="dispatch-form__header">
                    <p className="dispatch-form__label">OR SEND A MESSAGE</p>
                    <h3 className="dispatch-form__title">Project Inquiry</h3>
                  </div>

                  {status === 'error' && (
                    <div className="dispatch-form__error">
                      ⚠ Something went wrong. Please try again or reach us directly on WhatsApp.
                    </div>
                  )}

                  <div className="dispatch-form__fields">
                    <div className="dispatch-form__group">
                      <label htmlFor="name" className="dispatch-form__field-label">Full Name *</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        value={formState.name}
                        onChange={handleChange}
                        className="dispatch-form__input"
                        disabled={status === 'loading'}
                      />
                    </div>

                    <div className="dispatch-form__group">
                      <label htmlFor="email" className="dispatch-form__field-label">Email *</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={formState.email}
                        onChange={handleChange}
                        className="dispatch-form__input"
                        disabled={status === 'loading'}
                      />
                    </div>

                    <div className="dispatch-form__group">
                      <label htmlFor="company" className="dispatch-form__field-label">Company / Brand</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Optional"
                        value={formState.company}
                        onChange={handleChange}
                        className="dispatch-form__input"
                        disabled={status === 'loading'}
                      />
                    </div>

                    <div className="dispatch-form__group" style={{ position: 'relative' }}>
                      <label className="dispatch-form__field-label">Interested Plan</label>
                      <div 
                        className="dispatch-form__input custom-select__trigger"
                        onClick={() => !status.includes('loading') && setIsPlanOpen(!isPlanOpen)}
                        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                      >
                        {PLANS.find(p => p.value === formState.plan)?.label}
                        <motion.span
                          animate={{ rotate: isPlanOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          style={{ color: 'var(--steel)' }}
                        >
                          ▼
                        </motion.span>
                      </div>

                      <AnimatePresence>
                        {isPlanOpen && (
                          <motion.div
                            className="custom-select__dropdown"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                          >
                            {PLANS.map(plan => (
                              <div
                                key={plan.value}
                                className={`custom-select__option ${formState.plan === plan.value ? 'selected' : ''}`}
                                onClick={() => {
                                  setFormState(s => ({ ...s, plan: plan.value }))
                                  setIsPlanOpen(false)
                                }}
                              >
                                {plan.label}
                              </div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="dispatch-form__group">
                      <label htmlFor="message" className="dispatch-form__field-label">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        placeholder="Describe your project, goals, and timeline..."
                        value={formState.message}
                        onChange={handleChange}
                        className="dispatch-form__input dispatch-form__textarea"
                        rows={5}
                        disabled={status === 'loading'}
                      />
                    </div>
                  </div>

                  <button
                    id="submit-inquiry"
                    type="submit"
                    className="btn btn-primary dispatch-form__submit"
                    disabled={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <>
                        <span className="dispatch-form__spinner" />
                        SENDING…
                      </>
                    ) : (
                      'SEND MESSAGE →'
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>

          <div className="divider" style={{ margin: '96px 0 64px' }} />

          {/* ── FAQ Section ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="faq-header"
          >
            <h1 className="faq-main-title">
              <span className="text-primary">Frequently</span> Asked Questions
            </h1>
          </motion.div>

          <div className="faq-layout">
            <div className="faq-left">
              <div className="specs-list">
                {FAQS.map(({ id, q, a }, i) => {
                  const isOpen = openFaqId === id
                  return (
                    <motion.div
                      key={id}
                      className={`specs-item${isOpen ? ' specs-item--open' : ''}`}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                    >
                      <button
                        id={id}
                        className="specs-item__trigger"
                        onClick={() => setOpenFaqId(isOpen ? null : id)}
                        aria-expanded={isOpen}
                      >
                        <span className="specs-item__q">{q}</span>
                        <span className="specs-item__icon-wrap">
                          {isOpen ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <circle cx="12" cy="12" r="10" />
                              <rect x="7" y="11" width="10" height="2" fill="white" />
                            </svg>
                          ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                              <circle cx="12" cy="12" r="10" />
                              <rect x="7" y="11" width="10" height="2" fill="white" />
                              <rect x="11" y="7" width="2" height="10" fill="white" />
                            </svg>
                          )}
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="answer"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                            style={{ overflow: 'hidden' }}
                          >
                            <div className="specs-item__answer">
                              <p>{a}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                })}
              </div>
            </div>
            
            <div className="faq-right">
              <div className="faq-right__img-wrap">
                <img src={faqsSvgUrl} alt="FAQs illustration" className="faq-right__img" />
              </div>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="faq-right__support-btn"
              >
                Contact Support
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
