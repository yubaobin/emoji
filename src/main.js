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
import router from './config/routes'
//过滤器
import filter from 'filter/filter'
//网络请求
import VueResource from 'vue-resource'

//使用路由
Vue.use(VueRouter);
//使用网络请求
Vue.use(VueResource);

Vue.proto
new Vue({
  router,
  el: '#app',
  render:(h) => h(App),
  created:function(){
  	console.log("created");
  }
})
