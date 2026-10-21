# Anurag Pardeshi Portfolio

A Next.js portfolio for Anurag Pardeshi, featuring his projects, tech stack, and contact details.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Configuration

Set `NEXT_PUBLIC_SITE_URL` to the deployed portfolio URL so canonical links, Open Graph metadata, the sitemap, and Markdown response links point to the right domain. Contact details, tech stack, and live projects are maintained in `src/lib/config.ts`. Edit the clearly marked sample entries in `src/lib/projects.ts` when new work is ready.

## Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```
