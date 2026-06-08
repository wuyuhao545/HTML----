<template>
<h3>输入框</h3>
<p>输入框通过v-model绑定数据，placeholder属性设置输入框的提示文字，cleanable属性设置输入框的清除按钮</p>
<p>show-password属性设置密码输入框的显示密码按钮,rows属性设置输入框的行数,cols属性设置输入框的列数</p>
<p>placeholder-class属性设置输入框的提示文字样式,maxlength属性设置输入框的最大长度,show-word-limit属性设置输入框的显示字数限制</p>
<p>prefix-icon属性设置输入框的前缀图标,suffix-icon属性设置输入框的后缀图标</p>
<p>clearable属性设置输入框的清除按钮,size属性设置输入框的大小</p>
<p>type属性设置输入框的类型,autocomplete属性设置输入框的自动完成</p>
<p>placeholder属性设置输入框的提示文字,placeholder-style属性设置输入框的提示文字样式</p>
<p>输入框也可以设置尺寸</p>
<div style="width:300px" @select="selected">
    <p>输入框</p>
    <el-input v-model="name" placeholder="请输入用户名" cleanable />
    <p>密码输入框</p>
    <el-input v-model="password" placeholder="请输入密码" show-password/>
    <p>内容输入框</p>
    <el-input v-model="content" placeholder="请输入内容" rows="2"/>
    <p>URL输入框</p>
    <el-input v-model="name" placeholder="请输入URL1" maxlength="10" size="large" show-word-limit/>
    <el-input v-model="password" placeholder="请输入URL2" size="medium"/>
    <p>邮箱输入框</p>
    <el-input v-model="email" placeholder="请输入邮箱" size="small"/>
</div>

<h3>前缀和后缀</h3>
<p>前缀和后缀可以通过#prepend和#append属性来设置</p>
<el-input v-model="url1">
    <template #prepend>https://</template>
</el-input> 
<el-input v-model="url2">
    <template #append>.com</template>
</el-input>

</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const password = ref('')
const content = ref('');
const url1 = ref('wuyuhao.com');
const url2 = ref('wus.com');
//const email = ref('123456');

 const selected = ref('2');
</script>
