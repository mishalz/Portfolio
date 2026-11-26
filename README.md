# Portfolio

Single-page portfolio: Vite + React + TypeScript, plain CSS, editorial layout with nature illustrations. See [PLAN.md](PLAN.md).

```bash
npm install
cp .env.example .env   # fill in your details
npm run dev            # local dev
npm run check          # lint + typecheck + tests
npm run build          # static output in dist/
```

- Personal details: `.env` (`VITE_*`), read in `src/config.ts`.
- Content: `src/content/*` (projects, experience, skills, about/reading list).
- Résumé: drop your PDF at `public/resume.pdf`.
- Deploy: import the repo in Vercel (framework: Vite). Set the same `VITE_*` vars there.
