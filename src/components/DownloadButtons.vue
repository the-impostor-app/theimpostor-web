<script setup lang="ts">
import { STORE_URLS } from '../config'
import appStoreBadge from '../assets/store-app-store.avif'
import googlePlayBadge from '../assets/store-google-play.avif'

interface Props {
  align?: 'left' | 'center'
}

withDefaults(defineProps<Props>(), {
  align: 'left',
})
</script>

<template>
  <div class="store-buttons" :class="{ 'store-buttons--center': align === 'center' }">
    <a
      :href="STORE_URLS.ios"
      target="_blank"
      rel="noopener noreferrer"
      class="store-link"
      aria-label="Download on the App Store"
    >
      <img :src="appStoreBadge" alt="Download on the App Store" class="store-img" />
    </a>
    <a
      :href="STORE_URLS.android"
      target="_blank"
      rel="noopener noreferrer"
      class="store-link"
      aria-label="Get it on Google Play"
    >
      <img :src="googlePlayBadge" alt="Get it on Google Play" class="store-img" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.store-buttons {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  flex-wrap: wrap;

  &--center {
    justify-content: center;
  }
}

.store-link {
  display: inline-flex;
  border-radius: var(--radius-md);
  transition: transform var(--motion-quick) var(--motion-curve);

  &:hover {
    transform: translateY(-2px);
  }
}

.store-img {
  height: 48px;
  width: auto;
  border-radius: var(--radius-md);
}
</style>
