import Vue from 'vue'
import Router from 'vue-router'
/* import HelloWorld from '@/components/HelloWorld' */
import pages from '@/components/pages'
import pages2 from '@/components/pages2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pages',
      component: pages
    },
    {
      path: '/pages2',
      name: 'pages2',
      component: pages2
    }
  ]
})
