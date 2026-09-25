<script setup lang="ts">
import { APP_NAME } from '../config'
</script>

<template>
  <div class="legal-page">
    <section class="section">
      <div class="container legal-page__container">
        <span class="chip chip--primary">Legal</span>
        <h1 class="legal-page__title">Terms of Service</h1>
        <p class="legal-page__date">Last updated: September 2026</p>

        <div class="card legal-content">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By downloading, installing, or playing {{ APP_NAME }} ("the App") or browsing this
            website, you agree to comply with and be bound by these Terms of Service. If you do not
            agree, please discontinue using the App immediately.
          </p>

          <h2>2. License and Intellectual Property</h2>
          <p>
            We grant you a personal, non-exclusive, non-transferable, revocable license to use the
            App for personal, non-commercial entertainment purposes. All artwork, sound effects,
            branding, and software code remain the intellectual property of the developer.
          </p>

          <h2>3. User Conduct in Multiplayer</h2>
          <p>
            When utilizing online multiplayer rooms or custom word features, you agree not to submit
            offensive, abusive, harassing, or unlawful usernames or content. We reserve the right to
            restrict multiplayer access for abusive behavior.
          </p>

          <h2>4. In-App Purchases & Virtual Items</h2>
          <p>
            Any optional in-app purchases (e.g. ad removal or special word packs) are processed
            securely through Apple In-App Purchase or Google Play In-App Billing and are subject to
            the respective app store terms.
          </p>

          <h2>5. Disclaimer of Warranties</h2>
          <p>
            The App is provided "as is" and "as available" without warranties of any kind. We do not
            guarantee that multiplayer rooms will be uninterrupted or error-free at all times.
          </p>

          <h2>6. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Continued use of the App
            following updates constitutes your acceptance of the revised Terms.
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
