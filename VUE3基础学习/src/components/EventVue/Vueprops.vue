<template>
  <h3>组件传递</h3>
  <p>要实现这样的效果自然必须向组件中传递数据，例如每篇文章标题和内容，这就会使用到props<br>
  要传递给博客文章组件一个标题，我们必须在组件的 props 列表上声明它。这里要用到 props 选项：
  export default {
  props: ['title']
  }</p>
  <parent />
  <p>当一个 prop 被注册后，可以像这样以自定义 attribute 的形式传递数据给它</p>
  <p>v-bind 语法 (:title="post.title") 来传递动态 prop 值的。当事先不知道要渲染的确切内容时，这一点特别有用。</p>
  <p>props的使用大多数是父亲传给儿子，仅有在传输常量集合体时才能实现儿子传给父亲</p>
  <p>在上述的两个例子中，我们只传入了字符串值，但实际上任何类型的值都可以作为 props 的值被传递。</p>
  <p>Vue 组件可以更细致地声明对传入的 props 的校验要求。比如我们上面已经看到过的类型声明，如果传入的值不满足类型要求，Vue 会在浏览器控制台中抛出警告来提醒使用者。这在开发给其他开发者使用的组件时非常有用。</p>
  <p>你可以使用default来让数组或者元素的默认值，单个元素使用default:，多个元素使用default(){}</p>
  <p>如果想要在不传参的情况下就不显示，那么你可以在props的组件中使用required:true,这样会让你在没收到传参时不显示在页面上</p>
  <p>所有 prop 默认都是可选的，除非声明了required: true。除Boolean外的未传递的可选prop将会有一个默认值undefined。</p>
  <p>最后，props是静态的，只能传递数据，无法传递方法</p>
</template>

<script>
import parent from "./components/component/VueParents.vue";
export default{
  data(){
    return{
    }
  },
  components:{
    parent
  }
}
</script>