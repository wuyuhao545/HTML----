<template>
  <h3>class样式绑定</h3>
  <p>class是CSS样式中的一种，我们可以使用v-bind来绑定，但是当我们在处理比较复杂的绑定时，通过这种拼接生成字符串是麻烦且容易出错的</p>
  <p>因此Vue专门为class的v-bind用法提供了特殊的功能增强，除字符串外，表达式的值也可以是对象或者数组</p>
  <p :class="{ 'active':isActive , 'text-danger':haserror }" :key="index">Class样式绑定</p>
  <p v-pre>例如 :class="{ 'active':isActive , 'text-danger':haserror }" class可以接收对象类型，由后面那个值来决定前面的样式是否生效</p>
  <p>同样的我们可以绑定多个属性的值或多个对象，在:class后面加入对象名字，在对象名字里加入你要加入的属性</p>
  <p :class="classobject">Class样式绑定2</p>
  <p>除了绑定对象，class还可以绑定数组，在:class后可以加入数组，在数组中引用data里的数据</p>
  <p :class="[arrActive,arrHaserror]">class样式绑定3</p>
  <p>数组中也可以放三目运算符</p>
  <p :class="[isActive ? 'active' : '']">Class样式绑定4</p> 
  <p>当然，还有一种更复杂的方式，就是在数组中嵌套对象表达式，且只能是数组[]嵌套对象{}</p>
  <p :class="[isActive ? 'active' : '',{'text-danger':haserror}]">Class样式绑定5</p>
</template>

<script>
export default{  
  data(){
    return{
      isActive:true,
      haserror:true,
      classobject:{
        'active':true,
        'text-danger':true
      },
      arrActive:"active",
      arrHaserror:"text-danger"
    }
  }
}
</script>

<style>
  .active{
    font-size:30px;
  }
  .text-danger{
    color:red;
  }
</style>