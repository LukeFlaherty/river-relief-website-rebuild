<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# River Relief Website — Agent Guide

This is a marketing site for River Relief (a river cleanup / restoration /
disaster-relief nonprofit — placeholder org, real mission details TBD from
the client). It is intentionally a **single page** right now; the
infrastructure below is built to support growing it into a multi-page site
without rework.

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
- Placeholder values are marked `// TODO:` in `site-config.ts` (donation
  link, volunteer sign-up link, social links, contact email/phone/address,
  production domain). Don't invent real-looking values for these — leave the
  TODOs until the client provides real content, or ask.

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
