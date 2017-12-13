import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Demo from '@/components/Demo'
import Registration from '@/components/registration/Registration'
import Login from '@/components/login/Login'
import Analyze from '@/components/Analyze'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/demo',
      name: 'demo',
      component: Demo
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/analyze',
      name: 'analyze',
      component: Analyze
    }
  ]
})
