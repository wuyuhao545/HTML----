<template>
  <div class="layout">
    <AppHeader>我的网站头部</AppHeader>
    <div class="container">
      <AppMain>
        <AppArticle>
          <h3>文章标题 1</h3>
          <p>这是第一篇文章的内容。</p>
        </AppArticle>
        <AppArticle>
          <h3>文章标题 2</h3>
          <p>这是第二篇文章的内容。</p>
        </AppArticle>
      </AppMain>
      <AppAside>
        <h3>侧边栏</h3>
        <ul>
          <li>链接一</li>
          <li>链接二</li>
        </ul>
      </AppAside>
    </div>
    <AppFooter>© 2025 我的网站</AppFooter>
  </div>
</template>

<script setup>
import AppHeader from '../components/componentslesson/AppHeader.vue'
import AppMain from '../components/componentslesson/AppMain.vue'
import AppAside from '../components/componentslesson/AppAside.vue'
import AppFooter from '../components/componentslesson/AppFooter.vue'
import AppArticle from '../components/componentslesson/AppArticle.vue'
</script>

<style>
/* 清除浮动，让容器包裹左右两栏 */
.container {
  overflow: hidden;
}
.layout {
  font-family: sans-serif;
}
</style>