<template>
  <h3>模板引用</h3>
  <div class="container">{{ content }}</div>
</template>

<script> 
export default{
  data(){
    return{
        content:"内容",
    }
  }
}
</script>