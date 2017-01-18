// 引用模板
import index from 'views/index'
import edittext from 'views/edittext'
// 引用路由
import VueRouter from 'vue-router'
// 配置路由
const routes = [  
  {
    path: '/',
    redirect:'/index'
  },
  {
    path: '/index',
    component: index
  },{
    path: '/edittext',
    component: edittext,
    beforeEnter:(to, from, next) => {
       if(router.app.$store.getters.getEditingElem.id){
          next();
       }else {
          next({redirect:'/index'});
       }
    }
  }
]

const router = new VueRouter({
  routes,
  //mode: 'history', //html5 history模式
  scrollBehavior(to, from, savedPosition){
    
  }
})

router.beforeEach((to, from, next) => {
  next();
})

export default router