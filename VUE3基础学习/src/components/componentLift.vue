<template>
  <h3>组件生命周期</h3>
  <p>每个 Vue 组件实例在创建时都需要经历一系列的初始化步骤，比如设置好数据侦听，编译模板，挂载实例到 DOM，以及在数据改变时更新 DOM。</p>
  <p>在此过程中，它也会运行被称为生命周期钩子的函数，让开发者有机会在特定阶段运行自己的代码。生命周期如图所示：</p>
  <img src="./assets/生命周期.png" alt="组件生命周期">
  <p>使用console.log后你可以发现，组件的创建和渲染都是自动开始的，直接就执行了四个代码</p>
  <p>{{ message }}</p>
  <button @click="updateHandle">点击我更新数据</button>
  <p>点击按钮后，可以发现组件内的数据获得了更新，组件成功的运行了beforeUpdate和updated。</p>
  <p>组件的生命周期会随着你对Vue了解越来越多，变得越来越重要，接下来我们列举两个Vue生命周期的使用</p>
  <Users />
</template>


<script>
import Users from './components/component/UserComponents.vue'
export default{
  data(){
    return{
      message:"更新之前"
    }
  },
  methods:{
    updateHandle(){
      this.message = "更新之后"
    }
  },
  components:{
    Users,
  },
  beforeCreate(){
    console.log("组件创建之前")
  },
  created(){
    console.log("组件创建之后")
  },
  beforeMount(){
    console.log("组件渲染之前")
  },
  mounted(){
    console.log("组件渲染之后")
  },
  beforeUpdate(){
    console.log("组件更新之前")
  },
  updated(){
    console.log("组件更新之后")
  },
  beforeUnmount(){
    console.log("组件销毁之前")
  },
  unmounted(){
    console.log("组件销毁之后")
  }
}

</script>