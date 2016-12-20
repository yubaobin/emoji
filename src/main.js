/**
 * 入口文件
 */


// 引用Vue
import Vue from 'vue'
// 入口文件为 src/App.vue 文件 所以要引用
import App from './App'
// 引用路由
import VueRouter from 'vue-router'
// 引用路由配置文件
import routes from './config/routes'
//使用路由
Vue.use(VueRouter);

// 使用配置文件规则
const router = new VueRouter({
  routes
})

new Vue({
  router,
  el: '#app',
  render:(h) => h(App)
})
