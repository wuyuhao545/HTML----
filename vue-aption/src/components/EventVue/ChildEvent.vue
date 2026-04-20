<template>
  <p>我是子组件</p>
  <button @click="clickEventHandle"></button>
</template>

<script>
export default{
    data(){
        return{
            msg:"child!"
        }
    },
    methods:{
        clickEventHandle(){
            this.$emit("someEvent",this.msg)
        }
    }
}

</script>