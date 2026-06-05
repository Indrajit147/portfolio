# Indrajit Gupta Portfolio

A production-ready personal portfolio for Indrajit Gupta, built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and static export support for GitHub Pages.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run lint
npm run build
```

The static export is generated in `out/`.

## Deploy To GitHub Pages

1. Create an empty repository at `https://github.com/Indrajit147/portfolio`.
2. Push this project to the `main` branch.
3. In the repository, go to Settings -> Pages.
4. Set Source to `GitHub Actions`.
5. The workflow in `.github/workflows/pages.yml` will deploy the site to:

```text
https://indrajit147.github.io/portfolio/
```

## Edit Content

All profile, project, research, skill, achievement, timeline, and contact content lives in:

```text
src/content/portfolio.ts
```
