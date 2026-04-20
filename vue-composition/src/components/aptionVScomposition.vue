<template>
  <h3>组合式API与选项式API的区别</h3>
  <p>1.Vue 2 是选项式 API，代码按 data、methods、computed等选项组织，逻辑分散，复用依靠mixins。<br>Vue 3引入组合式API，允许按逻辑关注点（如用户、请求、列表）组织代码，逻辑复用更清晰。同时，Vue 3 仍完全支持选项式API。</p>
  <p>2.Vue 3采用了Tree-shaking的优化，通过import {内加入想导出的方法} from “vue” 导出，未使用的功能不会被打包，产出更小。<br>而Vue2中是整体导出，无法摇树。</p>
  <p>3.Vue 3中script方法可以单独提取出来，放在其他文件中，使得文件更加精炼。Vue 2无法单独提取，使得文件十分臃肿</p>
</template>
<script setup>

</script>