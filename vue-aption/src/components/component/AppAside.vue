<template>
  <aside class="app-aside">
    <slot />
  </aside>
</template>

<style scoped>
.app-aside {
  float: right;
  width: 40%;
  height: 500px;
  padding: 1rem;
  border: 5px solid gray;
  box-sizing: border-box;
  overflow: auto;
}
</style>