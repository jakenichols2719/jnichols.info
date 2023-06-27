<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  linky: {
    type: String,
    required: false,
  },
  griddy: {
    type: Boolean,
    default: false,
  },
  bordery: {
    type: Boolean,
    default: true,
  }
})
</script>

<template>
    <div class="section" :class="{griddy: griddy, bordery: bordery}">
        <h1 class="section-title">{{ title }}</h1>
        <div class="section-content">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
@import '../assets/base.css';
@media (min-width: 1024px) {
    .griddy {
        display: grid;
        grid-template-columns: 1fr 3fr;
    }
}
.bordery {
    border-bottom: 2px solid var(--color-border);
}
.section {
    margin-top: .5rem;
}
.section-content {
    margin-top: .5rem;
    margin-bottom: 1.5rem;
}
</style>
