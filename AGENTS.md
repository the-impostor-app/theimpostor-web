# The Impostor Web

Marketing and SEO website for **The Impostor** (El Impostor) — a thrilling social deduction spy party game.
(Source app repo: `/Users/dani/Desktop/repos/imposter` — read its `AGENTS.md` for full mobile app architecture and context).

- **Live URL**: https://theimpostor.app/
- **Stack**: Vue 3 (Composition API) + vue-router + Vite + TypeScript + Sass (SCSS) + Vitest + Oxlint + ESLint + Prettier
- **Design System source of truth**: `src/styles/theme.scss` (architected following `/Users/dani/Desktop/repos/home-handy/lib/core/theme/app_theme.dart` and the app colors in `/Users/dani/Desktop/repos/imposter/lib/constants/app_colors.dart`).

---

## Store Links

- **Android (Google Play)**: https://play.google.com/store/apps/details?id=com.drodriguez.imposter
- **iOS (Apple App Store)**: https://apps.apple.com/us/app/the-impostor-spy-party-game/id6763661603

Defined once in `src/config.ts` (`STORE_URLS`). Never hardcode store links in components.

---

## Tech Stack & Architecture Decisions

1. **Sass & CSS Custom Properties**:
   - `src/styles/theme.scss` is the **single source of truth** for all design tokens.
   - **CRITICAL RULE**: Component `<style lang="scss" scoped>` blocks must **ONLY** consume `var(--...)` tokens. Never use arbitrary hardcoded values (colors, margins, paddings, border-radii, transitions).
2. **Typography**:
   - Display: **Cabinet Grotesk 800** (punchy, high-character party headline font).
   - Body: **Satoshi** (400, 500, 700).
   - Self-hosted as `.woff2` in `src/assets/fonts/` for instant render and zero external CDN latency.
3. **SEO & Routing**:
   - Navigation links in the header point to dedicated, crawlable pages instead of single-page anchors.
   - Per-route SEO meta (title, description, canonical link, Open Graph, Twitter card) updated dynamically via `router.afterEach`.
   - CI stages real HTML files for each route (`dist/<route>/index.html`) plus `404.html` fallback for GitHub Pages compatibility.
4. **CI/CD Quality Gates**:
   - `.github/workflows/deploy.yml` triggers on push to `main`/`master`.
   - Strict gate order: `npm ci` → `npm run format:check` (Prettier) → `npm run lint:check` (Oxlint + ESLint) → `npm run type-check` (vue-tsc) → `npm test` (Vitest) → `npm run build-only` (Vite) → deploy to GitHub Pages.

---

## Repo Layout

```
theimpostor-web/
├── .github/
│   └── workflows/
│       └── deploy.yml        # CI/CD pipeline with strict quality gates & GitHub Pages deploy
├── public/
│   ├── favicon.ico
│   ├── icon-512.png
│   ├── apple-touch-icon.png
│   ├── manifest.webmanifest  # PWA manifest
│   ├── robots.txt            # Search and AI bot crawler directives
│   ├── sitemap.xml           # XML sitemap of all public routes
│   └── llms.txt              # Markdown overview for AI agents and LLM search
├── src/
│   ├── assets/
│   │   ├── fonts/            # cabinet-grotesk-800.woff2, satoshi-400/500/700.woff2
│   │   ├── images/           # App icon, detective/impostor avatars, branding assets
│   │   └── store-*.avif      # App Store & Google Play badges
│   ├── components/
│   │   ├── SiteHeader.vue    # Sticky header with brand logo & SEO page links
│   │   ├── SiteFooter.vue    # Footer with all page links, store links & copyright
│   │   ├── DownloadButtons.vue # Auto-detects iOS vs Android for 1-click install
│   │   └── FeatureCard.vue   # Reusable styled card with chip, title & description
│   ├── pages/
│   │   ├── HomePage.vue      # / — Hero, 3-step quick rules, core features showcase & CTA
│   │   ├── HowToPlayPage.vue # /how-to-play — In-depth rulebook, clue phases & bluffing strategies
│   │   ├── GameModesPage.vue # /game-modes — Pass & Play (1 phone) vs Online Multiplayer rooms
│   │   ├── WordPacksPage.vue # /word-packs — Curated categories, 6 languages, custom packs
│   │   ├── DownloadPage.vue  # /download — Direct App Store & Google Play download hubs
│   │   ├── PrivacyPage.vue   # /privacy — Offline-first local data & multiplayer privacy
│   │   └── TermsPage.vue     # /terms — Terms of service & app licensing
│   ├── router/
│   │   └── index.ts          # Route definitions & dynamic document.title/meta handlers
│   ├── styles/
│   │   └── theme.scss        # THEME SOURCE OF TRUTH: design tokens, font faces & resets
│   ├── __tests__/
│   │   ├── App.spec.ts       # App shell, routing & navigation link tests
│   │   └── config.spec.ts    # Store links & platform detection tests
│   ├── config.ts             # App constants, metadata & detectPlatform()
│   ├── main.ts               # App entrypoint, imports theme.scss globally
│   └── App.vue               # App shell (Header + RouterView + Footer)
├── index.html                # HTML entrypoint with metadata and icons
├── package.json              # Scripts & dependencies
├── vite.config.ts            # Vite config
└── tsconfig.json             # TypeScript configuration
```

