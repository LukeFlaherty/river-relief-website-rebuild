<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# River Relief Website — Agent Guide

This is a marketing site for **River Relief LLC**, a personal-loan /
debt-consolidation lender. **Despite the river branding and name, this is a
financial services company, not an environmental nonprofit** — "River
Relief" is a "river to lower payments" metaphor. (An earlier draft of this
file and the copy incorrectly assumed a river-cleanup nonprofit; that was
corrected 2026-07-17 after reviewing the client's actual site content and
brand assets.) It is intentionally a **single page** right now; the
infrastructure below is built to support growing it into a multi-page site
(the client's real site has separate Home / About Us / FAQ / Contact pages)
without rework.

Current copy in `site-config.ts` is adapted from the client's existing
site as a starting framework. Sections are being refined one at a time in
follow-up passes — don't treat current wording as final, especially the
`legal.disclosure` text (lending disclosures are compliance-sensitive;
confirm current wording with the client before changing or removing it).

## Stack & versions

- Next.js 16 (App Router, Turbopack, React 19) — see the breaking-changes
  notice above. When in doubt about an API, check
  `node_modules/next/dist/docs/` rather than relying on training data.
- TypeScript, strict mode (`tsconfig.json`).
- Tailwind CSS 4 — configured via `@import "tailwindcss"` and `@theme inline`
  in `src/app/globals.css` (no `tailwind.config.js`; v4 uses CSS-based config).
- ESLint (`eslint-config-next`) + Prettier with `prettier-plugin-tailwindcss`
  (auto-sorts Tailwind classes on format — don't hand-order classes, just run
  `npm run format`).

## Brand

- Colors are defined as Tailwind theme tokens in `src/app/globals.css`
  (`@theme inline` block) and used via `bg-brand-*` / `text-brand-*` /
  `border-brand-*` utilities — never hardcode hex values in components.
  Source: client-provided brand colors, 2026-07-17.
  - `brand-tan` `#fbecd3` — light background sections (hero, alternating bands)
  - `brand-blue` `#21394a` — primary/dark brand color (CTAs, footer, headings accent)
  - `brand-grey-light` `#9aa0a9`, `brand-grey-mid` `#7a7a7a`, `brand-grey-dark` `#33373d` — body text / borders, light to dark
  - `background` (white `#ffffff`) — the default page background
- Logo files live in `public/brand/`, sourced from the client's existing
  site assets (2026-07-17):
  - `logo-full-color.png` — dark wordmark + icon, for light backgrounds (header)
  - `logo-white.png` — white wordmark + icon, for dark backgrounds (footer, on `brand-blue`)
  - Favicon / `app/icon.png` / `app/apple-icon.png` were cropped from the
    left ~111×111px icon mark of `logo-full-color.png` (see git history for
    the exact crop if regenerating).
  - `credit-score-graphic.png` — a generic marketing graphic from the
    client's site (credit-score gauge stock photo); not currently used
    anywhere, kept in case a future section needs it.
- Dark mode is **not** implemented — the site is single-theme (light) by
  design, matching the client's existing brand. Don't add
  `dark:` variants without a reason.

## Repo conventions

- **All page copy lives in `src/lib/site-config.ts`.** Components read from
  `siteConfig` and render it; they should not contain hardcoded copy. When
  asked to change text, links, stats, or contact info, edit that file first.
- **One component per homepage section**, in `src/components/`, named
  `*-section.tsx` for content sections (e.g. `mission-section.tsx`) or
  descriptively for chrome (`site-header.tsx`, `site-footer.tsx`). `page.tsx`
  just composes them in order — keep it that way rather than inlining markup.
- Components are server components by default (no `"use client"` anywhere
  yet). Only add `"use client"` when a component needs interactivity/state —
  keep as much as possible server-rendered.
- Section components that anchor nav links (`#mission`, `#programs`, etc.)
  must keep matching `id` attributes on their root `<section>` — the header
  nav and hero CTAs link to these anchors. If you rename a section or add a
  new one, update `siteConfig.nav` accordingly.
- Placeholder values are marked `// TODO:` in `site-config.ts` (application
  flow link, phone number, social links, contact email/address, production
  domain). Don't invent real-looking values for these — leave the TODOs
  until the client provides real content, or ask.

## Before committing

Run, in order:

```bash
npm run format
npm run lint
npm run typecheck
npm run build
```

CI (`.github/workflows/ci.yml`) runs `format:check`, `lint`, `typecheck`,
and `build` on every push/PR to `main` — a broken build or unformatted diff
will fail CI.

## Deployment & repo ownership

- Live at https://river-relief-website-rebuild.vercel.app. Vercel project
  `lukeflahertys-projects/river-relief-website-rebuild` is connected via
  GitHub integration to the `main` branch of
  `LukeFlaherty/river-relief-website-rebuild`. Pushing to `main` triggers a
  production deploy; PRs get preview deploys automatically. No
  `vercel.json` — Next.js is auto-detected.
- **This repo and Vercel project are temporary.** They're owned by the
  developer (Luke Flaherty) as a starting point. At some point this will be
  transferred to a client-owned GitHub org and a client-owned Vercel
  project. When that happens: update this note, update the repo URL in
  `README.md`, and confirm the Vercel project's Git integration is
  repointed at the new remote (a transferred GitHub repo keeps its Vercel
  hooks working automatically in most cases, but verify).
- No environment variables or secrets are in use yet. If any are added
  (analytics IDs, form endpoints, CMS keys), document them in `README.md`
  and add a `.env.example`.

## What's deliberately not here yet

- No CMS — content is static in `site-config.ts`. Revisit if the client
  needs to self-edit copy.
- No analytics, forms backend, or image optimization beyond Next's
  defaults — add these when requirements are known rather than
  speculatively.
- No test suite — the site is presentational; add tests if/when logic
  (forms, interactivity) is introduced.
