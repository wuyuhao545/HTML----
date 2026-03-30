<template>
  <h3>数组变化侦测</h3>
  <p>如果想要让数组发生变化，我们有两个方法，一个是数组变更，另一个是替换数组</p>
  <h4>数组变更</h4>
  <p>Vue 能够侦听响应式数组的变更方法，并在它们被调用时触发相关的更新。这些变更方法包括：push()、pop()、shift()、unshift()、splice()、sort()、reverse()</p>
  <button @click="addList">添加数据</button>
  <ul>
    <li v-for="(item,index) of names" :key="index">{{ item }}</li>
  </ul>
  <h4>替换数组</h4>
  <p>变更方法，顾名思义，就是会对调用它们的原数组进行变更。相对地，也有一些不可变方法，例如 filter()，concat()和slice()，这些都不会更改原数组，而总是返回一个新数组。当遇到的是非变更方法时，我们需要将旧的数组替换为新的：</p>
  <button @click="addList2">添加数据</button>
  <ul>
    <li v-for="(item,index) of names" :key="index">{{ item }}</li>
  </ul>
  <p>数组已经发生改变，但你看到的还是原数组</p>
  <p>如果你想要在使用上述方法的情况下改变原数组，可以使用如下语法:<br>
  this.names = this.names.concat(["hello"])
  </p>
  <button @click="addList3">添加数据</button>
  <ul>
    <li v-for="(item,index) of names" :key="index">{{ item }}</li>
  </ul>
</template>

<script>
export default{
  data(){ 
    return{
      names:["wu","yu","hao"]
    }
  },
  methods:{
    addList(){
      this.names.push("hello")//添加数据
    },
    addList2(){
      this.names.concat("hello")//合并数组
    },
    addList3(){
      this.names = this.names.concat(["hello"])
    }
  }
}
</script>
