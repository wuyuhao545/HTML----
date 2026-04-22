<template>
  <h3>组合式API模板引用</h3>
  <p ref="message"></p>
  <p>与Vue2的ref属性类似，声明一个ref来存放该元素的引用，必须和模板里的ref同名</p>
</template>
<script setup>
import {ref,onMounted} from "vue"
const message = ref(null)
onMounted(()=>{
  message.value.innnerHTML = "组合式API的模板引用"
})
//当DOM还没有渲染时，下面的代码就已经执行，我们需要保证当DOM完成渲染后在读取message
//这时候我们就可以使用生命周期函数onmounted来让message的读取在DOM渲染之后
//message.value.innerHTML = "组合式API"
</script>