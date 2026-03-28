# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Cinemenu is a movie/TV show food pairing app. Users search for a movie or TV show, open its detail page, and see food recommendations (main courses, snacks, etc.) that pair with that title. Results are cached in a SQLite database. AI generation is planned but not yet implemented — food pairings currently come from seeded data.

## Commands

- `npm run dev` -- start Next.js dev server with Turbopack
- `npm run build` -- production build (outputs `.next/standalone/` for deployment)
- `npm run start` -- serve the production build
- `npm run lint` -- ESLint across the project
- `npm run db:push` -- push Drizzle schema to SQLite database
- `npm run db:seed` -- seed database with initial movies, TV shows, and food pairings

## Tech Stack

- **Framework:** Next.js 16 (App Router), React 19, TypeScript 5.9
- **Database:** SQLite via better-sqlite3 (local) or Turso @libsql/client (remote), switchable via `DB_DRIVER` env var
- **ORM:** Drizzle ORM with SQLite dialect
- **Styling:** Tailwind CSS v4 via `@tailwindcss/postcss` (CSS-first config, no `tailwind.config.js`). Custom theme tokens mapped from CSS variables in `app/globals.css` via `@theme` block.
- **Linting:** ESLint 9 flat config with typescript-eslint, react-hooks plugins
- **TypeScript:** Strict mode with `verbatimModuleSyntax` (use `import type` for type-only imports)

## Architecture

**Layout:** 720px max-width, centered (`.app-shell` in `app/globals.css`). Intentionally narrow and compact.

**Routing** (Next.js App Router file-based routing):
- `/` -- Home (hero + search + featured grid) — `app/page.tsx`
- `/movies` -- Movies list — `app/movies/page.tsx`
- `/tv-shows` -- TV Shows list — `app/tv-shows/page.tsx`
- `/movies/:slug` -- Movie detail — `app/movies/[slug]/page.tsx`
- `/tv-shows/:slug` -- TV Show detail — `app/tv-shows/[slug]/page.tsx`
- `/api/search?q=` -- Search API — `app/api/search/route.ts`

**Database:** Schema in `lib/db/schema.ts` (two tables: `media` and `food_pairings`). Dual-driver client in `lib/db/client.ts` picks `better-sqlite3` or `@libsql/client` based on `DB_DRIVER` env var. Queries with caching in `lib/db/queries.ts`.

**Components:** `components/` -- `Header` (client), `Footer`, `SearchInput` (client, wired to search API), `MediaCard` (client), `MediaDetail`.

**Types:** `lib/types.ts` -- `MediaItem`, `FoodPairing`, `FoodSuggestion`, `FoodCategory`, `MediaType`.

**Styling:** CSS custom properties in `:root` with light/dark mode. Dark mode toggled via `useTheme` hook (localStorage + `html.dark` class). Accent color is purple (#aa3bff light / #c084fc dark). Tailwind theme tokens reference these variables.

**Caching:** DB queries wrapped with `unstable_cache` from `next/cache`. Lists revalidate every 60s. Detail pages cache until manually revalidated via tags (`media`, `food-pairings`).

**Deployment:** `output: "standalone"` in `next.config.ts` produces a self-contained build for NAS/Docker deployment.

## Environment Variables

```
DB_DRIVER=local          # "local" for better-sqlite3, "turso" for Turso
DB_PATH=cinemenu.db      # path to SQLite file (local only)
TURSO_URL=               # Turso database URL (turso only)
TURSO_AUTH_TOKEN=         # Turso auth token (turso only)
```

## Not Yet Implemented

- AI SDK integration for food pairing generation (Claude API)
- Admin interface for managing content
- On-demand revalidation endpoint
