//每一个vue都通过createApp来创建应用实例对象
import { createApp } from 'vue'
const app = createApp(App)
//app:Vue的实例对象，每一个Vue项目中，有且只有一个实例对象
import App from './App.vue'
//App就是根组件，其他的组件都是根组件的子组件
app.mount('#app')
//使用app.mount挂载文件，这样才会渲染你的app.vue
//在浏览器中能够直接被运行的有HTML，CSS，JS，Image
app.component("VueWatcher", watcher)
app.provide("globeData","我是全局数据")
import watcher from './components/WatchVue.vue'