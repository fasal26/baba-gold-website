import { createApp } from 'vue'
import './style.css'
import { createRouter } from './router'
import App from './App.vue'
const router = createRouter()

createApp(App).use(router).mount('#app')
