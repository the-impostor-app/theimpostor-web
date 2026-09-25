<script setup lang="ts">
import { ref } from 'vue'
import { APP_NAME } from '../config'
import appIcon from '../assets/images/icon.png'
import LanguageSwitch from './LanguageSwitch.vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const isMobileMenuOpen = ref(false)

function toggleMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function closeMenu() {
  isMobileMenuOpen.value = false
}
</script>

<template>
  <header class="site-header">
    <div class="container site-header__container">
      <RouterLink to="/" class="site-header__brand" @click="closeMenu">
        <img :src="appIcon" :alt="APP_NAME" class="site-header__logo" />
        <span class="site-header__name">{{ APP_NAME }}</span>
      </RouterLink>

      <div class="site-header__actions-wrap">
        <nav class="site-header__nav" :class="{ 'is-open': isMobileMenuOpen }">
          <RouterLink to="/how-to-play" class="site-header__link" @click="closeMenu">
            {{ t('nav.howToPlay') }}
          </RouterLink>
          <RouterLink to="/game-modes" class="site-header__link" @click="closeMenu">
            {{ t('nav.gameModes') }}
          </RouterLink>
          <RouterLink to="/word-packs" class="site-header__link" @click="closeMenu">
            {{ t('nav.wordPacks') }}
          </RouterLink>
          <RouterLink to="/blog" class="site-header__link" @click="closeMenu">
            {{ t('nav.blog') }}
          </RouterLink>
          <div class="site-header__switch-mobile">
            <LanguageSwitch />
          </div>
          <RouterLink
            to="/download"
            class="site-header__link site-header__link--cta"
            @click="closeMenu"
          >
            {{ t('nav.getTheApp') }}
          </RouterLink>
        </nav>

        <div class="site-header__switch-desktop">
          <LanguageSwitch />
        </div>

        <button
          class="site-header__toggle"
          :aria-expanded="isMobileMenuOpen"
          aria-label="Toggle navigation menu"
          @click="toggleMenu"
        >
          <span class="site-header__toggle-bar" />
          <span class="site-header__toggle-bar" />
          <span class="site-header__toggle-bar" />
        </button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  height: var(--header-height);
  background: rgba(248, 249, 251, 0.82);
  border-bottom: 1px solid var(--color-outline);
  backdrop-filter: blur(16px);

  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  &__brand {
    display: inline-flex;
    align-items: center;
    gap: var(--space-sm);
    text-decoration: none;
    color: var(--color-ink);
  }

  &__logo {
    width: 40px;
    height: 40px;
    border-radius: var(--radius-sm);
  }

  &__name {
    font-family: var(--font-display);
    font-weight: var(--font-weight-display);
    font-size: var(--font-size-title);
    letter-spacing: var(--letter-spacing-tight);
    color: var(--color-ink);
  }

  &__actions-wrap {
    display: flex;
    align-items: center;
    gap: var(--space-lg);
  }

  &__switch-mobile {
    display: none;
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: var(--space-lg);
  }

  &__link {
    font-family: var(--font-body);
    font-size: var(--font-size-body-small);
    font-weight: var(--font-weight-body-bold);
    color: var(--color-ink);
    padding: var(--space-xs) var(--space-sm);
    border-radius: var(--radius-sm);
    transition:
      color var(--motion-quick) var(--motion-curve),
      background-color var(--motion-quick) var(--motion-curve);

    &:hover,
    &.router-link-active {
      color: var(--color-ink);
      background-color: var(--color-ink-ghost);
    }

    &--cta {
      background-color: var(--color-primary);
      color: var(--color-ink);
      border-radius: var(--radius-button);
      padding: var(--space-xs) var(--space-md);

      &:hover,
      &.router-link-active {
        background-color: var(--color-primary-light);
      }
    }
  }

  &__toggle {
    display: none;
    flex-direction: column;
    justify-content: center;
    gap: var(--space-2xs);
    width: 44px;
    height: 44px;
    padding: var(--space-xs);
    background: transparent;
    border: none;
    cursor: pointer;
    border-radius: var(--radius-sm);

    &-bar {
      display: block;
      width: 100%;
      height: 2px;
      background-color: var(--color-ink);
      border-radius: var(--radius-pill);
      transition: transform var(--motion-quick) var(--motion-curve);
    }
  }
}

@media (max-width: 768px) {
  .site-header {
    &__switch-desktop {
      display: none;
    }

    &__switch-mobile {
      display: flex;
      justify-content: center;
      margin: var(--space-md) 0;
    }

    &__toggle {
      display: flex;
    }

    &__nav {
      position: absolute;
      top: var(--header-height);
      left: 0;
      right: 0;
      flex-direction: column;
      align-items: stretch;
      padding: var(--space-md) var(--space-lg);
      background: var(--color-background-top);
      border-bottom: 1px solid var(--color-outline);
      box-shadow: var(--shadow-card);
      display: none;

      &.is-open {
        display: flex;
      }
    }

    &__link {
      padding: var(--space-sm) var(--space-md);
      font-size: var(--font-size-body);

      &--cta {
        text-align: center;
        margin-top: var(--space-xs);
      }
    }
  }
}
</style>
