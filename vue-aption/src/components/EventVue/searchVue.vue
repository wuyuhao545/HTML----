<template>
  <input type="text" v-model="search">
</template>
<script>
export default{
    data(){
        return{
            search:""
        }
    },
    watch:{
        search(newValue){
            this.$emit("searchEvent",newValue)
        }
    }
}
</script>