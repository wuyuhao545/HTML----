<template>
  <h3>组合式API emit的使用</h3>
  <p>组件可以显式地通过 defineEmits() 宏来声明它要触发的事件：</p>
  <p>我们在template中使用的$emit方法不能在组件的script setup部分中使用，但defineEmits()会返回一个相同作用的函数供我们使用：</p>
  <Child  @onSomeEvent="getMessageHander"/>
  <p>{{ message }}</p>
  <p>defineEmits() 宏不能在子函数中使用,它必须直接放置在script setup的顶级作用域下。</p>
</template>
<script setup>
import Child from './compositionProps/childrenVue.vue'
import {ref} from "vue"
const message = ref("")
function getMessageHander(data){
    message.value = data
}
</script>