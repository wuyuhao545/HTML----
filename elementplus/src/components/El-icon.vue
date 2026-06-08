<template>
  <h1></h1>
  <p>Element Plus提供了丰富的图标，可以通过el-icon标签来使用，但是使用图标需要先将图标从Element Plus的图标库中引入</p>
  <p>引入图标库的步骤如下：</p>
  <ul type="none">
    <li>1.在main.js中引入Element Plus的图标库</li>
    <li>import * as ElementPlusIconsVue from '@element-plus/icons-vue'//引入图标库</li>
    <li>for (const [key, component] of Object.entries(ElementPlusIconsVue)) {<br>app.component(key, component)//使用for循环迭代所有的ElementPlusIcon，将图标库中的图标注册到app中<br>}</li>
    <li>2.在组件中使用el-icon标签来使用图标</li>
  </ul>
  <h2>图标</h2>
  <el-icon><Plus /></el-icon>
  <el-icon><Minus /></el-icon>
  <el-icon><Edit /></el-icon>
  <el-icon><Delete /></el-icon>

  <h3>图标属性</h3>
  <el-icon size="20" color='red'><Search /></el-icon>
  <p>图标大小通过size属性设置，颜色通过color属性设置</p>

  <h3>图标嵌套</h3>
  <el-button type="primary">
    <el-icon><Search /></el-icon>
    <span>搜索按钮</span>
  </el-button>
  <p>图标嵌套内容通过template标签来实现，template标签的默认内容为图标</p>
</template>

<script setup>

</script>