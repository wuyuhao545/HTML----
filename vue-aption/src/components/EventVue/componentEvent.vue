<template>
    <h3>我是父组件</h3>
    <ChildEvent @someEvent="getHandle" />
    <p>{{ message }}</p>
</template>
<script>
import ChildEvent from './ChildEvent.vue'
export default{
    data(){
        return{
            message:""
        }
    },
    components:{
        ChildEvent
    },
    methods:{
        getHandle(data){
            console.log("触发了子组件的事件",data)
        }
    }
}
</script>