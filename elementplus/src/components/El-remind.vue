<template>
    <p>这是消息提示组件，用于显示消息提示</p>
  <el-button @click="openMsg">消息</el-button>
  <el-button @click="openConfirm">确认框组件，用于显示确认框</el-button>
  <el-button @click="openNotify">通知组件，用于显示通知</el-button>   
  <el-button @click="openAlert">警告组件，用于显示警告</el-button>
</template>

<script setup>
import { ElMessage, ElMessageBox, ElNotification} from 'element-plus'
const openMsg = () => {
  ElMessage({
  type:"success",//消息类型  success | warning | info | error
  message:"这是一条成功消息",//消息内容 
  showClose:true,//是否显示关闭按钮
  duration:1500 ,//消息显示时间
  position:"top-right"//消息显示位置
  })
}
const openConfirm = () => {
  ElMessageBox.confirm('这是一条确认框消息', '提示', {
    confirmButtonText: '确定', //确定按钮文本
    cancelButtonText: '取消', //取消按钮文本
  }).then(() => {//确定按钮点击事件
    ElMessage.success('确定')//确定按钮点击事件
  }).catch(() => {//取消按钮点击事件
    ElMessage.error('取消')//取消按钮点击事件
  })
}
const openNotify = () => {
  ElNotification.success('这是一条通知消息')
}

  // 替换原有的 openAlert 函数
const openAlert = () => {
  ElMessage.warning('这是一条警告消息')
}


</script>