<template>
  <h3>异步组件</h3>
  <p>在大型项目中，我们可能需要拆分应用为更小的块，并仅在需要时再从服务器加载相关组件。Vue提供了defineAsyncComponent方法来实现此功能</p>
  <p>使用如下方法异步加载组件const 组件名 = defineAsyncComponent(()=>{ import("组件位置")})</p>
  <p>使用异步组件可以让我们的项目加载的更快</p>
  <keep-alive>
    <component :is="tabComponent"></component>
  </keep-alive>
  <button @click="changeHandle">切换组件</button>
  <p>通过控制台，可以看出使用异步组件后ComponentsB不再直接加载出来。</p>
</template>


<script>
import A from './components/component/ComponentsA.vue'
import { defineAsyncComponent } from 'vue';
//import B from './components/component/ComponentsB.vue'
//使用如下方法异步加载组件
const B = defineAsyncComponent(() => import("./components/component/ComponentsB.vue"))
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