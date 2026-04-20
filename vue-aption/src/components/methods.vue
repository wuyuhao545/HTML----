<template>
  <h3>事件处理</h3>
  <p>我们可以使用v-on(简写为@)指令来监听DOM事件，并在事件触发时执行对应的JS</p>
  <p v-pre>通过v-on:click="事件名称"或@click="事件名称",事件处理器“”内的值可以是事件被触发时的简单JS语句，也可以是指向组件上定义的方法的属性名或路径</p>
  <button @dblclick="count++">Add 1</button>
  <p>Count is:{{ count }} 其中@click里就是count++</p>
  <button @click="addcount">Add 1</button>
  <p>Count is:{{ count }} methods是与data平级的属性，你需要将所有方法写入methods里</p>
  <p>VUE选项式API中，所有的data内属性都可以用this来读取</p>
  <h3>事件传参</h3>
  <p>无传参方法可以获取event对象和通过事件传递数据，每一个事件中都有一个对象‘e’，我们需要通过字母e来获取event,而这个event就是JS里的event，它同样拥有方法target</p>
  <p>当你在有传参的方法中，无法直接添加event元素，我们能够通过在传参事件中加入$event来实现传入event</p>
  <p @click="getName(item,$event)" v-for="(item,index) of names" :key="index">{{ item }}</p>
  <h3>事件修饰符</h3>
  <p>在处理事件时调用在处理事件时调用event.preventDefault()或event.stopPropagation()是很常见的。尽管我们可以直接在方法内调用，但如果方法能更专注于数据逻辑而不用去处理 DOM 事件的细节会更好。</p>
  <p>为了解决这一问题，vue提供了事件修饰符，常用的有以下几个</p>
  <h4>1.prevent</h4>
  <a @click.prevent="onclick" href="https://baidu.com">百度官网</a>
  <p>一般而言，上面的网站点击后会跳转到百度，但如果我们不想让他跳转，则需要用event.preventDefault()来阻止默认事件</p>
  <p>但在VUE中，你可以在事件响应@后加入.prevent来实现event.preventDefault()功能</p>
  <h4>2.stop</h4>
  <p>stop用来阻止事件冒泡，如果你通过父元素调用子元素，则你可以用stop来阻止父元素的事件被再次调用（这里不再演示效果）</p>
</template>

<script>
export default{
  data(){
    return{
      count:0,
      names:["wu","yu","hao"],
    }
  },
  methods:{
    addcount(e){ 
      e.target.innerHTML = "Add" + this.count
      this.count+=1
    },
    getName(name,e){
      console.log(name,e)
    },
    onclick(){
      alert("点击了")
    }
  }
}
</script>
