<script setup lang="ts">
import { APP_NAME } from '../config'
import { useI18n } from '../composables/useI18n'

const { locale } = useI18n()
</script>

<template>
  <div class="legal-page">
    <section class="section">
      <div class="container legal-page__container">
        <span class="chip chip--primary">{{ locale === 'es' ? 'Legal' : 'Legal' }}</span>
        <h1 class="legal-page__title">
          {{ locale === 'es' ? 'Política de Privacidad' : 'Privacy Policy' }}
        </h1>
        <p class="legal-page__date">
          {{
            locale === 'es'
              ? 'Última actualización: Septiembre 2026'
              : 'Last updated: September 2026'
          }}
        </p>

        <!-- Spanish Version -->
        <div v-if="locale === 'es'" class="card legal-content">
          <h2>1. Introducción</h2>
          <p>
            Bienvenido a {{ APP_NAME }} ("nosotros" o "nuestro"). Valoramos tu privacidad y nos
            comprometemos a ser completamente transparentes sobre cómo se gestionan tus datos al
            utilizar la aplicación móvil y este sitio web.
          </p>

          <h2>2. Datos en Partidas Locales (Pasa y Juega)</h2>
          <p>
            Al jugar en modo local Pasa y Juega, todos los datos de la partida, los paquetes de
            palabras personalizados y los ajustes se guardan estrictamente en tu propio dispositivo.
            No transmitimos ni almacenamos tus palabras locales, nombres de jugadores ni datos de
            partida en servidores externos.
          </p>

          <h2>3. Sesiones Multijugador Online</h2>
          <p>
            Al utilizar salas multijugador online, se transmiten datos de sesión temporales (códigos
            de sala, nombres de usuario, estado de la ronda y votos) mediante Firebase Firestore
            para permitir la sincronización en tiempo real entre los participantes. Estos datos se
            limpian y eliminan automáticamente al concluir las partidas.
          </p>

          <h2>4. Analítica y Publicidad</h2>
          <p>
            {{ APP_NAME }} puede emplear Google Mobile Ads para mostrar anuncios personalizados o no
            personalizados (sujeto a tu consentimiento explícito según las normativas GDPR, CCPA,
            etc.). Las redes publicitarias pueden utilizar identificadores de dispositivo para
            mostrar publicidad relevante.
          </p>

          <h2>5. Derechos del Usuario y Control de Datos</h2>
          <p>
            Puedes restablecer tus estadísticas locales, paquetes de palabras personalizados y
            preferencias de consentimiento publicitario en cualquier momento desde los ajustes de la
            aplicación o borrando los datos de la app en tu teléfono.
          </p>

          <h2>6. Contacto y Soporte</h2>
          <p>
            Si tienes cualquier duda acerca de esta Política de Privacidad, puedes escribirnos a
            través del correo de soporte disponible en la ficha de la App Store o Google Play Store,
            o consultar la política oficial en
            <a
              href="https://axislabs.eu/the-impostor/policy"
              target="_blank"
              rel="noopener noreferrer"
              >Axis Labs Policy</a
            >.
          </p>
        </div>

        <!-- English Version -->
        <div v-else class="card legal-content">
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
            developer support email listed on the App Store or Google Play Store listing, or view
            the official document at
            <a
              href="https://axislabs.eu/the-impostor/policy"
              target="_blank"
              rel="noopener noreferrer"
              >Axis Labs Policy</a
            >.
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

  a {
    color: var(--color-primary-dark);
    text-decoration: underline;

    &:hover {
      color: var(--color-ink);
    }
  }
}
</style>
