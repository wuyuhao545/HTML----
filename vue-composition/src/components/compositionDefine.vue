<template>
  <h3>组合式API-自定义方法</h3>
  <p v-author>组合式的自定义相对简单很多，只需要const+v(方法名字，第一个字符要大写)即可</p>
  <p v-color v-if="flag">{{ message }}</p>
  <p>同样的，我们也可以全局自定义方法，使用app.directive来自定义方法</p>
  <p v-blue>我在全局定义了color方法，我是蓝色的</p>
  <p>自定义指令有很多钩子函数，我们一般理解为自定义事件的生命周期钩子函数</p>
  <p>const myDirective = {
    created(el, binding, vnode){},在绑定元素的attribute前或事件监听器应用前调用<br>
    beforeMount(el, binding, vnode){},在元素被插入到 DOM 前调用<br>
    mounted(el, binding, vnode){},在绑定元素的父组件及他自己的所有子节点都挂载完成后调用<br>
    beforeUpdate(el, binding, vnode, prevVnode) {},绑定元素的父组件更新前调用<br>
    updated(el, binding, vnode, prevVnode) {},在绑定元素的父组件及他自己的所有子节点都更新后调用<br>
    beforeUnmount(el, binding, vnode) {},绑定元素的父组件卸载前调用<br>
    unmounted(el, binding, vnode) {}绑定元素的父组件卸载后调用<br>
    }</p>
    <button @click="changeColorFunction">点我修改方法</button>
    <button @click="deleteColorFunction">点我删除</button>
  <p>指令的钩子会传递以下几种参数：<br>
    el：指令绑定到的元素。这可以用于直接操作 DOM。<br>
    binding：一个对象，包含以下属性。:<br>
      value：传递给指令的值。例如在 v-my-directive="1 + 1" 中，值是 2。<br>
      oldValue：之前的值，仅在 beforeUpdate 和 updated 中可用。无论值是否更改，它都可用。<br>
      arg：传递给指令的参数 (如果有的话)。例如在 v-my-directive:foo 中，参数是 "foo"。<br>
      modifiers：一个包含修饰符的对象 (如果有的话)。例如在 v-my-directive.foo.bar 中，修饰符对象是 { foo: true, bar: true }。<br>
      instance：使用该指令的组件实例。<br>
      dir：指令的定义对象。<br>
    vnode：代表绑定元素的底层 VNode。<br>
    prevVnode：代表之前的渲染中指令所绑定元素的 VNode。仅在 beforeUpdate 和 updated 钩子中可用。</p>
    <p v-myshow:foo = "flag">{{ msg }}</p>
</template>
<script setup>
const vAuthor = {
    mounted:(element)=>{
        console.log(element)
    }
}
import { ref } from "vue"
const message = ref("我是红色字体，使用了红色方法")
const flag = ref(true)
function changeColorFunction(){
    message.value = "更新后的字体"
}
function deleteColorFunction(){
    flag.value = false
}
const vColor = {
    mounted:(element)=>{
        element.style.color = "red"
        console.log("mounted")
    },
    created() {
        console.log("created")
    },
    beforeMount() {
        console.log("beforeMount")
    },
    beforeUpdate() {
        console.log("beforeUpdate")
    },
    updated() {
        console.log("updated")
    },
    beforeUnmount() {
        console.log("beforeUnmount")
    },
    unmounted() {
        console.log("unmounted")
    }
}
const msg = ref("模拟v-show指令")
const vMyshow = {
    updated(el,binding,vNode,prevNode){
        console.log(el);
        console.log(binding);
        console.log(vNode)
        console.log(prevNode)
        if(binding.value){
            el.style.display = "block";
        }else{
            el.style.display = "none";
        }
    }
}
</script>