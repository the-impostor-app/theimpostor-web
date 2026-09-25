<script setup lang="ts">
import DownloadButtons from '../components/DownloadButtons.vue'
import avatarImposter from '../assets/images/avatar_imposter.png'
import avatarPlayer from '../assets/images/avatar_player.png'
</script>

<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="section hero">
      <div class="container hero__container">
        <div class="hero__content">
          <div class="hero__pill">
            <span class="eyebrow">The #1 Spy Party Game</span>
          </div>
          <h1 class="hero__title">Spot the Impostor. Survive the Accusation.</h1>
          <p class="hero__lead">
            The thrilling social deduction game where one of you is bluffing. Everyone gets the
            secret word—except the impostor. Pass and play on 1 phone, or play online anywhere.
          </p>

          <div class="hero__actions">
            <DownloadButtons />
          </div>

          <!-- RevenueCat-style Metrics Bar -->
          <div class="metrics-bar">
            <div class="metric-item">
              <span class="metric-value">3 – 20</span>
              <span class="metric-label">Players supported</span>
            </div>
            <div class="metric-divider" aria-hidden="true" />
            <div class="metric-item">
              <span class="metric-value">1,000+</span>
              <span class="metric-label">Curated secret words</span>
            </div>
            <div class="metric-divider" aria-hidden="true" />
            <div class="metric-item">
              <span class="metric-value">100%</span>
              <span class="metric-label">Offline capable</span>
            </div>
            <div class="metric-divider" aria-hidden="true" />
            <div class="metric-item">
              <span class="metric-value">6</span>
              <span class="metric-label">Global languages</span>
            </div>
          </div>
        </div>

        <!-- Hero Visual Showcase -->
        <div class="hero__visual">
          <div class="hero-glow-blob hero-glow-blob--primary" />
          <div class="hero-glow-blob hero-glow-blob--secondary" />

          <div class="duel-wrapper">
            <!-- Detective Card -->
            <div class="card duel-card duel-card--detective">
              <div class="duel-card__top">
                <img :src="avatarPlayer" alt="Citizen detective" class="duel-card__avatar" />
                <div class="duel-card__info">
                  <span class="chip chip--info">Detective Citizen</span>
                  <p class="duel-card__word">Secret Word: <strong>PIZZA</strong></p>
                </div>
              </div>
              <div class="duel-card__quote">
                “It’s best enjoyed straight from the stone oven with crispy crust and hot cheese!”
              </div>
            </div>

            <!-- Impostor Card -->
            <div class="card duel-card duel-card--imposter">
              <div class="duel-card__top">
                <img :src="avatarImposter" alt="The Impostor spy" class="duel-card__avatar" />
                <div class="duel-card__info">
                  <span class="chip chip--danger">The Impostor</span>
                  <p class="duel-card__word">Secret Word: <strong>???</strong></p>
                </div>
              </div>
              <div class="duel-card__quote">
                “Oh absolutely, I always order mine on Friday nights with extra delicious
                toppings...”
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How it Works Strip -->
    <section class="section how-it-works">
      <div class="container">
        <div class="how-it-works__header">
          <span class="eyebrow">Zero Setup</span>
          <h2 class="section-title">How It Works in 3 Steps</h2>
          <p class="section-subtitle">
            No complicated board games, no lengthy rulebooks. Hand the phone around and start
            accusing in under sixty seconds.
          </p>
        </div>

        <div class="how-it-works__grid">
          <div class="card step-card">
            <div class="step-card__glow" />
            <div class="step-card__num">01</div>
            <h3 class="step-card__title">Get Your Secret Word</h3>
            <p class="step-card__desc">
              Pass the phone around. Every detective learns the secret topic—except the impostor,
              who must pretend they know everything.
            </p>
          </div>

          <div class="card step-card">
            <div class="step-card__glow step-card__glow--blue" />
            <div class="step-card__num">02</div>
            <h3 class="step-card__title">Give Your Subtle Clue</h3>
            <p class="step-card__desc">
              Go around the circle saying one word or phrase. Be clever enough to signal your team,
              without handing the secret word to the spy.
            </p>
          </div>

          <div class="card step-card">
            <div class="step-card__glow step-card__glow--red" />
            <div class="step-card__num">03</div>
            <h3 class="step-card__title">Vote Out the Spy</h3>
            <p class="step-card__desc">
              Debate, argue, and cast your votes. If the impostor is caught, they get one final
              guess at the secret word to steal victory!
            </p>
          </div>
        </div>

        <div class="how-it-works__cta">
          <RouterLink to="/how-to-play" class="btn btn--outline">
            Explore Full Rulebook & Bluffing Strategies →
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Core Features Section (RevenueCat-style cards) -->
    <section class="section features">
      <div class="container">
        <div class="features__header">
          <span class="eyebrow">Product Features</span>
          <h2 class="section-title">Built for High Stakes and Big Laughs</h2>
          <p class="section-subtitle">
            Whether you’re gathered in a living room, hosting game night, or jumping on a Discord
            call, The Impostor is designed for instant connection.
          </p>
        </div>

        <div class="features__grid">
          <div class="card rc-card">
            <div class="rc-card__glow rc-card__glow--orange" />
            <div class="rc-card__icon-wrap rc-card__icon-wrap--primary">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path
                  d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"
                />
              </svg>
            </div>
            <div class="rc-card__tag chip chip--primary">Local Play</div>
            <h3 class="rc-card__title">Pass & Play (1 Phone)</h3>
            <p class="rc-card__desc">
              Play with 3 to 20 people using just one smartphone. Zero setup, no internet, and no
              accounts needed. Perfect for road trips, dinners, and parties.
            </p>
            <RouterLink to="/game-modes" class="rc-card__link"> Explore game modes → </RouterLink>
          </div>

          <div class="card rc-card">
            <div class="rc-card__glow rc-card__glow--blue" />
            <div class="rc-card__icon-wrap rc-card__icon-wrap--info">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
                />
              </svg>
            </div>
            <div class="rc-card__tag chip chip--info">Multiplayer</div>
            <h3 class="rc-card__title">Online Rooms</h3>
            <p class="rc-card__desc">
              Create private rooms with simple 4-letter room codes. Play remotely with friends
              across iOS and Android with live synchronized voting and chat.
            </p>
            <RouterLink to="/game-modes" class="rc-card__link"> See online features → </RouterLink>
          </div>

          <div class="card rc-card">
            <div class="rc-card__glow rc-card__glow--green" />
            <div class="rc-card__icon-wrap rc-card__icon-wrap--success">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path
                  d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
                />
              </svg>
            </div>
            <div class="rc-card__tag chip chip--success">Content</div>
            <h3 class="rc-card__title">1,000+ Curated Words</h3>
            <p class="rc-card__desc">
              Extensive categories like Everyday Life, World Travel, Pop Culture, Food, and Cinema.
              Custom word lists let you add inside jokes and friend names.
            </p>
            <RouterLink to="/word-packs" class="rc-card__link"> Browse categories → </RouterLink>
          </div>

          <div class="card rc-card">
            <div class="rc-card__glow rc-card__glow--red" />
            <div class="rc-card__icon-wrap rc-card__icon-wrap--danger">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"
                />
              </svg>
            </div>
            <div class="rc-card__tag chip chip--danger">House Rules</div>
            <h3 class="rc-card__title">Multiple Spies & Timers</h3>
            <p class="rc-card__desc">
              Add 2 or more impostors for large gatherings, turn timers for rapid-fire bluffing, and
              customizable discussion clocks to keep rounds intense.
            </p>
            <RouterLink to="/how-to-play" class="rc-card__link"> Read strategy guide → </RouterLink>
          </div>
        </div>

        <!-- RevenueCat-style Bottom CTA Banner -->
        <div class="card cta-banner card--dark">
          <div class="cta-banner__glow" />
          <div class="cta-banner__content">
            <span class="eyebrow eyebrow--dark">Ready to Play?</span>
            <h3 class="cta-banner__title">Unmask the spy in your friend group tonight</h3>
            <p class="cta-banner__desc">
              Free to download on iOS and Android. Start your first session in seconds.
            </p>
          </div>
          <div class="cta-banner__actions">
            <DownloadButtons />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  overflow-x: hidden;
}

