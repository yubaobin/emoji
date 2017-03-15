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
import filter from './filter/filter'
//网络请求
// import VueResource from 'vue-resource' --不用v-resource
import axios from 'axios'
import VueAxios from 'vue-axios'
//手势
import VueTouch from 'vue-touch'
//Vuex state
import store from './store/index'
import api from './config/api'
//使用路由
Vue.use(VueRouter);
//使用网络请求
// Vue.use(VueResource);
Vue.use(VueAxios, axios);
//使用touch
Vue.use(VueTouch);
//使用filter
Vue.use(filter);
Vue.use(api);
//使用vuex
//Vue.use(Vuex);
new Vue({
  router,
  store,
  el: '#app',
  render:(h) => h(App),
  created:function(){
  	console.log("created");
  }
})
