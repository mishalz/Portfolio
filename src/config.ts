/**
 * Personal details live in environment variables (see .env.example), so the
 * repo contains no private data. Unset values fall back to visible placeholders.
 */
const env = import.meta.env

export const PLACEHOLDER_EMAIL = 'you@example.com'

export const site = {
  name: 'Mishal Zulfiqar',
  role: 'Software Engineer',
  url: env.VITE_SITE_URL || 'https://your-domain.example',
  email: env.VITE_EMAIL || PLACEHOLDER_EMAIL,
  location: env.VITE_LOCATION || 'City, Country',
  github: env.VITE_GITHUB_URL || 'https://github.com/mishalz',
  linkedin: env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/your-handle',
  resume: env.VITE_RESUME_URL || '/resume.pdf',
} as const

export const links = {
  dandelion: env.VITE_DANDELION_URL || undefined,
  tadabbur: 'https://benevolent-rolypoly-b74a4a.netlify.app/',
  tadabburRepo: 'https://github.com/mishalz/Tadabbur',
  raabta: env.VITE_RAABTA_URL || 'https://github.com/mishalz/Raabta',
} as const
