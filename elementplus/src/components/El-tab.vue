<template>
    <h3>dengruicode.com</h3>
  
    <h3>标签页</h3>
    <el-tabs v-model="selectedName" @tab-click="tabClick">
      <el-tab-pane 
        v-for="item in tab.arr" 
        :key="item.name"
        :label="item.title" 
        :name="item.name"
      >
        {{ item.content }}
      </el-tab-pane>
    </el-tabs>

    <p>标签也能够实现动态添加和删除，通过addTab和removeTab方法来实现</p>
    <el-button @click="addTab">添加标签</el-button>
    <el-button @click="removeTab">删除标签</el-button>
    <el-tabs v-model="selectedName" @tab-click="tabClick" type="card" >
      <el-tab-pane 
        v-for="item in tab.arr" 
        :key="item.name"
        :label="item.title" 
        :name="item.name"
      >
        {{ item.content }}
      </el-tab-pane>
    </el-tabs>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue'
  
  // 默认选中的标签名称
  const selectedName = ref("2")
  
  // 选中标签触发的回调
  const tabClick = (tab, event) => {
      console.log("tab", tab.props, "event", event)
  }
  
  const tab = reactive({
      arr: [
          { name: "1", title: '邓瑞', content: '内容1' },
          { name: "2", title: '邓瑞编程', content: '内容2' },
          { name: "3", title: 'dengruicode.com', content: '内容3' },
      ]
  })

  const addTab = () => {
    tab.arr.push({ name: "4", title: '新标签', content: '新内容' })
  }
  const removeTab = () => {
    tab.arr.pop()
  }
  </script>
  
  <style scoped>
  </style>