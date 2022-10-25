import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import state from './state'

createApp(App).use(router).use(state).mount('#app')
