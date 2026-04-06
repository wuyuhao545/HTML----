<template>
  <h3>侦听器</h3>
  <p>计算属性允许我们声明性地计算衍生值。然而在有些情况下，我们需要在状态变化时执行一些“副作用”,在选项式 API 中，我们可以使用watch选项在每次响应式属性发生变化时触发一个函数。</p>
  <p>{{ message }}</p>
  <button @click="updataHander">点我换单词,并注意副作用</button>
  <p>watch与data和methods同级，其watch里的方法名字需要和data中return里的数据一致<br>watch的方法有两个属性，第一个是newValue（改变之后的数据），第二个是oldValue（改变之前的数据）</p>
  <p>{{ changeMessage }}</p>
</template>

<script>
export default{
  data(){
    return{
        message:"hello",
        changeMessage:" "
        }
    },
  methods:{
    updataHander(){
      this.message = "World"
    }
  },
  watch:{
    message(newValue,oldValue){
      this.changeMessage = newValue + oldValue
    }
  }
  }
</script>