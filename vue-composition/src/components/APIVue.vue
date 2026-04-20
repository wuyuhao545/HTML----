<template>
  <h3>组合式API展示</h3>
  <p>setup是组合式文本的关键字。在其中，ref和reactive都可以用来展示文本,但这两者是有区别的。</p>
  <p>ref：基本类型响应式数据：string Number Boolean<br>reactive：引用类型响应数据：Array字符串，object对象 </p>
  <p>{{ msg }}</p>
  <p>{{userInfo.name }}</p>
  <p>除了可以使用return{}，还有另一种方法可以实现关键字的传输，在script内加入setup,能够使用vue3的简约风格</p>
  <p>{{ message }}</p>
  <p>但要注意，在使用复杂风格时，你的setup(){}和vue2中的data(){}是可以共存的。但你使用简约语法，就只能是使用vue3的语法，其与vue2的语法不能共存</p>
  <p>最后，不到万不得已，尽量不要让vue2和vue3的语句混用</p>
</template>
<script setup>
import { ref,reactive } from "vue"
const message = ref("组合式API 简约风格")
const userInfo = reactive({
    name:"iwen"
})
const msg = ref("组合式API")
/*export default{
  setup(){
    const message = ref("组合式API 绑定数据")
    const uesrInfo = reactive({
        name:"iwen"
    })
    return{
        message,
        uesrInfo
    }
  }
}*/
</script>
