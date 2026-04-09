<template>
  <article class="app-article">
    <slot />
  </article>
</template>

<style scoped>
.app-article {
  background-color: #ffffff;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}
</style>