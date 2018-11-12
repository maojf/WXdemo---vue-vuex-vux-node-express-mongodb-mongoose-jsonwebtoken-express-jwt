import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/class',
      name: 'Class',
      component: (resolve) => require(['@/components/page/Class/Class'], resolve)
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
      path: '/demo',
      name: 'demo',
      component: (resolve) => require(['@/components/page/demo'], resolve)
    }
  ]
})
