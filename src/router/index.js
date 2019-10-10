import Vue from 'vue'
import Router from 'vue-router'
import Redpacket from '@/pages/redpacket/Redpacket'
import Give from '@/pages/give/Give'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Redpacket',
      component: Redpacket
    },
    {
      path: '/give',
      name: 'Give',
      component: Give
    }
  ]
})
