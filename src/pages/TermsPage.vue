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
          {{ locale === 'es' ? 'Términos de Servicio' : 'Terms of Service' }}
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
          <h2>1. Aceptación de los Términos</h2>
          <p>
            Al descargar, instalar o jugar a {{ APP_NAME }} ("la App") o navegar por este sitio web,
            aceptas cumplir y quedar vinculado por estos Términos de Servicio. Si no estás de
            acuerdo con estos términos, por favor deja de utilizar la App inmediatamente.
          </p>

          <h2>2. Licencia y Propiedad Intelectual</h2>
          <p>
            Te otorgamos una licencia personal, no exclusiva, intransferible y revocable para
            utilizar la App exclusivamente con fines de entretenimiento personal y no comercial.
            Todo el arte, efectos de sonido, logotipos y código fuente son propiedad intelectual del
            desarrollador y de Axis Labs.
          </p>

          <h2>3. Conducta del Usuario en Multijugador</h2>
          <p>
            Al utilizar salas multijugador online o el editor de palabras personalizadas, aceptas no
            enviar nombres de usuario ni contenido que resulte ofensivo, abusivo, denigrante o
            ilícito. Nos reservamos el derecho de limitar o suspender el acceso a funciones online
            en caso de comportamiento inadecuado.
          </p>

          <h2>4. Compras Integradas y Bienes Virtuales</h2>
          <p>
            Cualquier compra integrada opcional (como la eliminación de publicidad o paquetes de
            palabras premium) se procesa de forma segura a través de Apple In-App Purchase o Google
            Play In-App Billing y está sujeta a los términos y condiciones de la tienda
            correspondiente.
          </p>

          <h2>5. Exclusión de Garantías</h2>
          <p>
            La App se proporciona "tal cual" y "según disponibilidad". Aunque nos esforzamos por
            ofrecer la mejor experiencia posible, no garantizamos que los servidores de salas
            multijugador estén libres de interrupciones o fallos puntuales.
          </p>

          <h2>6. Modificaciones de los Términos</h2>
          <p>
            Nos reservamos el derecho de modificar estos Términos en cualquier momento. El uso
            continuado de la App tras la publicación de cambios implicará tu aceptación de los
            nuevos términos. Para más detalles, consulta también los términos oficiales en
            <a
              href="https://axislabs.eu/the-impostor/terms-and-conditions"
              target="_blank"
              rel="noopener noreferrer"
              >Axis Labs Terms</a
            >.
          </p>
        </div>

        <!-- English Version -->
        <div v-else class="card legal-content">
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
            following updates constitutes your acceptance of the revised Terms. For more details,
            you can also review the official terms at
            <a
              href="https://axislabs.eu/the-impostor/terms-and-conditions"
              target="_blank"
              rel="noopener noreferrer"
              >Axis Labs Terms</a
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
