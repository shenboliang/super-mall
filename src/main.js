import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mitt from "mitt"
//导入懒加载 插件模块
// import  vueLazy from 'vue-lazyload'
//导入 fastclick 库，用于解决移动端300ms延迟问题
import fastclick from 'fastclick'

require('./assets/css/base.css')

createApp(App).use(store).use(router).mount('#app')
const app = createApp(App)
app.config.globalProperties.$EventBus = new mitt()

fastclick.attach(document.body)
