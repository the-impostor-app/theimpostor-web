<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import DownloadButtons from '../components/DownloadButtons.vue'
import avatarImposter from '../assets/images/avatar_imposter.png'
import avatarPlayer from '../assets/images/avatar_player.png'
import { articles } from '../blog/articles'
import { useI18n } from '../composables/useI18n'

const { locale } = useI18n()

const recentArticles = computed(() => {
  return articles.filter((a) => a.locale === locale.value).slice(0, 3)
})
</script>

<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="section hero">
      <div class="container hero__container">
        <div class="hero__content">
          <div class="hero__pill">
            <span class="eyebrow">{{
              locale === 'es' ? 'El juego #1 de espías y fiesta' : 'The #1 Spy Party Game'
            }}</span>
          </div>
          <h1 class="hero__title">
            {{
              locale === 'es'
                ? 'Descubre al Impostor. Sobrevive a la Acusación.'
                : 'Spot the Impostor. Survive the Accusation.'
            }}
          </h1>
          <p class="hero__lead">
            {{
              locale === 'es'
                ? 'El emocionante juego de deducción social donde alguien está fingiendo. Todos reciben la palabra secreta menos el impostor. Juega en 1 móvil o en salas online.'
                : 'The thrilling social deduction game where one of you is bluffing. Everyone gets the secret word—except the impostor. Pass and play on 1 phone, or play online anywhere.'
            }}
          </p>

          <div class="hero__actions">
            <DownloadButtons />
          </div>

          <!-- RevenueCat-style Metrics Bar -->
          <div class="metrics-bar">
            <div class="metric-item">
              <span class="metric-value">3 – 20</span>
              <span class="metric-label">{{
                locale === 'es' ? 'Jugadores admitidos' : 'Players supported'
              }}</span>
            </div>
            <div class="metric-divider" aria-hidden="true" />
            <div class="metric-item">
              <span class="metric-value">1,000+</span>
              <span class="metric-label">{{
                locale === 'es' ? 'Palabras secretas' : 'Curated secret words'
              }}</span>
            </div>
            <div class="metric-divider" aria-hidden="true" />
            <div class="metric-item">
              <span class="metric-value">100%</span>
              <span class="metric-label">{{
                locale === 'es' ? 'Modo sin internet' : 'Offline capable'
              }}</span>
            </div>
            <div class="metric-divider" aria-hidden="true" />
            <div class="metric-item">
              <span class="metric-value">6</span>
              <span class="metric-label">{{
                locale === 'es' ? 'Idiomas disponibles' : 'Global languages'
              }}</span>
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
                  <span class="chip chip--info">{{
                    locale === 'es' ? 'Detective Ciudadano' : 'Detective Citizen'
                  }}</span>
                  <p class="duel-card__word">
                    {{ locale === 'es' ? 'Palabra Secreta:' : 'Secret Word:' }}
                    <strong>PIZZA</strong>
                  </p>
                </div>
              </div>
              <div class="duel-card__quote">
                {{
                  locale === 'es'
                    ? '“¡Se disfruta mejor recién salida del horno de leña, con masa crujiente y queso fundido!”'
                    : '“It’s best enjoyed straight from the stone oven with crispy crust and hot cheese!”'
                }}
              </div>
            </div>

            <!-- Impostor Card -->
            <div class="card duel-card duel-card--imposter">
              <div class="duel-card__top">
                <img :src="avatarImposter" alt="The Impostor spy" class="duel-card__avatar" />
                <div class="duel-card__info">
                  <span class="chip chip--danger">{{
                    locale === 'es' ? 'El Impostor' : 'The Impostor'
                  }}</span>
                  <p class="duel-card__word">
                    {{ locale === 'es' ? 'Palabra Secreta:' : 'Secret Word:' }} <strong>???</strong>
                  </p>
                </div>
              </div>
              <div class="duel-card__quote">
                {{
                  locale === 'es'
                    ? '“Claro que sí, siempre la pido los viernes por la noche con ingredientes riquísimos...”'
                    : '“Oh absolutely, I always order mine on Friday nights with extra delicious toppings...”'
                }}
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
          <span class="eyebrow">{{ locale === 'es' ? 'Sin Preparación' : 'Zero Setup' }}</span>
          <h2 class="section-title">
            {{ locale === 'es' ? 'Cómo Funciona en 3 Pasos' : 'How It Works in 3 Steps' }}
          </h2>
          <p class="section-subtitle">
            {{
              locale === 'es'
                ? 'Sin tableros complicados ni reglas interminables. Pasa el teléfono de mano en mano y empieza a acusar en menos de un minuto.'
                : 'No complicated board games, no lengthy rulebooks. Hand the phone around and start accusing in under sixty seconds.'
            }}
          </p>
        </div>

        <div class="how-it-works__grid">
          <div class="card step-card">
            <div class="step-card__glow" />
            <div class="step-card__num">01</div>
            <h3 class="step-card__title">
              {{ locale === 'es' ? 'Descubre tu Palabra Secreta' : 'Get Your Secret Word' }}
            </h3>
            <p class="step-card__desc">
              {{
                locale === 'es'
                  ? 'Pasa el móvil por turnos. Todos los detectives conocen el tema secreto menos el impostor, que debe disimular que lo sabe todo.'
                  : 'Pass the phone around. Every detective learns the secret topic—except the impostor, who must pretend they know everything.'
              }}
            </p>
          </div>

          <div class="card step-card">
            <div class="step-card__glow step-card__glow--blue" />
            <div class="step-card__num">02</div>
            <h3 class="step-card__title">
              {{ locale === 'es' ? 'Di una Pista Sutil' : 'Give Your Subtle Clue' }}
            </h3>
            <p class="step-card__desc">
              {{
                locale === 'es'
                  ? 'Por turnos, cada jugador dice una palabra o frase corta. Sé ingenioso para conectar con tu equipo sin regalar la palabra al espía.'
                  : 'Go around the circle saying one word or phrase. Be clever enough to signal your team, without handing the secret word to the spy.'
              }}
            </p>
          </div>

          <div class="card step-card">
            <div class="step-card__glow step-card__glow--red" />
            <div class="step-card__num">03</div>
            <h3 class="step-card__title">
              {{ locale === 'es' ? 'Vota y Caza al Espía' : 'Vote Out the Spy' }}
            </h3>
            <p class="step-card__desc">
              {{
                locale === 'es'
                  ? 'Debatan y sospechen de los titubeos. Si atrapan al impostor, ¡tiene una última oportunidad de adivinar la palabra y ganar!'
                  : 'Debate, argue, and cast your votes. If the impostor is caught, they get one final guess at the secret word to steal victory!'
              }}
            </p>
          </div>
        </div>

        <div class="how-it-works__cta">
          <RouterLink to="/how-to-play" class="btn btn--outline">
            {{
              locale === 'es'
                ? 'Ver Reglas Completas y Estrategias de Farol →'
                : 'Explore Full Rulebook & Bluffing Strategies →'
            }}
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Core Features Section (RevenueCat-style cards) -->
    <section class="section features">
      <div class="container">
        <div class="features__header">
          <span class="eyebrow">{{
            locale === 'es' ? 'Características' : 'Product Features'
          }}</span>
          <h2 class="section-title">
            {{
              locale === 'es'
                ? 'Diseñado para Grandes Risas y Tensión'
                : 'Built for High Stakes and Big Laughs'
            }}
          </h2>
          <p class="section-subtitle">
            {{
              locale === 'es'
                ? 'Ya sea en el salón de casa, en una cena con amigos o en llamada de Discord, El Impostor está pensado para jugar al instante.'
                : 'Whether you’re gathered in a living room, hosting game night, or jumping on a Discord call, The Impostor is designed for instant connection.'
            }}
          </p>
        </div>

        <div class="features__grid">
          <div class="card rc-card">
            <div class="rc-card__glow rc-card__glow--orange" />
            <div class="rc-card__tag chip chip--primary">
              {{ locale === 'es' ? 'Partida Local' : 'Local Play' }}
            </div>
            <h3 class="rc-card__title">
              {{ locale === 'es' ? 'Pasa y Juega (1 Móvil)' : 'Pass & Play (1 Phone)' }}
            </h3>
            <p class="rc-card__desc">
              {{
                locale === 'es'
                  ? 'Juega con 3 a 20 personas usando un solo teléfono inteligente. Sin registros, sin internet y sin esperas. Ideal para viajes, bares y reuniones.'
                  : 'Play with 3 to 20 people using just one smartphone. Zero setup, no internet, and no accounts needed. Perfect for road trips, dinners, and parties.'
              }}
            </p>
            <RouterLink to="/game-modes" class="rc-card__link">
              {{ locale === 'es' ? 'Ver modos de juego →' : 'Explore game modes →' }}
            </RouterLink>
          </div>

          <div class="card rc-card">
            <div class="rc-card__glow rc-card__glow--blue" />
            <div class="rc-card__tag chip chip--info">
              {{ locale === 'es' ? 'Multijugador' : 'Multiplayer' }}
            </div>
            <h3 class="rc-card__title">{{ locale === 'es' ? 'Salas Online' : 'Online Rooms' }}</h3>
            <p class="rc-card__desc">
              {{
                locale === 'es'
                  ? 'Crea salas privadas con un sencillo código de 4 letras. Juega a distancia con amigos en iOS y Android con sincronización en tiempo real.'
                  : 'Create private rooms with simple 4-letter room codes. Play remotely with friends across iOS and Android with live synchronized voting and chat.'
              }}
            </p>
            <RouterLink to="/game-modes" class="rc-card__link">
              {{ locale === 'es' ? 'Ver modo online →' : 'See online features →' }}
            </RouterLink>
          </div>

          <div class="card rc-card">
            <div class="rc-card__glow rc-card__glow--green" />
            <div class="rc-card__tag chip chip--success">
              {{ locale === 'es' ? 'Contenido' : 'Content' }}
            </div>
            <h3 class="rc-card__title">
              {{ locale === 'es' ? '1,000+ Palabras Curadas' : '1,000+ Curated Words' }}
            </h3>
            <p class="rc-card__desc">
              {{
                locale === 'es'
                  ? 'Categorías variadas como Vida Cotidiana, Viajes por el Mundo, Cultura Pop, Comida y Cine. Crea también tus listas con bromas internas.'
                  : 'Extensive categories like Everyday Life, World Travel, Pop Culture, Food, and Cinema. Custom word lists let you add inside jokes and friend names.'
              }}
            </p>
            <RouterLink to="/word-packs" class="rc-card__link">
              {{ locale === 'es' ? 'Explorar categorías →' : 'Browse categories →' }}
            </RouterLink>
          </div>

          <div class="card rc-card">
            <div class="rc-card__glow rc-card__glow--red" />
            <div class="rc-card__tag chip chip--danger">
              {{ locale === 'es' ? 'Reglas Caseras' : 'House Rules' }}
            </div>
            <h3 class="rc-card__title">
              {{ locale === 'es' ? 'Varios Espías y Temporizador' : 'Multiple Spies & Timers' }}
            </h3>
            <p class="rc-card__desc">
              {{
                locale === 'es'
                  ? 'Añade 2 o más impostores en grupos grandes, temporizadores por turno y cuentas atrás de discusión para elevar la tensión al máximo.'
                  : 'Add 2 or more impostors for large gatherings, turn timers for rapid-fire bluffing, and customizable discussion clocks to keep rounds intense.'
              }}
            </p>
            <RouterLink to="/how-to-play" class="rc-card__link">
              {{ locale === 'es' ? 'Leer guía de estrategia →' : 'Read strategy guide →' }}
            </RouterLink>
          </div>
        </div>

        <!-- From the Blog / Content Hub Preview -->
        <div class="blog-preview-section">
          <div class="blog-preview-header">
            <div>
              <span class="eyebrow">{{
                locale === 'es' ? 'Estrategias y Guías' : 'Articles & Guides'
              }}</span>
              <h2 class="section-title">
                {{ locale === 'es' ? 'Últimos Artículos del Blog' : 'Latest From the Blog' }}
              </h2>
            </div>
            <RouterLink to="/blog" class="btn btn--outline">
              {{ locale === 'es' ? 'Ver todo el Blog →' : 'Browse All Articles →' }}
            </RouterLink>
          </div>

          <div class="blog-preview-grid">
            <article v-for="item in recentArticles" :key="item.slug" class="card blog-preview-card">
              <span class="chip chip--info">{{ item.tags[0] }}</span>
              <h3 class="blog-preview-card__title">
                <RouterLink :to="`/blog/${item.slug}`" class="blog-preview-card__link">
                  {{ item.title }}
                </RouterLink>
              </h3>
              <p class="blog-preview-card__desc">{{ item.description }}</p>
              <RouterLink :to="`/blog/${item.slug}`" class="read-more-link">
                {{ locale === 'es' ? 'Leer artículo →' : 'Read article →' }}
              </RouterLink>
            </article>
          </div>
        </div>

        <!-- FAQ Section for SEO Rich Snippets -->
        <div class="faq-section">
          <div class="faq-header">
            <span class="eyebrow">{{
              locale === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'
            }}</span>
            <h2 class="section-title">
              {{ locale === 'es' ? 'Todo sobre El Impostor' : 'Everything You Need to Know' }}
            </h2>
          </div>

          <div class="faq-grid">
            <div class="card faq-card">
              <h3 class="faq-card__q">
                {{ locale === 'es' ? '¿Qué es El Impostor?' : 'What is The Impostor?' }}
              </h3>
              <p class="faq-card__a">
                {{
                  locale === 'es'
                    ? 'El Impostor es un juego de fiesta de deducción social para móviles. Todos los jugadores reciben la misma palabra secreta salvo uno o más impostores, que deben fingir saberla diciendo pistas ambiguas.'
                    : 'The Impostor is a mobile social deduction party game. All players receive the same secret word except the impostor(s), who must bluff their way through by giving clever, ambiguous clues.'
                }}
              </p>
            </div>

            <div class="card faq-card">
              <h3 class="faq-card__q">
                {{
                  locale === 'es' ? '¿Cuántas personas pueden jugar?' : 'How many players can play?'
                }}
              </h3>
              <p class="faq-card__a">
                {{
                  locale === 'es'
                    ? 'En modo local Pasa y Juega puedes jugar con entre 3 y 20 personas en un único móvil. En modo salas multijugador online, se admiten de 4 a 8 participantes.'
                    : 'In local Pass & Play mode, you can play with 3 to 20 players on a single smartphone. In online multiplayer rooms, 4 to 8 players can connect remotely.'
                }}
              </p>
            </div>

            <div class="card faq-card">
              <h3 class="faq-card__q">
                {{
                  locale === 'es'
                    ? '¿Se necesita internet para jugar?'
                    : 'Do I need internet or Wi-Fi to play?'
                }}
              </h3>
              <p class="faq-card__a">
                {{
                  locale === 'es'
                    ? 'No para el modo local. El modo Pasa y Juega es 100% offline y funciona sin conexión a internet, datos móviles ni Wi-Fi. Perfecto para viajes en coche, aviones y fiestas.'
                    : 'No for local play. Pass & Play mode is 100% offline with zero data or Wi-Fi required. It is perfect for flights, camping, road trips, and house parties.'
                }}
              </p>
            </div>

            <div class="card faq-card">
              <h3 class="faq-card__q">
                {{ locale === 'es' ? '¿El juego es gratis?' : 'Is The Impostor free to download?' }}
              </h3>
              <p class="faq-card__a">
                {{
                  locale === 'es'
                    ? 'Sí, El Impostor es completamente gratuito para descargar tanto en Apple App Store como en Google Play Store.'
                    : 'Yes, The Impostor is completely free to download on both the Apple App Store for iOS and Google Play Store for Android.'
                }}
              </p>
            </div>
          </div>
        </div>

        <!-- RevenueCat-style Bottom CTA Banner -->
        <div class="card cta-banner card--dark">
          <div class="cta-banner__glow" />
          <div class="cta-banner__content">
            <span class="eyebrow eyebrow--dark">{{
              locale === 'es' ? '¿Listo para jugar?' : 'Ready to Play?'
            }}</span>
            <h3 class="cta-banner__title">
              {{
                locale === 'es'
                  ? 'Desenmascara al espía de tu grupo hoy'
                  : 'Unmask the spy in your friend group tonight'
              }}
            </h3>
            <p class="cta-banner__desc">
              {{
                locale === 'es'
                  ? 'Gratis en iOS y Android. Inicia tu primera partida en segundos sin crear cuentas.'
                  : 'Free to download on iOS and Android. Start your first session in seconds.'
              }}
            </p>
          </div>
          <div class="cta-banner__actions">
            <DownloadButtons />
          </div>
        </div>

        <!-- Homepage Legal Notice Bar for Crawlers & Users -->
        <div class="home-legal-strip">
          <p class="legal-strip__text">
            {{
              locale === 'es'
                ? 'El Impostor respeta tu privacidad: el modo local no recopila datos personales.'
                : 'The Impostor respects player privacy: local mode collects zero personal data.'
            }}
            <RouterLink to="/privacy" rel="privacy-policy" class="legal-link">
              {{ locale === 'es' ? 'Política de Privacidad' : 'Privacy Policy' }}
            </RouterLink>
            •
            <RouterLink to="/terms" rel="terms-of-service" class="legal-link">
              {{ locale === 'es' ? 'Términos de Servicio' : 'Terms of Service' }}
            </RouterLink>
          </p>
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

