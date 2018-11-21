import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/components/Intro'
import Cards from '@/components/Cards'
import Thoughts from '@/components/Thoughts'
import Baby from '@/components/Baby'
import Outer from '@/components/Outer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Intro
    },
    {
      path: '/cards',
      name: 'Cards',
      component: Cards
    },
    {
      path: '/thoughts',
      name: 'Thoughts',
      component: Thoughts
    },
    {
      path: '/baby',
      name: 'Baby',
      component: Baby
    },
    {
      path: '/outer',
      name: 'Outer',
      component: Outer
    }
  ]
})
