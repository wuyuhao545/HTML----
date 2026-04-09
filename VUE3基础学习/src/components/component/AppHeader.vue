<template>
  <header class="app-header">
    <slot>默认头部内容</slot>
  </header>
</template>

<style scoped>
.app-header {
  width: 100%;
  height: 100px;
  padding: 1rem;
  border: 5px solid gray;
  box-sizing: border-box;
}
</style>