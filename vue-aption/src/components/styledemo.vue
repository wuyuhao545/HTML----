<template>
  <h3>style样式绑定</h3>
  <p>Vue中也存在style的绑定方式，与class绑定方式类似，都可以绑定元素，对象和数组</p>
  <p :style="{color:activeColor,fontSize:fontSize + 'px'}">这是绑定元素</p>
  <p :style="styleObject">这是绑定对象</p>
  <p>我们还可以绑定数组，但绑定数组和绑定对象差不大多</p>
  <p :style="[styleObject]">这是绑定数组</p>
</template>

<script>
export default{
  data(){
    return{
        activeColor:"green",
        fontSize:30,
        styleObject:{
          color:"red",
          fontSize:"30px"
        }
    }
  }
}
</script>