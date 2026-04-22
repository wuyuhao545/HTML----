<template>
  <h3>组合式API侦听器watch</h3>
  <p>在vue2中watch的方法十分复杂，在组合式中能够更加容易的实现</p>
  <p>{{ count }}</p>
  <button @click="addCountHandle">增加</button>
  <p>在vue3中，每个watch都是独立的，这样我们就能够将watch也独立成一份文件</p>
</template>
<script setup>
import {ref} from "vue"
import {watchcount} from "../utils/watch"
const count = ref(0);

function addCountHandle(e){
    count.value++;
    console.log(e)
}
watchcount(count)
/*watch(count,(newvalue,oldvalue)=>{
    console.log(newvalue,oldvalue)
})*/
</script>