// 引入vue模块
import Vue from 'vue'
// 引入路由模块
import Router from 'vue-router'

// 引入首页组件
import Index from '@/components/Index'
// 引入公众号的组件
import Gzh from '@/components/Gzh'
// 引入我们组件
import Me from '@/components/Me'

// 引入全部主题列表的组件
import All from '@/components/topics/All'
import Good from '@/components/topics/Good'
import Dev from '@/components/topics/Dev'
import Share from '@/components/topics/Share'
import Ask from '@/components/topics/Ask'
import Job from '@/components/topics/Job' 

// 文章内容页
import Show from '@/components/topics/Show' 

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children:[
        {
          path:'/',
          component:All
        },
        {
          path:'good',
          component:Good
        },
        {
          path:'dev',
          component:Dev
        },
        {
          path:'share',
          component:Share
        },
        {
          path:'ask',
          component:Ask
        },
        {
          path:'job',
          component:Job
        },
        // 文章的详情页
        {
          path: 'show/:id',
          component: Show
        }  
      ]
    },
    {
      path: '/gzh',
      name: 'Gzh',
      component: Gzh
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    },
 

    // 路由跳转
    {
      path:'/*',
      redirect:'/index'
    }
  ]
})