---

## Design System Tokens (`src/styles/theme.scss`)

| Token Category | Examples / Values |
| --- | --- |
| **Colors** | `--color-primary: #FFAE00` (The Impostor signature orange)<br>`--color-primary-light: #FFBE33`<br>`--color-primary-dark: #E69D00`<br>`--color-secondary: #2196F3` (App blue)<br>`--color-tertiary: #673AB7` (App purple)<br>`--color-danger: #E53935` (Impostor red)<br>`--color-success: #4CAF50` (Detective green)<br>`--color-ink: #2B2118` (deep warm ink)<br>`--color-muted: #827267`<br>`--color-background-top: #FAF8F5`<br>`--color-background-bottom: #F4EFE6`<br>`--color-surface: #FFFFFF` |
| **Fonts** | `--font-display: 'Cabinet Grotesk', 'Satoshi', sans-serif`<br>`--font-body: 'Satoshi', sans-serif` |
| **Radii** | `--radius-card: 24px`<br>`--radius-button: 16px`<br>`--radius-lg: 16px`<br>`--radius-md: 12px`<br>`--radius-pill: 999px` |
| **Spacing** | `--space-2xs: 4px`, `--space-xs: 8px`, `--space-sm: 12px`, `--space-md: 16px`, `--space-lg: 24px`, `--space-xl: 32px`, `--space-2xl: 48px`, `--space-3xl: 64px`, `--space-4xl: 96px` |
| **Motion** | `--motion-quick: 150ms`, `--motion-medium: 220ms`, `--motion-slow: 300ms`, `--motion-curve: cubic-bezier(0.4, 0, 0.2, 1)` |

---

## Page Inventory & SEO Strategy

| Route | Component | SEO Purpose & Key Content |
| --- | --- | --- |
| `/` | `HomePage.vue` | Hero, quick 3-step rules, core feature highlights, store download buttons |
| `/how-to-play` | `HowToPlayPage.vue` | Complete official rules, clue giving phase, accusation & voting, detective and impostor strategy tips |
| `/game-modes` | `GameModesPage.vue` | Pass & Play (single device offline) vs Online Multiplayer rooms, timers, and custom rules |
| `/word-packs` | `WordPacksPage.vue` | 1,000+ words across Food, Travel, Everyday Life, Cinema, Animals, 6 languages, custom editor |
| `/download` | `DownloadPage.vue` | Store download hubs with device requirements and features |
| `/privacy` | `PrivacyPage.vue` | Privacy policy: local offline play data retention, Firebase multiplayer session handling |
| `/terms` | `TermsPage.vue` | Terms of service and usage conditions |

---

## App Context (from `/Users/dani/Desktop/repos/imposter/AGENTS.md`)

- **Game Concept**: Social deduction spy party game. Everyone receives a secret word except the Impostor(s). Players take turns saying one word or sentence related to the word. Then everyone debates and votes on who the spy is.
- **Victory Condition**:
  - **Detectives**: Accuse and vote out the impostor, and the impostor fails to guess the word.
  - **Impostor**: Survive undetected, have an innocent citizen voted out, OR correctly guess the secret word when accused!
- **Local Play**: 1 single phone, 3 to 20 players, 100% offline, zero account hassle.
- **Online Play**: 4 to 8 players, Firebase Firestore real-time session synchronization, synchronized countdown timers and live voting.
- **Audio & Haptics**: Rich cartoon sound effects for clicks, reveals, votes, and victory/defeat stingers.
- **Languages Supported**: English, Spanish (El Impostor), French, German, Italian, Portuguese.

---

## Available Commands

```sh
# Start local dev server
npm run dev

# Code formatting (Prettier)
npm run format         # format code with write
npm run format:check   # check formatting (CI gate)

# Linting (Oxlint + ESLint)
npm run lint           # fix autofixable issues
npm run lint:check     # check without modifying (CI gate)

# TypeScript type check
npm run type-check     # vue-tsc build verification

# Tests (Vitest)
npm test               # run all tests once (CI gate)
npm run test:unit      # run tests in watch mode

# Production build
npm run build          # runs type-check and vite build
npm run build-only     # vite build client bundle
```
