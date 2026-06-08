<script setup>
import { ref,reactive} from 'vue'
const select = ref('')  
const selects = ref([''])
const options = reactive([
  { value: '1', label: '选项1' },
  { value: '2', label: '选项2' },
  { value: '3', label: '选项3' },
])
</script>

<template>
  <h3>选择框el-select</h3>
  <p>选择（下拉）框通过el-select标签来创建，通过el-option标签来创建选项，通过v-model绑定数据，placeholder属性设置选择框的提示文字</p>
  <el-select v-model="select" placeholder="请选择">
    <el-option value="1">选项1</el-option>
    <el-option value="2">选项2</el-option>
    <el-option value="3">选项3</el-option>
  </el-select>

  <p>动态下拉框</p>
  <el-select v-model="select" placeholder="请选择">
    <el-option v-for="item in options" :key="item.value" :value="item.value" :label="item.label">
      {{ item.label }}
    </el-option>
  </el-select>

  <p>多选下拉框</p> 
  <p>多选下拉框通过multiple属性来实现，需要绑定一个数组即ref(['']),数组中的值为下拉框的值</p>
  <el-select v-model="selects" placeholder="请选择" multiple>
    <el-option v-for="item in options" :key="item.value" :value="item.value" :label="item.label">
      {{ item.label }}
    </el-option>
  </el-select>
</template>