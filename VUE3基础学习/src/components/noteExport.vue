<template>
   <h3 v-pre>{{}}模板语法</h3>
   <p>最基本的数据绑定形式是文本插值，它使用的是“Mustache”语法 (即双大括号),双大括号标签会被替换为相应组件实例中 msg 属性的值。同时每次 msg 属性更改时它也会同步更新。</p>
   <p>我将展示msg：{{msg}}</p>  
   <p v-pre>使用选项式API时，需要在script标签中加入：export default{data(){return{你想输出元素的名字:你想输出的元素}}}</p>
   <p v-pre>每个绑定仅仅支持单一表达式，即一段能够被求值的，能够写在return内部不报错的JS代码,例如令number=9，{{number+1}}是有值的那么他就可以被输出,同样的可以输出三目运算符和有结果，有返回值的函数"</p>
   <p>我输出number+1:{{number + 1}}</p>
   <p>var = 1就不能输出，因为这是一段语句，没有返回值。if条件控制也不行，因为if是一个两行的语句（一行条件判断，一行输出）</p>
   <h3>原始HTML语法</h3>
   <p>双花大括号会将数据插值渲染为文本，如果想要插入html语句，你需要使用v-html指令</p>
   <p>我使用双花大括号渲染ralHTML内容：{{ ralHTML }}</p>
   <p>我将使用v-html渲染ralHTML内容：<span v-html="ralHTML"></span></p>
   <p style="color:red;">安全警告:在网站上动态渲染任意 HTML 是非常危险的，因为这非常容易造成 XSS 漏洞。请仅在内容安全可信时再使用 v-html，并且永远不要使用用户提供的 HTML 内容。</p>
</template>

<script>
export default{
  data(){
    return{
      number:9,
      msg:"我将会被展示",
      ralHTML:"<a herf='https://www.baidu.com'>点击进入百度</a>"
    }
  }
}
</script>
