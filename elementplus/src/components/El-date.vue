<script setup>
import { ref } from 'vue'
const date = ref('')
</script>

<template>
  <h3>日期选择器el-date-picker</h3>
  <p>日期选择器通过el-date-picker标签来创建，通过v-model绑定数据，placeholder属性设置日期选择器的提示文字</p>
  <p>你可以改变type属性来选择不同的日期选择器</p>
  <p>data</p>
  <el-date-picker v-model="date" placeholder="请选择日期" />
  <p>datatime</p>
  <el-date-picker type="datetime" v-model="date" placeholder="请选择日期时间" />
  <p>可以通过value-format属性来设置日期时间的格式</p>
  <el-date-picker type="datetime" v-model="date" value-format="YYYY-MM-DD HH:mm:ss" placeholder="请选择日期时间" />
  <p>你选择的时间{{ date }}</p>
</template>