// ---------------------------------------------------------------------------
// Hero Section
// ---------------------------------------------------------------------------
.hero {
  position: relative;
  padding-top: var(--space-4xl);
  padding-bottom: var(--space-4xl);

  &__container {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: var(--space-3xl);
    align-items: center;
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &__pill {
    margin-bottom: var(--space-md);
  }

  &__title {
    font-size: var(--font-size-display);
    line-height: var(--line-height-display);
    letter-spacing: var(--letter-spacing-display);
    color: var(--color-ink);
    margin-bottom: var(--space-md);
  }

  &__lead {
    font-size: var(--font-size-title);
    line-height: var(--line-height-body);
    color: var(--color-muted);
    margin-bottom: var(--space-2xl);
    max-width: 580px;
  }

  &__actions {
    margin-bottom: var(--space-3xl);
  }

  &__visual {
    position: relative;
  }
}

// RevenueCat-style Metrics Bar
.metrics-bar {
  display: flex;
  align-items: center;
  gap: var(--space-xl);
  padding-top: var(--space-xl);
  border-top: 1px solid var(--color-outline);
  width: 100%;
  flex-wrap: wrap;
}

.metric-item {
  display: flex;
  flex-direction: column;
}

.metric-value {
  font-family: var(--font-display);
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-display);
  color: var(--color-ink);
  line-height: var(--line-height-tight);
}

