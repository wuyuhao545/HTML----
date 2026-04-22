<template>
  <h3>组合式API-父组件</h3>
  <Child title="父元素数据" :age="age" />
  <p>在使用script setup的单文件组件中，props 可以使用 defineProps() 宏来声明</p>
  <p>在没有使用script setup的组件中，props 可以使用 props 选项来声明</p>
</template>

<script setup>
import Child from './childrenVue.vue'
import { ref } from "vue"
const age = ref(20)
</script>