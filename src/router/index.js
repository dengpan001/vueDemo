import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import  table from '@/components/table'
import  card from '@/components/card'
import  meter from '@/components/meter'
import  parameter from '@/components/parameter'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',redirect: '/HelloWorld'
      // name: 'HelloWorld',
      // component: HelloWorld
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/iview/table',
      name:'table',
      component:table
    },
    {
      path:'/iview/card',
      name:'card',
      component:card
    },
    {
      path:'/meter',
      name:'meter',
      component:meter
    },
    {
      path:'/parameter',
      name:'parameter',
      component:parameter
    }
  ]
})
