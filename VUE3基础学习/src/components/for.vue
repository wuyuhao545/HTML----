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
  <p>v-for还可以用来展示标签，并且key用来展示标签时有三个伴生属性value(属性)，key(唯一识别值)，index(数组下标)</p>
  <div>
   <p v-for="(value,item,index) of man" :key="index">{{value}}-{{index}}-{{ item }}</p> 
  </div>
  <p>在 Vue 中，v-for 现在必须提供 key 的原因是为了保证虚拟 DOM 的 diff 算法能正确识别每个列表项的身份，从而高效且准确地更新真实 DOM。如果不写 key，Vue 会采用就地复用的策略：<br>
  当列表数据顺序变化、新增或删除时，Vue 不会移动 DOM 元素，而是直接更新每个位置上的元素内容。这会导致两个严重问题：<br>
  状态错乱：如果列表项内部有临时状态（如输入框的值、复选框的勾选状态、动画等），这些状态会被错误地保留在原来位置的元素上，而不是跟随数据项移动。<br>
  性能浪费：对于需要移动的节点，Vue 无法复用原有的 DOM 结构，可能导致不必要的重新渲染。<br>
  比如三个数据排序为1，2，3 把2和3对调后排序为1，3，2 如果不用key属性则会先删除1，2，3 再重新渲染1，3，2 这样费时费力，所以key就成为了唯一添加索引的标识<br>
  Vue 2.2.0+：在开发环境中，如果不写 key 会抛出警告（要求提供）。<br>
  Vue 3：key 已经成为强制性要求，没有 key 的 v-for 会在编译时报错。
</p>

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
      ],
      man:{
        name:"吴宇豪",
        age:22,
        sex:"男"
      }
    }
  }
}
</script>

<style>
</style>
