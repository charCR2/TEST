import Vue from 'vue'
import Router from 'vue-router'
import pages from '@/components/pages'
import pages2 from '@/components/pages2'
import login from '../login/login.vue'
import home from '../home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children:[
        {
          path: '/pages',
          name: 'pages',
          component: pages
        },
        {
          path: '/pages2',
          name: 'pages2',
          component: pages2
        }
      ]
    },

  ]
})
