import { links } from '../config'

export interface Project {
  id: string
  title: string
  tagline: string
  summary: string
  highlights: string[]
  stack: string[]
  featured: boolean
  links: { label: string; href: string }[]
  note?: string
}

const compact = (items: ({ label: string; href?: string })[]) =>
  items.filter((l): l is { label: string; href: string } => Boolean(l.href))

export const projects: Project[] = [
  {
    id: 'dandelion',
    title: 'Dandelion',
    tagline: 'A nightly reflection app: check in, get a prompt, write.',
    summary:
      'An AI-powered journaling app I am co-building. I started with a user survey on reflection habits to define the problem before writing code, then built the AI layer, the sign-in system and most of the mobile app.',
    highlights: [
      'Built and evaluated the AI reflection layer with LangSmith tracing, eval datasets and LLM-as-a-judge scoring.',
      'Wrote auth end to end: Apple and Google sign-in, access/refresh tokens, identity linking, and guest-to-account upgrades that keep data.',
      'Shipped most mobile screens from Figma, with tests per feature and CI (lint, types, tests) on every PR.',
    ],
    stack: ['TypeScript', 'React Native (Expo)', 'Hono', 'Cloudflare Workers', 'Postgres', 'LangSmith', 'Vitest'],
    featured: true,
    links: compact([{ label: 'Visit', href: links.dandelion }]),
    note: 'Private repository, so the code is not public. Happy to walk through it.',
  },
  {
    id: 'tadabbur',
    title: 'Tadabbur',
    tagline: 'A study space for connecting ideas across a text.',
    summary:
      'A full-stack tool where readers link any two verses with a note and explore those links as an interactive graph, built for a contemplative way of studying where themes recur across chapters.',
    highlights: [
      'OAuth 2.0 + PKCE login with tokens kept server-side in Postgres-backed sessions, never exposed to the browser.',
      'Hardened the API with validation, rate limiting and secure headers.',
      'Migrated the data layer from Neo4j/Redis to Postgres; deployed on Netlify, Render and Neon with CI.',
    ],
    stack: ['React', 'Vite', 'D3', 'Node.js', 'Express', 'Postgres', 'GitHub Actions'],
    featured: true,
    links: [
      { label: 'Live site', href: links.tadabbur },
      { label: 'Source', href: links.tadabburRepo },
    ],
  },
  {
    id: 'raabta',
    title: 'Raabta',
    tagline: 'A cloud-native social platform for sharing posts.',
    summary:
      'A microservice-based social app built for a cloud computing MSc module, containerised and orchestrated on Kubernetes. "Raabta" is Urdu for connection.',
    highlights: ['Node.js services with MongoDB behind a React front end.', 'Packaged with Docker and deployed with Kubernetes.'],
    stack: ['React', 'Node.js', 'MongoDB', 'Docker', 'Kubernetes'],
    featured: false,
    links: [{ label: 'Source', href: links.raabta }],
  },
]
