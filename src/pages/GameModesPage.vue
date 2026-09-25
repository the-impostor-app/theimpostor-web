<script setup lang="ts">
import FeatureCard from '../components/FeatureCard.vue'
import DownloadButtons from '../components/DownloadButtons.vue'
</script>

<template>
  <div class="modes-page">
    <section class="section modes-hero">
      <div class="container modes-hero__container">
        <span class="chip chip--info">Ways to Play</span>
        <h1 class="modes-hero__title">Game Modes for Any Gathering</h1>
        <p class="modes-hero__lead">
          From a single smartphone on a road trip to online multiplayer rooms connecting friends
          around the globe, The Impostor adapts to however you want to play.
        </p>
      </div>
    </section>

    <section class="section modes-grid-section">
      <div class="container">
        <!-- Main Modes -->
        <div class="modes-showcase">
          <!-- Pass and Play -->
          <div class="card mode-feature-card">
            <div class="mode-feature-card__tag">
              <span class="chip chip--primary">Local Play</span>
            </div>
            <h2 class="mode-feature-card__title">Pass & Play (Single Device)</h2>
            <p class="mode-feature-card__desc">
              All you need is one phone. 3 to 20 players pass the screen around to secretly view
              their role. No accounts, no setup, no Wi-Fi or data required.
            </p>
            <ul class="mode-feature-card__points">
              <li><strong>Player Count:</strong> 3 – 20 players</li>
              <li>
                <strong>Connectivity:</strong> 100% offline; works on planes, camping, or bars
              </li>
              <li><strong>Setup Time:</strong> Under 30 seconds to choose category and start</li>
              <li>
                <strong>Privacy:</strong> Built-in privacy cover tap so peeking eyes see nothing
              </li>
            </ul>
          </div>

          <!-- Online Multiplayer -->
          <div class="card mode-feature-card">
            <div class="mode-feature-card__tag">
              <span class="chip chip--info">Online Play</span>
            </div>
            <h2 class="mode-feature-card__title">Online Rooms (Multiplayer)</h2>
            <p class="mode-feature-card__desc">
              Connect with friends anywhere in the world. Host private games with a quick room code
              or jump into matchmaking. Synchronized timers, live voting, and round statistics.
            </p>
            <ul class="mode-feature-card__points">
              <li><strong>Player Count:</strong> 4 – 8 players</li>
              <li>
                <strong>Cross-Platform:</strong> Seamless play between iPhone, iPad, and Android
              </li>
              <li><strong>Real-time Sync:</strong> Powered by high-speed cloud synchronization</li>
              <li>
                <strong>Private Lobbies:</strong> Share a 4-letter code with your friend group
              </li>
            </ul>
          </div>
        </div>

        <!-- Customizations -->
        <div class="modifiers-section">
          <div class="modifiers-header">
            <span class="eyebrow">House Rules</span>
            <h2 class="section-title">Customize Every Session</h2>
            <p class="section-subtitle">
              Adjust parameters to match your group's skill level, group size, and party vibe.
            </p>
          </div>

          <div class="modifiers-grid">
            <FeatureCard
              tag="Difficulty"
              title="Multiple Impostors"
              description="Add 2 or 3 impostors in larger groups! Impostors can coordinate their bluffs or accidentally suspect each other."
            />

            <FeatureCard
              tag="Pacing"
              tag-type="info"
              title="Turn & Discussion Timers"
              description="Keep the energy fast-paced with optional 30, 60, or 90-second discussion clocks. Impostors must think on their feet."
            />

            <FeatureCard
              tag="Progression"
              tag-type="success"
              title="Leaderboards & Stats"
              description="Track games won as a detective, times you survived as an impostor, and unlock achievements on Google Play Games & Game Center."
            />

            <FeatureCard
              tag="Custom Words"
              tag-type="danger"
              title="Inside Jokes & Packs"
              description="Mix existing curated categories or create custom word sets tailored to your friends, coworkers, or favorite fandoms."
            />
          </div>
        </div>

        <!-- Call to action -->
        <div class="modes-cta card card--dark">
          <h3>Ready for game night?</h3>
          <p>Get the app now and start your first game in seconds.</p>
          <DownloadButtons />
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.modes-hero {
  text-align: center;
  padding-bottom: var(--space-2xl);

  &__container {
    max-width: 760px;
    margin-inline: auto;
  }

  &__title {
    margin-top: var(--space-md);
    margin-bottom: var(--space-md);
  }

  &__lead {
    font-size: var(--font-size-title);
    color: var(--color-muted);
    line-height: var(--line-height-body);
  }
}

.modes-showcase {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
  margin-bottom: var(--space-4xl);
}

.mode-feature-card {
  padding: var(--space-2xl);

  &__tag {
    margin-bottom: var(--space-md);
  }

  &__title {
    font-size: var(--font-size-h3);
    margin-bottom: var(--space-sm);
  }

  &__desc {
    color: var(--color-muted);
    font-size: var(--font-size-body);
    line-height: var(--line-height-body);
    margin-bottom: var(--space-lg);
  }

  &__points {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    border-top: 1px solid var(--color-outline-subtle);
    padding-top: var(--space-md);

    li {
      font-size: var(--font-size-body-small);
      color: var(--color-ink-active);
      line-height: var(--line-height-body);

      strong {
        color: var(--color-ink);
      }
    }
  }
}

.modifiers-section {
  margin-bottom: var(--space-4xl);
}

.modifiers-header {
  text-align: center;
  max-width: 600px;
  margin-inline: auto;
  margin-bottom: var(--space-2xl);
}

.modifiers-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-xl);
}

.modes-cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-md);
  padding: var(--space-3xl);

  h3 {
    font-size: var(--font-size-h3);
    color: var(--color-on-dark);
  }

  p {
    color: var(--color-on-dark-muted);
    font-size: var(--font-size-body);
  }
}

@media (max-width: 768px) {
  .modes-showcase,
  .modifiers-grid {
    grid-template-columns: 1fr;
  }
}
</style>
