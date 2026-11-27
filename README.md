# Portfolio

A single-page portfolio built with Vite, React, TypeScript and plain CSS. No UI libraries.

## Run it

```bash
npm install
cp .env.example .env   # add your contact details
npm run dev            # local development
npm run check          # lint, typecheck and tests
npm run build          # static output in dist/
```

## Project layout

| Path | Contents |
| --- | --- |
| `src/content/` | All page content as typed data: projects, experience, skills, about and app screens |
| `src/components/` | One component per section, plus small shared pieces |
| `src/styles/` | Design tokens and shared styles in `base.css`, then one file per area |
| `src/assets/` | Images used by the site |
| `src/config.ts` | Name, role, links and contact details |
| `public/` | Favicon and `resume.pdf` |

## Common changes

- **Text:** edit the files in `src/content/`.
- **Contact details:** set `VITE_EMAIL` and `VITE_LINKEDIN_URL` in `.env`.
- **Résumé:** replace `public/resume.pdf`.
- **Images:** add them under `src/assets/` and import them from the matching content file.

## Quality

Strict TypeScript, ESLint and Vitest with React Testing Library. GitHub Actions runs lint, typecheck, tests and a build on pushes to `main` and on pull requests. The layout is responsive, keyboard accessible and respects reduced-motion settings.

## Deploy

Import the repository into Vercel (framework preset: Vite) and add the same `VITE_*` variables there. Variables are read at build time, so redeploy after changing them.
