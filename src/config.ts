/**
 * Site-wide details. Contact details come from `VITE_*` variables (see
 * .env.example) and fall back to visible placeholders when unset.
 */
const env = import.meta.env

export const site = {
  name: 'Mishal Zulfiqar',
  role: 'Software Engineer',
  location: 'London, UK',
  github: 'https://github.com/mishalz',
  resume: '/resume.pdf',
  email: env.VITE_EMAIL || 'you@example.com',
  linkedin: env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/in/your-handle',
} as const
