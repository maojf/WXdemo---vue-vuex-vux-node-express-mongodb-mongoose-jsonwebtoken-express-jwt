import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  /* 
  权限AUTHORITY:  1、需要登录并需要权限
                  2、需要登录
  */
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/class',
      name: 'Class',
      component: (resolve) => require(['@/components/page/Class/Class'], resolve),
      meta:{AUTHORITY:1}
    },
    {
      path: '/user',
      name: 'User',
      component: (resolve) => require(['@/components/page/User/User'], resolve)
    },
    {
      path: '/user/login',
      name: 'Login',
      component: (resolve) => require(['@/components/page/User/Login'], resolve)
    },
    {
      path: '/msg',
      name: 'Msg',
      component: (resolve) => require(['@/components/page/Message/Message'], resolve)
    },


    {
      path: '/demo',
      name: 'demo',
      component: (resolve) => require(['@/components/page/demo'], resolve)
    }
  ]
})
