/**
 * ============================================================
 * HAPPY FORGE GUILD — Portfolio Data
 * ============================================================
 * HOW TO ADD YOUR REAL WORK:
 *
 * For VIDEO projects:
 *   - Upload to YouTube (can be Unlisted) or Vimeo
 *   - YouTube embed: videoEmbedUrl: 'https://www.youtube.com/embed/VIDEO_ID'
 *   - Vimeo embed:   videoEmbedUrl: 'https://player.vimeo.com/video/VIDEO_ID'
 *
 * For WEB projects:
 *   - liveUrl: the deployed URL of the site/app
 *   - thumbnail: screenshot URL (upload to https://imgbb.com or https://cloudinary.com)
 *
 * For BRAND / UI-UX projects:
 *   - liveUrl: Behance or Figma share link
 *   - images: array of image URLs showing the design
 *
 * Disciplines: 'WEB' | 'VIDEO' | 'BRAND'
 * ============================================================
 */

export const PROJECTS = [
  {
    id: 'proj-01',
    title: 'Meridian Commerce',
    discipline: 'WEB',
    tags: ['React', 'Node.js', 'E-Commerce'],
    year: '2026',
    desc: 'High-converting e-commerce platform with custom checkout flow. 3× increase in conversion rate post-launch.',
    longDesc:
      'Full-stack e-commerce build with a React storefront, custom checkout, inventory management, and Stripe integration. Performance-first architecture delivered a 98 Lighthouse score and 3× uplift in conversion rate within the first month.',
    // ── Replace with your actual thumbnail URL ──────────────
    thumbnail: null, // e.g. 'https://res.cloudinary.com/your-cloud/image/upload/v1/meridian-thumb.jpg'
    // ── Replace with your deployed URL ──────────────────────
    liveUrl: null,   // e.g. 'https://meridiancommerce.com'
    // ── For video walkthroughs, add an embed URL ─────────────
    videoEmbedUrl: null, // e.g. 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    // ── Additional images for the gallery ────────────────────
    images: [],
    // Gradient fallback shown when thumbnail is null
    accentColor: '#2563EB',
  },
  {
    id: 'proj-02',
    title: 'Vanta Studio Rebrand',
    discipline: 'BRAND',
    tags: ['Brand Identity', 'Motion', 'Style Guide'],
    year: '2025',
    desc: 'Complete visual identity overhaul for a boutique architecture firm. From logo to full brand manual.',
    longDesc:
      'End-to-end rebrand for Vanta Studio — a boutique architecture firm targeting premium residential clients. Deliverables included logo suite (primary, secondary, icon), full colour system, typography hierarchy, stationery, and a 48-page brand manual in Figma.',
    thumbnail: null,
    liveUrl: null,   // e.g. 'https://www.behance.net/gallery/your-project'
    videoEmbedUrl: null,
    images: [],
    accentColor: '#C5A059',
  },
  {
    id: 'proj-03',
    title: 'Apex Fitness Content',
    discipline: 'VIDEO',
    tags: ['Short-Form', 'Reels', 'Instagram'],
    year: '2025',
    desc: '30-day content series that drove 400% growth in follower engagement for a fitness brand.',
    longDesc:
      '30 short-form videos over 30 days for a fitness brand pivoting to Instagram. Hook-optimised scripting, punchy editing with sound design, and systematic A/B testing on thumbnail styles. Result: 400% engagement lift and 28k new followers in one month.',
    thumbnail: null,
    liveUrl: null,   // e.g. Instagram profile or highlight reel link
    videoEmbedUrl: null, // e.g. 'https://www.youtube.com/embed/YOUR_REEL_COMPILATION'
    images: [],
    accentColor: '#E05252',
  },
  {
    id: 'proj-04',
    title: 'Solaris SaaS Platform',
    discipline: 'WEB',
    tags: ['React', 'Dashboard', 'SaaS'],
    year: '2026',
    desc: 'Complex SaaS dashboard with real-time analytics, custom component library, and dark-mode-first design.',
    longDesc:
      'Full product design and frontend build for Solaris — a B2B analytics SaaS. Custom component library (40+ components), real-time chart rendering with Recharts, role-based access, and a dark-mode-first design system. Built for performance at scale.',
    thumbnail: null,
    liveUrl: null,
    videoEmbedUrl: null,
    images: [],
    accentColor: '#2563EB',
  },
  {
    id: 'proj-05',
    title: 'Onyx Apparel Identity',
    discipline: 'BRAND',
    tags: ['Brand Identity', 'Packaging', 'Typography'],
    year: '2025',
    desc: 'Premium streetwear brand identity including logo suite, color system, and retail packaging design.',
    longDesc:
      'Complete brand identity for Onyx — a premium streetwear label targeting the 18–30 urban market. Deliverables: wordmark + icon logo, monochrome & colour variants, custom type pairing, hang-tag design, and retail bag/box packaging ready for print production.',
    thumbnail: null,
    liveUrl: null,
    videoEmbedUrl: null,
    images: [],
    accentColor: '#C5A059',
  },
  {
    id: 'proj-06',
    title: 'FounderCast Series',
    discipline: 'VIDEO',
    tags: ['Long-Form', 'YouTube', 'Podcast'],
    year: '2026',
    desc: 'Multi-episode video production for a startup founder interview series with 50k+ cumulative views.',
    longDesc:
      '12-episode long-form production for a startup interview series. End-to-end: shoot planning, b-roll direction, colour grading, motion graphics lower-thirds, chapter markers, and YouTube-optimised thumbnails. Series hit 50k+ cumulative views with an average 68% retention rate.',
    thumbnail: null,
    liveUrl: null,
    videoEmbedUrl: null, // e.g. 'https://www.youtube.com/embed/PLAYLIST_ID?list=...'
    images: [],
    accentColor: '#E05252',
  },
]