.metric-label {
  font-size: var(--font-size-caption);
  color: var(--color-muted);
  font-weight: var(--font-weight-body);
}

.metric-divider {
  width: 1px;
  height: 36px;
  background-color: var(--color-outline);
}

// Ambient Glow Blobs
.hero-glow-blob {
  position: absolute;
  width: 240px;
  height: 240px;
  border-radius: var(--radius-pill);
  filter: blur(80px);
  pointer-events: none;
  opacity: 0.6;
  z-index: 0;

  &--primary {
    top: -20px;
    right: -20px;
    background: var(--color-primary-glow);
  }

  &--secondary {
    bottom: -20px;
    left: -20px;
    background: var(--color-secondary-glow);
  }
}

.duel-wrapper {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.duel-card {
  padding: var(--space-xl);
  box-shadow: var(--shadow-card);
  border: 1px solid var(--color-outline);

  &__top {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    margin-bottom: var(--space-md);
  }

  &__avatar {
    width: 56px;
    height: 56px;
    border-radius: var(--radius-pill);
    background: var(--color-surface-subtle);
    border: 1px solid var(--color-outline);
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: var(--space-3xs);
  }

  &__word {
    font-size: var(--font-size-body-small);
    color: var(--color-muted);

    strong {
      color: var(--color-ink);
    }
  }

  &__quote {
    font-size: var(--font-size-body-small);
    line-height: var(--line-height-body);
    color: var(--color-ink);
    padding: var(--space-sm) var(--space-md);
    background: var(--color-surface-soft);
    border-radius: var(--radius-md);
    border-left: 3px solid var(--color-primary);
  }

  &--detective {
    .duel-card__quote {
      border-left-color: var(--color-secondary);
    }
  }

  &--imposter {
    border-color: rgba(239, 68, 68, 0.3);

    .duel-card__word strong {
      color: var(--color-danger);
    }

    .duel-card__quote {
      border-left-color: var(--color-danger);
    }
  }
}

// ---------------------------------------------------------------------------
// How It Works
// ---------------------------------------------------------------------------
.how-it-works {
  background: var(--color-surface);
  border-block: 1px solid var(--color-outline);

  &__header {
    text-align: center;
    max-width: 600px;
    margin-inline: auto;
    margin-bottom: var(--space-3xl);
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-xl);
    margin-bottom: var(--space-2xl);
  }

  &__cta {
    text-align: center;
  }
}

