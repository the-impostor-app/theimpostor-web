<script setup lang="ts">
import DownloadButtons from '../components/DownloadButtons.vue'
</script>

<template>
  <div class="rules-page">
    <!-- Header banner -->
    <section class="section rules-hero">
      <div class="container rules-hero__container">
        <span class="chip chip--primary">Official Rules & Strategy Guide</span>
        <h1 class="rules-hero__title">How to Play The Impostor</h1>
        <p class="rules-hero__lead">
          The quick, deceptive social deduction party game. Learn the core mechanics, master the art
          of subtle clues, and find out how to survive when you’re the spy.
        </p>
      </div>
    </section>

    <!-- Main Rules Section -->
    <section class="section rules-content">
      <div class="container">
        <div class="rules-phases">
          <div class="card rule-phase">
            <div class="rule-phase__badge">Phase 1</div>
            <h2 class="rule-phase__title">Setup & Secret Word Distribution</h2>
            <p class="rule-phase__text">
              Gather 3 to 20 players. Choose a word category (e.g., Food, Travel, Everyday Objects)
              or play with all categories mixed. Set the number of impostors (default is 1 for 3–6
              players, 2 for 7+ players).
            </p>
            <p class="rule-phase__text">
              Pass the phone from player to player. Tap the screen to reveal your secret card:
            </p>
            <ul class="rule-phase__list">
              <li>
                <strong>Detectives / Citizens:</strong> You see the secret word (e.g.
                <em>"Airport"</em>) and the category.
              </li>
              <li>
                <strong>The Impostor(s):</strong> You only see <em>"You are the Impostor!"</em>. You
                have no clue what the secret word is!
              </li>
            </ul>
          </div>

          <div class="card rule-phase">
            <div class="rule-phase__badge">Phase 2</div>
            <h2 class="rule-phase__title">The Clue Round: The Art of Subtle Hints</h2>
            <p class="rule-phase__text">
              A starting player is selected randomly. Players take turns in a clockwise direction
              giving <strong>exactly one word or short sentence</strong> related to the secret word.
            </p>
            <div class="rule-phase__example card card--outline">
              <p class="example-title">Example with Secret Word: "Coffee"</p>
              <p>Player 1 (Detective): <em>"Morning ritual."</em> (Good clue, not too obvious)</p>
              <p>Player 2 (Detective): <em>"Caffeine."</em> (A bit too direct, helps the spy!)</p>
              <p>
                Player 3 (The Impostor): <em>"Hot and delicious."</em> (Generic bluff to blend in)
              </p>
              <p>Player 4 (Detective): <em>"Roasted beans."</em></p>
            </div>
            <p class="rule-phase__text">
              <strong>The Golden Rule:</strong> If your clue is too obvious, the Impostor learns the
              word. If your clue is too obscure, the Detectives might suspect YOU are the spy!
            </p>
          </div>

          <div class="card rule-phase">
            <div class="rule-phase__badge">Phase 3</div>
            <h2 class="rule-phase__title">Discussion & The Accusation</h2>
            <p class="rule-phase__text">
              Once everyone has provided their clue, open discussion begins! Players question
              suspicious hints, analyze body language, and challenge anyone whose clue sounded
              vague, hesitant, or completely off-topic.
            </p>
            <p class="rule-phase__text">
              Count down <em>"3, 2, 1, VOTE!"</em> and everyone points at their prime suspect. The
              player with the most votes is eliminated as the accused spy.
            </p>
          </div>

          <div class="card rule-phase">
            <div class="rule-phase__badge">Phase 4</div>
            <h2 class="rule-phase__title">Victory Conditions & The Last Chance Guess</h2>
            <p class="rule-phase__text">How each side wins the round:</p>
            <div class="rules-columns">
              <div class="win-card win-card--detective">
                <h3>Detective Victory</h3>
                <p>
                  You correctly identify the Impostor, <strong>AND</strong> the Impostor fails to
                  guess the secret word.
                </p>
              </div>

              <div class="win-card win-card--imposter">
                <h3>Impostor Victory</h3>
                <p>
                  An innocent detective is voted out, <strong>OR</strong> if you are voted out, you
                  correctly guess the exact secret word!
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Strategy Tips -->
        <div class="strategy-section">
          <h2 class="section-title">Pro Strategy Tips</h2>
          <div class="strategy-grid">
            <div class="card strategy-card">
              <span class="chip chip--info">For Detectives</span>
              <h3 class="strategy-card__title">How to Sniff Out the Spy</h3>
              <ul class="strategy-list">
                <li>Watch for clues that simply repeat or summarize what previous players said.</li>
                <li>
                  Notice micro-hesitations: Impostors often pause longer before speaking to
                  calculate safety.
                </li>
                <li>
                  Use associative clues that only people with shared memories or subtle context
                  understand.
                </li>
              </ul>
            </div>

            <div class="card strategy-card">
              <span class="chip chip--danger">For Impostors</span>
              <h3 class="strategy-card__title">How to Bluff & Survive</h3>
              <ul class="strategy-list">
                <li>
                  Act confident and decisive. Hesitation is the number one reason spies get caught.
                </li>
                <li>
                  Listen intently to earlier clues to deduce whether the word is a place, person,
                  object, or food.
                </li>
                <li>
                  Give sensory clues (colors, feelings, temperature) that can apply to a broad range
                  of things.
                </li>
                <li>
                  Always have a guess ready in case you are voted out—victory is still within reach!
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Bottom CTA -->
        <div class="rules-cta card card--dark">
          <h3>Put your bluffing skills to the test</h3>
          <p>Download The Impostor free on Android and iOS.</p>
          <DownloadButtons />
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.rules-hero {
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

.rules-phases {
  display: flex;
  flex-direction: column;
  gap: var(--space-2xl);
  margin-bottom: var(--space-4xl);
}

.rule-phase {
  position: relative;
  padding: var(--space-2xl);

  &__badge {
    display: inline-block;
    font-family: var(--font-body);
    font-weight: var(--font-weight-body-bold);
    font-size: var(--font-size-caption);
    letter-spacing: var(--letter-spacing-kicker);
    text-transform: uppercase;
    color: var(--color-primary-dark);
    margin-bottom: var(--space-xs);
  }

  &__title {
    font-size: var(--font-size-h3);
    margin-bottom: var(--space-md);
  }

  &__text {
    font-size: var(--font-size-body);
    line-height: var(--line-height-body);
    color: var(--color-ink-active);
    margin-bottom: var(--space-md);

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__list {
    margin: 0;
    padding-left: var(--space-xl);
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);

    li {
      line-height: var(--line-height-body);
      color: var(--color-ink-active);
    }
  }

  &__example {
    margin-block: var(--space-md);
    background: var(--color-surface-subtle);
    padding: var(--space-md);

    .example-title {
      font-weight: var(--font-weight-body-bold);
      margin-bottom: var(--space-xs);
      color: var(--color-ink);
    }

    p {
      font-size: var(--font-size-body-small);
      color: var(--color-muted);
      margin-bottom: var(--space-2xs);

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

.rules-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-lg);
  margin-top: var(--space-md);
}

.win-card {
  padding: var(--space-lg);
  border-radius: var(--radius-lg);

  h3 {
    font-size: var(--font-size-title);
    margin-bottom: var(--space-xs);
  }

  p {
    font-size: var(--font-size-body-small);
    line-height: var(--line-height-body);
  }

  &--detective {
    background: var(--color-secondary-tint);
    border: 1px solid var(--color-secondary);
    color: var(--color-ink);
  }

  &--imposter {
    background: var(--color-danger-tint);
    border: 1px solid var(--color-danger);
    color: var(--color-ink);
  }
}

.strategy-section {
  margin-bottom: var(--space-4xl);
}

.strategy-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
  margin-top: var(--space-xl);
}

.strategy-card {
  &__title {
    font-size: var(--font-size-title);
    margin-top: var(--space-sm);
    margin-bottom: var(--space-md);
  }
}

.strategy-list {
  padding-left: var(--space-lg);
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);

  li {
    font-size: var(--font-size-body-small);
    color: var(--color-muted);
    line-height: var(--line-height-body);
  }
}

.rules-cta {
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
  .rules-columns,
  .strategy-grid {
    grid-template-columns: 1fr;
  }
}
</style>
