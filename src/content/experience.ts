export interface Role {
  title: string
  org: string
  period: string
  points: string[]
}

export const experience: Role[] = [
  {
    title: 'Software Engineer',
    org: 'Barakah Labs',
    period: 'Jun 2025 – Oct 2026',
    points: [
      'Led delivery on every project, working in a team with 2 other colleagues: ran daily stand-ups, owned requirements through to delivery, and was the main point of contact for clients.',
      'Built and launched a responsive Shopify storefront solo for a small-scale business, from brief and design references to on-schedule launch. The site averaged a 2.5% conversion rate over its first four months.',
      'For another client, diagnosed and fixed 10+ customer-facing production issues across search, navigation, product discovery and checkout, and rebuilt key storefront sections to work across mobile, tablet and desktop.',
      'Worked with each client owner through regular check-ins, explaining technical limits and trade-offs in plain terms and agreeing scope before building.',
    ],
  },
  {
    title: 'Software Intern',
    org: 'ByteCorp',
    period: 'Jul 2022 – Oct 2022',
    points: [
      'Migrated existing React components to TypeScript, catching type errors during development before they reached the browser.',
      'Developed features for a React single-page application using reusable components and structured state management.',
    ],
  },
]

export const education = [
  { title: 'MSc Advanced Computing', org: 'Birkbeck, University of London', period: '2023 – 2025', detail: 'Distinction' },
  { title: 'BE Software Engineering', org: 'NUST', period: '2019 – 2023', detail: 'CGPA 3.43 / 4.00' },
]
