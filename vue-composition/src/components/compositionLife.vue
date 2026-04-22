<template> 
  <h3>组合式API生命周期</h3>
  <p>vue2中每一个vue后缀文件生命周期函数只能有一个，当出现多个生命周期函数时，后登场的生命周期函数会替代先登场的那个</p>
  <p>在vue3中可以有多个生命周期函数，这样就能让文件不那么冗余，他们可以在同一个文件中独立触发</p>
  <p>在组合式API中，生命周期函数命名以on为前缀，且必须同步调用。</p>
  <p>比如onBeforeMount，onMounted，onBeforeUpdate，onUpdated，onBeforeUnmount，onUnmounted</p>
  <p>注意：组合式 API 中没有 beforeCreate 和 created，因为 setup() 本身替代了这两个阶段。<br>
在 setup() 内部，你可以直接写初始化逻辑（相当于 created）不用import来引入。</p>
</template>
<script setup>
import {onMounted} from "vue"
onMounted(()=>{
    console.log("组件1渲染之后")
})
onMounted(()=>{
    console.log("组件2渲染之后")
})
onMounted(()=>{
    console.log("组件3渲染之后")
})
</script>