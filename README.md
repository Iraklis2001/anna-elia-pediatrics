# Dr. Anna Elia, MD — Pediatrics Landing Page

Responsive single-page website for a specialist pediatrician practice (English / Greek).

## Stack

- React + TypeScript (Vite)
- Tailwind CSS v4
- Hosted on **Cloudflare Pages**

## Quick start

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Coming Soon / Launch

Public visitors currently see a **Coming Soon** page.

| Goal | How |
|------|-----|
| Preview the full site privately | Open `/?preview=1` |
| Launch the full site publicly | Set `showFullSite: true` in `src/content/siteConfig.ts` |

## Deploy (Cloudflare Pages)

One-time login:

```bash
npx wrangler login
```

Deploy:

```bash
npm run deploy:cf
```

Or connect the GitHub repo in the Cloudflare dashboard for automatic deploys on every push:
[Cloudflare Pages → Create project](https://dash.cloudflare.com/?to=/:account/pages)

Build settings if using Git:
- Framework preset: Vite
- Build command: `npm run build`
- Build output directory: `dist`

## Where to update content later

| What | File |
|------|------|
| Phone, email, address, hours, map, photos, launch switch | `src/content/siteConfig.ts` |
| English & Greek page text | `src/content/copy.ts` |
| Colors / theme | `src/index.css` (`@theme` block) |

## Build for production

```bash
npm run build
npm run preview
```
