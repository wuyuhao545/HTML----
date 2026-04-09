<template>
  <h3>属性绑定</h3>
  <p>双花大括号是不能用在HTML的元素属性中的，想要响应式的绑定一个属性，需要用上v-bind指令</p>
  <p>例如一个div元素，我想要让其class="msg"我就要用v-bind:class="msg"</p>
  <div v-bind:class="msg" v-bind:id="title">
    <p>我有msg属性加持，我现在是红色字体了</p>
  </div> 
  <p>v-bind不单单能够加入class属性，也可以加入比如id,name,title,甚至是你自己定义的属性,只要加载v-bind:的后面</p>
  <p>如果v-bind绑定的值为null或者undefined,那么该attribute将会从渲染的元素上移除，我设计了一个null的title并加入了div的title元素，你打开F12会发现，div中没有title属性</p>
  <p>v-bind比较常用，因此VUE中可以对v-bind进行缩写，直接用‘:’替代v-bind</p>
  <p>当然，属性也可以是布尔类型属性</p>
  <button :disabled="isbuttondisable">我是布尔类型按钮,我设置isbuttondisable属性为false那他就可以点击</button>
  <p>v-bind也可以动态绑定多个值,通过属性集合体中添加多个属性,我现在将有一个object{class:"msg",id:"null"}的属性绑定在div中,与绑定单个属性不同，
    这里的绑定一定是（元素属性）：（属性名字），不能和第一个div一样v-bind:class="msg",又在script中使用msg:"msg",这样绑定的就是属性名msg，属性值为msg了</p>
  <div v-bind="object">
    <p>我是属性object</p>
  </div>
</template>

<script>
export default{
  data(){
    return{
      msg:"msg",
      title:null,
      isbuttondisable:false,
      object:{
        class:"msg",
        id:"null"
      }
    }
  }
}
</script>

<style>
  .msg{
    color:red;
  }
  #null{
    font-size:30px;
  }
</style>