// ---------------------------------------------------------------------------
// Blog Preview Section
// ---------------------------------------------------------------------------
.blog-preview-section {
  margin-top: var(--space-4xl);
  margin-bottom: var(--space-4xl);
}

.blog-preview-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: var(--space-lg);
  margin-bottom: var(--space-2xl);
  flex-wrap: wrap;
}

.blog-preview-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-xl);
}

.blog-preview-card {
  display: flex;
  flex-direction: column;
  padding: var(--space-xl);

  &__title {
    font-size: var(--font-size-title);
    margin-top: var(--space-sm);
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
    line-height: var(--line-height-body);
    margin-bottom: var(--space-lg);
    flex-grow: 1;
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

// ---------------------------------------------------------------------------
// FAQ Section
// ---------------------------------------------------------------------------
.faq-section {
  margin-bottom: var(--space-4xl);
}

.faq-header {
  text-align: center;
  max-width: 640px;
  margin-inline: auto;
  margin-bottom: var(--space-3xl);
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-xl);
}

.faq-card {
  padding: var(--space-xl);

  &__q {
    font-size: var(--font-size-title);
    color: var(--color-ink);
    margin-bottom: var(--space-sm);
  }

  &__a {
    font-size: var(--font-size-body-small);
    line-height: var(--line-height-body);
    color: var(--color-muted);
  }
}

// ---------------------------------------------------------------------------
// Homepage Legal Strip
// ---------------------------------------------------------------------------
.home-legal-strip {
  margin-top: var(--space-2xl);
  text-align: center;
}

.legal-strip__text {
  font-size: var(--font-size-caption);
  color: var(--color-muted);
}

.legal-link {
  color: var(--color-muted);
  text-decoration: underline;
  margin-inline: var(--space-2xs);

  &:hover {
    color: var(--color-primary-dark);
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
  .features__grid,
  .blog-preview-grid,
  .faq-grid {
    grid-template-columns: 1fr;
  }

  .cta-banner {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
