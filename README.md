# Anurag Pardeshi Portfolio

A Next.js portfolio for Anurag Pardeshi, featuring his projects, tech stack, and contact details.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

Set `NEXT_PUBLIC_SITE_URL` to the deployed portfolio URL so canonical links, Open Graph metadata, the sitemap, and Markdown response links point to the right domain. Contact details and tech stack are maintained in `src/lib/config.ts`. Project names, descriptions, links, tags, and preview paths are maintained in `src/lib/projects.ts` and shared across the site. Homepage screenshots are stored as 1440 × 1000 WebP images in `public/projects/`; replace them when a project's design changes. Keep the project overview in `public/llms.txt` in sync with the list.

The company mark in `public/imentus-logo.ico` is sourced from [iMentus's official website](https://www.imentus.com/favicon.ico) and displayed beside its name on the homepage experience card.

## Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```
