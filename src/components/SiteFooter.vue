<script setup lang="ts">
import { APP_NAME, CREDITS_URL, CREDITS_NAME } from '../config'
import appIcon from '../assets/images/icon.png'
import DownloadButtons from './DownloadButtons.vue'
import { useI18n } from '../composables/useI18n'

const { t, locale } = useI18n()
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="container site-footer__container">
      <div class="site-footer__main">
        <div class="site-footer__brand-col">
          <RouterLink to="/" class="site-footer__brand">
            <img :src="appIcon" :alt="APP_NAME" class="site-footer__logo" />
            <span class="site-footer__name">{{ locale === 'es' ? 'El Impostor' : APP_NAME }}</span>
          </RouterLink>
          <p class="site-footer__tagline">
            {{
              locale === 'es'
                ? 'El juego definitivo de fiesta y deducción social.'
                : 'The Ultimate Spy Party Game'
            }}
          </p>
          <p class="site-footer__desc">
            {{
              locale === 'es'
                ? 'El emocionante juego de fiesta de deducción social. Una creación de'
                : 'The thrilling social deduction party game. An'
            }}
            <a :href="CREDITS_URL" target="_blank" rel="noopener noreferrer" class="credits-link">
              {{ CREDITS_NAME }}
            </a>
            {{ locale === 'es' ? '' : 'creation.' }}
          </p>
          <div class="site-footer__stores">
            <DownloadButtons />
          </div>
        </div>

        <div class="site-footer__nav-group">
          <div class="site-footer__col">
            <h4 class="site-footer__heading">{{ t('footer.game') }}</h4>
            <ul class="site-footer__list">
              <li>
                <RouterLink to="/" class="site-footer__link">{{
                  locale === 'es' ? 'Inicio' : 'Home'
                }}</RouterLink>
              </li>
              <li>
                <RouterLink to="/how-to-play" class="site-footer__link">{{
                  t('nav.howToPlay')
                }}</RouterLink>
              </li>
              <li>
                <RouterLink to="/game-modes" class="site-footer__link">{{
                  t('nav.gameModes')
                }}</RouterLink>
              </li>
              <li>
                <RouterLink to="/word-packs" class="site-footer__link">{{
                  t('nav.wordPacks')
                }}</RouterLink>
              </li>
              <li>
                <RouterLink to="/blog" class="site-footer__link">{{ t('nav.blog') }}</RouterLink>
              </li>
            </ul>
          </div>

          <div class="site-footer__col">
            <h4 class="site-footer__heading">{{ locale === 'es' ? 'Descargas' : 'Downloads' }}</h4>
            <ul class="site-footer__list">
              <li>
                <RouterLink to="/download" class="site-footer__link">{{
                  locale === 'es' ? 'Centro de Descarga' : 'Download Hub'
                }}</RouterLink>
              </li>
              <li>
                <a
                  href="https://apps.apple.com/us/app/the-impostor-spy-party-game/id6763661603"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="site-footer__link"
                >
                  Apple App Store ↗
                </a>
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.drodriguez.imposter"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="site-footer__link"
                >
                  Google Play Store ↗
                </a>
              </li>
            </ul>
          </div>

          <div class="site-footer__col">
            <h4 class="site-footer__heading">{{ t('footer.company') }}</h4>
            <ul class="site-footer__list">
              <li>
                <a
                  :href="CREDITS_URL"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="site-footer__link"
                >
                  {{ CREDITS_NAME }} ↗
                </a>
              </li>
              <li>
                <RouterLink to="/privacy" class="site-footer__link">{{
                  t('footer.privacy')
                }}</RouterLink>
              </li>
              <li>
                <RouterLink to="/terms" class="site-footer__link">{{
                  t('footer.terms')
                }}</RouterLink>
              </li>
              <li>
                <a
                  href="https://axislabs.eu/the-impostor/policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="site-footer__link"
                >
                  Axis Labs Policy ↗
                </a>
              </li>
              <li>
                <a
                  href="https://axislabs.eu/the-impostor/terms-and-conditions"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="site-footer__link"
                >
                  Axis Labs Terms ↗
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="site-footer__bottom">
        <p class="site-footer__copyright">
          © {{ currentYear }} {{ locale === 'es' ? 'El Impostor' : APP_NAME }}.
          {{ locale === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.' }}
        </p>
        <p class="site-footer__credit">
          {{ locale === 'es' ? 'Creado por' : 'Crafted by' }}
          <a :href="CREDITS_URL" target="_blank" rel="noopener noreferrer" class="credits-link">
            {{ CREDITS_NAME }}
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.site-footer {
  background: var(--color-surface);
  border-top: 1px solid var(--color-outline);
  padding-block: var(--space-4xl) var(--space-2xl);

  &__main {
    display: flex;
    justify-content: space-between;
    gap: var(--space-3xl);
    flex-wrap: wrap;
    margin-bottom: var(--space-3xl);
  }

  &__brand-col {
    max-width: 400px;
  }

  &__brand {
    display: inline-flex;
    align-items: center;
    gap: var(--space-sm);
    text-decoration: none;
    margin-bottom: var(--space-sm);
  }

  &__logo {
    width: 36px;
    height: 36px;
    border-radius: var(--radius-sm);
  }

  &__name {
    font-family: var(--font-display);
    font-weight: var(--font-weight-display);
    font-size: var(--font-size-title);
    color: var(--color-ink);
  }

  &__tagline {
    font-weight: var(--font-weight-body-bold);
    color: var(--color-ink);
    margin-bottom: var(--space-xs);
  }

  &__desc {
    color: var(--color-muted);
    font-size: var(--font-size-body-small);
    line-height: var(--line-height-body);
    margin-bottom: var(--space-lg);
  }

  &__stores {
    margin-top: var(--space-sm);
  }

  &__nav-group {
    display: flex;
    gap: var(--space-3xl);
    flex-wrap: wrap;
  }

  &__col {
    min-width: 140px;
  }

  &__heading {
    font-family: var(--font-body);
    font-weight: var(--font-weight-body-bold);
    font-size: var(--font-size-caption);
    letter-spacing: var(--letter-spacing-kicker);
    text-transform: uppercase;
    color: var(--color-ink);
    margin-bottom: var(--space-md);
  }

  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }

  &__link {
    font-size: var(--font-size-body-small);
    color: var(--color-muted);
    transition: color var(--motion-quick) var(--motion-curve);

    &:hover {
      color: var(--color-primary-dark);
    }
  }

  &__bottom {
    padding-top: var(--space-xl);
    border-top: 1px solid var(--color-outline-subtle);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--space-md);
  }

  &__copyright,
  &__credit {
    color: var(--color-muted);
    font-size: var(--font-size-caption);
  }
}

.credits-link {
  color: var(--color-primary-dark);
  font-weight: var(--font-weight-body-bold);
  text-decoration: underline;

  &:hover {
    color: var(--color-ink);
  }
}

@media (max-width: 768px) {
  .site-footer {
    &__main {
      flex-direction: column;
      gap: var(--space-2xl);
    }

    &__nav-group {
      gap: var(--space-2xl);
    }
  }
}
</style>
