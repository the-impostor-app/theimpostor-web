<script setup lang="ts">
import { computed, onMounted, onUnmounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { articles } from '../blog/articles'
import { useI18n } from '../composables/useI18n'
import DownloadButtons from '../components/DownloadButtons.vue'
import { SITE_URL } from '../config'

const route = useRoute()
const { locale } = useI18n()

const slug = computed(() => route.params.slug as string)

const article = computed(() => {
  return articles.find((a) => a.slug === slug.value)
})

const relatedArticles = computed(() => {
  if (!article.value) return []
  return articles
    .filter((a) => a.locale === article.value!.locale && a.slug !== article.value!.slug)
    .slice(0, 2)
})

function formatDate(isoDate: string): string {
  try {
    const d = new Date(isoDate)
    return d.toLocaleDateString(locale.value === 'es' ? 'es-ES' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch {
    return isoDate
  }
}

// Inject Article schema
let scriptEl: HTMLScriptElement | null = null

onMounted(() => {
  if (typeof document === 'undefined' || !article.value) return

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.value.title,
    description: article.value.description,
    author: {
      '@type': 'Organization',
      name: article.value.author,
      url: 'https://axislabs.eu/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'The Impostor',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/icon-512.png`,
      },
    },
    datePublished: article.value.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${article.value.slug}`,
    },
    inLanguage: article.value.locale,
  }

  scriptEl = document.createElement('script')
  scriptEl.type = 'application/ld+json'
  scriptEl.text = JSON.stringify(schema)
  document.head.appendChild(scriptEl)
})

onUnmounted(() => {
  if (scriptEl && scriptEl.parentNode) {
    scriptEl.parentNode.removeChild(scriptEl)
  }
})
</script>

<template>
  <div class="article-page">
    <div v-if="article" class="article-container">
      <!-- Breadcrumb / Back Navigation -->
      <nav class="article-nav" aria-label="Breadcrumb">
        <RouterLink to="/blog" class="back-link">
          ← {{ locale === 'es' ? 'Volver al Blog' : 'Back to Blog' }}
        </RouterLink>
      </nav>

      <!-- Article Header -->
      <header class="article-header">
        <div class="article-tags">
          <span v-for="tag in article.tags" :key="tag" class="chip chip--primary">
            {{ tag }}
          </span>
        </div>

        <h1 class="article-title">{{ article.title }}</h1>
        <p class="article-lead">{{ article.description }}</p>

        <div class="article-meta">
          <div class="article-meta__author-info">
            <span class="author-name">{{ article.author }}</span>
            <span class="meta-dot" aria-hidden="true">•</span>
            <time :datetime="article.date" class="publish-date">
              {{ formatDate(article.date) }}
            </time>
          </div>
          <span class="read-time">
            {{ article.readingTime }} {{ locale === 'es' ? 'min de lectura' : 'min read' }}
          </span>
        </div>
      </header>

      <!-- Article Body -->
      <main class="card article-body">
        <!-- Render Article Content -->
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="article-prose" v-html="article.content" />

        <!-- Mid/End Article Download Callout -->
        <div class="article-download-box">
          <div class="download-box__content">
            <h3 class="download-box__title">
              {{
                locale === 'es' ? '¿Listo para jugar a El Impostor?' : 'Ready to Play The Impostor?'
              }}
            </h3>
            <p class="download-box__text">
              {{
                locale === 'es'
                  ? 'Descarga gratis en iOS y Android. Juega con hasta 20 personas en 1 solo móvil o en salas multijugador.'
                  : 'Download free on iOS & Android. Play with 3 to 20 friends on 1 phone or in online rooms.'
              }}
            </p>
          </div>
          <DownloadButtons align="left" />
        </div>
      </main>

      <!-- Related Articles -->
      <section v-if="relatedArticles.length > 0" class="related-section">
        <h2 class="section-title">
          {{ locale === 'es' ? 'Artículos Relacionados' : 'Related Articles' }}
        </h2>
        <div class="related-grid">
          <article v-for="rel in relatedArticles" :key="rel.slug" class="card related-card">
            <span class="chip chip--info">{{ rel.tags[0] }}</span>
            <h3 class="related-card__title">
              <RouterLink :to="`/blog/${rel.slug}`" class="related-card__link">
                {{ rel.title }}
              </RouterLink>
            </h3>
            <p class="related-card__desc">{{ rel.description }}</p>
            <RouterLink :to="`/blog/${rel.slug}`" class="read-more-link">
              {{ locale === 'es' ? 'Leer artículo →' : 'Read article →' }}
            </RouterLink>
          </article>
        </div>
      </section>
    </div>

    <!-- 404 / Not Found State -->
    <div v-else class="container not-found-state">
      <h2>{{ locale === 'es' ? 'Artículo no encontrado' : 'Article Not Found' }}</h2>
      <p>
        {{
          locale === 'es'
            ? 'El artículo que buscas no existe o ha sido movido.'
            : 'The article you are looking for does not exist or has been moved.'
        }}
      </p>
      <RouterLink to="/blog" class="btn btn--primary">
        {{ locale === 'es' ? 'Volver al Blog' : 'Back to Blog' }}
      </RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.article-page {
  padding-block: var(--space-3xl) var(--space-5xl);
}

.article-container {
  max-width: 820px;
  margin-inline: auto;
  padding-inline: var(--container-gutter);
}

.article-nav {
  margin-bottom: var(--space-xl);
}

.back-link {
  display: inline-flex;
  font-size: var(--font-size-body-small);
  font-weight: var(--font-weight-body-bold);
  color: var(--color-muted);
  text-decoration: none;
  transition: color var(--motion-quick) var(--motion-curve);

  &:hover {
    color: var(--color-primary-dark);
  }
}

.article-header {
  margin-bottom: var(--space-3xl);
}

.article-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  margin-bottom: var(--space-md);
}

.article-title {
  font-size: var(--font-size-h2);
  line-height: var(--line-height-heading);
  color: var(--color-ink);
  margin-bottom: var(--space-md);
}

.article-lead {
  font-size: var(--font-size-title);
  color: var(--color-muted);
  line-height: var(--line-height-body);
  margin-bottom: var(--space-xl);
}

.article-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: var(--space-md);
  border-block: 1px solid var(--color-outline);
  font-size: var(--font-size-body-small);
  color: var(--color-muted);

  &__author-info {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
  }
}

.author-name {
  font-weight: var(--font-weight-body-bold);
  color: var(--color-ink);
}

.meta-dot {
  opacity: 0.5;
}

.article-body {
  padding: var(--space-3xl);
  margin-bottom: var(--space-4xl);
}

:deep(.article-prose) {
  font-size: var(--font-size-body);
  line-height: 1.7;
  color: var(--color-ink-active);

  h2 {
    font-size: var(--font-size-h3);
    color: var(--color-ink);
    margin-top: var(--space-2xl);
    margin-bottom: var(--space-md);

    &:first-child {
      margin-top: 0;
    }
  }

  h3 {
    font-size: var(--font-size-title);
    color: var(--color-ink);
    margin-top: var(--space-xl);
    margin-bottom: var(--space-sm);
  }

  p {
    margin-bottom: var(--space-md);
  }

  ul,
  ol {
    margin-bottom: var(--space-lg);
    padding-left: var(--space-xl);

    li {
      margin-bottom: var(--space-xs);
    }
  }

  strong {
    color: var(--color-ink);
  }

  a {
    color: var(--color-primary-dark);
    text-decoration: underline;

    &:hover {
      color: var(--color-ink);
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-block: var(--space-xl);
    font-size: var(--font-size-body-small);

    th,
    td {
      padding: var(--space-sm) var(--space-md);
      border: 1px solid var(--color-outline);
      text-align: left;
    }

    th {
      background: var(--color-surface-subtle);
      font-weight: var(--font-weight-body-bold);
      color: var(--color-ink);
    }
  }

  .faq-item {
    background: var(--color-surface-soft);
    padding: var(--space-md) var(--space-lg);
    border-radius: var(--radius-md);
    border: 1px solid var(--color-outline-subtle);
    margin-bottom: var(--space-md);

    h3 {
      margin-top: 0;
      margin-bottom: var(--space-xs);
      font-size: var(--font-size-title-sm);
    }

    p {
      margin-bottom: 0;
      font-size: var(--font-size-body-small);
      color: var(--color-muted);
    }
  }
}

.article-download-box {
  margin-top: var(--space-3xl);
  padding: var(--space-2xl);
  background: var(--color-primary-tint);
  border: 1px solid rgba(255, 174, 0, 0.35);
  border-radius: var(--radius-card);

  .download-box__title {
    font-size: var(--font-size-title);
    color: var(--color-ink);
    margin-bottom: var(--space-xs);
  }

  .download-box__text {
    font-size: var(--font-size-body-small);
    color: var(--color-ink-active);
    margin-bottom: var(--space-lg);
  }
}

.related-section {
  margin-top: var(--space-3xl);
}

.related-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl);
  margin-top: var(--space-lg);
}

.related-card {
  padding: var(--space-xl);
  display: flex;
  flex-direction: column;

  &__title {
    font-size: var(--font-size-title);
    margin-top: var(--space-xs);
    margin-bottom: var(--space-xs);
  }

  &__link {
    color: var(--color-ink);
    text-decoration: none;

    &:hover {
      color: var(--color-primary-dark);
    }
  }

  &__desc {
    font-size: var(--font-size-body-small);
    color: var(--color-muted);
    margin-bottom: var(--space-md);
    flex-grow: 1;
  }
}

.read-more-link {
  font-size: var(--font-size-body-small);
  font-weight: var(--font-weight-body-bold);
  color: var(--color-primary-dark);
  text-decoration: none;

  &:hover {
    color: var(--color-ink);
  }
}

.not-found-state {
  text-align: center;
  padding-block: var(--space-4xl);

  h2 {
    margin-bottom: var(--space-md);
  }

  p {
    color: var(--color-muted);
    margin-bottom: var(--space-xl);
  }
}

@media (max-width: 768px) {
  .related-grid {
    grid-template-columns: 1fr;
  }

  .article-body {
    padding: var(--space-xl);
  }
}
</style>
