# The Impostor Web

Marketing and SEO website for **The Impostor** (El Impostor) — a thrilling social deduction spy party game.
Crafted by [Axis Labs](https://axislabs.eu/).

- **Live URL**: https://theimpostor.app/
- **Repo**: https://github.com/the-impostor-app/theimpostor-web
- **Design Inspiration**: [RevenueCat](https://www.revenuecat.com/) (modern, high-contrast, clean SaaS materiality)
- **App Source Repo**: `/Users/dani/Desktop/repos/imposter`

---

## Store Links

- **Apple App Store**: https://apps.apple.com/us/app/the-impostor-spy-party-game/id6763661603
- **Google Play**: https://play.google.com/store/apps/details?id=com.drodriguez.imposter

---

## Tech Stack

- **Framework**: Vue 3 (Composition API, `<script setup>`)
- **Routing**: `vue-router` with dedicated SEO routes (`/`, `/how-to-play/`, `/game-modes/`, `/word-packs/`, `/download/`, `/privacy/`, `/terms/`)
- **Build Tool**: Vite
- **Styles**: SCSS + centralized design tokens in `src/styles/theme.scss`
- **Fonts**: Self-hosted `Cabinet Grotesk 800` (headings) and `Satoshi 400/500/700` (body)
- **Testing**: Vitest (`npm test`)
- **Linting & Formatting**: Oxlint, ESLint, Prettier
- **CI/CD**: GitHub Actions deployment to GitHub Pages (`.github/workflows/deploy.yml`)

---

## Development

```sh
# Install dependencies
npm ci

# Start local dev server
npm run dev

# Code formatting
npm run format         # format code with Prettier
npm run format:check   # verify formatting (CI gate)

# Linting
npm run lint           # fix autofixable issues
npm run lint:check     # verify linting (CI gate)

# Type checking
npm run type-check     # vue-tsc build verification

# Tests
npm test               # run all unit tests once (CI gate)

# Production build
npm run build          # type-check and vite production bundle
```
