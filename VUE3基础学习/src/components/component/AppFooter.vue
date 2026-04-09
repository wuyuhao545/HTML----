<template>
  <footer class="app-footer">
    <slot>默认页脚内容</slot>
  </footer>
</template>

<style scoped>
.app-footer {
  width: 100%;
  height: 100px;
  border: 5px solid gray;
  box-sizing: border-box;
  clear: both;
  text-align: center;
  line-height: 90px;
}
</style>