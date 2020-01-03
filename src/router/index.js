import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SmartHome from '@/components/SmartHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: 'SmartHome',
      name: 'SmartHome',
      component: SmartHome
    },{
      path: 'speech',
      name: 'speech',
      component: Speech
    },{
      path: 'text',
      name: 'text',
      component: text
    }
  ]
})
