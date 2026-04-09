<template>
  <h3>全局注册</h3>
  <p>我们可以使用 Vue 应用实例的 .component() 方法，让组件在当前 Vue 应用中全局可用。<br>
  import { createApp } from 'vue'
  const app = createApp({})
  app.component(
    // 注册的名字
    'MyComponent',
    // 组件的实现
  {
    /* ... */
  })</p>
  <VueWatcher />
  <p>全局注册虽然很方便，但有以下几个问题：<br>
全局注册，但并没有被使用的组件无法在生产打包时被自动移除 (也叫“tree-shaking”)。如果你全局注册了一个组件，即使它并没有被实际使用，它仍然会出现在打包后的 JS 文件中。<br>
全局注册在大型项目中使项目的依赖关系变得不那么明确。在父组件中使用子组件时，不太容易定位子组件的实现。和使用过多的全局变量一样，这可能会影响应用长期的可维护性。<br>
相比之下，局部注册的组件需要在使用它的父组件中显式导入，并且只能在该父组件中使用。它的优点是使组件之间的依赖关系更加明确，并且对 tree-shaking 更加友好。</p>
</template>

<script setup>
</script>

<style>
</style>