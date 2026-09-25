<script setup lang="ts">
interface Props {
  tag?: string
  title: string
  description: string
  tagType?: 'primary' | 'info' | 'danger' | 'success'
  dark?: boolean
}

withDefaults(defineProps<Props>(), {
  tag: '',
  tagType: 'primary',
  dark: false,
})
</script>

<template>
  <div class="card feature-card" :class="{ 'card--dark': dark }">
    <div class="feature-card__header" v-if="tag">
      <span
        class="chip"
        :class="{
          'chip--primary': tagType === 'primary',
          'chip--info': tagType === 'info',
          'chip--danger': tagType === 'danger',
          'chip--success': tagType === 'success',
          'chip--on-dark': dark,
        }"
      >
        {{ tag }}
      </span>
    </div>
    <h3 class="feature-card__title">{{ title }}</h3>
    <p class="feature-card__desc">{{ description }}</p>
    <div v-if="$slots.default" class="feature-card__body">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.feature-card {
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-card-hover);
  }

  &__header {
    margin-bottom: var(--space-md);
  }

  &__title {
    font-size: var(--font-size-title);
    margin-bottom: var(--space-sm);
    color: inherit;
  }

  &__desc {
    color: var(--color-muted);
    font-size: var(--font-size-body-small);
    line-height: var(--line-height-body);
    flex-grow: 1;
  }

  &__body {
    margin-top: var(--space-md);
  }
}

.card--dark {
  .feature-card__desc {
    color: var(--color-on-dark-muted);
  }
}
</style>
