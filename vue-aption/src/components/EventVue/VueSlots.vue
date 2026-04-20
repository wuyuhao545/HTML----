<template>
    <h3>我是子组件</h3>
    <slot></slot>
    <slot name="header">我是header插槽</slot>
    <slot name="main">我是main插槽</slot>
    <slot :msg="message"></slot>
</template>

<script>
export default{
    data(){
        return{
            message:"子组件内容"
        }
    }
}
</script>