<template>
  <h3>列表渲染</h3>
  <p>我们可以使用 v-for 指令基于一个数组来渲染一个列表。v-for 指令的值需要使用 item in items 形式的特殊语法，其中 items 是源数据的数组，而 item 是迭代项的别名</p>
  <p v-for="(name, index) in names" :key="index">{{ name }}</p>
  <p>上面的列表就是我通过v-for指令显示的，一般而言你的item和items都是可以更改名字的，并且你也可以用of来代替in以此更加接近JS语法</p>
  <p>但大多数情况，我们渲染的数据来源于网络请求，也就是JSON格式</p>
  <p>我们通过代码输入来模拟网络请求</p>
  <div v-for="(item,index) in result" :key="index">
    <p>{{ item.title }}</p>
    <img :src="item.pic">
  </div>
  <p>img标签中的src是一种属性，因此想要让图片也输出多次，就需要使用v-bind来调节属性，如果不使用v-bind那么你就只会加载同一张图片三次</p>
  <p>v-for默认自带一个参数index，index相当于是C语言中数组元素的下标，而v-for后也会变成'(item,index) in items'</p>
  <p v-for="(name, index) in names" :key="index">{{ name }}-{{ index }}</p>

</template>

<script>
export default{
  data(){
    return{
      names:["Web前端","Java后端","全栈技术","C++软件开发"],
      result:[
        {
          "id":123456,
          "title":"Web前端id00123",
          "pic":"VUE3基础学习/src/assets/hospital.jpg"
        },
        {
          "id":123457,
          "title":"Java后端id00124",
          "pic":"VUE3基础学习/src/assets/logo.png"
        },
        {
          "id":123458,
          "title":"全栈技术id00125",
          "pic":"VUE3基础学习/src/assets/medical-aid.jpg"
        },
      ]
    }
  }
}
</script>

<style>
</style>
