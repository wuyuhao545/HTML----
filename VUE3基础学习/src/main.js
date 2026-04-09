import { createApp } from 'vue'
import App from './App.vue'
import watcher from './components/WatchVue.vue'

const app = createApp(App)
app.component("VueWatcher", watcher)

app.mount('#app')
