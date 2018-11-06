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
    }
  ]
})
