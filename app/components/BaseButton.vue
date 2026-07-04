<template>
  <button :class="['base-btn', `base-btn--${variant}`]" v-bind="$attrs">
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'primary' | 'secondary'
}>(), {
  variant: 'primary'
})
</script>

<style scoped>
.base-btn {
  min-width: 180px;
  width: 100%;
  padding: 0.875rem 2rem;
  font-weight: 700;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  border-radius: 0.375rem;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.2s, border-color 0.2s, color 0.2s, box-shadow 0.2s;
}

/* Primary */
.base-btn--primary {
  background-color: #d4a017;
  color: #0a0804;
  border: 1px solid transparent;
}

.base-btn--primary:hover {
  background-color: #f5cc55;
  box-shadow: 0 0 24px rgba(212, 160, 23, 0.4);
}

/* Secondary */
.base-btn--secondary {
  background-color: transparent;
  color: #deccaa;
  border: 1px solid #3d2512;
}

.base-btn--secondary:hover {
  border-color: #d4a017;
  color: #d4a017;
}
</style>
