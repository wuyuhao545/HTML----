<template>
  <h3>动态组件</h3>
  <p>有些场景会需要在两个组件间来回切换，比如 Tab 界面,我们可以通过 Vue 的 component元素和特殊的is属性来实现</p>
  <keep-alive>
    <component :is="tabComponent"></component>
  </keep-alive>
  <button @click="changeHandle">切换组件</button>
  <p>在上面的例子中，被传给 :is 的值可以是以下几种：
被注册的组件名
导入的组件对象
你也可以使用 is attribute 来创建一般的 HTML 元素。
当使用component:is="..."来在多个组件间作切换时，被切换掉的组件会被卸载。我们可以通过KeepAlive组件强制被切换掉的组件仍然保持“存活”的状态。</p>
</template>


<script>
import A from './components/component/ComponentsA.vue'
import B from './components/component/ComponentsB.vue'
export default{
  data(){
    return{
      tabComponent:"A"
    }
  },
components:{
  A,
  B
},
methods:{
  changeHandle(){
    this.tabComponent = this.tabComponent == "A" ? "B" : "A"
  }
}
}
</script>