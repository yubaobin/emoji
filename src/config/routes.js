// 引用模板
import index from 'components/index'
import content from 'components/content'

// 配置路由
export default [
  {
    path: '/',
    component: index
  },
  {
    path: '/content/:id',
    component: content
  }
]