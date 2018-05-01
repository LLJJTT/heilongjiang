import Vue from 'vue'
import Router from 'vue-router'
import Destination from '@/components/destination'
import Find from '@/components/find'
import My from '@/components/my'
import Index from '@/components/index'
import Navbar from '@/components/navbar'
import HomePage from '@/components/homepage'
import Search from '@/components/search'
import Login from '@/components/login'
import Forget from '@/components/forget'
import Register from '@/components/register'
import AboutUs from '@/components/aboutus'
import Collection from '@/components/collection'
import Personal from '@/components/personalinfo'
import Details from '@/components/details'
import RecommendList from '@/components/recommendlist'
import Cityscenerylist from '@/components/cityscenerylist'
Vue.use(Router)
export default new Router({
  // mode: 'history',
  base: '/biyesheji/', //加上这一行
  // 去掉默认link-active样式
  linkActiveClass: 'active',
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/index',
    },{
      path:'/login',
      name:'login',
      component:Login
    },{
      path:'/register',
      name:'register',
      component:Register
    },{
      path:'/forget',
      name:'forget',
      component:Forget
    },{
      path:'/index',
      component:Index,
      children:[
        {
          path:'/',//就是加载的路径名字
          redirect: '/index/homepage'
        },
        {
          path: 'homepage',
          name: 'homepage',
          component: HomePage
        },
        {
          path: 'destination',
          name: 'destination',
          component: Destination
        },
        {
          path: 'search',
          name: 'search',
          component: Search
        },
        {
          path:'find',
          name:'find',
          component:Find
        },
        {
          path: 'my',
          name: 'my',
          component: My,
        },{
          path: 'aboutus',
          name: 'aboutus',
          component: AboutUs,
        },{
          path: 'collection',
          name: 'collection',
          component: Collection,
        },{
          path:'personalinfo',
          name:'personalinfo',
          component:Personal
        },{
          path:'details',
          name:'details',
          component:Details
        },{
          path:'recommendlist',
          name:'recommendlist',
          component:RecommendList
        },{
          path:'cityscenerylist',
          name:'cityscenerylist',
          component:Cityscenerylist
        }
      ]
    }
  ]
})