.step-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--color-surface-soft);

  &__glow {
    position: absolute;
    top: 0;
    left: 0;
    width: 120px;
    height: 120px;
    border-radius: var(--radius-pill);
    background: var(--color-primary-glow);
    filter: blur(50px);
    pointer-events: none;

    &--blue {
      background: var(--color-secondary-glow);
    }

    &--red {
      background: var(--color-danger-glow);
    }
  }

  &__num {
    font-family: var(--font-display);
    font-weight: var(--font-weight-display);
    font-size: var(--font-size-h2);
    color: var(--color-primary-dark);
    margin-bottom: var(--space-md);
    line-height: var(--line-height-tight);
  }

  &__title {
    font-size: var(--font-size-title);
    margin-bottom: var(--space-xs);
    color: var(--color-ink);
  }

  &__desc {
    font-size: var(--font-size-body-small);
    color: var(--color-muted);
    line-height: var(--line-height-body);
  }
}

// ---------------------------------------------------------------------------
// RevenueCat-Style Feature Cards
// ---------------------------------------------------------------------------
.features {
  &__header {
    text-align: center;
    max-width: 680px;
    margin-inline: auto;
    margin-bottom: var(--space-3xl);
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-xl);
    margin-bottom: var(--space-4xl);
  }
}

.rc-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: var(--space-2xl);

  &__glow {
    position: absolute;
    top: -20px;
    left: -20px;
    width: 140px;
    height: 140px;
    border-radius: var(--radius-pill);
    filter: blur(60px);
    pointer-events: none;
    opacity: 0.6;

    &--orange {
      background: var(--color-primary-glow);
    }

    &--blue {
      background: var(--color-secondary-glow);
    }

    &--green {
      background: var(--color-success-glow);
    }

    &--red {
      background: var(--color-danger-glow);
    }
  }

  &__icon-wrap {
    width: 48px;
    height: 48px;
    border-radius: var(--radius-pill);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--space-md);

    &--primary {
      background: var(--color-primary-tint);
      color: var(--color-primary-dark);
    }

    &--info {
      background: var(--color-secondary-tint);
      color: var(--color-secondary);
    }

    &--success {
      background: var(--color-success-tint);
      color: var(--color-success);
    }

    &--danger {
      background: var(--color-danger-tint);
      color: var(--color-danger);
    }
  }

  &__tag {
    margin-bottom: var(--space-xs);
  }

  &__title {
    font-size: var(--font-size-title);
    margin-bottom: var(--space-xs);
    color: var(--color-ink);
  }

  &__desc {
    color: var(--color-muted);
    font-size: var(--font-size-body-small);
    line-height: var(--line-height-body);
    margin-bottom: var(--space-lg);
    flex-grow: 1;
  }

  &__link {
    font-size: var(--font-size-body-small);
    font-weight: var(--font-weight-body-bold);
    color: var(--color-primary-dark);
    display: inline-flex;
    align-items: center;
    gap: var(--space-2xs);
    transition: transform var(--motion-quick) var(--motion-curve);

    &:hover {
      transform: translateX(4px);
      color: var(--color-ink);
    }
  }
}

// ---------------------------------------------------------------------------
// CTA Banner (Dark RevenueCat-Style)
// ---------------------------------------------------------------------------
.cta-banner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2xl);
  padding: var(--space-3xl);
  flex-wrap: wrap;

  &__glow {
    position: absolute;
    top: 50%;
    left: 20%;
    transform: translate(-50%, -50%);
    width: 280px;
    height: 280px;
    border-radius: var(--radius-pill);
    background: rgba(255, 174, 0, 0.08);
    filter: blur(80px);
    pointer-events: none;
  }

  &__content {
    max-width: 540px;
    position: relative;
    z-index: 1;
  }

  &__title {
    font-size: var(--font-size-h2);
    color: var(--color-on-dark);
    margin-top: var(--space-xs);
    margin-bottom: var(--space-xs);
  }

  &__desc {
    font-size: var(--font-size-body);
    color: var(--color-on-dark-muted);
  }

  &__actions {
    position: relative;
    z-index: 1;
  }
}

@media (max-width: 900px) {
  .hero {
    &__container {
      grid-template-columns: 1fr;
      gap: var(--space-3xl);
    }
  }

  .metrics-bar {
    gap: var(--space-md);
  }

  .metric-divider {
    display: none;
  }

  .how-it-works__grid,
  .features__grid {
    grid-template-columns: 1fr;
  }

  .cta-banner {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
