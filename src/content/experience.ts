export interface Role {
  title: string
  org: string
  period: string
  points: string[]
}

export const experience: Role[] = [
  {
    title: 'Software Engineer (Contract)',
    org: 'Top Notch',
    period: 'Jul 2026 – Oct 2026',
    points: [
      'Built and launched a responsive Shopify storefront for a premium sketchbooks business, on the launch date, from requirements and design references.',
      'Averaged a 2.5% conversion rate over four months.',
      'Worked solo with regular owner check-ins, explaining technical trade-offs to reach agreement.',
    ],
  },
  {
    title: 'Software Engineer (Contract)',
    org: 'Zaeem Watches',
    period: 'Dec 2025 – Feb 2026',
    points: [
      'Diagnosed and fixed 10+ customer-facing issues across search, navigation, product discovery and checkout.',
      'Redesigned key storefront sections so they work across phones, tablets and desktops.',
    ],
  },
  {
    title: 'Software Intern',
    org: 'ByteCorp',
    period: 'Jul 2022 – Oct 2022',
    points: [
      'Built features for a React single-page app with reusable components and clear state management.',
      'Converted components to TypeScript, catching type errors before the browser.',
    ],
  },
]

export const education = [
  { title: 'MSc Advanced Computing', org: 'Birkbeck, University of London', period: '2023 – 2025', detail: 'Distinction' },
  { title: 'BE Software Engineering', org: 'NUST', period: '2019 – 2023', detail: 'CGPA 3.43 / 4.00' },
]
