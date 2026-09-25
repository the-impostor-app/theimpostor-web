<script setup lang="ts">
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { articles } from '../blog/articles'
import { useI18n } from '../composables/useI18n'
import DownloadButtons from '../components/DownloadButtons.vue'

const { locale } = useI18n()

const selectedTag = ref<string>('all')

// Filter articles by locale first, fallback to all if fewer than 2
const localeArticles = computed(() => {
  return articles.filter((a) => a.locale === locale.value)
})

// Unique tags for active locale
const allTags = computed(() => {
  const set = new Set<string>()
  localeArticles.value.forEach((a) => a.tags.forEach((t) => set.add(t)))
  return Array.from(set)
})

const filteredArticles = computed(() => {
  if (selectedTag.value === 'all') {
    return localeArticles.value
  }
  return localeArticles.value.filter((a) => a.tags.includes(selectedTag.value))
})

function formatDate(isoDate: string): string {
  try {
    const d = new Date(isoDate)
    return d.toLocaleDateString(locale.value === 'es' ? 'es-ES' : 'en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  } catch {
    return isoDate
  }
}
</script>

<template>
  <div class="blog-page">
    <!-- Hero Section -->
    <section class="section blog-hero">
      <div class="container blog-hero__container">
        <span class="chip chip--primary">{{
          locale === 'es' ? 'Blog y Estrategia' : 'Blog & Guides'
        }}</span>
        <h1 class="blog-hero__title">
          {{
            locale === 'es' ? 'Estrategias, Reglas y Novedades' : 'Strategy, Guides & Party Ideas'
          }}
        </h1>
        <p class="blog-hero__lead">
          {{
            locale === 'es'
              ? 'Consejos de farol, guías de juegos de deducción social y todo lo necesario para triunfar en tu noche de juegos con El Impostor.'
              : 'Master the art of subtle bluffing, explore social deduction psychology, and learn how to host unforgettable game nights with The Impostor.'
          }}
        </p>

        <!-- Tag Filters -->
        <div v-if="allTags.length > 0" class="blog-tags">
          <button
            class="chip tag-btn"
            :class="{ 'chip--primary': selectedTag === 'all' }"
            @click="selectedTag = 'all'"
          >
            {{ locale === 'es' ? 'Todos' : 'All Articles' }}
          </button>
          <button
            v-for="tag in allTags"
            :key="tag"
            class="chip tag-btn"
            :class="{ 'chip--primary': selectedTag === tag }"
            @click="selectedTag = tag"
          >
            {{ tag }}
          </button>
        </div>
      </div>
    </section>

    <!-- Articles Grid Section -->
    <section class="section blog-grid-section">
      <div class="container">
        <div class="articles-grid">
          <article
            v-for="article in filteredArticles"
            :key="article.slug"
            class="card article-card"
          >
            <div class="article-card__glow" />
            <div class="article-card__header">
              <span class="chip chip--info">{{ article.tags[0] || 'Game' }}</span>
              <span class="article-card__read-time">
                {{ article.readingTime }} {{ locale === 'es' ? 'min de lectura' : 'min read' }}
              </span>
            </div>

            <h2 class="article-card__title">
              <RouterLink :to="`/blog/${article.slug}`" class="article-card__link">
                {{ article.title }}
              </RouterLink>
            </h2>

            <p class="article-card__desc">
              {{ article.description }}
            </p>

            <div class="article-card__footer">
              <div class="article-card__meta">
                <span class="article-card__author">{{ article.author }}</span>
                <span class="article-card__dot" aria-hidden="true">•</span>
                <time :datetime="article.date" class="article-card__date">
                  {{ formatDate(article.date) }}
                </time>
              </div>

              <RouterLink :to="`/blog/${article.slug}`" class="read-more-link">
                {{ locale === 'es' ? 'Leer artículo →' : 'Read article →' }}
              </RouterLink>
            </div>
          </article>
        </div>

        <!-- Blog Bottom CTA -->
        <div class="card blog-cta card--dark">
          <div class="blog-cta__glow" />
          <div class="blog-cta__content">
            <span class="eyebrow eyebrow--dark">{{
              locale === 'es' ? '¡A Jugar!' : 'Ready to play?'
            }}</span>
            <h3 class="blog-cta__title">
              {{
                locale === 'es' ? 'Descarga El Impostor gratis' : 'Download The Impostor for Free'
              }}
            </h3>
            <p class="blog-cta__desc">
              {{
                locale === 'es'
                  ? 'Pon a prueba tus habilidades de detective o engaña a todos como el espía. Disponible en iOS y Android.'
                  : 'Test your detective instincts or deceive your friends as the master spy. Available now on iOS and Android.'
              }}
            </p>
          </div>
          <div class="blog-cta__actions">
            <DownloadButtons />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.blog-hero {
  text-align: center;
  padding-bottom: var(--space-2xl);

  &__container {
    max-width: 780px;
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
    margin-bottom: var(--space-2xl);
  }
}

.blog-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-xs);
  margin-top: var(--space-lg);
}

.tag-btn {
  cursor: pointer;
  background: var(--color-surface);
  border: 1px solid var(--color-outline);
  transition:
    background-color var(--motion-quick) var(--motion-curve),
    border-color var(--motion-quick) var(--motion-curve);

  &:hover {
    border-color: var(--color-primary-dark);
  }
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-xl);
  margin-bottom: var(--space-4xl);
}

.article-card {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: var(--space-2xl);

  &__glow {
    position: absolute;
    top: 0;
    left: 0;
    width: 140px;
    height: 140px;
    border-radius: var(--radius-pill);
    background: var(--color-primary-glow);
    filter: blur(60px);
    pointer-events: none;
    opacity: 0.5;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--space-md);
    position: relative;
    z-index: 1;
  }

  &__read-time {
    font-size: var(--font-size-caption);
    color: var(--color-muted);
  }

  &__title {
    font-size: var(--font-size-h3);
    line-height: var(--line-height-tight);
    margin-bottom: var(--space-sm);
    position: relative;
    z-index: 1;
  }

  &__link {
    color: var(--color-ink);
    text-decoration: none;
    transition: color var(--motion-quick) var(--motion-curve);

    &:hover {
      color: var(--color-primary-dark);
    }
  }

  &__desc {
    color: var(--color-muted);
    font-size: var(--font-size-body-small);
    line-height: var(--line-height-body);
    margin-bottom: var(--space-xl);
    flex-grow: 1;
    position: relative;
    z-index: 1;
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: var(--space-md);
    border-top: 1px solid var(--color-outline-subtle);
    position: relative;
    z-index: 1;
  }

  &__meta {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    font-size: var(--font-size-caption);
    color: var(--color-muted);
  }

  &__author {
    font-weight: var(--font-weight-body-bold);
    color: var(--color-ink-active);
  }

  &__dot {
    opacity: 0.5;
  }
}

.read-more-link {
  font-size: var(--font-size-body-small);
  font-weight: var(--font-weight-body-bold);
  color: var(--color-primary-dark);
  text-decoration: none;
  transition: transform var(--motion-quick) var(--motion-curve);

  &:hover {
    color: var(--color-ink);
    transform: translateX(3px);
  }
}

.blog-cta {
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
    width: 240px;
    height: 240px;
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

@media (max-width: 768px) {
  .articles-grid {
    grid-template-columns: 1fr;
  }

  .blog-cta {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
