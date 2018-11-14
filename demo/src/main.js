// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import mixins from './utils/mixins'
import  { ToastPlugin } from 'vux'
import  { AlertPlugin } from 'vux'


import './router/routerHook'
import '@/style/public.less'

Vue.config.productionTip = false

Vue.use(mixins)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
