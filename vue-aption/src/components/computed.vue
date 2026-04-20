<template>
  <h3>计算属性</h3>
  <p>{{ wuyuhao.age }}</p>
  <p>{{ wuyuhao.content.length > 0 ? 'Yes' : 'No' }}</p>
  <p>如果我们在模板中多次使用需要运算的表达式，那么这种运算符多了后会导致程序变得复杂，因此VUE给了一种叫computed的计算属性，它与data同级</p>
  <p>我们在这里使用computed里的wuyuhaocontent方法，也可以得到上面三目运算符的方法</p>
  <p>{{ wuyuhaocontent }}</p>
  <p>当然，上述的wuyuhaocontent方法在methods中调用是同样生效，但从methods和computed调用是有区别的</p>
  <p>不同之处在于计算属性值会基于其响应式依赖被缓存。一个计算属性仅会在其响应式依赖更新时才重新计算。<br>
  这意味着只要wuyuhao.content不改变，无论多少次访问contenter都会立即返回先前的计算结果，而不用重复执行计算属性(getter)中的函数。<br>
  如果是放在methods里则每次使用里面的方法时，methods都会重新刷新，重新计算结果</p>
</template>

<script>
export default{
  data(){
    return{
      wuyuhao:{
        age:21,
        content:["前端","Java","Python"]
      }
    }
  },
  computed:{
    wuyuhaocontent(){
      return this.wuyuhao.content.length > 0 ? "Yes" : "No"
    }
  }
}
</script>