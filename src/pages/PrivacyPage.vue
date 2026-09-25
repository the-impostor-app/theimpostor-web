<script setup lang="ts">
import { APP_NAME } from '../config'
</script>

<template>
  <div class="legal-page">
    <section class="section">
      <div class="container legal-page__container">
        <span class="chip chip--primary">Legal</span>
        <h1 class="legal-page__title">Privacy Policy</h1>
        <p class="legal-page__date">Last updated: September 2026</p>

        <div class="card legal-content">
          <h2>1. Introduction</h2>
          <p>
            Welcome to {{ APP_NAME }} ("we", "our", or "us"). We value your privacy and are
            committed to being transparent about how data is handled when you use
            {{ APP_NAME }} mobile application and marketing website.
          </p>

          <h2>2. Offline Play Data (Pass & Play)</h2>
          <p>
            When playing in local Pass & Play mode, all game data, custom word packs, and settings
            are stored strictly on your local device. We do not transmit or collect your local game
            words, player names, or device interactions to any external server.
          </p>

          <h2>3. Online Multiplayer Sessions</h2>
          <p>
            When using the online multiplayer feature, temporary session data (such as room codes,
            player usernames, game phase state, and votes) is transmitted and stored in Firebase
            Firestore to enable real-time gameplay between participants. This data is automatically
            cleaned up after game sessions conclude.
          </p>

          <h2>4. Analytics and Advertising</h2>
          <p>
            {{ APP_NAME }} may use Google Mobile Ads to deliver non-personalized or personalized ads
            (subject to your consent choices where applicable, such as GDPR/CCPA). Ad networks may
            collect device identifiers and coarse location data to serve advertisements.
          </p>

          <h2>5. Your Choices & Data Rights</h2>
          <p>
            You can reset your in-app statistics, custom word lists, and ad preferences at any time
            within the app settings or by clearing the app data on your device.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please reach out to us through the
            developer support email listed on the App Store or Google Play Store listing.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.legal-page {
  &__container {
    max-width: 800px;
    margin-inline: auto;
  }

  &__title {
    margin-top: var(--space-sm);
    margin-bottom: var(--space-xs);
  }

  &__date {
    font-size: var(--font-size-caption);
    color: var(--color-muted);
    margin-bottom: var(--space-2xl);
  }
}

.legal-content {
  padding: var(--space-2xl);
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);

  h2 {
    font-size: var(--font-size-title);
    color: var(--color-ink);
    margin-top: var(--space-sm);
    margin-bottom: var(--space-2xs);
  }

  p {
    font-size: var(--font-size-body-small);
    line-height: var(--line-height-body);
    color: var(--color-ink-active);
  }
}
</style>
