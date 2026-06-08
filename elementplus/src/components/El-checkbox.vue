<template>
  <h3>单选框el-radio</h3>
  <el-radio v-model="sex" value="1">男</el-radio>
  <el-radio v-model="sex" value="2">女</el-radio>
  <p>你选择的性别是：{{ sex }}</p>
  <el-checkbox v-model="level" value="1">初级</el-checkbox>
  <el-checkbox v-model="level" value="2">中级</el-checkbox>
  <el-checkbox v-model="level" value="3">高级</el-checkbox>
  <p>你选择的等级是：{{ level }}</p>
  
  <p>单选框组el-radio-group</p>
  <el-radio-group v-model="sex" @change="changeSexed">
    <el-radio value="1">男</el-radio>
    <el-radio value="2">女</el-radio>
  </el-radio-group>
  <p>单选框与单选框组其实都是做同一件事情，只是单选框组相对更加简单</p>
  
  <p>复选框el-checkbox,复选框与单选框类似，只是复选框可以选中多个,复选框需要绑定一个数组即ref([''])</p>
  <el-checkbox v-model="level" label="1">初级</el-checkbox>
  <el-checkbox v-model="level" label="2">中级</el-checkbox>
  <el-checkbox v-model="level" label="3">高级</el-checkbox>
  <p>你选择的等级是：{{ level }}</p>

  <p>复选框组el-checkbox-group</p>
  <el-checkbox-group v-model="level" @change="changeLeveled">
    <el-checkbox value="1">初级</el-checkbox>
    <el-checkbox value="2">中级</el-checkbox>
    <el-checkbox value="3">高级</el-checkbox>
  </el-checkbox-group>

  <p>绑定事件通过@change事件来实现</p>
  <el-radio v-model="sex" value="1" @change="changeSex">男</el-radio>
  <el-radio v-model="sex" value="2" @change="changeSex">女</el-radio>


  <p>单选框和复选框通过disabled属性设置禁用状态</p>
  <p>单选框和复选框通过readonly属性设置只读状态</p>
  <p>单选框和复选框通过size属性设置尺寸</p>
  <p>单选框和复选框通过label属性设置标签</p>
  <p>单选框和复选框通过label-width属性设置标签宽度</p>
  <p>单选框和复选框通过label-position属性设置标签位置</p>
</template>

<script setup>
import { ref } from 'vue'
const sex = ref('1')
const level = ref(['1'])

const changeSex = (e) => {
  console.log(e)
}


const changeSexed = (e) => {
  console.log(e)
}
</script>