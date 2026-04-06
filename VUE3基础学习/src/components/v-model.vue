<template>
  <h3>表单输入绑定</h3>
  <p>在前端处理表单时，我们常常需要将表单输入框的内容同步给 JavaScript 中相应的变量。手动连接值绑定和更改事件监听器可能会很麻烦</p>
  <p>v-model指令帮我们简化了这一步骤：</p>
  <form>
    <input type="text" v-model="message">
  </form>
  <p>你在表单中输入什么，我就会读取什么：{{ message }}</p>
  <p>不单单是单选框，复选框也可以使用v-model</p>
  <input type="checkbox" id="checkbox" v-model="checked">
  <label for="checkbox">{{ checked }}</label>
  <p>v-model还有几个属性，常用的为lazy,number,tirm</p>
  <p>lazy让表单变得‘懒惰’，一般列表在鼠标失去焦点后就会读取数据，而使用lazy后只有当提交数据时才会改变数据<input type="text" v-model.lazy="message"></p>
  <p>number只能读取表单中的数字<input type="text" v-model.number="message"></p>
  <p>trim能够跳过表单中的空格<input type="text" v-model.trim="message"></p>
</template>

<script> 
export default{
  data(){
    return{
        message:"",
        checked:false
    }
  }
}
</script>