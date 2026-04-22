import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
app.directive("blue",{
  mounted(element){
    element.style.color = "blue"
  }
})
app.mount('#app')
