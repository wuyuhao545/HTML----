<template>
  <h3>自定义指令</h3>
  <p>除了Vue内置的一系列指令(比如v-model或v-show)之外，Vue还允许你注册自定义的指令(Custom Directives)</p>
  <p>一个自定义指令由一个包含类似组件生命周期钩子的对象来定义。钩子函数会接收到指令所绑定元素作为其参数。</p>
  <p>我们使用directives来接收自定义指令模板，你的自定义指令可以写在模板外面，也可以写在模板里面</p>
  <p v-author>在F12中查看定义的方法的触发</p>
  <p v-highlight>我是自定义的高亮文本</p>
  <p>和组件类似，自定义指令在模板中使用前必须先注册。在上面的例子中，我们使用directives选项完成了指令的局部注册。</p>
  <p>如果一个指令你需要经常使用，那么将一个自定义指令全局注册到应用层级也是一种常见的做法</p>
  <p v-color>我在全局定义了color方法，我是蓝色的</p>
  <p>只有当所需功能只能通过直接的DOM操作来实现时，才应该使用自定义指令。</p>
</template>
<script>
const highlight = {
    mounted:(el)=>el.classList.add('is.highlight')
}
export default{
    directives:{
        author:{
            mounted(element) {
                console.log(element);
            },
        },
        highlight
    }
}
</script>