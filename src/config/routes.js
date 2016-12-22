// 引用模板
import index from 'components/Index'
import content from 'components/Content'
import login from 'components/Login'
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
    component: index,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/content/:id',
    component: content,
    alias:'/c/:id',//别名
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  next();
})

export default router