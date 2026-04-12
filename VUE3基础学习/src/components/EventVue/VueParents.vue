<template>
<h4>父组件</h4>
<child title="parent数据1" demo="parent数据2" :okr="message" :age="age" :names="names" />
</template>

<script>
import child from "./VueChildren.vue";
export default{
data(){
    return{
      message:"动态数据",
      age:"20",
      names:["21","22","23"]
    }
},
  components:{
    child
  }
}

</script>