<template>
  <div class="language-switch">
    <button
      class="language-switch__btn"
      :class="{ 'language-switch__btn--active': locale === 'en' }"
      @click="setLocale('en')"
      aria-label="Switch to English"
    >
      {{ t('common.en') }}
    </button>
    <div class="language-switch__divider"></div>
    <button
      class="language-switch__btn"
      :class="{ 'language-switch__btn--active': locale === 'es' }"
      @click="setLocale('es')"
      aria-label="Switch to Spanish"
    >
      {{ t('common.es') }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from '../composables/useI18n'

const { locale, setLocale, t } = useI18n()
</script>

<style lang="scss" scoped>
.language-switch {
  display: inline-flex;
  align-items: center;
  background: var(--color-surface-soft);
  border: 1px solid var(--color-outline);
  border-radius: var(--radius-pill);
  padding: var(--space-3xs);

  &__btn {
    background: transparent;
    border: none;
    color: var(--color-muted);
    font-family: var(--font-body);
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-body-bold);
    padding: var(--space-2xs) var(--space-sm);
    border-radius: var(--radius-pill);
    cursor: pointer;
    transition: all var(--motion-quick) var(--motion-curve);

    &:hover {
      color: var(--color-ink);
    }

    &--active {
      background: var(--color-primary);
      color: var(--color-ink);

      &:hover {
        color: var(--color-ink);
      }
    }
  }

  &__divider {
    width: 1px;
    height: 12px;
    background-color: var(--color-outline);
    margin-inline: var(--space-3xs);
  }
}
</style>
