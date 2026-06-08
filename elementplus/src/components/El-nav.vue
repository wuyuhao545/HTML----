<template>
<h3>这是导航栏组件，用于显示导航栏</h3>
<p>通过el-menu标签来创建导航栏，通过el-menu-item标签来创建菜单项，通过el-sub-menu标签来创建子菜单</p>
<p>el-menu中mode决定导航栏的样式:水平导航栏horizontal 垂直导航栏vertical 内联导航栏inline</p>
<p>default-active:默认激活的菜单项</p>
<p>default-openeds:默认展开的子菜单</p>
<p>@select:选择菜单项时触发</p>
    <!-- 水平导航栏 - 添加 default-openeds -->
    <el-menu 
        mode="horizontal" 
        :default-active="selectedIndex" 
        :default-openeds="defaultOpeneds"
        @select="Selected">
        <el-menu-item index="1">首页</el-menu-item>
        <el-sub-menu index="2">
            <template #title>我的工作</template>
            <el-menu-item index="2-1">首页</el-menu-item>
            <el-menu-item index="2-2">关于</el-menu-item>
            <el-menu-item index="2-3">联系</el-menu-item>
        </el-sub-menu>
    </el-menu>
<p>el-menu也可以设置内置样式，通过background-color属性来设置背景颜色，通过text-color属性来设置文字颜色，通过active-text-color属性来设置激活时的文字颜色，并可以通过</p>
        <el-menu mode="vertical" :default-active="selectedIndex" @select="Selected" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" 
        style="width: 200px;">
        <el-menu-item index="1">首页</el-menu-item>
        <el-sub-menu index="2">
            <template #title>我的工作</template>
            <el-menu-item index="2-1">首页</el-menu-item>
            <el-menu-item index="2-2">关于</el-menu-item>
            <el-menu-item index="2-3">联系</el-menu-item>
        </el-sub-menu>
        </el-menu>

        <p>面包屑导航栏，通过el-breadcrumb标签来创建面包屑导航栏，通过el-breadcrumb-item标签来创建面包屑导航栏项</p>
        <el-breadcrumb>
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/about' }">关于</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/contact' }">联系</el-breadcrumb-item>
        </el-breadcrumb>

        <p>默认展示的导航索引，通过default-openeds属性来设置默认打开的子菜单，通过default-active属性来设置默认激活的菜单项</p>

</template>
<script setup> 
import {ref } from 'vue'
const selectedIndex = ref("2-2") //默认激活的菜单项 

const Selected = (index,indexPath) => {console.log(index,indexPath)}//选择菜单项时触发

const defaultOpeneds = ref(["2"])  // 默认展开 index="2" 的子菜单
</script>