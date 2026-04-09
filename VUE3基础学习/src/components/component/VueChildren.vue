<template>
<h4>子组件</h4>
<p>{{ title }}</p>
<p>{{ demo }}</p>
<p>{{ okr }}</p>
<p>{{ age }}</p>
<p v-for="(item,index) of names" :key=index>{{ item }}</p>
</template>

<script>
export default{
  data(){
    return{
    }
  },
   props: {
    title: {
      type: [String, Number, Object]
    },
    age: {
      type: Number
    },
    demo: {
      type: String      // 父组件传递的是静态字符串 "parent数据2"
    },
    okr: {
      type: String      // 父组件传递的是动态绑定的 message
    },
    names:{
      type:Array
    }
  }
}
</script>