<script setup lang="ts">
import { watch, onMounted } from 'vue'
import { useI18n } from './composables/useI18n'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'

const { locale } = useI18n()

onMounted(() => {
  document.documentElement.lang = locale.value
})

watch(locale, (newLocale) => {
  document.documentElement.lang = newLocale
})
</script>

<template>
  <div class="app-shell">
    <SiteHeader />
    <main class="app-main">
      <RouterView />
    </main>
    <SiteFooter />
  </div>
</template>

<style lang="scss" scoped>
.app-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-main {
  flex-grow: 1;
}
</style>
