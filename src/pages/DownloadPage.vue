<script setup lang="ts">
import { STORE_URLS } from '../config'
import appStoreBadge from '../assets/store-app-store.avif'
import googlePlayBadge from '../assets/store-google-play.avif'
import appIcon from '../assets/images/icon.png'
</script>

<template>
  <div class="download-page">
    <section class="section download-hero">
      <div class="container download-hero__container">
        <img :src="appIcon" alt="The Impostor app icon" class="download-hero__icon" />
        <h1 class="download-hero__title">Download The Impostor</h1>
        <p class="download-hero__lead">
          Free to download on iOS and Android. Start unmasking spies with your friends in minutes.
        </p>

        <!-- Store download cards -->
        <div class="download-cards">
          <!-- iOS -->
          <div class="card download-card">
            <span class="chip chip--info download-card__chip">Apple Devices</span>
            <h2 class="download-card__title">iOS & iPadOS</h2>
            <p class="download-card__desc">
              Requires iOS 12.0 or later. Compatible with iPhone, iPad, and iPod touch.
            </p>
            <div class="download-card__action">
              <a
                :href="STORE_URLS.ios"
                target="_blank"
                rel="noopener noreferrer"
                class="store-link"
              >
                <img :src="appStoreBadge" alt="Download on App Store" class="store-img" />
              </a>
            </div>
          </div>

          <!-- Android -->
          <div class="card download-card">
            <span class="chip chip--success download-card__chip">Android Devices</span>
            <h2 class="download-card__title">Google Play</h2>
            <p class="download-card__desc">
              Requires Android 6.0 and up. Optimized for phones and tablets.
            </p>
            <div class="download-card__action">
              <a
                :href="STORE_URLS.android"
                target="_blank"
                rel="noopener noreferrer"
                class="store-link"
              >
                <img :src="googlePlayBadge" alt="Get it on Google Play" class="store-img" />
              </a>
            </div>
          </div>
        </div>

        <!-- Privacy & offline notice -->
        <div class="card download-notice card--outline">
          <h3>No Account Required for Local Play</h3>
          <p>
            You can launch The Impostor at any party or family dinner and play immediately. No
            login, no password, and no data connection needed for Pass & Play.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.download-hero {
  text-align: center;

  &__container {
    max-width: 800px;
    margin-inline: auto;
  }

  &__icon {
    width: 96px;
    height: 96px;
    border-radius: var(--radius-lg);
    margin-inline: auto;
    margin-bottom: var(--space-lg);
    box-shadow: var(--shadow-card);
  }

  &__title {
    margin-bottom: var(--space-md);
  }

  &__lead {
    font-size: var(--font-size-title);
    color: var(--color-muted);
    line-height: var(--line-height-body);
    margin-bottom: var(--space-3xl);
  }
}

.download-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
  text-align: left;
  margin-bottom: var(--space-3xl);
}

.download-card {
  display: flex;
  flex-direction: column;
  padding: var(--space-2xl);

  &__chip {
    align-self: flex-start;
    margin-bottom: var(--space-md);
  }

  &__title {
    font-size: var(--font-size-h3);
    margin-bottom: var(--space-xs);
  }

  &__desc {
    font-size: var(--font-size-body-small);
    color: var(--color-muted);
    line-height: var(--line-height-body);
    margin-bottom: var(--space-lg);
  }

  &__action {
    margin-top: auto;
  }
}

.store-link {
  display: inline-flex;
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

.download-notice {
  text-align: center;
  padding: var(--space-xl);
  background: var(--color-surface-soft);

  h3 {
    font-size: var(--font-size-title);
    margin-bottom: var(--space-xs);
  }

  p {
    font-size: var(--font-size-body-small);
    color: var(--color-muted);
    line-height: var(--line-height-body);
  }
}

@media (max-width: 768px) {
  .download-cards {
    grid-template-columns: 1fr;
  }
}
</style>
