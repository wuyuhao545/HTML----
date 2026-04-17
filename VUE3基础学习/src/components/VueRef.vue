<template>
  <h3>模板引用</h3>
  <p>虽然 Vue 的声明性渲染模型为你抽象了大部分对 DOM 的直接操作，但在某些情况下，我们仍然需要直接访问底层 DOM 元素。要实现这一点，我们可以使用特殊的ref方法</p>
  <p>ref是一个特殊的attribute，和 v-for 章节中提到的 key 类似。它允许我们在一个特定的 DOM 元素或子组件实例被挂载后，获得对它的直接引用。</p>
  <div ref="container" class="container">{{ content }}</div>
  <button @click="getElementHandle">获取元素</button>
  <p>挂载结束后引用都会被暴露在 this.$refs 之上,因此想要引用原生dom操作，我们必须要在操作前加上this.$refs.template中ref的名字</p>
  <p>如果没有特殊需求，最好不用操作DOM</p>
</template>

<script> 
export default{
  data(){
    return{
        content:"内容",
    }
  },
  methods:{
    getElementHandle(){
      this.$refs.container.innerHTML="你好";
    }
  }
}
</script>