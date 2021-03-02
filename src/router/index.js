import Vue from 'vue';
import Router from 'vue-router';
import Intro from '@/components/Intro.vue';
import Item from '@/components/Item.vue';
import Tem from '@/components/Tem.vue';
import Ack from '@/components/Ack.vue';
import Thoughts from '@/components/Thoughts.vue';
import Baby from '@/components/Baby.vue';
import Outer from '@/components/Outer.vue';
import Diet from '@/components/Diet.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Intro',
      component: Intro,
    },
    {
      path: '/foods',
      name: 'Foods',
      component: () => import('@/components/Foods.vue'),
    },
    {
      path: '/snacks',
      name: 'Snack',
      component: () => import('@/components/Snack.vue'),
    },
    {
      path: '/tembei',
      name: 'Tembei',
      component: () => import('@/components/Tembei.vue'),
    },
    {
      path: '/item/:id',
      name: 'item',
      component: Item,
    },
    {
      path: '/tem/:id',
      name: 'tem',
      component: Tem,
    },
    {
      path: '/Ack/:id',
      name: 'ack',
      component: Ack,
    },
    {
      path: '/thoughts',
      name: 'Thoughts',
      component: Thoughts,
    },
    {
      path: '/baby',
      name: 'Baby',
      component: Baby,
    },
    {
      path: '/outer',
      name: 'Outer',
      component: Outer,
    },
    {
      path: '/diet',
      name: 'Diet',
      component: Diet,
    },
  ],
});
