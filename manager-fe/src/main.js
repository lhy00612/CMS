import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
// import axios from 'axios'
// import config from './config'
import request from './utils/request'
import storage from './utils/storage'
import App from './App.vue'

console.log("环境变量=>", import.meta.env);
const app = createApp(App)
app.config.globalProperties.$request = request;
app.config.globalProperties.$storage = storage;
app.use(router).use(ElementPlus).mount('#app')
