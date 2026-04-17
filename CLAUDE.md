# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Vite dev server on port 3000.
- `npm run build` — `tsc` type-check then `vite build` (outputs to `dist/`).
- `npm run preview` — serve built bundle.

No test runner, no linter configured.

`.env.local` holds `GEMINI_API_KEY` (per README; not currently referenced in source).

## Architecture

Single-page React 18 portfolio (Nassim Chemil) using `HashRouter`. Two routes: `/` (`Home`) and `/project/:id` (`ProjectDetail`). Entry: `index.tsx` → `App.tsx`.

### Styling system — critical

Tailwind is loaded via **CDN** (`<script src="https://cdn.tailwindcss.com">` in `index.html`). No `tailwind.config.js`, no PostCSS. Tailwind config is inlined in `index.html` `<script>` block — edit there, not via a config file.

Color tokens flow through CSS variables:
- Source of truth: `config/colors.config.ts` (exports `PRIMARY`, themes, `injectCSSVars()`).
- Runtime injects `--color-*` vars as RGB channels (`"39 160 108"` format).
- Tailwind color classes reference them via `rgb(var(--color-xxx) / <alpha-value>)` — that's why `bg-primary/10` works.
- Adding a color requires updating BOTH `colors.config.ts` AND the `colors` block in `index.html`.

Border radius is **standardized at 5px** across all Tailwind sizes (`sm`/`md`/`lg`/`xl`/`2xl`/`3xl` all → 5px). Only `full` differs. Don't add new radii.

Fonts: Geist Sans / Geist Mono via jsDelivr CDN. Use `tech-label` / `tech-heading` / `txt-sm` utility classes from `index.html` inline styles for technical typography.

Dark theme is default (`<html class="dark">`); light toggle exists (see `de3ec57` commit).

### Smooth scroll

`SmoothScroll.tsx` wraps the app with Lenis. Elements needing native scroll inside Lenis must use `data-lenis-prevent`. `overflow-x-hidden` is on the main wrapper — do not move it to `html`/`body` or Lenis breaks.

### Content model

All page data (projects, experience, skills, education) lives in `constants.tsx` and is typed by `types.ts`. Adding a project = append to the relevant array there; `ProjectDetail` reads by `:id` param.

### Static assets

`vite.config.ts` sets `publicDir: 'static'`. Files in `static/` (PDFs, HTML mission sheets under `5_Fiches-missions-IA/`) are served at root. The mission-sheet HTML files are standalone pages, not imported by React.

### Deployment

Vercel (directory name `...-Vercel-Online...`). Build output `dist/` is committed.
