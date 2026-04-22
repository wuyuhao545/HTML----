<template>
  <h3>组合式API-子组件</h3>
  <p>{{ title }}</p>
  <p>{{ age }}</p>
  <button @click="sendMessageHandler">发送数据</button>
</template>

<script setup>
import {ref} from "vue"
const title = " "
const age = "20"
const message = ref("子组件数据")
const emit = defineEmits(["onSomeEvent"])
defineProps({
  title:{
    type:String,
    default:""
  },
  age:{
    type:Number,
    default:0
  }
})

function sendMessageHandler(){
  emit("onSomeEvent",message.value)
}
</script>