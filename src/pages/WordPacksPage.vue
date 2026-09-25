<script setup lang="ts">
import DownloadButtons from '../components/DownloadButtons.vue'

interface WordPack {
  name: string
  tag: string
  tagType: 'primary' | 'info' | 'danger' | 'success'
  description: string
  sampleWords: string[]
}

const wordPacks: WordPack[] = [
  {
    name: 'Food & Culinary Delights',
    tag: 'Popular',
    tagType: 'primary',
    description:
      'From comfort street food to gourmet cuisine. Perfect for sparking mouthwatering clues.',
    sampleWords: ['Sushi', 'Pizza', 'Cappuccino', 'Taco', 'Croissant', 'Chocolate', 'Hamburger'],
  },
  {
    name: 'World Travel & Famous Places',
    tag: 'Adventure',
    tagType: 'info',
    description:
      'Famous landmarks, diverse geography, and global transit hubs that test your worldly intuition.',
    sampleWords: [
      'Airport',
      'Eiffel Tower',
      'Submarine',
      'Desert Oasis',
      'Space Station',
      'Pyramids',
    ],
  },
  {
    name: 'Everyday Objects & Technology',
    tag: 'Essentials',
    tagType: 'success',
    description:
      'Common gadgets and household items everyone knows, but describing them vaguely is delightfully tricky.',
    sampleWords: ['Smartphone', 'Umbrella', 'Telescope', 'Headphones', 'Toothbrush', 'Bicycle'],
  },
  {
    name: 'Animals & The Natural World',
    tag: 'Wildlife',
    tagType: 'info',
    description: 'From microscopic insects to majestic predators and extreme ecosystems.',
    sampleWords: ['Chameleon', 'Penguin', 'Kangaroo', 'Volcano', 'Rainforest', 'Jellyfish'],
  },
  {
    name: 'Pop Culture & Entertainment',
    tag: 'Culture',
    tagType: 'danger',
    description:
      'Blockbuster cinema, music icons, video games, and trending social media phenomena.',
    sampleWords: ['Hollywood', 'Superhero', 'Rock Concert', 'Video Game', 'Theme Park', 'Anime'],
  },
  {
    name: 'Party Night & Celebrations',
    tag: 'Festive',
    tagType: 'primary',
    description:
      'Festivals, party games, and nightlife themes tailor-made for lively gatherings with friends.',
    sampleWords: ['Karaoke', 'Masquerade', 'Confetti', 'DJ Booth', 'Fireworks', 'Costume Party'],
  },
]
</script>

<template>
  <div class="packs-page">
    <section class="section packs-hero">
      <div class="container packs-hero__container">
        <span class="chip chip--success">1,000+ Curated Words</span>
        <h1 class="packs-hero__title">Word Packs & Categories</h1>
        <p class="packs-hero__lead">
          Explore handcrafted word packs designed to balance detective deduction and impostor
          bluffing. Never run out of fresh, surprising prompts.
        </p>
      </div>
    </section>

    <section class="section packs-grid-section">
      <div class="container">
        <div class="packs-grid">
          <div v-for="pack in wordPacks" :key="pack.name" class="card pack-card">
            <div class="pack-card__header">
              <span
                class="chip"
                :class="{
                  'chip--primary': pack.tagType === 'primary',
                  'chip--info': pack.tagType === 'info',
                  'chip--danger': pack.tagType === 'danger',
                  'chip--success': pack.tagType === 'success',
                }"
              >
                {{ pack.tag }}
              </span>
            </div>
            <h2 class="pack-card__title">{{ pack.name }}</h2>
            <p class="pack-card__desc">{{ pack.description }}</p>
            <div class="pack-card__samples">
              <span class="samples-label">Sample Words:</span>
              <div class="samples-chips">
                <span v-for="word in pack.sampleWords" :key="word" class="chip chip--on-light">
                  {{ word }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Languages & Custom words -->
        <div class="packs-extras">
          <div class="card pack-extra-card">
            <span class="eyebrow">Global Fun</span>
            <h3 class="pack-extra-card__title">Available in 6 Languages</h3>
            <p class="pack-extra-card__text">
              Every word pack is fully localized with native cultural expressions for:
            </p>
            <div class="languages-list">
              <span class="chip">English 🇬🇧 🇺🇸</span>
              <span class="chip">Español 🇪🇸 🇲🇽</span>
              <span class="chip">Français 🇫🇷</span>
              <span class="chip">Deutsch 🇩🇪</span>
              <span class="chip">Italiano 🇮🇹</span>
              <span class="chip">Português 🇵🇹 🇧🇷</span>
            </div>
          </div>

          <div class="card pack-extra-card card--dark">
            <span class="eyebrow eyebrow--dark">Personalized</span>
            <h3 class="pack-extra-card__title">Create Custom Word Packs</h3>
            <p class="pack-extra-card__text">
              Have your own inside jokes, workplace terms, or special themes? The built-in word pack
              editor lets you add and organize unlimited custom words right on your device.
            </p>
            <div class="pack-extra-card__cta">
              <DownloadButtons />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.packs-hero {
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

.packs-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-xl);
  margin-bottom: var(--space-4xl);
}

.pack-card {
  display: flex;
  flex-direction: column;

  &__header {
    margin-bottom: var(--space-md);
  }

  &__title {
    font-size: var(--font-size-h3);
    margin-bottom: var(--space-sm);
  }

  &__desc {
    color: var(--color-muted);
    font-size: var(--font-size-body-small);
    line-height: var(--line-height-body);
    margin-bottom: var(--space-lg);
  }

  &__samples {
    margin-top: auto;
    border-top: 1px solid var(--color-outline-subtle);
    padding-top: var(--space-md);

    .samples-label {
      display: block;
      font-size: var(--font-size-caption);
      font-weight: var(--font-weight-body-bold);
      color: var(--color-ink-active);
      margin-bottom: var(--space-xs);
    }

    .samples-chips {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-xs);
    }
  }
}

.packs-extras {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
}

.pack-extra-card {
  padding: var(--space-2xl);

  &__title {
    font-size: var(--font-size-title);
    margin-top: var(--space-xs);
    margin-bottom: var(--space-sm);
  }

  &__text {
    font-size: var(--font-size-body-small);
    color: var(--color-muted);
    line-height: var(--line-height-body);
    margin-bottom: var(--space-lg);
  }

  &__cta {
    margin-top: var(--space-md);
  }
}

.card--dark {
  .pack-extra-card__text {
    color: var(--color-on-dark-muted);
  }
}

.languages-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
}

@media (max-width: 768px) {
  .packs-grid,
  .packs-extras {
    grid-template-columns: 1fr;
  }
}
</style>
