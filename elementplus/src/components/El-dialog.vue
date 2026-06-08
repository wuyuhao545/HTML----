<script setup>

</script>

<template>
  <h3>对话框通过el-dialog标签来创建</h3>
  
    <el-button @click="openDialog">打开对话框</el-button>
    <el-dialog v-model="visible" title="对话框1" width="30%" height="30%" @close="closeDialog">
      <p>对话框内容</p>
    </el-dialog>
    <p>你可以设置draggable属性来让对话框变得可以拖拽</p>
    <el-dialog v-model="visible" title="对话框2" width="30%" height="30%" draggable @close="closeDialog">
        <el-form label-width="80" style="width: 500px;">
        <el-form-item label="文本框">
          <el-input v-model="data.name" placeholder="请填写名称" />
        </el-form-item>
  
      <el-form-item label="单选框">
        <el-radio-group v-model="data.radio">
          <el-radio label="1">前端</el-radio>
          <el-radio label="2">后端</el-radio>
          <el-radio label="3">服务端</el-radio>
        </el-radio-group>
      </el-form-item>
  
      <el-form-item label="复选框">
        <el-checkbox-group v-model="data.checkbox">
          <el-checkbox label="a">前端</el-checkbox>
          <el-checkbox label="b">后端</el-checkbox>
          <el-checkbox label="c">服务端</el-checkbox>
        </el-checkbox-group>
      </el-form-item>
  
      <!-- 新增：多选框 -->
      <el-form-item label="多选框">
        <el-select 
          v-model="data.multipleSelect" 
          multiple 
          placeholder="请选择多个"
          style="width: 100%"
        >
          <el-option value="A" label="前端" />
          <el-option value="B" label="后端" />
          <el-option value="C" label="服务端" />
          <el-option value="D" label="数据库" />
          <el-option value="E" label="运维" />
        </el-select>
      </el-form-item>
  
      <!-- 新增：文本域（多行文本） -->
      <el-form-item label="文本域">
        <el-input 
          v-model="data.textarea" 
          type="textarea" 
          :rows="4"
          placeholder="请输入详细描述信息..."
          show-word-limit
          maxlength="200"
        />
      </el-form-item>
  
      <el-form-item label="日期时间">
        <el-date-picker 
          v-model="data.date" 
          type="datetime" 
          value-format="YYYY-MM-DD HH:mm:ss" 
          placeholder="选择日期时间"
          style="width: 100%"
        />
      </el-form-item>
  
      <el-form-item label="下拉框">
        <el-select v-model="data.select" placeholder="请选择">
          <el-option value="A" label="前端" />
          <el-option value="B" label="后端" />
          <el-option value="C" label="服务端" />
        </el-select>
      </el-form-item>
  
      <!-- 按钮 -->
      <el-form-item label=" ">
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
    </el-dialog>
  </template>
  <script setup>
  import { ref } from 'vue'
  const visible = ref(false)
  const openDialog = () => {
    visible.value = true
  }

const closeDialog = () => {
  visible.value = false
}

import { reactive } from 'vue'
  import { ElMessage } from 'element-plus'
  
  // 表单数据
  const data = reactive({
    name: '',              // 文本框
    radio: '',             // 单选框
    checkbox: [],          // 复选框（数组）
    multipleSelect: [],    // 多选框（数组，允许多选）
    textarea: '',          // 文本域（多行文本）
    date: '',              // 日期时间
    select: ''             // 下拉框
  })
  
  // 提交表单
  const submitForm = () => {
    ElMessage.success({
      message: '提交成功！',
      duration: 2000
    })
    console.log('表单数据：', data)
  }
  
  // 重置表单
  const resetForm = () => {
    data.name = ''
    data.radio = ''
    data.checkbox = []
    data.multipleSelect = []
    data.textarea = ''
    data.date = ''
    data.select = ''
    ElMessage.info('已重置表单')
  }
  </script>