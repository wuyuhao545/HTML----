<template>
    <h1>Element Plus学习</h1>
    <p>Element Plus是一个基于Vue 3的UI组件库，提供了丰富的组件和功能，可以快速构建现代化的Web应用程序。</p>
    <p>Element Plus的组件库包含了各种常用的UI组件，如按钮、输入框、表格、对话框等，可以满足各种需求。</p>
    <p>要使用Element Plus，首先需要安装它。可以使用npm或yarn来安装：</p>
    <p>npm install element-plus --save</p>
    <p>yarn add element-plus</p>
    <p>安装完成后，需要在main.js中引入Element Plus：</p>
    <p>import ElementPlus from 'element-plus'</p>
    <p>import 'element-plus/dist/index.css'</p>
    <p>app.use(ElementPlus)</p>
    <p>这样就可以使用Element Plus的组件了。</p>
  
    <h2>按钮属性</h2>
    <p>按钮有分为不同的按钮类型，当然如果不加入js方法，那么他们除了颜色不同其他功能均相同，通过type来进行设置</p>
    <el-button>默认按钮，没有具体颜色</el-button>
    <el-button type="primary">主要按钮，蓝色</el-button>
    <el-button type="success">成功按钮，绿色</el-button>
    <el-button type="warning">警告按钮，黄色</el-button>
    <el-button type="danger">危险按钮，红色</el-button>
    <el-button type="info">信息按钮，灰色</el-button>
    <hr>
    <p>按钮也分为不同样式，通过plain,round,circle,disabled,loading,link,text来进行设置</p>
    <el-button plain>朴素按钮</el-button>
    <el-button round>圆角按钮</el-button>
    <el-button circle>圆形按钮</el-button>
    <el-button disabled>禁用按钮</el-button>
    <el-button loading>加载按钮</el-button>
    <el-button link>链接按钮</el-button>
    <el-button text>文本按钮，没有边框</el-button>
    <hr>
    <p>按钮也分为不同大小，通过size来进行设置</p>
    <el-button size="large">大按钮</el-button>
    <el-button size="default">中按钮</el-button>
    <el-button size="small">小按钮</el-button>
    <hr>
    
    <h3>按钮组</h3>
    <el-button-group>
        <el-button>
            <el-icon><Plus /></el-icon>
            按钮1
        </el-button>
        <el-button>
            <el-icon><Minus /></el-icon>
            按钮2
        </el-button>
        <el-button>
            <el-icon><Edit /></el-icon>
            按钮3
        </el-button>
    </el-button-group>
    <p>按钮组可以通过el-button-group标签来实现，按钮组中的按钮可以通过el-button标签来实现</p>
    <p>按钮组中的按钮可以通过el-button标签来实现，按钮组中的按钮可以通过el-button标签来实现,想要加入按钮内容可以直接嵌套实现</p>
</template>
<script setup>
 </script>