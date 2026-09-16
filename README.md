# Dr. Anna Elia, MD — Pediatrics Landing Page

**Live site: [anna-elia-pediatrics.vercel.app](https://anna-elia-pediatrics.vercel.app)**

Responsive single-page website for a specialist pediatrician practice (English / Greek).

## Stack

- React + TypeScript (Vite)
- Tailwind CSS v4
- Plus Jakarta Sans

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

Live site: https://anna-elia-pediatrics.vercel.app

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
