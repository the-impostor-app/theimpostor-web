# The Impostor Web

Marketing, Content Hub, and SEO website for **The Impostor** (*El Impostor*) — a thrilling social deduction spy party game.
Crafted by [Axis Labs](https://axislabs.eu/).
(Source app repo: `/Users/dani/Desktop/repos/imposter` — read its `AGENTS.md` for full mobile app architecture and context).

- **Live URLs**:
  - Primary Domain: https://theimpostor.app/
  - European Domain: https://theimpostor.eu/
- **Repo**: `git@github.com:the-impostor-app/theimpostor-web.git`
- **Credits**: [Axis Labs](https://axislabs.eu/)
- **Design Inspiration**: [RevenueCat](https://www.revenuecat.com/) — modern, clean, high-contrast SaaS materiality with subtle ambient glow effects.
- **Stack**: Vue 3 (Composition API) + vue-router + Vite + TypeScript + Sass (SCSS) + Vitest + Oxlint + ESLint + Prettier
- **Design System source of truth**: `src/styles/theme.scss` (architected following `/Users/dani/Desktop/repos/home-handy/lib/core/theme/app_theme.dart` and the app colors in `/Users/dani/Desktop/repos/imposter/lib/constants/app_colors.dart`).

---

## Store Links

- **Android (Google Play)**: https://play.google.com/store/apps/details?id=com.drodriguez.imposter
- **iOS (Apple App Store)**: https://apps.apple.com/us/app/the-impostor-spy-party-game/id6763661603

Defined once in `src/config.ts` (`STORE_URLS`). Never hardcode store links in components.

---

## Legal & Official Axis Labs Links

- **In-Site Privacy Policy**: `/privacy` (aliases: `/privacy-policy`, `/the-impostor/policy`)
- **In-Site Terms of Service**: `/terms` (aliases: `/terms-of-service`, `/the-impostor/terms-and-conditions`)
- **Axis Labs Official Policy**: https://axislabs.eu/the-impostor/policy
- **Axis Labs Official Terms**: https://axislabs.eu/the-impostor/terms-and-conditions

---

## Tech Stack & Architecture Decisions

1. **Sass & CSS Custom Properties**:
   - `src/styles/theme.scss` is the **single source of truth** for all design tokens.
   - **CRITICAL RULE**: Component `<style lang="scss" scoped>` blocks must **ONLY** consume `var(--...)` tokens. Never use arbitrary hardcoded values (colors, margins, paddings, border-radii, transitions).
2. **Typography**:
   - Display: **Cabinet Grotesk 800** (punchy, high-character party headline font).
   - Body: **Satoshi** (400, 500, 700).
   - Self-hosted as `.woff2` in `src/assets/fonts/` for instant render and zero external CDN latency.
3. **Store Badges Pattern**:
   - Display both the Apple App Store badge and Google Play badge (`class="store-img"`) side-by-side.
   - Maintained in `DownloadButtons.vue`.
4. **Internationalization (i18n)**:
   - Full support for **English** and **Spanish** (*El Impostor*).
   - Lightweight, zero-dependency composable architecture (`src/composables/useI18n.ts`).
   - Translation dictionaries located in `src/i18n/en.ts` and `src/i18n/es.ts`.
   - Header language switcher (`LanguageSwitch.vue`) with responsive desktop and mobile drawers.
   - Dynamic `<html lang="...">` update on route and locale change.
5. **SEO & AEO / GEO Engine**:
   - **Social Preview Image**: High-res OG preview image (`og-image.png`, 1200×630) configured via `og:image`, `og:image:width`, `og:image:height`, and `twitter:image`.
   - **Same-Domain Canonical**: Static `<link rel="canonical">` in `index.html` plus dynamic route updates in `router.afterEach`.
   - **Hreflang Tags**: `en`, `es`, and `x-default` alternates in `index.html` and `sitemap.xml`.
   - **Structured Data (JSON-LD)**:
     - `MobileApplication` schema for Google Play / App Store indexing.
     - `Organization` schema for Axis Labs.
     - `WebSite` schema.
     - Dynamic `BlogPosting` schema on each individual blog article.
     - Self-contained definition and FAQ blocks on the homepage and rules pages for Google AI Overviews and answer engines (Perplexity, ChatGPT).
   - **Google Consent Mode v2**: Default privacy-first signal configured in `index.html` head (`ad_storage: denied`, `analytics_storage: denied`).
   - **AI Bot Directives**: `robots.txt` explicitly allows GPTBot, ChatGPT-User, PerplexityBot, ClaudeBot, Google-Extended, anthropic-ai, and Bingbot.
   - **LLM Search Overview**: `public/llms.txt` provides structured markdown context for LLM crawlers.
6. **Content Hub & Blog**:
   - High-intent keyword targeting (e.g., *social deduction game*, *spy party game*, *offline party games*, *juego de deducción social*, *palabras para el impostor*).
   - 10 comprehensive evergreen articles (5 in English, 5 in Spanish) located in `src/blog/articles/`.
   - Dedicated `/blog` index with tag filtering and reading time.
   - Dynamic article route `/blog/:slug` with prose styling and related articles.
7. **CI/CD Quality Gates & GitHub Pages Compatibility**:
   - `.github/workflows/deploy.yml` triggers on push to `main`/`master`.
   - Gate sequence: `npm ci` → `npm run format:check` (Prettier) → `npm run lint:check` (Oxlint + ESLint) → `npm run type-check` (vue-tsc) → `npm test` (Vitest) → `npm run build-only` (Vite) → GitHub Pages deployment.
   - Staging trick: Every route and blog article gets an `index.html` copy staged in `dist/` (`dist/blog/`, `dist/blog/:slug/`, `dist/the-impostor/policy/`, etc.) plus `404.html` fallback.

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
│   ├── og-image.png          # 1200x630 social preview image
│   ├── apple-touch-icon.png
│   ├── manifest.webmanifest  # PWA manifest
│   ├── robots.txt            # Search and AI bot crawler directives
│   ├── sitemap.xml           # XML sitemap with 18 URLs and hreflang alternates
│   └── llms.txt              # Markdown overview for AI agents and LLM search
├── src/
│   ├── assets/
│   │   ├── fonts/            # cabinet-grotesk-800.woff2, satoshi-400/500/700.woff2
│   │   ├── images/           # App icon, detective/impostor avatars, branding assets
│   │   └── store-*.avif      # App Store & Google Play badges
│   ├── blog/
│   │   ├── types.ts          # BlogArticle schema interface
│   │   ├── articles.ts       # Registry exporting all English and Spanish articles
│   │   └── articles/         # 10 individual articles (5 EN, 5 ES)
│   ├── components/
│   │   ├── SiteHeader.vue    # Sticky header with brand logo, SEO page links, blog link & language switch
│   │   ├── SiteFooter.vue    # Footer with all page links, store links & Axis Labs legal links
│   │   ├── LanguageSwitch.vue# Bilingual toggle (EN | ES)
│   │   ├── DownloadButtons.vue # Unified store badge images side-by-side
│   │   └── FeatureCard.vue   # Reusable styled card with chip, title & description
│   ├── composables/
│   │   └── useI18n.ts        # Reactive bilingual i18n composable with localStorage persistence
│   ├── i18n/
│   │   ├── en.ts             # English translation dictionary
│   │   ├── es.ts             # Spanish translation dictionary
│   │   └── index.ts          # i18n module entrypoint
│   ├── pages/
│   │   ├── HomePage.vue      # / — Hero, duel showcase, 3-step rules, features, blog preview, FAQ, legal strip
│   │   ├── HowToPlayPage.vue # /how-to-play — In-depth rulebook, clue phases & bluffing strategies
│   │   ├── GameModesPage.vue # /game-modes — Pass & Play (1 phone) vs Online Multiplayer rooms
│   │   ├── WordPacksPage.vue # /word-packs — Curated categories, 6 languages, custom packs
│   │   ├── BlogPage.vue      # /blog — Content hub with tag filtering and reading times
│   │   ├── BlogArticlePage.vue # /blog/:slug — Full article prose with JSON-LD schema & related reads
│   │   ├── DownloadPage.vue  # /download — Direct App Store & Google Play download hubs
│   │   ├── PrivacyPage.vue   # /privacy — Bilingual offline-first local data & multiplayer privacy
│   │   └── TermsPage.vue     # /terms — Bilingual terms of service & app licensing
│   ├── router/
│   │   └── index.ts          # Route definitions, aliases, and dynamic document.title/meta handlers
│   ├── styles/
│   │   └── theme.scss        # THEME SOURCE OF TRUTH: design tokens, font faces & resets
│   ├── __tests__/
│   │   ├── App.spec.ts       # App shell, routing, blog navigation & language switch tests
│   │   └── config.spec.ts    # Store links, Axis Labs credits & platform detection tests
│   ├── config.ts             # App constants, Axis Labs credits, metadata
│   ├── main.ts               # App entrypoint, imports theme.scss globally and installs i18n
│   └── App.vue               # App shell (Header + RouterView + Footer + dynamic html lang)
├── index.html                # HTML entrypoint with metadata, Consent Mode v2, and JSON-LD schemas
├── package.json              # Scripts & dependencies
├── vite.config.ts            # Vite config
└── tsconfig.json             # TypeScript configuration
```

---

## Design System Tokens (`src/styles/theme.scss`)

| Token Category | Examples / Values |
| --- | --- |
| **Colors** | `--color-primary: #FFAE00` (The Impostor signature orange)<br>`--color-primary-light: #FFBE33`<br>`--color-primary-dark: #E69D00`<br>`--color-secondary: #0284C7` (RevenueCat electric blue)<br>`--color-tertiary: #6366F1` (Indigo accent)<br>`--color-danger: #EF4444` (Impostor red)<br>`--color-success: #10B981` (Detective emerald)<br>`--color-ink: #0B0F19` (modern deep slate)<br>`--color-muted: #64748B`<br>`--color-background-top: #F8F9FB`<br>`--color-background-bottom: #F1F3F7`<br>`--color-surface: #FFFFFF` |
| **Fonts** | `--font-display: 'Cabinet Grotesk', 'Satoshi', sans-serif`<br>`--font-body: 'Satoshi', sans-serif` |
| **Radii** | `--radius-card: 20px`<br>`--radius-button: 999px`<br>`--radius-lg: 16px`<br>`--radius-md: 12px`<br>`--radius-pill: 999px` |
| **Spacing** | `--space-2xs: 4px`, `--space-xs: 8px`, `--space-sm: 12px`, `--space-md: 16px`, `--space-lg: 24px`, `--space-xl: 32px`, `--space-2xl: 48px`, `--space-3xl: 64px`, `--space-4xl: 96px` |
| **Motion** | `--motion-quick: 150ms`, `--motion-medium: 220ms`, `--motion-slow: 300ms`, `--motion-curve: cubic-bezier(0.16, 1, 0.3, 1)` |

---

## Page Inventory & SEO Strategy

| Route | Component | SEO Purpose & Key Content |
| --- | --- | --- |
| `/` | `HomePage.vue` | Hero with metrics bar, quick 3-step rules, RevenueCat-style feature cards, blog preview, FAQ, legal strip |
| `/how-to-play` | `HowToPlayPage.vue` | Complete official rules, clue giving phase, accusation & voting, detective and impostor strategy tips |
| `/game-modes` | `GameModesPage.vue` | Pass & Play (single device offline) vs Online Multiplayer rooms, timers, and custom rules |
| `/word-packs` | `WordPacksPage.vue` | 1,000+ words across Food, Travel, Everyday Life, Cinema, Animals, 6 languages, custom editor |
| `/blog` | `BlogPage.vue` | Content hub with categorized articles in English and Spanish, reading times, and tag filtering |
| `/blog/:slug` | `BlogArticlePage.vue` | Long-form articles with structured headings, FAQ schema, comparison tables, and download CTAs |
| `/download` | `DownloadPage.vue` | Store download hubs with device requirements and features |
| `/privacy` | `PrivacyPage.vue` | Bilingual privacy policy: local offline play data retention, Firebase multiplayer session handling |
| `/terms` | `TermsPage.vue` | Bilingual terms of service and usage conditions |

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
