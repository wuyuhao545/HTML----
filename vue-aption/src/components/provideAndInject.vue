<template>
  <h3>依赖注入</h3>
  <p>通常情况下，当我们需要从父组件向子组件传递数据时，会使用 props。想象一下这样的结构：有一些多层级嵌套的组件，形成了一棵巨大的组件树，而某个深层的子组件需要一个较远的祖先组件中的部分数据。在这种情况下，如果仅使用 props 则必须将其沿着组件链逐级传递下去，这会非常麻烦</p>
  <p>provide和inject可以帮助我们解决这一问题。一个父组件相对于其所有的后代组件，会作为依赖提供者。任何后代的组件树，无论层级有多深，都可以注入由父组件提供给整条链路的依赖。</p>
  <p>对于 provide 对象上的每一个属性，后代组件会用其 key 为注入名查找期望注入的值，属性的值就是要提供的数据。如果我们需要提供依赖当前组件实例的状态 (比如那些由 data() 定义的数据属性)，那么可以以函数形式使用 provide</p>
  <p>export default {data() {return {message: 'hello!'
    }
  },
  provide() {
    // 使用函数的形式，可以访问到 `this`
    return {
      message: this.message
    }
  }
}</p>
  <parents />
  <children />
  <p>1.provide只能由上到下，不能是儿子给爷爷传。<br>2.inject和props类似，当没有传入值时可以在inject内输入值来当默认值</p>
  <p>provide也可以在全局使用，在main.js中通过import provide("")引用</p>
</template>


<script>
import parents from './components/EventVue/VueParents.vue'
import children from './components/EventVue/VueChildren.vue'
export default{
  components:{
    parents,
    children,
  },
}
</script>