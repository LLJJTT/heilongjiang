import Vue from 'vue'
import Router from 'vue-router'
import Navbar from '@/components/navbar'
import HomePage from '@/components/homepage'
import Destination from '@/components/destination'
import Find from '@/components/find'
import My from '@/components/my'

Vue.use(Router)
export default new Router({
  // 去掉默认link-active样式
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/homepage',
      component: HomePage
    },
    {
      path: '/homepage',
      name: 'homepage',
      component: HomePage
    },
    {
      path: '/destination',
      name: 'destination',
      component: Destination
    },
    {
      path:'/find',
      name:'find',
      component:Find
    },
    {
      path: '/my',
      name: 'my',
      component: My
    }
  ]
})
