<template>
  <h3>组合式API事件实现</h3>
  <p>{{ count }}</p>
  <button @click="addCountHandle">增加</button>
</template>
<script setup>
import {ref} from "vue"
const count = ref(0);
function addCountHandle(){
    count.value++;
}
</script>