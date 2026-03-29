<template>
  <h3>条件渲染</h3>
  <h4>条件渲染有四种方法 v-if,v-else,v-else-if, v-show</h4>
  <p>v-if指令用于条件性渲染一块内容，只有内容为真时才渲染，内容为假时则不动</p>
  <div>
    <p v-if="flag1">我是v-if是true所以我渲染了</p>
    <p v-else>我是v-else，当v-if不渲染时我就渲染</p>
    <button @click="onclick">点击我v-if就变成了false</button>
  </div>
  <p>v-else-if用于表示更多可能性，设有flag2属性为happen</p>
  <p v-if="flag2 === 'not'">我不会出现</p>
  <p v-else-if="flag2 === 'happen'">if语句中flag2为not，而我的flag2为happen，所以我发生了</p>
  <p>另一个可以显示的值为v-show,判断方式与v-if相同，他只能判断自己本身能否显示</p>
  <p>v-if 是“真实的”按条件渲染，因为它确保了在切换时，条件区块内的事件监听器和子组件都会被销毁与重建。<br>
    v-if 也是惰性的：如果在初次渲染时条件值为 false，则不会做任何事。条件区块只有当条件首次变为 true 时才被渲染。<br>
    相比之下，v-show 简单许多，元素无论初始条件如何，始终会被渲染，只有 CSS display 属性会被切换。<br>
    总的来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要频繁切换，则使用 v-show 较好；如果在运行时绑定条件很少改变，则 v-if 会更合适。
  </p>
</template>

<script>
export default{
  data(){
    return{
      flag1:true,
      flag2:"happen"
    }
  }
}
</script>
