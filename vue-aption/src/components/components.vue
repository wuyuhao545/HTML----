<template>
  <h3>{{message}}</h3>
  <p>我们一般会将VUE组件定义在一个单独的.vue文件中，这被称之为单文件组件</p>
  <p v-pre>组件本身由template，script,style三个标签组成，分别代表结构，方法和样式</p>
  <p>引用分为三个步骤 <ol type="1">
    <li>1.用import引入组件</li>
    <li>2.用components注入组件</li>
    <li>3.以标签的形式引入组件,我在下面文件引入VueAttribute作为组件</li>
    <Mycomponents />
    </ol>
    现在你就可以看到组件了</p>
    <p>如果在style标签中加入scoped，则会让当前样式只能被用于引用组件中，而不会被同步到App.vue里</p>
</template>

<script> 
import Mycomponents from "./components/VueAttribute.vue";
export default{
  data(){
    return{
        message:"组件基础组成",
    }
  },
  components:{
    Mycomponents
  }
}
</script>
