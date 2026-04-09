<template>
  <main class="app-main">
    <slot />
  </main>
</template>

<style scoped>
.app-main {
  float: left;
  width: 60%;
  height: 500px;
  border: 5px solid gray;
  box-sizing: border-box;
  overflow: auto;
}
</style>