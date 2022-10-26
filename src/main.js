import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './state'
import 'nprogress/nprogress.css'
import './service/axiosInterceptorSetUp.js'

createApp(App).use(router).use(store).mount('#app')
