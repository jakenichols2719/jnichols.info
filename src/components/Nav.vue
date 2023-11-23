<script setup>
</script>

<template>
  <div class="navblock">
    <router-link class="navitem" to="/">Home</router-link>
    <a class="navitem" href="https://frontrange.co/@jnichols">Mastodon</a>
    <a class="navitem" href="https://www.linkedin.com/in/james-nichols-9043691b4/">LinkedIn</a>
    <a class="navitem" href="https://github.com/jnichols-git">GitHub</a>
  </div>
</template>

<style scoped>

.navblock {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2rem;
}
.navitem {
  padding: .5rem 2rem;
  border: none;
  font: inherit;
  color: inherit;
  text-align: center;
  background-color: var(--color-background-soft);
  border-radius: 1px;
  transition: .2s all;
  @media screen and (-ms-high-contrast: active) {
    border: 2px solid currentcolor;
  }
}
.navitem:hover {
  background-color: var(--color-background-mute);
}
.navitem:active {
  transform: scale(0.98);
  background-color: var(--color-background-mute);
}
@media (max-width: 1024px) {
  .navblock {
    justify-content: flex-start;
  }
  .navitem {
    flex-grow: 1
  }
}
</style>
