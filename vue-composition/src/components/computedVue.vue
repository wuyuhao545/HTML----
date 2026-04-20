<template>
  <h3>组合式API 计算属性</h3>
  <p>在组合式API中，我们通过computed方法来实现数据的运算，其拥有的方法与vue2中的computed相同</p>
  <p>但要注意，在 Vue 3 的 Composition API 中，ref() 创建的是一个包装对象，它的真实值保存在 .value 属性里。</p>
  <p>你直接读取是读取不到的，必须用.value读取或修改。</p>
  <p v-pre>只有在模板 {{ }} 中才会自动解包，无需.value。</p>
  <p>{{ reverse }}</p>
  <p>computed方法不仅可以放在自己的文件下，也可以放在后缀为.js的文件下</p>
  <p>{{ demo }}</p>
</template>
<script setup>
import {computed,ref} from "vue"
import { myDemo } from "../utils/computed.js" 
const message = ref("组合式API")
const reverse = computed(() =>{
    //注意：message在逻辑里被读取时，必须要通过value读取值
  return message.value.split("").reverse().join("")
})
const demo = myDemo(message)
</script>