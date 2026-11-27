import tadabburGraph from '../assets/tadabbur/graph.png'

export interface Project {
  id: string
  title: string
  tagline: string
  summary: string
  /** Optional product screenshot shown on the card. */
  screenshot?: { src: string; alt: string; caption: string; width: number; height: number }
  /** Verifiable numbers, taken from the repository or project documents. */
  facts: { value: string; label: string }[]
  highlights: string[]
  /** Deeper technical notes, shown behind "Technical details". */
  details: { title: string; points: string[] }[]
  stack: string[]
  links: { label: string; href: string }[]
  note?: string
}

const TADABBUR_REPO = 'https://github.com/mishalz/Tadabbur'
const RAABTA_REPO = 'https://github.com/mishalz/Raabta'

export const projects: Project[] = [
  {
    id: 'dandelion',
    title: 'Dandelion',
    tagline: 'A nightly reflection app: check in, get a prompt, write.',
    summary:
      'An AI-powered journaling app, in development, that I am co-building with a small team. My engineering work covers accounts and sign-in, the profile and session APIs, and nearly all of the mobile app built so far.',
    facts: [
      { value: '12', label: 'API endpoints written' },
      { value: '700+', label: 'test cases written' },
      { value: '44', label: 'survey responses' },
    ],
    highlights: [
      'Built authentication end to end: guest accounts that upgrade to Apple or Google sign-in without losing reflections.',
      'Wrote the profile and session APIs on Hono and Cloudflare Workers, with Zod contracts shared with the app.',
      'Built the onboarding, sign-in and Home screens in React Native from the team’s Figma designs.',
      'Ran a user survey to define the problem, then wrote 13 product requirement documents and the AI layer specs.',
    ],
    details: [
      {
        title: 'Authentication and accounts',
        points: [
          'Verify Apple and Google identity tokens on the server against the providers’ public keys, checking signature, issuer and audience, plus a hashed nonce for Apple.',
          'Short-lived access tokens with hashed refresh tokens that rotate on every use. Reusing an old one revokes all of that user’s refresh tokens, with a 30-second grace window for lost responses.',
          'Switching to an existing account moves the guest’s reflection sessions across. Email matching applies only to a single verified, non-private-relay match.',
        ],
      },
      {
        title: 'API and data',
        points: [
          'Modelled Postgres with Drizzle across seven migrations, enforcing rules in the database, such as one open session per user through a partial unique index.',
          'Row locks serialise concurrent session requests, and repeating the same check-in is safe.',
          'Opening prompts currently come from a versioned, curated library that favours ones not seen in the last 30 days.',
        ],
      },
      {
        title: 'Mobile app',
        points: [
          'Session manager that shares a single in-flight token refresh, retries network failures and replays the original request. Tokens are kept in secure device storage.',
          'Onboarding progress is saved on the device and validated when reloaded.',
          'Home screen driven by state: open, in progress, welcome back and guest limit reached.',
        ],
      },
      {
        title: 'AI layer design (implementation in progress)',
        points: [
          'Specified each AI step with strict structured outputs, validation in code and a fallback, so a session can always continue.',
          'Built initial LangSmith evaluation datasets and defined LLM-as-a-judge rubrics and release criteria.',
        ],
      },
      {
        title: 'Testing',
        points: [
          'Jest and React Native Testing Library for the app; Vitest for the shared packages and for API tests that run in the Cloudflare Workers runtime.',
        ],
      },
    ],
    stack: ['TypeScript', 'React Native (Expo)', 'Hono', 'Cloudflare Workers', 'Postgres (Neon)', 'Drizzle ORM', 'Zod', 'Jest', 'Vitest', 'LangSmith'],
    links: [],
    note: 'Private repository, so the code is not public. Happy to walk through it.',
  },
  {
    id: 'tadabbur',
    screenshot: {
      src: tadabburGraph,
      alt: 'Tadabbur connection graph linking verse 2:1 to verses 3:1 and 3:41, each link carrying a note',
      caption: 'Linking verses and studying the connections as a graph.',
      width: 945,
      height: 580,
    },
    title: 'Tadabbur',
    tagline: 'A study space for connecting ideas across a text.',
    summary:
      'A full-stack tool where readers link any two verses with a note and explore those links as an interactive graph, built for a contemplative way of studying where themes recur across chapters.',
    facts: [
      { value: '15', label: 'pull requests merged' },
      { value: '50+', label: 'automated tests' },
    ],
    highlights: [
      'OAuth 2.0 + PKCE login with tokens kept server-side in Postgres-backed sessions, never exposed to the browser.',
      'Migrated the data layer from Neo4j and Redis to Postgres.',
    ],
    details: [
      {
        title: 'Security',
        points: [
          'Checks OAuth state and nonce, refreshes expired access tokens on the server and takes the user’s identity only from the session.',
          'Replaced trust in unverified JWTs with server-session authentication, and scoped every connection query to its owner.',
          'Joi validation, Helmet headers, request size limits and rate limiting, with a tighter limit on login routes.',
        ],
      },
      {
        title: 'Data and front end',
        points: [
          'A unique index on the ordered verse pair stops duplicate connections in either direction.',
          'Interactive D3 force graph with pan and zoom in a React and Tailwind CSS client.',
          'Quran content is cached on the server for 24 hours.',
        ],
      },
      {
        title: 'Testing and delivery',
        points: [
          'API integration tests run against a real Postgres database with a fake identity provider.',
          'GitHub Actions lints and tests the API on Node 22 and 24 and builds the client.',
          'Deployed on Netlify, Render and Neon. Netlify proxies the API so the session cookie stays first-party.',
        ],
      },
    ],
    stack: ['React', 'Vite', 'D3', 'Node.js', 'Express', 'Postgres', 'GitHub Actions'],
    links: [
      { label: 'Live site', href: 'https://benevolent-rolypoly-b74a4a.netlify.app/' },
      { label: 'Source', href: TADABBUR_REPO },
      { label: 'Pull requests', href: `${TADABBUR_REPO}/pulls?q=is%3Apr+is%3Amerged` },
      { label: 'Auth design', href: `${TADABBUR_REPO}/blob/main/docs/authentication.md` },
    ],
  },
  {
    id: 'raabta',
    title: 'Raabta',
    tagline: 'A cloud-native social platform for sharing posts.',
    summary:
      'A cloud computing MSc project: a REST API and React client for posting by topic, containerised and deployed on Google Cloud. "Raabta" is Urdu for connection.',
    facts: [],
    highlights: [
      'Built an Express and MongoDB API with JWT authentication, hashed passwords and Joi validation.',
      'Packaged it with Docker and ran it on Google Kubernetes Engine behind a load balancer.',
    ],
    details: [
      {
        title: 'API and data',
        points: [
          'Posts by topic with sorting, likes, dislikes and comments. Authors cannot rate their own posts.',
          'Middleware blocks likes, dislikes and comments once a post has expired.',
          'Schemas designed around access patterns: comments are referenced, and author details are stored on each post to avoid joins.',
        ],
      },
      {
        title: 'Deployment and testing',
        points: [
          'Ran the Docker image on a Google Cloud virtual machine, then on a Kubernetes cluster.',
          'Documented 20 end-to-end system test cases in the project report.',
        ],
      },
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Docker', 'Kubernetes', 'Google Cloud'],
    links: [
      { label: 'Source', href: RAABTA_REPO },
      { label: 'Project report', href: `${RAABTA_REPO}/blob/main/cc-project-report-raabta.pdf` },
    ],
  },
]
