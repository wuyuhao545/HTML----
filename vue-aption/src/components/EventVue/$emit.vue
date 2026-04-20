<template>
  <h3>组件事件$emit</h3>
  <p>在组件的模板表达式中，可以直接使用$emit方法触发自定义事件,相较于props，$emit能够子传父</p>
  <component-event />
</template>


<script>
import componentEvent from './components/EventVue/componentEvent.vue';

export default{
  components:{
    componentEvent
  }
}
</script>