# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Cinemenu is a movie/TV show food pairing app. Users search for a movie or TV show, open its detail page, and see AI-generated food recommendations (main courses, snacks, etc.) that pair with that title. Results will be cached in a database so AI generation only happens once per title. Currently the app is a static frontend shell with fake data.

## Commands

- `npm run dev` -- start Vite dev server with HMR
- `npm run build` -- type-check with `tsc -b` then build with Vite
- `npm run lint` -- ESLint across the project
- `npm run preview` -- preview the production build locally

## Tech Stack

- **Frontend:** React 19, TypeScript 5.9, Vite 8, Tailwind CSS v4, React Router v7
- **Styling:** Tailwind v4 via `@tailwindcss/vite` plugin (CSS-first config, no `tailwind.config.js`). Custom theme tokens mapped from CSS variables in `src/index.css` via `@theme` block.
- **Linting:** ESLint 9 flat config with typescript-eslint, react-hooks, react-refresh plugins
- **TypeScript:** Strict mode with `verbatimModuleSyntax` (use `import type` for type-only imports). Two tsconfig files: `tsconfig.app.json` (src/) and `tsconfig.node.json` (tooling).

## Architecture

**Layout:** 720px max-width, centered (`#root` in `src/index.css`). Intentionally narrow and compact.

**Routing** (`src/App.tsx`): `createBrowserRouter` with a shared `Layout` component wrapping all routes:
- `/` -- Home (hero + search + featured grid)
- `/movies` -- Movies list
- `/tv-shows` -- TV Shows list
- `/movies/:slug` -- Movie detail
- `/tv-shows/:slug` -- TV Show detail

**Data:** `src/data/fake-data.ts` exports mock movies and TV shows with helper functions (`getMediaBySlug`, `getMovies`, `getTvShows`, `getFeatured`). Types defined in `src/types/index.ts`.

**Components:** `src/components/` -- `Layout`, `Header`, `SearchInput`, `MediaCard`. Pages in `src/pages/`.

**Styling:** CSS custom properties in `:root` with light/dark mode (`prefers-color-scheme`). Accent color is purple (#aa3bff light / #c084fc dark). Tailwind theme tokens reference these variables so both systems stay in sync.

## Not Yet Implemented

- Backend API server
- Database for caching AI-generated food menus
- AI SDK integration for menu generation
- Working search functionality (SearchInput component is visual-only)
