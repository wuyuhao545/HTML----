<template>
  <h3>组件周期应用1</h3>
  <p ref="name">吴宇豪</p>
  <p>当使用ref获取元素结构时，需要在适当的时机</p>
  <p>观察控制台，你会发现渲染文本前，name的属性都是undefined，只有在渲染后才会变为name属性</p>
  <p>结构的渲染比数据的展示更为重要，因此一般挂载都是挂载到mounted上</p>
</template>
<script>
export default{
    beforeMount(){
        console.log(this.$refs.name)
    },
    mounted(){
        console.log(this.$refs.name)
    }
}
</script>