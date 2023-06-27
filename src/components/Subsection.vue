<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  linky: {
    type: String,
  }
})
</script>

<template>
    <div class="subsection">
        <h2 class="subsection-title" v-if="linky"><a :href="linky">{{ title }}</a></h2>
        <h2 v-else>{{ title }}</h2>
        <slot class="subsection-content"></slot>
    </div>
</template>

<style scoped>
@media (max-width: 1024px) {
    .subsection-title {
        margin: 1rem 0;
    }
    .subsection-content {
        margin: 1rem 0;
    }
}
.subsection {
    margin-bottom: 1rem;
}
</style>
