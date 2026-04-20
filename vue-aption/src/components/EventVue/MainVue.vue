<template>
  <h3>我是主页</h3>
  <p>搜索内容为{{ search }}</p>
  <Search @searchEvent="getSearch"/>
</template>
<script>
import Search from './searchVue.vue'
export default{
    data(){
        return{
            search:""
        }
    },
    components:{
      Search 
    },
    methods:{
        getSearch(data){
            this.search = data ;
        }
    }
 
}
</script>