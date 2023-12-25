import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import myPlugin from './plugin/my-plugin'
createApp(App).use(router).use(store).use(ElementPlus).use(myPlugin).mount('#app')
